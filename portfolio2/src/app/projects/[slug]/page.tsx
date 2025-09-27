import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import s from "./ProjectDetail.module.css";

type Params = { params: Promise<{ slug: string }> };

const getTechColor = (tech: string): string => {
  const colors: Record<string, string> = {
    'html': '#e34c26',
    'css': '#1572b6', 
    'javascript': '#f1e05a',
    'typescript': '#3178c6',
    'react': '#61dafb',
    'nodejs': '#68a063',
    'firebase': '#ffca28',
    'tailwind': '#06b6d4',
    'api': '#9333ea',
    'threejs': '#ffffff',
    'emailjs': '#ff6b6b',
    'routing': '#64748b'
  };
  return colors[tech.toLowerCase()] || '#64748b';
};

export default async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className={s.container}>
      <Link href="/projects" className={s.backButton}>
        ← Back to Projects
      </Link>

      <article>
        <div className={s.hero}>
          <h1 className={s.title}>{project.title}</h1>
          {project.subtitle && (
            <p className={s.subtitle}>{project.subtitle}</p>
          )}
          <p className={s.description} style={{ lineHeight: 1.6 }}>{project.details}</p>
        </div>

        {project.tags?.length ? (
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Tech Stack</h2>
            <div className={s.tags}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={s.tag}
                  style={{ '--tag-color': getTechColor(tag) } as React.CSSProperties}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        {project.links?.length ? (
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Project Links</h2>
            <div className={s.links}>
              {project.links.map((link) => (
                <a
                  key={link.link}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.link} ${link.type === 'code' ? s.secondary : ''}`}
                  title={link.tooltip}
                >
                  {link.type === "code" ? "View Code" : "Live Demo/Site"}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </div>
  );
}
