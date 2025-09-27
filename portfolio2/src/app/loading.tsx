import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
  return (
    <div 
      style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <LoadingSpinner size="large" message="Page Loading..." />
    </div>
  );
}
