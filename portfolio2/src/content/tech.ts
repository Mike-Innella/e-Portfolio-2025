// content/tech.ts
export const techStack = [
  // Frontend
  { key: "nextjs",     label: "Next.js" },
  { key: "react",      label: "React" },
  { key: "typescript", label: "TypeScript" },
  { key: "javascript", label: "JavaScript" },
  { key: "html",       label: "HTML5" },
  { key: "css",        label: "CSS3" },
  { key: "tailwind",   label: "Tailwind CSS" },
  { key: "mui",        label: "Material UI" },
  { key: "redux",      label: "Redux Toolkit" }, // uses Redux logo
  { key: "vite",       label: "Vite" },
  { key: "threejs",    label: "Three.js" },
  { key: "figma",      label: "Figma" },

  // Backend
  { key: "nodejs",     label: "Node.js" },
  { key: "express",    label: "Express.js" },

  // Data
  { key: "postgresql", label: "PostgreSQL" },
  { key: "mongodb",    label: "MongoDB" },
  { key: "mysql",      label: "MySQL" },
  { key: "supabase",   label: "Supabase" },
  { key: "firebase",   label: "Firebase" },

  // DevOps
  { key: "vercel",     label: "Vercel" },
  { key: "docker",     label: "Docker" },
  { key: "linux",      label: "Linux/Ubuntu" },
  { key: "github",     label: "GitHub" },
  { key: "git",        label: "Git" },
] as const;
