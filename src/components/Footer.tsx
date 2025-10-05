import React from 'react';

// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="relative bg-white/80 backdrop-blur-sm border-t border-blue-200 mt-16 shadow-sm">
            <div className="text-center py-8">
                <div className="gradient-text text-lg font-semibold mb-2">
                    Powered by AI ✨
                </div>
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Leo Shi. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>
            
            {/* Subtle border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </footer>
    );
}
  