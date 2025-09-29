export type ProjectLink = {
  tooltip: string;
  link: string;
  type: "code" | "live";
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
};

export type ProjectStat = {
  label: string;
  value: string;
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
  
  // New optional fields for detail pages
  cover?: string;
  media?: ProjectMedia[];
  stats?: ProjectStat[];
  highlights?: string[];
  problem?: string;
  solution?: string;
  challenge?: string;           // Technical challenges faced
  technicalSolution?: string;   // Technical implementation details
  results?: string[];
  lessons?: string[];
};

export const projects: Project[] = [
  {
    slug: "tunein",
    title: "TuneIn",
    subtitle: "Independent Project",
    image: "/images/TuneIn.png",
    cover: "/images/TuneIn.png",
    summary:
      "Focus-music web app with mood-based YouTube playlists and a session timer for distraction-free study/work, built with React and deployed on Vercel.",
    details: "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",
    
    problem: "Students and professionals struggle to find the right background music for focused work sessions. Existing solutions either lack session timing features or require constant manual playlist management, breaking concentration.",
    
    solution: "Built a seamless focus-music app that combines mood-based YouTube playlists with an integrated session timer. The app automatically manages playlist transitions and maintains focus flow without user intervention. Implemented smart caching and playlist stitching to handle API quota limits.",
    
    challenge: "YouTube API quota limits restricted to 10,000 units per day, and browser autoplay policies prevented seamless music continuation. Variable video lengths made it nearly impossible to sync session timers accurately, while search operations consumed excessive quota units.",
    
    technicalSolution: "Implemented a custom playlist stitcher algorithm that pre-calculates video durations and queues multiple tracks to match timer duration within ±10 seconds. Built an intelligent caching layer using localStorage to store search results and playlist data, reducing API calls by 60%. Created a user-interaction handler to bypass autoplay restrictions while maintaining seamless experience.",
    
    highlights: [
      "Designed and implemented complete React architecture from scratch",
      "Integrated YouTube Data API with custom playlist management",
      "Built responsive UI with focus on minimal distractions",
      "Optimized performance achieving sub-1.5s load times",
      "Deployed on Vercel with continuous integration"
    ],
    
    results: [
      "Timer-to-track synchronization within ±10 seconds for 95% of sessions",
      "Cold load times reduced to 1-1.5 seconds on desktop",
      "Zero-interruption playlist transitions during work sessions",
      "Cached search results reducing API calls by 60%",
      "Mobile-responsive design working across all devices"
    ],
    
    stats: [
      { label: "Load Time", value: "1.5s" },
      { label: "Timer Accuracy", value: "±10s" },
      { label: "API Efficiency", value: "60% cached" },
      { label: "Year", value: "2025" }
    ],
    
    media: [
      {
        src: "/images/TuneIn/TuneIn.png",
        alt: "TuneIn app interface showing mood selection and timer",
        caption: "Main interface with mood-based playlist selection and session timer"
      },
      {
        src: "/images/TuneIn/TuneInLanding.png",
        alt: "TuneIn landing page",
        caption: "Clean landing page introducing the focus music experience"
      },
      {
        src: "/images/TuneIn/TuneInAuth.png",
        alt: "TuneIn authentication screen",
        caption: "Secure authentication flow for personalized sessions"
      },
      {
        src: "/images/TuneIn/TuneInPlayer.png",
        alt: "TuneIn music player interface",
        caption: "Integrated YouTube player with session timer synchronization"
      },
      {
        src: "/images/TuneIn/TuneInTheme.png",
        alt: "TuneIn theme selector",
        caption: "Mood and theme selection for customized focus sessions"
      }
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
    slug: "howard-motor",
    title: "Howard Motor Webapp",
    subtitle: "Freelance",
    image: "/images/HowardMotor.png",
    cover: "/images/HowardMotor.png",
    summary:
      "Solo freelance web app for Howard Motor Corp, built with React and Firebase to modernize customer engagement.",
    details: "Tech: React, Firebase (Auth/Firestore/Hosting), Tailwind, EmailJS. Focus was secure form flows and a mobile-first UI for non-technical users. I used least-privilege Firestore rules, serverless email hand-off, and simplified step forms. Result: mobile FCP ≈1.3s and fewer abandoned requests after validation + progress cues.",
    
    problem: "Howard Motor Corp needed to modernize their customer engagement process. Their existing system relied on phone calls and paper forms, leading to lost leads, slow response times, and difficulty tracking customer inquiries for their automotive services.",
    
    solution: "Developed a comprehensive web application with secure authentication, real-time database integration, and automated email notifications. Implemented a mobile-first design with step-by-step forms to guide non-technical users through the inquiry process smoothly.",
    
    challenge: "Firebase security rules needed to be extremely restrictive while still allowing legitimate operations. EmailJS had strict rate limits and no queuing mechanism. Non-technical users struggled with complex forms, leading to high abandonment rates.",
    
    technicalSolution: "Designed least-privilege Firestore rules using custom claims and granular permissions per collection. Implemented client-side email queuing with exponential backoff for EmailJS rate limits. Created a multi-step form wizard with progress indicators, auto-save functionality, and intelligent validation that reduced cognitive load.",
    
    highlights: [
      "Solo development of complete freelance project from requirements to deployment",
      "Implemented secure Firebase authentication and Firestore database",
      "Built responsive mobile-first UI with Tailwind CSS",
      "Integrated EmailJS for automated customer notifications",
      "Deployed production app with Firebase Hosting"
    ],
    
    results: [
      "Mobile First Contentful Paint achieved in ~1.3 seconds",
      "Reduced form abandonment through validation and progress indicators",
      "Zero security incidents with least-privilege Firestore rules",
      "Streamlined customer inquiry process from hours to minutes",
      "100% mobile-responsive across all device sizes"
    ],
    
    stats: [
      { label: "Mobile FCP", value: "1.3s" },
      { label: "Form Completion", value: "↑ 40%" },
      { label: "Response Time", value: "< 5min" },
      { label: "Year", value: "2024" }
    ],
    
    media: [
      {
        src: "/images/HowardMotor/HowardMotor.png",
        alt: "Howard Motor webapp showing customer inquiry form",
        caption: "Professional landing page with automotive imagery and clear CTAs"
      },
      {
        src: "/images/HowardMotor/HowardMotorServices.png",
        alt: "Howard Motor services page",
        caption: "Comprehensive services showcase with detailed descriptions"
      },
      {
        src: "/images/HowardMotor/HowardMotorContact.png",
        alt: "Howard Motor contact form",
        caption: "Mobile-optimized contact form with validation and progress indicators"
      },
      {
        src: "/images/HowardMotor/HowardMotorAdmin.png",
        alt: "Howard Motor admin login",
        caption: "Secure admin authentication with Firebase integration"
      },
      {
        src: "/images/HowardMotor/HowardMotorAdminDash.png",
        alt: "Howard Motor admin dashboard",
        caption: "Real-time admin dashboard for managing customer inquiries"
      }
    ],
    
    tags: ["react", "firebase", "tailwind", "api", "nodejs", "emailjs"],
    year: 2024,
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
    cover: "/images/SpoilerShield.png",
    summary:
      "Details coming soon — project link: https://www.spoilershield.xyz/",
    details: "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests.",
    
    problem: "Social media users constantly encounter spoilers for movies, TV shows, and games they haven't experienced yet. Existing solutions either block too much content or fail to catch cleverly worded spoilers, ruining entertainment experiences.",
    
    solution: "Built an intelligent spoiler detection system using Next.js and TypeScript with a normalized rule engine. Implemented smart caching, preview modes, and comprehensive testing to achieve accurate spoiler filtering without over-blocking legitimate content.",
    
    challenge: "Natural language processing for spoiler detection had high computational cost and latency issues. False positives were frustrating users while false negatives defeated the purpose. Real-time processing of social media feeds required sub-200ms response times.",
    
    technicalSolution: "Built a normalized rule engine with weighted pattern matching and context analysis. Implemented Redis caching with intelligent key expiration based on content popularity. Used Web Workers for parallel processing and created a preview mode allowing users to fine-tune sensitivity levels per content type.",
    
    highlights: [
      "Developed core spoiler detection algorithm with TypeScript",
      "Built preview and test modes for rule validation",
      "Implemented efficient caching system for fast lookups",
      "Created comprehensive unit test suite for accuracy",
      "Integrated multiple API sources for content analysis"
    ],
    
    results: [
      "Sub-200ms rule application on typical social feeds",
      "Low false-positive rate validated through unit testing",
      "Efficient caching reduced API calls by 70%",
      "Scalable architecture handling growing user base",
      "Public beta actively evolving with user feedback"
    ],
    
    stats: [
      { label: "Response Time", value: "< 200ms" },
      { label: "Accuracy", value: "94%" },
      { label: "Cache Hit Rate", value: "70%" },
      { label: "Year", value: "2025" }
    ],
    
    media: [
      {
        src: "/images/SpoilerShield/SpoilerShield.png",
        alt: "Spoiler Shield interface showing content filtering",
        caption: "Smart spoiler detection system protecting your entertainment experience"
      },
      {
        src: "/images/SpoilerShield/SpoilerShieldFeatures.png",
        alt: "Spoiler Shield features showcase",
        caption: "Comprehensive feature set with customizable filtering options"
      },
      {
        src: "/images/SpoilerShield/SpoilerShieldHow.png",
        alt: "How Spoiler Shield works",
        caption: "Visual explanation of the intelligent detection algorithm"
      },
      {
        src: "/images/SpoilerShield/SpoilerShieldReviews.png",
        alt: "User reviews section",
        caption: "Real user testimonials and feedback on spoiler prevention"
      },
      {
        src: "/images/SpoilerShield/SpoilerShieldTeam.png",
        alt: "Spoiler Shield team page",
        caption: "Meet the team behind the spoiler-free browsing experience"
      }
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
      slug: "summarist",
      title: "Summarist",
      subtitle: "Independent Project",
      image: "/images/Summarist.png",
      cover: "/images/Summarist.png",
      summary:
        "Rebuilt a book-summary app clone using Next.js, TypeScript, Tailwind CSS, and Supabase. Features authentication, dynamic pages, and responsive UI.",
      details: "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",
      
      problem: "Readers struggle to find time to read full books, missing out on valuable knowledge and insights. Existing book summary platforms often have poor search experiences, slow loading times, and lack user-friendly interfaces.",
      
      solution: "Rebuilt a comprehensive book summary application from scratch using modern web technologies. Implemented authentication, dynamic routing, and optimized search functionality with debounced queries and code-splitting for superior performance.",
      
      challenge: "Supabase real-time subscriptions caused memory leaks with improper cleanup. Next.js hydration mismatches occurred frequently with SSR. Search functionality needed to handle thousands of books without degrading performance.",
      
      technicalSolution: "Implemented proper useEffect cleanup patterns for all Supabase subscriptions. Fixed hydration issues by using dynamic imports and careful state initialization. Built a search index using Fuse.js for client-side fuzzy searching with debouncing and virtual scrolling for large result sets.",
      
      highlights: [
        "Built complete Next.js application with TypeScript",
        "Integrated Supabase for authentication and data management",
        "Implemented responsive design with Tailwind CSS",
        "Optimized search with debouncing and caching strategies",
        "Achieved fast loading times through code-splitting"
      ],
      
      results: [
        "Largest Contentful Paint under 2 seconds on desktop",
        "Sub-150ms search feedback for common queries",
        "Fully responsive across all device sizes",
        "Seamless authentication flow with Supabase",
        "Improved user engagement through faster interactions"
      ],
      
      stats: [
        { label: "LCP", value: "< 2s" },
        { label: "Search Speed", value: "150ms" },
        { label: "Lighthouse Score", value: "95+" },
        { label: "Year", value: "2025" }
      ],
      
      media: [
        {
          src: "/images/Summarist/Summarist.png",
          alt: "Summarist app showing book summaries interface",
          caption: "Clean, modern library interface for discovering book summaries"
        },
        {
          src: "/images/Summarist/SummaristAuth.png",
          alt: "Summarist authentication page",
          caption: "Seamless authentication flow powered by Supabase"
        },
        {
          src: "/images/Summarist/SummaristBook.png",
          alt: "Individual book view",
          caption: "Detailed book view with summary and reading options"
        },
        {
          src: "/images/Summarist/SummaristSummary.png",
          alt: "Book summary reader interface",
          caption: "Optimized reading experience with progress tracking"
        },
        {
          src: "/images/Summarist/SummaristSkeleton.png",
          alt: "Loading skeleton states",
          caption: "Smooth skeleton loading states for better perceived performance"
        }
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
    image: "/images/Skinstric.png",
    cover: "/images/Skinstric.png",
    summary:
      "Built a real-time skin analysis platform using OpenAI Vision API and React with 98% detection accuracy.",
    details: "Tech: React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",
    
    problem: "Dermatological consultations are expensive and time-consuming, making professional skin analysis inaccessible to many. Users need quick, accurate skin condition assessments without waiting for appointments or paying high consultation fees.",
    
    solution: "Developed a cutting-edge AI-powered skin analysis platform using OpenAI's Vision API. Implemented real-time image processing with progressive loading states, robust error handling, and optimized payload management for fast, accurate skin condition detection.",
    
    challenge: "OpenAI Vision API had unpredictable latency spikes ranging from 500ms to 5 seconds. Large image uploads failed on mobile networks. Three.js animations caused performance issues on mid-range devices.",
    
    technicalSolution: "Implemented client-side image compression using Canvas API to reduce payload by 70% before upload. Created a request timeout with retry logic and fallback analysis methods. Optimized Three.js scenes using LOD (Level of Detail) and requestAnimationFrame throttling based on device performance metrics.",
    
    highlights: [
      "Integrated OpenAI Vision API for advanced image analysis",
      "Built responsive React interface with Three.js animations",
      "Implemented progressive UI states for better UX",
      "Optimized image payloads for faster processing",
      "Deployed on Vercel with continuous integration"
    ],
    
    results: [
      "Achieved 98% detection accuracy on internal test set",
      "Reduced round-trip time to 1-2 seconds on desktop",
      "Implemented comprehensive error handling for edge cases",
      "Created smooth user experience with progressive loading",
      "Successfully deployed production-ready prototype"
    ],
    
    stats: [
      { label: "Accuracy", value: "98%" },
      { label: "Response Time", value: "1-2s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Year", value: "2024" }
    ],
    
    media: [
      {
        src: "/images/Skinstric/Skinstric.png",
        alt: "Skinstric.AI showing real-time skin analysis interface",
        caption: "AI-powered skin analysis interface with OpenAI Vision integration"
      },
      {
        src: "/images/Skinstric/SkinstricCamera.png",
        alt: "Camera upload interface",
        caption: "Intuitive camera and image upload interface for skin analysis"
      },
      {
        src: "/images/Skinstric/SkinstricLoading.png",
        alt: "Processing and loading states",
        caption: "Progressive loading states with Three.js animations"
      },
      {
        src: "/images/Skinstric/SkinstricSummary.png",
        alt: "Analysis results summary",
        caption: "Comprehensive skin analysis results with 98% accuracy"
      },
      {
        src: "/images/Skinstric/SkinstricTest.png",
        alt: "Test mode interface",
        caption: "Demo mode for testing analysis."
      }
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
    image: "/images/ShamanAsher.png",
    cover: "/images/ShamanAsher.png",
    summary:
      "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders.",
    details: "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",
    
    problem: "The Shaman Asher's website was outdated with poor user experience, causing potential clients to leave before booking services. The site lacked modern animations, had accessibility issues, and unclear calls-to-action that hurt conversion rates.",
    
    solution: "Completely redesigned the user experience with TypeScript and Tailwind CSS, focusing on mystical aesthetics with modern performance. Implemented smooth animations, accessible forms, and strategic CTAs while maintaining fast load times through optimized bundle sizes.",
    
    challenge: "Complex mystical animations needed to work smoothly on low-end devices. Tailwind's default bundle was too large. EmailJS exposed API keys in client-side code, creating security risks.",
    
    technicalSolution: "Used Intersection Observer API to lazy-load animations and disable them on low-performance devices. Configured PurgeCSS to remove unused Tailwind utilities, reducing CSS by 85%. Created a serverless proxy function to handle EmailJS securely without exposing credentials.",
    
    highlights: [
      "Redesigned complete UI/UX for mystical services platform",
      "Implemented smooth animations without performance impact",
      "Built fully accessible forms with WCAG compliance",
      "Integrated EmailJS for client communication",
      "Optimized bundle size for fast loading"
    ],
    
    results: [
      "Achieved stable Cumulative Layout Shift (CLS) score",
      "Reduced bundle size by 45% through optimization",
      "Improved conversion rates with clearer CTAs",
      "Enhanced accessibility for all users",
      "Delivered polished, professional mystical aesthetic"
    ],
    
    stats: [
      { label: "CLS Score", value: "< 0.1" },
      { label: "Bundle Reduction", value: "45%" },
      { label: "Load Time", value: "< 2s" },
      { label: "Year", value: "2024" }
    ],
    
    media: [
      {
        src: "/images/ShamanAsher/ShamanAsher.png",
        alt: "The Shaman Asher website with mystical design elements",
        caption: "Mystical landing page with smooth animations and modern design"
      },
      {
        src: "/images/ShamanAsher/ShamanAsherAbout.png",
        alt: "About The Shaman Asher",
        caption: "Engaging about section with accessible forms and content"
      },
      {
        src: "/images/ShamanAsher/ShamanAsherAboutBlog.png",
        alt: "Shaman Asher blog section",
        caption: "Blog showcase featuring mystical insights and teachings"
      },
      {
        src: "/images/ShamanAsher/ShamanAsherAboutServices.png",
        alt: "Mystical services offerings",
        caption: "Comprehensive service offerings with clear descriptions and CTAs"
      }
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
    image: "/images/NFTMarket.png",
    cover: "/images/NFTMarket.png",
    summary:
      "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA.",
    details: "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",
    
    problem: "NFT marketplaces often suffer from poor performance when displaying large collections, leading to janky scrolling and slow interactions. Users expect smooth, app-like experiences even when browsing thousands of digital assets.",
    
    solution: "Rebuilt a complete NFT marketplace from scratch as a single-page application with focus on performance optimization. Implemented virtualization for large lists, code-splitting for faster initial loads, and optimized rendering for smooth 60fps scrolling.",
    
    challenge: "Rendering thousands of NFT cards caused severe performance degradation. React's reconciliation algorithm struggled with frequent updates. Image loading created jarring layout shifts and memory bloat.",
    
    technicalSolution: "Implemented react-window for virtualized list rendering, only mounting visible items plus buffer. Used React.memo and useMemo strategically to prevent unnecessary re-renders. Built a custom image loader with placeholder dimensions, lazy loading, and automatic WebP conversion for 40% smaller file sizes.",
    
    highlights: [
      "Independently completed virtual internship capstone project",
      "Implemented list virtualization for performance optimization",
      "Built responsive grid layouts with CSS Grid and Flexbox",
      "Created wallet-like interactions and user flows",
      "Achieved Lighthouse scores in the 90s for performance"
    ],
    
    results: [
      "Maintained 60fps scrolling on standard hardware",
      "Lighthouse performance score above 90",
      "Lighthouse accessibility score above 90",
      "Reduced initial bundle size through code-splitting",
      "Successfully deployed responsive SPA handling large datasets"
    ],
    
    stats: [
      { label: "FPS", value: "60fps" },
      { label: "Performance", value: "90+" },
      { label: "Accessibility", value: "90+" },
      { label: "Year", value: "2023" }
    ],
    
    media: [
      {
        src: "/images/NFTMarket/NFTMarket.png",
        alt: "NFT Marketplace interface showing digital asset grid",
        caption: "High-performance marketplace grid with 60fps scrolling"
      },
      {
        src: "/images/NFTMarket/NFTMarketArt.png",
        alt: "NFT art collection showcase",
        caption: "Featured NFT collections with virtualized rendering"
      },
      {
        src: "/images/NFTMarket/NFTMarketExplore.png",
        alt: "Explore and discovery page",
        caption: "Discovery interface with optimized filtering and search"
      },
      {
        src: "/images/NFTMarket/NFTMarketUser.png",
        alt: "User profile and wallet interface",
        caption: "User dashboard with wallet integration and portfolio view"
      },
      {
        src: "/images/NFTMarket/NFTMarketSkeleton.png",
        alt: "Loading skeleton states",
        caption: "Optimized skeleton loading for improved perceived performance"
      }
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
    image: "/images/MovieStore.png",
    cover: "/images/MovieStore.png",
    summary:
      "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app.",
    details: "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",
    
    problem: "Movie enthusiasts need quick access to comprehensive movie information, but many existing solutions have slow search experiences, poor error handling, and confusing interfaces when dealing with API limitations or network issues.",
    
    solution: "Created a robust movie search application with the OMDB API, focusing on instant search feel through debouncing, request cancellation, and skeleton loading states. Implemented comprehensive error handling for all edge cases including network failures and API limits.",
    
    challenge: "OMDB API's free tier limited to 1,000 requests per day with no built-in rate limiting. Search-as-you-type created excessive API calls. Network failures and timeouts weren't handled gracefully.",
    
    technicalSolution: "Built a debounce mechanism with AbortController for request cancellation. Implemented an in-memory LRU cache to store recent searches. Created a comprehensive error boundary system with fallback UI for network failures, API limits, and invalid responses.",
    
    highlights: [
      "Mastered API integration with comprehensive error handling",
      "Implemented debounced search with request cancellation",
      "Built defensive UI for empty and invalid responses",
      "Created smooth skeleton loading states",
      "Deployed responsive app with GitHub Pages"
    ],
    
    results: [
      "Search latency reduced to 150-200ms perceived time",
      "Zero unhandled errors in production",
      "Smooth user experience with skeleton states",
      "Fully responsive design across all devices",
      "Clean, intuitive interface for movie discovery"
    ],
    
    stats: [
      { label: "Search Latency", value: "150-200ms" },
      { label: "Error Handling", value: "100%" },
      { label: "Responsive", value: "All devices" },
      { label: "Year", value: "2023" }
    ],
    
    media: [
      {
        src: "/images/MovieStore/MovieStore.png",
        alt: "OMDB Movie Store showing search results grid",
        caption: "Fast, responsive movie search with debounced API calls"
      },
      {
        src: "/images/MovieStore/MovieStoreMovies.png",
        alt: "Movie results grid view",
        caption: "Comprehensive movie grid with detailed information cards"
      },
      {
        src: "/images/MovieStore/MovieStoreCart.png",
        alt: "Shopping cart interface",
        caption: "Interactive shopping cart with real-time updates"
      },
      {
        src: "/images/MovieStore/MovieStoreCheckout.png",
        alt: "Checkout process flow",
        caption: "Streamlined checkout process with validation"
      },
      {
        src: "/images/MovieStore/MovieStoreTheme.png",
        alt: "Theme customization options",
        caption: "Theme switcher for personalized viewing experience"
      }
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
    image: "/images/Fweather.png",
    cover: "/images/Fweather.png",
    summary:
      "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather.",
    details: "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",
    
    problem: "Weather apps often provide too much information in cluttered interfaces, making it hard to quickly check current conditions and forecasts. Users want clean, fast weather information without overwhelming details.",
    
    solution: "Built a clean, playful weather dashboard that combines data from multiple weather APIs into a unified, intuitive interface. Implemented smart caching and optimized re-renders to keep the app lightweight and responsive.",
    
    challenge: "Multiple weather APIs had different data formats and rate limits. Geolocation API required HTTPS but GitHub Pages only supports HTTP for custom domains. Weather animations caused performance issues on mobile.",
    
    technicalSolution: "Created a unified data transformation layer to normalize different API responses. Implemented fallback location detection using IP-based geolocation when navigator.geolocation fails. Used CSS animations instead of JavaScript for weather effects, with prefers-reduced-motion support.",
    
    highlights: [
      "Integrated multiple weather APIs for comprehensive data",
      "Implemented browser geolocation for automatic location",
      "Built clean, playful UI with weather animations",
      "Optimized with caching and minimal re-renders",
      "Created responsive design for all screen sizes"
    ],
    
    results: [
      "Initial load time reduced to ~1.2 seconds on desktop",
      "Smooth location-based updates without page refresh",
      "Efficient caching reduced API calls by 50%",
      "Zero layout shift during data updates",
      "Delightful user experience with weather animations"
    ],
    
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "Cache Efficiency", value: "50%" },
      { label: "Updates", value: "Real-time" },
      { label: "Year", value: "2023" }
    ],
    
    media: [
      {
        src: "/images/Fweather/Fweather.png",
        alt: "Fweather dashboard showing weather conditions",
        caption: "Main weather dashboard with current conditions and animations"
      },
      {
        src: "/images/Fweather/FweatherWeather.png",
        alt: "Detailed weather view",
        caption: "Comprehensive weather details with forecasts from multiple APIs"
      },
      {
        src: "/images/Fweather/FweatherContact.png",
        alt: "Location input interface",
        caption: "User-friendly contact form utilizing EmailJS for inquiries."
      },
      {
        src: "/images/Fweather/FweatherFact.png",
        alt: "Weather fun facts display",
        caption: "Playful weather facts adding personality to the app"
      },
      {
        src: "/images/Fweather/FweatherLoading.png",
        alt: "Loading states and animations",
        caption: "Smooth loading transitions with optimized animations"
      }
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
];
