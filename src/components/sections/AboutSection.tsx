import { motion } from "motion/react";
import aboutArrow from "../../assets/images/about-arrow.svg";
import vrinAboutImage from "../../assets/images/vrin-about.png";

export function AboutSection() {
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
          className="absolute top-[22%] right-[32%]"
        >
          <img src={aboutArrow} alt="" aria-hidden="true" className="w-[84px] h-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-[30%] right-[22%] font-caveat text-[clamp(20px,2vw,28px)] font-bold text-white italic"
        >
          duhh! an icon
        </motion.p>

        {/* ─── Left: Combined Polaroid Image ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute left-[4%] top-[22%] w-[42%]"
        >
          <img
            src={vrinAboutImage}
            alt="Polaroid snapshots with tape effect"
            className="h-auto w-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.62 }}
          className="absolute left-[13.5%] top-[56.5%] font-oswald text-2xl font-bold text-blue-900 -rotate-11"
        >
          Escape
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.7 }}
          className="absolute left-[25%] top-[64%] font-oswald text-2xl font-bold text-[#e8a23a] rotate-12"
        >
          Fin-Gourmet
        </motion.p>

        {/* Star doodles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="absolute left-[6%] top-[72%]"
        >
          <svg width="50" height="50" viewBox="0 0 40 40" fill="none">
            <path d="M10 5 L12 15 L5 10 L15 10 L8 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
            <path d="M22 12 L24 20 L18 16 L26 16 L20 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
            <path d="M14 22 L16 30 L10 26 L18 26 L12 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
          </svg>
        </motion.div>

        {/* Handwritten text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="absolute left-[6%] top-[75%] font-caveat text-[clamp(12px,1.2vw,18px)] font-bold text-white -rotate-16"
        >
          currently chasing after
          <br />
          my dreams always!
        </motion.p>

        {/* Green squiggle underline */}
        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute left-[5%] top-[85%] w-[18%] h-[10px] -rotate-16"
          viewBox="0 0 200 10"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2 6 Q 50 1, 100 5 T 198 4"
            stroke="#c4e44e"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2 10 Q 50 5, 100 9 T 198 8"
            stroke="#c4e44e"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>

        {/* ─── Right: Bio text ─── */}
        <div className="absolute right-[5%] top-[38%] w-[48%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-dm-sans text-[clamp(12px,1vw,17px)] leading-[1.7] text-white/90"
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
