import { motion } from "motion/react";

const INK = "#1f232d";
const CREAM = "#fbfaf7";
const BLUE = "#dbeef8";
const BLUE_INK = "#265d73";

/** What went into the model. */
const SIGNALS = [
  "Credit bureau pulls",
  "Debt-to-income ratio",
  "Hardship reason",
  "Drop-off points",
  "Call transcripts",
];

/** What came out — three behavioural cohorts, not demographic buckets. */
const COHORTS = [
  {
    id: "01",
    name: "The Firefighter",
    tier: "Tier 1",
    share: "24%",
    voice: "“I need this handled today.”",
    debt: "₹7L to ₹22L",
    income: "₹40K to ₹1.4L",
    state: "Urgency",
    journey: "Skip education. Straight to plan + advisor callback.",
  },
  {
    id: "02",
    name: "The Optimiser",
    tier: "Tier 2",
    share: "41%",
    voice: "“Show me the maths first.”",
    debt: "₹2.7L to ₹50L",
    income: "₹15K to ₹25K",
    state: "Comparison",
    journey: "Lead with savings calculator and lender comparison.",
  },
  {
    id: "03",
    name: "The Overwhelmed",
    tier: "Tier 3",
    share: "35%",
    voice: "“I don't know where to start.”",
    debt: "₹2L to ₹7.6L",
    income: "₹20K to ₹22K",
    state: "Confusion",
    journey: "One question per screen. Defer every optional field.",
  },
];

const PIPELINE = [
  { step: "01", label: "Signals", detail: "5 behavioural inputs" },
  { step: "02", label: "Clustering", detail: "k-means on 12K profiles" },
  { step: "03", label: "Cohorts", detail: "3 stable segments" },
  { step: "04", label: "Journeys", detail: "3 branching flows" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const SlideUserResearch = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="container max-w-6xl mx-auto"
      >
        {/* ─── Header ─── */}
        <motion.p
          variants={fadeUp}
          className="font-sans text-[12px] tracking-[0.22em] uppercase mb-4"
          style={{ color: BLUE_INK }}
        >
          User Research
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-[3.25rem] font-semibold leading-[1.05] mb-5 max-w-3xl"
          style={{ color: INK }}
        >
          Three tiers on paper. <em className="italic">Three mindsets</em> in
          reality.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-sans text-lg leading-relaxed max-w-2xl mb-12"
          style={{ color: INK, opacity: 0.72 }}
        >
          Debt size told us what people owed, never how they behaved. So we
          clustered 12,000 profiles on behaviour instead, and let the segments
          decide the journey.
        </motion.p>

        {/* ─── Method pipeline ─── */}
        <motion.div variants={fadeUp} className="mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border" style={{ borderColor: `${INK}14` }}>
            {PIPELINE.map((p, i) => (
              <div
                key={p.step}
                className="px-5 py-5 relative"
                style={{ background: i === 1 ? BLUE : CREAM }}
              >
                <span
                  className="font-sans text-[11px] tracking-[0.18em] block mb-2"
                  style={{ color: i === 1 ? BLUE_INK : `${INK}66` }}
                >
                  {p.step}
                </span>
                <p
                  className="font-sans text-[15px] font-semibold mb-1"
                  style={{ color: i === 1 ? BLUE_INK : INK }}
                >
                  {p.label}
                </p>
                <p
                  className="font-sans text-[13px] leading-snug"
                  style={{ color: i === 1 ? BLUE_INK : INK, opacity: 0.6 }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── Signals that fed the model ─── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          <span
            className="font-sans text-[12px] tracking-[0.14em] uppercase mr-1"
            style={{ color: `${INK}80` }}
          >
            Inputs
          </span>
          {SIGNALS.map((s) => (
            <span
              key={s}
              className="font-sans text-[13px] px-3 py-1 rounded-full border"
              style={{ borderColor: `${INK}1f`, color: `${INK}b3` }}
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* ─── The three cohorts ─── */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {COHORTS.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border p-6 flex flex-col"
              style={{ background: CREAM, borderColor: `${INK}14` }}
            >
              <div className="flex items-baseline justify-between mb-5">
                <span
                  className="font-sans text-[11px] tracking-[0.18em]"
                  style={{ color: `${INK}59` }}
                >
                  {c.tier}
                </span>
                <span
                  className="font-serif text-2xl font-semibold"
                  style={{ color: BLUE_INK }}
                >
                  {c.share}
                </span>
              </div>

              <h3
                className="font-serif text-[1.6rem] font-semibold leading-tight mb-3"
                style={{ color: INK }}
              >
                {c.name}
              </h3>

              <p
                className="font-sans text-[15px] italic leading-snug mb-6"
                style={{ color: INK, opacity: 0.85 }}
              >
                {c.voice}
              </p>

              <dl className="text-[13px] font-sans space-y-2 mb-6">
                {[
                  ["Debt", c.debt],
                  ["Income", c.income],
                  ["Dominant state", c.state],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-3 pb-2 border-b"
                    style={{ borderColor: `${INK}0f` }}
                  >
                    <dt style={{ color: `${INK}80` }}>{k}</dt>
                    <dd className="text-right font-medium" style={{ color: INK }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div
                className="mt-auto rounded-xl px-4 py-3"
                style={{ background: BLUE }}
              >
                <p
                  className="font-sans text-[11px] tracking-[0.16em] uppercase mb-1.5"
                  style={{ color: BLUE_INK, opacity: 0.75 }}
                >
                  Journey shift
                </p>
                <p
                  className="font-sans text-[13.5px] leading-snug font-medium"
                  style={{ color: BLUE_INK }}
                >
                  {c.journey}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ─── The insight that changed the design ─── */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl px-7 py-6 border-l-4"
          style={{ background: `${BLUE}59`, borderColor: BLUE_INK, borderRadius: 0 }}
        >
          <p
            className="font-serif text-xl md:text-[1.4rem] leading-snug max-w-4xl"
            style={{ color: INK }}
          >
            The clusters split on <em className="italic">emotional state</em>,
            not income. Two users with identical debt needed opposite
            onboarding, which is why one flow was never going to work.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideUserResearch;
