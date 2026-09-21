import { motion, AnimatePresence } from "motion/react";

const SECTIONS = ["Work", "About Me", "Archive", "Connect"] as const;
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
      className="relative z-30 flex flex-col items-center gap-3 px-5 py-5 md:grid md:grid-cols-[auto_1fr_auto] md:gap-0 md:px-10 md:py-8"
    >
      {/* Logo — clicking goes Home */}
      <motion.span
        whileHover={{ scale: 1.03 }}
        onClick={() => onNavigate("Home")}
        className={`cursor-pointer font-oswald text-[24px] font-semibold select-none transition-colors duration-300 md:text-[34px] ${
          isOverBlue ? "text-white" : "text-blue-logo"
        }`}
      >
        vrinda.work
      </motion.span>

      {/* Centered nav links */}
      <ul className={`flex w-full items-center justify-center gap-4 overflow-x-auto whitespace-nowrap font-dm-sans text-[15px] capitalize transition-colors duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:text-[17px] md:w-auto md:gap-10 md:overflow-visible md:text-[24px] ${
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

