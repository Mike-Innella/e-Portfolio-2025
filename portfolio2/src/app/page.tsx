"use client";

import { useState } from "react";
import s from "./home.module.css";
import btn from "@/styles/buttons.module.css";
import { site } from "@/content/site";
import Link from "next/link";
import ProximityGrid from "@/components/ProximityGrid/ProximityGrid";
import ContactModal from "@/components/ContactModal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      {/* Fullscreen background grid - positioned outside container constraints */}
      <div className={s.gridBackground} aria-hidden="true">
        <ProximityGrid
          /* rows/cols removed for responsive fit */
          cellSizePx={8}
          gapPx={48}
          radiusPx={120}
          maxScale={1.5}
          maxTranslatePx={6}
          baseColorHex="#0e0e0e"
          hotColorHex="#3f8cff"
        />
        <div className={s.gridFade} aria-hidden="true" />
      </div>

      {/* Hero content - respects container constraints */}
      <section className={s.hero}>
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
              <Link href="/projects" className={`${btn.btn} ${btn.primary}`}>
                View Projects
              </Link>
              <Link href="/contact" className={`${btn.btn} ${btn.secondary}`}>
                Contact Me
              </Link>
            </div>

            <ul className={s.socials} aria-label="Social links">
              {site.socials.map((soc) => {
                const isEmail = soc.name.toLowerCase() === "email";
                const isGithub = soc.name.toLowerCase() === "github";
                const isLinkedin = soc.name.toLowerCase() === "linkedin";
                
                let IconComponent = null;
                if (isGithub) IconComponent = FaGithub;
                else if (isLinkedin) IconComponent = FaLinkedin;
                else if (isEmail) IconComponent = HiMail;

                return (
                  <li key={soc.name}>
                    {isEmail ? (
                      <button
                        type="button"
                        onClick={() => setContactOpen(true)}
                        className={s.socialIcon}
                        aria-label={`${soc.name} - Open contact modal`}
                        aria-haspopup="dialog"
                        aria-controls="contactTitle"
                      >
                        {IconComponent && <IconComponent />}
                      </button>
                    ) : (
                      <a
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.socialIcon}
                        aria-label={`${soc.name} - Open in new tab`}
                      >
                        {IconComponent && <IconComponent />}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
