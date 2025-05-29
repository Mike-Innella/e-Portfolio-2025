export default function Loader() {
  return (
    <div
      className="absolute top-[calc(50%-32px)] left-[calc(50%-32px)] w-loader h-loader rounded-full perspective-800 bg-loader"
      style={{ perspective: "800px" }} // fallback in case custom doesn't apply
    >
      <div
        className="absolute w-full h-full rounded-full border-b-4 border-loader animate-rotate-one"
        style={{ left: 0, top: 0 }}
      ></div>
      <div
        className="absolute w-full h-full rounded-full border-r-4 border-loader animate-rotate-two"
        style={{ right: 0, top: 0 }}
      ></div>
      <div
        className="absolute w-full h-full rounded-full border-t-4 border-loader animate-rotate-three"
        style={{ right: 0, bottom: 0 }}
      ></div>
    </div>
  );
}
