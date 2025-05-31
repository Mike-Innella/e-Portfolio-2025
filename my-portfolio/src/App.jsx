import React, { useRef, useState } from "react";
import SplashOverlay from "./components/SplashOverlay";
import Menu from "./components/Menu/Menu";
import TopSection from "./sections/TopSection";
import CustomSections from "./sections/CustomSections";
import Footer from "./sections/Footer";
import { CustomSectionsConfig } from "./config";

export default function App() {
  // Track if splash overlay is active
  const [splashActive, setSplashActive] = useState(true);

  // Create individual refs for each section directly
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Map the refs to section names
  const sectionRefs = {
    top: topRef,
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <div
      className="relative min-h-screen font-sans max-w-screen-[1920px] mx-auto"
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
