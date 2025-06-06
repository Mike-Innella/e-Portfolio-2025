import React from "react";
import CircleButton from "../components/CircleButton";
import { CommonConfig, Icons } from "../config/index";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-10 bg-background text-primary text-center text-sm">
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      <div className="flex justify-center gap-2 my-2 flex-wrap max-w-[90vw] mx-auto">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
            className="hover:scale-125"
            key={`footer-social-${index}`}
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
    </footer>
  );
}
