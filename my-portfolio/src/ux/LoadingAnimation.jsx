export default function Loader() {
  return (
    <div
      style={{
        width: "480px",
        height: "480px",
        position: "relative",
        borderRadius: "50%",
        perspective: "800px",
        zIndex: 1000
      }}
    >
      {/* Glowing Orb in the center */}
      <div 
        className="glow-orb"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "40px",
          height: "40px",
          backgroundColor: "var(--accent-color)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.9,
          animation: "pulse 2s ease-in-out infinite",
          zIndex: 1
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
          borderBottom: "6px solid var(--text-color)",
          animation: "rotateOne 1s linear infinite",
          zIndex: 2
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
          borderRight: "6px solid var(--text-color)",
          animation: "rotateTwo 1s linear infinite",
          zIndex: 2
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
          borderTop: "6px solid var(--text-color)",
          animation: "rotateThree 1s linear infinite",
          zIndex: 2
        }}
      />
    </div>
  );
}
