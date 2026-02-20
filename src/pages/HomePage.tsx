import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import type { SectionName } from "../components/Navbar";
import stampBadge from "../assets/images/stamp-badge.svg";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <div className="grid-paper relative min-h-screen w-full overflow-hidden">
      {/* ─── Download Resume Stamp (fixed top-right) ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="fixed right-6 top-4 z-50 cursor-pointer"
      >
        <img
          src={stampBadge}
          alt="Download Resume"
          className="h-32 w-32"
        />
      </motion.div>

      {/* ─── Navbar ─── */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* ─── Card Stack ─── */}
      <CardSlider
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* ─── Bottom Text ─── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="relative z-10 mt-24 pb-8 text-center font-dm-sans text-[16px] uppercase tracking-[0.2em] text-black"
      >
        enjoy it on desktop view
      </motion.p>
    </div>
  );
}
