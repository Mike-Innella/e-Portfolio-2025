import type { Metadata } from "next";
import TechGrid from "@/components/TechGrid";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am and how I work.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className={s.title}>About</h1>

        <div className={s.block}>
          <p>
            I’m a full-stack developer with a strong focus on frontend
            engineering and user experience. I believe the best web applications
            aren’t just functional— they feel intuitive, responsive, and
            enjoyable to use. My strength lies in combining modern JavaScript
            frameworks with clean, thoughtful design to create interfaces that
            not only work well but <em>flow</em> seamlessly.
          </p>
        </div>

        <div className={s.block}>
          <p>
            What excites me most about development is the balance of
            problem-solving and creativity. I love taking an idea from concept
            to deployment, refining both the logic under the hood and the polish
            on the surface. Whether I’m architecting backend features or
            perfecting UI details, I approach projects with curiosity,
            collaboration, and a drive to continuously grow my skills.
          </p>
        </div>

        <div className={s.block}>
          <p>
            Beyond the keyboard, I explore audio engineering, stay active at the
            gym, and spend time with my loved ones. These experiences outside of
            tech keep me grounded, inspire creativity, and often bring fresh
            perspective to the work I build on screen.
          </p>
        </div>

        <TechGrid />
      </div>
    </section>
  );
}
