"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getTechColors } from "@/lib/getTechColor";
import type { ProjectLink } from "@/content/projects";
import s from "./ProjectCard.module.css";

type Props = {
  title: string;
  subtitle?: string;
  summary: string;
  tags?: string[];
  thumbnailUrl: string;
  href: string;
  links?: ProjectLink[];
};

export default function ProjectCard({
  title, subtitle, summary, tags = [], thumbnailUrl, href, links = [],
}: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const liveLink = links.find((link) => link.type === "live");
  const codeLink = links.find((link) => link.type === "code");

  return (
    <article className={s.card} aria-label={title}>
      <Link href={href} className={s.cardMain}>
        <div className={s.thumb}>
          <figure className={`${s.thumbFigure} ${s.glass}`}>
            {imageFailed ? (
              <div className={s.thumbFallback} aria-hidden="true">
                <span className={s.thumbFallbackText}>{title}</span>
              </div>
            ) : (
              <Image
                src={thumbnailUrl}
                alt={`${title} thumbnail`}
                width={1200}
                height={630}
                className={s.thumbImg}
                loading="lazy"
                unoptimized
                sizes="(max-width: 48rem) 100vw, 50vw"
                onError={() => setImageFailed(true)}
              />
            )}
          </figure>
        </div>

        <div className={s.body}>
          <h3 className={s.title}>{title}</h3>
          {subtitle ? <p className={s.subtitle}>{subtitle}</p> : null}
          <p className={s.desc}>{summary}</p>
          {tags.length ? (
            <div className={s.tags}>
              {tags.map((t) => {
                const colors = getTechColors(t);
                return (
                  <span
                    key={t}
                    className={s.tag}
                    style={{
                      '--tag-color': colors.background,
                      '--tag-text': colors.text
                    } as React.CSSProperties}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      </Link>

      <div className={s.actions}>
        <Link href={href} className={s.actionPrimary}>
          Details
        </Link>
        {liveLink ? (
          <a
            href={liveLink.link}
            target="_blank"
            rel="noreferrer"
            className={s.action}
          >
            Live
          </a>
        ) : null}
        {codeLink ? (
          <a
            href={codeLink.link}
            target="_blank"
            rel="noreferrer"
            className={s.action}
          >
            Code
          </a>
        ) : null}
      </div>
    </article>
  );
}
