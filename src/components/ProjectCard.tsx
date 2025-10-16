import React from "react";
import Image from "next/image";
import Link from "next/link";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Project Image */}
        <div className="relative w-full md:w-96 h-48 md:h-auto bg-white dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={192}
            className="object-contain max-w-full max-h-full"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        {/* Project Content */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700 flex-1">
          {/* Title and Date */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
              {project.title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
              {project.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 font-medium"
              >
                View Demo
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-purple-500 hover:bg-purple-600 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 font-medium"
              >
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
