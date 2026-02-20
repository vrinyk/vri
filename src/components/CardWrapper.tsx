import pinTop from "../assets/images/pin-top.png";

interface CardWrapperProps {
  children: React.ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1100px]" style={{ aspectRatio: "16 / 9" }}>
      {/* Back card (darker blue, tilted) */}
      <div
        className="absolute inset-0 z-0 rounded-lg bg-blue-card-back"
        style={{ transform: "rotate(2deg)", top: "2%", left: "2%", width: "98%", height: "98%" }}
      />

      {/* Main blue card */}
      <div className="relative z-10 h-full w-full rounded-lg bg-blue-card overflow-hidden">
        {/* Inner border frame */}
        <div className="absolute inset-[5%] rounded border border-white/30 pointer-events-none" />

        {/* Section content */}
        {children}
      </div>

      {/* Pin on top */}
      <img
        src={pinTop}
        alt=""
        className="absolute left-1/2 -top-6 z-20 h-20 w-20 -translate-x-1/2 pointer-events-none"
      />
    </div>
  );
}
