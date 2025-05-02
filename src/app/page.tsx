// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Projects">
        <p>Here&apos;s where I&apos;ll showcase the stuff I&apos;ve built.</p>
      </Section>
    </>
  );
}
