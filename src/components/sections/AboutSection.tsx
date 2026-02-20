import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <>
      <div className="relative h-full w-full p-[6%]">
        {/* ─── Title ─── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-oswald text-[clamp(32px,4vw,64px)] font-semibold uppercase text-white mb-[1%]"
        >
          Who Am I?
        </motion.h2>

        {/* Doodle arrow + "duhh! an icon" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-[18%] right-[40%]"
        >
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="inline-block mr-2">
            <path d="M5 5 C 20 2, 40 8, 50 20 C 55 28, 48 35, 40 30" stroke="white" strokeWidth="2" strokeDasharray="4 3" fill="none" strokeLinecap="round" />
            <path d="M38 25 L40 32 L45 27" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-[20%] right-[22%] font-caveat text-[clamp(18px,2vw,28px)] font-bold text-white italic"
        >
          duhh! an icon
        </motion.p>

        {/* ─── Left: Polaroid Photos ─── */}
        <div className="absolute left-[4%] top-[28%] w-[38%] h-[55%]">
          {/* Photo 1: Escape */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: -8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute left-[0%] top-[0%] w-[55%]"
          >
            {/* Tape pieces */}
            <div className="absolute -top-3 left-[20%] h-6 w-10 bg-amber-300/70 rotate-[-15deg] z-10" />
            <div className="absolute -top-2 right-[10%] h-6 w-10 bg-amber-300/70 rotate-[20deg] z-10" />
            {/* Polaroid frame */}
            <div className="bg-white p-[6%] pb-[20%] shadow-md">
              <div className="w-full aspect-square bg-[#D1D3D4] rounded-sm" />
            </div>
            <p className="absolute bottom-[4%] left-0 w-full text-center font-caveat text-[clamp(12px,1.2vw,20px)] font-bold text-blue-card">
              Escape
            </p>
          </motion.div>

          {/* Photo 2: Fin-Gourmet */}
          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 5 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute left-[35%] top-[10%] w-[55%]"
          >
            {/* Tape pieces */}
            <div className="absolute -top-3 left-[15%] h-6 w-10 bg-amber-300/70 rotate-[10deg] z-10" />
            <div className="absolute -top-2 right-[15%] h-6 w-10 bg-amber-300/70 rotate-[-12deg] z-10" />
            {/* Polaroid frame */}
            <div className="bg-white p-[6%] pb-[20%] shadow-md">
              <div className="w-full aspect-square bg-[#D1D3D4] rounded-sm" />
            </div>
            <p className="absolute bottom-[4%] left-0 w-full text-center font-caveat text-[clamp(12px,1.2vw,20px)] font-bold text-blue-card">
              Fin-Gourmet
            </p>
          </motion.div>

          {/* Star doodles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="absolute bottom-[12%] left-[5%]"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 5 L12 15 L5 10 L15 10 L8 15 Z" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M22 12 L24 20 L18 16 L26 16 L20 20 Z" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M14 22 L16 30 L10 26 L18 26 L12 30 Z" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

          {/* Handwritten text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="absolute -bottom-[2%] left-[2%] font-caveat text-[clamp(12px,1.2vw,18px)] font-bold text-[#c4e44e] -rotate-3"
          >
            currently chasing after<br />my dreams always!
          </motion.p>
        </div>

        {/* ─── Right: Bio text ─── */}
        <div className="absolute right-[4%] top-[28%] w-[48%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-dm-sans text-[clamp(12px,1.1vw,17px)] leading-[1.7] text-white/90"
          >
            In 2022, a former economics student took an unexpected yet
            transformative turn toward design. What began as a love for art
            deeply influenced by growing up around her mother's fashion design
            work gradually evolved into a passion for creating meaningful
            digital experiences. That curiosity led her to become a
            self-taught product designer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-4 font-dm-sans text-[clamp(12px,1.1vw,17px)] leading-[1.7] text-white/90"
          >
            Her journey from economics to design wasn't linear, but it shaped
            a thoughtful, user-centered approach one that values clarity,
            research, and emotion in equal measure.
          </motion.p>
        </div>
      </div>
    </>
  );
}
