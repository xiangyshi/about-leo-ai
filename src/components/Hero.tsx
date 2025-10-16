"use client";

// src/components/Hero.tsx
import React, { useState, useEffect, useMemo } from "react";

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const fullText = "Ask me anything about my journey...";

    useEffect(() => {
        setIsClient(true);
        
        // Start animation after a short delay to ensure hydration is complete
        setTimeout(() => {
            let index = 0;
            const timer = setInterval(() => {
                if (index < fullText.length) {
                    setDisplayedText(fullText.slice(0, index + 1));
                    setShowCursor(true);
                    index++;
                } else {
                    clearInterval(timer);
                    // Keep cursor visible and blinking
                    setShowCursor(true);
                }
            }, 30); // Adjust speed here

            return () => clearInterval(timer);
        }, 100);
    }, []);

    // Fixed positions for particles to avoid hydration mismatch
    const particlePositions = [
        { left: 20, top: 15, delay: 0.5, duration: 2.8 },
        { left: 80, top: 25, delay: 1.2, duration: 3.2 },
        { left: 15, top: 60, delay: 0.8, duration: 2.5 },
        { left: 75, top: 70, delay: 1.8, duration: 3.5 },
        { left: 45, top: 30, delay: 0.3, duration: 2.9 },
        { left: 90, top: 50, delay: 2.1, duration: 3.1 },
        { left: 25, top: 85, delay: 1.5, duration: 2.7 },
        { left: 65, top: 10, delay: 0.7, duration: 3.3 },
        { left: 35, top: 75, delay: 1.9, duration: 2.6 },
        { left: 85, top: 35, delay: 1.1, duration: 3.4 },
        { left: 10, top: 40, delay: 0.4, duration: 2.8 },
        { left: 55, top: 90, delay: 2.3, duration: 3.0 },
        { left: 70, top: 55, delay: 1.6, duration: 2.4 },
        { left: 30, top: 20, delay: 0.9, duration: 3.2 },
        { left: 95, top: 80, delay: 2.0, duration: 2.9 }
    ];

    // Memoize the floating particles to prevent them from moving during typing animation
    const floatingParticles = useMemo(() => {
        return particlePositions.map((pos, i) => (
            <div
                key={i}
                className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"
                style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    animationDelay: `${pos.delay}s`,
                    animationDuration: `${pos.duration}s`
                }}
            ></div>
        ));
    }, []); // Empty dependency array means this only runs once

    return (
        <section className="relative text-center py-20 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-2xl animate-ping"></div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10">
                <div className="floating mb-8">
                    <h1 className="text-7xl md:text-8xl font-bold mb-6 gradient-text">
                        Hi, I&apos;m Leo
                        <span className="inline-block ml-4 text-6xl md:text-7xl">🤖</span>
                    </h1>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
                        Welcome to my 
                        <span className="gradient-text font-semibold mx-2">AI-powered</span>
                        universe
                    </p>
                    
                    <div className="gradient-border p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
                        <p className="text-lg text-gray-600 mb-6">
                            Discover my work, thoughts, and vision through intelligent conversation
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full border border-blue-300 ai-glow">
                                <span className="text-blue-700 font-medium">✨ AI-Powered</span>
                            </div>
                            <div className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-300 ai-glow-purple">
                                <span className="text-purple-700 font-medium">🚀 Interactive</span>
                            </div>
                            <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-300 ai-glow">
                                <span className="text-blue-700 font-medium">💡 Intelligent</span>
                            </div>
                        </div>
                        
                        <div className="text-xl text-blue-600 font-mono min-h-[1.5rem] flex items-center justify-center">
                            <div className="relative">
                                {/* Ghost text to reserve space including cursor */}
                                <span className="invisible">{fullText}<span className="inline-block w-0.5 h-6 ml-1"></span></span>
                                {/* Actual animated text */}
                                <span className="absolute inset-0">
                                    {isClient ? (
                                        <>
                                            {displayedText}
                                            {showCursor && (
                                                <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse"></span>
                                            )}
                                        </>
                                    ) : (
                                        fullText
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Subtle floating particles */}
            <div className="absolute inset-0 -z-10">
                {floatingParticles}
            </div>
        </section>
    );
}
  