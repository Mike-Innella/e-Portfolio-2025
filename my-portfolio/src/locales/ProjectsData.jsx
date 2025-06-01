import { Icons } from "../config/icons"; // adjust path if needed

const ProjectsData = [
  {
    name: "Skinstric.AI",
    icon: Icons["web"],
    description:
      "Internship project for Skinstric.AI, collaborating closely with the project lead but developing features primarily solo. Focused on a React and Three.js analysis portal with seamless camera capture and TensorFlow-powered image processing. Overcame dependency and configuration challenges between multiple libraries and APIs, using Axios and vanilla CSS for a highly interactive user experience. The camera feature (my assignment) passed review with positive feedback from the project leader. Stack: React, Three.js, TensorFlow, Axios, CSS.",
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
      "Freelance web app for Howard Motor Corp—built solo as a way to give back to a business that supported me. Features a modern React frontend, Firebase backend, and Tailwind UI, with secure EmailJS contact forms and Google API integrations. The biggest challenge has been designing a dynamic admin portal for appointment and announcement management. API keys are protected via environment variables and Vercel serverless functions. Business owner is happy with progress; the site is positioned to enhance customer interactions and streamline staff workflow. Stack: React, Firebase, Tailwind, EmailJS, Google Places API.",
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
    icon: Icons["market"],
    description:
      "Virtual internship capstone: rebuilt an NFT Marketplace as a responsive React SPA. Worked solo but received high marks from a team of mentors. Implemented dynamic Swiper carousels, custom skeleton loaders, and client-side routing with HashRouter for a polished UX. Enjoyed architecting the Swiper-powered NFT collection grid. Stack: React, Swiper, HashRouter, CRA, CSS.",
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
      "Solo portfolio project designed from scratch to master web APIs and dynamic UI. Built a fully responsive React app for searching, viewing, and checking out movies with the OMDB API. Key challenge: optimizing dynamic search and handling async data. If revisited, I'd add advanced search features and animated skeleton loading states. Stack: React, OMDB API, Styled Components, CRA.",
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
      "Personal project for fun—a playful React weather dashboard using multiple APIs to show real-time weather, sunrise/sunset, and a random fun fact for any city. Tapped into creative UI by auto-matching backgrounds to current conditions. Major challenge: responsive design and smooth auto-locate functionality. Next version would use a richer weather API for multi-day forecasts. Stack: React, OpenWeatherMap API (or similar), Fun Facts API, CRA.",
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
