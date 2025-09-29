"use client";
import Link from "next/link";
import Image from "next/image";
import { getTechColor } from "@/lib/getTechColor";
import s from "./ProjectCard.module.css";

type Props = {
  title: string;
  subtitle?: string;
  summary: string;
  tags?: string[];
  image?: string;
  href: string;
};

export default function ProjectCard({
  title, subtitle, summary, tags = [], image, href,
}: Props) {
  const Card = (
    <article className={s.card} aria-label={title}>
      {/* Image area = full card width, glass anchored here */}
      <div className={s.thumb}>
        <figure className={`${s.thumbFigure} ${s.glass}`}>
          <Image
            src={image || "/images/placeholders/project-fallback.png"}
            alt={`${title} preview`}
            width={1920}
            height={1080}
            className={s.thumbImg}
            loading="lazy"
            quality={60}
            sizes="(max-width: 48rem) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </figure>
      </div>

      <div className={s.body}>
        <h3 className={s.title}>{title}</h3>
        {subtitle ? <p className={s.subtitle}>{subtitle}</p> : null}
        <p className={s.desc}>{summary}</p>
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
