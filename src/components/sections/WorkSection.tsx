import { motion } from "motion/react";
import { Link } from "react-router-dom";
import freedWorkCardPreview from "../../assets/case-study-freed/freed-work-card-preview.png";
import agentFlowCardPreview from "../../assets/case-study-agent-flow/agent-flow-card-preview.png";
import emiScoreCardPreview from "../../assets/case-study-emi-score/emi-work-card-preview.webp";
import lovableLogo from "../../assets/tools/lovable.webp";
import claudeLogo from "../../assets/tools/claude.webp";
import chatgptLogo from "../../assets/tools/chatgpt.webp";
import adobeCcLogo from "../../assets/tools/adobe-cc.webp";

const MotionLink = motion(Link);

type Project = {
  year: string;
  title: string;
  tags: string[];
  blurb: string;
  image?: string;
  href?: string;
  stats: { value: string; label: string; dir?: "up" | "down" }[];
};

const PROJECTS: Project[] = [
  {
    year: "2026 · FREED",
    title: "EMI Score: should I take another loan?",
    tags: ["Mobile App", "0 to 1", "Vernacular UX"],
    blurb:
      "How 22 borrower interviews turned a confusing score into one clear answer: take the loan, or don't.",
    image: emiScoreCardPreview,
    href: "/case-studies/emi-score",
    stats: [
      // Placeholder figures until post-launch numbers are in
      { value: "45%", label: "Engagement", dir: "up" },
      { value: "28%", label: "Retention", dir: "up" },
    ],
  },
  {
    year: "2025 · FREED",
    title: "Redesigning the onboarding journey for FREED DRP",
    tags: ["Mobile App", "Fintech", "UX Research"],
    blurb:
      "How 100+ recorded sales calls turned a 20-screen settlement plan into one first choice.",
    image: freedWorkCardPreview,
    href: "/case-studies/freed-drp",
    stats: [
      { value: "40%", label: "Engagement", dir: "up" },
      { value: "32%", label: "Conversion", dir: "up" },
    ],
  },
  {
    year: "2025 · FREED",
    title: "Decluttering the Agent Flow for Spine, the internal CRM",
    tags: ["SaaS", "B2B", "Internal Tool"],
    blurb:
      "How loan advisors went from 6 scattered tabs and 8 open sheets to 2 tabs built around the call.",
    image: agentFlowCardPreview,
    href: "/case-studies/agent-flow",
    stats: [
      { value: "40 min", label: "Per scrub", dir: "down" },
      { value: "2 tabs", label: "From 6+", dir: "down" },
    ],
  },
  {
    year: "2025 · FREED",
    title: "Credit Insights: a score that becomes a way out",
    tags: ["Mobile App", "0 to 1", "Fintech"],
    blurb:
      "How a credit score stopped being a number and started routing people to the right way out of debt.",
    stats: [
      { value: "0 to 1", label: "6 months" },
      { value: "3", label: "Products" },
    ],
  },
];

/** Real logos where we have them; monogram tiles for the rest. `pad` insets logos drawn on white. */
const TOOLS: { name: string; mark: string; color: string; logo?: string; pad?: boolean }[] = [
  { name: "Figma", mark: "F", color: "#F24E1E" },
  { name: "Lovable", mark: "L", color: "#FF4F8B", logo: lovableLogo, pad: true },
  { name: "Claude", mark: "C", color: "#D97757", logo: claudeLogo },
  { name: "ChatGPT", mark: "GPT", color: "#10A37F", logo: chatgptLogo },
  { name: "FontForge", mark: "Ff", color: "#4C7BD1" },
  { name: "Adobe CC", mark: "Cc", color: "#ED2224", logo: adobeCcLogo },
];

export function WorkSection() {
  return (
    <>
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg">
        {/* ─── Marquee ─── */}
        <div className="relative left-0 w-full shrink-0 overflow-hidden pt-5 md:pt-[1.5%]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="mx-3 font-gasoek text-[22px] uppercase text-white tracking-widest md:mx-4 md:text-[clamp(26px,3.4vw,48px)]"
                style={{ WebkitTextStroke: "0.5px white", color: "transparent" }}
              >
                true design is never finished; &nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* ─── Project Cards ─── */}
        {/* Horizontal scroller: ~2.5 cards in view, so the half card hints there is more */}
        <div className="hide-scrollbar relative mt-6 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 md:mt-[1%] md:mb-[1.2%] md:min-h-0 md:flex-1 md:scroll-px-[2.5vw] md:gap-[2vw] md:px-[2.5vw]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex w-[80vw] flex-none snap-start flex-col rounded-2xl bg-cream p-5 md:w-[37vw] md:p-[2.4vw]"
            >
              <p className="font-dm-sans text-[12px] uppercase tracking-[0.14em] text-black/50 mb-2.5 md:mb-[3%] md:text-[clamp(10px,0.85vw,13px)]">
                {project.year}
              </p>

              {/* Project preview image — the biggest thing on the card */}
              <div className={`w-full aspect-[16/10] rounded-lg mb-3.5 overflow-hidden ${project.image ? "" : "bg-[#D1D3D4]"} md:aspect-auto md:flex-1 md:min-h-0 md:mb-[1.2vw] md:[@media(max-height:720px)]:hidden`}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <h3 className="font-oswald text-[17px] font-semibold uppercase leading-tight text-black mb-2 md:mb-[3%] md:text-[clamp(14px,1.35vw,21px)]">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-2.5 md:mb-[3%]">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/[0.07] px-2.5 py-1 font-dm-sans text-[10px] uppercase tracking-[0.08em] text-black/55 md:text-[clamp(8px,0.65vw,11px)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-dm-sans text-[13px] leading-snug text-black/65 mb-4 md:mb-[5%] md:text-[clamp(10px,0.9vw,14px)]">
                {project.blurb}
              </p>

              <div className="flex flex-wrap items-end justify-between gap-3 mt-auto md:flex-nowrap md:gap-3">
                <div>
                  <p className="font-dm-sans text-[9.5px] uppercase tracking-[0.16em] text-black/40 mb-1 md:text-[clamp(8px,0.62vw,10.5px)]">
                    Impact
                  </p>
                  <div className="flex gap-5 md:gap-[8%]">
                    {project.stats.map((stat, j) => (
                      <div key={j}>
                        <p className="flex items-baseline gap-1 whitespace-nowrap font-inter-tight text-[26px] font-bold leading-none tracking-[-0.03em] tabular-nums text-[#272e46] md:text-[clamp(22px,2.1vw,36px)]">
                          {stat.dir && (
                            <span aria-hidden="true" className="text-[0.6em] font-semibold text-green-700">
                              {stat.dir === "up" ? "↗" : "↘"}
                            </span>
                          )}
                          {stat.value}
                        </p>
                        <p className="mt-1 whitespace-nowrap font-dm-sans text-[11px] text-black/55 md:text-[clamp(9px,0.75vw,12.5px)]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {project.href ? (
                  <MotionLink
                    to={project.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="whitespace-nowrap rounded-[0.5rem] bg-[#272e46] px-4 py-3 font-dm-sans text-[clamp(10px,0.85vw,14px)] font-medium text-white"
                  >
                    View Case Study
                  </MotionLink>
                ) : (
                  <span
                    className="whitespace-nowrap rounded-[0.5rem] bg-[#272e46]/40 px-4 py-3 font-dm-sans text-[clamp(10px,0.85vw,14px)] font-medium text-white/70"
                    aria-disabled
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom: Stuff I've Worked On + Tools ─── */}
        <div className="relative mt-8 flex w-full flex-col items-start gap-6 px-5 pb-8 md:mt-0 md:shrink-0 md:flex-row md:items-end md:justify-between md:gap-[5%] md:px-[2.5vw] md:pb-[1.5%]">
          <div className="md:max-w-[60%]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-oswald text-[24px] font-semibold uppercase leading-none text-white mb-1.5 md:text-[clamp(18px,1.9vw,30px)]"
            >
              Stuff I've Worked On
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-dm-sans text-[13.5px] leading-snug text-white/80 md:text-[clamp(10px,0.9vw,14px)]"
            >
              End-to-end web, mobile and SaaS products, mostly fintech, where a
              confusing screen costs someone real money. I listen before I draw,
              stay with engineering through build, and read the funnel after
              launch to see if it worked.
            </motion.p>
          </div>

          {/* Tools I have used */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full md:w-auto md:shrink-0"
          >
            <p className="font-dm-sans text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 md:text-[clamp(8px,0.7vw,11px)]">
              Tools I have used
            </p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3 md:grid-cols-6 md:gap-x-[clamp(10px,1.2vw,20px)]">
              {TOOLS.map(tool => (
                <div key={tool.name} className="flex flex-col items-center gap-1.5">
                  {tool.logo ? (
                    <span
                      className={`flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white md:h-[clamp(28px,2.6vw,42px)] md:w-[clamp(28px,2.6vw,42px)] ${tool.pad ? "p-[18%]" : ""}`}
                      aria-hidden="true"
                    >
                      <img src={tool.logo} alt="" className={`h-full w-full ${tool.pad ? "object-contain" : "object-cover"}`} />
                    </span>
                  ) : (
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl font-oswald text-[13px] font-semibold uppercase text-white md:h-[clamp(28px,2.6vw,42px)] md:w-[clamp(28px,2.6vw,42px)] md:text-[clamp(10px,0.95vw,15px)]"
                      style={{ backgroundColor: tool.color }}
                      aria-hidden="true"
                    >
                      {tool.mark}
                    </span>
                  )}
                  <span className="font-dm-sans text-[10px] text-white/70 md:text-[clamp(8px,0.68vw,11px)]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
