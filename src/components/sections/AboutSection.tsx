import { motion } from "motion/react";
import aboutArrow from "../../assets/images/about-arrow.svg";
import vrinAboutImage from "../../assets/images/vrin-about.png";

export function AboutSection() {
  return (
    <>
      <div className="relative flex h-full w-full flex-col p-6 md:block md:p-[6%]">
        {/* ─── Title ─── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-oswald text-[28px] font-semibold uppercase text-white mb-4 md:mb-[1%] md:text-[clamp(32px,4vw,64px)]"
        >
          Who Am I?
        </motion.h2>

        {/* Doodle arrow + "duhh! an icon" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-[22%] right-[32%] hidden md:block"
        >
          <img src={aboutArrow} alt="" aria-hidden="true" className="w-[84px] h-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-[30%] right-[22%] hidden font-caveat text-[clamp(20px,2vw,28px)] font-bold text-white italic md:block"
        >
          duhh! an icon
        </motion.p>

        {/* ─── Left: Combined Polaroid Image ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mx-auto w-full max-w-[280px] md:absolute md:left-[4%] md:top-[22%] md:mx-0 md:w-[42%] md:max-w-none"
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
          className="absolute left-[13.5%] top-[56.5%] hidden font-oswald text-2xl font-bold text-blue-900 -rotate-11 md:block"
        >
          Escape
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.7 }}
          className="absolute left-[25%] top-[64%] hidden font-oswald text-2xl font-bold text-[#e8a23a] rotate-12 md:block"
        >
          Fin-Gourmet
        </motion.p>

        {/* Star doodles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="absolute left-[6%] top-[72%] hidden md:block"
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
          className="absolute left-[6%] top-[75%] hidden font-caveat text-[clamp(12px,1.2vw,18px)] font-bold text-white -rotate-16 md:block"
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
          className="absolute left-[5%] top-[85%] hidden w-[18%] h-[10px] -rotate-16 md:block"
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
        <div className="relative mt-6 w-full md:absolute md:right-[5%] md:top-[31%] md:mt-0 md:w-[48%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-dm-sans text-[12px] uppercase tracking-[0.2em] text-white/50 mb-3 md:text-[clamp(9px,0.8vw,12px)]"
          >
            How it started
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-oswald text-[22px] font-semibold uppercase leading-tight text-white mb-3.5 md:mb-[4%] md:text-[clamp(18px,2.1vw,34px)]"
          >
            Economics first,<br />design for good
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-dm-sans text-[14px] leading-[1.5] md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45] text-white/90"
          >
            Three years of economics taught me to look for the incentive
            behind the behaviour. Design let me do something about it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="mt-2.5 font-dm-sans text-[14px] leading-[1.5] md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45] text-white/90"
          >
            Today I'm the sole product designer at FREED, India's first
            digital debt relief platform — three products, five PMs, and users
            across Tier 2 and Tier 3 India.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.84 }}
            className="mt-2.5 font-dm-sans text-[14px] leading-[1.5] md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45] text-white/90"
          >
            I talk to users first and draw second. 100+ interviews, 300+
            screens, 20+ experiments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.94 }}
            className="mt-2.5 font-dm-sans text-[14px] leading-[1.5] md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45] text-white/90"
          >
            Off the clock: making something with my hands, or the mountains,
            where the good thinking happens.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.04 }}
            className="mt-3 font-dm-sans text-[14px] leading-[1.5] md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45] text-white/90 italic"
          >
            Let's make something complicated look easy.
          </motion.p>
        </div>
      </div>
    </>
  );
}
