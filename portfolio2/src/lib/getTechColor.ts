// Centralized tech color mapping
const techColors: Record<string, string> = {
  // Languages
  html: '#e34c26',
  css: '#1572b6',
  javascript: '#f1e05a',
  typescript: '#3178c6',
  
  // Frameworks & Libraries
  react: '#61dafb',
  nextjs: '#000000',
  nodejs: '#68a063',
  express: '#000000',
  threejs: '#000000',
  tailwind: '#06b6d4',
  
  // Tools & Services
  firebase: '#ffca28',
  supabase: '#3ecf8e',
  api: '#9333ea',
  emailjs: '#ff6b6b',
  routing: '#64748b',
  
  // Additional common tags (variations)
  'javascript.js': '#f1e05a',
  'tailwind css': '#06b6d4',
  'node.js': '#68a063',
  'next.js': '#000000',
  'three.js': '#000000'
};

// Calculate luminance of a color to determine if it needs dark or light text
const getColorLuminance = (hexColor: string): number => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  
  // Apply gamma correction
  const gammaCorrect = (channel: number): number => {
    return channel <= 0.03928 
      ? channel / 12.92 
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  };
  
  const rLinear = gammaCorrect(r);
  const gLinear = gammaCorrect(g);
  const bLinear = gammaCorrect(b);
  
  // Calculate relative luminance using WCAG formula
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

// Determine if text should be dark or light based on background
export const getTextColorForBackground = (backgroundColor: string): string => {
  const luminance = getColorLuminance(backgroundColor);
  // Use WCAG recommended threshold - backgrounds with >17.9% luminance get black text
  // This provides optimal contrast for readability
  return luminance > 0.179 ? '#000000' : '#ffffff';
};

export const getTechColor = (tech: string): string => {
  return techColors[tech.toLowerCase()] || '#3f8cff';
};

// Get both background and text color for a tech tag
export const getTechColors = (tech: string): { background: string; text: string } => {
  const background = getTechColor(tech);
  const text = getTextColorForBackground(background);
  return { background, text };
};
