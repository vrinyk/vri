import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown, ArrowLeft, ArrowRight, BadgeCheck, Brain, CalendarClock, Check, Code2, Eye, Gauge, HandCoins,
  Landmark, Languages, Lock, MessagesSquare, Mic, PenTool, Route, Search, Sparkles, TrendingDown, Users, Wallet,
} from "lucide-react";
import * as A from "./assets";
import chatgptLogo from "../../../assets/tools/chatgpt.webp";
import claudeLogo from "../../../assets/tools/claude.webp";
import { Phone, Zoom } from "./ui";

/* ── Tokens ─────────────────────────────────────────────────────
   Off-white paper, near-black ink, grey second lines, one accent.
   Headlines in Inter Tight, notes in Caveat. */
const PAPER = "#fbfaf8";
const INK = "#121417";
const GREY = "#6b7280";
const SOFT = "#9aa1ad";
const ACCENT = "#e2601a"; // FREED orange, the EMI Score brand colour
const NAVY = "#02416e";
const TINT = "#f1f4f8";
const RED = "#d9433a";
const GREEN = "#2e9d5b";
const DISPLAY = "'Inter Tight', 'Helvetica Neue', Arial, sans-serif";
const BODY = "'Inter', 'Helvetica Neue', Arial, sans-serif";
const HAND = "'Caveat', cursive";

/* ── Building blocks ───────────────────────────────────────── */

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "", id, tint = false }: { children: React.ReactNode; className?: string; id?: string; tint?: boolean }) => (
  <section id={id} className={`px-5 py-20 md:px-10 md:py-28 ${className}`} style={{ background: tint ? TINT : undefined }}>
    <div className="mx-auto w-full max-w-[1180px]">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] md:text-[14px]" style={{ color: GREY, fontFamily: BODY }}>
    {children}
  </p>
);

/** Two-line headline: ink first line, grey second line. */
const Headline = ({ one, two, size = "lg", center = false }: { one: React.ReactNode; two?: React.ReactNode; size?: "lg" | "xl" | "md"; center?: boolean }) => {
  const s = size === "xl" ? "text-[3.2rem] md:text-[6.4rem]" : size === "md" ? "text-[2rem] md:text-[2.9rem]" : "text-[2.5rem] md:text-[4.2rem]";
  return (
    <h2 className={`${s} font-bold leading-[1.02] tracking-[-0.035em] ${center ? "text-center" : ""}`} style={{ fontFamily: DISPLAY, color: INK }}>
      {one}
      {two && (
        <>
          <br />
          <span style={{ color: GREY }}>{two}</span>
        </>
      )}
    </h2>
  );
};

const Lead = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`mt-5 max-w-[620px] text-[17px] leading-[1.6] md:text-[19px] ${className}`} style={{ color: GREY, fontFamily: BODY }}>
    {children}
  </p>
);

/** Handwritten aside with a drawn arrow. */
const Note = ({ children, dir = "down-left", className = "" }: { children: React.ReactNode; dir?: "down-left" | "down-right" | "right" | "down"; className?: string }) => {
  const paths: Record<string, string> = {
    "down-left": "M150 6 C 160 40, 120 52, 60 62 C 40 66, 22 70, 10 78 M10 78 l12 -2 M10 78 l4 -11",
    "down-right": "M10 6 C 0 40, 40 52, 100 62 C 120 66, 138 70, 150 78 M150 78 l-12 -2 M150 78 l-4 -11",
    right: "M4 30 C 40 10, 90 10, 150 30 M150 30 l-12 -6 M150 30 l-10 8",
    down: "M60 4 C 80 30, 40 50, 60 76 M60 76 l-8 -9 M60 76 l9 -7",
  };
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <p className="text-[24px] leading-none md:text-[28px]" style={{ fontFamily: HAND, color: NAVY }}>{children}</p>
      <svg width="160" height="84" viewBox="0 0 160 84" fill="none" className="mt-1">
        <path d={paths[dir]} stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/** iPhone-style body for hero shots. */
const IPhone = ({ src, alt, width = 300, tall = false, tilt = 0 }: { src: string; alt: string; width?: number; tall?: boolean; tilt?: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt}`}
        className="relative block shrink-0 rounded-[3rem] bg-[linear-gradient(145deg,#e6e8eb,#9ea3aa_25%,#d9dce0_50%,#878c94_78%,#d0d3d7)] p-[3px] shadow-[0_40px_70px_-25px_rgba(18,20,23,0.45)] transition-transform duration-500 hover:-translate-y-1"
        style={{ width, height: Math.round(((width - 24) * 875) / 414) + 24, transform: `rotate(${tilt}deg)`, maxWidth: "80vw" }}
      >
        <span className="block h-full w-full rounded-[2.85rem] bg-[#0b0c0f] p-[9px]">
          <span className={`relative block h-full w-full rounded-[2.3rem] bg-white ${tall ? "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "overflow-hidden"}`}>
            <img src={src} alt={alt} className={tall ? "block w-full" : "block h-full w-full object-cover object-top"} />
          </span>
        </span>
        <span className="absolute left-1/2 top-[14px] h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </button>
      {open && <Zoom src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
};

/** Dotted pointer from a mockup to its label. */
const Pointer = ({ side = "left", width = 80 }: { side?: "left" | "right"; width?: number }) => (
  <span aria-hidden className="hidden items-center lg:flex" style={{ width, flexDirection: side === "left" ? "row" : "row-reverse" }}>
    <span className="h-0 flex-1 border-t-[2px] border-dotted" style={{ borderColor: `${NAVY}80` }} />
    <span className="h-2 w-2 rounded-full" style={{ background: NAVY }} />
  </span>
);

const Callout = ({ title, body, side = "left" }: { title: string; body: string; side?: "left" | "right" }) => (
  <div className={`flex items-center gap-3 ${side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
    <div className={`max-w-[260px] ${side === "left" ? "lg:text-right" : ""}`}>
      <p className="text-[19px] font-bold leading-tight tracking-[-0.01em]" style={{ fontFamily: DISPLAY, color: INK }}>{title}</p>
      <p className="mt-1.5 text-[15px] leading-[1.5]" style={{ color: GREY, fontFamily: BODY }}>{body}</p>
    </div>
    <Pointer side={side} />
  </div>
);

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="40" height="14" viewBox="0 0 40 14" fill="none" className={`shrink-0 ${className}`} aria-hidden>
    <path d="M1 7h36M31 1l6 6-6 6" stroke={SOFT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold" style={{ color: INK, boxShadow: `inset 0 -3px 0 ${ACCENT}99` }}>{children}</span>
);

/* ════════════════ PAGE ════════════════ */

export default function EmiScoreStory() {
  return (
    <main style={{ background: PAPER, fontFamily: BODY, color: INK }} className="overflow-x-clip">
      <Hero />
      <Glimpse />
      <Problem />
      <WhyItHappens />
      <TwoScores />
      <Gaps />
      <MyPart />
      <FirstDraftReview />
      <Direction />
      <Research />
      <WorkBefore />
      <BackToPeople />
      <StillMissed />
      <TooHappy />
      <FinalCarousel />
      <AskSection />
      <VerdictSection />
      <ExplainSection />
      <WayOutSection />
      <Motion />
      <AiSection />
      <Handoff />
      <Next />
    </main>
  );
}

/* ── 1 · Hero ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-5 pb-16 pt-28 md:px-10 md:pt-32">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <Reveal>
          <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.18em]" style={{ color: GREY }}>FREED · Product, UX writing & research</p>
          <h1 className="text-[4rem] font-bold leading-[0.95] tracking-[-0.045em] md:text-[7.2rem]" style={{ fontFamily: DISPLAY, color: INK }}>
            EMI<br />Score<span style={{ color: ACCENT }}>.</span>
          </h1>
          <p className="mt-7 text-[20px] leading-[1.45] md:text-[24px]" style={{ color: GREY }}>
            Before the next loan, a reality check.
            <br />
            The number, the verdict, and the way out.
          </p>
          <a href="#glimpse" className="mt-9 inline-flex items-center gap-3 border-b-2 pb-2 text-[18px] font-semibold" style={{ borderColor: ACCENT, color: INK, fontFamily: DISPLAY }}>
            Inside the project <ArrowDown className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="relative flex justify-center lg:justify-end">
          <Note dir="down-right" className="absolute -left-6 top-6 z-10 hidden md:block">should I take<br />another loan?</Note>
          <img src={A.emiLogo} alt="" aria-hidden className="absolute -left-4 bottom-16 hidden w-[190px] rotate-[-8deg] drop-shadow-xl md:block" />
          <IPhone src={A.finalScore} alt="EMI Score result: 29, Very Low" width={300} tall tilt={4} />
        </div>
      </div>
      <div className="mx-auto mt-16 grid w-full max-w-[1180px] grid-cols-2 gap-y-6 md:grid-cols-5">
        {[
          ["My role", "Product design"],
          ["The scope", "Sign up ↗ Solution"],
          ["The team", "2 PMs · Me · Eng"],
          ["The journey", "3 weeks"],
          ["Tested with", "● 22 people"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[15px]" style={{ color: GREY }}>{k}</p>
            <p className="mt-1.5 text-[19px] font-bold" style={{ fontFamily: DISPLAY, color: INK }}>
              {v.startsWith("●") ? (<><span style={{ color: ACCENT }}>●</span>{v.slice(1)}</>) : v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 2 · Glimpse ──────────────────────────────────────────── */

function Glimpse() {
  return (
    <Section id="glimpse" className="!pt-10">
      <Reveal>
        <Headline one="Your next loan." two="Now with a verdict." center />
      </Reveal>
      <div className="mt-14 flex flex-wrap items-end justify-center gap-8 md:gap-16">
        <Reveal><IPhone src={A.finalSignup} alt="Introducing EMI Score" width={250} tilt={-3} /></Reveal>
        <Reveal delay={0.1}><IPhone src={A.finalScore} alt="EMI Score verdict" width={280} tall /></Reveal>
        <Reveal delay={0.2}><IPhone src={A.finalEmiBurden} alt="EMI burden explained with voice" width={250} tilt={3} /></Reveal>
      </div>
      <div className="mt-10 flex justify-center">
        <Note dir="down-left">a glimpse now. the whole story below.</Note>
      </div>
    </Section>
  );
}

/* ── 3 · Problem ──────────────────────────────────────────── */

function Problem() {
  return (
    <Section tint>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>The problem · what borrowers told me</Eyebrow>
          <Headline one="Borrowing felt easy." two="Repaying didn't." />
          <Lead>People came to FREED after the EMIs had already piled up. Nobody had asked them, before the loan, if they could afford one more.</Lead>
          <p className="mt-8 text-[30px] leading-tight md:text-[34px]" style={{ fontFamily: HAND, color: NAVY }}>
            "Main abhi ek aur loan le sakta hoon ya nahi?"
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <img src={A.ill29} alt="A worried borrower looking at an EMI Score of 29" className="w-full rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(2,65,110,0.6)]" />
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 4 · Why it happens ───────────────────────────────────── */

const FLOW = [
  { icon: HandCoins, n: "01", t: "Need money", d: "" },
  { icon: Landmark, n: "02", t: "Bank checks CIBIL", d: "Your past. Did you repay?", hi: true },
  { icon: BadgeCheck, n: "03", t: "Loan approved", d: "" },
  { icon: CalendarClock, n: "04", t: "One more EMI", d: "Added to the pile." },
  { icon: TrendingDown, n: "05", t: "Salary runs out", d: "Before the month does." },
];

function WhyItHappens() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Why it felt that way</Eyebrow>
        <Headline one="Approved on your past." two="Repaid from your future." />
      </Reveal>
      <div className="hide-scrollbar -mx-5 mt-16 overflow-x-auto px-5">
        <div className="flex min-w-[880px] items-start justify-between">
          {FLOW.map((f, i) => (
            <div key={f.n} className="flex items-start">
              <Reveal delay={i * 0.08} className="flex w-[150px] flex-col items-center text-center">
                <span
                  className="flex h-24 w-24 items-center justify-center rounded-full"
                  style={{ background: f.hi ? "#e8eef8" : "#fff", boxShadow: f.hi ? `0 0 0 10px #e8eef880` : "0 10px 30px -18px rgba(18,20,23,.35)" }}
                >
                  <f.icon className="h-10 w-10" strokeWidth={1.4} style={{ color: f.hi ? NAVY : INK }} />
                </span>
                <p className="mt-6 text-[15px]" style={{ color: GREY }}>{f.n}</p>
                <p className="mt-1 text-[19px] font-bold leading-tight" style={{ fontFamily: DISPLAY }}>{f.t}</p>
                {f.d && <p className="mt-2 text-[15px] leading-snug" style={{ color: GREY }}>{f.d}</p>}
                {f.hi && <span className="mt-3 h-[3px] w-14 rounded-full" style={{ background: NAVY }} />}
              </Reveal>
              {i < FLOW.length - 1 && <Arrow className="mt-10" />}
            </div>
          ))}
        </div>
      </div>
      <Reveal>
        <p className="mt-16 text-center text-[22px] leading-[1.5] md:text-[28px]" style={{ color: GREY, fontFamily: DISPLAY }}>
          CIBIL checks <Underline>your past.</Underline>
          <br />
          Nobody checks <Underline>your next EMI.</Underline>
        </p>
      </Reveal>
    </Section>
  );
}

/* ── 5 · Two scores ───────────────────────────────────────── */

function TwoScores() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>The core design problem</Eyebrow>
        <Headline one="Two scores." two="One would be ignored." />
      </Reveal>
      <div className="mt-14 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <p className="text-[15px]" style={{ color: GREY }}>Credit score · what people already know</p>
          <p className="mt-2 text-[26px] font-bold" style={{ fontFamily: DISPLAY, color: GREY }}>Looks back.</p>
          <svg viewBox="0 0 220 220" className="mx-auto mt-6 w-[220px]" role="img" aria-label="A credit score ring reading 650 out of 900">
            <circle cx="110" cy="110" r="88" fill="none" stroke="#e5e7eb" strokeWidth="16" />
            <circle cx="110" cy="110" r="88" fill="none" stroke="#9ca3af" strokeWidth="16" strokeDasharray={`${0.58 * 553} 553`} strokeLinecap="round" transform="rotate(-90 110 110)" />
            <text x="110" y="112" textAnchor="middle" fontFamily="Inter Tight, Arial" fontSize="44" fontWeight="700" fill="#6b7280">650</text>
            <text x="110" y="140" textAnchor="middle" fontFamily="Inter, Arial" fontSize="14" fill="#9ca3af">out of 900</text>
          </svg>
          <p className="mt-6 text-[16px]" style={{ color: GREY }}>A ring. A grade. Read once, then forgotten.</p>
        </Reveal>
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none" className="mx-auto hidden md:block" aria-hidden>
          <path d="M2 24 C 30 4, 55 4, 84 20" stroke={NAVY} strokeWidth="1.6" strokeDasharray="4 5" />
          <path d="M84 20 l-10 -1 M84 20 l-5 8" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Reveal delay={0.1}>
          <p className="text-[15px]" style={{ color: GREY }}>EMI Score · what I designed</p>
          <p className="mt-2 text-[26px] font-bold" style={{ fontFamily: DISPLAY }}>Looks ahead.</p>
          <div className="mx-auto mt-6 w-full max-w-[380px] rounded-[1.6rem] bg-white p-5 shadow-[0_24px_50px_-28px_rgba(18,20,23,0.4)]">
            <img src={A.emiLogo} alt="EMI Score logo" className="mx-auto w-[150px]" />
            <div className="mt-3 flex items-baseline justify-center gap-2">
              <span className="text-[52px] font-bold leading-none" style={{ fontFamily: DISPLAY, color: NAVY }}>29</span>
              <span className="text-[15px]" style={{ color: GREY }}>out of 100</span>
            </div>
            <p className="mx-auto mt-3 w-max rounded-md px-3 py-1 text-[13px] font-bold tracking-wide text-white" style={{ background: RED }}>DON'T TAKE A LOAN</p>
          </div>
          <p className="mt-6 text-[16px]" style={{ color: GREY }}>A speedometer. A verdict. Something to act on.</p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 6 · Gaps ─────────────────────────────────────────────── */

function GapArt({ k }: { k: number }) {
  const card = "rounded-2xl bg-white px-4 py-3 shadow-[0_12px_28px_-18px_rgba(18,20,23,.45)]";
  if (k === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <Lock className="h-12 w-12" strokeWidth={1.3} style={{ color: NAVY }} />
        <div className={`${card} flex w-[200px] items-center justify-between text-[18px] font-semibold`} style={{ fontFamily: DISPLAY }}>
          <span>₹ <span style={{ color: SOFT }}>• • • • •</span></span><span className="text-[12px] font-normal" style={{ color: SOFT }}>/month</span>
        </div>
      </div>
    );
  if (k === 1)
    return (
      <svg viewBox="0 0 200 120" className="w-[200px]" aria-hidden>
        <path d="M20 105 A80 80 0 0 1 180 105" fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
        <path d="M20 105 A80 80 0 0 1 52 41" fill="none" stroke={RED} strokeWidth="14" strokeLinecap="round" />
        <text x="100" y="100" textAnchor="middle" fontFamily="Inter Tight, Arial" fontSize="46" fontWeight="700" fill={NAVY}>29?</text>
      </svg>
    );
  if (k === 2)
    return (
      <div className={`${card} w-[210px] space-y-2.5`}>
        {[["EMI burden", "90%", RED, 90], ["Savings", "2%", RED, 6], ["Credit", "650", "#e8a23a", 55]].map(([l, v, c, w]) => (
          <div key={l as string}>
            <div className="flex justify-between text-[12px]" style={{ color: GREY }}><span>{l as string}</span><span className="font-bold" style={{ color: INK }}>{v as string}</span></div>
            <div className="mt-1 h-1.5 rounded-full bg-[#eef0f3]"><div className="h-full rounded-full" style={{ width: `${w}%`, background: c as string }} /></div>
          </div>
        ))}
        <p className="pt-1 text-center text-[22px]" style={{ fontFamily: HAND, color: NAVY }}>but how?</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-4">
      <Route className="h-12 w-12" strokeWidth={1.3} style={{ color: NAVY }} />
      <div className={`${card} flex items-center gap-2 text-[16px] font-semibold`} style={{ fontFamily: DISPLAY }}>
        So what now? <ArrowRight className="h-4 w-4" style={{ color: ACCENT }} />
      </div>
    </div>
  );
}

const GAPS = [
  { tag: "Trust", q: "Why should I tell you my salary?" },
  { tag: "Meaning", q: "What does 29 even mean?" },
  { tag: "Belief", q: "How did you calculate this?" },
  { tag: "Action", q: "Okay. So what do I do now?" },
];

function Gaps() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Pain points from interviews</Eyebrow>
        <Headline one="Four gaps in confidence." />
      </Reveal>
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {GAPS.map((g, i) => (
          <Reveal key={g.tag} delay={i * 0.08} className="text-center">
            <div className="mx-auto flex aspect-[4/3] w-full max-w-[280px] items-center justify-center rounded-[1.75rem]" style={{ background: TINT }}>
              <GapArt k={i} />
            </div>
            <p className="mt-6 text-[15px]" style={{ color: GREY }}>0{i + 1} · {g.tag}</p>
            <p className="mt-2 text-[21px] font-bold leading-tight" style={{ fontFamily: DISPLAY }}>{g.q}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ── 7 · My part ──────────────────────────────────────────── */

const DID = [
  { icon: Search, t: "Market research", d: "Apps tier 2–3 users trust" },
  { icon: Route, t: "User flow", d: "Sign up → score → solution" },
  { icon: PenTool, t: "UI & visuals", d: "Score, verdicts, logo" },
  { icon: Languages, t: "Copy ×3", d: "English, हिंदी, Hinglish" },
  { icon: MessagesSquare, t: "Testing", d: "Interviews + 22 sessions" },
  { icon: Code2, t: "Handoff", d: "Specs + 40 events" },
];

function MyPart() {
  return (
    <Section tint>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <Eyebrow>My role</Eyebrow>
          <Headline one="Three weeks." two="Two PMs. One designer." />
          <Lead>A new requirement with a PRD and a reference concept. Everything from flow to final pixel was mine.</Lead>
          <div className="mt-10 space-y-5">
            {[
              ["Week 1", "Brief · research · brainstorm · draft 1"],
              ["Week 2", "Interviews · draft 2 · 22 usability tests"],
              ["Week 3", "Draft 3 · review · handoff"],
            ].map(([w, d], i) => (
              <div key={w} className="flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ background: i === 1 ? ACCENT : INK }}>{i + 1}</span>
                <div>
                  <p className="text-[18px] font-bold" style={{ fontFamily: DISPLAY }}>{w}</p>
                  <p className="text-[15px]" style={{ color: GREY }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {DID.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_14px_34px_-24px_rgba(18,20,23,0.4)]">
                <d.icon className="h-8 w-8" strokeWidth={1.5} style={{ color: ACCENT }} />
                <p className="mt-6 text-[18px] font-bold leading-tight" style={{ fontFamily: DISPLAY }}>{d.t}</p>
                <p className="mt-1 text-[14px]" style={{ color: GREY }}>{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 8 · First draft review ───────────────────────────────── */

function FirstDraftReview() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Where it started</Eyebrow>
        <Headline one="Could people get the answer?" />
        <Lead>I put the PM's concept and my first draft in front of users and asked one thing: what does this score mean to you?</Lead>
      </Reveal>
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
        <div className="flex items-start justify-center gap-4 sm:gap-6">
          <div className="text-center">
            <Phone src={A.pmReport} alt="PM concept: report card" width={150} tall />
            <p className="mt-3 text-[14px]" style={{ color: GREY }}>PM concept</p>
          </div>
          <div className="text-center">
            <Phone src={A.v1Result} alt="My first draft: one long result page" width={150} tall />
            <p className="mt-3 text-[14px]" style={{ color: GREY }}>My draft 1</p>
          </div>
        </div>
        <div className="space-y-10">
          {[
            ["A number, no verdict", "\"Looks like we are saving 29 bucks out of 100.\""],
            ["It looked like CIBIL", "A ring score. People read it as a grade."],
            ["Finance words", "FOIR and EMI load meant nothing to them."],
            ["The way out was lost", "\"No connectivity in the screens.\" Nobody scrolled to the plan."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <span className="mt-3 hidden h-0 w-16 border-t-[2px] border-dotted lg:block" style={{ borderColor: `${NAVY}80` }} />
                <div>
                  <p className="text-[24px] font-bold leading-tight tracking-[-0.02em] md:text-[28px]" style={{ fontFamily: DISPLAY }}>{t}</p>
                  <p className="mt-2 text-[17px] leading-[1.5]" style={{ color: GREY }}>{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 9 · Design direction ─────────────────────────────────── */

function Direction() {
  return (
    <section className="px-5 md:px-10">
      <Reveal className="mx-auto w-full max-w-[1180px] md:p-14">
        <div className="rounded-[2rem] p-8 md:p-14" style={{ background: TINT }}>
          <Eyebrow>The design direction</Eyebrow>
          <Headline one="Give the verdict," two="not just the number." size="md" />
          <p className="mt-5 max-w-[640px] text-[18px] leading-[1.6]" style={{ color: GREY }}>Earn trust first, ask for little, answer in plain words, and always end on a way out.</p>
          <div className="relative mt-12 grid gap-10 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-[6px] hidden border-t-[2px] border-dotted md:block" style={{ borderColor: `${NAVY}55` }} />
            {[
              ["Introduce", "Show both outcomes", "Before asking anything."],
              ["Ask", "Two round numbers", "Salary, then EMIs + expenses."],
              ["Answer", "A verdict, in colour", "Number, meaning, reasons."],
              ["Act", "A way out", "The right FREED program."],
            ].map(([k, t, d]) => (
              <div key={k} className="relative">
                <span className="relative z-10 block h-3.5 w-3.5 rounded-full" style={{ background: NAVY }} />
                <p className="mt-6 text-[16px]" style={{ color: NAVY }}>{k}</p>
                <p className="mt-2 text-[22px] font-bold leading-tight" style={{ fontFamily: DISPLAY }}>{t}</p>
                <p className="mt-2 text-[16px]" style={{ color: GREY }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t pt-6 text-[17px]" style={{ borderColor: "#dfe3ea", color: GREY }}>
            Explain every factor along the way, in the user's own language.
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── 10 · Research ────────────────────────────────────────── */

function Research() {
  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Market research</Eyebrow>
          <Headline one="I borrowed ideas" two="from apps they trust." />
          <div className="mt-10 space-y-4">
            {["One question per screen", "Trust chips before the ask", "Language switch on every screen", "Illustrations over paragraphs", "Round numbers, never exact"].map((t) => (
              <p key={t} className="flex items-center gap-3 text-[19px]" style={{ color: INK }}>
                <Check className="h-5 w-5 shrink-0" style={{ color: NAVY }} strokeWidth={2.4} /> {t}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative flex justify-center gap-6">
          <Note dir="down" className="absolute -top-20 right-0 hidden md:block">lending & gold-loan apps</Note>
          <Phone src={A.mrGold1} alt="Reference: gold-loan app" width={180} />
          <div className="mt-12"><Phone src={A.mrGold2} alt="Reference: lending app" width={180} /></div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 11 · Work before it worked ───────────────────────────── */

function GreyRow({ label, items, width = 130 }: { label: string; items: { src: string; alt: string; tall?: boolean }[]; width?: number }) {
  return (
    <div>
      <p className="mb-4 text-[15px] font-semibold uppercase tracking-[0.06em]" style={{ color: GREY }}>{label}</p>
      <div className="hide-scrollbar -mx-5 overflow-x-auto px-5 pb-2">
        <div className="flex w-max items-end gap-5 grayscale transition-[filter] duration-500 hover:grayscale-0">
          {items.map((s) => (
            <Phone key={s.alt} src={s.src} alt={s.alt} width={width} tall={s.tall} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkBefore() {
  return (
    <Section>
      <Reveal>
        <Headline one="Work before it worked." />
        <Lead>Three drafts, five user segments, eight loader frames. I dropped an accordion of explanations, a dark "trading app" gauge and savings asked as ranges.</Lead>
      </Reveal>
      <div className="mt-14 space-y-12">
        <Reveal><GreyRow label="Draft 1" items={[{ src: A.v11, alt: "Draft 1 welcome" }, { src: A.v12, alt: "Draft 1 sign up" }, { src: A.v14, alt: "Draft 1 salary" }, { src: A.v15, alt: "Draft 1 savings ranges" }, { src: A.v16, alt: "Draft 1 loader" }, { src: A.v1Result, alt: "Draft 1 result", tall: true }]} /></Reveal>
        <Reveal><GreyRow label="Draft 2 · tested" items={[{ src: A.v2Landing, alt: "Draft 2 intro" }, { src: A.v2Income, alt: "Draft 2 salary" }, { src: A.v2Expenses, alt: "Draft 2 expenses" }, { src: A.v2SavingsPicked, alt: "Draft 2 savings" }, { src: A.v2Score, alt: "Draft 2 score" }, { src: A.v2Means, alt: "Draft 2 meaning" }]} /></Reveal>
        <Reveal><GreyRow label="Loader storyboard" width={96} items={[A.loader1, A.loader2, A.loader3, A.loader4, A.loader5, A.loader6, A.loader7, A.loader8].map((s, i) => ({ src: s, alt: `Loader frame ${i + 1}` }))} /></Reveal>
      </div>
      <p className="mt-6 text-[26px]" style={{ fontFamily: HAND, color: NAVY }}>hover to bring them back to colour →</p>
    </Section>
  );
}

/* ── 12 · Back to people ──────────────────────────────────── */

function BackToPeople() {
  return (
    <Section>
      <div className="relative">
        <Reveal>
          <Eyebrow>Before handoff · usability testing</Eyebrow>
          <Headline one="Back to people." two="Not just my assumptions." />
          <p className="mt-6 text-[17px]" style={{ color: GREY }}>22 participants <span className="mx-3 opacity-40">|</span> ~2 min each <span className="mx-3 opacity-40">|</span> In-person</p>
        </Reveal>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex items-end gap-5">
            <Gauge className="mb-6 h-16 w-16 shrink-0" strokeWidth={1.2} style={{ color: ACCENT }} />
            <div>
              <p className="leading-none tracking-[-0.05em]" style={{ fontFamily: DISPLAY }}>
                <span className="text-[120px] font-bold md:text-[150px]" style={{ color: INK }}>14</span>
                <span className="text-[80px] font-medium md:text-[100px]" style={{ color: SOFT }}> / 22</span>
              </p>
              <p className="mt-3 text-[19px]" style={{ color: INK }}>told EMI Score apart from CIBIL, without help.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] p-8 md:p-10" style={{ background: TINT }}>
              <p className="text-[26px] font-bold" style={{ fontFamily: DISPLAY }}>What made sense</p>
              <div className="mt-6 space-y-4">
                {["Colours alone said \"crisis\"", "The score felt \"very close to reality\"", "Journey was easy · 3.7 / 5", "\"More sharable than credit score\""].map((t) => (
                  <p key={t} className="flex items-center gap-3 text-[18px]" style={{ color: GREY }}>
                    <Check className="h-5 w-5 shrink-0" style={{ color: NAVY }} strokeWidth={2.4} /> {t}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── 13 · They still missed things ────────────────────────── */

function StillMissed() {
  const items = [
    { n: "5", t: "still read it as a credit score.", before: A.v2Score, after: A.finalScore, fix: "A verdict stamp right under the number, and \"out of 100\" beside it." },
    { n: "Most", t: "skipped every paragraph.", before: A.v2Emiburden, after: A.finalEmiBurden, fix: "One line per factor, plus a voice note in Hindi and Hinglish." },
  ];
  return (
    <Section>
      <Reveal><Headline one="They got it." two="They still missed things." /></Reveal>
      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.1}>
            <p className="text-[26px] font-bold leading-tight md:text-[30px]" style={{ fontFamily: DISPLAY }}>
              <span className="mr-3 text-[46px] md:text-[56px]" style={{ color: ACCENT }}>{it.n}</span>{it.t}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-center grayscale">
                <Phone src={it.before} alt="Before" width={150} />
                <p className="mt-2 text-[13px]" style={{ color: GREY }}>Tested</p>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0" style={{ color: SOFT }} />
              <div className="text-center">
                <Phone src={it.after} alt="After" width={150} />
                <p className="mt-2 text-[13px]" style={{ color: GREY }}>Shipped</p>
              </div>
            </div>
            <p className="mt-6 text-[18px] font-bold" style={{ color: ACCENT, fontFamily: DISPLAY }}>What changed</p>
            <p className="mt-1 max-w-[460px] text-[17px] leading-[1.6]" style={{ color: GREY }}>{it.fix}</p>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-14 text-[22px]" style={{ color: GREY, fontFamily: DISPLAY }}>
          <span className="mr-3 text-[40px] font-bold" style={{ color: ACCENT }}>1</span>
          <span className="font-bold" style={{ color: INK }}>pause in the whole flow:</span> "what counts as expenses?" → examples now sit inside the question.
        </p>
      </Reveal>
    </Section>
  );
}

/* ── 14 · Too happy ───────────────────────────────────────── */

function TooHappy() {
  const [open, setOpen] = useState(false);
  return (
    <Section tint>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto_auto]">
        <Reveal>
          <Eyebrow>Design review</Eyebrow>
          <Headline one={'"Still too happy."'} two="Bad news needs weight." />
          <Lead>My first warning banner used a warm illustration. In review it felt cheerful. Two colour passes later: "use a stamp or something."</Lead>
          <button type="button" onClick={() => setOpen(true)} className="mt-8 block w-full max-w-[360px] overflow-hidden rounded-2xl shadow-[0_20px_40px_-24px_rgba(18,20,23,.4)]">
            <img src={A.itSlack} alt="Review thread: still too happy, use a stamp" className="w-full" />
          </button>
          {open && <Zoom src={A.itSlack} alt="Review thread" onClose={() => setOpen(false)} />}
        </Reveal>
        <Note dir="right" className="hidden lg:block">so I made it a stamp</Note>
        <Reveal delay={0.1}><IPhone src={A.finalStamp} alt="Final: red stamp, No new loan right now" width={260} /></Reveal>
      </div>
    </Section>
  );
}

/* ── 15 · Final carousel ──────────────────────────────────── */

const FINAL = [
  { src: A.finalSignup, cap: "Both outcomes, before any ask." },
  { src: A.finalOtp, cap: "Verified with Experian." },
  { src: A.finalIncome, cap: "One round number." },
  { src: A.finalExpenses, cap: "Examples inside the question." },
  { src: A.finalLoader, cap: "The wait does a job." },
  { src: A.finalScore, cap: "A verdict, in colour.", tall: true },
  { src: A.finalMeans, cap: "All five bands, one tap." },
  { src: A.finalEmiBurden, cap: "Hear it in your language." },
  { src: A.finalOfferings, cap: "A plan, not a dead end.", tall: true },
];

function FinalCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const go = (d: number) => ref.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <Section>
      <Reveal>
        <p className="text-center text-[14px] font-semibold uppercase tracking-[0.08em]" style={{ color: GREY }}>The complete experience</p>
        <h2 className="mt-4 text-center text-[2.6rem] font-bold tracking-[-0.04em] md:text-[4.6rem]" style={{ fontFamily: DISPLAY }}>The final EMI Score.</h2>
      </Reveal>
      <div className="mt-12 flex items-center justify-between">
        <p className="flex items-center gap-3 text-[19px]" style={{ color: GREY }}>Scroll through the journey <ArrowRight className="h-5 w-5" /></p>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className="flex h-14 w-14 items-center justify-center rounded-full border" style={{ borderColor: "#d8dbe0" }}><ArrowLeft className="h-5 w-5" /></button>
          <button type="button" aria-label="Next" onClick={() => go(1)} className="flex h-14 w-14 items-center justify-center rounded-full border" style={{ borderColor: INK }}><ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div ref={ref} className="hide-scrollbar -mx-5 mt-10 snap-x overflow-x-auto px-5 pb-6">
        <div className="flex w-max items-start gap-2">
          {FINAL.map((f, i) => (
            <div key={f.cap} className="flex snap-start items-start">
              <div className="flex w-[260px] flex-col items-center">
                <IPhone src={f.src} alt={f.cap} width={250} tall={f.tall} />
                <p className="mt-6 max-w-[230px] rounded-2xl px-5 py-4 text-[17px] leading-snug" style={{ background: TINT, color: GREY }}>{f.cap}</p>
              </div>
              {i < FINAL.length - 1 && (
                <span className="mx-3 mt-[250px] flex items-center" aria-hidden>
                  <span className="h-2 w-2 rounded-full border" style={{ borderColor: SOFT }} />
                  <Arrow />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 16 · Ask ─────────────────────────────────────────────── */

function AskSection() {
  return (
    <Section>
      <Reveal className="lg:pl-[18%]">
        <Eyebrow>01 · Earning trust</Eyebrow>
        <Headline one="Show the outcome." two="Then ask two numbers." />
      </Reveal>
      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="space-y-16">
          <Reveal><Callout title="Both outcomes, up front" body="A stressed 29 and a relieved 78, before any money question." /></Reveal>
          <Reveal><Callout title="As per PAN" body="Tells people why we need their name: to match the credit report." /></Reveal>
        </div>
        <Reveal className="flex justify-center"><IPhone src={A.finalSignup} alt="Intro and sign up" width={280} /></Reveal>
        <div className="space-y-16">
          <Reveal><Callout side="right" title="Two steps, not five" body="In-hand salary, then EMIs + expenses. Round numbers are fine." /></Reveal>
          <Reveal><Callout side="right" title="Safe & secure, every screen" body="And no impact on the credit score, said before the ask." /></Reveal>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        <Phone src={A.finalIncome} alt="Step 1: salary" width={170} caption="Step 1 · salary" />
        <Phone src={A.finalExpenses} alt="Step 2: EMIs and expenses" width={170} caption="Step 2 · EMIs + expenses" />
      </div>
    </Section>
  );
}

/* ── 17 · Verdict ─────────────────────────────────────────── */

function VerdictSection() {
  return (
    <Section tint>
      <Reveal className="lg:pl-[18%]">
        <Eyebrow>02 · The verdict</Eyebrow>
        <Headline one="One number." two="One verdict. Three reasons." />
      </Reveal>
      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <div className="space-y-20">
          <Reveal><Callout title="29 out of 100" body="Never read as ₹29 again." /></Reveal>
          <Reveal><Callout title="Don't take a loan" body="An instruction, not a grade. The colour says it first." /></Reveal>
        </div>
        <Reveal className="flex justify-center"><IPhone src={A.finalScore} alt="EMI Score result" width={300} tall /></Reveal>
        <div className="space-y-20">
          <Reveal><Callout side="right" title="See what it means" body="All five bands, in one tap." /></Reveal>
          <Reveal><Callout side="right" title="Real numbers, tappable" body="Savings 2% · EMI burden 90% · Credit 650." /></Reveal>
        </div>
      </div>
      <Reveal>
        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-5 overflow-hidden rounded-2xl text-center text-white">
          {[["0–20", "Don't take a loan", RED], ["21–40", "Avoid a new loan", "#e8641a"], ["41–60", "Pay loans first", "#e8a23a"], ["61–80", "Think first", "#8dbf4e"], ["81–100", "Borrow if needed", GREEN]].map(([r, v, c]) => (
            <div key={r} className="px-2 py-4" style={{ background: c }}>
              <p className="text-[13px] font-semibold opacity-90">{r}</p>
              <p className="mt-1 text-[13px] font-bold leading-tight md:text-[15px]">{v}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ── 18 · Explain ─────────────────────────────────────────── */

function ExplainSection() {
  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto]">
        <Reveal>
          <Eyebrow>03 · Explaining the score</Eyebrow>
          <Headline one="Don't read it." two="Hear it." />
          <div className="mt-10 space-y-6">
            {[
              [Mic, "A voice note per factor", "In English, Hindi or Hinglish."],
              [Eye, "One chart, one line", "Your number against the safe zone."],
              [Sparkles, "One target", "Keep EMIs under 40%. Save 30%. Reach 750."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Mic;
              return (
                <div key={t as string} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_-16px_rgba(18,20,23,.4)]"><I className="h-6 w-6" style={{ color: ACCENT }} strokeWidth={1.6} /></span>
                  <div>
                    <p className="text-[20px] font-bold" style={{ fontFamily: DISPLAY }}>{t as string}</p>
                    <p className="text-[16px]" style={{ color: GREY }}>{d as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
        <div className="flex items-end justify-center gap-5">
          <Reveal><IPhone src={A.finalEmiBurden} alt="EMI burden explainer with voice" width={250} tilt={-3} /></Reveal>
          <Reveal delay={0.1} className="hidden sm:block"><IPhone src={A.finalCredit} alt="Credit score explainer" width={220} tilt={3} /></Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ── 19 · Way out ─────────────────────────────────────────── */

function WayOutSection() {
  return (
    <Section tint>
      <div className="grid items-center gap-14 lg:grid-cols-[auto_minmax(0,1fr)]">
        <Reveal className="flex justify-center"><IPhone src={A.finalOfferings} alt="Solutions page" width={290} tall /></Reveal>
        <Reveal>
          <Eyebrow>04 · The way out</Eyebrow>
          <Headline one="A low score." two="A plan, not a dead end." />
          <Lead>This is where the business goal lives. The plan uses the person's own numbers.</Lead>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[[Wallet, "Settlement", "Save ₹1,37,000"], [Lock, "FreedShield", "Stop recovery calls"], [Gauge, "Credit goal", "612 → 750+"]].map(([I, t, d]) => {
              const Icon = I as typeof Wallet;
              return (
                <div key={t as string}>
                  <Icon className="h-8 w-8" strokeWidth={1.5} style={{ color: NAVY }} />
                  <p className="mt-4 text-[20px] font-bold" style={{ fontFamily: DISPLAY }}>{t as string}</p>
                  <p className="text-[16px]" style={{ color: GREY }}>{d as string}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-[26px]" style={{ fontFamily: HAND, color: NAVY }}>one flow, five segments: DRP · DRP-i · DCP · DCP-i · DEP</p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 20 · Motion ──────────────────────────────────────────── */

const PROTOS = [
  { label: "Tested prototype", src: "/emi-score/prototype.html" },
];

function Motion() {
  const [i, setI] = useState(0);
  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-[auto_minmax(0,1fr)]">
        <Reveal className="mx-auto overflow-hidden rounded-[2.4rem]" >
          <div style={{ width: "min(420px, 88vw)", height: "min(860px, 82vh)" }}>
            <iframe src={PROTOS[i].src} title="EMI Score clickable prototype" loading="lazy" className="h-full w-full border-0 bg-transparent" />
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-[3rem] font-bold leading-[1] tracking-[-0.045em] md:text-[5rem]" style={{ fontFamily: DISPLAY }}>See it in motion.</h2>
          <Lead>The exact prototype people held in testing. Switch the language, enter numbers, open a factor.</Lead>
          <div className="mt-10 flex flex-wrap gap-8">
            {[...PROTOS.map((p) => p.label), "Full screen ↗"].map((l, k) =>
              k < PROTOS.length ? (
                <button key={l} type="button" onClick={() => setI(k)} className="border-b-[3px] pb-2 text-[20px]" style={{ borderColor: i === k ? "#3b6fd8" : "transparent", color: i === k ? INK : GREY }}>{l}</button>
              ) : (
                <a key={l} href="/emi-score/prototype.html" target="_blank" rel="noreferrer" className="pb-2 text-[20px]" style={{ color: GREY }}>{l}</a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ── 21 · AI ──────────────────────────────────────────────── */

function AiSection() {
  return (
    <Section tint>
      <Reveal>
        <Eyebrow>How I worked</Eyebrow>
        <Headline one="AI for speed." two="People for truth." />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-5">
        {([
          [chatgptLogo, "ChatGPT", "Copy in 3 languages"],
          [null, "Gemini", "Market research"],
          [claudeLogo, "Claude", "Flow + score data"],
          [claudeLogo, "Claude Design", "Prototypes in hours"],
          [claudeLogo, "Claude Code", "This case study"],
        ] as const).map(([logo, n, j], k) => (
          <Reveal key={n} delay={k * 0.05}>
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_6px_16px_-10px_rgba(18,20,23,.45)]">
              {logo ? <img src={logo} alt="" className="h-full w-full object-cover" /> : <GeminiMark />}
            </span>
            <p className="mt-5 text-[20px] font-bold leading-tight" style={{ fontFamily: DISPLAY }}>{j}</p>
            <p className="mt-1 text-[15px]" style={{ color: GREY }}>{n}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <ShotTile src={A.aiHeroOptions} alt="Four hero options built in Claude Design" cap="4 hero options in an afternoon, tested side by side." />
        <ShotTile src={A.aiFlowProto} alt="Intro prototype with language toggle" cap="The intro, with a language toggle." />
      </Reveal>
    </Section>
  );
}

/** Gemini's four-point sparkle, drawn inline since no logo file was supplied. */
function GeminiMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" aria-hidden="true">
      <defs>
        <linearGradient id="gemini-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1C7DFF" />
          <stop offset="0.55" stopColor="#7B6CF6" />
          <stop offset="1" stopColor="#E66C9C" />
        </linearGradient>
      </defs>
      <path fill="url(#gemini-g)" d="M12 0C12.6 6.4 17.6 11.4 24 12 17.6 12.6 12.6 17.6 12 24 11.4 17.6 6.4 12.6 0 12 6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

function ShotTile({ src, alt, cap }: { src: string; alt: string; cap: string }) {
  const [open, setOpen] = useState(false);
  return (
    <figure>
      <button type="button" onClick={() => setOpen(true)} className="block w-full overflow-hidden rounded-2xl shadow-[0_20px_40px_-26px_rgba(18,20,23,.5)]">
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </button>
      <figcaption className="mt-3 text-[15px]" style={{ color: GREY }}>{cap}</figcaption>
      {open && <Zoom src={src} alt={alt} wide onClose={() => setOpen(false)} />}
    </figure>
  );
}

/* ── 22 · Handoff ─────────────────────────────────────────── */

const SCATTER = [
  { src: A.loader5, x: "8%", y: "4%", r: -8, w: 92, o: 0.35 },
  { src: A.v2Savings, x: "36%", y: "0%", r: 6, w: 110, o: 0.9 },
  { src: A.finalCredit, x: "66%", y: "6%", r: -4, w: 116, o: 0.95 },
  { src: A.v2Credit, x: "20%", y: "40%", r: 5, w: 104, o: 0.7 },
  { src: A.finalMeans, x: "50%", y: "36%", r: -6, w: 118, o: 1 },
  { src: A.loader7, x: "82%", y: "44%", r: 8, w: 92, o: 0.45 },
  { src: A.v1Result, x: "4%", y: "62%", r: -3, w: 96, o: 0.3 },
  { src: A.finalUpdate, x: "34%", y: "64%", r: 4, w: 110, o: 0.85 },
  { src: A.v2Means, x: "64%", y: "62%", r: -7, w: 104, o: 0.6 },
];

function Handoff() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <Eyebrow>Refined. Locked. Ready to build.</Eyebrow>
          <Headline one="The handoff wasn't" two="the finish line." size="md" />
          <div className="mt-8 flex items-center gap-6 text-[17px]">
            <div><p style={{ color: GREY }}>Design</p><p className="font-bold">Make it clear.</p></div>
            <span style={{ color: GREY }}>⟷</span>
            <div><p style={{ color: GREY }}>Engineering</p><p className="font-bold">Make it measurable.</p></div>
          </div>
          <p className="mt-12 text-[96px] font-bold leading-none tracking-[-0.05em] md:text-[120px]" style={{ fontFamily: DISPLAY, color: ACCENT }}>40+</p>
          <p className="mt-2 text-[19px]">analytics events, from sign up to solution.</p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div><p className="text-[20px] font-bold" style={{ fontFamily: DISPLAY }}>3 languages</p><p className="text-[15px]" style={{ color: GREY }}>Every string, every verdict.</p></div>
            <div><p className="text-[20px] font-bold" style={{ fontFamily: DISPLAY }}>5 segments</p><p className="text-[15px]" style={{ color: GREY }}>Own verdict copy and solution.</p></div>
          </div>
        </Reveal>
        <div className="relative hidden h-[620px] overflow-hidden lg:block" aria-hidden>
          {SCATTER.map((s, i) => (
            <img key={i} src={s.src} alt="" className="absolute rounded-2xl shadow-[0_18px_36px_-20px_rgba(18,20,23,.45)]" style={{ left: s.x, top: s.y, width: s.w, transform: `rotate(${s.r}deg)`, opacity: s.o }} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── 23 · Next ────────────────────────────────────────────── */

function Next() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>What I learned</Eyebrow>
          <Headline one="Back to users." two="Keep improving." />
          <div className="mt-10 space-y-3 text-[18px]" style={{ color: GREY }}>
            {["Lead with the verdict.", "Plain words beat correct words.", "Trust lives in the small lines.", "Tone is design."].map((t) => (
              <p key={t} className="flex items-center gap-3"><Brain className="h-5 w-5 shrink-0" style={{ color: ACCENT }} strokeWidth={1.6} />{t}</p>
            ))}
          </div>
        </Reveal>
        <div className="space-y-12">
          {[
            ["01", "Make it shareable.", "One tester said it's more sharable than a credit score."],
            ["02", "Count all income.", "Side income and freelancing, not just salary."],
            ["03", "Test again.", "Do monthly nudges turn a one-time check into a habit?"],
          ].map(([n, t, d], k) => (
            <Reveal key={n} delay={k * 0.06} className="flex gap-6">
              <span className="pt-2 text-[17px]" style={{ color: "#3b6fd8" }}>{n}</span>
              <div>
                <p className="flex items-center gap-3 text-[26px] font-bold tracking-[-0.02em]" style={{ fontFamily: DISPLAY }}>
                  {t}
                  {n === "03" && (
                    <svg width="56" height="34" viewBox="0 0 56 34" fill="none" aria-hidden>
                      <path d="M10 10 C 30 -4, 54 10, 44 24 C 36 34, 16 30, 12 22 M10 10 l10 -2 M10 10 l3 9" stroke="#3b6fd8" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  )}
                </p>
                <p className="mt-2 text-[17px]" style={{ color: GREY }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t pt-10" style={{ borderColor: "#e5e7eb" }}>
        <p className="flex items-center gap-2 text-[15px]" style={{ color: GREY }}><Users className="h-4 w-4" /> Thanks to my PMs and the engineering team at FREED.</p>
        <a href="/" className="inline-flex items-center gap-2 border-b-2 pb-1 text-[17px] font-semibold" style={{ borderColor: ACCENT, fontFamily: DISPLAY }}>
          <ArrowLeft className="h-4 w-4" /> More work
        </a>
      </div>
    </Section>
  );
}
