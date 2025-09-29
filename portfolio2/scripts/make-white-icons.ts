import * as fs from "node:fs";
import * as path from "node:path";

const SRC_DIR: string = "public/icons";
const OUT_DIR: string = "public/icons/white";

const targets: string[] = [
  "github.svg",
  "nextjs.svg",
  "express.svg",
  "threejs.svg",
  "vercel.svg",
];

// Create output directory if it doesn't exist
fs.mkdirSync(OUT_DIR, { recursive: true });

for (const name of targets) {
  const inPath: string = path.join(SRC_DIR, name);
  const outPath: string = path.join(OUT_DIR, name.replace(".svg", "-white.svg"));
  
  try {
    let svg: string = fs.readFileSync(inPath, "utf8");

    // Normalize everything to pure white
    svg = svg
      // Replace all fill attributes with white
      .replace(/fill="[^"]*"/gi, 'fill="#ffffff"')
      // Replace all stroke attributes with white
      .replace(/stroke="[^"]*"/gi, 'stroke="#ffffff"')
      // Ensure paths without fill/stroke get a white fill
      .replace(/<path([^>]*?)\/>/gi, (match: string, attrs: string): string =>
        /fill=|stroke=/.test(attrs) ? match : `<path${attrs} fill="#ffffff"/>`
      )
      // Ensure other shape elements get white fill if missing
      .replace(/<(rect|circle|polygon)([^>]*?)\/>/gi, (match: string, tag: string, attrs: string): string =>
        /fill=|stroke=/.test(attrs) ? match : `<${tag}${attrs} fill="#ffffff"/>`
      )
      // Remove inline color styles on <svg> element
      .replace(/<svg([^>]*?)style="[^"]*?color:[^";]+;?([^"]*?)"([^>]*)>/i, '<svg$1$3>')
      // Also handle style attributes that might have other properties
      .replace(/<svg([^>]*?)style="([^"]*?)"([^>]*)>/i, (match: string, pre: string, styles: string, post: string): string => {
        const cleanedStyles: string = styles
          .split(';')
          .filter((s: string) => !s.trim().startsWith('color:'))
          .join(';')
          .trim();
        return cleanedStyles ? `<svg${pre}style="${cleanedStyles}"${post}>` : `<svg${pre}${post}>`;
      });

    fs.writeFileSync(outPath, svg, "utf8");
    console.log(`✓ Created ${outPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${name}:`, (error as Error).message);
  }
}

console.log("\n✅ White icon generation complete!");
