"use client";

import React, { useState, useMemo } from "react";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TechStackFilter from "@/components/TechStackFilter";
import projectsData from "@/../public/projects.json";

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  techStack: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
  tags: string[];
}

type SortOption = 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';

export default function Projects() {
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  // Get all unique tech stacks from projects
  const allTechStacks = useMemo(() => {
    const techStacks = new Set<string>();
    projectsData.forEach((project: Project) => {
      project.techStack.forEach(tech => techStacks.add(tech));
    });
    return Array.from(techStacks).sort();
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    // First filter projects
    const filtered = projectsData.filter((project: Project) => {
      // Filter by tech stack
      const matchesTechStack = selectedTechStacks.length === 0 || 
        selectedTechStacks.some(tech => project.techStack.includes(tech));

      // Filter by search query
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesTechStack && matchesSearch;
    });

    // Then sort projects
    return filtered.sort((a: Project, b: Project) => {
      switch (sortBy) {
        case 'date-asc':
          return a.date.localeCompare(b.date) || a.title.localeCompare(b.title);
        case 'date-desc':
          return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [selectedTechStacks, searchQuery, sortBy]);

  return (
    <main className="container mx-auto px-4 py-8">
      <Section title="Projects">
        <div className="prose max-w-none mb-8">
          <p className="text-lg mb-4">
            Here are some of the projects I&apos;ve worked on. Use the filters below to find specific projects.
          </p>
        </div>

        {/* Filter Component */}
        <TechStackFilter
          allTechStacks={allTechStacks}
          selectedTechStacks={selectedTechStacks}
          onTechStackChange={setSelectedTechStacks}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Projects List */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Showing {filteredAndSortedProjects.length} of {projectsData.length} projects
          </p>
          
          {filteredAndSortedProjects.length > 0 ? (
            <div className="space-y-6">
              {filteredAndSortedProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your criteria.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                Try adjusting your search or filter options.
              </p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
} 