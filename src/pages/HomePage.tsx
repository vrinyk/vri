import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../components/Navbar";
import { CardSlider } from "../components/CardSlider";
import type { SectionName } from "../components/Navbar";
import stampBadge from "../assets/images/stamp-badge.svg";

export function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const isWorkActive = activeSection === "Work";

  return (
    <div className="grid-paper relative min-h-screen w-full overflow-x-clip">
      {/* ─── Download Resume Stamp (fixed top-right) ─── */}
      <AnimatePresence>
        {!isWorkActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 27.35 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            className="fixed right-6 top-4 z-50 cursor-pointer hover:scale-[1.01] hover:transition-all hover:duration-200 hover:ease-linear hover:-rotate-3"
          >
            <img
              src={stampBadge}
              alt="Download Resume"
              className="block h-32 w-32 shadow-stamp"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Navbar ─── */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} isOverBlue={isWorkActive} />

      {/* ─── Card Stack ─── */}
      <CardSlider
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* ─── Bottom Text ─── */}
      <AnimatePresence>
        {!isWorkActive && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="relative z-10 mt-20 pb-10 text-center font-dm-sans text-[13px] font-medium uppercase tracking-[0.28em] text-black/80"
          >
            enjoy it on desktop view
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
