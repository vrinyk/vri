import { motion } from "motion/react";

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
                className="mx-4 font-oswald text-[clamp(28px,4vw,56px)] font-semibold uppercase text-white"
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
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
              className="flex-1 min-w-0 rounded-lg bg-cream p-[5%] flex flex-col"
            >
              <p className="font-dm-sans text-[clamp(11px,1vw,16px)] text-black/60 mb-[4%]">
                {project.year}
              </p>

              {/* Image placeholder */}
              <div className="w-full flex-1 min-h-0 rounded bg-[#D1D3D4] mb-[6%]" />

              <p className="font-dm-sans text-[clamp(11px,1.1vw,16px)] font-medium text-black leading-snug mb-[6%]">
                {project.title}
              </p>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex gap-[12%]">
                  {project.stats.map((stat, j) => (
                    <div key={j}>
                      <p className="font-oswald text-[clamp(16px,1.6vw,28px)] font-semibold text-blue-card">
                        {stat.value}
                      </p>
                      <p className="font-dm-sans text-[clamp(8px,0.7vw,12px)] text-black/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md bg-blue-card px-4 py-2 font-dm-sans text-[clamp(10px,0.9vw,14px)] font-medium text-white"
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom: Stuff I've Worked On ─── */}
        <div className="absolute bottom-[4%] left-[3%] right-[3%]">
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
      </div>
    </>
  );
}
