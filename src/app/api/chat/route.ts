import { NextRequest, NextResponse } from "next/server";

function getBackendConfig() {
  // Prefer explicit BACKEND_URL; fallback to legacy or NEXT_PUBLIC if misconfigured
  const rawUrl = process.env.BACKEND_URL;
  const normalizedUrl = rawUrl && rawUrl !== "undefined" && rawUrl !== "null"
    ? rawUrl.replace(/\/+$/, "")
    : "";

  const apiKey = process.env.API_KEY;

  return { backendUrl: normalizedUrl, apiKey };
}

export async function POST(req: NextRequest) {
  const { backendUrl, apiKey } = getBackendConfig();

  if (!backendUrl) {
    return NextResponse.json(
      { error: "Server misconfigured: BACKEND_URL is not set" },
      { status: 500 }
    );
  }

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server misconfigured: API_KEY is not set" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const upstream = await fetch(`${backendUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { "x-api-key": apiKey } : {}),
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    console.error("Proxy /api/chat error:", error);
    return NextResponse.json(
      { error: "Failed to reach backend" },
      { status: 502 }
    );
  }
}
