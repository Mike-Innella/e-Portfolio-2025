"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TechGrid from "@/components/TechGrid/TechGrid";
import s from "@/app/about/about.module.css";

export default function ClientAbout() {
  const [isVisible, setIsVisible] = useState<boolean[]>(
    new Array(4).fill(false)
  );
  const heroRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Trigger hero animation immediately
    setTimeout(() => {
      setIsVisible((prev) => {
        const newVisible = [...prev];
        newVisible[0] = true;
        return newVisible;
      });
    }, 100);

    // Set up intersection observers for text blocks
    const observers = blocksRef.current.map((block, index) => {
      if (!block) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[index + 1] = true;
                return newVisible;
              });
            }, index * 150); // Stagger delay
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(block);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="section">
      <div className={s.container}>
        {/* Animated background pattern */}
        <div className={s.backgroundPattern} aria-hidden="true">
          <div className={s.gradientOrb1}></div>
          <div className={s.gradientOrb2}></div>
          <div className={s.gradientOrb3}></div>
        </div>

        {/* Hero Section */}
        <div
          ref={heroRef}
          className={`${s.hero} ${isVisible[0] ? s.heroVisible : ""}`}
        >
          <div className={s.headshotContainer}>
            <div className={s.headshotGlow}></div>
            <Image
              src="/images/headshot.png"
              alt="Profile"
              width={250}
              height={250}
              className={s.headshot}
              priority
            />
          </div>

          <h1 className={s.title}>About</h1>
          <p className={s.subtitle}>
            Full-Stack Developer & Creative Problem Solver
          </p>
        </div>

        {/* Content Blocks */}
        <div className={s.content}>
          <div
            ref={(el) => {
              blocksRef.current[0] = el;
            }}
            className={`${s.block} ${isVisible[1] ? s.blockVisible : ""}`}
          >
            <p>
              I&apos;m a full-stack developer based in{" "}
              <strong>Richmond, Virginia</strong>, with a strong focus on
              frontend engineering and user experience. I believe the best web
              applications aren&apos;t just functional—they should feel intuitive,
              responsive, and enjoyable to use. My strength is taking modern
              JavaScript frameworks and pairing them with clean, thoughtful
              design so that interfaces don&apos;t just work, they <em>flow</em>.
            </p>
          </div>

          <div
            ref={(el) => {
              blocksRef.current[1] = el;
            }}
            className={`${s.block} ${isVisible[2] ? s.blockVisible : ""}`}
          >
            <p>
              What really drives me is the mix of problem-solving and
              creativity. I enjoy taking an idea from concept all the way to
              deployment, making sure the logic under the hood is solid while
              also polishing the details on the surface. Whether I&apos;m shaping
              backend features or dialing in the UI, I approach projects with
              curiosity, collaboration, and a constant push to grow my skills.
            </p>
          </div>

          <div
            ref={(el) => {
              blocksRef.current[2] = el;
            }}
            className={`${s.block} ${isVisible[3] ? s.blockVisible : ""}`}
          >
            <p>
              Outside of code, I dive into audio engineering, stay active at the
              gym, and spend time with the people I care about. Those parts of
              my life keep me grounded, spark creativity, and often give me
              fresh perspective on the work I build on screen.
            </p>
          </div>
        </div>

        <TechGrid />
      </div>
    </section>
  );
}
