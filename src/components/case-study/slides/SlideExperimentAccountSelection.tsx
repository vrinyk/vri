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

/** What the old screen did, what it does now, and why it moved. */
const CHANGES = [
  {
    n: "01",
    title: "One account first, not the whole plan",
    before:
      "The programme opened with every loan, every date and every number at once.",
    why: "Reps closed by talking through one loan. A full plan on first read lands as a demand, not an offer — so the screen now leads with a single account and folds the rest behind “3 more loans to settle”.",
  },
  {
    n: "02",
    title: "The user chooses which lender goes first",
    before: "The order was fixed by the system. Users either accepted all of it or left.",
    why: "The debt people feel is the one whose recovery agent is calling. Change account lets them settle that lender first, which turns the system's plan into their plan.",
  },
  {
    n: "03",
    title: "The programme explains itself on the screen",
    before: "Understanding how settlement worked needed a human on the phone.",
    why: "Event data put the drop on the programme screen, not the form — high time on screen, low progression. So the pitch became part of the page: save month by month, FREED negotiates, the account settles.",
  },
  {
    n: "04",
    title: "A payment summary you can read in one breath",
    before: "Fees, GST and creditor payouts were spread across the flow.",
    why: "The last question before committing is always “what do I actually pay?”. One modal answers it — total loan, payment to creditors, settlement fees, total paid, and what they save.",
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
              up when a screen did. So I sat with 100+ recorded pitches, read the
              funnel back, and rebuilt the programme screen around the one thing
              reps always did first: talk about a single loan.
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

            {/* What changed, and why */}
            <p
              className="font-sans text-[10.5px] tracking-[0.2em] uppercase mb-4"
              style={{ color: GREEN, opacity: 0.8 }}
            >
              What I changed, and why
            </p>

            <div className="grid sm:grid-cols-2 gap-x-7 gap-y-5">
              {CHANGES.map((c) => (
                <div key={c.n}>
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span
                      className="font-serif text-[15px]"
                      style={{ color: GREEN, opacity: 0.6 }}
                    >
                      {c.n}
                    </span>
                    <h3
                      className="font-sans text-[14.5px] font-bold"
                      style={{ color: INK }}
                    >
                      {c.title}
                    </h3>
                  </div>

                  {/* the old screen, kept in view so the change is legible */}
                  <p
                    className="font-sans text-[12.4px] leading-[1.5] mb-1.5 pl-2.5"
                    style={{ color: MUTED, borderLeft: `2px solid ${LINE}` }}
                  >
                    <span
                      className="tracking-[0.14em] uppercase text-[9.5px] mr-1.5"
                      style={{ opacity: 0.75 }}
                    >
                      Before
                    </span>
                    {c.before}
                  </p>

                  <p
                    className="font-sans text-[13.2px] leading-[1.55]"
                    style={{ color: MUTED }}
                  >
                    {c.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: the designs, unframed so the phone sits on the page ─── */}
          <div className="lg:pl-2">
            <PhoneCarousel screens={SCREENS} width={262} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideExperimentAccountSelection;
