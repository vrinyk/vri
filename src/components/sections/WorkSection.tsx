import { motion } from "motion/react";
import { Link } from "react-router-dom";
import stampBadge from "../../assets/images/stamp-badge.svg";

const MotionLink = motion(Link);

const PROJECTS = [
  {
    year: "2025-FREED",
    title: "Redesigning onboarding journey for FREED DRP Product",
    stats: [
      { value: "40%", label: "Increase in Engagement" },
      { value: "32%", label: "Increase in Conversion" },
    ],
  },
  {
    year: "2025-FREED",
    title: "Redesigning onboarding journey for FREED DRP Product",
    stats: [
      { value: "40%", label: "Increase in Activation" },
      { value: "32%", label: "Increase in Activation" },
    ],
  },
  {
    year: "2025-FREED",
    title: "Redesigning onboarding journey for FREED DRP Product",
    stats: [
      { value: "40%", label: "Increase in Activation" },
      { value: "32%", label: "Increase in Activation" },
    ],
  },
];

export function WorkSection() {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {/* ─── Marquee ─── */}
        <div className="absolute top-[3%] left-0 w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="mx-4 font-gasoek text-[clamp(28px,4vw,56px)] uppercase text-white tracking-widest"
                style={{ WebkitTextStroke: "0.5px white", color: "transparent" }}
              >
                true design is never finished; &nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* ─── Project Cards ─── */}
        <div className="absolute top-[18%] left-[3%] right-[3%] flex gap-[3%] h-[52%]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex-1 min-w-0 rounded-2xl bg-cream p-[3%] flex flex-col"
            >
              <p className="font-dm-sans text-[clamp(12px,1.15vw,18px)] text-black/60 mb-[4%]">
                {project.year}
              </p>

              {/* Image placeholder */}
              <div className="w-full flex-1 min-h-24 rounded bg-[#D1D3D4] mb-[6%]" />

              <p className="font-dm-sans text-[clamp(13px,1.3vw,18px)] font-medium text-black leading-snug mb-[6%]">
                {project.title}
              </p>

              <div className="flex items-center justify-between mt-auto gap-2">
                <div className="flex gap-[12%]">
                  {project.stats.map((stat, j) => (
                    <div key={j}>
                      <p className="font-oswald text-[clamp(15px,1.2vw,22px)] font-semibold text-green-800">
                        {stat.value}
                      </p>
                      <p className="font-dm-sans text-[clamp(9px,0.8vw,13px)] text-black/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <MotionLink
                  to="/case-studies/freed-drp"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="whitespace-nowrap rounded-[0.5rem] bg-[#272e46] px-5 py-4 font-dm-sans text-[clamp(11px,1vw,15px)] font-medium text-white"
                >
                  View Case Study
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom: Stuff I've Worked On ─── */}
        <div className="absolute bottom-[4%] left-[3%] right-[3%] flex items-end justify-between gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-oswald text-[clamp(22px,2.8vw,42px)] font-semibold uppercase text-white mb-2"
            >
              Stuff I've Worked On
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-dm-sans text-[clamp(11px,1vw,16px)] leading-relaxed text-white/80 max-w-[70%]"
            >
              I design end-to-end web and mobile products, from research to UI
              execution across apps focused on finance, productivity, learning,
              and everyday use cases. Every project starts with curiosity and
              asking better questions. I shape ideas into tangible solutions
              through design craft. The goal is always the same design that
              drives change.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 27.35 }}
            transition={{ duration: 0.6, delay: 0.95, type: "spring" }}
            whileHover={{ scale: 1.03, rotate: 23 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 cursor-pointer"
          >
            <img
              src={stampBadge}
              alt="Download Resume"
              className="block h-32 w-32 shadow-stamp"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
