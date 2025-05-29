export default function Loader() {
  return (
    <div
      className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px]"
      style={{
        position: "relative",
        borderRadius: "50%",
        perspective: "800px",
        zIndex: 1000,
      }}
    >
      {/* Glowing Orb in the center */}
      <div
        className="glow-orb w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: "transparent",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
          animation: "pulse 2s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Orbiting rings */}
      <div
        style={{
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          left: 0,
          top: 0,
          borderBottom: "4px solid var(--text-color)",
          borderBottomWidth: "clamp(2px, 0.8vw, 6px)",
          animation: "rotateOne 3s linear infinite",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          right: 0,
          top: 0,
          borderRight: "4px solid var(--text-color)",
          borderRightWidth: "clamp(2px, 0.8vw, 6px)",
          animation: "rotateTwo 3s linear infinite",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          right: 0,
          bottom: 0,
          borderTop: "4px solid var(--text-color)",
          borderTopWidth: "clamp(2px, 0.8vw, 6px)",
          animation: "rotateThree 2s linear infinite",
          zIndex: 2,
        }}
      />
    </div>
  );
}
