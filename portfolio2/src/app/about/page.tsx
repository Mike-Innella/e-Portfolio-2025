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
            I’m a frontend developer who’s passionate about creating web
            experiences that go beyond function—they should feel good to use. I
            thrive on blending modern JavaScript with clean, thoughtful design
            to build interfaces that “just work.” My approach combines technical
            problem-solving with a creative eye, always focusing on the small
            details that help an application <em>flow</em> smoothly from start
            to finish.
          </p>
        </div>

        <div className={s.block}>
          <p>
            What draws me to web development is how it fuses creativity,
            curiosity, and real-world impact. I started with a desire to
            understand how things work, but it’s grown into a passion for
            building digital products that people genuinely enjoy. I’m always
            eager to learn, help teammates, and level up—because great products
            come from collaboration and continuous growth.
          </p>
        </div>

        <div className={s.block}>
          <p>
            Outside the screen, I spend time experimenting with audio
            engineering, staying active at the gym, and making memories with my
            loved ones. Whether I’m mixing tracks or catching up with someone,
            the world beyond code keeps me grounded—and fuels my creativity.
          </p>
        </div>

        <h2 className={s.h2}>Technologies</h2>
        <TechGrid />
      </div>
    </section>
  );
}
