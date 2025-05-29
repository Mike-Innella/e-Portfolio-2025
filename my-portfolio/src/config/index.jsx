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

// --- CONFIGURABLE TEXT BEGINS HERE ---

const CommonConfig = {
  addFreePalestine: false,
  name: "Your Name",
  tagline: "your tagline here",
  signature: {
    viewBox: "0 0 100 100",
    signaturePathD: `...`, // Keep your SVG path
  },
  email: "your.email@example.com",
  social: [
    {
      name: "GitHub",
      link: "https://github.com/yourusername",
      icon: Icons["github"],
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
      icon: Icons["linkedin"],
    },
    {
      name: "Twitter",
      link: "https://twitter.com/yourusername",
      icon: Icons["twitter"],
    },
    {
      name: "Email",
      link: "mailto:your.email@example.com",
      icon: Icons["email"],
    },
    {
      name: "CV",
      link: "https://your-cv-link.com/",
      icon: <MdDescription />,
    },
  ],
};

const ProjectsConfig = {
  name: "projects",
  headerIcon: <MdComputer />,
  extraClass: "",
  projects: [
    {
      name: "Project 1",
      icon: Icons["map"],
      description: "Description of project 1.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/example/project1",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://project1.com/",
          icon: Icons["link"],
        },
      ],
    },
    {
      name: "Project 2",
      icon: <MdSettingsInputAntenna />,
      description: "Description of project 2.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/example/project2",
          icon: Icons["code"],
        },
      ],
    },
    // ...more projects
  ],
};

const CustomSectionsConfig = [
  {
    name: "projects",
    headerIcon: <MdComputer />,
    extraClass: "",
    notInMenu: false,
    content: (
      <>
        {ProjectsConfig.projects.map((project, index) => (
          <div key={`project-${index}`}>
            <h3 style={{ fontSize: "1.4rem" }}>
              {project.icon} {project.name}
            </h3>
            <p>{project.description}</p>
            <div style={{ textAlign: "right" }}>
              {project.links.map((link, linkIndex) => (
                <CircleButton
                  key={`project-link-${index}${linkIndex}`}
                  link={link.link}
                  target="_blank"
                  tooltip={link.tooltip}
                  size={1.4}
                >
                  {link.icon}
                </CircleButton>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    name: "about",
    headerIcon: <MdInfo />,
    extraClass: "about-section section-reverse",
    content: (
      <>
        <h4>{Icons["helpoutline"]} who is this?</h4>
        <p>Your about section goes here.</p>
        <h4>{Icons["code"]} programming</h4>
        <p className="programming-icons">
          {Icons["java"]}
          {Icons["cpp"]}
          {Icons["typescript"]}
          {Icons["javascript"]}
        </p>
        <h4>{Icons["web"]} web</h4>
        <p className="programming-icons">
          {Icons["graphql"]}
          {Icons["mysql"]}
          {Icons["php"]}
          {Icons["mongodb"]}
          {Icons["nodejs"]}
          {Icons["react"]}
          {Icons["angular"]}
        </p>
      </>
    ),
  },
  {
    name: "reviews",
    headerIcon: <MdRateReview />,
    content: (
      <>
        <h4 style={{ fontSize: "2em" }}>
          {Icons["helpoutline"]} what do others say?
        </h4>
        {/* Insert review content here */}
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
