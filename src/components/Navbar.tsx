// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-white/80 backdrop-blur-sm border-b border-blue-200 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 py-6">
        <Link href="/" className="text-2xl font-bold gradient-text nav-link hover:scale-105 transition-transform duration-300">
          About Leo AI
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="https://github.com/xiangyshi" className="nav-link">GitHub</Link>
          <Link href="https://www.linkedin.com/in/xleoshi/" className="nav-link">LinkedIn</Link>
        </div>
      </div>
      
      {/* Subtle border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
    </nav>
  );
}
