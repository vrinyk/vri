import { SlideHead, SlideShell, Stat } from "../Rationale";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const PAPER = "#fbfaf7";

/** What the redesign had to do. */
const GOALS = [
  ["Fewer pages, same understanding", "Compress the flow without pushing the confusion into support tickets."],
  ["Explain the hard parts fast", "Settlement, AutoPay and fees had to land in seconds, with no jargon."],
  ["Hold attention on a small screen", "One idea per screen, because this is read standing up, mid-call."],
  ["Trust without a wall of legal", "Say what is protected up front and keep the compliance detail on tap."],
];

/**
 * NOTE ON FIGURES — the two pre-redesign numbers are stand-ins sized to the
 * real funnel. Replace with the MoEngage baseline.
 */
const SlideABTesting = () => (
  <SlideShell>
    <SlideHead
      eyebrow="The brief"
      title="Shorter, without losing the plot"
      standfirst="Cut the onboarding down and make it clearer at the same time, for people meeting debt relief for the first time."
    />

    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {GOALS.map(([t, d]) => (
          <div
            key={t}
            className="rounded-2xl p-5"
            style={{ background: PAPER, border: `1px solid ${INK}14` }}
          >
            <h3
              className="mb-1.5 font-sans text-[15.5px] font-bold"
              style={{ color: INK }}
            >
              {t}
            </h3>
            <p
              className="font-sans text-[13.8px] leading-[1.6]"
              style={{ color: MUTED }}
            >
              {d}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p
          className="mb-3 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: MUTED }}
        >
          Where it started
        </p>
        <div className="grid gap-3">
          <Stat value="20 screens" label="Before a user saw their plan" tone="plain" />
          <Stat value="8%" label="Reached payment" tone="plain" />
          <Stat value="1 min 48s" label="On the plan screen, barely any taps" />
        </div>
      </div>
    </div>
  </SlideShell>
);

export default SlideABTesting;
