// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-blue-50/90 to-purple-50/90 backdrop-blur-sm border-b border-gradient-to-r from-blue-200 to-purple-200 shadow-lg">
      <div className="flex justify-between items-center px-4 sm:px-8 py-6">
        <Link href="/" className="text-2xl font-bold gradient-text nav-link hover:scale-105 transition-transform duration-300">
          About Leo AI
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="nav-link hover:text-purple-600 hover:bg-purple-100/80 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg px-3 py-2">Home</Link>
          <Link href="/about" className="nav-link hover:text-purple-600 hover:bg-purple-100/80 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg px-3 py-2">About</Link>
          <Link href="/projects" className="nav-link hover:text-purple-600 hover:bg-purple-100/80 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg px-3 py-2">Projects</Link>
          <Link href="https://github.com/xiangyshi" className="nav-link hover:text-purple-600 hover:bg-purple-100/80 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg px-3 py-2">GitHub</Link>
          <Link href="https://www.linkedin.com/in/xleoshi/" className="nav-link hover:text-purple-600 hover:bg-purple-100/80 hover:shadow-md hover:scale-105 transition-all duration-300 rounded-lg px-3 py-2">LinkedIn</Link>
        </div>
      </div>
      
      {/* Gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 via-purple-400 to-transparent"></div>
    </nav>
  );
}
