import { useState, useEffect, useRef } from "react";
import CircleButton from "../components/CircleButton";
import { MdArrowForward } from "react-icons/md";
import Loader, {
  LoaderBackground,
  LoaderAnimation,
} from "../ux/LoadingAnimation/LoadingAnimation";

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

  useEffect(() => {
    // Store timers locally to ensure cleanup uses the correct values
    const timers = [];

    // Show "Hello!" at 500ms, hide at 3000ms
    timers.push(setTimeout(() => setShowHello(true), 500));
    timers.push(setTimeout(() => setShowHello(false), 3000));

    // Show Loader at 1500ms (fade in after Hello appears)
    timers.push(setTimeout(() => setShowLoader(true), 3000));

    // Show instructions after Hello hides
    timers.push(setTimeout(() => setShowInstructions(true), 1500));
    timers.push(setTimeout(() => setShowInstructions(false), 3000));

    // Show button last
    timers.push(setTimeout(() => setShowButton(true), 4500));

    // Save the timers to the ref for access outside this effect
    timersRef.current = timers;

    // Use the local variable for cleanup to avoid the stale ref warning
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleDoubleClick = () => {
    timersRef.current.forEach(clearTimeout);
    setShowHello(false);
    setShowInstructions(false);
    setShowLoader(true);
    setShowButton(true);
  };

  if (hidden) return null;

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-1200 ease ${
        isHiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* Always present background with mouse tracking */}
      <LoaderBackground />

      {/* Always render loader but control visibility with opacity for smooth transitions */}
      {showLoader && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderAnimation />
        </div>
      )}
      <div
        className={`relative z-[1001] flex flex-col items-center justify-between w-screen min-h-screen h-full py-10 transition-transform duration-1200 ease${
          isHiding ? "-translate-y-40" : ""
        }`}
      >
        <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 max-sm:fixed max-sm:top-12">
          <div className="flex flex-col h-full items-center justify-center w-full gap-8 h-full gap-y-12 md:gap-2">
            <div className="w-full max-w-[85%] sm:max-w-sm md:max-w-md text-center md:text-left p-4">
              <span
                className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-opacity duration-1200 ease ${
                  showHello ? "opacity-100" : "opacity-0"
                }`}
              >
                Hello!
              </span>
            </div>

            {/* Loader placeholder - moved to overlay root */}

            <div className="w-full whitespace-nowrap sm:max-w-sm md:max-w-md text-center md:text-right p-4">
              <span
                className={`text-lg sm:text-xl md:text-3xl md:whitespace-nowrap transition-opacity duration-1200 ease ${
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
          } -translate-y-20 max-sm:fixed max-sm:bottom-20 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:transform max-sm:-translate-y-0`}
        >
          <CircleButton
            className={`to-website transition-all duration-300 ease-in-out mb-12 cursor-pointer ${
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
