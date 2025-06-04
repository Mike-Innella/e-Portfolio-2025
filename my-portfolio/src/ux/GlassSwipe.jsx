import { useEffect, useRef } from "react";

const GlassSwipe = () => {
  // Use a ref to track if the style was already injected
  const styleInjected = useRef(false);

  useEffect(() => {
    // Only inject the styles once across all component instances
    if (
      document.getElementById("glass-swipe-keyframes") ||
      styleInjected.current
    )
      return;

    styleInjected.current = true;

    // Create and inject styles only once
    const style = document.createElement("style");
    style.id = "glass-swipe-keyframes";
    style.innerHTML = `
      .tech-icon-glass {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(0.4,0.2,0.2,1);
        padding: 8px;
        width: 4rem;
        height: 4rem;
        background: transparent;
        clip-path: polygon(
          25% 6%,
          75% 6%,
          100% 50%,
          75% 94%,
          25% 94%,
          0% 50%
        );
        box-shadow: 0 2px 8px 0 rgba(30, 64, 175, 0.12);
      }
      .tech-icon-glass img {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }
      
      .tech-icon-glass:hover {
        transform: scale(1.2)
      }
      .tech-icon-glass::before {
        content: "";
        position: absolute;
        bottom: -200%;
        left: -80%;
        width: 200%;
        height: 200%;
        background: linear-gradient(135deg, 
          hsla(0, 0%, 100%, 0.0) 0%, 
          hsla(0, 0%, 100%, 0.4) 50%, 
          hsla(0, 0%, 100%, 0.0) 100%
        );
        transform: rotate(45deg);
        pointer-events: none;
        opacity: 0;
        filter: blur(10px);
        will-change: opacity, transform;
      }
      /* --- DARK MODE: BRIGHT GLARE --- */
      .dark .tech-icon-glass::before {
        background: linear-gradient(135deg, 
          hsla(0, 0%, 100%, 0.0) 0%, 
          hsla(0, 0%, 100%, 0.4) 50%, 
          hsla(0, 0%, 100%, 0.0) 100%
        );
      }
      /* --- LIGHT MODE: SHADOW SWIPE --- */
      :not(.dark) .tech-icon-glass::before {
        background: linear-gradient(135deg, 
          hsla(220, 10%, 24%, 0.0) 0%,      /* nearly black, transparent */
          hsla(220, 10%, 24%, 0.18) 45%,   /* dark shadow, visible */
          hsla(220, 10%, 24%, 0.32) 55%,   /* even darker in the center */
          hsla(220, 10%, 24%, 0.0) 100%
        );
      }
      .tech-icon-glass:hover::before {
        animation: glassSwipe 800ms cubic-bezier(0.77, 0, 0.175, 1) 1 forwards;
      }
      .tech-icon-glass.no-anim::before {
        animation: none !important;
      }
      @keyframes glassSwipe {
        0% {
          bottom: -60%;
          left: -60%;
          opacity: 0;
        }
        64% {
          opacity: 1;
        }
        100% {
          bottom: 120%;
          left: 120%;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Use event delegation for better performance
    // This handles all tech icons with a single event listener on the document
    const handleMouseEvents = (event) => {
      if (!event.target.closest) return;

      const icon = event.target.closest(".tech-icon-glass");
      if (!icon) return;

      if (event.type === "mouseout") {
        icon.classList.add("no-anim");
        // Force reflow
        void icon.offsetWidth;
        icon.classList.remove("no-anim");
      }
    };

    // Add a single event listener to the document instead of multiple ones
    document.addEventListener("mouseout", handleMouseEvents, { passive: true });

    // Monitor only containers that might contain tech icons
    const relevantContainers = document.querySelectorAll(
      '.tech__container, [class*="tech"]'
    );
    let observer;

    if (relevantContainers.length > 0) {
      observer = new MutationObserver((mutations) => {
        if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
          // No need to re-add event listeners since we're using event delegation
        }
      });

      // Observe only specific containers, not the entire document
      relevantContainers.forEach((container) => {
        observer.observe(container, { childList: true, subtree: true });
      });
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseEvents);
      if (observer) {
        observer.disconnect();
      }
      // Don't remove the style element as other instances might need it
    };
  }, []);

  return null;
};

export default GlassSwipe;
