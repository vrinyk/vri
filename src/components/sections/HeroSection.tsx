import { motion } from "motion/react";

// Assets
import pinkStar from "../../assets/images/pink-star.svg";
import greenDot from "../../assets/images/green-dot.svg";
import stickyNote from "../../assets/images/sticky-note.svg";
import toolsBag from "../../assets/images/tools-bag.png";
import vinylRecord from "../../assets/images/vinyl-record.png";
import vrindaPhoto from "../../assets/images/vrinda-photo.png";
import speechBubble from "../../assets/images/speech-bubble.svg";

const SKILL_TAGS = [
  { label: "explore", rotate: -16.63, left: "4%", top: "68%" },
  { label: "define", rotate: -0.1, left: "18%", top: "78%" },
  { label: "design", rotate: -0.1, left: "32%", top: "68%" },
  { label: "empathy", rotate: -18.31, left: "40%", top: "80%" },
  { label: "trust", rotate: 34.51, left: "56%", top: "72%" },
];

export default function HeroSection() {
  return (
    <>
      {/* ─── Card inner content ─── */}
      <div className="relative h-full w-full p-[6%]">
        {/* ─── Left: Polaroid + Photo ─── */}
        <div className="absolute left-[4%] top-[8%] h-[65%] w-[38%]">
          {/* White polaroid background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-[2%] top-[3%] h-[85%] w-[75%] origin-center rotate-[7.5deg] bg-[#F1F2F2] shadow-lg"
          >
            {/* Gray inner frame */}
            <div className="absolute inset-[6%] bg-[#D1D3D4]" />
          </motion.div>

          {/* Vrinda's photo */}
          <motion.img
            src={vrindaPhoto}
            alt="Vrinda Khandelwal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-[5%] left-[15%] z-10 h-[80%] w-auto object-cover object-top"
          />
        </div>

        {/* ─── Right: Text Content ─── */}
        <div className="absolute left-[46%] top-[8%] w-[48%]">
          {/* Name badge with corner squares */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative mb-4 mt-2 inline-block"
          >
            <div className="relative border border-white px-4 py-2">
              <span className="font-caveat text-[clamp(20px,2vw,32px)] font-bold text-white">
                Hi I'm vrinda Khandelwal
              </span>
            </div>
            {/* Corner squares */}
            <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white" />
            <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 font-oswald text-[clamp(22px,2.4vw,34px)] font-semibold leading-tight text-white"
          >
            Empathetic designer designing for humans before interfaces.
          </motion.h1>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-dm-sans text-[clamp(13px,1.2vw,18px)] leading-relaxed text-white/90"
          >
            I'm a designer who listens beyond words designs solutions that
            respond to their unspoken needs. I'm obsessed with the layers of
            human behaviour tucked inside every product problem. The tension
            between what people say and what they feel. That said, I still
            love to design for delight. For the small unexpected smile.
          </motion.p>
        </div>

        {/* ─── Skill Tags (dashed pills) ─── */}
        {SKILL_TAGS.map((tag, i) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="absolute cursor-default"
            style={{
              left: tag.left,
              top: tag.top,
              rotate: `${tag.rotate}deg`,
            }}
          >
            <div className="rounded-full border-2 border-dashed border-white px-4 py-1.5">
              <span className="font-oswald text-[clamp(16px,1.8vw,28px)] font-semibold text-white">
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
          transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
          className="absolute left-[6%] top-[62%] h-10 w-10"
        />

        {/* Green dot */}
        <motion.img
          src={greenDot}
          alt=""
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
          className="absolute left-[38%] top-[69%] h-4 w-4"
        />
      </div>

      {/* ─── Outer decorations (positioned relative to CardWrapper) ─── */}
      {/* Vinyl Record + Tap & Enjoy */}
      <div className="absolute -left-[4%] bottom-[5%] z-20">
        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
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
          transition={{ duration: 0.6, delay: 1.0 }}
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
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -left-[6%] -bottom-[15%] z-10"
      >
        <img
          src={toolsBag}
          alt="Design Tools"
          className="h-72 w-72 object-contain"
        />
      </motion.div>

      {/* Sticky Note */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ rotate: 0 }}
        className="absolute -bottom-[12%] right-[3%] z-20 w-52 cursor-default"
      >
        <div className="relative">
          <img src={stickyNote} alt="" className="h-auto w-52" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-3">
            <p className="text-center font-caveat text-[18px] font-bold leading-snug text-pink-text">
              Current working as a Product Designer at FREED
            </p>
            <p className="mt-2 font-caveat text-[16px] font-bold text-pink-text">
              -Gurugram
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
