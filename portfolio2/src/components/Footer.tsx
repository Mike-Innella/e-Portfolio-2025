import Image from "next/image";
import Link from "next/link";
import s from "./Footer.module.css";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.root}>
      <div className={`container ${s.inner}`}>
        {/* Branding */}
        <div className={s.branding}>
          <div className={s.logoWrap}>
        
            <div className={s.brandText}>
              <strong className={s.name}>{site.name}</strong>
              <span className={s.tagline}>{site.tagline}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={s.nav} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href={site.resumeHref} target="_blank" rel="noreferrer">
            Resume
          </Link>
        </nav>

        {/* Socials */}
        <div className={s.socials}>
          {site.socials.map((scl) => (
            <a
              key={scl.name}
              href={scl.href}
              target={scl.href.startsWith("http") ? "_blank" : undefined}
              rel={scl.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={scl.name}
              className={s.socialLink}
              title={scl.name}
            >
              <span className={s.socialDot} aria-hidden />
              <span className={s.socialText}>{scl.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={`container ${s.bottomRow}`}>
        <p className={s.credit}>
          Built with Next.js & TypeScript
        </p>
        <p className={s.copy}>© {year} {site.name}. All Rights Reserved.</p>
        <Link href={site.linkedinHref} target="_blank" rel="noreferrer" className={s.subtleLink}>
          Let&apos;s connect on LinkedIn
        </Link>
      </div>
    </footer>
  );
}
