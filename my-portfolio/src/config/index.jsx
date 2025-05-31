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
  projects: [
    {
      name: "Skinstric.AI",
      icon: Icons["web"],
      description:
        "Developed a core segment of the Skinstric.AI project, focusing on implementing seamless camera functionality, integrating multiple external APIs, and building a custom React component to enhance the user interface and overall user experience.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/Mike-Innella/Skinstric.AI-Mike_Innella_Internship",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://skinstric-ai-mike-innella-internship.vercel.app/",
          icon: Icons["link"],
        },
      ],
    },

    {
      name: "Howard Motor Webapp",
      icon: Icons["gearblock"],
      description:
        "A modern, mobile-friendly website for Howard Motor Corp, designed to streamline appointment bookings, display business info, and showcase customer reviews. Built with React and Firebase, the app features a dynamic admin dashboard, secure EmailJS-powered contact system, and a user-focused UI for both customers and staff.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/Mike-Innella/howard-motor-webapp",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://howard-motor-webapp.vercel.app/",
          icon: Icons["link"],
        },
      ],
    },
    {
      name: "NFT Marketplace",
      icon: Icons["market"], // <-- Added missing comma
      description:
        "Redesigned the NFT Marketplace website as a single-page application (SPA), implementing a fully responsive layout, enhancing the user interface, and optimizing site performance to deliver a seamless and engaging user experience.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/Mike-Innella/nft-marketplace--MIke_Innella-Internship",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app/",
          icon: Icons["link"],
        },
      ],
    },

    {
      name: "OMDB Movie Store",
      icon: Icons["store"],
      description:
        "A feature-rich React web app for movie lovers, integrating the OMDB API to enable instant movie searches, browse top-rated picks, and discover recent releases. The platform offers a visually appealing, fully responsive UI built with styled components, intuitive navigation, and dynamic movie details to create a seamless browsing experience across devices.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/Mike-Innella/OMDBProject",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://mike-innella.github.io/OMDBProject/",
          icon: Icons["link"],
        },
      ],
    },

    {
      name: "Fweather",
      icon: Icons["weather"],
      description:
        "A playful React web app that fetches real-time weather and a fun fact for any location. Search by city or use auto-locate for instant info, powered by dual APIs and a clean, responsive UI.",
      links: [
        {
          tooltip: "See source",
          link: "https://github.com/Mike-Innella/Fweather",
          icon: Icons["code"],
        },
        {
          tooltip: "See app",
          link: "https://mike-innella.github.io/Fweather/",
          icon: Icons["link"],
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
        <div className="w-full h-auto flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <ContactForm />
          </div>
          <div className="mx-auto flex flex-row gap-[2rem] ml-[12rem]">
            <GlowingLogo />
          </div>
        </div>
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
