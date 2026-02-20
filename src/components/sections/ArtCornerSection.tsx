import { motion } from "motion/react";

export function ArtCornerSection() {
  return (
    <>
      <div className="relative h-full w-full flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-caveat text-[clamp(24px,3vw,48px)] font-bold text-white/50"
        >
          coming soon...
        </motion.p>
      </div>
    </>
  );
}
