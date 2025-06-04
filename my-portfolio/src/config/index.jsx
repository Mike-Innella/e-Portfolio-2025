import React from "react";
import { Icons } from "./icons";
import {
  MdComputer,
  MdInfo,
  MdRateReview,
  MdDescription,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import CircleButton from "../components/CircleButton";
import ContactForm from "../components/ContactForm";
import GlassSwipe from "../ux/GlassSwipe";
import GlowingLogo from "../ux/GlowingLogo";
import ProjectsData from "../locales/ProjectsData";
import ReviewsData from "../locales/ReviewsData";
import FlipCard from "../ux/FlipCard/FlipCard";

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
  tagline: "Frontend Developer | UI Designer",
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
    name: "Projects",
    headerIcon: <MdComputer />,
    extraClass: " mr-48 max-lg:ml-24 max-sm:ml-0 max-sm:mr-8 max-sm:mb-4",
    notInMenu: false,
    content: (
      <>
        <div className="flex flex-wrap gap-8 max-sm:gap-1 justify-center items-center ml-0 pl-0 mx-auto">
          {ProjectsConfig.projects.map((project, index) => (
            <FlipCard
              key={`project-${index}`}
              icon={project.icon}
              name={project.name}
              description={project.description}
              links={project.links}
              techStack={project.techStack}
            />
          ))}
        </div>
      </>
    ),
  },
  {
    name: "About",
    headerIcon: <MdInfo />,
    extraClass: "about-section ml-24 section-reverse",
    content: (
      <>
        <GlassSwipe />
        <div className="flex flex-end justify-end align-end max-lg:align-start max-lg:justify-start">
          <div className="glass-card ">
            <h4 className="text-[2rem] font-[600] text-right max-lg:w-full max-lg:text-left ml-auto">
              Who am I ?
            </h4>
          </div>
        </div>
        <div className="flex w-full pl-[12rem] justify-start align-start flex-col gap-4 max-lg:pl-0 max-lg:pr-12 max-sm:pr-0">
          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            I’m a frontend developer passionate about building web experiences
            that are not just functional, but genuinely enjoyable to use. I
            thrive on combining modern JavaScript technologies with thoughtful,
            clean design to craft interfaces that “just work”—and feel great in
            the process. My approach blends technical problem-solving with a
            creative eye, always aiming for those little details that make an
            application <span className="italic"> flow</span> from start to
            finish.
          </p>
          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            What excites me most about web development is how it brings together
            creativity, curiosity, and real impact. My journey into this field
            started with a desire to understand how things work, and it’s
            evolved into a drive to make digital products people love. I’m
            always looking to learn something new, help a teammate, and push my
            skills further—because great products come from constant growth and
            true collaboration.
          </p>
          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            Away from the screen, I love experimenting with audio engineering,
            staying active at the gym, and making memories with my loved ones.
            Whether I’m mixing tracks or catching up with somebody, I find that
            life outside of code keeps me creative and grounded.
          </p>
        </div>
        <div className="flex mx-0 justify-end max-lg:justify-start mt-8">
          <div className="glass-card">
            <h4 className="text-[2rem] font-[600] text-right ml-auto max-lg:w-full max-lg:text-left">
              Technologies
            </h4>
          </div>
        </div>
        <div
          className="technologies__wrapper grid grid-cols-5 gap-8 w-full m-0 p-0 ml-24 max-lg:ml-0 max-lg:pr-20 max-sm:grid-cols-4 max-sm:gap-12 max-sm:pr-0 max-sm:ml-0 max-sm:mx-auto"
          style={{
            display: "grid",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <>
            {techStack.map((key) => (
              <div
                className="tech__container aspect-square w-fit p-2 m-0 flex justify-center align-center"
                key={key}
              >
                <span
                  className="tech-icon-glass aspect-square mx-auto text-[2rem]"
                  title={key}
                >
                  {Icons[key]}
                </span>
              </div>
            ))}
          </>
        </div>
      </>
    ),
  },

  {
    name: "Reviews",
    headerIcon: <MdRateReview />,
    extraClass: "reviews-section max-lg:ml-24 max-md:mt-8 max-sm:ml-2",
    notInMenu: false,
    content: (
      <>
        <div className="pr-[12rem] pl-8 max-lg:pr-24 max-sm:pr-4 max-sm:pl-0 ">
          <div className="glass-card">
            <h4 style={{ fontSize: "2rem" }}>What do others say?</h4>
          </div>
          <div className="flex flex-col gap-8 pt-6">
            {ReviewsData.map((review, idx) => (
              <div
                key={`review-${idx}`}
                className="review__card border-l-4 pl-8 border-accent p-4 rounded-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <p className="italic text-lg leading-relaxed">
                  "{review.review.trim()}"
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  <span className="font-semibold">{review.name}</span>
                  {review.title && (
                    <span className="text-sm text-gray-400">
                      {review.title}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{review.date}</span>

                  {review.linkedin && (
                    <a
                      href={review.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review__link transition duration-300 ease-in-out hover:underline text-sm mt-1 inline-flex items-center gap-1"
                    >
                      <FaLinkedin />
                      View LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },

  {
    name: "Contact",
    headerIcon: <MdDescription />,
    extraClass:
      "contact-section w-full  max-md:mx-auto max-sm:px-0 max-sm:ml-0 max-sm:mr-0 max-md:section-reverse max-md:mt-8 max-lg:justify-center max-lg:items-center",
    content: (
      <>
        <div className="flex flex-row-reverse w-full gap-68 max-lg:flex-col max-lg:gap-0">
          <ContactForm className="" /> <GlowingLogo />
        </div>
      </>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
