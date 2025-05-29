import { useState, useEffect } from "react";
import CircleButton from "../components/CircleButton";
import { MdArrowForward } from "react-icons/md";
import Loader from "../ux/LoadingAnimation";

export default function SplashOverlay() {
  const [isHiding, setIsHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-background z-[999] transition-opacity duration-1000 ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center transition-transform duration-1000 ${
          isHiding ? "-translate-y-40" : ""
        }`}
      >
        {/* Replace the placeholder with the new Loader component */}
        <div className="mb-10 flex items-center justify-center w-[300px] h-[300px] bg-neutral-900 rounded-lg shadow-lg relative">
          <Loader />
        </div>

        <CircleButton
          className={`to-website transition-transform duration-1000 ${
            isHiding ? "translate-x-20" : ""
          }`}
          onClick={() => {
            setIsHiding(true);
            setTimeout(() => setHidden(true), 1000);
          }}
          size={4}
          tooltip="Enter site"
        >
          <MdArrowForward className="w-10 h-10" />
        </CircleButton>
      </div>
    </div>
  );
}
