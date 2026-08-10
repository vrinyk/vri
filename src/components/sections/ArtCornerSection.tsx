import { motion } from "motion/react";
import { InfiniteGallery } from "../InfiniteGallery";

export function ArtCornerSection() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* ─── Full-bleed infinite canvas ─── */}
      <InfiniteGallery
        className="absolute inset-0"
        density={5}
        imageWidth={200}
        imageHeight={200}
        rounded={3}
        dragSpeed={20}
        driftAmount={20}
        friction={10}
        backgroundColor="transparent"
      />

      {/* ─── Title overlay ─── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pointer-events-none absolute left-0 right-0 top-[4%] z-20 flex flex-col items-center gap-2"
      >
        <h2 className="font-oswald text-[clamp(22px,2.8vw,42px)] font-semibold uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
          Art Corner
        </h2>
        <p className="font-caveat text-[clamp(15px,1.4vw,20px)] font-bold text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          drag to wander &middot; scroll to fall deeper
        </p>
      </motion.div>
    </div>
  );
}
