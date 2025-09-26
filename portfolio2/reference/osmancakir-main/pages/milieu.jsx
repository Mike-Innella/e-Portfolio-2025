import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import figma from "../assets/figma.png";
import mileu1 from "../assets/mileu1.png";
import mileu2 from "../assets/mileu2.png";
import mileu3 from "../assets/mileu3.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function Milieu() {
  const carouselImages = [
    {
      src: mileu1,
      alt: "Milieu Childcare Consulting homepage",
    },
    {
      src: mileu2,
      alt: "Milieu service offerings page",
    },
    {
      src: mileu3,
      alt: "Milieu contact form interface",
    },
  ];

  return (
    <>
      <Head>
        <title>Milieu Childcare Consulting Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of Milieu Childcare Consulting website built with Next.js"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0e1117" />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">Milieu Childcare Consulting</h1>
              <h2 className="case-subtitle">Professional Services Website</h2>
              <div className="links-container">
                <a
                  href="https://www.figma.com/design/Yk2UT3e9gW75dacXabXbIQ/Milieu-Childcare-Consulting--Internal?node-id=3883-2773&t=YTA0HwHF01LBT6XJ-1"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Image src={figma} alt="Figma Logo" width={20} height={20} />
                  View Figma Design
                </a>
                <a
                  href="https://www.milieuchildcareconsulting.com.au/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    role="img"
                    aria-label="link"
                    style={{ marginRight: "6px", fontSize: "16px" }}
                  >
                    🔗
                  </span>
                  View Website
                </a>
              </div>
            </div>
            <div className="case-overview">
              <div className="case-image-container">
                <ImageCarousel images={carouselImages} />
              </div>
              <div className="case-details">
                <div className="case-info">
                  <div className="info-group">
                    <h3>Client</h3>
                    <p>Milieu Childcare Consulting</p>
                  </div>
                  <div className="info-group">
                    <h3>Timeline</h3>
                    <p>6 weeks</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Lead Frontend Developer</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Next.js</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">Go High Level CRM</span>
                      <span className="tech-tag">Webhooks</span>
                      <span className="tech-tag">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    Milieu Childcare Consulting needed a professional web
                    presence to showcase their specialised consulting services
                    for childcare centers. The project involved creating a
                    pixel-perfect implementation of Figma designs into a
                    responsive Next.js website with emphasis on user experience,
                    lead generation, and seamless form submission integration
                    with Go High Level CRM through webhook technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-content">
          <div className="container">
            <div className="content-section">
              <h2>Key Accomplishments</h2>
              <div className="approach-grid">
                <div className="approach-card">
                  <h3>Pixel-Perfect UI Implementation</h3>
                  <p>
                    Meticulously translated Figma designs into responsive React
                    components with exact color matching, typography, and
                    spacing. Created custom animations and transitions to
                    enhance user experience while maintaining design fidelity.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Responsive Design System</h3>
                  <p>
                    Developed a comprehensive responsive design system that
                    elegantly adapts from large desktop displays to mobile
                    devices. Implemented custom breakpoints and fluid typography
                    to ensure optimal user experience across all screen sizes.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Form Integration with GHL</h3>
                  <p>
                    Implemented secure form submissions via custom webhooks to
                    Go High Level CRM, enabling automatic lead capture and
                    workflow triggers. Built robust validation and error
                    handling for enhanced user experience and data integrity.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>SEO Optimisation</h3>
                  <p>
                    Utilised Next.js's built-in SEO capabilities with dynamic
                    meta tags, structured data, and semantic HTML. Implemented
                    performance optimisations resulting in excellent Lighthouse
                    scores across all categories.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>GHL Webhook Integration</h3>
                  <p>
                    Implemented a secure, reliable form submission system
                    integrated with Go High Level CRM using webhooks. Built
                    custom error handling and success notifications for improved
                    user experience.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// GHL Webhook Implementation with Form State Management
import { useState } from "react";

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState("opening");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/EBXoftMiSPgX5irVPHjC/webhook-trigger/03970cef-cc9a-4cd3-b93e-b534fb7ec418",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: selectedType,
            ...formData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        telephone: "",
        message: "",
      });
      setSelectedType("opening");
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Form rendering and rest of component...
}`}</code>
                  </pre>
                </div>

                <div className="tech-detail-group">
                  <h3>Custom UI Components</h3>
                  <p>
                    Built a comprehensive UI component system enabling rapid
                    development while maintaining a consistent design language
                    across the entire site.
                  </p>
                  <pre className="code-snippet">
                    <code>{`<!-- Custom Radio Buttons Example -->
<div className="flex gap-3 mb-8 flex-col md:flex-row">
  <label>
    <input
      type="radio"
      name="enquiryType"
      value="opening"
      className="peer hidden"
      checked
    />
    <div className="flex h-9 items-center gap-2 px-4 py-3 rounded-full border border-gray-200 peer-checked:bg-pink-50 cursor-pointer">
      <span className="text-gray-900 text-sm">
        I'm opening a childcare centre
      </span>
    </div>
  </label>
  
  <!-- Additional radio button options -->
</div>`}</code>
                  </pre>
                </div>

                <div className="tech-detail-group">
                  <h3>Shopify Liquid Component Example</h3>
                  <p>
                    For client reference, included examples of Liquid syntax for
                    potential Shopify integration.
                  </p>
                  <pre className="code-snippet">
                    <code>{`<!-- Shopify Product Display Example -->
<div class="product-card">
  <img src="{{ '{{' }} product.featured_image | img_url: '400x' {{ '}}' }}" alt="{{ '{{' }} product.title {{ '}}' }}" />
  <h3>{{ '{{' }} product.title {{ '}}' }}</h3>
  <p class="price">{{ '{{' }} product.price | money {{ '}}' }}</p>
  
  {{ '{%' }} if product.available {{ '%}' }}
    <button class="add-to-cart" data-product-id="{{ '{{' }} product.id {{ '}}' }}">
      Add to Cart
    </button>
  {{ '{%' }} else {{ '%}' }}
    <p class="sold-out">Sold Out</p>
  {{ '{%' }} endif {{ '%}' }}
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Challenges & Solutions</h2>
              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Secure Form Integration</h3>
                  <p>
                    The client needed a secure way to capture lead information
                    directly into their Go High Level CRM system without
                    exposing API keys or authentication details in the frontend
                    code.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Created a serverless API route in Next.js that securely
                    handles form submissions and forwards data to GHL's webhook
                    endpoint. Implemented environment variables for API key
                    storage and added rate limiting to prevent abuse.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Complex Responsive Layout</h3>
                  <p>
                    The Figma design featured complex layouts with overlapping
                    elements and staggered grid patterns that were challenging
                    to implement responsively across different device sizes.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Developed a custom responsive grid system using CSS Grid and
                    Flexbox that maintained the visual integrity of the design
                    across breakpoints. Created adaptive component variants that
                    restructured elements based on available screen real estate.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Performance Optimisation</h3>
                  <p>
                    The design included numerous high-resolution images and
                    animations that threatened to impact page load times and
                    performance metrics, especially on mobile devices.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Implemented Next.js Image component with responsive sizing
                    and WebP format. Used lazy loading for off-screen images and
                    implemented code splitting to reduce initial bundle size.
                    Created lightweight animations with hardware acceleration
                    for smooth performance.
                  </p>
                </div>
              </div>
            </div>


            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/poplocal" className="next-project-link">
                <span>PopLocal</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
