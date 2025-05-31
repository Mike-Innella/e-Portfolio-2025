import { useEffect } from "react";

const GlassSwipe = () => {
  useEffect(() => {
    // Prevent duplicate style tag
    if (document.getElementById("glass-swipe-keyframes")) return;

    // Add event listeners to reset animation state on mouseout
    const addResetListeners = () => {
      const techIcons = document.querySelectorAll(".tech-icon-glass");
      techIcons.forEach((icon) => {
        // Remove any existing listeners to avoid duplicates
        icon.removeEventListener("mouseout", handleMouseOut);
        icon.addEventListener("mouseout", handleMouseOut);
      });
    };

    // Handler for mouseout event
    const handleMouseOut = (event) => {
      const icon = event.currentTarget;
      // Add a class that disables the animation
      icon.classList.add("no-anim");
      // Force reflow
      void icon.offsetWidth;
      // Remove the class to re-enable animation capability
      icon.classList.remove("no-anim");
    };

    // Set up MutationObserver to handle dynamically added icons
    const observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
        addResetListeners();
      }
    });

    // Start observing the document body
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial setup for existing elements
    setTimeout(addResetListeners, 500);

    const style = document.createElement("style");
    style.id = "glass-swipe-keyframes";
    style.innerHTML = `
      .tech-icon-glass {
        position: relative;
        display: inline-block;
        overflow: hidden;
        transition: transform 0.3s ease;
        border-radius: 4px;
        padding: 4px 12px;
      }
      .tech-icon-glass:hover {
        transform: scale(1.2);
        background-color: hsla(0, 0%, 100%, 0.0);
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
        /* HSL format allows easier manipulation for animations and themes */
        transform: rotate(45deg);
        pointer-events: none;
        opacity: 0;
        filter: blur(10px);
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

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default GlassSwipe;
