import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LaptopMockup = ({ image, title, description, caseStudyLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="laptop-mockup-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="laptop-mockup">
        <div className="laptop-frame">
          <div className="laptop-screen">
            <div className={`laptop-content ${isHovered ? "scrolling" : ""}`}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base"></div>
      </div>
      <div className="project-card-overlay">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <Link href={caseStudyLink} className="view-case-study-btn">
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default LaptopMockup;
