export default function Loader() {
  return (
    <div
      className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px]"
      style={{
        position: "relative",
        borderRadius: "50%",
        perspective: "800px",
        zIndex: 1000,
      }}
    >
      {/* Glowing Orb in the center */}
      <div
        className="glow-orb w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px]"
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
