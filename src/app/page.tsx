// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import ChatWindow from "@/components/chat/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-4 pb-8">
        <ChatWindow />
      </div>
    </div>
  );
}
