"use client";

import Image from "next/image";
import s from "./TechGrid.module.css";
import { techStack } from "@/content/tech";
import { iconPaths } from "@/content/iconPaths";

export default function TechGrid() {
  return (
    <section className={s.wrap} aria-labelledby="tech-heading">
      <h2 id="tech-heading" className={s.heading}>Technologies</h2>
      <ul className={s.grid} role="list">
        {techStack.map((t) => {
          const src = iconPaths[t.key];
          if (!src) console.warn(`[TechGrid] Missing icon path for key: ${t.key}`);
          return (
            <li key={t.key} className={s.item}>
              <div className={s.cardWrap}>
                <button type="button" className={s.card} aria-label={t.label}>
                  <span className={s.icon}>
                    <Image
                      src={src ?? "/icons/fallback.svg"}
                      alt=""
                      width={40}
                      height={40}
                      draggable={false}
                      loading="lazy"
                    />
                  </span>
                  <span className={s.swipe} aria-hidden="true" />
                </button>

                {/* Label is OUTSIDE the card (right side). */}
                <span className={s.outLabel} aria-hidden="true">
                  {t.label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
