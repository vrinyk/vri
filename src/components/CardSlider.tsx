import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import type { SectionName } from "./Navbar";
import CardWrapper from "./CardWrapper";
import HeroSection from "./sections/HeroSection";
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
  component: ReactNode;
}

const SECTIONS: SectionData[] = [
  { name: "Home", component: <HeroSection /> },
  { name: "Work", component: <WorkSection /> },
  { name: "About Me", component: <AboutSection /> },
  { name: "Art Corner", component: <ArtCornerSection /> },
  { name: "Connect", component: <ConnectSection /> },
];

interface CardSliderProps {
  activeSection: SectionName;
  onSectionChange: (section: SectionName) => void;
}

/**
 * Card stack — all sections are stacked on top of each other.
 * Active section is on top. Clicking nav or dragging swipes the top card off,
 * revealing the next section beneath.
 *
 * The stack maintains a visual order separate from the section order:
 * the "stack" is an array of section indices where the last item is on top.
 */
export default function CardSlider({
  activeSection,
  onSectionChange,
}: CardSliderProps) {
  // Visual stack order: array of section indices, last = top of stack
  const [stack, setStack] = useState<number[]>(() => {
    // Initialize: active on top, rest below
    const activeIdx = SECTION_ORDER.indexOf(activeSection);
    const rest = SECTIONS.map((_, i) => i).filter((i) => i !== activeIdx);
    return [...rest, activeIdx];
  });

  const [swipingCard, setSwipingCard] = useState<number | null>(null);
  const pendingSection = useRef<SectionName | null>(null);

  // When activeSection changes from parent (nav click),
  // animate the current top card off then restack
  useEffect(() => {
    const currentTopIdx = stack[stack.length - 1];
    const newIdx = SECTION_ORDER.indexOf(activeSection);

    if (currentTopIdx === newIdx) return; // already on top

    // Store the pending target and trigger swipe-off of top card
    pendingSection.current = activeSection;
    setSwipingCard(currentTopIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const handleSwipeComplete = (swipedIdx: number) => {
    setSwipingCard(null);

    if (pendingSection.current) {
      // Nav-triggered: put the target section on top
      const targetIdx = SECTION_ORDER.indexOf(pendingSection.current);
      pendingSection.current = null;
      setStack((prev) => {
        const without = prev.filter((i) => i !== targetIdx);
        return [...without, targetIdx];
      });
    } else {
      // Drag-triggered: move swiped card to bottom of stack
      setStack((prev) => {
        const without = prev.filter((i) => i !== swipedIdx);
        const newTop = without[without.length - 1];
        onSectionChange(SECTIONS[newTop].name);
        return [swipedIdx, ...without];
      });
    }
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-[1200px] px-10">
      <div className="relative" style={{ aspectRatio: "16 / 9" }}>
        {stack.map((sectionIdx, stackPos) => {
          const isTop = stackPos === stack.length - 1;
          const distFromTop = stack.length - 1 - stackPos;
          const maxVisible = 4;

          // Visual properties based on stack position
          const visible = distFromTop <= maxVisible;
          const cardScale = visible ? 1 - distFromTop * 0.035 : 0.85;
          const cardY = visible ? distFromTop * 10 : 0;
          const cardOpacity = visible
            ? Math.max(0.15, 1 - distFromTop * 0.2)
            : 0;

          return (
            <StackCard
              key={SECTIONS[sectionIdx].name}
              isTop={isTop}
              isSwiping={swipingCard === sectionIdx}
              stackScale={cardScale}
              stackY={cardY}
              stackOpacity={cardOpacity}
              zIndex={stackPos + 1}
              onSwipeComplete={() => handleSwipeComplete(sectionIdx)}
            >
              <CardWrapper>
                {SECTIONS[sectionIdx].component}
              </CardWrapper>
            </StackCard>
          );
        })}
      </div>
    </div>
  );
}

// ─── Individual Stack Card ───

interface StackCardProps {
  children: ReactNode;
  isTop: boolean;
  isSwiping: boolean;
  stackScale: number;
  stackY: number;
  stackOpacity: number;
  zIndex: number;
  onSwipeComplete: () => void;
}

function StackCard({
  children,
  isTop,
  isSwiping,
  stackScale,
  stackY,
  stackOpacity,
  zIndex,
  onSwipeComplete,
}: StackCardProps) {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 0, 400], [-18, 0, 18]);
  const dragOpacity = useTransform(
    x,
    [-400, -150, 0, 150, 400],
    [0.3, 1, 1, 1, 0.3]
  );

  // When this card is being swiped off via nav click
  useEffect(() => {
    if (isSwiping) {
      // Animate the card off to the right with rotation
      animate(x, 1300, {
        duration: 0.45,
        ease: [0.32, 0.72, 0, 1],
        onComplete: () => {
          x.set(0);
          onSwipeComplete();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSwiping]);

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
      const direction = info.offset.x > 0 ? 1 : -1;
      animate(x, direction * 1300, {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
        onComplete: () => {
          x.set(0);
          onSwipeComplete();
        },
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 500, damping: 30 });
    }
  };

  const canDrag = isTop && !isSwiping;

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        zIndex,
        x: isTop ? x : 0,
        rotateZ: isTop ? rotateZ : 0,
        cursor: canDrag ? "grab" : "default",
      }}
      animate={{
        scale: stackScale,
        y: stackY,
        opacity: stackOpacity,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 28,
      }}
      drag={canDrag ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={canDrag ? handleDragEnd : undefined}
      whileDrag={{ cursor: "grabbing" }}
    >
      <motion.div
        style={{
          opacity: isTop ? dragOpacity : 1,
        }}
        className="h-full w-full pointer-events-auto"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
