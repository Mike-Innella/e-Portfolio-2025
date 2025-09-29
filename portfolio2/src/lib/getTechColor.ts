// Centralized tech color mapping
const techColors: Record<string, string> = {
  html: '#e34c26',
  css: '#1572b6',
  javascript: '#f1e05a',
  typescript: '#3178c6',
  react: '#61dafb',
  nodejs: '#68a063',
  firebase: '#ffca28',
  tailwind: '#06b6d4',
  api: '#9333ea',
  threejs: '#ffffff',
  emailjs: '#ff6b6b',
  routing: '#64748b',
  nextjs: '#000000',
  supabase: '#3ecf8e'
};

export const getTechColor = (tech: string): string => {
  return techColors[tech.toLowerCase()] || '#3f8cff';
};
