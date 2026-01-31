"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import s from "./Footer.module.css";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.root}>
      <Box className={`container ${s.inner}`}>
        {/* Branding */}
        <Box className={s.branding}>
          <Box className={s.logoWrap}>
            <Box className={s.brandText}>
              <Typography component="strong" className={s.name}>
                {site.name}
              </Typography>
              <Typography component="span" className={s.tagline}>
                {site.tagline}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Navigation */}
        <Box component="nav" className={s.nav} aria-label="Footer">
          <MuiLink component={Link} href="/" underline="none" color="inherit">
            Home
          </MuiLink>
          <MuiLink component={Link} href="/about" underline="none" color="inherit">
            About
          </MuiLink>
          <MuiLink component={Link} href="/projects" underline="none" color="inherit">
            Projects
          </MuiLink>
          <MuiLink component={Link} href="/contact" underline="none" color="inherit">
            Contact
          </MuiLink>
          <MuiLink
            component={Link}
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            underline="none"
            color="inherit"
          >
            Resume
          </MuiLink>
        </Box>

        {/* Socials */}
        <Box className={s.socials}>
          {site.socials.map((scl) => (
            <MuiLink
              key={scl.name}
              href={scl.href}
              target={scl.href.startsWith("http") ? "_blank" : undefined}
              rel={scl.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={scl.name}
              className={s.socialLink}
              title={scl.name}
              underline="none"
              color="inherit"
            >
              <span className={s.socialDot} aria-hidden />
              <span className={s.socialText}>{scl.name}</span>
            </MuiLink>
          ))}
        </Box>
      </Box>

      <Box className={`container ${s.bottomRow}`}>
        <Typography component="p" className={s.credit}>
          Built with Next.js & TypeScript
        </Typography>
        <Typography component="p" className={s.copy}>
          © {year} {site.name}. All Rights Reserved.
        </Typography>
        <MuiLink
          component={Link}
          href={site.linkedinHref}
          target="_blank"
          rel="noreferrer"
          className={s.subtleLink}
          underline="none"
          color="inherit"
        >
          Let&apos;s connect on LinkedIn
        </MuiLink>
      </Box>
    </footer>
  );
}
