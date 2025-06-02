import LogoImg from "../assets/LogoImg.png";

export default function GlowingLogo() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <img
        src={LogoImg}
        alt="M.I. Logo"
        className="w-[24rem] opacity-80 transition-all duration-500
          drop-shadow-[0_0_8px_hsla(188,100%,61%,0.6)]
          hover:opacity-100 hover:drop-shadow-[0_0_16px_hsla(188,100%,61%,1.2)]
          animate-logoGlow logo-img"
      />
    </div>
  );
}
