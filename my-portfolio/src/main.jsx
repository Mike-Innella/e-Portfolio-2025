import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./MobileOverrides.css";  // Import mobile-specific overrides
import App from "./App.jsx";

const stored = localStorage.getItem("theme");
if (stored === "dark") document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
