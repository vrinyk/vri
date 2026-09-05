import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ResumeStamp } from "../ResumeStamp";
import { RESUME_FILE, RESUME_URL } from "../../constants/resume";
import freedWorkCardPreview from "../../assets/case-study-freed/freed-work-card-preview.png";
import agentFlowCardPreview from "../../assets/case-study-agent-flow/agent-flow-card-preview.png";

const MotionLink = motion(Link);

type Project = {
  year: string;
  title: string;
  image?: string;
  href?: string;
  stats: { value: string; label: string }[];
};

const PROJECTS: Project[] = [
  {
    year: "2025-FREED",
    title: "Redesigning onboarding journey for FREED DRP Product",
    image: freedWorkCardPreview,
    href: "/case-studies/freed-drp",
    stats: [
      { value: "40%", label: "Increase in Engagement" },
      { value: "32%", label: "Increase in Conversion" },
    ],
  },
  {
    year: "2025-FREED",
    title: "Decluttering the Agent Flow for Spine, FREED's internal CRM",
    image: agentFlowCardPreview,
    href: "/case-studies/agent-flow",
    stats: [
      { value: "40 min", label: "Saved per scrub cycle" },
      { value: "2 tabs", label: "Down from 6+ scattered" },
    ],
  },
  {
    year: "2025-FREED",
    title: "Credit Insights: turning a credit score into a way out of debt",
    href: "/case-studies/credit-insights",
    stats: [
      { value: "0 to 1", label: "New product, 6 months" },
      { value: "3", label: "Products routed by score" },
    ],
  },
];

export function WorkSection() {
  return (
    <>
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg md:block">
        {/* ─── Marquee ─── */}
        <div className="relative left-0 w-full shrink-0 overflow-hidden pt-5 md:absolute md:top-[3%] md:pt-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="mx-3 font-gasoek text-[22px] uppercase text-white tracking-widest md:mx-4 md:text-[clamp(28px,4vw,56px)]"
                style={{ WebkitTextStroke: "0.5px white", color: "transparent" }}
              >
                true design is never finished; &nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* ─── Project Cards ─── */}
        <div className="relative mt-6 flex w-full flex-col gap-5 px-5 md:absolute md:top-[18%] md:left-[3%] md:right-[3%] md:mt-0 md:h-[52%] md:w-auto md:flex-row md:gap-[3%] md:px-0">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex min-w-0 flex-col rounded-2xl bg-cream p-5 md:flex-1 md:p-[3%]"
            >
              <p className="font-dm-sans text-[13px] text-black/60 mb-3 md:mb-[4%] md:text-[clamp(12px,1.15vw,18px)]">
                {project.year}
              </p>

              {/* Project preview image */}
              <div className="w-full aspect-[16/10] rounded bg-[#D1D3D4] mb-4 overflow-hidden md:aspect-auto md:flex-1 md:min-h-24 md:mb-[6%]">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                )}
              </div>

              <p className="font-dm-sans text-[15px] font-medium text-black leading-snug mb-4 md:mb-[6%] md:text-[clamp(13px,1.3vw,18px)]">
                {project.title}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-auto md:flex-nowrap md:gap-2">
                <div className="flex gap-6 md:gap-[12%]">
                  {project.stats.map((stat, j) => (
                    <div key={j}>
                      <p className="font-oswald text-[18px] font-semibold text-green-800 md:text-[clamp(15px,1.2vw,22px)]">
                        {stat.value}
                      </p>
                      <p className="font-dm-sans text-[11px] text-black/60 md:text-[clamp(9px,0.8vw,13px)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                {project.href ? (
                  <MotionLink
                    to={project.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap rounded-[0.5rem] bg-[#272e46] px-5 py-4 font-dm-sans text-[clamp(11px,1vw,15px)] font-medium text-white"
                  >
                    View Case Study
                  </MotionLink>
                ) : (
                  <span
                    className="whitespace-nowrap rounded-[0.5rem] bg-[#272e46]/40 px-5 py-4 font-dm-sans text-[clamp(11px,1vw,15px)] font-medium text-white/70"
                    aria-disabled
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom: Stuff I've Worked On ─── */}
        <div className="relative mt-8 flex w-full flex-col items-start gap-5 px-5 pb-8 md:absolute md:bottom-[4%] md:left-[3%] md:right-[3%] md:mt-0 md:w-auto md:flex-row md:items-end md:justify-between md:gap-4 md:px-0 md:pb-0">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-oswald text-[24px] font-semibold uppercase text-white mb-2 md:text-[clamp(22px,2.8vw,42px)]"
            >
              Stuff I've Worked On
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-dm-sans text-[13.5px] leading-relaxed text-white/80 md:text-[clamp(11px,1vw,16px)] md:max-w-[70%]"
            >
              I design end-to-end web and mobile products, from research to UI
              execution across apps focused on finance, productivity, learning,
              and everyday use cases. Every project starts with curiosity and
              asking better questions. I shape ideas into tangible solutions
              through design craft. The goal is always the same design that
              drives change.
            </motion.p>
          </div>

          <motion.a
            href={RESUME_URL}
            download={RESUME_FILE}
            aria-label="Download Vrinda Khandelwal's resume as a PDF"
            initial={{ opacity: 0, scale: 0.5, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 27.35 }}
            transition={{ duration: 0.6, delay: 0.95, type: "spring" }}
            whileHover={{ scale: 1.06, rotate: 21 }}
            whileTap={{ scale: 0.96 }}
            className="block shrink-0 cursor-pointer self-center md:self-auto"
          >
            <ResumeStamp className="block h-24 w-24 shadow-stamp md:h-32 md:w-32" />
          </motion.a>
        </div>
      </div>
    </>
  );
}
