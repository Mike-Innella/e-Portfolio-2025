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
        <div
          key={`section-${index}`}
          data-aos="fade-up"
          ref={sectionRefs ? sectionRefs[section.name] : null}
          id={section.name}
        >
          <Section
            sectionHeader={!section.hideHeader ? section.name : null}
            headerIcon={!section.hideHeader ? section.headerIcon : null}
            extraClass={section.extraClass || ""}
          >
            {section.content}
          </Section>
        </div>
      ))}
    </>
  );
}
