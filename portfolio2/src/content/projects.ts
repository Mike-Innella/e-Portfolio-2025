export type ProjectLink = {
  tooltip: string;
  link: string;
  type: "code" | "live";
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  year?: number;
  iconKey?: string; // keep placeholder for later if you want to render icons
  image?: string; // optional project image for enhanced cards
};

export const projects: Project[] = [
  {
    slug: "tunein",
    title: "TuneIn",
    subtitle: "Independent Project",
    description:
      "Focus-music web app with mood-based YouTube playlists and a session timer for distraction-free study/work, built with React and deployed on Vercel.",
    tags: ["react", "javascript", "api", "css", "html", "routing", "supabase"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/TuneIn",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://tune-in-theta.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "howard-motor",
    title: "Howard Motor Webapp",
    subtitle: "Freelance",
    description:
      "Solo freelance web app for Howard Motor Corp, built with React and Firebase to modernize customer engagement...",
    tags: ["react", "firebase", "tailwind", "api", "nodejs", "emailjs"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/howard-motor-webapp",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://www.howardmotorco.net/",
        type: "live",
      },
    ],
  },

  {
    slug: "spoiler-shield",
    title: "Spoiler Shield",
    subtitle: "Mobile/Web Developer",
    description:
      "Details coming soon — project link: https://www.spoilershield.xyz/",
    tags: ["nextjs", "typescript", "api"],
    links: [
      {
        tooltip: "See app",
        link: "https://www.spoilershield.xyz/",
        type: "live",
      },
    ],
  },

  {
    slug: "skinstric-ai",
    title: "Skinstric.AI",
    subtitle: "Frontend Engineer",
    description:
      "Built a real-time skin analysis platform using OpenAI Vision API and Next.js with 98% detection accuracy...",
    tags: ["react", "javascript", "api", "css", "threejs"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Skinstric.AI-Mike_Innella_Internship",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://skinstric-ai-mike-innella-internship.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "summarist",
    title: "Summarist",
    subtitle: "Independent Project",
    description:
      "Rebuilt a book-summary app clone using Next.js, TypeScript, Tailwind CSS, and Supabase. Features authentication, dynamic pages, and responsive UI.",
    tags: ["nextjs", "typescript", "supabase", "tailwind", "css"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/summarist-home-page",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://summarist-home-page-pied.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "shaman-asher",
    title: "The Shaman Asher",
    subtitle: "Freelance",
    description:
      "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders...",
    tags: ["typescript", "tailwind", "emailjs", "html", "nodejs"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/theshamanasher/theshamanasher",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://www.shamanasher.com/",
        type: "live",
      },
    ],
  },

  {
    slug: "nft-marketplace",
    title: "NFT Marketplace",
    subtitle: "Frontend Developer (Internship)",
    description:
      "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA...",
    tags: ["react", "javascript", "css", "html", "routing"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/nft-marketplace--MIke_Innella-Internship",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "omdb-store",
    title: "OMDB Movie Store",
    subtitle: "Independent Project",
    description:
      "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app...",
    tags: ["react", "javascript", "api", "css"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/OMDBProject",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mike-innella.github.io/OMDBProject/",
        type: "live",
      },
    ],
  },

  {
    slug: "fweather",
    title: "Fweather",
    subtitle: "Independent Project",
    description:
      "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather...",
    tags: ["react", "javascript", "api", "css", "html"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Fweather",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mike-innella.github.io/Fweather/",
        type: "live",
      },
    ],
  },
];
