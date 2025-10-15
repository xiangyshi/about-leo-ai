import React from "react";

type SortOption = 'date-asc' | 'date-desc' | 'title-asc' | 'title-desc';

interface TechStackFilterProps {
  allTechStacks: string[];
  selectedTechStacks: string[];
  onTechStackChange: (techStacks: string[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function TechStackFilter({
  allTechStacks,
  selectedTechStacks,
  onTechStackChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: TechStackFilterProps) {
  const handleTechStackToggle = (techStack: string) => {
    if (selectedTechStacks.includes(techStack)) {
      onTechStackChange(selectedTechStacks.filter(tech => tech !== techStack));
    } else {
      onTechStackChange([...selectedTechStacks, techStack]);
    }
  };

  const clearAllFilters = () => {
    onTechStackChange([]);
    onSearchChange("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Filter & Sort Projects
      </h3>
      
      {/* Search Bar and Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Projects
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by project name, description, or tags..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Sort Controls */}
        <div className="sm:w-auto sm:flex-shrink-0">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <div className="flex gap-2">
            {/* Date Sort */}
            <button
              onClick={() => onSortChange(sortBy === 'date-desc' ? 'date-asc' : 'date-desc')}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                sortBy.startsWith('date')
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title={sortBy === 'date-desc' ? 'Sort by date (newest first)' : 'Sort by date (oldest first)'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d={sortBy === 'date-desc' ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"} clipRule="evenodd" />
              </svg>
            </button>

            {/* Title Sort */}
            <button
              onClick={() => onSortChange(sortBy === 'title-asc' ? 'title-desc' : 'title-asc')}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                sortBy.startsWith('title')
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              title={sortBy === 'title-asc' ? 'Sort by title (A-Z)' : 'Sort by title (Z-A)'}
            >
              <span className="text-xs font-bold">A-Z</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d={sortBy === 'title-asc' ? "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" : "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"} clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Filter by Tech Stack
        </label>
        <div className="flex flex-wrap gap-2">
          {allTechStacks.map((techStack) => (
            <button
              key={techStack}
              onClick={() => handleTechStackToggle(techStack)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                selectedTechStacks.includes(techStack)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {techStack}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedTechStacks.length > 0 || searchQuery) && (
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
        >
          Clear all filters
        </button>
      )}

      {/* Active Filters Summary */}
      {(selectedTechStacks.length > 0 || searchQuery) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Active filters:{" "}
            {searchQuery && <span className="font-medium">Search: &quot;{searchQuery}&quot;</span>}
            {searchQuery && selectedTechStacks.length > 0 && <span>, </span>}
            {selectedTechStacks.length > 0 && (
              <span className="font-medium">
                Tech stacks: {selectedTechStacks.join(", ")}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
