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
      icon.classList.add("no-anim");
      void icon.offsetWidth;
      icon.classList.remove("no-anim");
    };

    // Set up MutationObserver to handle dynamically added icons
    const observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
        addResetListeners();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(addResetListeners, 500);

    const style = document.createElement("style");
    style.id = "glass-swipe-keyframes";
    style.innerHTML = `
      .tech-icon-glass {
        position: relative;
        display: inline-block;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        border-radius: 4px;
        padding: 6px 12px;
        /* Optional: slightly soften */
        box-shadow: 0 2px 10px 0 rgba(60,70,120,0.10);
      }
      .tech-icon-glass:hover {
        transform: scale(1.18);
        background-color: rgba(255,255,255,0.0);
      }
      .tech-icon-glass::before {
        content: "";
        position: absolute;
        bottom: -80%;
        left: -40%;
        width: 200%; /* Thinner swipe */
        height: 120%;
        background: linear-gradient(
          120deg,
          rgba(255,255,255,0.0) 0%,
          rgba(255,255,255,0.4) 45%,
          rgba(255,255,255,0.85) 50%,
          rgba(255,255,255,0.3) 55%,
          rgba(255,255,255,0.0) 100%
        );
        box-shadow:
          0 0 16px 6px rgba(120,160,255,0.13), /* subtle glow */
          0 0 4px 2px #fff8; /* edge light */
        filter: blur(0.5px);
        border-radius: 10px;
        transform: rotate(28deg);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .tech-icon-glass:hover::before {
        animation: glassSwipe 600ms cubic-bezier(0.77, 0, 0.175, 1) 1 forwards;
      }
      .tech-icon-glass.no-anim::before {
        animation: none !important;
      }
      @keyframes glassSwipe {
        0% {
          bottom: -80%;
          left: -40%;
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        100% {
          bottom: 110%;
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
