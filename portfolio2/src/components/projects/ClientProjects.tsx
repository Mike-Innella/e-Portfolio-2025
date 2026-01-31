"use client";

import { useState, useEffect, useMemo } from "react";
import gridStyles from "@/app/projects/projects.module.css";
import { projects, type Project } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import MatrixRain from "@/components/MatrixRain/MatrixRain";
import { getProjectThumbnailUrl } from "@/lib/getProjectThumbnailUrl";

export default function ClientProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Create a map of technology variations for smart matching
  const techVariations = useMemo(() => {
    const variations = new Map<string, string[]>();
    
    // Add common variations and abbreviations
    variations.set("nextjs", ["next.js", "next", "nextjs"]);
    variations.set("react", ["react", "reactjs", "react.js"]);
    variations.set("typescript", ["typescript", "ts"]);
    variations.set("javascript", ["javascript", "js"]);
    variations.set("nodejs", ["node", "nodejs", "node.js"]);
    variations.set("express", ["express", "expressjs", "express.js"]);
    variations.set("threejs", ["three", "threejs", "three.js"]);
    variations.set("html", ["html", "html5"]);
    variations.set("css", ["css", "css3"]);
    variations.set("tailwind", ["tailwind", "tailwindcss", "tailwind css"]);
    variations.set("firebase", ["firebase", "firestore"]);
    variations.set("supabase", ["supabase", "supa"]);
    variations.set("api", ["api", "apis", "rest", "restful"]);
    
    return variations;
  }, []);

  // Enhanced search function
  const searchProjects = (project: Project, query: string) => {
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    
    // If no search query, return true
    if (searchTerms.length === 0 || searchTerms[0] === "") return true;
    
    // Check if ALL search terms match (AND logic)
    return searchTerms.every(term => {
      // Direct field matching
      const inTitle = project.title.toLowerCase().includes(term);
      const inSubtitle = project.subtitle?.toLowerCase().includes(term) || false;
      const inSummary = project.summary.toLowerCase().includes(term);
      const inDetails = project.details.toLowerCase().includes(term);
      
      // Check year if term is a number
      const yearMatch = project.year && term.match(/^\d{4}$/) && 
                       project.year.toString() === term;
      
      // Smart technology matching
      let inTags = false;
      
      // Check direct tag match
      inTags = project.tags.some((tag: string) => 
        tag.toLowerCase().includes(term)
      );
      
      // If not found directly, check variations
      if (!inTags) {
        for (const [key, variations] of techVariations) {
          if (variations.some(v => v.includes(term))) {
            inTags = project.tags.some((tag: string) => 
              tag.toLowerCase() === key.toLowerCase()
            );
            if (inTags) break;
          }
        }
      }
      
      // Check project type keywords
      const projectTypeMatch = 
        (term === "freelance" && project.subtitle?.toLowerCase().includes("freelance")) ||
        (term === "independent" && project.subtitle?.toLowerCase().includes("independent")) ||
        (term === "internship" && project.subtitle?.toLowerCase().includes("internship"));
      
      return inTitle || inSubtitle || inSummary || inDetails || 
             inTags || yearMatch || projectTypeMatch;
    });
  };

  // Filter projects based on enhanced search
  const filteredProjects = useMemo(() => {
    return projects.filter(project => searchProjects(project, searchQuery));
  }, [searchQuery]);

  const clearSearch = () => {
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
                placeholder="Search projects (e.g. react, freelance, 2024)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={gridStyles.searchInput}
                aria-label="Search projects by title, technology, or type"
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
            
            {/* Search hints */}
            {searchQuery === "" && (
              <div className={gridStyles.searchHints}>
                <p className={gridStyles.searchHintText}>
                  Try: &ldquo;react&rdquo;, &ldquo;next.js&rdquo;, &ldquo;freelance&rdquo;, &ldquo;2024&rdquo;, or combine terms like &ldquo;typescript api&rdquo;
                </p>
              </div>
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
                tags={p.tags.slice(0, 5)}
                thumbnailUrl={getProjectThumbnailUrl(p.slug)}
                href={`/projects/${p.slug}`}
                links={p.links}
              />
            </div>
          ))
        ) : (
          <div className={gridStyles.noResults}>
            <p className={gridStyles.noResultsText}>
              No projects match your search
            </p>
            <button
              onClick={clearSearch}
              className={gridStyles.resetButton}
              type="button"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </>
  );
}
