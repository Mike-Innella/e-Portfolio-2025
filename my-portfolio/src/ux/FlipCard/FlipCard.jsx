import React from "react";
import "./FCStyles.css";

export default function FlipCard({
  image,
  icon,
  name,
  subtitle,
  description,
  links,
}) {
  return (
    <div className="flipcard flex justify-center items-center">
      <div className="flipcard__container">
        <div
          className="flipcard__front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flipcard__inner">
            <span className="flipcard__icon text-[#222] dark:text-[#fff]">
              {icon}
            </span>
            <p className="flipcard__title text-[#222] dark:text-[#fff]">
              {name}
            </p>
            {subtitle && (
              <span className="flipcard__subtitle text-[#222] dark:text-[#fff]">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        <div className="flipcard__back">
          <div className="flipcard__inner">
            <p className="flipcard__desc text-[#222] dark:text-[#fff]">
              {description}
            </p>
            <div className="flipcard__links">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.tooltip}
                  className="flipcard__linkbtn"
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
