import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { getTechColors } from "@/lib/getTechColor";
import ProjectGallery from "@/components/ProjectGallery/ProjectGallery";
import Stat from "@/components/Stat/Stat";
import s from "./ProjectDetail.module.css";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) return {};
  
  const title = `${project.title} — Mike Innella Portfolio`;
  const description = project.summary || project.details?.slice(0, 140);
  const images = project.cover ? [project.cover] : project.image ? [project.image] : [];
  
  return {
    title,
    description,
    openGraph: { 
      title, 
      description, 
      images,
      type: "article" 
    },
    twitter: { 
      card: "summary_large_image", 
      title, 
      description, 
      images 
    }
  };
}

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

        {/* Two-column layout */}
        <div className={s.grid}>
          {/* Main content column */}
          <div className={s.main}>
            {/* Highlights Section */}
            {project.highlights?.length ? (
              <section className={s.section}>
                <h2 className={s.sectionTitle}>Key Highlights</h2>
                <div className={s.cardish}>
                  <ul className={s.list}>
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className={s.listItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : null}

            {/* Problem & Solution Grid */}
            {(project.problem || project.solution) && (
              <div className={s.sectionGrid}>
                {/* Problem Section */}
                {project.problem && (
                  <section className={s.section}>
                    <h2 className={`${s.sectionTitle} ${s.problem}`}>Problem</h2>
                    <div className={`${s.cardish} ${s.problem}`}>
                      <p className={s.prose}>{project.problem}</p>
                    </div>
                  </section>
                )}

                {/* Solution Section */}
                {project.solution && (
                  <section className={s.section}>
                    <h2 className={`${s.sectionTitle} ${s.solution}`}>Solution</h2>
                    <div className={`${s.cardish} ${s.solution}`}>
                      <p className={s.prose}>{project.solution}</p>
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* Challenge & Technical Solution Grid */}
            {(project.challenge || project.technicalSolution) && (
              <div className={s.sectionGrid}>
                {/* Challenge Section */}
                {project.challenge && (
                  <section className={s.section}>
                    <h2 className={`${s.sectionTitle} ${s.challenge}`}>Technical Challenge</h2>
                    <div className={`${s.cardish} ${s.challenge}`}>
                      <p className={s.prose}>{project.challenge}</p>
                    </div>
                  </section>
                )}

                {/* Technical Solution Section */}
                {project.technicalSolution && (
                  <section className={s.section}>
                    <h2 className={`${s.sectionTitle} ${s.technical}`}>Technical Solution</h2>
                    <div className={`${s.cardish} ${s.technical}`}>
                      <p className={s.prose}>{project.technicalSolution}</p>
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* Results Section */}
            {project.results?.length ? (
              <section className={s.section}>
                <h2 className={s.sectionTitle}>Results</h2>
                <div className={s.cardish}>
                  <ul className={s.list}>
                    {project.results.map((item, idx) => (
                      <li key={idx} className={s.listItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : null}

            {/* Tech Stack */}
            {project.tags?.length ? (
              <section className={s.section}>
                <h2 className={s.sectionTitle}>Tech Stack</h2>
                <div className={s.tags}>
                  {project.tags.map((tag) => {
                    const colors = getTechColors(tag);
                    return (
                      <span
                        key={tag}
                        className={s.tag}
                        style={{ 
                          '--tag-color': colors.background,
                          '--tag-text': colors.text 
                        } as React.CSSProperties}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {/* Links */}
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
          </div>

          {/* Sidebar */}
          {(project.stats?.length || project.media?.length) ? (
            <aside className={s.aside}>
              {/* Quick Stats Section - Compact */}
              {project.stats?.length ? (
                <section className={`${s.section} ${s.compactStats}`}>
                  <h2 className={`${s.sectionTitle} ${s.compactTitle}`}>Quick Stats</h2>
                  <div className={`${s.cardish} ${s.statsCard}`}>
                    {project.stats.map((stat, idx) => (
                      <Stat key={idx} label={stat.label} value={stat.value} />
                    ))}
                  </div>
                </section>
              ) : null}
              
              {/* Gallery Section */}
              {project.media?.length ? (
                <section className={s.section}>
                  <h2 className={s.sectionTitle}>Gallery</h2>
                  <ProjectGallery media={project.media} />
                </section>
              ) : null}
            </aside>
          ) : null}
        </div>
      </article>
    </div>
  );
}
