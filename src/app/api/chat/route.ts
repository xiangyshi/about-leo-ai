export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

function getBackendConfig() {
  // Prefer explicit BACKEND_URL; allow fallback to NEXT_PUBLIC_BACKEND_URL only as a last resort
  const rawUrl =
    process.env.BACKEND_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "";
  const normalizedUrl =
    rawUrl && rawUrl !== "undefined" && rawUrl !== "null"
      ? rawUrl.replace(/\/+$/, "")
      : "";

  const apiKey =
    process.env.BACKEND_API_KEY ||
    process.env.API_KEY ||
    process.env.NEXT_PUBLIC_BACKEND_API_KEY ||
    "";

  return { backendUrl: normalizedUrl, apiKey };
}

export async function POST(req: NextRequest) {
  const { backendUrl, apiKey } = getBackendConfig();
  const debug =
    process.env.CHAT_PROXY_DEBUG === "1" ||
    process.env.CHAT_PROXY_DEBUG === "true";
  const requestId = `r${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  if (!backendUrl) {
    return NextResponse.json(
      { error: "Server misconfigured: BACKEND_URL is not set" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));
    const upstreamUrl = `${backendUrl}/api/chat`;
    if (debug) {
      console.info(
        `[chat-proxy] start id=${requestId} upstreamUrl=${upstreamUrl} apiKeyPresent=${Boolean(
          apiKey
        )}`
      );
    }
    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { "x-api-key": apiKey } : {}),
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "";
    const maybeJson =
      contentType.includes("application/json") ? safeParseJson(text) : null;

    if (debug) {
      console.info(
        `[chat-proxy] done  id=${requestId} status=${upstream.status} body=${truncate(
          text,
          2000
        )}`
      );
    }

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error: "Upstream error",
          upstreamStatus: upstream.status,
          upstreamUrl,
          details: maybeJson ?? truncate(text, 1000),
        },
        { status: upstream.status }
      );
    }

    return NextResponse.json(maybeJson ?? { ok: true });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : String(error);
    console.error(`[chat-proxy] error id=${requestId}:`, message);
    return NextResponse.json(
      { error: "Failed to reach backend", message },
      { status: 502 }
    );
  }
}

function safeParseJson(text: string): unknown | null {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max) + "…[truncated]" : text;
}

// Debug probe to verify resolved backend URL from the browser.
// Only responds when CHAT_PROXY_DEBUG is enabled; otherwise returns 404.
export async function GET() {
  const { backendUrl, apiKey } = getBackendConfig();
  const debug =
    process.env.CHAT_PROXY_DEBUG === "1" ||
    process.env.CHAT_PROXY_DEBUG === "true";
  if (!debug) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
  return NextResponse.json({
    ok: true,
    backendUrl,
    apiKeyPresent: Boolean(apiKey),
  });
}
