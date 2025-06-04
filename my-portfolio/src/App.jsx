import React, { useRef, useState, lazy, Suspense } from "react";
import { CustomSectionsConfig } from "./config";

// Lazy load components for code splitting
// Keep SplashOverlay and Menu eager loaded for fast initial interaction
import SplashOverlay from "./components/SplashOverlay";
import Menu from "./components/Menu/Menu";

// Lazy load content sections that might not be immediately visible
const TopSection = lazy(() => import("./sections/TopSection"));
const CustomSections = lazy(() => import("./sections/CustomSections"));
const Footer = lazy(() => import("./sections/Footer"));

// Simple loading fallback for lazy-loaded components
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse w-full h-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
  </div>
);

export default function App() {
  // Track if splash overlay is active
  // eslint-disable-next-line no-unused-vars
  const [splashActive, setSplashActive] = useState(true);

  // Create individual refs for each section directly
  const topRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const aboutRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const projectsRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const contactRef = useRef(null);

  // Map the refs to section names
  const sectionRefs = {
    top: topRef,
    About: useRef(null),
    Projects: useRef(null),
    Reviews:useRef(null),
    Contact: useRef(null),
  };

  return (
    <div
      className="relative min-h-screen font-sans max-w-screen-[1920px] mx-auto overflow-x-hidden"
      style={{
        backgroundColor: "var(--background-color)",
        
        color: "var(--text-color)",
      }}
    >
      {/* Splash / Loading Overlay */}
      <SplashOverlay onHide={() => setSplashActive(false)} />

      {/* Floating/arc menu */}
      <Menu sectionRefs={sectionRefs} />

      {/* Main content sections */}
      <main className="w-full flex flex-col items-stretch">
        {/* Top */}
        <div ref={sectionRefs["top"] || null}>
          <Suspense fallback={<LoadingFallback />}>
            <TopSection />
          </Suspense>
        </div>

        {/* All custom sections */}
        <Suspense fallback={<LoadingFallback />}>
          <CustomSections sectionRefs={sectionRefs} />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
