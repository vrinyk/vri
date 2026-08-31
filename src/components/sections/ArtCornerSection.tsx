import { motion } from "motion/react";
import { InfiniteGallery } from "../InfiniteGallery";
import { useIsMobile } from "../../hooks/useIsMobile";

export function ArtCornerSection() {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* ─── Full-bleed infinite canvas ─── */}
      <InfiniteGallery
        className="absolute inset-0"
        density={isMobile ? 3 : 5}
        imageWidth={isMobile ? 130 : 200}
        imageHeight={isMobile ? 130 : 200}
        rounded={3}
        dragSpeed={20}
        driftAmount={20}
        friction={10}
        backgroundColor="transparent"
        // The canvas defaults to `touch-action: none`, which on a phone traps
        // the page: the canvas fills the card, so there is nothing left to
        // scroll from. `pan-y` hands vertical gestures back to the page and
        // keeps horizontal drag for panning the canvas.
        style={isMobile ? { touchAction: "pan-y" } : undefined}
      />

      {/* ─── Title overlay ─── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pointer-events-none absolute left-0 right-0 top-[3%] z-20 flex flex-col items-center gap-1.5 px-4 text-center md:top-[4%] md:gap-2"
      >
        <h2 className="font-oswald text-[24px] font-semibold uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:text-[clamp(22px,2.8vw,42px)]">
          Art Corner
        </h2>
        <p className="font-caveat text-[14px] font-bold text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:text-[clamp(15px,1.4vw,20px)]">
          <span className="md:hidden">swipe sideways to wander</span>
          <span className="hidden md:inline">
            drag to wander &middot; scroll to fall deeper
          </span>
        </p>
      </motion.div>
    </div>
  );
}
