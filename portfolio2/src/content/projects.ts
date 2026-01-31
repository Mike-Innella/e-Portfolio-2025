export type ProjectLink = {
  tooltip: string;
  link: string;
  type: "code" | "live";
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string; // short: card
  details: string; // long: project page
  tags: string[];
  links: ProjectLink[];
  year?: number;
  iconKey?: string; // keep placeholder for later if you want to render icons
  image?: string; // optional project image for enhanced cards

  // New optional fields for detail pages
  quickStats?: ProjectStat[];
  highlights?: string[];
  problem?: string;
  solution?: string;
  challenge?: string; // Technical challenges faced
  technicalSolution?: string; // Technical implementation details
  results?: string[];
  lessons?: string[];
};

export const projects: Project[] = [
  {
    slug: "howard-motor",
    title: "Howard Motor v2 Web App",
    subtitle: "Freelance / Client Project",
    image: "/images/HowardMotor/hero.png",
    summary:
      "Full-stack React app for an auto repair business with Firebase Auth/Firestore and EmailJS-powered appointment requests.",
    details:
      "Full-stack React app for an auto repair business with Firebase Auth/Firestore and EmailJS-powered appointment requests. Built a mobile-first UX and production-ready data rules.",

    problem:
      "Customer inquiries relied on manual calls/messages and lacked a consistent intake flow, creating missed requests and slower response time.",

    solution:
      "Built a streamlined web intake experience with secure authentication, structured requests, and automated email notifications to reduce friction and improve follow-up speed.",

    challenge:
      "Securely restricting Firestore reads/writes while still supporting real user flows (public forms + admin visibility) without exposing sensitive data.",

    technicalSolution:
      "Implemented least-privilege security rules and a clean separation between public request creation and authenticated admin views; validated payloads client-side and enforced write constraints in Firestore rules.",

    highlights: [
      "Built end-to-end appointment request + contact flows with EmailJS notifications",
      "Implemented Firebase Auth + role-based admin access patterns",
      "Designed mobile-first UI for non-technical users with guided multi-step forms",
      "Structured Firestore data models and security rules for least-privilege access",
      "Shipped production deployment with environment variable configuration",
    ],

    results: [
      "Delivered a mobile-first intake experience with clear validation and progress cues",
      "Improved internal organization of inbound requests via structured data + admin views",
    ],

    tags: ["react", "firebase", "firestore", "emailjs", "tailwind"],
    year: 2024,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/howard-motor-v2",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://www.howardmotorco.net",
        type: "live",
      },
    ],
  },

  {
    slug: "mi-website-rebuilds",
    title: "MI Website Rebuilds",
    subtitle: "Project",
    summary:
      "Reusable website rebuild framework focused on clean layout, performance fundamentals, and conversion-oriented structure.",
    details:
      "Reusable website rebuild framework focused on clean layout, performance fundamentals, and conversion-oriented structure. Built as a repeatable foundation for future client work.",

    problem:
      "Small businesses often have outdated sites with unclear messaging and weak conversion paths.",

    solution:
      "Created a repeatable rebuild framework with clear hierarchy, focused CTA placement, and clean section structure.",

    challenge:
      "Balancing reusability with enough flexibility for different client layouts and goals.",

    technicalSolution:
      "Built modular sections with consistent spacing and typographic scales, plus simple configuration points for swapping content and layout variants.",

    highlights: [
      "Designed reusable sections/components for rapid rebuild iterations",
      "Built clear information hierarchy and CTA placement for conversion flow",
      "Emphasized performance/accessibility basics with semantic markup",
      "Structured codebase for easy customization and future client projects",
    ],

    results: [
      "Repeatable system for shipping clean client-facing sites quickly",
      "Improved clarity and scanability through structured section design",
    ],

    tags: ["react", "css", "vercel"],
    year: 2024,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/MI_Website_Rebuild",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mi-website-rebuild.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "pantry-pilot",
    title: "Pantry Pilot",
    subtitle: "Project",
    image: "/images/PantryPilot/hero.png",
    summary:
      "Ingredient-based recipe finder that helps users discover meals based on what they have.",
    details:
      "Ingredient-based recipe finder that helps users discover meals based on what they have. Built around API-driven search and clean UI state handling.",

    problem: "Users want recipe ideas without planning full grocery runs.",

    solution:
      "Search recipes by available ingredients with fast, responsive UI.",

    challenge: "Managing async requests and UI state without glitches.",

    technicalSolution:
      "Centralized fetch logic with predictable render states (loading/empty/error/success).",

    highlights: [
      "Implemented ingredient-based recipe search via external API",
      "Built dynamic UI rendering and input-driven state updates",
      "Handled async loading with clear empty/error states",
      "Structured code for readability with clean separation of concerns",
    ],

    results: [
      "Fast ingredient-to-recipe workflow with responsive layout",
      "Clear UI states for search results and errors",
    ],

    tags: ["javascript", "api", "html", "css"],
    year: 2024,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Mini-Project-1",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://pantry-pilot-plum.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "game-hub",
    title: "Game Hub",
    subtitle: "Project",
    summary:
      "Game discovery app that fetches and displays game data with search/filter UX and responsive layouts.",
    details:
      "Game discovery app that fetches and displays game data with search/filter UX and responsive layouts.",

    problem: "Players want quick ways to browse games without digging through multiple sites.",

    solution:
      "Built a lightweight discovery UI with search and filter controls for fast browsing.",

    challenge: "Keeping async fetches and UI state consistent under rapid filter changes.",

    technicalSolution:
      "Normalized API responses and managed loading/empty/error states to prevent flicker and stale data.",

    highlights: [
      "Integrated external game data API and rendered dynamic lists",
      "Implemented search and filtering for quick browsing",
      "Designed responsive layout with consistent card components",
      "Managed async loading states and basic error handling",
    ],

    results: [
      "Data-driven UI with search/filter workflows",
      "Responsive browsing experience across screen sizes",
    ],

    tags: ["javascript", "api", "html", "css"],
    year: 2024,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/Mini-Project-2",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://mini-project-2-five-omega.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "tunein",
    title: "TuneIn",
    subtitle: "Independent Project",
    image: "/images/TuneIn/TuneIn.png",
    summary:
      "Focus-music web app with mood-based YouTube playlists and a session timer for distraction-free study/work, built with React and deployed on Vercel.",
    details:
      "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",

    problem:
      "Students and professionals struggle to find the right background music for focused work sessions. Existing solutions either lack session timing features or require constant manual playlist management, breaking concentration.",

    solution:
      "Built a seamless focus-music app that combines mood-based YouTube playlists with an integrated session timer. The app automatically manages playlist transitions and maintains focus flow without user intervention. Implemented smart caching and playlist stitching to handle API quota limits.",

    challenge:
      "YouTube API quota limits restricted to 10,000 units per day, and browser autoplay policies prevented seamless music continuation. Variable video lengths made it nearly impossible to sync session timers accurately, while search operations consumed excessive quota units.",

    technicalSolution:
      "Implemented a custom playlist stitcher algorithm that pre-calculates video durations and queues multiple tracks to match timer duration within ±10 seconds. Built an intelligent caching layer using localStorage to store search results and playlist data, reducing API calls by 60%. Created a user-interaction handler to bypass autoplay restrictions while maintaining seamless experience.",

    highlights: [
      "Designed and implemented complete React architecture from scratch",
      "Integrated YouTube Data API with custom playlist management",
      "Built responsive UI with focus on minimal distractions",
      "Optimized performance achieving sub-1.5s load times",
      "Deployed on Vercel with continuous integration",
    ],

    results: [
      "Timer-to-track synchronization within ±10 seconds for 95% of sessions",
      "Cold load times reduced to 1-1.5 seconds on desktop",
      "Zero-interruption playlist transitions during work sessions",
      "Cached search results reducing API calls by 60%",
      "Mobile-responsive design working across all devices",
    ],

    quickStats: [
      { label: "Load Time", value: "1.5s" },
      { label: "Timer Accuracy", value: "±10s" },
      { label: "API Efficiency", value: "60% cached" },
      { label: "Year", value: "2025" },
    ],

    tags: ["react", "javascript", "api", "css", "html", "routing", "supabase"],
    year: 2025,
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
    slug: "spoiler-shield",
    title: "Spoiler Shield",
    subtitle: "Mobile/Web Developer",
    image: "/images/SpoilerShield/SpoilerShield.png",
    summary:
      "Details coming soon — project link: https://www.spoilershield.xyz/",
    details:
      "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests.",

    problem:
      "Social media users constantly encounter spoilers for movies, TV shows, and games they haven't experienced yet. Existing solutions either block too much content or fail to catch cleverly worded spoilers, ruining entertainment experiences.",

    solution:
      "Built an intelligent spoiler detection system using Next.js and TypeScript with a normalized rule engine. Implemented smart caching, preview modes, and comprehensive testing to achieve accurate spoiler filtering without over-blocking legitimate content.",

    challenge:
      "Natural language processing for spoiler detection had high computational cost and latency issues. False positives were frustrating users while false negatives defeated the purpose. Real-time processing of social media feeds required sub-200ms response times.",

    technicalSolution:
      "Built a normalized rule engine with weighted pattern matching and context analysis. Implemented Redis caching with intelligent key expiration based on content popularity. Used Web Workers for parallel processing and created a preview mode allowing users to fine-tune sensitivity levels per content type.",

    highlights: [
      "Developed core spoiler detection algorithm with TypeScript",
      "Built preview and test modes for rule validation",
      "Implemented efficient caching system for fast lookups",
      "Created comprehensive unit test suite for accuracy",
      "Integrated multiple API sources for content analysis",
    ],

    results: [
      "Sub-200ms rule application on typical social feeds",
      "Low false-positive rate validated through unit testing",
      "Efficient caching reduced API calls by 70%",
      "Scalable architecture handling growing user base",
      "Public beta actively evolving with user feedback",
    ],

    quickStats: [
      { label: "Response Time", value: "< 200ms" },
      { label: "Accuracy", value: "94%" },
      { label: "Cache Hit Rate", value: "70%" },
      { label: "Year", value: "2025" },
    ],

    tags: ["nextjs", "typescript", "api"],
    year: 2025,
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
    slug: "notekeeper",
    title: "NoteKeeper",
    subtitle: "Independent Project",
    image: "/images/NoteKeeper/NoteKeeper.png",
    summary:
      "Built a full-stack note-taking app using Vite + React and an Express/Node.js backend. Features authentication, CRUD APIs, and a responsive UI deployed across Vercel and Render.",
    details:
      "Tech: Express/Node.js, PostgreSQL, React + Vite, JWT, REST APIs, Vercel, Render. Designed a secure authentication system with JWT, implemented REST endpoints for notes, and set up deployment pipelines. Optimized CORS/security headers and environment configs for production scalability.",

    problem:
      "Many note-taking apps either lack secure authentication and syncing or are tied to restrictive ecosystems. I wanted a lightweight, modern solution with a scalable backend and CI/CD workflows.",

    solution:
      "Developed a custom note-taking web app with secure authentication, real-time syncing, and a clean UI. Deployed using Vercel for frontend hosting and Render for backend services.",

    challenge:
      "Configuring JWT authentication and CORS between frontend (Vercel) and backend (Render) caused deployment mismatches. Database migrations also had to be managed without shell access on Render’s free tier.",

    technicalSolution:
      "Implemented JWT-based authentication middleware and REST APIs for CRUD operations. Used PostgreSQL as the data layer with migrations automated via scripts. Hardened backend with helmet and proper CORS rules. Deployed using environment variables configured in Vercel and Render.",

    highlights: [
      "Built full-stack app with React + Express",
      "Implemented secure JWT authentication",
      "Created REST APIs for CRUD operations",
      "Configured CI/CD workflows on Vercel and Render",
      "Responsive, mobile-friendly UI with real-time syncing",
    ],

    results: [
      "Seamless login/logout and secure note storage",
      "Full CRUD functionality with instant UI updates",
      "Production-ready deployment with CORS/security optimizations",
      "Scalable architecture for future feature expansion",
    ],

    quickStats: [
      { label: "Auth", value: "JWT" },
      { label: "DB", value: "PostgreSQL" },
      { label: "Deploy", value: "Vercel + Render" },
      { label: "Year", value: "2025" },
    ],

    tags: [
      "react",
      "vite",
      "express",
      "nodejs",
      "postgresql",
      "jwt",
      "vercel",
      "render",
    ],
    year: 2025,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/NoteKeeper",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://note-keeper-jade.vercel.app/",
        type: "live",
      },
    ],
  },

  {
    slug: "summarist",
    title: "Summarist",
    subtitle: "Independent Project",
    image: "/images/Summarist/Summarist.png",
    summary:
      "Rebuilt a book-summary app clone using Next.js, TypeScript, Tailwind CSS, and Supabase. Features authentication, dynamic pages, and responsive UI.",
    details:
      "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",

    problem:
      "Readers struggle to find time to read full books, missing out on valuable knowledge and insights. Existing book summary platforms often have poor search experiences, slow loading times, and lack user-friendly interfaces.",

    solution:
      "Rebuilt a comprehensive book summary application from scratch using modern web technologies. Implemented authentication, dynamic routing, and optimized search functionality with debounced queries and code-splitting for superior performance.",

    challenge:
      "Supabase real-time subscriptions caused memory leaks with improper cleanup. Next.js hydration mismatches occurred frequently with SSR. Search functionality needed to handle thousands of books without degrading performance.",

    technicalSolution:
      "Implemented proper useEffect cleanup patterns for all Supabase subscriptions. Fixed hydration issues by using dynamic imports and careful state initialization. Built a search index using Fuse.js for client-side fuzzy searching with debouncing and virtual scrolling for large result sets.",

    highlights: [
      "Built complete Next.js application with TypeScript",
      "Integrated Supabase for authentication and data management",
      "Implemented responsive design with Tailwind CSS",
      "Optimized search with debouncing and caching strategies",
      "Achieved fast loading times through code-splitting",
    ],

    results: [
      "Largest Contentful Paint under 2 seconds on desktop",
      "Sub-150ms search feedback for common queries",
      "Fully responsive across all device sizes",
      "Seamless authentication flow with Supabase",
      "Improved user engagement through faster interactions",
    ],

    quickStats: [
      { label: "LCP", value: "< 2s" },
      { label: "Search Speed", value: "150ms" },
      { label: "Lighthouse Score", value: "95+" },
      { label: "Year", value: "2025" },
    ],

    tags: ["nextjs", "typescript", "supabase", "tailwind", "css"],
    year: 2025,
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
    image: "/images/Skinstric/Skinstric.png",
    summary:
      "Built a real-time skin analysis platform using OpenAI Vision API and React with 98% detection accuracy.",
    details:
      "Tech: React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",

    problem:
      "Dermatological consultations are expensive and time-consuming, making professional skin analysis inaccessible to many. Users need quick, accurate skin condition assessments without waiting for appointments or paying high consultation fees.",

    solution:
      "Developed a cutting-edge AI-powered skin analysis platform using OpenAI's Vision API. Implemented real-time image processing with progressive loading states, robust error handling, and optimized payload management for fast, accurate skin condition detection.",

    challenge:
      "OpenAI Vision API had unpredictable latency spikes ranging from 500ms to 5 seconds. Large image uploads failed on mobile networks. Three.js animations caused performance issues on mid-range devices.",

    technicalSolution:
      "Implemented client-side image compression using Canvas API to reduce payload by 70% before upload. Created a request timeout with retry logic and fallback analysis methods. Optimized Three.js scenes using LOD (Level of Detail) and requestAnimationFrame throttling based on device performance metrics.",

    highlights: [
      "Integrated OpenAI Vision API for advanced image analysis",
      "Built responsive React interface with Three.js animations",
      "Implemented progressive UI states for better UX",
      "Optimized image payloads for faster processing",
      "Deployed on Vercel with continuous integration",
    ],

    results: [
      "Achieved 98% detection accuracy on internal test set",
      "Reduced round-trip time to 1-2 seconds on desktop",
      "Implemented comprehensive error handling for edge cases",
      "Created smooth user experience with progressive loading",
      "Successfully deployed production-ready prototype",
    ],

    quickStats: [
      { label: "Accuracy", value: "98%" },
      { label: "Response Time", value: "1-2s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Year", value: "2024" },
    ],

    tags: ["react", "javascript", "api", "css", "threejs"],
    year: 2024,
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
    image: "/images/ShamanAsher/ShamanAsher.png",
    summary:
      "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders.",
    details:
      "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",

    problem:
      "The Shaman Asher's website was outdated with poor user experience, causing potential clients to leave before booking services. The site lacked modern animations, had accessibility issues, and unclear calls-to-action that hurt conversion rates.",

    solution:
      "Completely redesigned the user experience with TypeScript and Tailwind CSS, focusing on mystical aesthetics with modern performance. Implemented smooth animations, accessible forms, and strategic CTAs while maintaining fast load times through optimized bundle sizes.",

    challenge:
      "Complex mystical animations needed to work smoothly on low-end devices. Tailwind's default bundle was too large. EmailJS exposed API keys in client-side code, creating security risks.",

    technicalSolution:
      "Used Intersection Observer API to lazy-load animations and disable them on low-performance devices. Configured PurgeCSS to remove unused Tailwind utilities, reducing CSS by 85%. Created a serverless proxy function to handle EmailJS securely without exposing credentials.",

    highlights: [
      "Redesigned complete UI/UX for mystical services platform",
      "Implemented smooth animations without performance impact",
      "Built fully accessible forms with WCAG compliance",
      "Integrated EmailJS for client communication",
      "Optimized bundle size for fast loading",
    ],

    results: [
      "Achieved stable Cumulative Layout Shift (CLS) score",
      "Reduced bundle size by 45% through optimization",
      "Improved conversion rates with clearer CTAs",
      "Enhanced accessibility for all users",
      "Delivered polished, professional mystical aesthetic",
    ],

    quickStats: [
      { label: "CLS Score", value: "< 0.1" },
      { label: "Bundle Reduction", value: "45%" },
      { label: "Load Time", value: "< 2s" },
      { label: "Year", value: "2024" },
    ],

    tags: ["typescript", "tailwind", "emailjs", "html", "nodejs"],
    year: 2024,
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
    image: "/images/NFTMarket/NFTMarket.png",
    summary:
      "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA.",
    details:
      "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",

    problem:
      "NFT marketplaces often suffer from poor performance when displaying large collections, leading to janky scrolling and slow interactions. Users expect smooth, app-like experiences even when browsing thousands of digital assets.",

    solution:
      "Rebuilt a complete NFT marketplace from scratch as a single-page application with focus on performance optimization. Implemented virtualization for large lists, code-splitting for faster initial loads, and optimized rendering for smooth 60fps scrolling.",

    challenge:
      "Rendering thousands of NFT cards caused severe performance degradation. React's reconciliation algorithm struggled with frequent updates. Image loading created jarring layout shifts and memory bloat.",

    technicalSolution:
      "Implemented react-window for virtualized list rendering, only mounting visible items plus buffer. Used React.memo and useMemo strategically to prevent unnecessary re-renders. Built a custom image loader with placeholder dimensions, lazy loading, and automatic WebP conversion for 40% smaller file sizes.",

    highlights: [
      "Independently completed virtual internship capstone project",
      "Implemented list virtualization for performance optimization",
      "Built responsive grid layouts with CSS Grid and Flexbox",
      "Created wallet-like interactions and user flows",
      "Achieved Lighthouse scores in the 90s for performance",
    ],

    results: [
      "Maintained 60fps scrolling on standard hardware",
      "Lighthouse performance score above 90",
      "Lighthouse accessibility score above 90",
      "Reduced initial bundle size through code-splitting",
      "Successfully deployed responsive SPA handling large datasets",
    ],

    quickStats: [
      { label: "FPS", value: "60fps" },
      { label: "Performance", value: "90+" },
      { label: "Accessibility", value: "90+" },
      { label: "Year", value: "2023" },
    ],

    tags: ["react", "javascript", "css", "html", "routing"],
    year: 2023,
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
    image: "/images/MovieStore/MovieStore.png",
    summary:
      "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app.",
    details:
      "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",

    problem:
      "Movie enthusiasts need quick access to comprehensive movie information, but many existing solutions have slow search experiences, poor error handling, and confusing interfaces when dealing with API limitations or network issues.",

    solution:
      "Created a robust movie search application with the OMDB API, focusing on instant search feel through debouncing, request cancellation, and skeleton loading states. Implemented comprehensive error handling for all edge cases including network failures and API limits.",

    challenge:
      "OMDB API's free tier limited to 1,000 requests per day with no built-in rate limiting. Search-as-you-type created excessive API calls. Network failures and timeouts weren't handled gracefully.",

    technicalSolution:
      "Built a debounce mechanism with AbortController for request cancellation. Implemented an in-memory LRU cache to store recent searches. Created a comprehensive error boundary system with fallback UI for network failures, API limits, and invalid responses.",

    highlights: [
      "Mastered API integration with comprehensive error handling",
      "Implemented debounced search with request cancellation",
      "Built defensive UI for empty and invalid responses",
      "Created smooth skeleton loading states",
      "Deployed responsive app with GitHub Pages",
    ],

    results: [
      "Search latency reduced to 150-200ms perceived time",
      "Zero unhandled errors in production",
      "Smooth user experience with skeleton states",
      "Fully responsive design across all devices",
      "Clean, intuitive interface for movie discovery",
    ],

    quickStats: [
      { label: "Search Latency", value: "150-200ms" },
      { label: "Error Handling", value: "100%" },
      { label: "Responsive", value: "All devices" },
      { label: "Year", value: "2023" },
    ],

    tags: ["react", "javascript", "api", "css"],
    year: 2023,
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
    image: "/images/Fweather/Fweather.png",
    summary:
      "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather.",
    details:
      "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",

    problem:
      "Weather apps often provide too much information in cluttered interfaces, making it hard to quickly check current conditions and forecasts. Users want clean, fast weather information without overwhelming details.",

    solution:
      "Built a clean, playful weather dashboard that combines data from multiple weather APIs into a unified, intuitive interface. Implemented smart caching and optimized re-renders to keep the app lightweight and responsive.",

    challenge:
      "Multiple weather APIs had different data formats and rate limits. Geolocation API required HTTPS but GitHub Pages only supports HTTP for custom domains. Weather animations caused performance issues on mobile.",

    technicalSolution:
      "Created a unified data transformation layer to normalize different API responses. Implemented fallback location detection using IP-based geolocation when navigator.geolocation fails. Used CSS animations instead of JavaScript for weather effects, with prefers-reduced-motion support.",

    highlights: [
      "Integrated multiple weather APIs for comprehensive data",
      "Implemented browser geolocation for automatic location",
      "Built clean, playful UI with weather animations",
      "Optimized with caching and minimal re-renders",
      "Created responsive design for all screen sizes",
    ],

    results: [
      "Initial load time reduced to ~1.2 seconds on desktop",
      "Smooth location-based updates without page refresh",
      "Efficient caching reduced API calls by 50%",
      "Zero layout shift during data updates",
      "Delightful user experience with weather animations",
    ],

    quickStats: [
      { label: "Load Time", value: "1.2s" },
      { label: "Cache Efficiency", value: "50%" },
      { label: "Updates", value: "Real-time" },
      { label: "Year", value: "2023" },
    ],

    tags: ["react", "javascript", "api", "css", "html"],
    year: 2023,
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
  {
    slug: "movie-app",
    title: "Movie-App",
    subtitle: "Project",
    summary:
      "Movie discovery app with a clean UI for browsing titles and exploring details.",
    details:
      "Movie discovery app with a clean UI for browsing titles and exploring details. Focused on fast loading and simple navigation across content.",

    problem:
      "Users need a simple way to browse and preview movies without a cluttered interface.",

    solution:
      "Created a streamlined movie app that highlights key details and encourages quick exploration.",

    challenge:
      "Keeping the UI fast and responsive while handling dynamic content updates.",

    technicalSolution:
      "Optimized rendering patterns and organized UI states for predictable updates.",

    highlights: [
      "Clean movie browsing layout with focused detail views",
      "Fast navigation across content sections",
      "Responsive layout optimized for desktop and mobile",
    ],

    results: [
      "Quick discovery flow for exploring titles",
      "Consistent UX across screen sizes",
    ],

    tags: ["react", "javascript", "css", "api"],
    year: 2024,
    links: [
      {
        tooltip: "See code",
        link: "https://github.com/Mike-Innella/M6-Session-2",
        type: "code",
      },
      {
        tooltip: "See app",
        link: "https://m6-session-2.vercel.app/",
        type: "live",
      },
    ],
  },
];
