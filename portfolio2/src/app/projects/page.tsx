import type { Metadata } from "next";
import ClientProjects from "@/components/projects/ClientProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work: production-grade React/Next.js apps, UI systems, and API integrations.",
  alternates: { canonical: "/projects" },
  openGraph: { 
    title: "Projects | Mike Innella", 
    url: "https://mikeinnella.dev/projects" 
  }
};

export default function ProjectsPage() {
  return <ClientProjects />;
}
