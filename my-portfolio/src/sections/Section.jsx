import React from "react";

export default function Section({
  sectionHeader,
  headerIcon,
  extraClass = "",
  children
}) {
  // Set up class names for direction and centering
  const isReverse = extraClass.includes("section-reverse");
  const isCentered = extraClass.includes("section-centered");

  // Wrapper classes
  const wrapperClasses = "w-full";

  // Section flexbox layout
  const sectionClasses = [
    "flex",
    "p-20",
    isReverse ? "flex-row-reverse" : "flex-row",
    isCentered ? "items-center" : "items-start",
    extraClass,
    "max-md:flex-col max-md:p-12"
  ].join(" ");

  // Section header layout
  const headerClasses = [
    "flex items-start text-4xl pr-8 border-r border-primary",
    "max-md:pr-0 max-md:pb-3 max-md:border-0 max-md:border-b max-md:justify-center max-md:text-center",
    isReverse && "border-r-0 pl-8 border-l border-primary max-md:pl-0"
  ].filter(Boolean).join(" ");

  // Section content layout
  const contentClasses = [
    "pl-8",
    isReverse && "pl-0 pr-8 text-right",
    "max-md:pl-0 max-md:pr-0 max-md:text-center"
  ].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
      <div className={sectionClasses}>
        <h2 className={headerClasses}>
          <span className="p-2 pl-0 text-4xl transition-all duration-500 section-header-icon">
            {headerIcon}
          </span>
          {sectionHeader}
        </h2>
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </div>
  );
}
