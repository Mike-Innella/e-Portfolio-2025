"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
  return (
    <header className={s.root}>
      <nav className={`container ${s.inner}`}>
        <div className={s.logo}>
          {" "}
        
            <Image
              src="/MILogo.png" 
              alt="Mike Innella Logo"
              width={40} 
              height={40}
              priority
            />
        </div>
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
      </nav>
    </header>
  );
}
