import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import figma from "../assets/figma.png";
import danda1 from "../assets/danda1.png";
import danda2 from "../assets/danda2.png";
import danda3 from "../assets/danda3.png";
import danda4 from "../assets/danda4.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function Dandaraga() {
  const carouselImages = [
    {
      src: danda1,
      alt: "Dandaraga Springs homepage",
    },
    {
      src: danda2,
      alt: "Dandaraga Springs Build Your Box component",
    },
    {
      src: danda3,
      alt: "Dandaraga Springs product page",
    },
    {
      src: danda4,
      alt: "Dandaraga Springs delivery selection",
    },
  ];

  return (
    <>
      <Head>
        <title>Dandaraga Springs Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of Dandaraga Springs farm-to-table e-commerce project built with Shopify"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">Dandaraga Springs</h1>
              <h2 className="case-subtitle">Farm-to-Table eCommerce</h2>
              <div className="links-container">
                <a
                  href="https://www.figma.com/design/Ie7tBTCXEoVSlXq6C7jVFJ/Dandaraga-Springs?node-id=410-8791&m=dev"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={figma} alt="Figma Logo" width={20} height={20} />
                  View Figma Design
                </a>
                <a
                  href="https://dandaragasprings.com.au/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "12px" }}
                  aria-label="Visit Dandaraga Springs website"
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
                    <p>Dandaraga Springs</p>
                  </div>
                  <div className="info-group">
                    <h3>Timeline</h3>
                    <p>6 weeks</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Lead Shopify Developer</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Shopify Liquid</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">BeCool API</span>
                      <span className="tech-tag">HTML5/CSS3</span>
                      <span className="tech-tag">Figma</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    Dandaraga Springs is a premium farm-to-table business that
                    needed a complete revamp of their online store. I
                    custom-coded the entire Shopify site, perfectly translating
                    Figma designs into a functional e-commerce platform. The
                    centerpiece of this project was a custom "Build Your Box"
                    component that allows customers to create personalised meat
                    boxes with starter packs and add-ons, following specific
                    business rules.
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
                  <h3>Custom Build Your Box Component</h3>
                  <p>
                    Developed a multi-step selection process (Starter Box →
                    Premium Steaks → Add-ons) with dynamic cart management and
                    real-time validation. Implemented business rule enforcement
                    (e.g., premium steaks require starter boxes) and visual
                    progress tracking.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Pixel-Perfect Implementation</h3>
                  <p>
                    Translated detailed Figma designs into pixel-perfect Shopify
                    theme components. Created custom sections, blocks, and
                    templates to match design specifications exactly while
                    maintaining responsive layouts.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>BeCool Courier Integration</h3>
                  <p>
                    Connected with BeCool Courier API to manage deliveries and
                    delivery time selection for customers. Developed custom
                    interface to display available delivery slots based on
                    location and inventory status.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Continuous CRO Improvements</h3>
                  <p>
                    Implemented ongoing conversion rate optimisation updates
                    based on client requirements and performance data. A/B
                    tested various UI components and checkout flows to identify
                    highest-converting variants.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Mobile-First Approach</h3>
                  <p>
                    Designed and developed with a mobile-first methodology,
                    ensuring seamless shopping experience across all devices.
                    Optimised critical user flows for touch interfaces and
                    smaller screens.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>Build Your Box Implementation</h3>
                  <p>
                    Created a complex multi-step selection process with
                    JavaScript and Liquid to guide customers through building
                    customised meat boxes.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// Custom Build Your Box component with step validation
const BuildYourBox = {
  currentStep: 1,
  starterBoxSelected: false,
  primalSteaksCount: 0,
  
  init: function() {
    this.setupEventListeners();
    this.renderCurrentStep();
    this.validateCart();
  },
  
  setupEventListeners: function() {
    // Navigate between steps
    document.querySelectorAll('.step-nav-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const targetStep = parseInt(e.currentTarget.dataset.step);
        this.navigateToStep(targetStep);
      });
    });
    
    // Add starter box to cart
    document.querySelectorAll('.starter-box-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const boxId = e.currentTarget.dataset.productId;
        const variantId = e.currentTarget.dataset.variantId;
        
        this.addStarterBox(boxId, variantId);
        this.starterBoxSelected = true;
        this.updateStepStatus();
        
        // Enable next step
        if (this.starterBoxSelected) {
          this.enableStep(2);
        }
      });
    });
    
    // Add primal steaks with validation
    document.querySelectorAll('.primal-steak-option').forEach(option => {
      option.addEventListener('click', (e) => {
        if (!this.starterBoxSelected) {
          this.showError('Please select a starter box first');
          return;
        }
        
        const steakId = e.currentTarget.dataset.productId;
        const variantId = e.currentTarget.dataset.variantId;
        
        if (this.primalSteaksCount >= 8) {
          this.showError('Maximum 8 primal steaks allowed per order');
          return;
        }
        
        this.addPrimalSteak(steakId, variantId);
        this.primalSteaksCount++;
        this.updateStepStatus();
      });
    });
  },
  
  navigateToStep: function(stepNumber) {
    // Validate if steps can be accessed
    if (stepNumber > 1 && !this.starterBoxSelected) {
      this.showError('Please select a starter box first');
      return;
    }
    
    this.currentStep = stepNumber;
    this.renderCurrentStep();
  },
  
  renderCurrentStep: function() {
    // Hide all steps
    document.querySelectorAll('.box-builder-step').forEach(step => {
      step.classList.remove('active');
    });
    
    // Show current step
    document.querySelector(\`.box-builder-step[data-step="\${this.currentStep}"]\`).classList.add('active');
    
    // Update progress indicator
    document.querySelectorAll('.step-indicator').forEach(indicator => {
      indicator.classList.remove('current', 'completed');
      
      const indicatorStep = parseInt(indicator.dataset.step);
      
      if (indicatorStep < this.currentStep) {
        indicator.classList.add('completed');
      } else if (indicatorStep === this.currentStep) {
        indicator.classList.add('current');
      }
    });
  },
  
  validateCart: function() {
    // Check if cart already has starter box
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const hasStarterBox = cart.items.some(item => 
          item.product_type === 'Starter Box'
        );
        
        if (hasStarterBox) {
          this.starterBoxSelected = true;
          this.enableStep(2);
          this.enableStep(3);
          
          // Count primal steaks in cart
          this.primalSteaksCount = cart.items
            .filter(item => item.product_type === 'Primal Steak')
            .reduce((total, item) => total + item.quantity, 0);
        }
        
        this.updateStepStatus();
      });
  }
};

// Initialise the component
document.addEventListener('DOMContentLoaded', function() {
  BuildYourBox.init();
});`}</code>
                  </pre>
                </div>

                <div className="tech-detail-group">
                  <h3>BeCool Courier API Integration</h3>
                  <p>
                    Integrated with BeCool Courier API to manage delivery
                    scheduling and provide customers with available delivery
                    time slots.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// Delivery slot selection with BeCool API integration
const DeliveryManager = {
  availableSlots: [],
  selectedSlot: null,
  postcodeInput: null,
  
  init: function() {
    this.postcodeInput = document.getElementById('delivery-postcode');
    
    if (this.postcodeInput) {
      this.postcodeInput.addEventListener('change', this.checkDeliveryAvailability.bind(this));
    }
    
    // Check if postcode is already filled (e.g. returning customer)
    if (this.postcodeInput && this.postcodeInput.value) {
      this.checkDeliveryAvailability();
    }
  },
  
  checkDeliveryAvailability: function() {
    const postcode = this.postcodeInput.value.trim();
    
    if (!postcode) {
      this.showError('Please enter your postcode');
      return;
    }
    
    this.showLoadingState();
    
    // Query BeCool API for available slots
    fetch(\`/apps/becool/delivery-slots?postcode=\${postcode}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Delivery service unavailable');
      }
      return response.json();
    })
    .then(data => {
      this.hideLoadingState();
      
      if (data.delivery_available) {
        this.availableSlots = data.slots;
        this.renderDeliverySlots();
      } else {
        this.showError(data.message || 'Delivery not available to this area');
      }
    })
    .catch(error => {
      this.hideLoadingState();
      this.showError('Error checking delivery availability');
      console.error('Delivery API error:', error);
    });
  },
  
  renderDeliverySlots: function() {
    const slotsContainer = document.getElementById('delivery-slots-container');
    
    if (!slotsContainer) return;
    
    if (this.availableSlots.length === 0) {
      slotsContainer.innerHTML = '<p class="no-slots-message">No delivery slots available. Please check back later.</p>';
      return;
    }
    
    // Group slots by date
    const slotsByDate = this.availableSlots.reduce((acc, slot) => {
      const date = new Date(slot.date).toLocaleDateString();
      
      if (!acc[date]) {
        acc[date] = [];
      }
      
      acc[date].push(slot);
      return acc;
    }, {});
    
    // Generate HTML for slots
    let html = '<div class="delivery-dates">';
    
    Object.entries(slotsByDate).forEach(([date, slots]) => {
      html += \`
        <div class="delivery-date">
          <h4 class="date-heading">\${date}</h4>
          <div class="time-slots">\`;
          
      slots.forEach(slot => {
        const slotId = \`slot-\${slot.id}\`;
        html += \`
          <label class="time-slot \${slot.available ? '' : 'unavailable'}" for="\${slotId}">
            <input type="radio" name="delivery_slot" id="\${slotId}" 
              value="\${slot.id}" \${slot.available ? '' : 'disabled'}
              data-slot-date="\${slot.date}" data-slot-time="\${slot.time_window}">
            <span class="slot-time">\${slot.time_window}</span>
            \${!slot.available ? '<span class="unavailable-text">Full</span>' : ''}
          </label>
        \`;
      });
      
      html += \`
          </div>
        </div>
      \`;
    });
    
    html += '</div>';
    slotsContainer.innerHTML = html;
    
    // Add event listeners to slot selection
    document.querySelectorAll('input[name="delivery_slot"]').forEach(input => {
      input.addEventListener('change', this.handleSlotSelection.bind(this));
    });
  },
  
  handleSlotSelection: function(e) {
    const slotId = e.target.value;
    const slotDate = e.target.dataset.slotDate;
    const slotTime = e.target.dataset.slotTime;
    
    this.selectedSlot = {
      id: slotId,
      date: slotDate,
      time: slotTime
    };
    
    // Add to cart attributes
    const formData = new FormData();
    formData.append('attributes[delivery_slot_id]', slotId);
    formData.append('attributes[delivery_date]', slotDate);
    formData.append('attributes[delivery_time]', slotTime);
    
    fetch('/cart/update.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(cart => {
      document.dispatchEvent(new CustomEvent('delivery:selected', { 
        detail: this.selectedSlot 
      }));
    })
    .catch(error => {
      console.error('Error saving delivery slot:', error);
    });
  }
};

// Initialise the delivery manager
document.addEventListener('DOMContentLoaded', function() {
  DeliveryManager.init();
});`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Challenges & Solutions</h2>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Delivery Scheduling Integration</h3>
                  <p>
                    Dandaraga Springs needed a way to integrate with their
                    BeCool courier service to offer specific delivery time slots
                    based on customer location, while ensuring inventory was
                    available for the selected delivery date.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Implemented custom API integration with BeCool Courier
                    services to fetch available delivery slots based on
                    postcode. Created an intuitive UI for selecting delivery
                    dates and times, with real-time availability updates.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Seamless Figma Implementation</h3>
                  <p>
                    The client provided detailed Figma designs that needed to be
                    perfectly implemented in Shopify while maintaining
                    flexibility for content updates and inventory changes.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Developed custom Shopify sections and blocks that matched
                    the Figma designs pixel-by-pixel. Created modular components
                    that could be easily managed through the Shopify admin while
                    preserving the design integrity.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Mobile Experience Optimisation</h3>
                  <p>
                    The complex product bundling and delivery selection
                    interfaces needed to work seamlessly on mobile devices,
                    where the majority of customers were shopping.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Adopted a mobile-first approach to design and
                    implementation, with special attention to touch targets and
                    simplified navigation. Created responsive layouts that
                    maintained functionality while adapting to smaller screens.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results & Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">7,400%</div>
                  <p>Revenue increase compared to old site</p>
                </div>
                <div className="result-card">
                  <div className="result-number">253K+</div>
                  <p>Page views since launch</p>
                </div>
                <div className="result-card">
                  <div className="result-number">35%</div>
                  <p>Increase in average order value</p>
                </div>
              </div>
              <p className="results-summary">
                Since its launch, Dandaraga Springs has experienced remarkable
                growth with a 7,400% increase in monthly revenue compared to
                their old site. The custom "Build Your Box" component and
                seamless delivery integration have significantly improved the
                customer experience, resulting in higher conversion rates and
                increased average order values. The farm-to-table business has
                successfully expanded its customer base while maintaining its
                premium brand identity.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/healthheiress" className="next-project-link">
                <span>Health Heiress</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
