import React from "react";
import { Icons } from "./icons";
import {
  MdSettingsInputAntenna,
  MdWbIridescent,
  MdBusinessCenter,
  MdComputer,
  MdInfo,
  MdRateReview,
  MdDescription,
} from "react-icons/md";
import CircleButton from "../components/CircleButton";
import ContactForm from "../components/ContactForm";
import GlassSwipe from "../ux/GlassSwipe";
import GlowingLogo from "../ux/GlowingLogo";
import ProjectsData from "../locales/ProjectsData";
import ReviewsData from "../locales/ReviewsData";

const techStack = [
  "html",
  "css",
  "tailwind",
  "nodejs",
  "git",
  "javascript",
  "react",
  "vite",
  "firebase",
  "figma",
];

// --- CONFIGURABLE TEXT BEGINS HERE ---

const CommonConfig = {
  name: "Michael Innella",
  tagline: "frontend developer | ui designer",
  signature: {
    viewBox: "0 0 100 100",
  },
  email: "mainnella@gmail.com",
  social: [
    {
      name: "GitHub",
      link: "https://github.com/Mike-Innella",
      icon: Icons["github"],
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/michael-innella-b5567021b/",
      icon: Icons["linkedin"],
    },
    {
      name: "Email",
      link: "mailto:mainnella@gmail.com",
      icon: Icons["email"],
    },
  ],
};

const ProjectsConfig = {
  name: "projects",
  headerIcon: <MdComputer />,
  extraClass: "",
  projects: ProjectsData, // <-- use the imported data!
};

const CustomSectionsConfig = [
  {
    name: "projects",
    headerIcon: <MdComputer />,
    extraClass: "ml-24",
    notInMenu: false,
    content: (
      <>
        {" "}
        {ProjectsConfig.projects.map((project, index) => (
          <div key={`project-${index}`}>
            {" "}
            <div className="w-full m-w-7xl pr-[14rem] max-lg:pr-[4rem]">
              <h3 style={{ fontSize: "1.4rem" }}>
                {" "}
                {project.icon} {project.name}{" "}
              </h3>{" "}
              <p>{project.description}</p>{" "}
            </div>
            <div
              className="pr-[14rem] max-lg:pr-[4rem]"
              style={{ textAlign: "right" }}
            >
              {" "}
              {project.links.map((link, linkIndex) => (
                <CircleButton
                  className="hover:scale-125"
                  key={`project-link-${index}${linkIndex}`}
                  link={link.link}
                  target="_blank"
                  tooltip={link.tooltip}
                  size={2.5}
                >
                  {" "}
                  {link.icon}{" "}
                </CircleButton>
              ))}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </>
    ),
  },
  {
    name: "about",
    headerIcon: <MdInfo />,
    extraClass: "about-section ml-24 section-reverse",
    content: (
      <>
        <GlassSwipe />
        <div className="flex">
          <h4 className="text-[2rem] font-[600] text-right max-lg:w-full max-lg:text-left ml-auto pb-4">
            who am i ?
          </h4>
        </div>
        <div className="flex w-full pl-[12rem] justify-start align-start flex-col gap-4 max-lg:pl-0 max-lg:pr-12">
          <p className="max-lg:text-left">
            I’m a frontend developer passionate about building web experiences
            that are not just functional, but genuinely enjoyable to use. I
            thrive on combining modern JavaScript technologies with thoughtful,
            clean design to craft interfaces that “just work”—and feel great in
            the process. My approach blends technical problem-solving with a
            creative eye, always aiming for those little details that make an
            application <span className="italic"> flow</span> from start to
            finish.
          </p>
          <p className="max-lg:text-left">
            What excites me most about web development is how it brings together
            creativity, curiosity, and real impact. My journey into this field
            started with a desire to understand how things work, and it’s
            evolved into a drive to make digital products people love. I’m
            always looking to learn something new, help a teammate, and push my
            skills further—because great products come from constant growth and
            true collaboration.
          </p>
          <p className="max-lg:text-left">
            Away from the screen, I love experimenting with audio engineering,
            staying active at the gym, and making memories with my loved ones.
            Whether I’m mixing tracks or catching up with somebody, I find that
            life outside of code keeps me creative and grounded.
          </p>
        </div>
        <div className="flex mx-0 justify-end">
          <h4 className="text-[2rem] font-[600] text-right ml-auto py-4 max-lg:w-full max-lg:text-left">
            tech stack
          </h4>
        </div>
        <div
          className="grid grid-cols-5 gap-8 m-0 p-0 ml-24 max-lg:ml-0 max-lg:pr-20"
          style={{
            fontSize: "2rem",
            display: "grid",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {techStack.map((key) => (
            <span
              className="tech-icon-glass aspect-square mx-auto"
              key={key}
              title={key}
            >
              {Icons[key]}
            </span>
          ))}
        </div>
      </>
    ),
  },

  {
    name: "reviews",
    headerIcon: <MdRateReview />,
    extraClass: "reviews-section max-lg:ml-24",
    notInMenu: false,
    content: (
      <>
        <div className="pr-[12rem] max-lg:pr-24">
          <h4 style={{ fontSize: "2rem" }}>what do others say?</h4>
          <div className="flex flex-col gap-8 pt-6">
            {ReviewsData.map((review, idx) => (
              <div
                key={`review-${idx}`}
                className="border-l-4 pl-6 border-accent"
              >
                <p className="italic text-lg leading-relaxed">
                  “{review.review.trim()}”
                </p>
                <div className="mt-2 flex flex-col">
                  <span className="font-semibold">{review.name}</span>
                  {review.title && (
                    <span className="text-sm text-gray-400">
                      {review.title}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },

  {
    name: "contact",
    headerIcon: <MdDescription />,
    extraClass: "contact-section max-lg:ml-24 section-reverse",
    content: (
      <>
        {" "}
        <>
          <div className="flex flex-row-reverse gap-[16rem] max-lg:flex-col max-lg:gap-0">
            <ContactForm className="w-full" /> <GlowingLogo />
          </div>
        </>
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
