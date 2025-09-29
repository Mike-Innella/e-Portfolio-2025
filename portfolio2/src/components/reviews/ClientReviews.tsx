"use client";

import { useEffect, useRef, useState } from "react";
import s from "@/app/reviews/ReviewsPage.module.css";
import { reviews } from "@/content/reviews";
import { FaLinkedin } from "react-icons/fa";

export default function ClientReviews() {
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(reviews.length).fill(false));
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150); // Stagger delay
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardElement: HTMLDivElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardElement.style.setProperty('--rotate-x', `${rotateX}deg`);
    cardElement.style.setProperty('--rotate-y', `${rotateY}deg`);
    cardElement.style.setProperty('--mouse-x', `${x}px`);
    cardElement.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (cardElement: HTMLDivElement) => {
    cardElement.style.setProperty('--rotate-x', '0deg');
    cardElement.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <section className="section">
      <div className="container">
        <div className={s.reviewsHero}>
          {/* Animated background pattern */}
          <div className={s.backgroundPattern} aria-hidden="true">
            <div className={s.gradientOrb1}></div>
            <div className={s.gradientOrb2}></div>
            <div className={s.gradientOrb3}></div>
          </div>

          <h1 className={s.title}>Reviews</h1>
          <p className={s.lead}>
            Real feedback from teams I&apos;ve shipped with.
          </p>

          <div className={s.grid}>
            {reviews.map((r, i) => (
              <div 
                key={i} 
                ref={el => { cardsRef.current[i] = el; }}
                className={`${s.card} ${isVisible[i] ? s.cardVisible : ''}`}
                onMouseMove={(e) => {
                  const card = cardsRef.current[i];
                  if (card) handleMouseMove(e, card);
                }}
                onMouseLeave={() => {
                  const card = cardsRef.current[i];
                  if (card) handleMouseLeave(card);
                }}
                style={{
                  '--card-index': i,
                } as React.CSSProperties}
              >
                <div className={s.cardGlow}></div>
                <div className={s.cardContent}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
