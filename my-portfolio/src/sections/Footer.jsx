import React from "react";
import CircleButton from "../components/CircleButton";
import { CommonConfig, Icons } from "../config/index";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-10 bg-background text-primary text-center text-sm">
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      <div className="flex justify-center gap-2 my-2">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
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
