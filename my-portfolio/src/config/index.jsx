import React from "react";
import { Icons } from "./icons";
import {
  MdComputer,
  MdInfo,
  MdRateReview,
  MdDescription,
  MdEmail,
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
  { key: "html", label: "HTML5" },
  { key: "css", label: "CSS3" },
  { key: "tailwind", label: "Tailwind CSS" },
  { key: "nodejs", label: "Node.js" },
  { key: "git", label: "Git" },
  { key: "javascript", label: "JavaScript" },
  { key: "react", label: "React" },
  { key: "vite", label: "Vite" },
  { key: "firebase", label: "Firebase" },
  { key: "figma", label: "Figma" },
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
        <div className="flex w-full pl-[12rem] justify-start align-start flex-col gap-4 mt-4 max-lg:pl-0 max-lg:pr-12 max-sm:pr-0">
          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            I’m a frontend developer who’s passionate about creating web
            experiences that go beyond function—they should feel good to use.
            <br />
            <br />
            I thrive on blending modern JavaScript with clean, thoughtful design
            to build interfaces that “just work.”
            <br />
            <br />
            My approach combines technical problem-solving with a creative eye,
            always focusing on the small details that help an application{" "}
            <span className="italic">flow</span> smoothly from start to finish.
          </p>

          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            What draws me to web development is how it fuses creativity,
            curiosity, and real-world impact.
            <br />
            <br />
            I started with a desire to understand how things work, but it’s
            grown into a passion for building digital products that people
            genuinely enjoy.
            <br />
            <br />
            I’m always eager to learn, help teammates, and level up—because
            great products come from collaboration and continuous growth.
          </p>

          <p className="max-lg:text-left w-full max-sm:mr-0 max-sm:ml-0 max-sm:pr-8">
            Outside the screen, I spend time experimenting with audio
            engineering, staying active at the gym, and making memories with my
            loved ones.
            <br />
            <br />
            Whether I’m mixing tracks or catching up with someone, the world
            beyond code keeps me grounded—and fuels my creativity.
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
          className="technologies__wrapper mt-4 grid grid-cols-5 gap-8 w-full m-0 p-0 ml-24 max-lg:ml-0 max-lg:pr-20 max-sm:grid-cols-4 max-sm:gap-12 max-sm:pr-0 max-sm:ml-0 max-sm:mx-auto"
          style={{
            display: "grid",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <>
            {techStack.map(({ key, label }) => (
              <div
                className="tech-label-wrapper relative flex flex-col items-center w-fit p-2 m-0"
                key={key}
              >
                <div className="tech__container aspect-square flex items-center justify-center">
                  <div className="tech-icon-glass aspect-square text-[2rem] flex items-center justify-center">
                    {Icons[key]}
                  </div>
                </div>
                <span className="tech-label absolutebottom-24 justify-center items-center w-full text-center text-sm font-medium opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out">
                  {label}
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
    headerIcon: <MdEmail />,
    extraClass:
      "contact-section w-full  max-md:mx-auto max-sm:px-0 max-sm:ml-0 max-sm:mr-0 max-md:section-reverse max-md:mt-8 max-lg:justify-center max-lg:items-center",
    content: (
      <>
        <div className="flex flex-row-reverse w-full gap-68 max-lg:flex-col max-lg:gap-0">
          <ContactForm /> <GlowingLogo />
        </div>
      </>
    ),
  },

  {
    name: "Resume",
    headerIcon: <MdDescription />,
    hideHeader: true,
    extraClass:
      "resume-section flex w-full justify-center items-center mx-auto flex-col gap-4",
    content: (
      <div className="flex justify-center items-center">
        <a
          href="/Michael-Innella-Resume-2025.pdf"
          download
          className="flex items-center gap-2 bg-[#fff] text-[#222] dark:bg-[#222] dark:text-[#fff] px-6 py-4 rounded-md shadow hover:scale-105 transition duration-300 ease-in-out text-lg font-medium max-sm:mr-8 resume__download--button"
        >
          <MdDescription className="text-xl" />
          Download Resume
        </a>
      </div>
    ),
  },
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
