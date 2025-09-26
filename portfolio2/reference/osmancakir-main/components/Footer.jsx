import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaGithubAlt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__info}>
          <h3 className={styles.footer__title}>Osman Cakir</h3>
          <p className={styles.footer__para}>
            Crafting digital experiences with creativity and precision. I
            specialise in building modern, responsive, and user-friendly
            websites that help businesses grow online.
          </p>
        </div>

        <div className={styles.footer__links}>
          <h4 className={styles.links__title}>Quick Links</h4>
          <nav className={styles.links__nav}>
            <Link href="/" className={styles.footer__link}>
              Home
            </Link>
            <Link href="#projects" className={styles.footer__link}>
              Projects
            </Link>
            <Link href="#contact" className={styles.footer__link}>
              Contact
            </Link>
          </nav>
        </div>

        <div className={styles.social__links}>
          <h4 className={styles.social__title}>Connect</h4>
          <div className={styles.social__icons}>
            <a
              href="https://github.com/calicomediadev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithubAlt className={styles.icons} />
            </a>
            <a
              href="https://linkedin.com/in/osman-cakir1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {currentYear} Osman Cakir | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
