import type { Metadata } from "next";
import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/typography.css";
import "../styles/utils.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My work and contact information",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/MILogo.png", type: "image/png", sizes: "512x512" }
    ],
    apple: "/MILogo.png",
    shortcut: "/favicon.ico"
  },
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
        <Nav />
        <main className="container page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
