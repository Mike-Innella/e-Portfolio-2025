import type { Metadata } from "next";
import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/typography.css";
import "../styles/utils.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ThemeRegistry from "./ThemeRegistry";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikeinnella.dev"),
  title: {
    default: "Mike Innella | e-Portfolio",
    template: "%s | Mike Innella"
  },
  description:
    "Frontend-focused full-stack developer based in Richmond, VA. I build clean, performant apps with React, Next.js, and TypeScript—polished UX, robust APIs, and production-ready code.",
  keywords: [
    "Mike Innella",
    "frontend developer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Richmond VA"
  ],
  authors: [{ name: "Mike Innella" }],
  creator: "Mike Innella",
  publisher: "Mike Innella",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/MILogo.png", type: "image/png", sizes: "512x512" }
    ],
    apple: "/MILogo.png",
    shortcut: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: "https://mikeinnella.dev",
    siteName: "Mike Innella",
    title: "Mike Innella | e-Portfolio",
    description:
      "Frontend-focused full-stack developer building fast, accessible web apps with React, Next.js, and TypeScript.",
    images: [{ url: "/og" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Innella | e-Portfolio",
    description:
      "Frontend-focused full-stack developer building fast, accessible web apps with React, Next.js, and TypeScript.",
    images: ["/og"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <Nav />
          <main className="container page-content">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
