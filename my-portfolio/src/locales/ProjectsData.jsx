import { Icons } from "../config/icons";

const ProjectsData = [
  {
    name: "Skinstric.AI",
    icon: Icons["web"],
    description:
      "Internship project for Skinstric.AI, working closely with the project lead but handling development and feature implementation primarily solo. Built a React + Three.js analysis portal with seamless camera capture and real-time TensorFlow image processing. Overcame challenging library and API integrations (Axios, vanilla CSS) to deliver a highly interactive experience. My assigned camera feature passed review and was highlighted by leadership. Stack: React, Three.js, TensorFlow, Axios, CSS.",
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
      "Solo freelance web app for Howard Motor Corp, designed to give back to a local business that supported me. Built a modern React frontend, Firebase backend, and dynamic admin portal for managing appointments and announcements. Integrated secure EmailJS contact forms and Google Places API, with sensitive API keys managed via environment variables and Vercel serverless functions. The site enhances customer interaction and streamlines staff workflow. Stack: React, Firebase, Tailwind, EmailJS, Google Places API.",
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
    name: "The Shaman Asher",
    icon: Icons["sun"],
    description:
      "Brought in post-launch to elevate the UI/UX of a mystical services site. Enhanced the interface with skeleton loading states, a custom animated message loader, and interactive menu underlines. My ongoing contributions include accessibility improvements, refined responsive design, and additional UI/UX polish. Stack: TypeScript, Tailwind, EmailJS.",
    links: [
      {
        tooltip: "See source",
        link: "https://github.com/theshamanasher/theshamanasher",
        icon: Icons["code"],
      },
      {
        tooltip: "See app",
        link: "https://www.shamanasher.com/",
        icon: Icons["link"],
      },
    ],
  },
  {
    name: "NFT Marketplace",
    icon: Icons["market"],
    description:
      "Virtual internship capstone where I rebuilt an NFT Marketplace as a responsive React SPA. Worked independently, collaborating with mentors. Implemented Swiper-powered NFT collection carousels, custom skeleton loaders, and client-side routing via HashRouter for a polished user experience. Enjoyed architecting the interactive Swiper grid and managing async state. Stack: React, Swiper, HashRouter, CRA, CSS.",
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
      "Solo portfolio project built from scratch to master web APIs and dynamic UI. Developed a fully responsive React app for searching, viewing, and checking out movies using the OMDB API. The main challenge was optimizing real-time search and handling async data fetches. Would add advanced search features and animated skeleton loading states if revisited. Stack: React, OMDB API, Styled Components, CRA.",
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
      "Personal project: a playful React weather dashboard using multiple APIs for real-time weather, sunrise/sunset, and fun facts for any city. Explored creative UI by auto-matching backgrounds to weather conditions. Major challenge was responsive design and smooth geo-location. Future versions will use a richer weather API for multi-day forecasts. Stack: React, OpenWeatherMap API (or similar), Fun Facts API, CRA.",
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
  // ...add more projects here if you have them
];

export default ProjectsData;
