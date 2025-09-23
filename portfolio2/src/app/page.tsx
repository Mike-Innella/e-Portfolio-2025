import type { Metadata } from "next";
import s from "./home.module.css";
import { site } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.name} · ${site.tagline}`,
};

export default function HomePage() {
  return (
    <section className={`section ${s.hero}`}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.badge}>Portfolio</div>

          <h1 className={s.title}>{site.name}</h1>

          <p className={s.tagline}>{site.tagline}</p>

          <p className={s.lead}>
            I design and build fast, accessible web apps with a clean UI and a
            pragmatic, ship-first mindset.
          </p>

          <div className={s.ctaRow}>
            <Link href="/projects" className={`${s.btn} ${s.primary}`}>
              View Projects
            </Link>
            <Link href="/contact" className={`${s.btn} ${s.secondary}`}>
              Contact Me
            </Link>
          </div>

          <ul className={s.socials} aria-label="Social links">
            {site.socials.map((soc) => (
              <li key={soc.name}>
                <a
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.socialLink}
                >
                  {soc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
