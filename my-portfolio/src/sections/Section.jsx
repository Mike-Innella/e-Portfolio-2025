import React from "react";

export default function Section({
  sectionHeader,
  headerIcon,
  extraClass = "",
  children,
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
    "max-lg:flex-col max-lg:p-8 max-lg:py-10 max-sm:p-0 max-sm:ml-8",
  ].join(" ");

  // Section header layout
  const headerClasses = [
    "flex items-start text-3xl sm:text-4xl pr-8 border-r border-primary",
    "max-lg:pr-0 max-lg:pb-4 max-lg:border-0 max-lg:border-b max-lg:justify-center max-lg:text-center",
    isReverse && "border-r-0 pl-8 border-l border-primary max-lg:pl-0",
  ]
    .filter(Boolean)
    .join(" ");

  // Section content layout
  const contentClasses = [
    isReverse && "pl-0 pr-8 text-right max-sm:mr-8",
    "max-lg:pl-0 max-lg:pr-0  max-lg:pt-5",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      <div className={sectionClasses}>
        <h2 className={headerClasses}>
          <span className="p-2 pl-0 text-3xl sm:text-4xl transition-all duration-500 section-header-icon pb-[1rem]">
            {headerIcon}
          </span>
          {sectionHeader}
        </h2>
        <div className={contentClasses}>{children}</div>
      </div>
    </div>
  );
}
