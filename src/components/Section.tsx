// src/components/Section.tsx
import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="my-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <div>{children}</div>
        </section>
    );
}
  