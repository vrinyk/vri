import { motion } from "motion/react";

// Assets
import pinkStar from "../assets/images/pink-star.svg";
import greenDot from "../assets/images/green-dot.svg";
import stickyNote from "../assets/images/sticky-note.svg";
import toolsBag from "../assets/images/tools-bag.png";
import vinylRecord from "../assets/images/vinyl-record.png";
import vrindaPhoto from "../assets/images/vrinda-photo.png";
import pinTop from "../assets/images/pin-top.png";
import stampBadge from "../assets/images/stamp-badge.svg";
import speechBubble from "../assets/images/speech-bubble.svg";

const NAV_LINKS = ["Work", "About Me", "Connect", "Art Corner"];

const SKILL_TAGS = [
  { label: "explore", rotate: -16.63, left: "2%", top: "72%" },
  { label: "define", rotate: -0.1, left: "14%", top: "82%" },
  { label: "design", rotate: -0.1, left: "27%", top: "72%" },
  { label: "empathy", rotate: -18.31, left: "36%", top: "84%" },
  { label: "trust", rotate: 34.51, left: "54%", top: "76%" },
];

export default function HomePage() {
  return (
    <div className="grid-paper relative min-h-screen w-full overflow-hidden">
      {/* ─── Navbar ─── */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-30 flex items-center justify-between px-10 py-8"
      >
        <span className="font-oswald text-[34px] font-semibold text-blue-logo select-none">
          vrinda.work
        </span>

        <ul className="flex gap-10 font-dm-sans text-[24px] capitalize text-black">
          {NAV_LINKS.map((link) => (
            <motion.li
              key={link}
              whileHover={{ y: -2 }}
              className="cursor-pointer transition-colors hover:text-blue-logo"
            >
              {link}
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* ─── Main Content Area ─── */}
      <div className="relative mx-auto mt-4 max-w-360 px-10">
        {/* Back card (darker blue, tilted) */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute left-[10%] top-0 z-0 h-155 w-[78%] rounded-lg bg-blue-card-back"
        />

        {/* Main blue card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 mx-auto h-157 w-260 rounded-lg bg-blue-card"
        >
          {/* Inner border frame */}
          <div className="absolute inset-10 rounded border border-white/30" />

          {/* ─── Left: Polaroid + Photo ─── */}
          <div className="absolute left-12.5 top-12.5 h-92.5 w-100">
            {/* Polaroid frame shadow */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.5, rotate: 7.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-0 top-0 h-90 w-87.5 bg-gray-600/30"
              style={{ clipPath: "polygon(0% 15%, 12% 100%, 100% 85%, 0% 15%)" }}
            />
            {/* White polaroid background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-2 top-2.5 h-82.5 w-82.5 origin-center rotate-[7.5deg] bg-[#F1F2F2] shadow-lg"
            >
              {/* Gray inner frame */}
              <div className="absolute inset-5 bg-[#D1D3D4]" />
            </motion.div>

            {/* Vrinda's photo */}
            <motion.img
              src={vrindaPhoto}
              alt="Vrinda Khandelwal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-5 left-15 z-10 h-75 w-50 object-cover object-top"
            />
          </div>

          {/* ─── Right: Text Content ─── */}
          <div className="absolute left-125 top-12.5 w-120">
            {/* Name badge with corner squares */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative mb-6 mt-4 inline-block"
            >
              <div className="relative border border-white px-4 py-2">
                <span className="font-caveat text-[32px] font-bold text-white">
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
              className="mb-6 font-oswald text-[34px] font-semibold leading-tight text-white"
            >
              Empathetic designer designing for humans before interfaces.
            </motion.h1>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-dm-sans text-[18px] leading-relaxed text-white/90"
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
              <div className="rounded-full border-2 border-dashed border-white px-6 py-2">
                <span className="font-oswald text-[28px] font-semibold text-white">
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
            className="absolute left-[6%] top-[66%] h-12.5 w-12.5"
          />

          {/* Green dot */}
          <motion.img
            src={greenDot}
            alt=""
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
            className="absolute left-[38%] top-[73%] h-5.5 w-5.5"
          />
        </motion.div>

        {/* ─── Pin on top of card ─── */}
        <motion.img
          src={pinTop}
          alt=""
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className="absolute left-[50%] -top-7.5 z-20 h-23.5 w-25 -translate-x-1/2"
        />

        {/* ─── Download Resume Stamp ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="absolute -right-4 -top-15 z-20 cursor-pointer"
        >
          <img
            src={stampBadge}
            alt="Download Resume"
            className="h-50 w-50"
          />
        </motion.div>

        {/* ─── Vinyl Record + Tap & Enjoy ─── */}
        <div className="absolute -left-7.5 -bottom-20 z-20">
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="relative mb-1 ml-2"
          >
            <img
              src={speechBubble}
              alt=""
              className="h-11.75 w-32"
            />
            <span className="absolute inset-0 flex items-center justify-center pb-3 font-oswald text-[16px] font-semibold text-sticky">
              Tap & Enjoy Song
            </span>
          </motion.div>

          {/* Vinyl */}
          <motion.div
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover="hover"
            className="cursor-pointer"
          >
            <motion.img
              src={vinylRecord}
              alt="Vinyl Record"
              className="h-42.5 w-42.5 animate-spin-slow"
            />
          </motion.div>
        </div>

        {/* ─── Tools Bag (software icons) ─── */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute -left-15 -bottom-40 z-10"
        >
          <img
            src={toolsBag}
            alt="Design Tools"
            className="h-95 w-95 object-contain"
          />
        </motion.div>

        {/* ─── Sticky Note ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{ rotate: 0 }}
          className="absolute -bottom-30 right-[5%] z-20 w-65 cursor-default"
        >
          {/* Sticky note background */}
          <div className="relative">
            <img
              src={stickyNote}
              alt=""
              className="h-auto w-65"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-4">
              <p className="text-center font-caveat text-[22px] font-bold leading-snug text-pink-text">
                Current working as a Product Designer at FREED
              </p>
              <p className="mt-3 font-caveat text-[20px] font-bold text-pink-text">
                -Gurugram
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Bottom Text ─── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="relative z-10 mt-50 pb-8 text-center font-dm-sans text-[16px] uppercase tracking-[0.2em] text-black"
      >
        enjoy it on desktop view
      </motion.p>
    </div>
  );
}
