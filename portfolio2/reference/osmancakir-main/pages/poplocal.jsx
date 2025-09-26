import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import figma from "../assets/figma.png";
import poplocal1 from "../assets/poplocal1.png";
import poplocal2 from "../assets/poplocal2.png";
import poplocal3 from "../assets/poplocal3.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function PopLocal() {
  const carouselImages = [
    {
      src: poplocal1,
      alt: "PopLocal eCommerce homepage",
    },
    {
      src: poplocal2,
      alt: "PopLocal product browsing interface",
    },
    {
      src: poplocal3,
      alt: "PopLocal checkout process",
    },
  ];

  return (
    <>
      <Head>
        <title>PopLocal Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of PopLocal eCommerce project built with Next.js"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">PopLocal</h1>
              <h2 className="case-subtitle">eCommerce Platform</h2>
              <div className="links-container">
                <a
                  href="https://www.figma.com/design/DfaNQM6lGdwVh92oqMDRbs/POP---Website--Copy-?node-id=37-1466&t=wrbk6Q2ewnezdVdX-1"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={figma} alt="Figma Logo" width={20} height={20} />
                  View Figma Design
                </a>
                <a
                  href="https://poplocal.com.au/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "12px" }}
                  aria-label="Visit PopLocal website"
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
                    <p>PopLocal</p>
                  </div>
                  <div className="info-group">
                    <h3>Timeline</h3>
                    <p>2 months</p>
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
                      <span className="tech-tag">Square API</span>
                      <span className="tech-tag">Contentful</span>
                      <span className="tech-tag">Firebase</span>
                      <span className="tech-tag">RESTful APIs</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    PopLocal is an eCommerce platform connecting 300+ local
                    Canberra businesses with customers through a unified
                    shopping experience. The project involved transforming
                    detailed Figma mockups into a responsive, high-performance
                    web application leveraging RESTful APIs for inventory
                    management, secure checkout processing, user authentication,
                    and loyalty program integration.
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
                  <h3>UI Implementation</h3>
                  <p>
                    Translated detailed Figma designs into pixel-perfect React
                    components. Built fully responsive layouts for all device
                    sizes. Implemented complex UI states for product browsing
                    and checkout flow.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>State Management</h3>
                  <p>
                    Created React Context providers for cart, authentication,
                    and user profile data. Built custom hooks for Square data
                    fetching with efficient caching. Implemented localStorage
                    persistence for cart items with 12-hour expiration.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Square Integration</h3>
                  <p>
                    Developed real-time inventory synchronisation between
                    physical store and website. Built robust API client with
                    retry logic and error handling. Created custom middleware to
                    normalise data between Square and frontend formats.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>User Authentication</h3>
                  <p>
                    Implemented Firebase authentication with secure sign-up and
                    login flows. Created user profile management with address
                    storage capabilities. Built order history tracking with
                    detailed purchase records.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Loyalty Program</h3>
                  <p>
                    Integrated Square's loyalty API for points tracking and
                    redemption. Implemented user dashboard for loyalty status
                    and reward options. Created personalised offers based on
                    purchase history.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>CMS Integration</h3>
                  <p>
                    Set up Contentful for dynamic content management across the
                    site. Implemented live preview for marketing content
                    editors. Created structured content models mapped to React
                    components.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Performance Optimisations</h3>
                  <p>
                    Utilised Next.js Image component for optimised product
                    imagery. Implemented intelligent caching strategies to
                    reduce API calls. Created skeleton loading states with
                    controlled animation timing. Added lazy loading and
                    pagination for product listings.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>API Integration</h3>
                  <p>
                    Developed custom hooks for RESTful API calls to both Square
                    and backend services, implementing efficient data fetching
                    with proper error handling and loading states.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// Custom hook for Square product fetching with caching
const useSquareProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      // Check cache first
      const cacheKey = \`products_\${categoryId}\`;
      const cachedData = sessionStorage.getItem(cacheKey);
      
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        // Use cache if less than 5 minutes old
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          setProducts(data);
          setIsLoading(false);
          return;
        }
      }
      
      try {
        const response = await fetch(\`/api/square/products?category=\${categoryId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        
        // Transform Square catalog data to our frontend format
        const formattedProducts = data.objects
          ?.filter(item => item.type === 'ITEM')
          ?.map(item => ({
            id: item.id,
            name: item.itemData.name,
            description: item.itemData.description,
            price: item.itemData.variations[0]?.itemVariationData?.priceMoney?.amount / 100,
            imageUrl: item.itemData.imageIds 
              ? \`/api/square/images/\${item.itemData.imageIds[0]}\` 
              : '/placeholder.jpg',
            inventory: item.itemData.variations[0]?.itemVariationData?.locationOverrides[0]?.quantityOverride
          })) || [];
        
        // Update state
        setProducts(formattedProducts);
        
        // Cache the results
        sessionStorage.setItem(cacheKey, JSON.stringify({
          data: formattedProducts,
          timestamp: Date.now()
        }));
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, [categoryId]);
  
  return { products, isLoading, error };
};`}</code>
                  </pre>
                </div>

                <div className="tech-detail-group">
                  <h3>Cart System Implementation</h3>
                  <p>
                    Built a comprehensive cart system with inventory validation,
                    secure checkout flow, and persistent cart storage.
                  </p>
                  <pre className="code-snippet">
                    <code>{`// Add to cart function with inventory validation
const addToCart = async (product, quantity) => {
  setIsLoading(true);
  try {
    // Check current inventory
    const availableQuantity = await checkInventory(product.variation.id);
    const maxAllowedQuantity = Math.max(0, availableQuantity - 2); // Buffer of 2 items
    
    // Find if product already exists in cart
    const existingItem = cartItems.find(
      item => item.title === product.title && item.variation.id === product.variation.id
    );
    const currentCartQuantity = existingItem ? existingItem.quantity : 0;
    
    // Validate against available inventory
    if (currentCartQuantity + quantity > maxAllowedQuantity) {
      const errorMessage = \`Only \${maxAllowedQuantity} items available\`;
      setInventoryErrors(prev => ({
        ...prev,
        [product.variation.id]: errorMessage
      }));
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
    
    // If validation passes, add to cart
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === product.title && item.variation.id === product.variation.id
      );

      if (existingItemIndex > -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    
    // Save to localStorage with expiration
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartData.push({ ...product, quantity, timestamp: Date.now() });
    localStorage.setItem('cartItems', JSON.stringify(cartData));
    
    // Set timeout to remove after 12 hours
    setTimeout(() => {
      const updatedCartData = cartData.filter(item => 
        item.timestamp + 43200000 > Date.now()
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartData));
      setCartItems(updatedCartData);
    }, 43200000); // 12 hours in milliseconds
    
    return { success: true };
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return { success: false, error: 'Failed to add item to cart' };
  } finally {
    setIsLoading(false);
  }
};`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Challenges & Solutions</h2>
              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Square POS Integration</h3>
                  <p>
                    The client operated a brick and mortar store using Square as
                    their inventory management and payment processing system. We
                    needed to create a seamless online experience that would
                    maintain inventory sync between the physical store and the
                    website to prevent overselling.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Implemented custom middleware with real-time inventory sync
                    and webhook handlers for in-store purchase updates. Built
                    robust API client with retry logic and error handling for
                    reliable synchronisation.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Content Management Flexibility</h3>
                  <p>
                    The client needed the ability to update marketing copy,
                    promotions, and featured products without developer
                    intervention, while maintaining the custom design elements
                    of the Figma mockups.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Created modular Contentful structure that preserved design
                    integrity while enabling non-technical updates. Implemented
                    live preview functionality so changes could be reviewed
                    before publishing to the live site.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Complex Product Filtering</h3>
                  <p>
                    Implementing an intuitive yet powerful filtering system for
                    products that could handle multiple filter types (category,
                    price range, attributes) while maintaining URL state for
                    shareable filtered views.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Built filtering system with URL state persistence, debounced
                    search, and optimised rendering. Created a custom filtering
                    system using URL query parameters and React's useEffect to
                    sync UI state with URL for sharable links.
                  </p>
                </div>
              </div>

              <div className="challenge-solution">
                <div className="challenge">
                  <h3>Challenge: Checkout Flow</h3>
                  <p>
                    Designing a multi-step checkout flow that was both
                    user-friendly and secure, while handling various payment
                    methods and shipping options, all integrated with Square's
                    payment processing.
                  </p>
                </div>
                <div className="solution">
                  <h3>Solution</h3>
                  <p>
                    Developed multi-step checkout process with form validation
                    and secure payment integration. Used React Context to manage
                    checkout state across steps while ensuring data wasn't lost
                    if users navigated back/forth between steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results & Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">25,000+</div>
                  <p>Page visits since launch</p>
                </div>
                <div className="result-card">
                  <div className="result-number">1,831</div>
                  <p>User accounts created</p>
                </div>
                <div className="result-card">
                  <div className="result-number">300+</div>
                  <p>Local businesses connected</p>
                </div>
              </div>
              <p className="results-summary">
                Since its launch, PopLocal has experienced significant growth
                and engagement. The platform has attracted over 25,000 page
                visits and 1,831 registered user accounts, demonstrating strong
                user adoption in the Canberra market. The seamless integration
                with Square's ecosystem and the intuitive user experience have
                contributed to high retention rates and consistent growth in
                transaction volume.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/dandaraga" className="next-project-link">
                <span>Dandaraga Springs</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
