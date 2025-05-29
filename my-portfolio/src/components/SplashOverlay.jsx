import { useState, useEffect } from "react";
import CircleButton from "../components/CircleButton";
import { MdArrowForward } from "react-icons/md";
import Loader from "../ux/LoadingAnimation";

export default function SplashOverlay() {
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
    }, 300);
    
    // Show first message after a short delay
    const helloTimer = setTimeout(() => {
      setShowHello(true);
    }, 800);
    
    // Hide first message after 2 seconds
    const hideHelloTimer = setTimeout(() => {
      setShowHello(false);
    }, 3000);
    
    // Show second message 0.7s after first message disappears
    const instructionsTimer = setTimeout(() => {
      setShowInstructions(true);
    }, 3700);
    
    // Hide second message after 2 more seconds
    const hideInstructionsTimer = setTimeout(() => {
      setShowInstructions(false);
    }, 5700);
    
    // Show button after all messages have completed
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 6000);
    
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
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-1000 ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div
        className={`flex flex-col items-center justify-between w-screen min-h-screen py-10 transition-transform duration-1000 ${
          isHiding ? "-translate-y-40" : ""
        }`}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center w-full">
            <div className="w-96 text-left">
              <span
                className={`text-5xl font-bold mr-[96px] transition-opacity duration-700 ${
                  showHello ? "opacity-100" : "opacity-0"
                }`}
              >
                Hello!
              </span>
            </div>

            <div className={`transition-opacity duration-1000 ${showLoader ? 'opacity-100' : 'opacity-0'}`}>
              <Loader />
            </div>

            <div className="w-96 text-right">
              <span
                className={`text-3xl ml-[96px] transition-opacity duration-700 ${
                  showInstructions ? "opacity-100" : "opacity-0"
                }`}
              >
                Click the arrow below to continue
              </span>
            </div>
          </div>
        </div>

        <div className={`transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
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
    </div>
  );
}
