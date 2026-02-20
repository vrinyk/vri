import pinTop from "../assets/images/pin-top.png";

interface CardWrapperProps {
  children: React.ReactNode;
  showPin?: boolean;
  showBorder?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CardWrapper({
  children,
  showPin = true,
  showBorder = true,
  className = "",
  style,
}: CardWrapperProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[1100px] ${className}`}
      style={{ aspectRatio: "16 / 9", ...style }}
    >
      {/* Stacked back card — offset blueprint layer (scrapbook mockup)
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-lg bg-blue-card-back grid-plus shadow-[12px_14px_0_rgba(0,0,0,0.12)]"
        style={{
          transform: "translate(14px, 16px) rotate(-0.8deg)",
        }}
        aria-hidden
      /> */}

      {/* Main blue card */}
      <div className="relative z-10 h-full w-full overflow-visible rounded-lg bg-blue-card grid-plus shadow-[8px_10px_24px_rgba(30,40,80,0.25)]">
        {/* Inner border frame */}
        {showBorder && (
          <div className="pointer-events-none absolute inset-[5%] rounded border border-white/35" />
        )}

        {/* Section content */}
        {children}
      </div>

      {/* Pin on top */}
      {showPin && (
        <img
          src={pinTop}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-30 h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-[42%] drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
        />
      )}
    </div>
  );
}
