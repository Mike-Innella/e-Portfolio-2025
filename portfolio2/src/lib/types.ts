export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  year?: number;
  hero?: string; // image path
  links?: { label: string; href: string }[];
};
