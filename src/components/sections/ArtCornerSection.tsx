import { motion } from "motion/react";
import holiPhoto from "../../assets/images/art-corner-holi.jpeg";

export function ArtCornerSection() {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center gap-8 overflow-hidden px-[6%] py-[4%]">
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-oswald text-[clamp(22px,2.8vw,42px)] font-semibold uppercase text-white"
      >
        Art Corner
      </motion.h2>

      {/* Polaroid photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{ duration: 0.6, delay: 0.25, type: "spring" }}
        whileHover={{ rotate: 0, scale: 1.03 }}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(0, 0, 0, 0.3) 0px 10px 20px -4px",
        }}
        className="w-[min(58%,340px)] bg-[#F1F2F2] p-[4%] pb-[9%] cursor-default"
      >
        <div className="aspect-[4/5] w-full overflow-hidden bg-[#C8CACB]">
          <img
            src={holiPhoto}
            alt="Vrinda celebrating Holi with her cat"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-[6%] text-center font-caveat text-[clamp(16px,1.6vw,22px)] font-bold text-black/70">
          holi colours &amp; my favourite muse 🐾
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-caveat text-[clamp(15px,1.4vw,20px)] font-bold text-white/70"
      >
        more from behind the lens, coming soon...
      </motion.p>
    </div>
  );
}
