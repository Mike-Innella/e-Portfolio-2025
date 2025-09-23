import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

type Params = { params: { slug: string } };

export default function ProjectDetail({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <article className="section">
      <h1
        style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {project.title}
      </h1>

      {project.subtitle ? (
        <p style={{ fontSize: "1.6rem", opacity: 0.8, marginBottom: "1rem" }}>
          {project.subtitle}
        </p>
      ) : null}

      <p style={{ fontSize: "1.8rem", marginBottom: "1.6rem" }}>
        {project.description}
      </p>

      {project.tags?.length ? (
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1.6rem",
          }}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "0.6rem",
                padding: "0.4rem 0.8rem",
                fontSize: "1.4rem",
                opacity: 0.8,
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {project.links?.length ? (
        <div style={{ display: "flex", gap: "1.2rem" }}>
          {project.links.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "1.6rem",
                textDecoration: "underline",
              }}
              title={link.tooltip}
            >
              {link.type === "code" ? "Code ↗" : "Live ↗"}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
