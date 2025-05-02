// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 shadow">
      <Link href="/" className="text-xl font-bold text-blue-600">
        About Leo AI
      </Link>
      <div className="space-x-4">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="#projects" className="hover:text-blue-600">Projects</Link>
      </div>
    </nav>
  );
}
