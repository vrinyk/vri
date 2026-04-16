import { useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import type { SectionName } from "./Navbar";
import { CardWrapper } from "./CardWrapper";
import { HeroSection, HeroDecorations } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";
import { AboutSection } from "./sections/AboutSection";
import { ArtCornerSection } from "./sections/ArtCornerSection";
import { ConnectSection } from "./sections/ConnectSection";
import type { ReactNode } from "react";

const SECTION_ORDER: SectionName[] = [
  "Home",
  "Work",
  "About Me",
  "Art Corner",
  "Connect",
];

interface SectionData {
  name: SectionName;
  content: ReactNode;
  decorations?: ReactNode;
  isFullscreen?: boolean;
}

const SECTIONS: SectionData[] = [
  {
    name: "Home",
    content: <HeroSection />,
    decorations: <HeroDecorations />,
  },
  { name: "Work", content: <WorkSection />, isFullscreen: true },
  { name: "About Me", content: <AboutSection /> },
  { name: "Art Corner", content: <ArtCornerSection /> },
  { name: "Connect", content: <ConnectSection /> },
];

interface CardSliderProps {
  activeSection: SectionName;
  onSectionChange: (section: SectionName) => void;
}

/**
 * Returns hardware-accelerated transform + opacity for each deck position.
 * Only uses `transform` and `opacity` — the two safest GPU-composited properties.
 */
function getDeckTransform(pos: number, cardRotation = 0) {
  if (pos === 0) {
    return {
      transform: `translateX(0px) translateY(0px) scale(1) rotate(${cardRotation}deg)`,
      opacity: 1,
    };
  }
  if (pos === 1) {
    return {
      transform: `translateX(0px) translateY(35px) scale(0.95) rotate(${cardRotation}deg)`,
      opacity: 0.7,
    };
  }
  if (pos === 2) {
    return {
      transform: `translateX(0px) translateY(65px) scale(0.9) rotate(${cardRotation}deg)`,
      opacity: 0.35,
    };
  }
  if (pos >= 3) {
    return {
      transform: `translateX(0px) translateY(80px) scale(0.85) rotate(${cardRotation}deg)`,
      opacity: 0,
    };
  }
  // Swiped away (pos < 0) — exaggerate rotation in swipe direction
  return {
    transform: `translateX(-120%) translateY(-5%) scale(0.9) rotate(${cardRotation - 15}deg)`,
    opacity: 0,
  };
}

// Per-section rotation for the active (top) card — gives each a hand-placed feel
const SECTION_ROTATIONS: Record<string, number> = {
  Home: -1.5,
  Work: -45,       // fullscreen, no card
  "About Me": 1,
  "Art Corner": -2,
  Connect: -1,
};

export function CardSlider({
  activeSection,
  onSectionChange,
}: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(
    SECTION_ORDER.indexOf(activeSection)
  );

  // Sync currentIndex when activeSection changes from nav clicks
  const activeIdx = SECTION_ORDER.indexOf(activeSection);
  if (activeIdx !== currentIndex) {
    setCurrentIndex(activeIdx);
  }

  // Drag support — only for the active card
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-400, 0, 400], [-12, 0, 12]);
  /** Clamp so elastic drag past ±400 does not extrapolate opacity below 0. */
  const dragOpacity = useTransform(dragX, (x) => {
    const t = Math.max(-400, Math.min(400, x));
    if (t <= -100) {
      const u = (t + 400) / 300;
      return 0.4 + u * 0.6;
    }
    if (t >= 100) {
      const u = (t - 100) / 300;
      return 1 - u * 0.6;
    }
    return 1;
  });

  const navigateTo = useCallback(
    (index: number) => {
      const len = SECTION_ORDER.length;
      const nextIdx = (index + len) % len;
      setCurrentIndex(nextIdx);
      onSectionChange(SECTIONS[nextIdx].name);
    },
    [onSectionChange]
  );

  const navigateNext = useCallback(() => {
    if (currentIndex < SECTION_ORDER.length - 1) {
      navigateTo(currentIndex + 1);
    }
  }, [currentIndex, navigateTo]);

  const navigatePrev = useCallback(() => {
    if (currentIndex > 0) {
      navigateTo(currentIndex - 1);
    }
  }, [currentIndex, navigateTo]);

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeThreshold = 100;
    const velocityThreshold = 400;

    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.velocity.x) > velocityThreshold
    ) {
      if (info.offset.x < 0 && currentIndex < SECTION_ORDER.length - 1) {
        navigateNext();
      } else if (info.offset.x > 0 && currentIndex > 0) {
        navigatePrev();
      } else {
        animate(dragX, 0, { type: "spring", stiffness: 500, damping: 30 });
      }
    } else {
      animate(dragX, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  // Find if Work (fullscreen) section is active
  const activeSection2 = SECTIONS[currentIndex];
  const isFullscreenActive = activeSection2?.isFullscreen && true;

  return (
    <>
      <div className="relative mx-auto mt-4 w-full max-w-[1200px] px-10">
        <div className="relative" style={{ aspectRatio: "16 / 9" }}>
          {SECTIONS.map((section, index) => {
            let pos = index - currentIndex;
            if (pos < -1) pos = -2;
            if (pos > 3) pos = 3;

            const isActive = pos === 0;
            const activeRot = SECTION_ROTATIONS[section.name] ?? 0;
            const deckStyle = getDeckTransform(pos, activeRot);

            const zIndex = pos < 0 ? 15 : pos === 0 ? 12 : 12 - pos;

            // Fullscreen sections are rendered outside the deck entirely
            if (section.isFullscreen) {
              return <div key={section.name} />;
            }

            return (
              <div key={section.name}>
                {/* Outer: deck stack transform must stay applied while dragging; inner applies drag offset. */}
                <motion.div
                  className="absolute inset-0 will-change-transform"
                  animate={{
                    transform: deckStyle.transform,
                    opacity: deckStyle.opacity,
                  }}
                  transition={{
                    transform: {
                      type: "tween",
                      duration: 0.55,
                      ease: [0.25, 1, 0.5, 1],
                    },
                    opacity: {
                      type: "tween",
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  style={{
                    zIndex,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <motion.div
                    className="h-full w-full"
                    style={
                      isActive
                        ? {
                            x: dragX,
                            rotateZ: dragRotate,
                            opacity: dragOpacity,
                          }
                        : undefined
                    }
                    {...(isActive
                      ? {
                          drag: "x" as const,
                          dragConstraints: { left: 0, right: 0 },
                          dragElastic: 0.85,
                          onDragEnd: handleDragEnd,
                          whileDrag: { cursor: "grabbing" },
                        }
                      : {})}
                  >
                    <div
                      style={{ cursor: isActive ? "grab" : "default" }}
                      className="h-full w-full"
                    >
                      <CardWrapper
                        showPin={isActive || pos === 1}
                        showBorder={pos <= 1}
                      >
                        {pos <= 2 ? section.content : null}
                      </CardWrapper>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorations — only for active non-fullscreen card */}
                {isActive && section.decorations && (
                  <motion.div
                    key={`deco-${section.name}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1.0, 0.36, 1],
                    }}
                    className="pointer-events-none absolute inset-0"
                    style={{ zIndex: 16 }}
                  >
                    {section.decorations}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Fullscreen Work overlay (outside deck to avoid transform containment) ─── */}
      <AnimatePresence>
        {isFullscreenActive && (
          <motion.div
            key="work-fullscreen"
            className="fixed inset-0 z-20 overflow-hidden bg-blue-card grid-plus pt-[88px]"
            initial={{
              transform: "scale(0.85)",
              opacity: 0.8,
              borderRadius: 12,
            }}
            animate={{
              transform: "scale(1)",
              opacity: 1,
              borderRadius: 0,
            }}
            exit={{
              transform: "scale(0.85)",
              opacity: 0,
              borderRadius: 12,
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.35, delay: 0.3 }}
            >
              {activeSection2.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-60 flex gap-5">
        <button
          onClick={navigatePrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#333] bg-white shadow-[4px_4px_0px_#333] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#333] active:translate-y-0.5 active:shadow-[0px_0px_0px_#333] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#333]">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <button
          onClick={navigateNext}
          disabled={currentIndex === SECTION_ORDER.length - 1}
          aria-label="Next"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#333] bg-white shadow-[4px_4px_0px_#333] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#333] active:translate-y-0.5 active:shadow-[0px_0px_0px_#333] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#333]">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </>
  );
}
