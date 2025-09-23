import type { Metadata } from "next";
import { site } from "@/content/site";
import s from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className={s.title}>Contact</h1>

        <p className={s.lead}>Have a project or want to chat? I’m all ears.</p>

        <div className={s.actions}>
          <a className={s.primary} href={`mailto:${site.email}`}>
            Email Me
          </a>
          <a
            className={s.secondary}
            href={site.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className={s.resumeWrap}>
          <a className={s.resumeBtn} href={site.resumeHref} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
