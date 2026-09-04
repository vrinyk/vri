import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import PhonePlaceholder from "./PhonePlaceholder";

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
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SECTIONS = [
  "Hero",
  "Overview",
  "Problem",
  "Objective",
  "Who these users are",
  "The linking idea",
  "Structure",
  "Sketches",
  "Design systems",
  "Locked to unlocked",
  "Copy",
  "Testing",
  "Screens",
  "Reflection",
];

/** Shared slide shell. Every slide is one viewport wide. */
function Slide({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 pt-8 pb-10 md:px-16 md:pt-12 md:pb-16 lg:px-24">
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
        {/* 1 — HERO */}
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
              ["Key metric", "Users entering the\nDRP, DCP and DEP funnels"],
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
        </Slide>

        {/* 2 — OVERVIEW */}
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

        {/* 3 — PROBLEM */}
        <Slide>
          <Eyebrow>Problem</Eyebrow>
          <H>
            People wanted to fix their score. Nobody told them how.
          </H>
          <P>
            Checking your credit score is easy. Every app offers it. What
            nobody does is tell you what to do next. People saw a number, felt
            bad or relieved for a minute, and closed the app.
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-2">
            <div
              className="rounded-2xl p-6"
              style={{ background: PAPER, border: `1px solid ${INK}14` }}
            >
              <p
                className="mb-3 font-sans text-[11.5px] tracking-[0.18em] uppercase"
                style={{ color: MUTED }}
              >
                The user problem
              </p>
              <p
                className="font-sans text-[15.5px] leading-relaxed"
                style={{ color: INK }}
              >
                I know my score is bad. I do not know which part of my debt is
                causing it, what to pay first, or whether anything I do will
                actually help. So I do nothing.
              </p>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ background: PAPER, border: `1px solid ${INK}14` }}
            >
              <p
                className="mb-3 font-sans text-[11.5px] tracking-[0.18em] uppercase"
                style={{ color: MUTED }}
              >
                The business problem
              </p>
              <p
                className="font-sans text-[15.5px] leading-relaxed"
                style={{ color: INK }}
              >
                We had three debt products for three very different situations.
                People arrived not knowing debt relief existed, and we had no way
                to hand them to the right one without a sales call.
              </p>
            </div>
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

        {/* 4 — OBJECTIVE */}
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

        {/* 5 — WHO THESE USERS ARE */}
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
            told us: how much they owe, how far behind they are, and whether
            they have any credit history at all.
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
                <p
                  className="font-sans text-[14px] leading-snug"
                  style={{ color: MUTED }}
                >
                  {d}
                </p>
              </div>
            ))}
          </motion.div>
        </Slide>

        {/* 6 — THE LINKING IDEA */}
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
            <div
              className="grid gap-px md:grid-cols-3"
              style={{ background: LINE }}
            >
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
            Credit Insights was never meant to be the destination. It was the
            way into these three funnels, built so the handover felt like help
            rather than a sales pitch.
          </motion.p>
        </Slide>

        {/* 7 — STRUCTURE / IA */}
        <Slide>
          <Eyebrow>Information architecture</Eyebrow>
          <H>Working out the order things should happen in</H>
          <P>
            Before any visual design, the PM and I argued about sequence. How
            much do we ask before showing value? When does the score appear?
            What does the home screen look like before someone has paid, and
            after?
          </P>
          <motion.div variants={fadeUp} className="mt-6 space-y-3">
            {[
              [
                "01",
                "Landing",
                "One promise, one action. Check your score free. No debt talk yet.",
              ],
              [
                "02",
                "Onboarding",
                "The smallest set of questions we could get away with, one idea per screen.",
              ],
              [
                "03",
                "Home, locked",
                "Score visible. Insights and savings visible but locked. You can see what you are missing.",
              ],
              [
                "04",
                "Home, unlocked",
                "Full report, insights, goal tracker, and the product that matches your situation.",
              ],
            ].map(([n, t, d]) => (
              <div
                key={n}
                className="flex flex-col gap-2 rounded-xl p-4 md:flex-row md:items-center md:gap-6"
                style={{ background: PAPER, border: `1px solid ${INK}14` }}
              >
                <div className="flex shrink-0 items-baseline gap-3 md:w-56">
                  <span
                    className="font-serif text-base"
                    style={{ color: ACCENT, opacity: 0.6 }}
                  >
                    {n}
                  </span>
                  <span
                    className="font-sans text-[15.5px] font-bold"
                    style={{ color: INK }}
                  >
                    {t}
                  </span>
                </div>
                <p
                  className="font-sans text-[14.5px] leading-snug"
                  style={{ color: MUTED }}
                >
                  {d}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <ImagePlaceholder
              label="Add the IA / flow diagram"
              className="w-full max-w-3xl"
              aspectRatio="16/9"
            />
          </motion.div>
        </Slide>

        {/* 8 — SKETCHES */}
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

        {/* 9 — DESIGN SYSTEMS */}
        <Slide>
          <Eyebrow>Design systems</Eyebrow>
          <H>Three products, three different feelings</H>
          <P>
            Each product talks to someone in a different emotional state, so
            they could not all look the same. Someone being chased by lenders
            needs calm and reassurance. Someone consolidating wants clarity and
            numbers. The tone had to change with the audience.
          </P>
          <P>
            DEP was brand new, so I built its design system from scratch:
            colour, type scale, component library, states, and the rules for
            when to use what. The other two already existed, so my job there was
            to keep them consistent while making the switch between products
            feel deliberate rather than jarring.
          </P>
          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["DRP", "Calm, reassuring, low pressure"],
              ["DCP", "Clear, numbers forward, practical"],
              ["DEP", "Built from 0 to 1, optimistic and forward looking"],
            ].map(([code, tone], i) => (
              <div
                key={code}
                className="rounded-2xl p-5"
                style={{
                  background: i === 2 ? ACCENT_BG : PAPER,
                  border: `1px solid ${INK}14`,
                }}
              >
                <p
                  className="mb-1.5 font-serif text-xl font-semibold"
                  style={{ color: i === 2 ? ACCENT : INK }}
                >
                  {code}
                </p>
                <p
                  className="font-sans text-[14px] leading-snug"
                  style={{ color: i === 2 ? ACCENT : MUTED }}
                >
                  {tone}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-5">
            <ImagePlaceholder
              label="Add design system foundations, DEP"
              className="w-full max-w-3xl"
              aspectRatio="16/9"
            />
          </motion.div>
        </Slide>

        {/* 10 — LOCKED TO UNLOCKED */}
        <Slide>
          <Eyebrow>Paywall</Eyebrow>
          <H>Show the value before asking for anything</H>
          <P>
            The hardest screen was the locked home page. Lock too much and it
            feels like a wall. Show too much and there is no reason to pay.
          </P>
          <P>
            I tried a lot of versions. What worked was making the locked state
            specific rather than vague. Not "unlock premium insights" but the
            actual number: this is what you could save, here is the account
            causing most of the damage, unlock to see the rest. Real information
            about your own situation, partly visible.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap justify-center gap-5 md:justify-start"
          >
            <PhonePlaceholder label="Home, locked" note="Value visible, detail held back" />
            <PhonePlaceholder label="Paywall in context" note="Tied to your own report" />
            <PhonePlaceholder label="Home, unlocked" note="Full insights and next step" />
          </motion.div>
        </Slide>

        {/* 11 — COPY */}
        <Slide>
          <Eyebrow>Content design</Eyebrow>
          <H>Every line was written for a specific person</H>
          <P>
            Debt is embarrassing. The wrong word makes someone close the app and
            never come back. So the copy changed by segment, not just the
            layout.
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
                <p
                  className="font-sans text-[14px] font-semibold"
                  style={{ color: ACCENT }}
                >
                  {seg}
                </p>
                <p
                  className="font-sans text-[15px] leading-snug"
                  style={{ color: INK }}
                >
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

        {/* 12 — TESTING */}
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
                <p
                  className="mb-2 font-sans text-[15.5px] font-bold"
                  style={{ color: INK }}
                >
                  {t}
                </p>
                <p
                  className="font-sans text-[14.5px] leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {d}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-5 grid gap-4 md:grid-cols-2">
            <ImagePlaceholder label="Before and after, paywall" aspectRatio="16/10" />
            <ImagePlaceholder label="Before and after, report page" aspectRatio="16/10" />
          </motion.div>
        </Slide>

        {/* 13 — SCREENS */}
        <Slide>
          <Eyebrow>What shipped</Eyebrow>
          <H>The journey, end to end</H>
          <P>
            Landing to onboarding, score to insight, locked to unlocked, and out
            into whichever product fits. Every screen had one job.
          </P>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap justify-center gap-5 md:justify-start"
          >
            <PhonePlaceholder label="Landing" note="One promise, one action" />
            <PhonePlaceholder label="Onboarding" note="One question per screen" />
            <PhonePlaceholder label="Score and insights" note="What it means for you" />
            <PhonePlaceholder label="Goal tracker" note="Progress you can feel" />
            <PhonePlaceholder label="Product handover" note="Routed by your score" />
          </motion.div>
        </Slide>

        {/* 14 — REFLECTION */}
        <Slide>
          <Eyebrow>Reflection</Eyebrow>
          <H>What I would do differently</H>
          <P>
            I designed the segmentation from what the credit report told us
            about people. That was the fastest route and it worked, but it meant
            the groups were built from data rather than from conversations. If I
            started again I would talk to a handful of people in each group
            before deciding the groups exist.
          </P>
          <P>
            The other thing I got late was the paywall. I treated it as a screen
            near the end of the flow, when it is really the moment the whole
            product either earns trust or loses it. I would design that moment
            first next time, and build the journey backwards from it.
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
