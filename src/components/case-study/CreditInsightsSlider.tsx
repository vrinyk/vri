import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import PhoneWall from "./PhoneWall";
import PhoneFan from "./PhoneFan";
import type { Screen } from "./PhoneWall";
import AnnotatedScreen from "./AnnotatedScreen";
import IaDiagram from "./IaDiagram";

/* ── screens, straight out of the FREED CI Journey Figma file ─────────── */
import splash from "@/assets/case-study-credit-insights/splash.png";
import welcome1 from "@/assets/case-study-credit-insights/welcome-1.png";
import welcome2 from "@/assets/case-study-credit-insights/welcome-2.png";
import landing from "@/assets/case-study-credit-insights/landing.png";
import signup from "@/assets/case-study-credit-insights/signup.png";
import otp from "@/assets/case-study-credit-insights/otp.png";
import fetching from "@/assets/case-study-credit-insights/fetching-report.png";
import onbGoal from "@/assets/case-study-credit-insights/onboarding-goal.png";
import onbLoan from "@/assets/case-study-credit-insights/onboarding-loan-type.png";
import onbIncome from "@/assets/case-study-credit-insights/onboarding-income.png";
import welcomeAboard from "@/assets/case-study-credit-insights/welcome-aboard.png";

import lockedDrp from "@/assets/case-study-credit-insights/home-locked-drp.png";
import lockedDcp from "@/assets/case-study-credit-insights/home-locked-dcp.png";
import lockedDep from "@/assets/case-study-credit-insights/home-locked-dep.png";
import lockedOthers from "@/assets/case-study-credit-insights/home-locked-others.png";
import unlockedDcp from "@/assets/case-study-credit-insights/home-unlocked-dcp.png";
import unlockedDep from "@/assets/case-study-credit-insights/home-unlocked-dep.png";
import drpMandate from "@/assets/case-study-credit-insights/drp-mandate-home.png";
import drpProgram from "@/assets/case-study-credit-insights/drp-program-home.png";
import celebrationDrp from "@/assets/case-study-credit-insights/unlock-celebration-drp.png";
import celebrationDep from "@/assets/case-study-credit-insights/unlock-celebration-dep.png";

import paywall199 from "@/assets/case-study-credit-insights/paywall-199.png";
import paywallDrp from "@/assets/case-study-credit-insights/paywall-drp.png";
import paywallDep from "@/assets/case-study-credit-insights/paywall-dep.png";
import paywallOthers from "@/assets/case-study-credit-insights/paywall-others.png";
import coupon from "@/assets/case-study-credit-insights/paywall-coupon.png";

import reportFull from "@/assets/case-study-credit-insights/report-full.png";
import reportScore from "@/assets/case-study-credit-insights/report-score.png";
import scoreDetail from "@/assets/case-study-credit-insights/score-detail.png";
import factorOntime from "@/assets/case-study-credit-insights/factor-ontime.png";
import factorUtil from "@/assets/case-study-credit-insights/factor-utilisation.png";
import factorAge from "@/assets/case-study-credit-insights/factor-age.png";
import factorMix from "@/assets/case-study-credit-insights/factor-mix.png";
import factorEnq from "@/assets/case-study-credit-insights/factor-enquiries.png";
import accounts from "@/assets/case-study-credit-insights/accounts-loans.png";
import dispute from "@/assets/case-study-credit-insights/dispute.png";

import depCalc from "@/assets/case-study-credit-insights/dep-calculator.png";
import depPlanner from "@/assets/case-study-credit-insights/dep-planner.png";
import depSchedule from "@/assets/case-study-credit-insights/dep-schedule.png";
import depCreditors from "@/assets/case-study-credit-insights/dep-creditors.png";
import depGoals from "@/assets/case-study-credit-insights/dep-goals.png";
import goalScore from "@/assets/case-study-credit-insights/goal-score.png";
import goalLoan from "@/assets/case-study-credit-insights/goal-loan.png";
import othersHome from "@/assets/case-study-credit-insights/others-home.png";
import ineligible from "@/assets/case-study-credit-insights/ineligible-drp.png";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#e6e0d5";
const PAPER = "#fbfaf7";
const ACCENT = "#265d73";
const ACCENT_BG = "#dbeef8";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const SECTIONS = [
  "Hero",
  "Overview",
  "Problem",
  "Objective",
  "Market",
  "Users",
  "Routing",
  "Structure",
  "Sketches",
  "Design systems",
  "Journey",
  "Anatomy",
  "Score factors",
  "Locked → unlocked",
  "Copy",
  "Testing",
  "Screens",
  "Reflection",
];

/** Shared slide shell. Every slide is one viewport wide. */
function Slide({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 pt-8 pb-12 md:px-16 md:pt-12 md:pb-16 lg:px-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    variants={fadeUp}
    className="mb-4 font-sans text-[12px] tracking-[0.22em] uppercase"
    style={{ color: ACCENT }}
  >
    {children}
  </motion.p>
);

const H = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    variants={fadeUp}
    className="mb-5 max-w-3xl font-serif text-3xl font-semibold leading-[1.08] md:text-[2.9rem]"
    style={{ color: INK }}
  >
    {children}
  </motion.h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    variants={fadeUp}
    className="mb-5 max-w-3xl font-sans text-[16px] leading-[1.7] md:text-[17px]"
    style={{ color: MUTED }}
  >
    {children}
  </motion.p>
);

/** A labelled row of phones. Used wherever a group of screens tells one story. */
const Row = ({
  title,
  note,
  screens,
  width = 128,
}: {
  title: string;
  note?: string;
  screens: Screen[];
  width?: number;
}) => (
  <motion.div variants={fadeUp} className="mb-8">
    <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <p
        className="font-sans text-[11.5px] tracking-[0.18em] uppercase"
        style={{ color: ACCENT }}
      >
        {title}
      </p>
      {note && (
        <p className="font-sans text-[13.5px]" style={{ color: MUTED }}>
          {note}
        </p>
      )}
    </div>
    <PhoneWall screens={screens} featured={screens.length} width={width} />
  </motion.div>
);

/* ── data for the longer slides ───────────────────────────────────────── */

const COMPETITORS = [
  {
    app: "OneScore",
    does: "Free score, monthly refresh, clean and fast",
    gap: "Shows the number, then sells a credit card",
  },
  {
    app: "CRED",
    does: "Beautiful. Rewards you for paying bills on time",
    gap: "Built for people who already pay on time. Miss one and it has nothing for you",
  },
  {
    app: "Paisabazaar",
    does: "Score plus a marketplace of loans and cards",
    gap: "The score is really a lead form",
  },
  {
    app: "Lender apps",
    does: "Score sitting inside an app that gives loans",
    gap: "Every recommendation ends in more borrowing",
  },
  {
    app: "Bureau apps",
    does: "The raw report. Accurate and complete",
    gap: "Written for lenders, not for the person it is about",
  },
];

const FINDINGS = [
  {
    n: "01",
    t: "Everyone shows the number. Nobody explains it.",
    b: "Every app had a gauge. Not one of them told me which of my own accounts was doing the damage, or what to do about it this month.",
  },
  {
    n: "02",
    t: "They all make money by selling you more credit.",
    b: "Which means none of them can honestly tell you to stop borrowing. FREED earns when your debt goes down. That is the only reason we could say the true thing.",
  },
  {
    n: "03",
    t: "The score is why people open the app. It is not what they need.",
    b: "So lead with the score, prove you have read their report, and earn the right to talk about debt after that. Not before.",
  },
];

/**
 * Palettes read off the shipped screens, not chosen from a swatch library.
 * One block per segment, because all three were sold to different people.
 */
const SYSTEMS = [
  {
    code: "DRP",
    name: "Debt Relief",
    tint: "#fdf3ee",
    who: "Already defaulted. Getting recovery calls.",
    feel: "Serious, then protective",
    colours: ["#02416E", "#DE544A", "#E17F39"],
    swatchNote: "Navy base, red for the diagnosis, amber for the stress meter",
    type: "Heavy weights, oversized numbers. The score is the headline.",
    language:
      "Name the problem out loud, then take it off their hands. Alarm first, protection immediately after.",
    cta: "See Your Settlement Plan",
    line: "Krishna, your debt needs attention",
    why: "This person opens the app at night after a threatening call. Softening it reads as dishonest. What they want is for someone to take over.",
    // Centre phone is the identity screen for each system, so that is the one
    // the eye lands on first.
    screens: [
      { src: paywallDrp, label: "Paywall" },
      { src: lockedDrp, label: "Locked home" },
      { src: drpMandate, label: "Unlocked" },
    ] as Screen[],
  },
  {
    code: "DCP",
    name: "Consolidation",
    tint: "#eef4f9",
    who: "Paying on time, but stretched thin.",
    feel: "Calm, factual, no red",
    colours: ["#02416E", "#D8F0F0", "#EEF3F7"],
    swatchNote: "Navy on cool tints. Deliberately no red anywhere",
    type: "Lighter weights, more air, trend lines over big numbers.",
    language:
      "Insight, not rescue. Never the word settlement. Talk about interest and consistency.",
    cta: "Unlock to see plan",
    line: "Delayed payments hurt your credit score",
    why: "This person is proud of not being in trouble. Treat them like a defaulter once and they leave, so the whole system had to be quieter than DRP.",
    screens: [
      { src: lockedDcp, label: "Locked home" },
      { src: unlockedDcp, label: "Unlocked" },
      { src: goalLoan, label: "Goal tracker" },
    ] as Screen[],
  },
  {
    code: "DEP",
    name: "Elimination",
    tint: "#f5fbe8",
    who: "Wants to clear it themselves, no third party.",
    feel: "Optimistic, gain framed",
    colours: ["#D8FC72", "#90D890", "#02416E"],
    swatchNote: "Lime as the action colour, green for progress, navy holding it",
    type: "Display numbers on the savings figure. Everything else recedes.",
    language:
      "Every screen answers how much do I save and by when. Sliders and calculators, never a promise.",
    cta: "Unlock premium to save ₹24,000",
    line: "Crush your debt and save big",
    why: "This person will actually do the maths and wants to stay in control. So they get the calculator, the planner and a projection with the caveat attached, rather than a plan handed to them.",
    screens: [
      { src: lockedDep, label: "Locked home" },
      { src: depCalc, label: "Savings calculator" },
      { src: depPlanner, label: "Monthly planner" },
    ] as Screen[],
  },
];

/** The DEP journey, in order — the primary path through the product. */
const DEP_JOURNEY: Screen[] = [
  { src: welcome2, label: "Welcome" },
  { src: landing, label: "Landing page" },
  { src: lockedDep, label: "Home, locked" },
  { src: celebrationDep, label: "Congratulations" },
  { src: unlockedDep, label: "Home, unlocked" },
];

const CreditInsightsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = SECTIONS.length;

  const scrollToSlide = useCallback(
    (index: number) => {
      if (scrollRef.current && index >= 0 && index < total) {
        scrollRef.current.scrollTo({
          left: index * window.innerWidth,
          behavior: "smooth",
        });
        setCurrent(index);
      }
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToSlide(current + 1);
      if (e.key === "ArrowLeft") scrollToSlide(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, scrollToSlide]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () =>
      setCurrent(Math.round(el.scrollLeft / window.innerWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Top nav */}
      <nav
        className="z-50 flex flex-shrink-0 items-center justify-between border-b px-3 py-2.5 md:px-6 md:py-3 lg:px-10"
        style={{ borderColor: `${LINE}99` }}
      >
        <div className="hide-scrollbar flex items-center gap-1 overflow-x-auto">
          {SECTIONS.map((s, i) => (
            <button
              key={s}
              onClick={() => scrollToSlide(i)}
              className={`whitespace-nowrap rounded-full px-3 py-1 font-sans text-[12.5px] transition-all ${
                current === i ? "font-medium" : ""
              }`}
              style={
                current === i
                  ? { background: INK, color: PAPER }
                  : { color: MUTED }
              }
            >
              {s}
            </button>
          ))}
        </div>
        <span
          className="whitespace-nowrap pl-4 font-sans text-[12.5px]"
          style={{ color: MUTED }}
        >
          {current + 1} / {total}
        </span>
      </nav>

      {/* Slides */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex flex-1 snap-x snap-mandatory overflow-x-auto"
      >
        {/* ═══ 1 — HERO ═══ */}
        <Slide>
          <Eyebrow>Credit Insights · New product, 0 to 1</Eyebrow>
          <motion.h1
            variants={fadeUp}
            className="mb-6 max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.02] md:text-[4.2rem]"
            style={{ color: INK }}
          >
            A credit score is just a number.
            <br />
            We made it a reason to start.
          </motion.h1>
          <P>
            FREED helps people get out of debt. Credit Insights was a new
            product we built to show people their credit score, explain what it
            actually means for them, and point them to the right way out.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-8 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4"
          >
            {[
              ["My role", "Product designer\nEnd to end, sketch to ship"],
              ["Team", "1 Product Designer (me)\n1 Product Manager\nEngineering"],
              ["Timeline", "6 months\nSketching to launch"],
              ["Scale", "100+ screens\nAcross 5 segment journeys"],
            ].map(([label, body]) => (
              <div key={label}>
                <p
                  className="mb-2 font-sans text-[13px] font-semibold"
                  style={{ color: ACCENT }}
                >
                  {label}
                </p>
                {body.split("\n").map((line) => (
                  <p
                    key={line}
                    className="font-sans text-[14.5px] leading-snug"
                    style={{ color: INK }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <PhoneFan screens={DEP_JOURNEY} />
          </motion.div>
        </Slide>

        {/* ═══ 2 — OVERVIEW ═══ */}
        <Slide>
          <Eyebrow>Overview</Eyebrow>
          <H>What we were actually building</H>
          <P>
            FREED already had products that help people clear debt. The problem
            was getting the right person to the right one. Most people who
            landed on us were not ready to talk about debt yet. They just wanted
            to know their credit score.
          </P>
          <P>
            So we built Credit Insights as the front door. You come in to check
            your score. You stay because we tell you something about your own
            situation that you did not know. And by the end, you understand
            which of our products is for you and why.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-6 grid max-w-3xl gap-4 md:grid-cols-3"
          >
            {[
              ["Score", "Where you stand today, in plain language"],
              ["Insight", "Why it looks like that, based on your own report"],
              ["Path", "The one product that fits your situation"],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="rounded-2xl border p-5"
                style={{
                  background: i === 2 ? ACCENT_BG : PAPER,
                  borderColor: `${INK}14`,
                }}
              >
                <p
                  className="mb-1.5 font-serif text-xl font-semibold"
                  style={{ color: i === 2 ? ACCENT : INK }}
                >
                  {t}
                </p>
                <p
                  className="font-sans text-[14px] leading-snug"
                  style={{ color: i === 2 ? ACCENT : MUTED }}
                >
                  {d}
                </p>
              </div>
            ))}
          </motion.div>
        </Slide>

        {/* ═══ 3 — PROBLEM ═══ */}
        <Slide>
          <Eyebrow>Problem</Eyebrow>
          <H>People wanted to fix their score. Nobody told them how.</H>
          <P>
            Checking your credit score is easy. Every app offers it. What nobody
            does is tell you what to do next. People saw a number, felt bad or
            relieved for a minute, and closed the app.
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "The user problem",
                "I know my score is bad. I do not know which part of my debt is causing it, what to pay first, or whether anything I do will actually help. So I do nothing.",
              ],
              [
                "The business problem",
                "We had three debt products for three very different situations. People arrived not knowing debt relief existed, and we had no way to hand them to the right one without a sales call.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-6"
                style={{ background: PAPER, border: `1px solid ${INK}14` }}
              >
                <p
                  className="mb-3 font-sans text-[11.5px] tracking-[0.18em] uppercase"
                  style={{ color: MUTED }}
                >
                  {t}
                </p>
                <p
                  className="font-sans text-[15.5px] leading-relaxed"
                  style={{ color: INK }}
                >
                  {d}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl font-serif text-xl md:text-[1.45rem]"
            style={{ color: INK }}
          >
            The score was the thing people wanted. The product was the thing we
            needed them to find. Credit Insights had to connect the two.
          </motion.p>
        </Slide>

        {/* ═══ 4 — OBJECTIVE ═══ */}
        <Slide>
          <Eyebrow>Objective</Eyebrow>
          <H>What I set out to do</H>
          <motion.div variants={fadeUp} className="max-w-3xl space-y-4">
            {[
              [
                "Make the score mean something",
                "Not just a number and a gauge. Tell people which accounts are pulling them down and what changes it.",
              ],
              [
                "Make it feel personal, not generic",
                "Group people by their real situation and speak to that group, instead of showing everyone the same screen.",
              ],
              [
                "Connect the score to a way out",
                "Based on where someone stands, put the right product in front of them at the right moment.",
              ],
              [
                "Earn the ask",
                "Show real value before asking anyone to pay. Nobody buys a debt product from a paywall they do not understand.",
              ],
            ].map(([t, d], i) => (
              <div key={t} className="flex gap-4">
                <span
                  className="shrink-0 font-serif text-lg"
                  style={{ color: ACCENT, opacity: 0.6 }}
                >
                  0{i + 1}
                </span>
                <div>
                  <p
                    className="mb-1 font-sans text-[16px] font-bold"
                    style={{ color: INK }}
                  >
                    {t}
                  </p>
                  <p
                    className="font-sans text-[15px] leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </Slide>

        {/* ═══ 5 — MARKET / COMPETITIVE ANALYSIS ═══ */}
        <Slide>
          <Eyebrow>Competitive analysis</Eyebrow>
          <H>I opened every app that shows you a score</H>
          <P>
            Before drawing anything, I went through the apps our users already
            had on their phones. Not to borrow layouts. To find the one thing
            none of them was doing, so we would have a real answer to the
            question <em>why would anyone come to us for this</em>.
          </P>

          <motion.div
            variants={fadeUp}
            className="mt-2 overflow-hidden rounded-2xl"
            style={{ border: `1px solid ${INK}14` }}
          >
            <div
              className="hidden gap-6 px-6 py-3 md:grid md:grid-cols-[150px_1fr_1fr]"
              style={{ background: PAPER, borderBottom: `1px solid ${INK}14` }}
            >
              {["App", "What it does well", "Where it stops"].map((h) => (
                <p
                  key={h}
                  className="font-sans text-[11px] tracking-[0.16em] uppercase"
                  style={{ color: MUTED }}
                >
                  {h}
                </p>
              ))}
            </div>
            {COMPETITORS.map((c, i) => (
              <div
                key={c.app}
                className="grid gap-1.5 px-6 py-4 md:grid-cols-[150px_1fr_1fr] md:gap-6"
                style={{ background: i % 2 ? PAPER : "#fff" }}
              >
                <p
                  className="font-sans text-[14.5px] font-bold"
                  style={{ color: INK }}
                >
                  {c.app}
                </p>
                <p className="font-sans text-[14px] leading-snug" style={{ color: INK }}>
                  {c.does}
                </p>
                <p className="font-sans text-[14px] leading-snug" style={{ color: MUTED }}>
                  {c.gap}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 mb-4 font-sans text-[12px] tracking-[0.18em] uppercase"
            style={{ color: ACCENT }}
          >
            Three things I took away
          </motion.p>
          <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
            {FINDINGS.map((f, i) => (
              <div
                key={f.n}
                className="rounded-2xl p-5"
                style={{
                  background: i === 1 ? ACCENT_BG : PAPER,
                  border: `1px solid ${i === 1 ? ACCENT + "40" : INK + "14"}`,
                }}
              >
                <p
                  className="mb-2 font-serif text-base"
                  style={{ color: ACCENT, opacity: 0.65 }}
                >
                  {f.n}
                </p>
                <p
                  className="mb-2 font-sans text-[15px] font-bold leading-snug"
                  style={{ color: i === 1 ? ACCENT : INK }}
                >
                  {f.t}
                </p>
                <p
                  className="font-sans text-[13.8px] leading-relaxed"
                  style={{ color: i === 1 ? ACCENT : MUTED }}
                >
                  {f.b}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-3xl font-serif text-xl leading-snug md:text-[1.45rem]"
            style={{ color: INK }}
          >
            Everyone else was in the business of getting you approved. We were
            the only ones whose business worked when your debt went down. That
            is the whole reason to open our app instead of theirs.
          </motion.p>
        </Slide>

        {/* ═══ 6 — USERS ═══ */}
        <Slide>
          <Eyebrow>Research</Eyebrow>
          <H>Same score, completely different people</H>
          <P>
            Two people can have a 620 and need opposite things. One has never
            borrowed and is scared of starting. Another is three months behind
            on four cards. Showing them the same screen would fail both.
          </P>
          <P>
            So the first design decision was not a screen at all. It was
            deciding how we group people. We used what the credit report already
            told us: how much they owe, how far behind they are, and whether they
            have any credit history at all.
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "New to credit",
                "No history yet. Wants to build a score, not fix one. Needs education before anything else.",
              ],
              [
                "Managing, just about",
                "Paying on time but stretched. Worried, not yet in trouble. Wants to consolidate.",
              ],
              [
                "Falling behind",
                "Missed payments, calls from lenders. Needs relief and reassurance, fast.",
              ],
              [
                "Deep in it",
                "Multiple defaults. Past the point of tidying up. Needs a settlement route.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-5"
                style={{ background: PAPER, border: `1px solid ${INK}14` }}
              >
                <p
                  className="mb-1.5 font-serif text-lg font-semibold"
                  style={{ color: INK }}
                >
                  {t}
                </p>
                <p className="font-sans text-[14px] leading-snug" style={{ color: MUTED }}>
                  {d}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Row
              title="One structure, five different first screens"
              note="Ineligible and no-history users get a real path too, not a dead end"
              screens={[
                { src: othersHome, label: "Healthy, monitoring" },
                { src: lockedDcp, label: "Managing, stretched", tall: true },
                { src: lockedDep, label: "Wants to clear it", tall: true },
                { src: lockedDrp, label: "Falling behind", tall: true },
                { src: ineligible, label: "Ineligible, still helped", tall: true },
              ]}
              width={126}
            />
          </motion.div>
        </Slide>

        {/* ═══ 7 — ROUTING ═══ */}
        <Slide>
          <Eyebrow>The core idea</Eyebrow>
          <H>The score decides which product you see</H>
          <P>
            This was the part I found most interesting, and the part that took
            the longest to get right. Instead of listing all three products and
            hoping people picked correctly, the journey routes them. Where you
            sit on the score, and what your report says, decides which product
            you are shown and how it is explained.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-6 overflow-hidden rounded-2xl"
            style={{ border: `1px solid ${INK}14` }}
          >
            <div className="grid gap-px md:grid-cols-3" style={{ background: LINE }}>
              {[
                [
                  "DRP",
                  "Debt Relief",
                  "For people already behind. Leads with relief and stopping the bleeding.",
                ],
                [
                  "DCP",
                  "Debt Consolidation",
                  "For people managing but stretched. Leads with one payment and lower interest.",
                ],
                [
                  "DEP",
                  "Debt Elimination",
                  "The new product. For people who want a route to clearing it entirely.",
                ],
              ].map(([code, name, d], i) => (
                <div
                  key={code}
                  className="p-6"
                  style={{ background: i === 2 ? ACCENT_BG : "#fff" }}
                >
                  <p
                    className="mb-1 font-serif text-2xl font-semibold"
                    style={{ color: i === 2 ? ACCENT : INK }}
                  >
                    {code}
                  </p>
                  <p
                    className="mb-2.5 font-sans text-[13px] tracking-[0.1em] uppercase"
                    style={{ color: i === 2 ? ACCENT : MUTED }}
                  >
                    {name}
                  </p>
                  <p
                    className="font-sans text-[14.5px] leading-snug"
                    style={{ color: i === 2 ? ACCENT : MUTED }}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl font-sans text-[15px] leading-relaxed"
            style={{ color: MUTED }}
          >
            Credit Insights was never meant to be the destination. It was the way
            into these funnels, built so the handover felt like help rather than
            a sales pitch.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <Row
              title="Where each route ends up"
              screens={[
                { src: drpMandate, label: "DRP · relief and protection", tall: true },
                { src: unlockedDcp, label: "DCP · one plan, lower interest", tall: true },
                { src: unlockedDep, label: "DEP · clear it yourself", tall: true },
                { src: drpProgram, label: "Enrolled · settlement tracker", tall: true },
              ]}
              width={134}
            />
          </motion.div>
        </Slide>

        {/* ═══ 8 — STRUCTURE / IA ═══ */}
        <Slide>
          <Eyebrow>Information architecture</Eyebrow>
          <H>Working out the order things should happen in</H>
          <P>
            Before any visual design, the PM and I argued about sequence. How
            much do we ask before showing value? When does the score appear? What
            does the home screen look like before someone has paid, and after?
          </P>
          <P>
            This is the flow we settled on. One path in, two real decision
            points, and named endings for the people who stop early — because
            no report found and not paying are both journeys somebody takes.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-4 overflow-x-auto rounded-2xl p-4 md:p-6"
            style={{ background: "#fff", border: `1px solid ${INK}14` }}
          >
            <IaDiagram className="min-w-[640px]" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-3xl font-sans text-[13.5px] leading-relaxed"
            style={{ color: MUTED }}
          >
            The two calls that took longest: putting the score before any debt
            talk, and keeping the locked and unlocked homes on the same skeleton
            so unlocking felt like the page filling in rather than a different
            app. Underneath all three routes sits one shared layer — credit
            report, the five score factors, account detail, disputes and the
            goal tracker.
          </motion.p>
        </Slide>

        {/* ═══ 9 — SKETCHES ═══ */}
        <Slide>
          <Eyebrow>Low fidelity</Eyebrow>
          <H>It started on paper</H>
          <P>
            I sketched every screen by hand first. It is quicker to throw away a
            drawing than a Figma file, and it stopped me falling in love with a
            layout before I knew whether the order made sense.
          </P>
          <P>
            Most of these got binned. The ones that survived did so because they
            answered a question we kept coming back to: at this exact moment,
            what does the person need to see next?
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-2">
            <ImagePlaceholder label="Paper sketches, set 1" aspectRatio="4/3" />
            <ImagePlaceholder label="Paper sketches, set 2" aspectRatio="4/3" />
          </motion.div>
        </Slide>

        {/* ═══ 10 — DESIGN SYSTEMS ═══ */}
        <Slide>
          <Eyebrow>Design systems</Eyebrow>
          <H>Three products, three design systems</H>
          <P>
            We were selling three things to three different people, in three
            different emotional states. One system would have made all three
            sound the same, and the wrong tone loses this audience in a single
            screen. So each product got its own colour, type, component
            behaviour, illustration style and voice.
          </P>

          <div className="mt-8 space-y-6">
            {SYSTEMS.map((s) => (
              <motion.div
                key={s.code}
                variants={fadeUp}
                className="grid items-center gap-6 rounded-[1.75rem] p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10"
                style={{ background: s.tint, border: `1px solid ${INK}0f` }}
              >
                {/* ── the system ── */}
                <div className="min-w-0">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <p
                        className="font-serif text-[2.6rem] font-semibold leading-none"
                        style={{ color: INK }}
                      >
                        {s.code}
                      </p>
                      <p
                        className="font-sans text-[12.5px] tracking-[0.14em] uppercase"
                        style={{ color: MUTED }}
                      >
                        {s.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {s.colours.map((c) => (
                        <span key={c} className="flex flex-col items-center gap-1">
                          <span
                            className="h-9 w-9 rounded-full"
                            style={{ background: c, border: `1px solid ${INK}1f` }}
                          />
                          <span
                            className="font-mono text-[9.5px] tracking-tight"
                            style={{ color: MUTED }}
                          >
                            {c}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <p
                    className="mb-5 font-sans text-[13.5px]"
                    style={{ color: MUTED }}
                  >
                    {s.swatchNote}
                  </p>

                  <dl className="mb-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {[
                      ["Who it is for", s.who],
                      ["Look and feel", s.feel],
                      ["Type", s.type],
                      ["Voice", s.language],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt
                          className="mb-1 font-sans text-[10.5px] tracking-[0.14em] uppercase"
                          style={{ color: ACCENT, opacity: 0.85 }}
                        >
                          {k}
                        </dt>
                        <dd
                          className="font-sans text-[13.6px] leading-snug"
                          style={{ color: INK }}
                        >
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div
                    className="mb-4 rounded-xl px-5 py-4"
                    style={{ background: "#fff", border: `1px solid ${INK}12` }}
                  >
                    <p
                      className="mb-1.5 font-sans text-[10.5px] tracking-[0.14em] uppercase"
                      style={{ color: MUTED }}
                    >
                      Same job, written for this person
                    </p>
                    <p
                      className="font-sans text-[14px] font-semibold"
                      style={{ color: INK }}
                    >
                      “{s.cta}”
                    </p>
                    <p className="font-sans text-[13.5px]" style={{ color: MUTED }}>
                      “{s.line}”
                    </p>
                  </div>

                  <p
                    className="font-sans text-[13.4px] leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {s.why}
                  </p>
                </div>

                {/* ── the screens ── */}
                <PhoneFan
                  screens={s.screens}
                  width={158}
                  step={0.58}
                  tint={null}
                  className="lg:w-[420px]"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl font-sans text-[15px] leading-relaxed"
            style={{ color: MUTED }}
          >
            DEP was brand new, so I built its system from nothing: palette, type
            scale, components, states and the rules for when to use what. DRP and
            DCP already existed, so the work there was keeping them internally
            consistent while making the jump between products feel deliberate
            rather than broken.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <Row
              title="Same skeleton, three different feelings"
              note="Identical structure. Different colour, weight, illustration and words."
              screens={[
                { src: lockedDrp, label: "DRP", tall: true },
                { src: lockedDcp, label: "DCP", tall: true },
                { src: lockedDep, label: "DEP", tall: true },
                { src: lockedOthers, label: "Web app · monitoring", tall: true },
              ]}
              width={140}
            />
          </motion.div>
        </Slide>

        {/* ═══ 11 — JOURNEY ═══ */}
        <Slide>
          <Eyebrow>The journey · DEP</Eyebrow>
          <H>Welcome to unlocked, in the order it happens</H>
          <P>
            This is the DEP path, the primary journey through the product.
            Everything below is the shipped design. Tap any screen to open it
            full size.
          </P>

          <motion.div variants={fadeUp} className="mb-10 mt-6">
            <PhoneFan screens={DEP_JOURNEY} />
          </motion.div>

          <Row
            title="01 · Arrive"
            note="One promise, one action. No debt talk yet."
            screens={[
              { src: splash, label: "Splash", tall: true },
              { src: welcome1, label: "Welcome · the problem" },
              { src: welcome2, label: "Welcome · the fix" },
              { src: landing, label: "Landing page" },
            ]}
          />

          <Row
            title="02 · Sign up"
            note="Name and mobile as per PAN, OTP, consent, then the bureau fetch."
            screens={[
              { src: signup, label: "Get started", tall: true },
              { src: otp, label: "Verify OTP", tall: true },
              { src: fetching, label: "Fetching your report" },
            ]}
          />

          <Row
            title="03 · Tell us about you"
            note="One question per screen, on a card stack, so nobody faces a form."
            screens={[
              { src: onbGoal, label: "Your financial goal" },
              { src: onbLoan, label: "What kind of loan" },
              { src: onbIncome, label: "Monthly income" },
              { src: welcomeAboard, label: "Welcome aboard" },
            ]}
            width={124}
          />

          <Row
            title="04 · Locked, then unlocked"
            note="Score free, reasons paid. The celebration screen exists because paying for a debt product should not feel like a receipt."
            screens={[
              { src: lockedDep, label: "Home, locked", tall: true },
              { src: paywallDep, label: "Paywall in context" },
              { src: coupon, label: "Coupon", tall: true },
              { src: celebrationDep, label: "Congratulations", tall: true },
              { src: unlockedDep, label: "Home, unlocked", tall: true },
            ]}
            width={118}
          />
        </Slide>

        {/* ═══ 12 — ANATOMY ═══ */}
        <Slide>
          <Eyebrow>Anatomy of one screen</Eyebrow>
          <H>Every block on the locked home had to earn its place</H>
          <P>
            This is the DRP locked home. It is the screen doing the most work in
            the whole product: it has to reveal the score, prove we have read
            their report, show what we could save them, and ask for money —
            without ever feeling like a sales page. Here is what each part is for.
          </P>
          <motion.div variants={fadeUp} className="mt-8">
            <AnnotatedScreen
              src={lockedDrp}
              alt="DRP locked home screen, annotated"
              width={238}
              notes={[
                {
                  at: 0.07,
                  title: "Credit score reveal",
                  body: "The one thing they came for, at the top, with a plain sentence next to it. A gauge on its own tells people nothing they can act on.",
                },
                {
                  at: 0.185,
                  title: "Three numbers, not twelve",
                  body: "Score, EMI burden and default risk. Everything else the bureau sent us collapses behind expandable rows.",
                },
                {
                  at: 0.335,
                  title: "Programme savings",
                  body: "Total outstanding, what you pay, what you save — their own figures from their own report, not a marketing range.",
                },
                {
                  at: 0.56,
                  title: "Protection before the sell",
                  body: "Harassment protection sits above the paywall on purpose. The most urgent thing for this user is the phone calls stopping.",
                },
                {
                  at: 0.88,
                  title: "The ask, priced against the gain",
                  body: "The subscription appears last, with the saving still on screen, so the ₹ ask is read next to the ₹ it unlocks.",
                },
              ]}
            />
          </motion.div>
        </Slide>

        {/* ═══ 13 — SCORE FACTORS / SPIDER ═══ */}
        <Slide>
          <Eyebrow>The part I am proudest of</Eyebrow>
          <H>Turning one number into five things you can act on</H>
          <P>
            A score is a single number, so people treat it like a verdict. But it
            is made of five things, and usually only one or two of them are the
            problem. I wanted someone to be able to look once and know which side
            of their credit life was dragging the rest down.
          </P>
          <P>
            So instead of one gauge, the score is drawn as five arcs sitting
            together, each with its own reading and its own impact weight. Seen
            side by side, the weak ones stand out immediately — and every arc is
            tappable, opening its own screen with the accounts behind it.
          </P>

          <motion.div variants={fadeUp} className="mt-8">
            <AnnotatedScreen
              src={reportScore}
              alt="Credit report screen with the five score factors, annotated"
              width={248}
              notes={[
                {
                  at: 0.075,
                  title: "The number, on a scale",
                  body: "300 to 900 underneath it, so the score has something to mean. A bare number is just a verdict.",
                },
                {
                  at: 0.22,
                  title: "What's shaping your score",
                  body: "The five factors as five arcs in one block. This is the part I am proudest of — you can see the shape of your credit life without reading anything.",
                },
                {
                  at: 0.40,
                  title: "Accounts, worst first",
                  body: "After testing I flipped the order so the accounts hurting the score sit above the healthy ones, with the reason printed on the row.",
                },
                {
                  at: 0.74,
                  title: "Payments due, in the same place",
                  body: "The one thing that changes the biggest factor is not missing the next payment. So it lives on this screen, not in a settings menu.",
                },
                {
                  at: 0.9,
                  title: "Disputes, next to the error",
                  body: "Bureau records are often wrong. Raising a dispute used to be buried, so it moved to sit beside the account it is about.",
                },
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <Row
              title="One screen per factor"
              note="Rating, why it matters, the impact weight, and the accounts responsible."
              screens={[
                { src: factorOntime, label: "On-time payments", tall: true },
                { src: factorUtil, label: "Credit utilisation", tall: true },
                { src: factorAge, label: "Credit age", tall: true },
                { src: factorMix, label: "Credit mix", tall: true },
                { src: factorEnq, label: "Enquiries", tall: true },
                { src: scoreDetail, label: "Score band explained" },
              ]}
              width={116}
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4">
            <Row
              title="DEP · locked state"
              note="The score and the factors are free. The reason behind them is what you pay for."
              screens={[
                { src: lockedDep, label: "Score visible, reasons locked", tall: true },
                { src: reportFull, label: "Full report, factors at the bottom", tall: true },
              ]}
              width={150}
            />
          </motion.div>
        </Slide>

        {/* ═══ 14 — LOCKED TO UNLOCKED ═══ */}
        <Slide>
          <Eyebrow>Paywall</Eyebrow>
          <H>Show the value before asking for anything</H>
          <P>
            The hardest screen was the locked home. Lock too much and it feels
            like a wall. Show too much and there is no reason to pay.
          </P>
          <P>
            What worked was making the locked state specific rather than vague.
            Not “unlock premium insights” but the actual number: this is what you
            could save, here is the account causing most of the damage, unlock to
            see the rest. Real information about your own situation, partly
            visible. The locked and unlocked homes share the same skeleton, so
            paying feels like the page filling in.
          </P>

          <Row
            title="DRP"
            note="Locked → paywall → congratulations → protection and mandate"
            screens={[
              { src: lockedDrp, label: "Locked", tall: true },
              { src: paywallDrp, label: "Paywall" },
              { src: celebrationDrp, label: "Congratulations", tall: true },
              { src: drpMandate, label: "Unlocked", tall: true },
            ]}
            width={130}
          />

          <Row
            title="DEP"
            note="The ask carries the number it unlocks"
            screens={[
              { src: lockedDep, label: "Locked", tall: true },
              { src: paywallDep, label: "Paywall" },
              { src: celebrationDep, label: "Congratulations", tall: true },
              { src: unlockedDep, label: "Unlocked", tall: true },
            ]}
            width={130}
          />

          <Row
            title="DCP and monitoring"
            note="Same structure, quieter language, no red"
            screens={[
              { src: lockedDcp, label: "Locked", tall: true },
              { src: paywallOthers, label: "Paywall" },
              { src: unlockedDcp, label: "Unlocked", tall: true },
              { src: lockedOthers, label: "Web app, locked", tall: true },
            ]}
            width={130}
          />
        </Slide>

        {/* ═══ 15 — COPY ═══ */}
        <Slide>
          <Eyebrow>Content design</Eyebrow>
          <H>Every line was written for a specific person</H>
          <P>
            Debt is embarrassing. The wrong word makes someone close the app and
            never come back. So the copy changed by segment, not just the layout.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-6 overflow-hidden rounded-2xl"
            style={{ border: `1px solid ${INK}14` }}
          >
            {[
              ["New to credit", "You are just getting started. Here is how to build from zero."],
              ["Managing, stretched", "You are on top of it. Here is how to pay less interest doing it."],
              ["Falling behind", "This is fixable. Here is the first thing to sort out."],
              ["Deep in it", "You have options you probably have not been told about."],
            ].map(([seg, line], i) => (
              <div
                key={seg}
                className="grid gap-1 px-6 py-4 md:grid-cols-[220px_1fr] md:gap-6"
                style={{ background: i % 2 ? PAPER : "#fff" }}
              >
                <p className="font-sans text-[14px] font-semibold" style={{ color: ACCENT }}>
                  {seg}
                </p>
                <p className="font-sans text-[15px] leading-snug" style={{ color: INK }}>
                  {line}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl font-sans text-[15px] leading-relaxed"
            style={{ color: MUTED }}
          >
            Same product, same screen structure. Only the words change, and they
            change what the screen feels like completely.
          </motion.p>
        </Slide>

        {/* ═══ 16 — TESTING ═══ */}
        <Slide>
          <Eyebrow>Usability testing</Eyebrow>
          <H>What testing told us we had got wrong</H>
          <P>
            We put the prototype in front of users before launch. Two things
            broke, and both were things I had been confident about.
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              [
                "The paywall was floating",
                "People hit it and did not understand why they were being asked to pay right there. It was not attached to anything they cared about. I rebuilt it so it appears in context, next to the specific insight it unlocks, with their own numbers on it.",
              ],
              [
                "The credit report page was a data dump",
                "We showed everything the bureau gave us. Users scrolled, went quiet, and could not tell us what was wrong with their score. I restructured it to lead with the accounts hurting them most, and pushed the full detail below.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-6"
                style={{ background: PAPER, border: `1px solid ${INK}14` }}
              >
                <p className="mb-2 font-sans text-[15.5px] font-bold" style={{ color: INK }}>
                  {t}
                </p>
                <p className="font-sans text-[14.5px] leading-relaxed" style={{ color: MUTED }}>
                  {d}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Row
              title="After"
              note="Context-led paywall, and a report that leads with the damage"
              screens={[
                { src: paywall199, label: "Paywall, in context" },
                { src: paywallDep, label: "Priced against the saving" },
                { src: reportFull, label: "Report, restructured", tall: true },
                { src: accounts, label: "Accounts, flagged first", tall: true },
                { src: dispute, label: "Raise a dispute", tall: true },
              ]}
              width={124}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ImagePlaceholder
              label="Add the before shots from the earlier prototype"
              className="w-full max-w-3xl"
              aspectRatio="16/9"
            />
          </motion.div>
        </Slide>

        {/* ═══ 17 — SCREENS ═══ */}
        <Slide>
          <Eyebrow>What shipped</Eyebrow>
          <H>100+ screens, because there is no such thing as one happy path</H>
          <P>
            Five segment journeys, each with its own eligible and ineligible
            branch, a locked and an unlocked state, empty states, error states,
            no-credit-history states, coupon retries, and the same flow again for
            the web app. Every one of those is somebody&apos;s actual first
            impression, so every one got designed rather than defaulted.
          </P>

          <Row
            title="Goal tracking"
            note="A target, a projection, and the disclaimer attached to it"
            screens={[
              { src: goalScore, label: "Improve my score", tall: true },
              { src: goalLoan, label: "Get a loan", tall: true },
              { src: depGoals, label: "Pick a goal" },
            ]}
            width={132}
          />

          <Row
            title="DEP · the product I built the system for"
            note="Calculator, planner, payoff schedule, and choosing which creditors to attack"
            screens={[
              { src: depCalc, label: "Savings calculator", tall: true },
              { src: depPlanner, label: "Monthly planner", tall: true },
              { src: depSchedule, label: "Payoff schedule", tall: true },
              { src: depCreditors, label: "Customise creditors" },
            ]}
            width={132}
          />

          <Row
            title="Edges nobody asks for and everybody hits"
            note="Not eligible, monitoring only, the web app, and life after enrolment"
            screens={[
              { src: ineligible, label: "Not eligible", tall: true },
              { src: othersHome, label: "Monitoring only" },
              { src: lockedOthers, label: "Web app", tall: true },
              { src: drpProgram, label: "After enrolment", tall: true },
              { src: depSchedule, label: "Payoff schedule", tall: true },
            ]}
            width={124}
          />
        </Slide>

        {/* ═══ 18 — REFLECTION ═══ */}
        <Slide>
          <Eyebrow>Reflection</Eyebrow>
          <H>What I would do differently</H>
          <P>
            I designed the segmentation from what the credit report told us about
            people. That was the fastest route and it worked, but it meant the
            groups were built from data rather than from conversations. If I
            started again I would talk to a handful of people in each group
            before deciding the groups exist.
          </P>
          <P>
            The other thing I got late was the paywall. I treated it as a screen
            near the end of the flow, when it is really the moment the whole
            product either earns trust or loses it. I would design that moment
            first next time, and build the journey backwards from it.
          </P>
          <P>
            Three design systems was the right call for the users and an
            expensive one for the team. It only stayed maintainable because the
            structure underneath was shared. If the products keep multiplying, the
            honest next move is one system with three themes, not four systems.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-2xl px-7 py-6"
            style={{ background: ACCENT_BG, borderLeft: `4px solid ${ACCENT}` }}
          >
            <p
              className="max-w-3xl font-serif text-xl leading-snug md:text-[1.45rem]"
              style={{ color: INK }}
            >
              The thing I am proudest of is not a screen. It is that the product
              stopped treating everyone the same, and started telling people
              something true about their own situation.
            </p>
          </motion.div>
        </Slide>
      </div>

      {/* Bottom nav */}
      <div className="flex flex-shrink-0 items-center justify-center gap-2.5 py-3.5">
        <button
          onClick={() => scrollToSlide(current - 1)}
          disabled={current === 0}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-20"
          style={{ borderColor: LINE }}
        >
          <ChevronLeft className="h-4 w-4" style={{ color: INK }} />
        </button>
        <div className="mx-2 flex items-center gap-1.5">
          {SECTIONS.map((s, i) => (
            <button
              key={s}
              onClick={() => scrollToSlide(i)}
              aria-label={s}
              className="rounded-full transition-all"
              style={
                current === i
                  ? { width: 24, height: 8, background: INK }
                  : { width: 8, height: 8, background: `${INK}30` }
              }
            />
          ))}
        </div>
        <button
          onClick={() => scrollToSlide(current + 1)}
          disabled={current === total - 1}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-20"
          style={{ borderColor: LINE }}
        >
          <ChevronRight className="h-4 w-4" style={{ color: INK }} />
        </button>
      </div>
    </div>
  );
};

export default CreditInsightsSlider;
