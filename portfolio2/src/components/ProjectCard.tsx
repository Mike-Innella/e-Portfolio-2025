import Link from "next/link";
import type { Project } from "@/content/projects";
import s from "./ProjectCard.module.css";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className={s.card}>
      <h3 className={s.title}>
        <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        {p.subtitle ? <> · {p.subtitle}</> : null}
      </h3>

      <p className={s.text}>{p.description}</p>

      {p.tags?.length ? (
        <ul className={s.tags} aria-label="Tech stack">
          {p.tags.map((t) => (
            <li key={t} className={s.tag}>
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {p.links?.length ? (
        <div className={s.actions}>
          {p.links.map((l) => (
            <a
              key={l.link}
              href={l.link}
              target="_blank"
              rel="noreferrer"
              className={s.link}
              aria-label={l.tooltip}
              title={l.tooltip}
            >
              {l.type === "code" ? "Code ↗" : "Live ↗"}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
