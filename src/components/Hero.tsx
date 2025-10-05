// src/components/Hero.tsx
import React from "react";

export default function Hero() {
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
                        
                        <div className="typing-animation text-xl text-blue-600 font-mono">
                            Ask me anything about my journey...
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Subtle floating particles */}
            <div className="absolute inset-0 -z-10">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}
  