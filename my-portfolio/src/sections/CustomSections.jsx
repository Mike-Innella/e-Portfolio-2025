import React from "react";
import Section from "../sections/Section";
import { CustomSectionsConfig } from "../config/index";

// Props: sectionRefs (object of refs keyed by section name)
export default function CustomSections({ sectionRefs }) {
  return (
    <>
      {CustomSectionsConfig.map((section, index) => (
        <Section
          key={`section-${index}`}
          ref={sectionRefs ? sectionRefs[section.name] : null}
          sectionHeader={section.name}
          headerIcon={section.headerIcon}
          extraClass={section.extraClass || ""}
        >
          {section.content}
        </Section>
      ))}
    </>
  );
}
