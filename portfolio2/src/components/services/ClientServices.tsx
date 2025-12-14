"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import s from "@/app/services/services.module.css";
import btn from "@/styles/buttons.module.css";

export default function ClientServices() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We’ll replace this with GSAP in Phase 2.
    // Keeping it simple for now so the page ships immediately.
  }, []);

  return (
    <section className="section">
      <div className={s.container} ref={rootRef}>
        <header className={s.hero}>
          <div className={s.badge}>Services</div>
          <h1 className={s.title}>What I can build for you.</h1>
          <p className={s.subtitle}>
            Clean, modern sites — plus reliable fixes and integrations that
            actually work in production.
          </p>

          <div className={s.ctaRow}>
            <Link href="/contact" className={`${btn.btn} ${btn.primary}`}>
              Get a quote
            </Link>
            <Link href="/projects" className={`${btn.btn} ${btn.secondary}`}>
              See examples
            </Link>
          </div>
        </header>

        <div className={s.grid}>
          <article className={s.card}>
            <h2 className={s.cardTitle}>Website Creation</h2>
            <p className={s.cardBody}>
              Landing pages and small business sites built for speed, UX, and
              conversions. Responsive, accessible, and deploy-ready.
            </p>
            <ul className={s.list}>
              <li>Next.js / React builds</li>
              <li>SEO + performance pass</li>
              <li>Deploy to Vercel</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2 className={s.cardTitle}>Debugging, Fixes & Support</h2>
            <p className={s.cardBody}>
              Fix layout bugs, broken components, and “it worked yesterday”
              issues — with clear commits and no mystery changes.
            </p>
            <ul className={s.list}>
              <li>UI bugs + responsiveness</li>
              <li>React state / render issues</li>
              <li>Performance + cleanup</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2 className={s.cardTitle}>EmailJS Setup</h2>
            <p className={s.cardBody}>
              Contact forms wired end-to-end so messages actually get delivered,
              with spam mitigation and clean UX.
            </p>
            <ul className={s.list}>
              <li>Email templates + form hookup</li>
              <li>Validation + error states</li>
              <li>Deployment-safe env usage</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2 className={s.cardTitle}>AI Assistants (Tailored)</h2>
            <p className={s.cardBody}>
              Lightweight business assistants for FAQs, lead capture, and
              routing — built to be useful, not gimmicky.
            </p>
            <ul className={s.list}>
              <li>Website embed + UX</li>
              <li>Lead capture workflows</li>
              <li>Safe, scoped knowledge</li>
            </ul>
          </article>
        </div>

        <section className={s.process}>
          <h2 className={s.processTitle}>How it works</h2>
          <div className={s.steps}>
            <div className={s.step}>
              <div className={s.stepNum}>1</div>
              <p>Quick scope + goal alignment</p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>2</div>
              <p>Build + review loop (fast iterations)</p>
            </div>
            <div className={s.step}>
              <div className={s.stepNum}>3</div>
              <p>Launch + handoff + optional support</p>
            </div>
          </div>
        </section>

        <footer className={s.bottomCta}>
          <h3 className={s.bottomTitle}>Want this done this week?</h3>
          <p className={s.bottomBody}>
            Send the site link (or idea) and what “done” looks like.
          </p>
          <Link href="/contact" className={`${btn.btn} ${btn.primary}`}>
            Contact me
          </Link>
        </footer>
      </div>
    </section>
  );
}
