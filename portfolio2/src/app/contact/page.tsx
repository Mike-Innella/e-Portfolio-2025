"use client";

import { useState, useEffect } from "react";
import { site } from "@/content/site";
import s from "./contact.module.css";
import btn from "@/styles/buttons.module.css";
import ContactModal from "@/components/ContactModal";
import { FaLinkedin, FaDownload, FaClock, FaCircle } from "react-icons/fa";

export default function ContactPage() {
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={s.contactHero}>
            {/* Background decorative elements */}
            <div className={s.backgroundPattern}></div>
            <div className={s.floatingShapes}>
              <div className={s.shape1}></div>
              <div className={s.shape2}></div>
              <div className={s.shape3}></div>
            </div>

            <div className={s.titleSection}>
              <h1 className={`${s.title} ${mounted ? s.fadeIn : ''}`}>Contact</h1>
              <div className={s.availability}>
                <FaCircle className={s.statusDot} />
                <span>Available for projects</span>
              </div>
            </div>
            <p className={`${s.lead} ${mounted ? s.fadeIn : ''}`}>Have a project or want to chat? I&apos;m all ears.</p>

            <div className={`${s.primaryCard} ${mounted ? s.slideUp : ''}`}>
              <div className={s.cardGlow}></div>
              <h2 className={s.cardTitle}>Let&apos;s Work Together</h2>
              <p className={s.cardDescription}>
                Ready to bring your ideas to life? Send me a message and let&apos;s discuss your project.
              </p>
              <button
                type="button"
                className={`${btn.btn} ${btn.primary} ${s.ctaButton}`}
                onClick={() => setContactOpen(true)}
              >
                <span className={s.buttonText}>Send a Message</span>
                <div className={s.buttonGlow}></div>
              </button>
              <div className={s.responseTime}>
                <FaClock className={s.clockIcon} />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>

            <div className={s.secondaryGrid}>
              <div className={`${s.actionCard} ${mounted ? s.fadeInLeft : ''}`}>
                <div className={s.cardBorder}></div>
                <div className={s.iconWrapper}>
                  <FaLinkedin className={s.cardIcon} />
                </div>
                <h3 className={s.cardTitle}>Connect on LinkedIn</h3>
                <p className={s.cardDescription}>
                  Let&apos;s connect professionally and expand our networks.
                </p>
                <a
                  className={`${btn.btn} ${btn.secondary} ${s.actionButton}`}
                  href={site.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Connect</span>
                </a>
              </div>

              <div className={`${s.actionCard} ${mounted ? s.fadeInRight : ''}`}>
                <div className={s.cardBorder}></div>
                <div className={s.iconWrapper}>
                  <FaDownload className={s.cardIcon} />
                </div>
                <h3 className={s.cardTitle}>Download Resume</h3>
                <p className={s.cardDescription}>
                  Take a detailed look at my experience and qualifications.
                </p>
                <a className={`${btn.btn} ${btn.secondary} ${s.actionButton}`} href={site.resumeHref} download>
                  <span>Download PDF</span>
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
