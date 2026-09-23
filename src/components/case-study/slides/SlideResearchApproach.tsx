import { motion } from "motion/react";
import { SlideHead, SlideShell } from "../Rationale";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const PAPER = "#fbfaf7";
const ACCENT = "#265d73";
const ACCENT_BG = "#dbeef8";
const WARN = "#b0442c";

/**
 * PLACEHOLDER FIGURES — shaped to match the real funnel, not measured. Replace
 * with the MoEngage numbers before this is shown to anyone.
 */
const STAGES = [
  { label: "Landed", pct: 100 },
  { label: "Started sign up", pct: 62 },
  { label: "Finished sign up", pct: 44 },
  { label: "Saw their plan", pct: 27 },
  { label: "Paid", pct: 8 },
];

/* ── funnel geometry ── */
const W = 900;
const H = 300;
const CY = 108;
const MAXH = 180;
const X = [10, 232, 452, 672, 862];

const half = (pct: number) => (pct / 100) * (MAXH / 2);

/** The funnel as one tapering shape, so the leak is a thing you see, not read. */
function Funnel() {
  const top = X.map((x, i) => `${x},${CY - half(STAGES[i].pct)}`);
  const bottom = [...X]
    .map((x, i) => `${x},${CY + half(STAGES[i].pct)}`)
    .reverse();
  const shape = `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img"
      aria-label="Acquisition funnel narrowing from 100% landed to 8% paid, with the largest usable drop between seeing the plan and paying.">
      <defs>
        <linearGradient id="fn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cfe6f2" />
          <stop offset="60%" stopColor="#7fb3c9" />
          <stop offset="100%" stopColor={ACCENT} />
        </linearGradient>
      </defs>

      <path d={shape} fill="url(#fn)" />

      {STAGES.map((s, i) => {
        const x = X[i];
        const anchor = i === 0 ? "start" : i === STAGES.length - 1 ? "end" : "middle";
        const drop = i > 0 ? STAGES[i - 1].pct - s.pct : null;
        // the leak this project was actually about
        const focus = i === STAGES.length - 1;
        return (
          <g key={s.label}>
            <line
              x1={x} y1={CY - half(s.pct)} x2={x} y2={CY + half(s.pct)}
              stroke="#fff" strokeWidth={1.5} opacity={0.75}
            />
            <text x={x} y={20} textAnchor={anchor} fontSize={13.5} fontWeight={700} fill={INK}>
              {s.pct}%
            </text>
            <text x={x} y={38} textAnchor={anchor} fontSize={12} fill={MUTED}>
              {s.label}
            </text>
            {drop !== null && (
              <text
                x={(X[i - 1] + x) / 2} y={CY + MAXH / 2 + 34}
                textAnchor="middle" fontSize={13}
                fontWeight={focus ? 700 : 400}
                fill={focus ? WARN : MUTED}
              >
                −{drop}
              </text>
            )}
          </g>
        );
      })}

      {/* call out the drop the project was about */}
      <line
        x1={(X[3] + X[4]) / 2} y1={CY + MAXH / 2 + 44}
        x2={(X[3] + X[4]) / 2} y2={CY + MAXH / 2 + 62}
        stroke={WARN} strokeWidth={1.4}
      />
      <text
        x={(X[3] + X[4]) / 2} y={CY + MAXH / 2 + 76}
        textAnchor="middle" fontSize={12.5} fontWeight={600} fill={WARN}
      >
        the one this project was about
      </text>
    </svg>
  );
}

/** Two bars that disagree. The whole finding, in one picture. */
function Contradiction() {
  return (
    <div
      className="rounded-2xl p-6 md:p-7"
      style={{ background: "#fff", border: `1px solid ${INK}14` }}
    >
      <p
        className="mb-5 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase"
        style={{ color: MUTED }}
      >
        On the plan screen
      </p>

      {[
        { label: "Time spent reading", value: "1 min 48s", pct: 88, tone: ACCENT },
        { label: "Tapped the button", value: "11%", pct: 11, tone: WARN },
      ].map((b) => (
        <div key={b.label} className="mb-5 last:mb-0">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <span className="font-sans text-[13.5px]" style={{ color: MUTED }}>
              {b.label}
            </span>
            <span
              className="font-sans text-[19px] font-bold leading-none"
              style={{ color: b.tone }}
            >
              {b.value}
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full" style={{ background: `${INK}0d` }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: b.tone }}
            />
          </div>
        </div>
      ))}

      <p
        className="mt-6 font-sans text-[15.5px] font-semibold leading-snug"
        style={{ color: INK }}
      >
        People stayed and did nothing. That is not friction. That is reading
        something you do not understand.
      </p>
    </div>
  );
}

const METHOD = [
  {
    n: "01",
    what: "Where they leave",
    how: "MoEngage funnel, then UXCam recordings and heatmaps on the screens that bled.",
  },
  {
    n: "02",
    what: "Why they leave",
    how: "100+ recorded sales calls, then interviews with people who had dropped off.",
  },
];

const SlideResearchApproach = () => (
  <SlideShell>
    <SlideHead
      eyebrow="Research"
      title="The screen people read the longest was the one they left"
    />

    {/* the funnel, as a shape */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl px-5 pb-4 pt-5 md:px-8"
      style={{ background: PAPER, border: `1px solid ${INK}14` }}
    >
      <Funnel />
    </motion.div>

    <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <Contradiction />

      <div className="flex flex-col gap-4">
        {METHOD.map((m) => (
          <div
            key={m.n}
            className="rounded-2xl p-5"
            style={{ background: PAPER, border: `1px solid ${INK}14` }}
          >
            <div className="mb-1.5 flex items-baseline gap-2.5">
              <span
                className="font-sans text-[12.5px] font-bold tracking-[0.1em]"
                style={{ color: ACCENT, opacity: 0.7 }}
              >
                {m.n}
              </span>
              <h3 className="font-sans text-[15.5px] font-bold" style={{ color: INK }}>
                {m.what}
              </h3>
            </div>
            <p className="font-sans text-[13.6px] leading-[1.6]" style={{ color: MUTED }}>
              {m.how}
            </p>
          </div>
        ))}

        <div
          className="rounded-2xl p-5"
          style={{ background: ACCENT_BG, borderLeft: `4px solid ${ACCENT}` }}
        >
          <p className="font-sans text-[14.5px] font-semibold leading-snug" style={{ color: ACCENT }}>
            So the brief changed. Not speed up the flow. Explain it.
          </p>
        </div>
      </div>
    </div>
  </SlideShell>
);

export default SlideResearchApproach;
