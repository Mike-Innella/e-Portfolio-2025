import React, { useRef, useMemo } from "react";
import SplashOverlay from "./components/SplashOverlay";
import Menu from "./components/Menu/Menu";
import TopSection from "./sections/TopSection";
import CustomSections from "./sections/CustomSections";
import Footer from "./sections/Footer";
import { CustomSectionsConfig } from "./config";

// For scroll-to-section: create refs for each section
function buildSectionRefs() {
  const refs = {};
  // Always include "projects" for main scroll
  CustomSectionsConfig.forEach((section) => {
    refs[section.name] = useRef(null);
  });
  return refs;
}

export default function App() {
  // Refs for section navigation (memoize so they're stable)
  const sectionRefs = useMemo(buildSectionRefs, []);

  return (
    <div className="relative bg-background min-h-screen font-sans">
      {/* Splash / Loading Overlay */}
      <SplashOverlay />

      {/* Floating/arc menu */}
      <Menu sectionRefs={sectionRefs} />

      {/* Main content sections */}
      <main className="w-full flex flex-col items-stretch">
        {/* Top (intro/signature/social) */}
        <div ref={sectionRefs["top"] || null}>
          <TopSection />
        </div>

        {/* All custom sections */}
        <CustomSections sectionRefs={sectionRefs} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
