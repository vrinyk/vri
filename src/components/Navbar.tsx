import { motion } from "motion/react";

const SECTIONS = ["Work", "About Me", "Art Corner", "Connect"] as const;
export type SectionName = (typeof SECTIONS)[number] | "Home";

interface NavbarProps {
  activeSection: SectionName;
  onNavigate: (section: SectionName) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-30 flex items-center justify-between px-10 py-8"
    >
      {/* Logo — clicking goes Home */}
      <motion.span
        whileHover={{ scale: 1.03 }}
        onClick={() => onNavigate("Home")}
        className="cursor-pointer font-oswald text-[34px] font-semibold text-blue-logo select-none"
      >
        vrinda.work
      </motion.span>

      <div className="flex items-center gap-10">
        <ul className="flex gap-10 font-dm-sans text-[24px] capitalize text-black">
          {SECTIONS.map((link) => (
            <motion.li
              key={link}
              whileHover={{ y: -2 }}
              onClick={() => onNavigate(link)}
              className={`cursor-pointer transition-colors hover:text-blue-logo ${
                activeSection === link
                  ? "text-blue-logo font-semibold"
                  : ""
              }`}
            >
              {link}
              {activeSection === link && (
                <motion.div
                  layoutId="nav-underline"
                  className="mt-1 h-0.5 w-full rounded-full bg-blue-logo"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

    </motion.nav>
  );
}
