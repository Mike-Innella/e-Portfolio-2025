import fs from "node:fs";

const file = "src/content/projects.ts";
let src = fs.readFileSync(file, "utf8");

// 1) Rename the field in objects: description -> summary
src = src.replace(/\bdescription\s*:/g, "summary:");

// 2) Insert details per slug (after the summary line)
const details = {
  "tunein": "Tech: React, JavaScript, CSS, YouTube Data API, Vercel. Key challenges were syncing session timers with variable video lengths, autoplay restrictions, and quota limits. I built a playlist stitcher that queues multiple tracks to match the timer and added debounced, cached searches. Result: timer-to-track sync is within ±10s for ~95% of sessions with cold loads ≈1–1.5s on desktop.",
  "howard-motor": "Tech: React, Firebase (Auth/Firestore/Hosting), Tailwind, EmailJS. Focus was secure form flows and a mobile-first UI for non-technical users. I used least-privilege Firestore rules, serverless email hand-off, and simplified step forms. Result: mobile FCP ≈1.3s and fewer abandoned requests after validation + progress cues.",
  "spoiler-shield": "Tech: Next.js, TypeScript, API integrations. The core problem was filtering spoilers consistently without over-blocking. I implemented a normalized rule system with a preview/test mode and cached lookups. Result: sub-200ms rule application on typical feeds and a low false-positive rate targeted via unit tests. (Public beta still evolving.)",
  "skinstric-ai": "Tech: Next.js, React, OpenAI Vision API, CSS, Three.js (UI flourishes), Vercel. Main issues were inference latency and robust error states for user images. I added progressive UI states, client-side checks, and smaller payloads. Result: prototype measured ~98% detection on an internal set with typical round-trip ≈1–2s on desktop.",
  "summarist": "Tech: Next.js, TypeScript, Supabase, Tailwind. I built auth, dynamic routes, and a responsive layout while keeping search snappy. Debounced queries and route-level code-splitting improved perceived speed. Result: LCP under ~2s on desktop and sub-150ms search feedback for common queries.",
  "shaman-asher": "Tech: TypeScript, Tailwind, EmailJS. Hired to modernize UX: added loaders, accessible forms, and consistent motion. The challenge was creating a polished feel without heavy bundles. Result: reduced layout shift (stable CLS), lean CSS, and clearer conversion paths via simplified CTAs.",
  "nft-marketplace": "Tech: React, JavaScript, CSS. Internship capstone focused on grid performance, pagination, and wallet-like interactions. I virtualized long lists and split code by route to keep the app responsive. Result: 60fps scroll on commodity laptops and Lighthouse scores in the 90s for performance/accessibility.",
  "omdb-store": "Tech: React, OMDB API, CSS. The tricky parts were API edge cases, error states, and making search feel instant. I added debounce + cancelation and defensive UI around empty/invalid responses. Result: perceived search latency ≈150–200ms after debounce with clear skeleton and empty states.",
  "fweather": "Tech: React, multiple weather APIs, CSS/HTML. Combined geolocation, current conditions, and forecasts into a cohesive UI. Caching and minimal re-renders keep it light. Result: typical initial load ≈1.2s on desktop with smooth updates on location change.",
};

for (const [slug, text] of Object.entries(details)) {
  // Insert `details: "...",` right after the summary line of that slug block
  const re = new RegExp(
    `(slug:\\s*"${slug}"[\\s\\S]*?summary:\\s*[^\\n]+\\n)`,
    "m"
  );
  src = src.replace(re, `$1      details: "${text.replace(/"/g, '\\"')}",\n`);
}

fs.writeFileSync(file, src);
console.log("Migration complete: description->summary and details inserted.");
