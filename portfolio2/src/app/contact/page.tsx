import type { Metadata } from "next";
import ClientContact from "@/components/contact/ClientContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for freelance, full-time, or collaboration opportunities.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <ClientContact />;
}
