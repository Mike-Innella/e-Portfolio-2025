import React from "react";
import "./FCStyles.css";
import "./HexBadge.css";
import { TechStack } from "../../locales/TechStack"; // <--- Make sure path is correct

export default function FlipCard({
  image,
  icon,
  name,
  subtitle,
  description,
  links,
  techStack = [], // <-- Project-specific stack (array of keys)
}) {
  return (
    <div className="flipcard flex flex-row justify-center items-center w-96 h-48 p-0 mt-32 mb-32 max-lg:mx-auto max-lg:w-112 max-md:w-108 max-lg:h-24  max-md:h-28 max-lg:h-40 max-sm:w-fit max-sm:ml-0 max-sm:pl-0 max-sm:h-40 max-sm:w-full">
      <div className="flipcard__container w-full aspect-[6/6] max-lg:mx-auto max-lg:w-full max-lg:h-80 max-md:h-96 max-sm:w-fit max-sm:ml-0 max-sm:pl-0">
        <div
          className="flipcard__front absolute w-full h-full rounded-[14px] shadow-xl overflow-hidden flex flex-col items-center justify-center bg-[#fff] text-[#222] dark:bg-[#22222294] dark:text-white bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flipcard__inner relative z-10 text-center p-6 max-sm:p-4">
            <span className="flipcard__icon block text-[2.3rem] mb-2 text-[#222] dark:text-[#fff]">
              {typeof icon === "string" &&
              icon.match(/\.(png|jpe?g|gif|svg)$/i) ? (
                <img
                  src={icon}
                  alt={name + " icon"}
                  className="w-10 h-10 flipcard__png"
                />
              ) : typeof icon === "object" && !React.isValidElement(icon) ? (
                <img
                  src={icon.default || icon.src || icon}
                  alt={name + " icon"}
                  className="w-10 h-10 flipcard__png"
                />
              ) : (
                icon
              )}
            </span>
            <p className="flipcard__title text-[1.35rem] font-bold mb-1 text-[#222] dark:text-[#fff] text-left">
              {name}
            </p>
            {subtitle && (
              <span className="flipcard__subtitle text-[1rem] opacity-80 text-[#c0d0e0] dark:text-[#c0d0e0]">
                {subtitle}
              </span>
            )}

            {/* --- Tech Stack Badges Row --- */}
            <div className="flipcard__badges-row flex flex-wrap justify-center gap-2 mt-3">
              {techStack.map((techKey) => {
                const tech = TechStack.find((t) => t.key === techKey);
                if (!tech) return null;
                return (
                  <div
                    key={tech.key}
                    className="tech-badge-container"
                    title={tech.label}
                  >
                    <span className="hex-badge">{tech.icon}</span>
                    <span className="hex-badge-ribbon">{tech.label}</span>
                  </div>
                );
              })}
            </div>
            {/* ----------------------------- */}
          </div>
        </div>

        <div className="flipcard__back absolute w-full h-full rounded-[14px] flex items-center justify-center bg-gradient-to-br from-[#dbeafed0] to-[#818cf8a8] text-[#222] dark:from-[#0f172ad5] dark:to-[#818df8a8] dark:text-white transform rotate-y-180">
          <div className="flipcard__inner relative z-10 text-center p-6">
            <p className="flipcard__desc mb-5 text-[1rem] text-[#222] dark:text-white">
              {description}
            </p>
            <div className="flipcard__links flex gap-3 justify-center">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.tooltip}
                  className="flipcard__linkbtn bg-white text-[#18181b] dark:bg-[#18181b] dark:text-white p-3 rounded-full shadow-md text-[1.25rem] transition hover:bg-[#818cf8] hover:text-white hover:scale-110 dark:hover:text-[#222]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
