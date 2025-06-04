import React from "react";
import LogoImg from "../assets/LogoImg.png";

export default function GlowingLogo() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-[24rem] h-[24rem] relative">
        <img 
          src={LogoImg} 
          alt="Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
}
