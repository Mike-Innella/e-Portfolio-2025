import type { Metadata } from "next";
import ClientServices from "@/components/services/ClientServices";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website creation, debugging & support, and EmailJS setup — plus tailored AI assistants for small businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ClientServices />;
}
