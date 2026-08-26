import PhoneMockup from "../PhoneMockup";
import type { Screen } from "../PhoneMockup";
import programPage from "@/assets/case-study-freed/experiment-account-selection/program-page.svg";
import accountsToSettle from "@/assets/case-study-freed/experiment-account-selection/accounts-to-settle.svg";
import changeAccount from "@/assets/case-study-freed/experiment-account-selection/change-account.svg";
import monthlySavingsEdit from "@/assets/case-study-freed/experiment-account-selection/monthly-savings-edit.svg";
import paymentSummary from "@/assets/case-study-freed/experiment-account-selection/payment-summary.svg";
import agreementAutosave from "@/assets/case-study-freed/experiment-account-selection/agreement-autosave.svg";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#e6e0d5";
const PAPER = "#fbfaf7";
const GREEN = "#294b3a";
const GREEN_BG = "#dce8e1";

const SCREENS: Screen[] = [
  { src: programPage, label: "Program explained, step by step", tall: true },
  { src: accountsToSettle, label: "Pick the first account to settle" },
  { src: changeAccount, label: "Change account" },
  { src: monthlySavingsEdit, label: "Edit monthly savings" },
  { src: paymentSummary, label: "Payment summary breakdown" },
  { src: agreementAutosave, label: "Agreement + AutoPay method" },
];

/** How the problem was found — qual on the left, quant on the right. */
const RESEARCH = [
  {
    kind: "Qualitative",
    method: "100+ sales calls",
    body: "I sat with the sales floor and listened to over a hundred recorded pitches. I logged the order reps explained things in, the words they swapped for jargon, and the exact sentence where a hesitant user turned into a yes.",
  },
  {
    kind: "Quantitative",
    method: "MoEngage funnel + events",
    body: "Event-level drop-off showed the bleed sat on the program screen, not the form. Users read it, scrolled, and left — high time-on-screen, low progression. Classic comprehension failure, not friction.",
  },
];

/** The gap between how reps sold it and how the product presented it. */
const GAP = [
  {
    them: "Reps opened with one loan — “which card is hurting you most?”",
    us: "The product asked users to accept the whole debt programme at once.",
  },
  {
    them: "Reps explained the programme as a story, in sequence.",
    us: "The screen was a wall of text with the plan buried below the fold.",
  },
  {
    them: "Reps read out the fee and GST before being asked.",
    us: "One total. No breakdown. Users assumed a hidden catch.",
  },
];

const SHIPPED = [
  {
    n: "01",
    title: "Let users choose the first account",
    body: "Borrowed straight from the pitch. One account, one decision — the programme grows from there instead of landing all at once.",
  },
  {
    n: "02",
    title: "Programme as an interactive walkthrough",
    body: "Replaced the text block with a stepped, tappable explainer in the reps' own language. No jargon, no scroll wall.",
  },
  {
    n: "03",
    title: "A settlement plan users can point at",
    body: "Deposit amount, lender negotiation window, closure date — laid out as a timeline with the total saving attached.",
  },
  {
    n: "04",
    title: "Payment summary, fully itemised",
    body: "Settlement payment, FREED fee and GST split out before the CTA, matching what reps said out loud on calls.",
  },
];

/** End-to-end ownership, in delivery order. */
const OWNERSHIP = [
  "Problem framing",
  "Qual + quant research",
  "Funnel analysis",
  "Solution + prototype",
  "Dev handoff",
  "Dev testing",
  "Event tracking",
  "Phased shipment",
  "Post-launch read",
];

const SlideExperimentAccountSelection = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-7xl mx-auto">
        {/* ─── Header ─── */}
        <div className="mb-10">
          <p
            className="font-sans text-[12px] tracking-[0.22em] uppercase mb-3"
            style={{ color: GREEN }}
          >
            Experiment · Owned end to end
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold leading-[1.05] mb-4 max-w-4xl"
            style={{ color: INK }}
          >
            Sales could sell this in one call. The product couldn't sell it in
            twenty screens.
          </h2>
          <p
            className="font-sans text-lg leading-relaxed max-w-3xl"
            style={{ color: MUTED }}
          >
            Users understood debt settlement when a human explained it and gave
            up when a screen did. So I stopped designing and went to listen.
          </p>
        </div>

        {/* ─── Headline result ─── */}
        <div
          className="mb-12 flex flex-wrap items-center gap-x-10 gap-y-4 rounded-2xl px-7 py-5"
          style={{ background: `${GREEN_BG}55`, border: `1px solid ${GREEN_BG}` }}
        >
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.16em] uppercase mb-1"
              style={{ color: GREEN, opacity: 0.8 }}
            >
              Conversion
            </p>
            <p className="font-serif text-3xl md:text-4xl" style={{ color: INK }}>
              8% <span style={{ color: MUTED }}>→</span>{" "}
              <span style={{ color: GREEN }}>10%</span>
            </p>
          </div>
          <div className="h-10 w-px" style={{ background: LINE }} />
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.16em] uppercase mb-1"
              style={{ color: GREEN, opacity: 0.8 }}
            >
              Read from
            </p>
            <p className="font-sans text-[15px]" style={{ color: INK }}>
              MoEngage funnel, post-ship
            </p>
          </div>
          <div className="h-10 w-px" style={{ background: LINE }} />
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.16em] uppercase mb-1"
              style={{ color: GREEN, opacity: 0.8 }}
            >
              Relative lift
            </p>
            <p className="font-sans text-[15px]" style={{ color: INK }}>
              +25% on the same traffic
            </p>
          </div>
        </div>

        {/* ─── How I found the problem ─── */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {RESEARCH.map((r) => (
            <div
              key={r.kind}
              className="rounded-2xl p-6"
              style={{ background: PAPER, border: `1px solid ${LINE}` }}
            >
              <div className="flex items-baseline justify-between mb-3">
                <span
                  className="font-sans text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: MUTED }}
                >
                  {r.kind}
                </span>
                <span
                  className="font-sans text-[13px] font-semibold"
                  style={{ color: GREEN }}
                >
                  {r.method}
                </span>
              </div>
              <p
                className="font-sans text-[15px] leading-relaxed"
                style={{ color: INK, opacity: 0.8 }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* ─── The gap ─── */}
        <div className="mb-12">
          <h3
            className="font-serif text-2xl md:text-[1.75rem] font-semibold mb-5"
            style={{ color: INK }}
          >
            The pattern in the calls
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${LINE}` }}
          >
            <div
              className="grid md:grid-cols-2 gap-px font-sans text-[11px] tracking-[0.16em] uppercase"
              style={{ background: LINE }}
            >
              <div className="px-6 py-3" style={{ background: INK, color: PAPER }}>
                How reps pitched it
              </div>
              <div className="px-6 py-3" style={{ background: INK, color: PAPER }}>
                How the product asked for it
              </div>
            </div>
            {GAP.map((g, i) => (
              <div
                key={g.them}
                className="grid md:grid-cols-2 gap-px"
                style={{ background: LINE }}
              >
                <div
                  className="px-6 py-4 font-sans text-[14.5px] leading-snug"
                  style={{
                    background: i % 2 ? PAPER : "#fff",
                    color: GREEN,
                  }}
                >
                  {g.them}
                </div>
                <div
                  className="px-6 py-4 font-sans text-[14.5px] leading-snug"
                  style={{
                    background: i % 2 ? PAPER : "#fff",
                    color: MUTED,
                  }}
                >
                  {g.us}
                </div>
              </div>
            ))}
          </div>
          <p
            className="font-serif text-lg md:text-xl mt-5 max-w-3xl"
            style={{ color: INK }}
          >
            The pitch was already the right information architecture. Nobody had
            put it in the product.
          </p>
        </div>

        {/* ─── What shipped + screens ─── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start mb-12">
          <div>
            <h3
              className="font-serif text-2xl md:text-[1.75rem] font-semibold mb-6"
              style={{ color: INK }}
            >
              What I shipped
            </h3>
            <div className="space-y-5">
              {SHIPPED.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span
                    className="font-serif text-xl shrink-0"
                    style={{ color: GREEN, opacity: 0.65 }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h4
                      className="font-sans text-[15.5px] font-bold mb-1"
                      style={{ color: INK }}
                    >
                      {s.title}
                    </h4>
                    <p
                      className="font-sans text-[14.5px] leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <PhoneMockup screens={SCREENS} width={268} />
            <p
              className="mt-3 max-w-[268px] text-center font-sans text-[12px]"
              style={{ color: MUTED }}
            >
              Tap the phone to open any screen full size
            </p>
          </div>
        </div>

        {/* ─── End-to-end ownership ─── */}
        <div
          className="rounded-2xl px-7 py-6"
          style={{ background: PAPER, border: `1px solid ${LINE}` }}
        >
          <p
            className="font-sans text-[11px] tracking-[0.18em] uppercase mb-4"
            style={{ color: MUTED }}
          >
            My scope on this one
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
            {OWNERSHIP.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className="font-sans text-[13.5px] px-3 py-1.5 rounded-full"
                  style={{ background: GREEN_BG, color: GREEN }}
                >
                  {step}
                </span>
                {i < OWNERSHIP.length - 1 && (
                  <span style={{ color: `${MUTED}80` }}>→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideExperimentAccountSelection;
