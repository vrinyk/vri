import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useIsMobile } from "../../hooks/useIsMobile";

// Assets
import pinkStar from "../../assets/images/pink-star.svg";
import greenDot from "../../assets/images/green-dot.svg";
import stickyNote from "../../assets/images/sticky-note.svg";
import toolsBag from "../../assets/images/tools-bag.png";
import vinylRecord from "../../assets/images/vinyl-record.png";
import vrindaPhoto from "../../assets/images/vrinda-photo.png";
import vrindaHeadshot from "../../assets/images/vrinda-headshot.jpg";
import speechBubble from "../../assets/images/speech-bubble.svg";
import pinTop from "../../assets/images/pin-top.png";

const SKILL_TAGS = [
  { label: "explore", rotate: -15, left: "8%", top: "80%" },
  { label: "design", rotate: -1, left: "25%", top: "75%" },
  { label: "define", rotate: -2, left: "18%", top: "85%" },
  { label: "empathy", rotate: -17, left: "31%", top: "84%" },
  { label: "trust", rotate: 20, left: "45%", top: "82%" },
];

/**
 * Inner card content for the Hero/Home section.
 */
export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex h-full w-full flex-col p-6 md:block md:p-[6%]">
      {/* ─── Left: Polaroid + Photo ─── */}
      <div className="relative mx-auto h-52 w-full max-w-[240px] shrink-0 md:absolute md:left-[4%] md:top-[8%] md:mx-0 md:h-[65%] md:w-[38%] md:max-w-none">
        {/* White polaroid background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
          className="absolute left-[2%] top-[3%] h-[85%] w-[75%] origin-center -rotate-[7.5deg] bg-[#F1F2F2]"
        >
          {/* Polaroid window — actual photo */}
          <div className="absolute inset-[6%] overflow-hidden bg-[#C8CACB]">
            {/* The window is close to square, the photo is 4:5, so the crop is
                biased upward to keep her face off the bottom edge. */}
            <img
              src={vrindaHeadshot}
              alt="Vrinda Khandelwal"
              className="h-full w-full object-cover object-[50%_22%]"
            />
          </div>
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
      <div className="relative mt-6 w-full md:absolute md:left-[46%] md:top-[8%] md:mt-0 md:w-[46%]">
        {/* Name badge — dashed frame + crop marks (screenshot) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative mb-4 mt-0 inline-block md:mb-5 md:mt-2"
        >
          <div className="relative border-2 border-dashed border-white px-4 py-2.5">
            <span className="font-caveat text-[17px] font-bold text-white md:text-[clamp(20px,2vw,32px)]">
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
          className="mb-4 font-oswald text-[24px] font-semibold leading-[1.14] tracking-tight text-white md:mb-5 md:text-[clamp(26px,2.9vw,40px)]"
        >
          Every screen holds a feeling. I design for that, not the pixels.
        </motion.h1>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-[52ch] font-dm-sans text-[14.5px] leading-[1.55] text-white/90 md:text-[17px]"
        >
          I'm a Product Designer who asks “why?” a little too much. Why does
          this exist? Why is this confusing? Why are people dropping off here?
          I like the messy part of product problems, and turning that
          complexity into something that feels obvious.
        </motion.p>
      </div>

      {/* ─── Skill Tags ─── scattered on desktop, a wrapped row on mobile */}
      <div className="mt-7 flex flex-wrap justify-center gap-2 md:mt-0 md:block">
        {SKILL_TAGS.map((tag, i) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="cursor-default md:absolute"
            style={
              isMobile
                ? undefined
                : { left: tag.left, top: tag.top, rotate: `${tag.rotate}deg` }
            }
          >
            <div className="rounded-full border-2 border-dashed border-white/95 px-3 py-[2px] backdrop-blur-[1px] md:px-4 md:py-[3px]">
              <span className="font-oswald text-[14px] font-semibold tracking-wide text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)] md:text-[clamp(15px,1.65vw,24px)]">
                {tag.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loose decorations only make sense in the desktop collage */}
      <motion.img
        src={pinkStar}
        alt=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
        className="absolute left-[8%] top-[72%] hidden h-10 w-10 md:block"
      />

      <motion.img
        src={greenDot}
        alt=""
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
        className="absolute left-[38%] top-[76%] hidden h-5 w-5 md:block"
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
      <VinylPlayer />

      {/* Tools Bag (software icons) */}
      <img
          src={pinTop}
          alt=""
          className="pointer-events-none absolute -left-[10%] bottom-[8%] z-30 h-18 w-18 -translate-x-1/2 -translate-y-[42%] drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]"
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
        className="absolute -bottom-[12%] right-[3%] z-20 w-52 cursor-default pointer-events-auto"
      >
        <div className="relative">
          <img src={stickyNote} alt="" className="h-56 w-52" />
          <div className="absolute inset-0 flex flex-col items-start justify-start px-6 pt-5">
            <p className="text-left font-caveat text-[20px] font-bold leading-snug text-sticky-ink-red">
              Current working as a Product Designer at FREED
            </p>
            <p className="mt-2 font-caveat text-[19px] font-bold text-sticky-ink-blue">
              -Gurugram
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/**
 * Interactive vinyl record. Click the vinyl or speech bubble to toggle the
 * "weekend song" — vinyl spins continuously while playing and freezes on pause.
 *
 * Drop an MP3 at `public/audio/weekend.mp3` to hear it.
 */
function VinylPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/weekend.webm");
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.7;
    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {
        // Autoplay/format failure — keep state in sync
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  };

  return (
    <div className="absolute -left-[15%] bottom-[32%] z-20 pointer-events-auto">
      {/* Speech bubble */}
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="relative mb-1 ml-2 block cursor-pointer border-0 bg-transparent p-0"
        aria-label={isPlaying ? "Pause song" : "Play song"}
      >
        <img src={speechBubble} alt="" className="h-10 w-28" />
        <span className="absolute inset-0 flex items-center justify-center pb-2 font-oswald text-[14px] font-semibold text-sticky">
          {isPlaying ? "Now Playing…" : "Tap & Enjoy Song"}
        </span>
      </motion.button>

      {/* Vinyl */}
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="block cursor-pointer border-0 bg-transparent p-0"
        aria-label={isPlaying ? "Pause song" : "Play song"}
      >
        <motion.img
          src={vinylRecord}
          alt="Vinyl Record"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={
            isPlaying
              ? { repeat: Infinity, ease: "linear", duration: 4 }
              : { duration: 0.4, ease: "easeOut" }
          }
          className="h-36 w-36"
        />
      </motion.button>
    </div>
  );
}
