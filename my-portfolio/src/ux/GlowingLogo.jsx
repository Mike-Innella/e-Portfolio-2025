import React, { lazy, Suspense } from "react";
import LogoImg from "../assets/LogoImg.png";

// Create a lazy-loaded component for the logo image
const LazyLogo = lazy(() => import("./LazyLogo"));

export default function GlowingLogo() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <Suspense fallback={<div className="w-[24rem] h-[24rem] animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>}>
        <LazyLogo />
      </Suspense>
    </div>
  );
}
