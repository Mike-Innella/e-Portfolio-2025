import type { Metadata } from "next";
import s from "./ReviewsPage.module.css";
import { reviews } from "@/content/reviews";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What clients say about working with me.",
};

export default function ReviewsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className={s.reviewsHero}>
          <h1 className={s.title}>Reviews</h1>
          <p className={s.lead}>
            Real feedback from teams I&apos;ve shipped with.
          </p>

          <div className={s.grid}>
            {reviews.map((r, i) => (
              <div key={i} className={s.card}>
                <header className={s.header}>
                  <div className={s.person}>
                    <div className={s.name}>{r.name}</div>
                    <div className={s.role}>{r.title}</div>
                  </div>
                  {r.linkedin && (
                    <a
                      href={r.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.linkedinLink}
                      aria-label={`View ${r.name} on LinkedIn`}
                    >
                      <FaLinkedin className={s.linkedinIcon} />
                    </a>
                  )}
                </header>

                <p className={s.text}>{r.review}</p>
                
                <footer className={s.footer}>
                  <time className={s.date}>{r.date}</time>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
