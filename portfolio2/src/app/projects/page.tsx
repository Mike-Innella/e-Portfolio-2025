import gridStyles from "./projects.module.css";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Mike Innella",
  description: "Selected work and experiments",
};

export default function ProjectsPage() {
  return (
    <section className={`${gridStyles.section} ${gridStyles.grid}`}>
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          subtitle={p.subtitle}
          summary={p.summary}
          tags={p.tags}
          image={p.image}
          href={`/projects/${p.slug}`}
        />
      ))}
    </section>
  );
}
