import type { Metadata } from "next";
import ClientAbout from "@/components/about/ClientAbout";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend-focused full-stack developer in Richmond, VA—blending clean architecture with thoughtful UI/UX.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return <ClientAbout />;
}
