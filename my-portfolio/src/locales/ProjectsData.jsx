import { Icons } from "../config/icons";

const ProjectsData = [
  {
    name: "Skinstric.AI",
    icon: Icons["web"],
    description:
      "Built a real-time skin analysis platform using OpenAI Vision API and Next.js with 98% detection accuracy and sub-2-second analysis time. Developed a responsive UI with TailwindCSS, GSAP, and Lottie animations, boosting engagement by 60% and retention by 40%. Designed a modular component library for skincare recommendations and implemented an efficient image processing pipeline using the 4D Mini model for enhanced skin tone and texture analysis.",
    techStack: ["react", "javascript", "api", "css", "threejs"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Skinstric.AI-Mike_Innella_Internship",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://skinstric-ai-mike-innella-internship.vercel.app/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
  {
    name: "Howard Motor Webapp",
    icon: Icons["gearblock"],
    description:
      "Solo freelance web app for Howard Motor Corp, built with React and Firebase to modernize customer engagement and internal operations. Designed and deployed a dynamic admin portal for managing appointments, reviews, and announcements. Integrated Google Places API for real-time review display and EmailJS for secure contact forms. Configured Vercel serverless functions and environment variables to protect sensitive API keys. Resulted in improved lead conversion and streamlined staff communication.",
    techStack: ["react", "firebase", "tailwind", "api", "nodejs", "emailjs"],
    links: [
      // {
      //   tooltip: "See code",
      //   link: "https://github.com/Mike-Innella/howard-motor-webapp",
      //   icon: Icons["code"],
      //   type: "code",
      // },
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/howard-motor-webapp",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://howard-motor-webapp.vercel.app/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
  {
    name: "The Shaman Asher",
    subtitle: "Freelance",
    icon: Icons["sun"],
    description:
      "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders, skeleton states, and interactive hover effects for a more engaging experience. Focused on responsive layout fixes, accessibility enhancements, and consistent visual polish. Ongoing updates continue to improve user flow and interface clarity across devices.",
    techStack: ["typescript", "tailwind", "emailjs", "html", "nodejs"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/theshamanasher/theshamanasher",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://www.shamanasher.com/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
  {
    name: "NFT Marketplace",
    icon: Icons["market"],
    description:
      "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA, collaborating with mentors for guidance. Engineered dynamic NFT search with route-based navigation, async state handling, and collection-level filtering. Implemented Swiper-powered carousels, custom skeleton loaders, and interactive grid layouts to enable immersive exploration of NFTs across dedicated, data-driven pages.",
    techStack: ["react", "javascript", "css", "html", "routing"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/nft-marketplace--MIke_Innella-Internship",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
  {
    name: "OMDB Movie Store",
    icon: Icons["store"],
    description:
      "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app that allows users to search, view, and explore movies using the OMDB API. Focused on optimizing real-time search performance and managing async data fetches. If revisited, I would enhance it with advanced search filters and animated skeleton loaders for a smoother user experience.",
    techStack: ["react", "javascript", "api", "css"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/OMDBProject",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mike-innella.github.io/OMDBProject/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
  {
    name: "Fweather",
    icon: Icons["weather"],
    description:
      "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather, sunrise/sunset, and random fun facts. Designed creative UI with auto-matched backgrounds based on weather conditions. Focused on responsive layout and smooth geo-location handling. Plans for future updates include richer multi-day forecasts using an advanced weather API.",
    techStack: ["react", "javascript", "api", "css", "html"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Fweather",
        icon: Icons["code"],
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mike-innella.github.io/Fweather/",
        icon: Icons["link"],
        type: "live",
      },
    ],
  },
];

export default ProjectsData;
