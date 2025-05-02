import React from "react";
import Section from "@/components/Section";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Section title="About Me">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Hi! I'm Leo, a passionate developer focused on building innovative solutions.
          </p>
          <p className="text-lg mb-4">
            I specialize in web development and love working with modern technologies
            to create engaging user experiences.
          </p>
        </div>
      </Section>
      
      <Section title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL / NoSQL Databases</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
} 