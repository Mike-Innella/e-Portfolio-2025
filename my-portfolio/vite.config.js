import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    svgr(), // 👈 Add this for SVG React components
    tailwindcss(), // (optional, most people put Tailwind in postcss.config.js)
  ],
});
