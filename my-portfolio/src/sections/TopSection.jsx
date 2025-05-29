import { useRef, useEffect } from "react";
import CircleButton from "../components/CircleButton";
import { CommonConfig, Icons } from "../config/index";

// Custom animation with Tailwind: We'll use a small inline style for the SVG signature animation.
const drawSignature = `
@keyframes drawSignature {
  to {
    stroke-dashoffset: 0;
  }
}
`;

export default function TopSection() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const signatureLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", signatureLength);
      path.setAttribute("stroke-dashoffset", signatureLength);

      const viewBoxCoords = CommonConfig.signature?.viewBox
        .split(" ")
        .map(Number);
      path.setAttribute("stroke-width", Math.max(...viewBoxCoords) / 100);

      // Add the CSS animation to the path
      path.style.animation = "drawSignature 5s linear forwards";
    }
  }, []);

  return (
    <div className="relative flex flex-row justify-center items-center min-h-screen w-full max-md:flex-col max-md:text-center">
      {/* Inject the custom keyframes */}
      <style>{drawSignature}</style>

      {/* Intro */}
      <div className="intro w-2/5 pr-16 border-r border-primary text-right max-md:w-full max-md:pr-0 max-md:pb-8 max-md:border-b max-md:border-r-0 max-md:text-center">
        <h1 className="text-[7vw] font-bold leading-[0.9] m-0">
          {CommonConfig.name}
        </h1>
        <p className="text-2xl mt-4">{CommonConfig.tagline}</p>
      </div>

      {/* Signature SVG */}
      <div className="signature w-3/5 h-full pl-16 max-md:w-full max-md:pl-0 max-md:pt-8 flex items-center">
        <svg
          viewBox={CommonConfig.signature?.viewBox}
          className="w-full h-full"
        >
          <path
            ref={pathRef}
            id="signature-path"
            stroke="var(--text-primary)"
            fill="none"
            d={CommonConfig.signature?.signaturePathD}
          />
        </svg>
      </div>

      {/* Socials */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {CommonConfig.social.map((socialDetails, index) => (
          <CircleButton
            key={`top-section-social-${index}`}
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
    </div>
  );
}
