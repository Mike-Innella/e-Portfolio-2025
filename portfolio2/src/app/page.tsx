"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import s from "./home.module.css";
import btn from "@/styles/buttons.module.css";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import Link from "next/link";
import ContactModal from "@/components/ContactModal/ContactModal";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

// Lazy load heavy components with loading spinner
const ProximityGrid = dynamic(
  () => import("@/components/ProximityGrid/ProximityGrid"),
  {
    ssr: false,
    loading: () => <LoadingSpinner size="small" message="" />,
  }
);

const TerminalTypewriter = dynamic(
  () => import("@/components/TerminalTypewriter/TerminalTypewriter"),
  {
    ssr: false,
    loading: () => <LoadingSpinner size="small" message="Loading..." />,
  }
);

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [expertiseVisible, setExpertiseVisible] = useState(false);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const recentProjects = projects.slice(0, 4); // Get first 4 projects

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpertiseVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (expertiseRef.current) {
      observer.observe(expertiseRef.current);
    }

    return () => {
      if (expertiseRef.current) {
        observer.unobserve(expertiseRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Fullscreen background grid - positioned outside container constraints */}
      <div className={s.gridBackground} aria-hidden="true">
        <ProximityGrid
          /* rows/cols removed for responsive fit */
          cellSizePx={8}
          gapPx={48}
          radiusPx={120}
          maxScale={1.5}
          maxTranslatePx={6}
          baseColorHex="#0e0e0e"
          hotColorHex="#3f8cff"
        />
        <div className={s.gridFade} aria-hidden="true" />
      </div>

      {/* Hero content - respects container constraints */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.inner}>
            <div className={s.badge}>Portfolio</div>

            <TerminalTypewriter />

            <div className={s.ctaRow}>
              <Link href="/projects" className={`${btn.btn} ${btn.primary}`}>
                View Projects
              </Link>
              <Link href="/contact" className={`${btn.btn} ${btn.secondary}`}>
                Contact Me
              </Link>
            </div>

            <ul className={s.socials} aria-label="Social links">
              {site.socials.map((soc) => {
                const isEmail = soc.name.toLowerCase() === "email";
                const isGithub = soc.name.toLowerCase() === "github";
                const isLinkedin = soc.name.toLowerCase() === "linkedin";

                let IconComponent = null;
                if (isGithub) IconComponent = FaGithub;
                else if (isLinkedin) IconComponent = FaLinkedin;
                else if (isEmail) IconComponent = HiMail;

                return (
                  <li key={soc.name}>
                    {isEmail ? (
                      <button
                        type="button"
                        onClick={() => setContactOpen(true)}
                        className={s.socialIcon}
                        aria-label={`${soc.name} - Open contact modal`}
                        aria-haspopup="dialog"
                        aria-controls="contactTitle"
                      >
                        {IconComponent && <IconComponent />}
                      </button>
                    ) : (
                      <a
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.socialIcon}
                        aria-label={`${soc.name} - Open in new tab`}
                      >
                        {IconComponent && <IconComponent />}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <button
          className={s.scrollHint}
          onClick={() =>
            document
              .getElementById("recent-projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll to projects"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* My Expertise section */}
      <section
        className={s.expertiseSection}
        aria-labelledby="expertise-title"
        ref={expertiseRef}
      >
        <div className="container">
          <div
            className={`${s.expertiseCard} ${
              expertiseVisible ? s.expertiseCardVisible : ""
            }`}
          >
            <div className={s.expertiseGlow}></div>
            <h2 id="expertise-title" className={s.expertiseTitle}>
              My Expertise
            </h2>
            <p className={s.expertiseContent}>
              Full-stack developer with a strong focus on frontend engineering
              and user experience. I build modern web applications using React,
              Next.js, and TypeScript, with hands-on experience taking projects
              from concept to deployment. My strength is designing clean,
              responsive interfaces that feel intuitive to use, while also
              wiring up the backend logic needed to make them fast, reliable,
              and scalable. I’m also a strong advocate for accessibility and
              user-centered design, ensuring that my applications are inclusive
              and usable by everyone. I’m comfortable working across the
              stack—from database schemas and API integrations to crafting
              polished UI components and thoughtful UX flows. I put emphasis on
              maintainable code, practical performance optimizations, and
              keeping projects production-ready with modern tools and best
              practices. What drives me is creating applications that not only
              work well but feel seamless to interact with.
            </p>
          </div>
        </div>
      </section>

      {/* Recent projects section */}
      <section
        id="recent-projects"
        className={s.recentSection}
        aria-labelledby="recent-projects-title"
      >
        <div className="container">
          <h2 id="recent-projects-title" className={s.recentTitle}>
            Recent projects.
          </h2>

          <div className={s.recentGrid} role="list">
            {recentProjects.map((project) => (
              <div role="listitem" key={project.slug} className={s.recentItem}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  summary={project.summary}
                  tags={project.tags}
                  image={project.image}
                  href={`/projects/${project.slug}`}
                />
              </div>
            ))}
          </div>

          {/* View all projects link */}
          <p className={s.viewAllWrapper}>
            <Link href="/projects" className={s.viewAllLink}>
              View all projects →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
