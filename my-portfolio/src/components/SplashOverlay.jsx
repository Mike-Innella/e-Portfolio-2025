import { useState, useEffect, useRef } from "react";
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
  const timersRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  // Message sequence and element fade-in animation effect
  useEffect(() => {
    // Initial loader fade-in
    timersRef.current.push(
      setTimeout(() => {
        setShowLoader(true);
      }, 1500)
    );
    timersRef.current.push(
      setTimeout(() => {
        setShowHello(true);
      }, 500)
    );
    timersRef.current.push(
      setTimeout(() => {
        setShowHello(false);
      }, 3000)
    );
    timersRef.current.push(
      setTimeout(() => {
        setShowInstructions(true);
      }, 3000)
    );
    timersRef.current.push(
      setTimeout(() => {
        setShowInstructions(false);
      }, 4500)
    );
    timersRef.current.push(
      setTimeout(() => {
        setShowButton(true);
      }, 5000)
    );

    // Cleanup timers
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);
  const handleDoubleClick = () => {
    timersRef.current.forEach(clearTimeout);
    setShowHello(false);
    setShowInstructions(false);
    setShowLoader(true);
    setShowButton(true);
  };
  /*************  ✨ Windsurf Command 🌟  *************/
  // Check if the `hidden` state is true, if so, return null to not render the component

  if (hidden) return null;

  // Return the overlay component
  return (
    <div onDoubleClick={handleDoubleClick}
      // Set the overlay to cover the entire screen with fixed positioning and high z-index
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-1200 ease ${
        // Apply opacity and pointer-events styles based on `isHiding` state
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      // Use the background color defined in CSS variables
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div
        /*******  b39f041f-cae0-4b31-bb76-a5a00b79acd6  *******/
        className={`flex flex-col items-center justify-between w-screen min-h-screen py-10 transition-transform duration-1200 ease${
          isHiding ? "-translate-y-40" : ""
        }`}
      >
        <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-2">
            <div className="w-full max-w-[85%] sm:max-w-sm md:max-w-md text-center md:text-left p-4">
              <span
                className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-opacity duration-1200 ease ${
                  showHello ? "opacity-100" : "opacity-0"
                }`}
              >
                Hello!
              </span>
            </div>

            <div
              className={`transition-opacity duration-1000 my-4 md:my-0 scale-75 sm:scale-90 md:scale-100 ${
                showLoader ? "opacity-100" : "opacity-0"
              }`}
            >
              <Loader />
            </div>

            <div className="w-full max-w-[85%] sm:max-w-sm md:max-w-md text-center md:text-right p-4">
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
          className={`transition-all duration-300 ease-in-out translate-y--20${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <CircleButton
            className={`to-website transition-all duration-300 ease-in-out mb-12 ${
              isHiding ? "translate-x-20" : ""
            }`}
            onClick={() => {
              setIsHiding(true);
              setTimeout(() => {
                setHidden(true);
                if (onHide) onHide();F
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
