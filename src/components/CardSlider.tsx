import { useState, useCallback, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import type { SectionName } from "./Navbar";
import CardWrapper from "./CardWrapper";
import HeroSection, { HeroDecorations } from "./sections/HeroSection";
import WorkSection from "./sections/WorkSection";
import AboutSection from "./sections/AboutSection";
import ArtCornerSection from "./sections/ArtCornerSection";
import ConnectSection from "./sections/ConnectSection";

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
}

const SECTIONS: SectionData[] = [
  {
    name: "Home",
    content: <HeroSection />,
    decorations: <HeroDecorations />,
  },
  { name: "Work", content: <WorkSection /> },
  { name: "About Me", content: <AboutSection /> },
  { name: "Art Corner", content: <ArtCornerSection /> },
  { name: "Connect", content: <ConnectSection /> },
];

interface CardSliderProps {
  activeSection: SectionName;
  onSectionChange: (section: SectionName) => void;
}

/** Compute shortest-path direction between two section indices. */
function getDirection(fromIdx: number, toIdx: number): number {
  if (fromIdx === toIdx) return 1;
  const len = SECTION_ORDER.length;
  const fwd = (toIdx - fromIdx + len) % len;
  const bwd = (fromIdx - toIdx + len) % len;
  return fwd <= bwd ? 1 : -1;
}

// Number of visible back-cards in the deck
const BACK_CARDS = 3;

// Card animation variants
const cardVariants = {
  enter: (direction: number) => ({
    scale: 0.97,
    y: 5,
    opacity: 0.7,
    x: direction > 0 ? 20 : -20,
  }),
  center: {
    scale: 1,
    y: 0,
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1300 : 1300,
    rotateZ: direction > 0 ? -15 : 15,
    opacity: 0,
  }),
};

/**
 * Card deck — static decorative back-cards are always visible behind,
 * creating the stacked deck look. Only the top card (the active section)
 * animates on/off. When the top card peels away, the new section content
 * appears on a fresh top card that pops up from the deck.
 */
export default function CardSlider({
  activeSection,
  onSectionChange,
}: CardSliderProps) {
  const [direction, setDirection] = useState(1);
  const [prevIdx, setPrevIdx] = useState(SECTION_ORDER.indexOf(activeSection));

  const activeIdx = SECTION_ORDER.indexOf(activeSection);
  const section = SECTIONS[activeIdx];

  // Compute direction when activeSection changes from nav
  // We derive it during render without useEffect by comparing with tracked prevIdx
  let currentDirection = direction;
  if (activeIdx !== prevIdx) {
    currentDirection = getDirection(prevIdx, activeIdx);
    // Schedule state updates for next render (won't cause cascading renders
    // since we're using the derived value immediately)
    // Using functional updates to batch
    queueMicrotask(() => {
      setDirection(currentDirection);
      setPrevIdx(activeIdx);
    });
  }

  // Drag support
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 0, 400], [-12, 0, 12]);
  const dragOpacity = useTransform(
    x,
    [-400, -100, 0, 100, 400],
    [0.4, 1, 1, 1, 0.4]
  );
  const [isDragging, setIsDragging] = useState(false);

  const navigateByOffset = useCallback(
    (offset: number) => {
      const currentIdx = SECTION_ORDER.indexOf(activeSection);
      const len = SECTION_ORDER.length;
      const nextIdx = (currentIdx + offset + len) % len;
      const dir = offset > 0 ? 1 : -1;
      setDirection(dir);
      setPrevIdx(nextIdx);
      onSectionChange(SECTIONS[nextIdx].name);
    },
    [activeSection, onSectionChange]
  );

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    setIsDragging(false);
    const swipeThreshold = 100;
    const velocityThreshold = 400;

    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.velocity.x) > velocityThreshold
    ) {
      const swipeDir = info.offset.x > 0 ? -1 : 1;
      navigateByOffset(swipeDir);
    } else {
      animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-[1200px] px-10">
      <div className="relative" style={{ aspectRatio: "16 / 9" }}>
        {/* ─── Static back-cards (the deck behind) ─── */}
        {Array.from({ length: BACK_CARDS }).map((_, i) => {
          const depth = BACK_CARDS - i; // 3, 2, 1 (3 = furthest back)
          return (
            <div
              key={`back-${i}`}
              className="absolute inset-0"
              style={{
                zIndex: i + 1,
                transform: `scale(${1 - depth * 0.03}) translateY(${depth * 10}px)`,
                opacity: Math.max(0.2, 1 - depth * 0.22),
              }}
            >
              <CardWrapper showPin={false} showBorder={false}>
                {null}
              </CardWrapper>
            </div>
          );
        })}

        {/* ─── Active top card with content ─── */}
        <AnimatePresence mode="wait" custom={currentDirection}>
          <motion.div
            key={section.name}
            custom={currentDirection}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "tween",
              duration: 0.45,
              ease: [0.22, 1.0, 0.36, 1],
            }}
            className="absolute inset-0"
            style={{
              zIndex: BACK_CARDS + 1,
              cursor: "grab",
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.85}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
          >
            <motion.div
              style={{
                opacity: isDragging ? dragOpacity : 1,
                x: isDragging ? x : 0,
                rotateZ: isDragging ? rotateZ : 0,
              }}
              className="h-full w-full"
            >
              <CardWrapper>{section.content}</CardWrapper>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ─── Outer decorations layer ─── */}
        <AnimatePresence mode="wait">
          {section.decorations && (
            <motion.div
              key={`deco-${section.name}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1.0, 0.36, 1],
              }}
              className="pointer-events-none absolute inset-0"
              style={{ zIndex: BACK_CARDS + 2 }}
            >
              {section.decorations}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
