import { motion } from "motion/react";

// Assets
import pinkStar from "../../assets/images/pink-star.svg";
import greenDot from "../../assets/images/green-dot.svg";
import stickyNote from "../../assets/images/sticky-note.svg";
import toolsBag from "../../assets/images/tools-bag.png";
import vinylRecord from "../../assets/images/vinyl-record.png";
import vrindaPhoto from "../../assets/images/vrinda-photo.png";
import speechBubble from "../../assets/images/speech-bubble.svg";
import pinTop from "../../assets/images/pin-top.png";

const SKILL_TAGS = [
  { label: "explore", rotate: -16.63, left: "4%", top: "68%" },
  { label: "define", rotate: -0.1, left: "18%", top: "78%" },
  { label: "design", rotate: -0.1, left: "32%", top: "68%" },
  { label: "empathy", rotate: -18.31, left: "40%", top: "80%" },
  { label: "trust", rotate: 34.51, left: "56%", top: "72%" },
];

/**
 * Inner card content for the Hero/Home section.
 */
export function HeroSection() {
  return (
    <div className="relative h-full w-full p-[6%]">
      {/* ─── Left: Polaroid + Photo ─── */}
      <div className="absolute left-[4%] top-[8%] h-[65%] w-[38%]">
        {/* White polaroid background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
          className="absolute left-[2%] top-[3%] h-[85%] w-[75%] origin-center -rotate-[7.5deg] bg-[#F1F2F2]"
        >
          {/* Gray inner frame (Polaroid window) */}
          <div className="absolute inset-[6%] bg-[#C8CACB]" />
        </motion.div>

        {/* Vrinda's photo */}
        <motion.img
          src={vrindaPhoto}
          alt="Vrinda Khandelwal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute -bottom-[5%] left-[45%] z-10 h-[80%] w-auto object-cover object-top"
        />
      </div>

      {/* ─── Right: Text Content ─── */}
      <div className="absolute left-[46%] top-[8%] w-[48%]">
        {/* Name badge — dashed frame + crop marks (screenshot) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative mb-5 mt-2 inline-block"
        >
          <div className="relative border-2 border-dashed border-white px-4 py-2.5">
            <span className="font-caveat text-[clamp(20px,2vw,32px)] font-bold text-white">
              Hi I'm vrinda Khandelwal
            </span>
          </div>
          <span
            className="pointer-events-none absolute -left-1 -top-1 h-2.5 w-2.5 border-l-2 border-t-2 border-white"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 border-r-2 border-t-2 border-white"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b-2 border-l-2 border-white"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-white"
            aria-hidden
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-5 font-oswald text-[clamp(26px,2.9vw,40px)] font-semibold leading-[1.12] tracking-tight text-white"
        >
          Empathetic designer designing for humans before interfaces.
        </motion.h1>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-[52ch] font-dm-sans text-[clamp(13px,1.15vw,17px)] leading-[1.55] text-white/90"
        >
          I'm a designer who listens beyond words and designs solutions that
          respond to unspoken needs. I'm obsessed with the layers of human
          behaviour tucked inside every product problem — the tension between
          what people say and what they feel. That said, I still love to
          design for delight, for the small unexpected smile.
        </motion.p>
      </div>

      {/* ─── Skill Tags (dashed pills) ─── */}
      {SKILL_TAGS.map((tag, i) => (
        <motion.div
          key={tag.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
          whileHover={{ scale: 1.1, rotate: 0 }}
          className="absolute cursor-default"
          style={{
            left: tag.left,
            top: tag.top,
            rotate: `${tag.rotate}deg`,
          }}
        >
          <div className="rounded-full border-2 border-dashed border-white px-3.5 py-1 shadow-[0_2px_0_rgba(0,0,0,0.08)]">
            <span className="font-oswald text-[clamp(15px,1.65vw,24px)] font-semibold tracking-wide text-white">
              {tag.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Pink star */}
      <motion.img
        src={pinkStar}
        alt=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
        className="absolute left-[6%] top-[62%] h-10 w-10"
      />

      {/* Green dot */}
      <motion.img
        src={greenDot}
        alt=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        className="absolute left-[38%] top-[69%] h-4 w-4"
      />
    </div>
  );
}

/**
 * Outer floating decorations for the Hero section.
 * Positioned absolutely relative to the card area, overflow visible.
 */
export function HeroDecorations() {
  return (
    <>
      {/* Vinyl Record + Tap & Enjoy */}
      <div className="absolute -left-[10%] bottom-[20%] z-20 pointer-events-auto">
        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="relative mb-1 ml-2"
        >
          <img src={speechBubble} alt="" className="h-10 w-28" />
          <span className="absolute inset-0 flex items-center justify-center pb-2 font-oswald text-[14px] font-semibold text-sticky">
            Tap & Enjoy Song
          </span>
        </motion.div>

        {/* Vinyl */}
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="cursor-pointer"
        >
          <motion.img
            src={vinylRecord}
            alt="Vinyl Record"
            className="h-36 w-36 animate-spin-slow"
          />
        </motion.div>
      </div>

      {/* Tools Bag (software icons) */}
      <img
          src={pinTop}
          alt=""
          className="pointer-events-none absolute -left-[10%] bottom-[8%] z-30 h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-[42%] drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
        />
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -60 }}
        animate={{ opacity: 1, x: 0, rotate: -50 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -left-[20%] -bottom-[15%] z-10 pointer-events-auto"
      >
        <img
          src={toolsBag}
          alt="Design Tools"
          className="h-72 w-72 object-contain"
        />
      </motion.div>

      {/* Sticky Note */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -22 }}
        animate={{ opacity: 1, y: 0, rotate: -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ rotate: 0 }}
        className="absolute -bottom-[12%] right-[3%] z-20 w-52 cursor-default pointer-events-auto"
      >
        <div className="relative">
          <img src={stickyNote} alt="" className="h-56 w-52" />
          <div className="absolute inset-0 flex flex-col items-start justify-start px-6 pt-5">
            <p className="text-center font-caveat text-[18px] font-bold leading-snug text-sticky-ink-red">
              Current working as a Product Designer at FREED
            </p>
            <p className="mt-2 font-caveat text-[17px] font-bold text-sticky-ink-blue">
              -Gurugram
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
