// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import ChatWindow from "@/components/chat/ChatWindow";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <div className="mt-8">
        <ChatWindow />
      </div>
    </div>
  );
}
