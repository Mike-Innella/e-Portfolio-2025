import s from "./ProjectsPage.module.css";
import gridStyles from "./projects.module.css";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Mike Innella",
  description: "Selected work and experiments",
};

export default function ProjectsPage() {
  return (
    <section className={`${s.section} ${gridStyles.grid}`}>
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          subtitle={p.subtitle}
          description={p.description}
          tags={p.tags}
          image={p.image}
          href={`/projects/${p.slug}`}
        />
      ))}
    </section>
  );
}
