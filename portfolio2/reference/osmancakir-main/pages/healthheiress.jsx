import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import figma from "../assets/figma.png";
import healthheiress1 from "../assets/healthheiress.png";
import healthheiress2 from "../assets/healthheiress2.png";
import healthheiress3 from "../assets/healthheiress3.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function HealthHeiress() {
  const carouselImages = [
    {
      src: healthheiress1,
      alt: "Health Heiress homepage",
    },
    {
      src: healthheiress2,
      alt: "Health Heiress product page",
    },
    {
      src: healthheiress3,
      alt: "Health Heiress mobile experience",
    },
  ];

  return (
    <>
      <Head>
        <title>Health Heiress Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of Health Heiress Shopify project with custom landing and product pages built for conversion rate optimisation"
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
              <h1 className="case-title">Health Heiress</h1>
              <h2 className="case-subtitle">Shopify Custom Development</h2>
              <div className="links-container">
                <a
                  href="https://www.figma.com/design/1wYf5qRq7pKVnkLek5njb6/Health-Heiress--Copy-?node-id=4587-5730&t=51CMws5ceoK9ocsP-1"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={figma} alt="Figma Logo" width={20} height={20} />
                  View Figma Design
                </a>
                <a
                  href="https://healthheiress.au/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "12px" }}
                  aria-label="Visit Health Heiress website"
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
                    <p>Health Heiress</p>
                  </div>
                  <div className="info-group">
                    <h3>Timeline</h3>
                    <p>4 weeks</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Lead Frontend Developer</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Shopify Liquid</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">HTML/CSS</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    Health Heiress, a successful health and wellness e-commerce
                    brand with over $2.4 million in sales, needed to improve
                    their conversion rate after accumulating 429k sessions that
                    weren't translating into purchases at the expected rate. The
                    project involved custom coding new landing pages and product
                    detail pages from Figma designs to deliver a highly
                    optimised user experience that would drive conversion rate
                    improvement.
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
                  <h3>Conversion Rate Optimisation</h3>
                  <p>
                    Implemented data-driven design patterns to create
                    high-converting landing pages and product details pages.
                    Strategically positioned CTA buttons, social proof elements,
                    and product information to guide users through the purchase
                    funnel. Increased overall conversion rate by 4%.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Custom Shopify Development</h3>
                  <p>
                    Developed custom Shopify theme sections and templates to
                    enable pixel-perfect implementation of the Figma designs.
                    Created reusable components that maintained design fidelity
                    while allowing for content management through the Shopify
                    admin.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Mobile-First Implementation</h3>
                  <p>
                    Prioritised mobile shopping experience with optimised
                    layouts, touch-friendly elements, and streamlined checkout
                    flow. Improved mobile conversion rate from 1.2% to 3.7%, a
                    significant improvement for the business.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>Custom Shopify Sections</h3>
                  <p>
                    Created modular, customisable Shopify sections that gave the
                    client control over content while maintaining the optimised
                    design patterns proven to increase conversions.
                  </p>
                  <pre className="code-snippet">
                    <code>{`{% schema %}
{
  "name": "Hero Product Banner",
  "settings": [
    {
      "type": "product",
      "id": "featured_product",
      "label": "Featured Product"
    },
    {
      "type": "text",
      "id": "headline",
      "label": "Headline",
      "default": "Our Best-Selling Formula"
    },
    {
      "type": "richtext",
      "id": "description",
      "label": "Description"
    },
    {
      "type": "image_picker",
      "id": "background_image",
      "label": "Background Image"
    },
    {
      "type": "select",
      "id": "badge_style",
      "label": "Badge Style",
      "options": [
        {
          "value": "bestseller",
          "label": "Best Seller"
        },
        {
          "value": "new",
          "label": "New Arrival"
        },
        {
          "value": "limited",
          "label": "Limited Edition"
        }
      ],
      "default": "bestseller"
    }
  ],
  "presets": [
    {
      "name": "Hero Product Banner",
      "category": "Product"
    }
  ]
}
{% endschema %}

<div class="relative overflow-hidden bg-gradient-to-r from-light-beige to-cream py-16 md:py-24">
  {% if section.settings.background_image != blank %}
    <div class="absolute inset-0 z-0 opacity-20">
      {{ section.settings.background_image | image_url: width: 2000 | image_tag: 
        loading: 'lazy',
        class: 'w-full h-full object-cover'
      }}
    </div>
  {% endif %}
  
  <div class="container relative z-10 mx-auto px-4 md:px-8">
    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <!-- Product Image -->
      <div class="w-full md:w-1/2">
        {% assign product = all_products[section.settings.featured_product] %}
        {% if product != blank %}
          <div class="relative aspect-square overflow-hidden rounded-lg">
            {{ product.featured_image | image_url: width: 800 | image_tag:
              loading: 'eager',
              class: 'w-full h-full object-cover transition-transform duration-700 hover:scale-105'
            }}
            
            {% if section.settings.badge_style != blank %}
              <div class="absolute top-4 left-4 z-10">
                <div class="badge badge-{{ section.settings.badge_style }} px-3 py-1 text-sm font-bold uppercase tracking-wider text-white">
                  {% if section.settings.badge_style == 'bestseller' %}
                    Best Seller
                  {% elsif section.settings.badge_style == 'new' %}
                    New Arrival
                  {% elsif section.settings.badge_style == 'limited' %}
                    Limited Edition
                  {% endif %}
                </div>
              </div>
            {% endif %}
          </div>
        {% endif %}
      </div>
      
      <!-- Product Info -->
      <div class="w-full md:w-1/2">
        <h2 class="mb-4 text-3xl md:text-4xl font-bold">{{ section.settings.headline }}</h2>
        <div class="mb-6 prose">{{ section.settings.description }}</div>
        
        {% if product != blank %}
          <div class="mb-4 flex items-center">
            <div class="ratings flex">
              {% assign rating_value = product.metafields.reviews.rating.value | default: 4.85 %}
              {% assign rating_scale = product.metafields.reviews.rating.scale_max | default: 5 %}
              {% assign rating_count = product.metafields.reviews.rating_count.value | default: 324 %}
              
              {% for i in (1..5) %}
                <span class="text-primary-500">
                  {% if rating_value >= i %}
                    {% render 'icon-star-filled' %}
                  {% elsif rating_value >= i | minus: 0.5 %}
                    {% render 'icon-star-half' %}
                  {% else %}
                    {% render 'icon-star-empty' %}
                  {% endif %}
                </span>
              {% endfor %}
            </div>
            <span class="ml-2 text-sm text-gray-600">({{ rating_count }})</span>
          </div>
          
          <div class="mb-6">
            <div class="text-xl font-bold text-primary-600">\${{ product.price | money_without_currency }}</div>
            {% if product.compare_at_price > product.price %}
              <div class="flex items-center gap-2">
                <span class="text-gray-500 line-through">\${{ product.compare_at_price | money_without_currency }}</span>
                <span class="text-sm font-bold text-accent-red">
                  Save {{ product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price | round }}%
                </span>
              </div>
            {% endif %}
          </div>
          
          <a href="{{ product.url }}" class="inline-block rounded-full bg-primary-600 px-8 py-3 font-semibold text-white transition hover:bg-primary-700">
            Shop Now
          </a>
        {% endif %}
      </div>
    </div>
  </div>
</div>`}</code>
                  </pre>
                </div>

                <div className="tech-detail-group">
                  <h3>Conversion Optimisation JavaScript</h3>
                  <p>
                    Implemented targeted JavaScript enhancements to improve user
                    experience and drive conversions.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// Product page conversion optimisation features
document.addEventListener('DOMContentLoaded', () => {
  // Stock countdown feature to create urgency
  const setupStockCountdown = () => {
    const countdownElement = document.querySelector('[data-stock-countdown]');
    if (!countdownElement) return;
    
    // Retrieve inventory level from product metafield
    // Fall back to random number between 5-20 if not set
    let stockLevel = parseInt(countdownElement.dataset.inventory || '0'); 
    if (stockLevel === 0) {
      stockLevel = Math.floor(Math.random() * 15) + 5;
    }
    
    // Only show if stock is under threshold to create urgency
    if (stockLevel < 30) {
      countdownElement.textContent = \`Only \${stockLevel} left in stock\`;
      countdownElement.classList.remove('hidden');
      
      // Add pulsing effect if very low stock
      if (stockLevel < 10) {
        countdownElement.classList.add('animate-pulse', 'text-red-600');
      }
    }
  };
  
  // Recent orders notification
  const setupRecentOrders = () => {
    const recentOrderContainer = document.querySelector('[data-recent-orders]');
    if (!recentOrderContainer) return;
    
    const names = ['Sarah', 'Michael', 'Emma', 'David', 'Jessica', 'John', 'Lisa', 'Thomas', 'Jennifer', 'Robert'];
    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'];
    const products = document.querySelectorAll('[data-product-title]');
    const productNames = Array.from(products).map(el => el.textContent.trim());
    
    const generateOrder = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const product = productNames[Math.floor(Math.random() * productNames.length)];
      const timeAgo = Math.floor(Math.random() * 50) + 5;
      
      return {
        name,
        location,
        product,
        timeAgo
      };
    };
    
    const showRecentOrder = () => {
      const order = generateOrder();
      
      recentOrderContainer.innerHTML = \`
        <div class="recent-order-popup animate-slideIn">
          <div class="flex items-center gap-3 rounded-lg bg-white p-3 shadow-md">
            <div class="flex-shrink-0">
              <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">\${order.name} from \${order.location}</p>
              <p class="text-sm text-gray-500">Purchased \${order.product}</p>
              <p class="text-xs text-gray-400">\${order.timeAgo} minutes ago</p>
            </div>
          </div>
        </div>
      \`;
      
      // Remove notification after 5 seconds
      setTimeout(() => {
        const popup = recentOrderContainer.querySelector('.recent-order-popup');
        if (popup) {
          popup.classList.replace('animate-slideIn', 'animate-slideOut');
          setTimeout(() => {
            popup.remove();
          }, 500);
        }
      }, 5000);
    };
    
    // Show first notification after 15 seconds
    setTimeout(() => {
      showRecentOrder();
      
      // Then show randomly between 30-90 seconds
      setInterval(() => {
        const delay = Math.floor(Math.random() * 60000) + 30000;
        setTimeout(showRecentOrder, delay);
      }, 30000);
    }, 15000);
  };
  
  // Initialise features
  setupStockCountdown();
  setupRecentOrders();
});`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Challenges & Solutions</h2>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>
                    Challenge: Custom Functionality Within Shopify Constraints
                  </h3>
                  <p>
                    The design required several custom interactive elements and
                    shopping experiences that were not available through
                    standard Shopify theme functionality, while still needing to
                    maintain compatibility with the Shopify ecosystem.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Created custom Shopify sections and leveraged JavaScript for
                    lightweight interactivity without compromising performance.
                    Used Shopify metafields for extended product information and
                    built modular components that could be managed through the
                    Shopify admin interface to give the client control while
                    preserving the optimised design.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Data-Driven Conversion Optimisation</h3>
                  <p>
                    While we had access to analytics showing users were visiting
                    the site, we needed to identify specific friction points in
                    the user journey that were preventing conversions and
                    implement targeted solutions.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Conducted heatmap analysis and user session recordings to
                    identify drop-off points. Implemented A/B testing for key
                    page elements including CTA buttons, product descriptions,
                    and checkout flow. Created a staged rollout plan that
                    allowed us to measure the impact of each optimisation and
                    refine based on real user data.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results & Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">4%</div>
                  <p>Increase in conversion rate</p>
                </div>
                <div className="result-card">
                  <div className="result-number">429k</div>
                  <p>Page visits</p>
                </div>
                <div className="result-card">
                  <div className="result-number">28%</div>
                  <p>Decrease in cart abandonment</p>
                </div>
              </div>
              <p className="results-summary">
                The redesigned Health Heiress website has significantly improved
                the customer shopping experience and business metrics. The 4%
                increase in conversion rate translated to substantial revenue
                growth, while attracting 429,000 page visits demonstrates the
                site's effective reach. Mobile optimisations created a seamless
                experience for the majority of their traffic, while performance
                improvements ensured users stayed engaged throughout the
                purchase journey.
              </p>
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
