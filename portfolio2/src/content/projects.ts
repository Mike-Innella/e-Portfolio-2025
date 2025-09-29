export type ProjectLink = {
  tooltip: string;
  link: string;
  type: "code" | "live";
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;     // short: card
  details: string;     // long: project page
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
    image: "/images/TuneIn.png",
    summary:
      "Focus-music web app with mood-based YouTube playlists and a session timer for distraction-free study/work, built with React and deployed on Vercel.",
    details: "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",
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
    image: "/images/HowardMotor.png",
    summary:
      "Solo freelance web app for Howard Motor Corp, built with React and Firebase to modernize customer engagement.",
    details: "Tech: React, Firebase (Auth/Firestore/Hosting), Tailwind, EmailJS. Focus was secure form flows and a mobile-first UI for non-technical users. I used least-privilege Firestore rules, serverless email hand-off, and simplified step forms. Result: mobile FCP ≈1.3s and fewer abandoned requests after validation + progress cues.",
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
    image: "/images/SpoilerShield.png",
    summary:
      "Details coming soon — project link: https://www.spoilershield.xyz/",
    details: "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests. (Public beta still evolving.)",
    tags: ["nextjs", "typescript", "api"],
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/0xagf0x/spoiler-shield-web",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://www.spoilershield.xyz/",
        type: "live",
      },
    ],
  },
  
    {
      slug: "summarist",
      title: "Summarist",
      subtitle: "Independent Project",
      image: "/images/Summarist.png",
      summary:
        "Rebuilt a book-summary app clone using Next.js, TypeScript, Tailwind CSS, and Supabase. Features authentication, dynamic pages, and responsive UI.",
      details: "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",
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
    slug: "skinstric-ai",
    title: "Skinstric.AI",
    subtitle: "Frontend Engineer",
    image: "/images/Skinstric.png",
    summary:
      "Built a real-time skin analysis platform using OpenAI Vision API and React with 98% detection accuracy.",
    details: "Tech: React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",
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
    slug: "shaman-asher",
    title: "The Shaman Asher",
    subtitle: "Freelance",
    image: "/images/ShamanAsher.png",
    summary:
      "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders.",
    details: "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",
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
    image: "/images/NFTMarket.png",
    summary:
      "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA.",
    details: "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",
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
    image: "/images/MovieStore.png",
    summary:
      "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app.",
    details: "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",
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
    image: "/images/Fweather.png",
    summary:
      "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather.",
    details: "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",
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
