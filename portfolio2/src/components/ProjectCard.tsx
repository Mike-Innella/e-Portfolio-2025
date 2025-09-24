"use client";
import Link from "next/link";
import s from "./ProjectCard.module.css";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  image?: string;
  href: string;
};

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

export default function ProjectCard({
  title, subtitle, description, tags = [], image, href,
}: Props) {
  const Card = (
    <article className={s.card} aria-label={title}>
      <div className={s.media}>
        {image ? <img src={image} alt="" className={s.img} /> : <div className={s.placeholder} />}
        <span className={s.glass} />
        <span className={s.scan} />
      </div>

      <div className={s.body}>
        <h3 className={s.title}>{title}</h3>
        {subtitle ? <p className={s.subtitle}>{subtitle}</p> : null}
        <p className={s.desc}>{description}</p>
        {tags.length ? (
          <div className={s.tags}>
            {tags.map(t => (
              <span 
                key={t} 
                className={s.tag} 
                style={{ '--tag-color': getTechColor(t) } as React.CSSProperties}
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );

  const isExternal = /^https?:\/\//.test(href);
  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer" className={s.linkWrap}>{Card}</a>
  ) : (
    <Link href={href} className={s.linkWrap}>{Card}</Link>
  );
}
