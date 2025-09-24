// scripts/export-icons.ts
import { writeFile, mkdir } from "fs/promises";
import { resolve } from "path";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siSupabase,
  siPostgresql,
  siNodedotjs,
  siExpress,
  siVercel,
  siGithub,
  siGit,
  siTailwindcss,
  siVite,
  siRedux,
  siFirebase,
  siStripe,
  siDocker,
  siLinux,
  siThreedotjs,
  siHtml5,
  siCss,
  siFigma,
} from "simple-icons/icons";

const OUT_DIR = resolve(process.cwd(), "public/icons");

type IconEntry = {
  [key: string]: { title: string; hex: string; path: string };
};

const icons: IconEntry = {
  nextjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  supabase: siSupabase,
  postgresql: siPostgresql,
  nodejs: siNodedotjs,
  express: siExpress,
  vercel: siVercel,
  github: siGithub,
  git: siGit,
  tailwind: siTailwindcss,
  vite: siVite,
  redux: siRedux,
  firebase: siFirebase,
  stripe: siStripe,
  docker: siDocker,
  linux: siLinux,
  threejs: siThreedotjs,
  html: siHtml5,
  css: siCss,
  figma: siFigma,
};

// Icons that should use currentColor (dark icons that are hard to see on dark backgrounds)
const themeControlledIcons = new Set(['nextjs', 'express', 'vercel', 'github', 'threejs']);

const svgWrap = (icon: { title: string; hex: string; path: string }, filename: string) => {
  const fillValue = themeControlledIcons.has(filename) ? 'currentColor' : `#${icon.hex}`;
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">\n` +
    `  <title>${icon.title}</title>\n` +
    `  <path fill="${fillValue}" d="${icon.path}"/>\n` +
    `</svg>\n`;
};

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  const writes = Object.entries(icons).map(async ([filename, icon]) => {
    const file = resolve(OUT_DIR, `${filename}.svg`);
    await writeFile(file, svgWrap(icon, filename), "utf8");
    console.log("✓", file);
  });
  await Promise.all(writes);
  console.log(`All icons written to ${OUT_DIR}`);
}

run().catch((err) => {
  console.error("Error exporting icons:", err);
  process.exit(1);
});
