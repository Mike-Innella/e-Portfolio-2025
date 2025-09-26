import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Hamburger({ isOpen, onClick }) {
  return (
    <button
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <style jsx>{`
        .hamburger-menu {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001; /* Higher than mobile-nav */
        }

        .hamburger-line {
          width: 2rem;
          height: 0.25rem;
          background: var(--text-primary);
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        .hamburger-menu.open .hamburger-line:first-child {
          transform: rotate(45deg);
        }

        .hamburger-menu.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger-menu.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg);
        }

        @media (max-width: 768px) {
          .hamburger-menu {
            display: flex;
          }
        }
      `}</style>
    </button>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`${hasScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="nav-container">
        <div className="logo__container">
          <Link href="/" className="header__name">
            OSMAN CAKIR
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav__links--container desktop-nav">
          <ul className="nav__links">
            <li className="nav__link">
              <a href="/">Home</a>
            </li>
            <li className="nav__link">
              <a href="/#projects">Projects</a>
            </li>
            <li className="nav__link">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Button */}
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <ul className="mobile-nav__links">
            <li className="mobile-nav__link">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="mobile-nav__link">
              <a href="/#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="mobile-nav__link">
              <a href="/#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/calicomediadev"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="mailto:osman.cakir1@outlook.com" className="social-icon">
                <FaEnvelope />
              </a>
              <a href="tel:0435341135" className="social-icon">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          background-color: rgba(14, 17, 23, 0.8);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        nav.scrolled {
          background-color: rgba(14, 17, 23, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          padding: 20px 5%;
          transition: padding 0.3s ease;
        }

        nav.scrolled .nav-container {
          padding: 15px 5%;
        }

        .nav__links--container {
          transition: all 0.3s ease;
        }

        .nav__links {
          display: flex;
          gap: 30px;
        }

        .nav__link {
          list-style: none;
          font-weight: 500;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .nav__link:hover {
          color: var(--accent-primary);
        }

        .header__name {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        /* Mobile Navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #0e1117; /* Solid color instead of semi-transparent */
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
          transition: all 0.3s ease;
          padding: 2rem;
          z-index: 1000;
        }

        .mobile-nav.open {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        }

        .mobile-nav-content {
          max-width: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }

        .mobile-nav__links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 0;
          width: 100%;
        }

        .mobile-nav__link {
          list-style: none;
          width: 100%;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          transition-delay: calc(0.1s * var(--i, 0));
        }

        .mobile-nav.open .mobile-nav__link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-nav__link a {
          display: block;
          font-size: 2rem;
          font-weight: 600;
          padding: 0.5rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .mobile-nav__link a:hover {
          color: var(--accent-primary);
        }

        .mobile-nav__social {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .mobile-nav__social h3 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .nav__links--container {
            display: none;
          }

          .header__name {
            font-size: 20px;
          }

          .mobile-nav__link:nth-child(1) {
            --i: 1;
          }
          .mobile-nav__link:nth-child(2) {
            --i: 2;
          }
          .mobile-nav__link:nth-child(3) {
            --i: 3;
          }
          .mobile-nav__link:nth-child(4) {
            --i: 4;
          }

          /* Add margin for the hamburger menu */
          .logo__container {
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .header__name {
            font-size: 18px;
          }

          .mobile-nav__link a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Nav;
