import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import { CommonConfig, Icons } from "../config/index";
// Use proper ES module static import with exact case-sensitivity for Vercel compatibility
import HeadShot from "../assets/headshot-enhanced.png";
import CircleButton from "../components/CircleButton";
import ProximityGrid from "../ux/ProximityGrid/ProximityGrid";
import "aos/dist/aos.css";

export default function TopSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="relative flex flex-row justify-center items-center min-h-screen w-full max-lg:px-6 max-lg:py-12 max-lg:flex-col max-lg:text-center max-sm:px-4"
    >
      <ProximityGrid />
      {/* Intro */}
      <div className="intro w-1/2 pr-16 border-r border-primary text-right max-lg:w-full max-lg:pr-0 max-lg:pb-6 max-lg:border-b max-lg:border-r-0 max-lg:text-center">
        <h1 className="text-[7vw] max-sm:text-[10vw] font-bold leading-[0.9] m-0">
          {CommonConfig.name}
        </h1>
        <p className="text-xl sm:text-2xl mt-4">{CommonConfig.tagline}</p>
      </div>

      {/* Profile Picture */}
      <div className="profile w-1/2 h-full max-lg:w-full pr-8 max-lg:pr-0 max-lg:w-full max-lg:pl-0 max-lg:pt-6 flex items-center justify-center">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-primary w-[28rem] h-[28rem] max-lg:w-[22rem] max-lg:h-[22rem] max-md:w-[20rem] max-md:h-[20rem] max-sm:w-[8rem] max-sm:h-[12rem] flex items-center justify-center bg-background transition-all duration-700">
          <img
            src={HeadShot} // Using properly imported HeadShot variable
            alt="Profile"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Socials */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-2 max-sm:bottom-6 flex-wrap max-w-[90vw]">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
            className="hover:scale-125"
            key={`top-section-social-${index}`}
            tooltip={socialDetails.name}
            tooltipPlacement="top"
            link={socialDetails.link}
            target="_blank"
          >
            {socialDetails.icon
              ? socialDetails.icon
              : Icons[socialDetails.name.toLowerCase()]}
          </CircleButton>
        ))}
      </div>
    </div>
  );
}
