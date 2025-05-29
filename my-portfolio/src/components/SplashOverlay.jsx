import { useState, useEffect } from "react";
import CircleButton from "../components/CircleButton";
import { MdArrowForward } from "react-icons/md";
import Loader from "../ux/LoadingAnimation";

export default function SplashOverlay({ onHide }) {
  const [isHiding, setIsHiding] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showHello, setShowHello] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  // Message sequence and element fade-in animation effect
  useEffect(() => {
    // Initial loader fade-in
    const loaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1500);

    // Show first message after a short delay
    const helloTimer = setTimeout(() => {
      setShowHello(true);
    }, 500);

    // Hide first message after 2 seconds
    const hideHelloTimer = setTimeout(() => {
      setShowHello(false);
    }, 3000);

    // Show second message 0.7s after first message disappears
    const instructionsTimer = setTimeout(() => {
      setShowInstructions(true);
    }, 3000);

    // Hide second message after 2 more seconds
    const hideInstructionsTimer = setTimeout(() => {
      setShowInstructions(false);
    }, 4500);

    // Show button after all messages have completed
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    // Cleanup timers
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(helloTimer);
      clearTimeout(hideHelloTimer);
      clearTimeout(instructionsTimer);
      clearTimeout(hideInstructionsTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-1200 ease ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div
        className={`flex flex-col items-center justify-between w-screen min-h-screen py-10 transition-transform duration-1200 ease${
          isHiding ? "-translate-y-40" : ""
        }`}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-0">
            <div className="w-full max-w-xs md:max-w-md text-center md:text-left">
              <span
                className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-opacity duration-1200 ease ${
                  showHello ? "opacity-100" : "opacity-0"
                }`}
              >
                Hello!
              </span>
            </div>

            <div
              className={`transition-opacity duration-1000 my-4 md:my-0 ${
                showLoader ? "opacity-100" : "opacity-0"
              }`}
            >
              <Loader />
            </div>

            <div className="w-full max-w-xs md:max-w-md text-center md:text-right">
              <span
                className={`text-lg sm:text-xl md:text-3xl transition-opacity duration-1200 ease ${
                  showInstructions ? "opacity-100" : "opacity-0"
                }`}
              >
                Click the arrow below to continue
              </span>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <CircleButton
            className={`to-website transition-all duration-300 ease-in-out ${
              isHiding ? "translate-x-20" : ""
            }`}
            onClick={() => {
              setIsHiding(true);
              setTimeout(() => {
                setHidden(true);
                if (onHide) onHide();
              }, 1000);
            }}
            size={4}
            tooltip="Enter site"
          >
            <MdArrowForward className="w-10 h-10" />
          </CircleButton>
        </div>
      </div>
    </div>
  );
}
