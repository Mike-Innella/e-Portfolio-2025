import React from "react";
import { useEffect } from "react"; 
import Section from "../sections/Section";
import { CustomSectionsConfig } from "../config/index";
import AOS from "aos";
import "aos/dist/aos.css";

// Props: sectionRefs (object of refs keyed by section name)
export default function CustomSections({ sectionRefs }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {CustomSectionsConfig.map((section, index) => (
        <div data-aos="fade-up">
          <Section
            key={`section-${index}`}
            ref={sectionRefs ? sectionRefs[section.name] : null}
            sectionHeader={section.name}
            headerIcon={section.headerIcon}
            extraClass={section.extraClass || ""}
          >
            {section.content}
          </Section>
        </div>
      ))}
    </>
  );
}
