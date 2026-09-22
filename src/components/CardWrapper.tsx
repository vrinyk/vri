import pinTop from "../assets/images/pin-top.png";

interface CardWrapperProps {
  children: React.ReactNode;
  showPin?: boolean;
  showBorder?: boolean;
  isActive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CardWrapper({
  children,
  showPin = true,
  showBorder = true,
  isActive = true,
  className = "",
  style,
}: CardWrapperProps) {
  return (
    // The 16:9 aspect ratio only applies from md up. On a phone a 16:9 card is
    // about 210px tall, so mobile grows with content instead.
    <div
      className={`relative mx-auto w-full max-w-[1100px] md:[aspect-ratio:16/9] ${className}`}
      style={style}
    >
      {/* Stacked back card — offset blueprint layer (scrapbook mockup)
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-lg bg-blue-card-back grid-plus shadow-[12px_14px_0_rgba(0,0,0,0.12)]"
        style={{
          transform: "translate(14px, 16px) rotate(-0.8deg)",
        }}
        aria-hidden
      /> */}

      {/* Main blue card.
          The min height lives here, not on the parent. With `h-full` against a
          parent sized only by `min-height`, the card stayed 560px while the
          content kept growing, so anything past the fold spilled outside the
          inner border frame on a phone. */}
      <div
        className={`relative z-10 min-h-[560px] w-full overflow-visible rounded-lg grid-plus shadow-[8px_10px_24px_rgba(30,40,80,0.25)] transition-colors duration-500 ease-out md:h-full md:min-h-0 ${
          isActive ? "bg-blue-card" : "bg-blue-card-back"
        }`}
      >
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
          className="pointer-events-none absolute left-1/2 top-0 z-30 h-12 w-12 -translate-x-1/2 -translate-y-[30%] drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] md:h-18 md:w-18 md:-translate-y-[4%]"
        />
      )}
    </div>
  );
}
