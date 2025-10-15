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
            Hi! I&apos;m Leo, a passionate full-stack developer and data engineer with a strong focus on building innovative solutions that bridge the gap between modern web technologies and intelligent data processing.
          </p>
          <p className="text-lg mb-4">
            With experience spanning from hackathon-winning AI applications to large-scale bioinformatics research, I specialize in creating end-to-end solutions that combine React/Next.js frontends with Python-based ML pipelines and cloud infrastructure.
          </p>
          <p className="text-lg mb-4">
            I&apos;m particularly passionate about leveraging AI and machine learning to solve real-world problems, whether that&apos;s optimizing genomic algorithms for research institutions or building intelligent analytics dashboards for educational platforms.
          </p>
        </div>
      </Section>
      
      <Section title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Frontend</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                React.js / Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                TailwindCSS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Backend</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Node.js / Express.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Python / Flask / Django
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                REST APIs / GraphQL
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Data & AI</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                PyTorch / NumPy / Pandas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                OpenAI API / LangChain
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Hugging Face
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Cloud & DevOps</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                AWS / Azure
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Docker / CI/CD
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                PostgreSQL / MongoDB
              </li>
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