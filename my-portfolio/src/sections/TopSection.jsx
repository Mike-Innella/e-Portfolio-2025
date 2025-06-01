import React from "react";
import { useEffect } from "react";
import { CommonConfig, Icons } from "../config/index";
import HeadShot from "../assets/headshot-enhanced.png"; // your profile picture
import CircleButton from "../components/CircleButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TopSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="relative flex flex-row justify-center items-center min-h-screen w-full max-md:flex-col max-md:text-center"
    >
      {/* Intro */}
      <div className="intro w-1/2 pr-16 border-r border-primary text-right max-md:w-full max-md:pr-0 max-md:pb-8 max-md:border-b max-md:border-r-0 max-md:text-center">
        <h1 className="text-[7vw] font-bold leading-[0.9] m-0">
          {CommonConfig.name}
        </h1>
        <p className="text-2xl mt-4">{CommonConfig.tagline}</p>
      </div>

      {/* Profile Picture */}
      <div className="profile w-1/2 h-full pl-16 max-md:w-full max-md:pl-0 max-md:pt-8 flex items-center justify-center">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-primary w-[28rem] h-[28rem] max-md:w-[220px] max-md:h-[220px] flex items-center justify-center bg-background transition-all duration-700">
          <img
            src={HeadShot}
            alt="Profile"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Socials */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
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
