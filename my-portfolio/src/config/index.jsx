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
            <h3 style={{ fontSize: "1.4rem" }}>
              {" "}
              {project.icon} {project.name}{" "}
            </h3>{" "}
            <p>{project.description}</p>{" "}
            <div style={{ textAlign: "right" }}>
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
        <p className="flex justify-start align-start w-full">
          I build web applications using modern JavaScript technologies and
          enjoy creating clean, responsive designs. With a passion for
          problem-solving and attention to detail, I develop solutions that are
          both functional and user-friendly. My approach combines technical
          expertise with creative thinking to deliver high-quality projects that
          meet client needs and exceed expectations.
        </p>
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
