export const site = {
  name: "Michael Innella",
  tagline: "Full-Stack Developer | Front-end Engineer | UI/UX Designer",
  email: "mainnella@gmail.com",
  socials: [
    { name: "GitHub", href: "https://github.com/Mike-Innella" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-innella-b5567021b/",
    },
    { name: "Email", href: "mailto:mainnella@gmail.com" },
  ],
  resumeHref: "/resume.pdf",
  
  get linkedinHref(): string {
    const li = this.socials.find(x => x.name.toLowerCase() === "linkedin");
    return li?.href ?? "https://www.linkedin.com";
  },
} as const;
