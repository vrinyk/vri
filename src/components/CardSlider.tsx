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
import { useIsMobile } from "../hooks/useIsMobile";
import { HeroSection, HeroDecorations } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";
import { AboutSection } from "./sections/AboutSection";
import { ArtCornerSection } from "./sections/ArtCornerSection";
import { ConnectSection } from "./sections/ConnectSection";
import { EmptySection } from "./sections/EmptySection";
import type { ReactNode } from "react";

const SECTION_ORDER: SectionName[] = [
  "Home",
  "Work",
  "About Me",
  "Art Corner",
  "Connect",
  "Blank",
];

/** Last section users can navigate to (Blank is deck padding only). */
const LAST_NAVIGABLE_INDEX = SECTION_ORDER.indexOf("Connect");

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
  { name: "Art Corner", content: <ArtCornerSection />, isFullscreen: true },
  { name: "Connect", content: <ConnectSection /> },
  { name: "Blank", content: <EmptySection /> },
];



interface CardSliderProps {
  activeSection: SectionName;
  onSectionChange: (section: SectionName) => void;
}

/**
 * Returns hardware-accelerated transform + opacity for each deck position.
 * Only uses `transform` and `opacity` — the two safest GPU-composited properties.
 */
function getDeckTransform(pos: number) {
  if (pos === 0) {
    // Active card lands horizontal (0deg) so siblings rotate up into alignment.
    return {
      transform: `translateX(0px) translateY(0px) scale(1) rotate(0deg)`,
      opacity: 1,
    };
  }
  if (pos === 1) {
    return {
      transform: `translateX(8px) translateY(20px) scale(0.97) rotate(-6deg)`,
      opacity: 1,
    };
  }
  if (pos === 2) {
    return {
      transform: `translateX(14px) translateY(34px) scale(0.93) rotate(-9deg)`,
      opacity: 1,
    };
  }
  if (pos >= 3) {
    return {
      transform: `translateX(18px) translateY(44px) scale(0.9) rotate(-11deg)`,
      opacity: 0,
    };
  }
  // Swiped away (pos < 0) — exaggerate rotation in swipe direction
  return {
    transform: `translateX(-120%) translateY(-5%) scale(0.9) rotate(-15deg)`,
    opacity: 0,
  };
}

/** Prev/next control for mobile, replacing the swipeable deck. */
function MobileNav({
  currentIndex,
  lastIndex,
  onPrev,
  onNext,
}: {
  currentIndex: number;
  lastIndex: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#333] bg-white shadow-[3px_3px_0px_#333] transition-transform active:translate-y-0.5 disabled:opacity-30 disabled:pointer-events-none";
  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      <button onClick={onPrev} disabled={currentIndex === 0} aria-label="Previous section" className={btn}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#333]">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      <span className="font-dm-sans text-[13px] tabular-nums text-black/60">
        {currentIndex + 1} / {lastIndex + 1}
      </span>
      <button onClick={onNext} disabled={currentIndex >= lastIndex} aria-label="Next section" className={btn}>
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#333]">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </div>
  );
}

export function CardSlider({
  activeSection,
  onSectionChange,
}: CardSliderProps) {
  const isMobile = useIsMobile();
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
    if (currentIndex < LAST_NAVIGABLE_INDEX) {
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
      if (info.offset.x < 0 && currentIndex < LAST_NAVIGABLE_INDEX) {
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

  // On a phone the deck metaphor does not work: siblings are stacked with
  // absolute positioning and rotated, and a 16:9 card is ~210px tall. Mobile
  // renders the active section on its own, in normal flow, and navigates with
  // the navbar and arrows instead of the stack.
  if (isMobile) {
    return (
      <>
        <div className="mx-auto mt-2 w-full max-w-[1100px] px-4">
          <CardWrapper showPin showBorder isActive>
            {activeSection2.content}
          </CardWrapper>
        </div>
        <MobileNav
          currentIndex={currentIndex}
          lastIndex={LAST_NAVIGABLE_INDEX}
          onPrev={navigatePrev}
          onNext={navigateNext}
        />
      </>
    );
  }

  return (
    <>
      <div className="relative mx-auto mt-4 w-full max-w-[1100px] px-10">
        <div className="relative" style={{ aspectRatio: "16 / 9" }}>
          {SECTIONS.map((section, index) => {
            let pos = index - currentIndex;
            if (pos < -1) pos = -2;
            if (pos > 3) pos = 3;

            const isActive = pos === 0;
            const deckStyle = getDeckTransform(pos);

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
                        showPin={isActive}
                        showBorder={isActive}
                        isActive={isActive}
                      >
                        {isActive ? section.content : null}
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
            key={`${activeSection2.name}-fullscreen`}
            className="fixed inset-0 z-20 overflow-hidden bg-[#47578d] grid-plus pt-[88px]"
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

      {/* Navigation Arrows — split to left/right edges so they don't overlap card content */}
      <button
        onClick={navigatePrev}
        disabled={currentIndex === 0}
        aria-label="Previous"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-60 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#333] bg-white shadow-[4px_4px_0px_#333] transition-all hover:-translate-y-[calc(50%+2px)] hover:shadow-[6px_6px_0px_#333] active:-translate-y-[calc(50%-2px)] active:shadow-[0px_0px_0px_#333] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#333]">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>
      <button
        onClick={navigateNext}
        disabled={currentIndex >= LAST_NAVIGABLE_INDEX}
        aria-label="Next"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-60 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#333] bg-white shadow-[4px_4px_0px_#333] transition-all hover:-translate-y-[calc(50%+2px)] hover:shadow-[6px_6px_0px_#333] active:-translate-y-[calc(50%-2px)] active:shadow-[0px_0px_0px_#333] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#333]">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </>
  );
}
