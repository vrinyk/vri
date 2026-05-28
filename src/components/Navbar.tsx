import { motion, AnimatePresence } from "motion/react";

const SECTIONS = ["Work", "About Me", "Art Corner", "Connect"] as const;
export type SectionName = (typeof SECTIONS)[number] | "Home" | "Blank";

interface NavbarProps {
  activeSection: SectionName;
  onNavigate: (section: SectionName) => void;
  isOverBlue?: boolean;
}

export function Navbar({ activeSection, onNavigate, isOverBlue = false }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-30 grid grid-cols-[auto_1fr_auto] items-center px-10 py-8"
    >
      {/* Logo — clicking goes Home */}
      <motion.span
        whileHover={{ scale: 1.03 }}
        onClick={() => onNavigate("Home")}
        className={`cursor-pointer font-oswald text-[34px] font-semibold select-none transition-colors duration-300 ${
          isOverBlue ? "text-white" : "text-blue-logo"
        }`}
      >
        vrinda.work
      </motion.span>

      {/* Centered nav links */}
      <ul className={`flex items-center justify-center gap-10 font-dm-sans text-[24px] capitalize transition-colors duration-300 ${
        isOverBlue ? "text-white/80" : "text-black"
      }`}>
        {SECTIONS.map((link) => (
          <motion.li
            key={link}
            whileHover={{ y: -2 }}
            onClick={() => onNavigate(link)}
            className={`cursor-pointer transition-colors ${
              isOverBlue
                ? `hover:text-white ${activeSection === link ? "text-white font-semibold" : ""}`
                : `hover:text-blue-logo ${activeSection === link ? "text-blue-logo font-semibold" : ""}`
            }`}
          >
            {link}
            <AnimatePresence>
              {activeSection === link && (
                <motion.div
                  layoutId="nav-underline"
                  className={`mt-1 h-0.5 w-full rounded-full ${isOverBlue ? "bg-white" : "bg-blue-logo"}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>

      {/* Empty right column — stamp badge is outside nav */}
      <div />
    </motion.nav>
  );
}

