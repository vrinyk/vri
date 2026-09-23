import { Rationale, SlideHead, SlideShell } from "../Rationale";
import type { Reason } from "../Rationale";

const INK = "#1f232d";
const ACCENT = "#265d73";
const ACCENT_BG = "#dbeef8";

/**
 * NOTE ON FIGURES
 * The percentages below are stand-ins shaped to match the real funnel, not
 * measured values. Swap them for the MoEngage numbers before this is shown.
 */
const REASONS: Reason[] = [
  {
    decision: "Value before forms",
    why: "People were asked to commit before they knew what they were committing to, so they left at the first ask.",
    heard: "I didn't know what I was signing up for",
    measured: "38%",
    measuredLabel: "left before the plan screen",
  },
  {
    decision: "Earn the right to ask",
    why: "Income and loan details came up while the platform was still a stranger. Trust has to be built before that question.",
    heard: "Why do you need my salary already?",
    measured: "1 in 4",
    measuredLabel: "dropped at the income step",
  },
  {
    decision: "Their words, not ours",
    why: "Settlement, SPA and AutoPay were explained in our language. People read them as risk rather than relief.",
    heard: "Kuch samajh nahi aaya",
    measured: "11%",
    measuredLabel: "tapped the main CTA",
  },
];

const SlideProblem = () => (
  <SlideShell>
    <SlideHead
      eyebrow="The problem"
      title={<>It looked like a UI problem. It was a trust problem.</>}
      standfirst="People were not dropping off because the flow was long. They were dropping off because they did not believe what was on the other side."
    />

    <div className="grid gap-4 md:grid-cols-3">
      {REASONS.map((r, i) => (
        <Rationale key={r.decision} n={`0${i + 1}`} reason={r} />
      ))}
    </div>

    <div
      className="mt-6 rounded-2xl px-6 py-5"
      style={{ background: ACCENT_BG, borderLeft: `4px solid ${ACCENT}` }}
    >
      <p
        className="max-w-4xl font-sans text-[16px] font-semibold leading-snug md:text-[18px]"
        style={{ color: INK }}
      >
        Fix a trust problem as a UI problem and you ship a tidier screen that
        still loses the user.
      </p>
    </div>
  </SlideShell>
);

export default SlideProblem;
