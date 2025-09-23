import s from "./ProjectsPage.module.css";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Mike Innella",
  description: "Selected work and experiments",
};

export default function ProjectsPage() {
  return (
    <section className={`${s.section} ${s.grid}`}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} p={p} />
      ))}
    </section>
  );
}
