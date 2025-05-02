// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-8 shadow">
      <Link href="/" className="text-2xl font-bold text-blue-600 nav-link">
        About Leo AI
      </Link>
      <div className="space-x-4">
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="https://github.com/xiangyshi" className="nav-link">GitHub</Link>
        <Link href="https://www.linkedin.com/in/xleoshi/" className="nav-link">LinkedIn</Link>
      </div>
    </nav>
  );
}
