import Head from "next/head";
import Image from "next/image";
import poplocal from "../assets/poplocal1.png";
import mileu from "../assets/mileu1.png";
import Link from "next/link";
import osman from "../assets/potrait.webp";
import ProjectLaptop from "@/components/ProjectLaptop";
import { useEffect, useState, useRef } from "react";
import healthheiress from "../assets/healthheiress.png";
import dandaraga from "../assets/danda1.png";
import Contact from "@/components/Contact";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaTwitter,
  FaInstagram,
  FaPalette,
  FaCogs,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const codeRef = useRef(null);

  const codeSnippet = `// Frontend Developer
const developer = {
  name: 'Osman Cakir',
  location: 'Sydney, NSW',
  skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3'],
  specialties: ['Figma to Code', 'Responsive Design', 'UI/UX'],
  projects: '30+ client websites',
};`;

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    if (isTyping) {
      intervalId = setInterval(() => {
        setText(codeSnippet.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === codeSnippet.length) {
          clearInterval(intervalId);
          // Add a blinking cursor at the end
          setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      }, 50); // Adjust speed as needed
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <>
      <Head>
        <title>Osman Cakir | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer specialising in translating UI/UX designs into high-quality, performant web applications. Based in Sydney, NSW."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="hero">
          <div className="container">
            <div className="hero-content">
              <div className="profile-card">
                <div className="profile-image-container">
                  <Image
                    src={osman}
                    alt="Osman Cakir"
                    className="profile-image"
                  />
                </div>
                <h2 className="profile-name">Osman Cakir</h2>
                <p className="profile-description">
                  Frontend Developer based in Sydney, NSW with expertise in
                  React and Next.js
                </p>
                <div className="profile-contact">
                  <a href="tel:0435341135" className="contact-item">
                    <FaPhone className="contact-icon" /> 0435 341 135
                  </a>
                  <a
                    href="mailto:osman.cakir1@outlook.com"
                    className="contact-item"
                  >
                    <FaEnvelope className="contact-icon" /> Email Me
                  </a>
                </div>
                <div className="profile-socials">
                  <a
                    href="https://github.com/calicomediadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github-icon"
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
                  <a
                    href="https://www.calicomedia.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaGlobe />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/osman-cakir1/"
                    className="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              <div className="hero-details">
                <div className="code-editor-container">
                  <div className="code-editor-header">
                    <div className="window-buttons">
                      <span className="window-button red"></span>
                      <span className="window-button yellow"></span>
                      <span className="window-button green"></span>
                    </div>
                    <div className="window-title">developer.js</div>
                  </div>
                  <pre className="code-editor">
                    <code
                      ref={codeRef}
                      dangerouslySetInnerHTML={{
                        __html: text
                          .replace(
                            /(\/\/ Frontend Developer)/g,
                            '<span class="code-comment">$1</span>'
                          )
                          .replace(
                            /(const developer)/g,
                            '<span class="code-const">$1</span>'
                          )
                          .replace(
                            /(\{|\})/g,
                            '<span class="code-bracket">$1</span>'
                          )
                          .replace(
                            /(name|location|skills|specialties|projects):/g,
                            '<span class="code-property">$1</span>'
                          )
                          .replace(
                            /('Osman Cakir'|'Sydney, NSW'|'React'|'Next.js'|'JavaScript'|'HTML5'|'CSS3'|'Figma to Code'|'Responsive Design'|'UI\/UX'|'30\+ client websites')/g,
                            '<span class="code-string">$1</span>'
                          )
                          .replace(
                            /(\[|\])/g,
                            '<span class="code-array">$1</span>'
                          )
                          .replace(
                            /(;)/g,
                            '<span class="code-semicolon">$1</span>'
                          ),
                      }}
                    ></code>
                    <span
                      className={`cursor ${!isTyping ? "blink" : ""}`}
                    ></span>
                  </pre>
                </div>

                <div className="title-container">
                  <h1 className="main-title">FRONTEND</h1>
                  <h1 className="secondary-title">DEVELOPER</h1>
                  <p className="title-description">
                    Detail-oriented Frontend Developer with a proven ability to
                    translate UI/UX designs and wireframes into high-quality,
                    performant, and scalable web applications. Passionate about
                    crafting seamless, user-friendly, and visually captivating
                    digital experiences.
                  </p>
                  <a href="#projects" className="see-work-btn">
                    See My Work
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 13l5 5 5-5"></path>
                      <path d="M7 6l5 5 5-5"></path>
                    </svg>
                  </a>
                </div>

                <div className="stats-container">
                  <div className="stat-item">
                    <h2 className="stat-number">+30</h2>
                    <p className="stat-label">
                      CLIENT
                      <br />
                      PROJECTS
                    </p>
                  </div>
                  <div className="stat-item">
                    <h2 className="stat-number">2</h2>
                    <p className="stat-label">
                      YEARS OF
                      <br />
                      EXPERIENCE
                    </p>
                  </div>
                  <div className="stat-item">
                    <h2 className="stat-number">UTS</h2>
                    <p className="stat-label">
                      BACHELOR
                      <br />
                      IT GRADUATE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">MY</h2>
              <h2 className="section-subtitle">EXPERTISE</h2>
            </div>

            <div className="expertise-content">
              <div className="expertise-text">
                <p>
                  As a Lead Developer at Calico Media, I've successfully
                  delivered over 30 client projects, specialising in translating
                  high-fidelity Figma designs into pixel-perfect, functional
                  websites.
                </p>
                <p>
                  My expertise lies in developing responsive, scalable, and
                  visually accurate user interfaces using React.js/Next.js,
                  HTML5, ensuring strict adherence to design specifications and
                  modern web standards.
                </p>
                <p>
                  I collaborate closely with UI/UX designers throughout the
                  development lifecycle to ensure technical feasibility and
                  bridge the gap between design vision and implementation,
                  directly contributing to meeting client objectives.
                </p>
              </div>

              <div className="skills-list">
                <div className="skill-category">
                  <h3>Languages & Frameworks</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">JavaScript (ES6+)</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">Shopify Liquid</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Styling & Pre-processors</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">CSS Modules</span>
                    <span className="skill-tag">Styled Components</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>UI/UX & Design</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">
                      Figma Design Implementation
                    </span>
                    <span className="skill-tag">Web Accessibility (WCAG)</span>
                    <span className="skill-tag">Responsive Design</span>
                    <span className="skill-tag">
                      Cross-Browser Compatibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">FEATURED</h2>
              <h2 className="section-subtitle">PROJECTS</h2>
            </div>

            <div className="projects-grid">
              <Link href="/poplocal" className="project-card">
                <ProjectLaptop
                  image={poplocal}
                  title="PopLocal"
                  description="Advanced eCommerce platform connecting 300+ local Canberra businesses with customers. Built with Next.js, featuring Square API integration, real-time inventory sync, and a headless CMS solution."
                  link="/poplocal"
                  stats={[
                    { value: "25K+", label: "Page Visits" },
                    { value: "1,831", label: "User Accounts" },
                  ]}
                  tags={[
                    "Next.js",
                    "React",
                    "Square API",
                    "Contentful",
                    "Firebase",
                    "RESTful APIs",
                  ]}
                />
              </Link>

              <Link href="/dandaraga" className="project-card">
                <ProjectLaptop
                  image={dandaraga}
                  title="Dandaraga Springs"
                  description="Custom Shopify development for a farm-to-table business featuring a unique 'Build Your Box' component. Pixel-perfect implementation of Figma designs with custom courier API integration for delivery management."
                  link="/dandaraga"
                  stats={[
                    { value: "253K+", label: "Page Visits" },
                    { value: "7400%", label: "Revenue Increase" },
                  ]}
                  tags={[
                    "Shopify",
                    "Liquid",
                    "JavaScript",
                    "BeCool API",
                    "Custom Components",
                    "CRO",
                  ]}
                />
              </Link>

              <Link href="/healthheiress" className="project-card">
                <ProjectLaptop
                  image={healthheiress}
                  title="Health Heiress"
                  description="Custom Shopify development with pixel-perfect Figma implementation for a health and wellness e-commerce brand. Achieved 4% increase in conversion rate through strategic UX optimisations."
                  link="/healthheiress"
                  stats={[
                    { value: "4%", label: "CRO Increase" },
                    { value: "429k", label: "Page Visits" },
                  ]}
                  tags={["Shopify", "Liquid", "JavaScript", "HTML/CSS", "CRO"]}
                />
              </Link>

              <Link href="/milieu" className="project-card">
                <ProjectLaptop
                  image={mileu}
                  title="Milieu Childcare Consulting"
                  description="Developed from the ground up using NextJS to deliver an innovative and dynamic website. Translated detailed Figma designs into a responsive, user-friendly interface."
                  link="/milieu"
                  stats={[{ value: "30%", label: "More Form Submissions" }]}
                  tags={[
                    "Next.js",
                    "React",
                    "GHL Webhooks",
                    "Tailwind CSS",
                    "Vercel",
                  ]}
                />
              </Link>
            </div>

            <div className="more-projects-cta">
              <h3>And Many More...</h3>
              <p>
                These featured projects represent just a small sample of my
                work. I'd be happy to discuss more projects and how I can help
                bring your vision to life.
              </p>
              <a href="#contact" className="see-work-btn">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l5 5 5-5"></path>
                  <path d="M7 7l5 5 5-5"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">WORK</h2>
              <h2 className="section-subtitle">EXPERIENCE</h2>
            </div>

            <div className="experience-content">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">Lead Developer</h3>
                  <span className="experience-company">Calico Media</span>
                  <span className="experience-duration">2023 - Present</span>
                </div>
                <div className="experience-description">
                  <p>
                    Led frontend development for 30+ diverse client projects,
                    specialising in translating high-fidelity Figma designs into
                    pixel-perfect, functional web applications.
                  </p>
                  <ul className="experience-bullets">
                    <li>
                      Developed responsive UIs using React.js/Next.js, HTML5,
                      Tailwind CSS
                    </li>
                    <li>
                      Collaborated with UI/UX designers to ensure technical
                      feasibility
                    </li>
                    <li>
                      Implemented complex UI components with focus on
                      performance and accessibility
                    </li>
                    <li>
                      Managed multiple concurrent projects while meeting
                      deadlines
                    </li>
                    <li>Created and maintained reusable component libraries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">CONTACT</h2>
            </div>
            <div className="contact-content">
              <p className="contact-description">
                Interested in working together? I'm currently available for new
                projects and opportunities. Feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaPhone />
                    </span>
                    <a href="tel:0435341135">0435 341 135</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaEnvelope />
                    </span>
                    <a href="mailto:osman.cakir1@outlook.com">
                      osman.cakir1@outlook.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <span>Sydney, NSW</span>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
