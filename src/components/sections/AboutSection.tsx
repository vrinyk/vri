import { motion } from "motion/react";
import aboutArrow from "../../assets/images/about-arrow.svg";
import woodsPhoto from "../../assets/images/about-woods.jpg";
import ramenPhoto from "../../assets/images/about-ramen.jpg";
import holiPhoto from "../../assets/images/about-holi.jpg";

/**
 * A photo in a polaroid frame, with a strip of tape.
 * The three photos used to be one flattened PNG, so nothing could be moved or
 * captioned independently. They are separate files now and the frame is built
 * in CSS, which is what lets the collage reflow on a phone.
 */
function Polaroid({
  src,
  alt,
  rotate,
  tape = "left",
  className = "",
}: {
  src: string;
  alt: string;
  rotate: number;
  tape?: "left" | "right" | "none";
  className?: string;
}) {
  return (
    <div
      className={`relative bg-[#F4F3EF] p-[5%] pb-[9%] shadow-[0_10px_24px_rgba(20,28,60,0.35)] ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {tape !== "none" && (
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-[6%] h-[13%] w-[34%] bg-[#F2C94C]/85 ${
            tape === "left" ? "left-[-6%]" : "right-[-6%]"
          }`}
          style={{ rotate: tape === "left" ? "-38deg" : "36deg" }}
        />
      )}
      <img src={src} alt={alt} className="block h-full w-full object-cover" />
    </div>
  );
}

/** Hand drawn arrow that curves down and to the left. */
const CurlyArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 130 78" fill="none" className={className} aria-hidden>
    <path
      d="M124 10 C 96 4, 56 14, 30 52"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M41 42 L 27 56 L 46 60"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function AboutSection() {
  return (
    <div className="relative flex h-full w-full flex-col p-6 md:block md:p-[6%]">
      {/* ─── Title ─── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 text-center font-oswald text-[28px] font-semibold uppercase text-white md:mb-[1%] md:text-[clamp(32px,4vw,64px)]"
      >
        How it started
      </motion.h2>

      {/* Doodle arrow + "duhh! an icon" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute right-[32%] top-[20%] hidden md:block"
      >
        <img src={aboutArrow} alt="" aria-hidden="true" className="h-auto w-[84px]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute right-[22%] top-[28%] hidden font-caveat text-[clamp(20px,2vw,28px)] font-bold italic text-white md:block"
      >
        duhh! an icon
      </motion.p>

      {/* ─── Left: photo collage ─── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative mx-auto mt-2 w-full max-w-[300px] md:absolute md:left-[3%] md:top-[19%] md:mx-0 md:mt-0 md:aspect-[1/1.02] md:w-[44%] md:max-w-none"
      >
        {/* ── phone: a simple stack, no overlap ── */}
        <div className="flex flex-col items-center gap-5 md:hidden">
          <div className="relative w-[70%]">
            <Polaroid src={woodsPhoto} alt="Standing above the clouds on a trek" rotate={-4} />
          </div>
          <div className="flex items-start gap-2 self-start pl-2 text-[#F2C94C]">
            <CurlyArrow className="mt-1 w-12 -scale-y-100" />
            <p className="max-w-[190px] font-caveat text-[19px] font-bold leading-tight text-white">
              I find myself in woods, my happy escape.
            </p>
          </div>
          <div className="relative w-[62%] self-end">
            <Polaroid src={ramenPhoto} alt="A bowl of ramen" rotate={5} tape="right" />
          </div>
          <div className="relative w-[86%]">
            <Polaroid src={holiPhoto} alt="Holi, with the cat" rotate={-2} />
          </div>
        </div>

        {/* ── desktop: scrapbook layout ── */}
        <div className="hidden md:block">
          <div className="absolute left-0 top-[4%] w-[42%]">
            <Polaroid src={woodsPhoto} alt="Standing above the clouds on a trek" rotate={-5} />
          </div>

          {/* her line about the woods, pointing back at that photo */}
          <div className="absolute left-[46%] top-0 w-[54%]">
            <p className="font-caveat text-[clamp(15px,1.45vw,23px)] font-bold leading-tight text-white">
              I find myself in woods,
              <br />
              my happy escape.
            </p>
            <CurlyArrow className="mt-1 w-[clamp(52px,5vw,86px)] text-[#F2C94C]" />
          </div>

          <div className="absolute left-[52%] top-[27%] w-[38%]">
            <Polaroid src={ramenPhoto} alt="A bowl of ramen" rotate={6} tape="right" />
          </div>
          <p
            className="absolute left-[56%] top-[70%] font-oswald text-[clamp(13px,1.25vw,20px)] font-bold text-[#e8a23a]"
            style={{ rotate: "6deg" }}
          >
            Fin-Gourmet
          </p>

          <div className="absolute left-[2%] top-[59%] w-[48%]">
            <Polaroid src={holiPhoto} alt="Holi, with the cat" rotate={-3} />
          </div>

          {/* Star doodles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="absolute left-[68%] top-[76%]"
          >
            <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
              <path d="M10 5 L12 15 L5 10 L15 10 L8 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
              <path d="M22 12 L24 20 L18 16 L26 16 L20 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
              <path d="M14 22 L16 30 L10 26 L18 26 L12 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-blue-900" />
            </svg>
          </motion.div>

          {/* Handwritten text + green squiggle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="absolute left-[62%] top-[84%] font-caveat text-[clamp(12px,1.2vw,18px)] font-bold text-white"
            style={{ rotate: "-9deg" }}
          >
            currently chasing after
            <br />
            my dreams always!
          </motion.p>
          <motion.svg
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute left-[62%] top-[95%] h-[10px] w-[30%]"
            style={{ rotate: "-9deg" }}
            viewBox="0 0 200 10"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke="#c4e44e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M2 10 Q 50 5, 100 9 T 198 8" stroke="#c4e44e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </motion.svg>
        </div>
      </motion.div>

      {/* ─── Right: bio text ─── */}
      <div className="relative mt-8 w-full md:absolute md:right-[5%] md:top-[31%] md:mt-0 md:w-[46%]">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-3.5 font-oswald text-[22px] font-semibold uppercase leading-tight text-white md:mb-[4%] md:text-[clamp(18px,2.1vw,34px)]"
        >
          Economics first,<br />design for good
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-dm-sans text-[14px] leading-[1.55] text-white/80 md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.5]"
        >
          I grew up on <em className="italic">M.A.D</em> and{" "}
          <em className="italic">Art Attack</em>, and on watching my mom thread
          beads at the kitchen table. That is where the urge to make things
          started, whether it was a handmade gift or a sorting hat.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-3 font-dm-sans text-[14px] leading-[1.55] text-white/80 md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.5]"
        >
          <span className="font-medium text-white">Economics</span> came first.
          I found my way into{" "}
          <span className="font-medium text-white">design</span> by being nosy
          about everything around me, and that is where{" "}
          <span className="font-medium text-white">
            curiosity and problem solving
          </span>{" "}
          finally clicked together. Today I design thoughtful, immersive
          experiences that balance imagination with structure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-3.5 font-dm-sans text-[14px] italic leading-[1.5] text-white/90 md:text-[clamp(10px,0.95vw,15px)] md:leading-[1.45]"
        >
          Let's make something complicated look easy.
        </motion.p>
      </div>
    </div>
  );
}
