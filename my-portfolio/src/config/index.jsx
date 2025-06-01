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
    extraClass: "",
    notInMenu: false,
    content: (
      <>
        {" "}
        {ProjectsConfig.projects.map((project, index) => (
          <div key={`project-${index}`}>
            {" "}
            <div className="w-full m-w-7xl pr-[14rem]">
              <h3 style={{ fontSize: "1.4rem" }}>
                {" "}
                {project.icon} {project.name}{" "}
              </h3>{" "}
              <p>{project.description}</p>{" "}
            </div>
            <div className="pr-[14rem]" style={{ textAlign: "right" }}>
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
    extraClass: "about-section section-reverse",
    content: (
      <>
        <GlassSwipe />
        <div className="flex">
          <h4 className="text-[2rem] font-[600] text-right ml-auto pb-4">
            who am i ?
          </h4>
        </div>
        <div className="flex w-full pl-[12rem] justify-start align-start flex-col gap-4">
          <p>
            I’m a frontend developer passionate about building web experiences
            that are not just functional, but genuinely enjoyable to use. I
            thrive on combining modern JavaScript technologies with thoughtful,
            clean design to craft interfaces that “just work”—and feel great in
            the process. My approach blends technical problem-solving with a
            creative eye, always aiming for those little details that make an
            application <span className="italic"> flow</span> from start to
            finish.
          </p>
          <p>
            What excites me most about web development is how it brings together
            creativity, curiosity, and real impact. My journey into this field
            started with a desire to understand how things work, and it’s
            evolved into a drive to make digital products people love. I’m
            always looking to learn something new, help a teammate, and push my
            skills further—because great products come from constant growth and
            true collaboration.
          </p>
          <p>
            Away from the screen, I love experimenting with audio engineering,
            staying active at the gym, and making memories with my loved ones.
            Whether I’m mixing tracks or catching up with somebody, I find that
            life outside of code keeps me creative and grounded.
          </p>
        </div>
        <div className="flex mx-0 justify-end">
          <h4 className="text-[2rem] font-[600] text-right ml-auto py-4">
            tech stack
          </h4>
        </div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            gap: "2rem",
            alignItems: "right",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          {techStack.map((key) => (
            <span className="tech-icon-glass" key={key} title={key}>
              {Icons[key]}
            </span>
          ))}
        </div>
      </>
    ),
  },

  // TODO: Add a reviews section when we have testimonials.
  // {
  //   name: "reviews",
  //   headerIcon: <MdRateReview />,
  //   content: (
  //     <>
  //       {" "}
  //       <h4 style={{ fontSize: "2rem" }}>
  //         {" "}
  //         {Icons["helpoutline"]} what do others say?{" "}
  //       </h4>{" "}
  //       {/* Insert review content here */}{" "}
  //     </>
  //   ),
  // },

  {
    name: "contact",
    headerIcon: <MdDescription />,
    extraClass: "contact-section",
    content: (
      <>
        {" "}
        <>
          <div className="flex flex-row gap-[20rem]">
            <ContactForm /> <GlowingLogo />
          </div>
        </>
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
