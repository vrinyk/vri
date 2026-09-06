import PhoneCarousel from "../PhoneCarousel";
import type { Screen } from "../PhoneWall";
import programPage from "@/assets/case-study-freed/experiment-account-selection/program-page.svg";
import accountsToSettle from "@/assets/case-study-freed/experiment-account-selection/accounts-to-settle.svg";
import paymentSummary from "@/assets/case-study-freed/experiment-account-selection/payment-summary.svg";
import changeAccount from "@/assets/case-study-freed/experiment-account-selection/change-account.svg";
import monthlySavingsEdit from "@/assets/case-study-freed/experiment-account-selection/monthly-savings-edit.svg";
import agreementAutosave from "@/assets/case-study-freed/experiment-account-selection/agreement-autosave.svg";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#e6e0d5";
const PAPER = "#fbfaf7";
const GREEN = "#294b3a";
const GREEN_BG = "#dce8e1";

/** One phone, stepped through in flow order. */
const SCREENS: Screen[] = [
  { src: programPage, label: "Programme explained step by step", tall: true },
  { src: accountsToSettle, label: "Pick the first account to settle" },
  { src: paymentSummary, label: "Itemised payment summary" },
  { src: changeAccount, label: "Change account" },
  { src: monthlySavingsEdit, label: "Edit monthly savings" },
  { src: agreementAutosave, label: "Agreement and AutoPay" },
];

/** The design process, in the order it actually happened. */
const PROCESS = [
  {
    n: "01",
    title: "Listened before drawing",
    body: "Sat with the sales floor through 100+ recorded pitches, logging the order reps explained things in and the sentence that turned a hesitant user into a yes.",
  },
  {
    n: "02",
    title: "Found where it broke",
    body: "Event data put the bleed on the programme screen, not the form. High time on screen, low progression. A comprehension problem, not a friction one.",
  },
  {
    n: "03",
    title: "Borrowed the pitch",
    body: "Reps opened with one loan. The product asked users to accept everything at once. So the screen was rebuilt around a single first choice.",
  },
  {
    n: "04",
    title: "Shipped and measured",
    body: "Prototype, dev handoff, QA, event tracking, phased release, then read the funnel back.",
  },
];

const SlideExperimentAccountSelection = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-6 md:px-6 md:py-8">
      <div className="container max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 xl:gap-14 items-center">
          {/* ─── Left: the why ─── */}
          <div className="min-w-0">
            <p
              className="font-sans text-[11.5px] tracking-[0.22em] uppercase mb-3"
              style={{ color: GREEN }}
            >
              Experiment · Owned end to end
            </p>

            <h2
              className="font-serif text-3xl xl:text-[2.9rem] font-semibold leading-[1.06] mb-3.5"
              style={{ color: INK }}
            >
              Sales could sell this in one call.
              <br />
              The product couldn't in twenty screens.
            </h2>

            <p
              className="font-sans text-[15.5px] leading-relaxed mb-6 max-w-2xl"
              style={{ color: MUTED }}
            >
              Users understood debt settlement when a human explained it and gave
              up when a screen did. So I stopped designing and went to listen.
            </p>

            {/* Result strip */}
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl px-5 py-3.5 mb-7"
              style={{ background: `${GREEN_BG}66`, border: `1px solid ${GREEN_BG}` }}
            >
              <div className="flex items-baseline gap-2.5">
                <span
                  className="font-sans text-[10.5px] tracking-[0.16em] uppercase"
                  style={{ color: GREEN, opacity: 0.75 }}
                >
                  Conversion
                </span>
                <span className="font-serif text-2xl xl:text-[1.75rem]" style={{ color: INK }}>
                  8% <span style={{ color: MUTED }}>→</span>{" "}
                  <span style={{ color: GREEN }}>10%</span>
                </span>
              </div>
              <span className="h-7 w-px" style={{ background: LINE }} />
              <span className="font-sans text-[13.5px]" style={{ color: INK }}>
                100+ sales calls analysed
              </span>
              <span className="h-7 w-px" style={{ background: LINE }} />
              <span className="font-sans text-[13.5px]" style={{ color: INK }}>
                Read from the MoEngage funnel
              </span>
            </div>

            {/* Process — the how */}
            <div className="grid sm:grid-cols-2 gap-x-7 gap-y-5">
              {PROCESS.map((p) => (
                <div key={p.n}>
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span
                      className="font-serif text-[15px]"
                      style={{ color: GREEN, opacity: 0.6 }}
                    >
                      {p.n}
                    </span>
                    <h3
                      className="font-sans text-[14.5px] font-bold"
                      style={{ color: INK }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className="font-sans text-[13.2px] leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: the designs ─── */}
          <div
            className="rounded-2xl px-5 py-6 lg:px-6"
            style={{ background: PAPER, border: `1px solid ${LINE}` }}
          >
            <PhoneCarousel screens={SCREENS} width={262} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideExperimentAccountSelection;
