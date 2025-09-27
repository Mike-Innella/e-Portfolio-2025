"use client";

import React from "react";
import s from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  message?: string;
  size?: "small" | "medium" | "large";
}

export default function LoadingSpinner({ 
  message = "Page Loading...",
  size = "medium" 
}: LoadingSpinnerProps) {
  return (
    <div className={s.container}>
      <div className={`${s.spinner} ${s[size]}`}>
        <div className={s.ring}></div>
        <div className={s.ring}></div>
        <div className={s.ring}></div>
        <div className={s.ring}></div>
      </div>
      {message && <p className={s.message}>{message}</p>}
    </div>
  );
}
