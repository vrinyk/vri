import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../components/Navbar";
import { CardSlider } from "../components/CardSlider";
import { isFullscreenSection } from "../components/sectionMeta";
import type { SectionName } from "../components/Navbar";
import { ResumeStamp } from "../components/ResumeStamp";
import { RESUME_FILE, RESUME_URL } from "../constants/resume";
import { useIsMobile } from "../hooks/useIsMobile";

export function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const isMobile = useIsMobile();

  // Mobile renders every section inside the card, so there is no blue
  // fullscreen overlay for the navbar to sit on.
  const isFullscreenActive = isFullscreenSection(activeSection) && !isMobile;

  return (
    <div className="grid-paper relative min-h-screen w-full overflow-x-clip">
      {/* ─── Download Resume Stamp (fixed top-right) ─── */}
      <AnimatePresence>
        {!isFullscreenActive && (
          <motion.a
            href={RESUME_URL}
            download={RESUME_FILE}
            aria-label="Download Vrinda Khandelwal's resume as a PDF"
            initial={{ opacity: 0, scale: 0.5, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 27.35 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            whileHover={{ scale: 1.06, rotate: 21 }}
            whileTap={{ scale: 0.97 }}
            className="fixed right-2 top-1 z-50 block cursor-pointer md:right-6 md:top-4"
          >
            <ResumeStamp className="block h-16 w-16 shadow-stamp md:h-32 md:w-32" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* ─── Navbar ─── */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} isOverBlue={isFullscreenActive} />

      {/* ─── Card Stack ─── */}
      <CardSlider
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* ─── Bottom Text ─── */}
      <AnimatePresence>
        {!isFullscreenActive && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="relative z-10 mt-10 px-6 pb-8 text-center font-dm-sans text-[11px] font-medium uppercase tracking-[0.22em] text-black/70 md:mt-20 md:pb-10 md:text-[13px] md:tracking-[0.28em]"
          >
            to enjoy fully view on desktop
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
