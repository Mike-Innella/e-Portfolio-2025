"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import s from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes and scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <header className={s.root}>
      <nav className={`container ${s.inner}`}>
        <div className={s.logoHeaderWrapper}>
          <Image
            src="/MILogo.png"
            alt="Mike Innella Logo"
            width={40}
            height={40}
            priority
          />
          <h2 className={s.logoHeader}>Michael Innella</h2>
        </div>

        {/* Desktop Navigation */}
        <div className={s.links}>
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${s.link} ${active ? s.active : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className={`${s.mobileMenuButton} ${
            isMobileMenuOpen ? s.mobileMenuButtonOpen : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={s.dot}></span>
          <span className={s.dot}></span>
          <span className={s.dot}></span>
        </button>

        {/* Dark Overlay */}
        <div
          className={`${s.overlay} ${isMobileMenuOpen ? s.overlayOpen : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={s.mobileMenu}
          data-state={isMobileMenuOpen ? "open" : "closed"}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className={s.mobileLinks}>
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${s.mobileLink} ${active ? s.mobileActive : ""}`}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </nav>
    </header>
  );
}
