// src/icons.jsx
import {
  MdComputer,
  MdInfo,
  MdHelpOutline,
  MdMap,
  MdCode,
  MdLink,
  MdWeb,
  MdMail,
  MdLocalMovies,
} from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuSunMedium } from "react-icons/lu";

const ICON_SIZE = 37;

const Icons = {
  // Social/Section icons (react-icons)
  email: <MdMail size={ICON_SIZE} />,
  facebook: <FaFacebook size={ICON_SIZE} />,
  twitter: <FaTwitter size={ICON_SIZE} />,
  github: <FaGithub size={ICON_SIZE} />,
  linkedin: <FaLinkedin size={ICON_SIZE} />,
  projects: <MdComputer size={ICON_SIZE} />,
  about: <MdInfo size={ICON_SIZE} />,
  helpoutline: <MdHelpOutline size={ICON_SIZE} />,
  map: <MdMap size={ICON_SIZE} />,
  code: <MdCode size={ICON_SIZE} />,
  link: <MdLink size={ICON_SIZE} />,
  web: <MdWeb size={ICON_SIZE} />,
  weather: <TiWeatherPartlySunny size={ICON_SIZE} />,
  gearblock: <BsBuildingFillGear size={ICON_SIZE} />,
  market: <FaShoppingBasket size={ICON_SIZE} />,
  store: <MdLocalMovies size={ICON_SIZE} />,
  sun: <LuSunMedium size={ICON_SIZE} />,

  // Tech Stack (ALL SVG CDN images)
  html: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      alt="HTML5"
      title="HTML5"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  css: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      alt="CSS3"
      title="CSS3"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  tailwind: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      alt="Tailwind CSS"
      title="Tailwind CSS"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  nodejs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      title="Node.js"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  git: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      alt="Git"
      title="Git"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  javascript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      alt="JavaScript"
      title="JavaScript"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  react: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      alt="React"
      title="React"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  vite: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
      alt="Vite"
      title="Vite"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  firebase: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
      alt="Firebase"
      title="Firebase"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),
  figma: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      alt="Figma"
      title="Figma"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),

  typescript: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      alt="TypeScript"
      title="TypeScript"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),

  api: (
    <img
      src="https://icons.getbootstrap.com/assets/icons/cloud-arrow-down.svg"
      alt="API Integration"
      title="API Integration"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
        filter: "invert(80%) sepia(90%) saturate(1000%) hue-rotate(160deg)",
        textShadow: "0 0 1px #000", // subtle blue
      }}
    />
  ),

  emailjs: (
    <img
      src="https://icons.getbootstrap.com/assets/icons/envelope.svg"
      alt="EmailJS"
      title="EmailJS"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
        textShadow: "0 0 1px #000",
      }}
    />
  ),

  routing: (
    <img
      src="https://icons.getbootstrap.com/assets/icons/signpost-split.svg"
      alt="Dynamic Routing"
      title="Dynamic Routing"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
      }}
    />
  ),

  threejs: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
      alt="Three.js"
      title="Three.js"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        verticalAlign: "middle",
        display: "inline-block",
        filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(2) contrast(2)",
      }}
    />
  ),
};

export { Icons };
