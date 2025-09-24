module.exports = [
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/.next-internal/server/app/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/content/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "tunein",
        title: "TuneIn",
        subtitle: "Independent Project",
        image: "/images/TuneIn.png",
        summary: "Focus-music web app with mood-based YouTube playlists and a session timer for distraction-free study/work, built with React and deployed on Vercel.",
        details: "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",
        details: "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",
        tags: [
            "react",
            "javascript",
            "api",
            "css",
            "html",
            "routing",
            "supabase"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/TuneIn",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://tune-in-theta.vercel.app/",
                type: "live"
            }
        ]
    },
    {
        slug: "howard-motor",
        title: "Howard Motor Webapp",
        subtitle: "Freelance",
        image: "/images/HowardMotor.png",
        summary: "Solo freelance web app for Howard Motor Corp, built with React and Firebase to modernize customer engagement.",
        details: "Tech: React, Firebase (Auth/Firestore/Hosting), Tailwind, EmailJS. Focus was secure form flows and a mobile-first UI for non-technical users. I used least-privilege Firestore rules, serverless email hand-off, and simplified step forms. Result: mobile FCP ≈1.3s and fewer abandoned requests after validation + progress cues.",
        details: "Tech: React, Firebase (Auth/Firestore/Hosting), Tailwind, EmailJS. Focus was secure form flows and a mobile-first UI for non-technical users. I used least-privilege Firestore rules, serverless email hand-off, and simplified step forms. Result: mobile FCP ≈1.3s and fewer abandoned requests after validation + progress cues.",
        tags: [
            "react",
            "firebase",
            "tailwind",
            "api",
            "nodejs",
            "emailjs"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/howard-motor-webapp",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://www.howardmotorco.net/",
                type: "live"
            }
        ]
    },
    {
        slug: "spoiler-shield",
        title: "Spoiler Shield",
        subtitle: "Mobile/Web Developer",
        image: "/images/SpoilerShield.png",
        summary: "Details coming soon — project link: https://www.spoilershield.xyz/",
        details: "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests. (Public beta still evolving.)",
        details: "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests. (Public beta still evolving.)",
        tags: [
            "nextjs",
            "typescript",
            "api"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/0xagf0x/spoiler-shield-web",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://www.spoilershield.xyz/",
                type: "live"
            }
        ]
    },
    {
        slug: "skinstric-ai",
        title: "Skinstric.AI",
        subtitle: "Frontend Engineer",
        image: "/images/Skinstric.png",
        summary: "Built a real-time skin analysis platform using OpenAI Vision API and Next.js with 98% detection accuracy.",
        details: "Tech: Next.js, React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",
        details: "Tech: Next.js, React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",
        tags: [
            "react",
            "javascript",
            "api",
            "css",
            "threejs"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/Skinstric.AI-Mike_Innella_Internship",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://skinstric-ai-mike-innella-internship.vercel.app/",
                type: "live"
            }
        ]
    },
    {
        slug: "summarist",
        title: "Summarist",
        subtitle: "Independent Project",
        image: "/images/Summarist.png",
        summary: "Rebuilt a book-summary app clone using Next.js, TypeScript, Tailwind CSS, and Supabase. Features authentication, dynamic pages, and responsive UI.",
        details: "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",
        details: "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",
        tags: [
            "nextjs",
            "typescript",
            "supabase",
            "tailwind",
            "css"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/summarist-home-page",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://summarist-home-page-pied.vercel.app/",
                type: "live"
            }
        ]
    },
    {
        slug: "shaman-asher",
        title: "The Shaman Asher",
        subtitle: "Freelance",
        image: "/images/ShamanAsher.png",
        summary: "Hired as a freelance UI/UX developer to modernize a mystical services website. Introduced animated loaders.",
        details: "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",
        details: "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",
        tags: [
            "typescript",
            "tailwind",
            "emailjs",
            "html",
            "nodejs"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/theshamanasher/theshamanasher",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://www.shamanasher.com/",
                type: "live"
            }
        ]
    },
    {
        slug: "nft-marketplace",
        title: "NFT Marketplace",
        subtitle: "Frontend Developer (Internship)",
        image: "/images/NFTMarket.png",
        summary: "Virtual internship capstone where I independently rebuilt an NFT Marketplace as a responsive React SPA.",
        details: "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",
        details: "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",
        tags: [
            "react",
            "javascript",
            "css",
            "html",
            "routing"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/nft-marketplace--MIke_Innella-Internship",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app/",
                type: "live"
            }
        ]
    },
    {
        slug: "omdb-store",
        title: "OMDB Movie Store",
        subtitle: "Independent Project",
        image: "/images/MovieStore.png",
        summary: "Solo portfolio project built to master web APIs and dynamic UI development. Created a responsive React app.",
        details: "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",
        details: "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",
        tags: [
            "react",
            "javascript",
            "api",
            "css"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/OMDBProject",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://mike-innella.github.io/OMDBProject/",
                type: "live"
            }
        ]
    },
    {
        slug: "fweather",
        title: "Fweather",
        subtitle: "Independent Project",
        image: "/images/Fweather.png",
        summary: "Personal project: a playful React weather dashboard integrating multiple APIs for real-time weather.",
        details: "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",
        details: "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",
        tags: [
            "react",
            "javascript",
            "api",
            "css",
            "html"
        ],
        links: [
            {
                tooltip: "See code",
                link: "https://github.com/Mike-Innella/Fweather",
                type: "code"
            },
            {
                tooltip: "See app",
                link: "https://mike-innella.github.io/Fweather/",
                type: "live"
            }
        ]
    }
];
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/ProjectDetail.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "ProjectDetail-module__XuraMq__backButton",
  "container": "ProjectDetail-module__XuraMq__container",
  "description": "ProjectDetail-module__XuraMq__description",
  "hero": "ProjectDetail-module__XuraMq__hero",
  "link": "ProjectDetail-module__XuraMq__link",
  "links": "ProjectDetail-module__XuraMq__links",
  "secondary": "ProjectDetail-module__XuraMq__secondary",
  "section": "ProjectDetail-module__XuraMq__section",
  "sectionTitle": "ProjectDetail-module__XuraMq__sectionTitle",
  "subtitle": "ProjectDetail-module__XuraMq__subtitle",
  "tag": "ProjectDetail-module__XuraMq__tag",
  "tags": "ProjectDetail-module__XuraMq__tags",
  "title": "ProjectDetail-module__XuraMq__title",
});
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/ProjectDetail.module.css [app-rsc] (css module)");
;
;
;
;
;
const getTechColor = (tech)=>{
    const colors = {
        'html': '#e34c26',
        'css': '#1572b6',
        'javascript': '#f1e05a',
        'typescript': '#3178c6',
        'react': '#61dafb',
        'nodejs': '#68a063',
        'firebase': '#ffca28',
        'tailwind': '#06b6d4',
        'api': '#9333ea',
        'threejs': '#ffffff',
        'emailjs': '#ff6b6b',
        'routing': '#64748b'
    };
    return colors[tech.toLowerCase()] || '#64748b';
};
function ProjectDetail({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === params.slug);
    if (!project) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/projects",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].backButton,
                children: "← Back to Projects"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            project.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subtitle,
                                children: project.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                                style: {
                                    lineHeight: 1.6
                                },
                                children: project.details
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    project.tags?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Tech Stack"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].tags,
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].tag,
                                        style: {
                                            '--tag-color': getTechColor(tag)
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this) : null,
                    project.links?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Project Links"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].links,
                                children: project.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.link,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].link} ${link.type === 'code' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$e$2d$Portfolio$2d$2025$2f$portfolio2$2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].secondary : ''}`,
                                        title: link.tooltip,
                                        children: [
                                            link.type === "code" ? "View Code" : "Live Demo",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, link.link, true, {
                                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/e-Portfolio-2025/portfolio2/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2cc73f8f._.js.map