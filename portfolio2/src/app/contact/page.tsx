"use client";

import { useState } from "react";
import { site } from "@/content/site";
import s from "./contact.module.css";
import btn from "@/styles/buttons.module.css";
import ContactModal from "@/components/ContactModal";
import { FaLinkedin, FaDownload } from "react-icons/fa";

export default function ContactPage() {
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={s.contactHero}>
            <h1 className={s.title}>Contact</h1>
            <p className={s.lead}>Have a project or want to chat? I&apos;m all ears.</p>

            <div className={s.primaryCard}>
              <h2 className={s.cardTitle}>Let&apos;s Work Together</h2>
              <p className={s.cardDescription}>
                Ready to bring your ideas to life? Send me a message and let&apos;s discuss your project.
              </p>
              <button
                type="button"
                className={`${btn.btn} ${btn.primary}`}
                onClick={() => setContactOpen(true)}
              >
                Send a Message
              </button>
            </div>

            <div className={s.secondaryGrid}>
              <div className={s.actionCard}>
                <FaLinkedin className={s.cardIcon} />
                <h3 className={s.cardTitle}>Connect on LinkedIn</h3>
                <p className={s.cardDescription}>
                  Let&apos;s connect professionally and expand our networks.
                </p>
                <a
                  className={`${btn.btn} ${btn.secondary}`}
                  href={site.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect
                </a>
              </div>

              <div className={s.actionCard}>
                <FaDownload className={s.cardIcon} />
                <h3 className={s.cardTitle}>Download Resume</h3>
                <p className={s.cardDescription}>
                  Take a detailed look at my experience and qualifications.
                </p>
                <a className={`${btn.btn} ${btn.secondary}`} href={site.resumeHref} download>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
