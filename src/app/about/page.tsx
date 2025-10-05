"use client";

import React, { useState } from "react";
import Section from "@/components/Section";

export default function About() {
  const [selectedResume, setSelectedResume] = useState<'swe' | 'research'>('swe');

  return (
    <main className="container mx-auto px-4 py-8">
      <Section title="About Me">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Hi! I&apos;m Leo, a passionate developer focused on building innovative solutions.
          </p>
          <p className="text-lg mb-4">
            I specialize in full-stack development and data/ML engineering, creating end-to-end solutions
            that combine modern web technologies with intelligent data processing.
          </p>
        </div>
      </Section>
      
      <Section title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js / Python</li>
              <li>APIs & Microservices</li>
              <li>SQL / NoSQL Databases</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Data & ML</h3>
            <ul className="list-disc list-inside">
              <li>Machine Learning</li>
              <li>Data Processing</li>
              <li>AI Integration</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Resume">
        <div className="mb-6">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSelectedResume('swe')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedResume === 'swe'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white ai-glow'
                  : 'bg-white border border-blue-200 text-gray-700 hover:bg-blue-50'
              }`}
            >
              💻 Full-Stack + Data/ML
            </button>
            <button
              onClick={() => setSelectedResume('research')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedResume === 'research'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white ai-glow'
                  : 'bg-white border border-blue-200 text-gray-700 hover:bg-blue-50'
              }`}
            >
              🔬 Research Focus
            </button>
          </div>
        </div>
        
        <div className="gradient-border">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-blue-200">
              <h3 className="text-lg font-semibold gradient-text text-center">
                {selectedResume === 'swe' ? 'Full-Stack + Data/ML Resume' : 'Research Resume'}
              </h3>
            </div>
            <div className="w-full h-[1150px]">
              <iframe
                src={`/${selectedResume === 'swe' ? 'Xiangyu_Shi_resume.pdf' : 'Xiangyu_Shi_resume_research.pdf'}#navpanes=0&zoom=100`}
                className="w-full h-full border-0"
                title={`Leo's ${selectedResume === 'swe' ? 'Full-Stack + Data/ML' : 'Research'} Resume`}
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 