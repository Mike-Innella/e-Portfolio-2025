"use client";

import { useState, useEffect, useMemo } from "react";
import gridStyles from "./projects.module.css";
import { projects } from "@/content/projects";
import { techStack } from "@/content/tech";
import ProjectCard from "@/components/ProjectCard";
import MatrixRain from "@/components/MatrixRain/MatrixRain";

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Use tech stack for filter tags
  const allTags = useMemo(() => {
    return techStack.map(tech => tech.label);
  }, []);

  // Filter projects based on selected tags and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));
      
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTags && matchesSearch;
    });
  }, [selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
  };

  // Animated counter effect
  const [displayCount, setDisplayCount] = useState(0);
  
  useEffect(() => {
    const targetCount = filteredProjects.length;
    const duration = 500;
    const steps = 20;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setDisplayCount(targetCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [filteredProjects.length]);

  return (
    <>
      {/* Interactive header section */}
      <section className={gridStyles.header}>
        {/* Matrix rain background effect */}
        <div className={gridStyles.headerBackground} aria-hidden="true">
          <MatrixRain />
          <div className={gridStyles.headerGradient} aria-hidden="true" />
        </div>

        {/* Header content */}
        <div className={gridStyles.headerContent}>
          <div className={gridStyles.badge}>
            {displayCount} {displayCount === 1 ? "Project" : "Projects"}
          </div>
          
          <h1 className={gridStyles.title}>
            <span className={gridStyles.titleText}>Projects</span>
            <span className={gridStyles.titleGlitch} aria-hidden="true">
              Projects
            </span>
          </h1>
          
          <p className={gridStyles.subtitle}>
            Selected work and experiments
          </p>

          {/* Search bar */}
          <div className={gridStyles.searchContainer}>
            <div className={`${gridStyles.searchBox} ${isSearchFocused ? gridStyles.searchFocused : ""}`}>
              <svg 
                className={gridStyles.searchIcon}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={gridStyles.searchInput}
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={gridStyles.clearSearch}
                  aria-label="Clear search"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Tag filters */}
          <div className={gridStyles.filterSection}>
            <div className={gridStyles.tagList}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`${gridStyles.tagButton} ${
                    selectedTags.includes(tag) ? gridStyles.tagActive : ""
                  }`}
                  aria-label={`Filter by ${tag}`}
                  aria-pressed={selectedTags.includes(tag)}
                  type="button"
                >
                  <span className={gridStyles.tagText}>{tag}</span>
                  {selectedTags.includes(tag) && (
                    <span className={gridStyles.tagDot} aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
            
            {(selectedTags.length > 0 || searchQuery) && (
              <button
                onClick={clearFilters}
                className={gridStyles.clearButton}
                aria-label="Clear all filters"
                type="button"
              >
                Clear filters
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className={`${gridStyles.section} ${gridStyles.grid}`}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <div key={p.slug} className={gridStyles.projectItem}>
              <ProjectCard
                title={p.title}
                subtitle={p.subtitle}
                summary={p.summary}
                tags={p.tags}
                image={p.image}
                href={`/projects/${p.slug}`}
              />
            </div>
          ))
        ) : (
          <div className={gridStyles.noResults}>
            <p className={gridStyles.noResultsText}>
              No projects match your filters
            </p>
            <button
              onClick={clearFilters}
              className={gridStyles.resetButton}
              type="button"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
