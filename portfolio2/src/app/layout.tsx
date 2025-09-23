import type { Metadata } from "next";
import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/typography.css";
import "../styles/utils.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My work and contact information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Nav />
        <main className="container page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
