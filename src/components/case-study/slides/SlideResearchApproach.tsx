import { motion } from "motion/react";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const CREAM = "#fbfaf7";
const BLUE = "#dbeef8";
const BLUE_INK = "#265d73";

/**
 * PLACEHOLDER FIGURES — replace with the real funnel numbers before this goes
 * in front of anyone. They are here so the shape of the analysis reads
 * correctly, not because they are accurate.
 */
const FUNNEL = [
  { step: "Landed on the app", pct: 100, drop: null },
  { step: "Started sign up", pct: 62, drop: 38 },
  { step: "Finished sign up", pct: 44, drop: 18 },
  { step: "Saw their plan", pct: 27, drop: 17 },
  { step: "Paid", pct: 8, drop: 19 },
];

/** Also placeholder values. */
const SIGNALS = [
  { label: "Time on plan screen", value: "1 min 48s", note: "High, but people were not progressing" },
  { label: "CTA click rate", value: "11%", note: "Nine out of ten read it and left" },
  { label: "Time to conversion", value: "4 days", note: "Not a one sitting decision" },
  { label: "Repeat taps per session", value: "3.2", note: "People tapping things that were not tappable" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const SlideResearchApproach = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.09 }}
        className="container mx-auto max-w-6xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-sans text-[12px] tracking-[0.22em] uppercase"
          style={{ color: BLUE_INK }}
        >
          Research
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.06] md:text-[3rem]"
          style={{ color: INK }}
        >
          I read the data first, then went and asked people
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mb-9 max-w-3xl font-sans text-[16px] leading-relaxed md:text-lg"
          style={{ color: MUTED }}
        >
          Numbers told me where people were leaving. They could not tell me why.
          So the research ran in two steps, in that order.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          {/* ── STEP 01 — quantitative ── */}
          <motion.div variants={fadeUp}>
            <div className="mb-4 flex items-baseline gap-3">
              <span
                className="font-serif text-xl"
                style={{ color: BLUE_INK, opacity: 0.6 }}
              >
                01
              </span>
              <h3
                className="font-sans text-[17px] font-bold"
                style={{ color: INK }}
              >
                Find out where they leave
              </h3>
            </div>
            <p
              className="mb-5 font-sans text-[14.5px] leading-relaxed"
              style={{ color: MUTED }}
            >
              I pulled the acquisition funnel in MoEngage, then sat through
              session recordings and heatmaps in UXCam to watch what people
              actually did on the screens where the funnel bled.
            </p>

            {/* Funnel */}
            <div
              className="mb-5 overflow-hidden rounded-2xl"
              style={{ border: `1px solid ${INK}14`, background: CREAM }}
            >
              {FUNNEL.map((f, i) => (
                <div
                  key={f.step}
                  className="flex items-center gap-3 px-4 py-2.5"
                  style={{
                    borderTop: i === 0 ? "none" : `1px solid ${INK}0d`,
                  }}
                >
                  <span
                    className="w-[128px] shrink-0 font-sans text-[13px]"
                    style={{ color: INK }}
                  >
                    {f.step}
                  </span>
                  <span className="relative h-5 flex-1 overflow-hidden rounded">
                    <span
                      className="absolute inset-y-0 left-0 rounded"
                      style={{
                        width: `${f.pct}%`,
                        background: i === FUNNEL.length - 1 ? BLUE_INK : BLUE,
                      }}
                    />
                  </span>
                  <span
                    className="w-9 shrink-0 text-right font-sans text-[13px] font-semibold tabular-nums"
                    style={{ color: INK }}
                  >
                    {f.pct}%
                  </span>
                  <span
                    className="w-16 shrink-0 text-right font-sans text-[12px] tabular-nums"
                    style={{ color: f.drop && f.drop >= 19 ? "#a32d2d" : MUTED }}
                  >
                    {f.drop ? `−${f.drop}` : ""}
                  </span>
                </div>
              ))}
            </div>

            {/* Signals */}
            <div className="grid gap-3 sm:grid-cols-2">
              {SIGNALS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl px-4 py-3"
                  style={{ background: CREAM, border: `1px solid ${INK}14` }}
                >
                  <p
                    className="mb-0.5 font-sans text-[11.5px] tracking-[0.1em] uppercase"
                    style={{ color: MUTED }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="mb-1 font-serif text-xl"
                    style={{ color: INK }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-sans text-[12.5px] leading-snug"
                    style={{ color: MUTED }}
                  >
                    {s.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className="mr-1 font-sans text-[11.5px] tracking-[0.14em] uppercase"
                style={{ color: `${INK}80` }}
              >
                Looked at
              </span>
              {[
                "MoEngage funnels",
                "Session recordings",
                "UXCam heatmaps",
                "Click and scroll maps",
                "Drop off by step",
                "Time to conversion",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 font-sans text-[12.5px]"
                  style={{ borderColor: `${INK}1f`, color: `${INK}b3` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── STEP 02 — qualitative ── */}
          <motion.div variants={fadeUp}>
            <div className="mb-4 flex items-baseline gap-3">
              <span
                className="font-serif text-xl"
                style={{ color: BLUE_INK, opacity: 0.6 }}
              >
                02
              </span>
              <h3
                className="font-sans text-[17px] font-bold"
                style={{ color: INK }}
              >
                Find out why
              </h3>
            </div>
            <p
              className="mb-5 font-sans text-[14.5px] leading-relaxed"
              style={{ color: MUTED }}
            >
              The data gave me a list of suspect screens. To understand what was
              going on in people's heads I had to talk to them, and to the
              people who talk to them every day.
            </p>

            <div className="space-y-4">
              <div
                className="rounded-2xl p-5"
                style={{ background: CREAM, border: `1px solid ${INK}14` }}
              >
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <p
                    className="font-sans text-[15px] font-bold"
                    style={{ color: INK }}
                  >
                    Sales representatives
                  </p>
                  <span
                    className="shrink-0 font-sans text-[12.5px] font-semibold"
                    style={{ color: BLUE_INK }}
                  >
                    100+ calls
                  </span>
                </div>
                <p
                  className="font-sans text-[14px] leading-relaxed"
                  style={{ color: MUTED }}
                >
                  They speak to hundreds of these users a week. I listened to
                  recorded calls and sat with them, noting the order they
                  explained things in, the words they used instead of jargon,
                  and the exact objection that came up every time.
                </p>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: CREAM, border: `1px solid ${INK}14` }}
              >
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <p
                    className="font-sans text-[15px] font-bold"
                    style={{ color: INK }}
                  >
                    Real users
                  </p>
                  <span
                    className="shrink-0 font-sans text-[12.5px] font-semibold"
                    style={{ color: BLUE_INK }}
                  >
                    In person and remote
                  </span>
                </div>
                <p
                  className="font-sans text-[14px] leading-relaxed"
                  style={{ color: MUTED }}
                >
                  I asked people who had dropped off what they thought the
                  screen was asking them to do. Most could not say. That was the
                  answer: they were not hesitating over the offer, they did not
                  understand it.
                </p>
              </div>

              <div
                className="rounded-2xl px-5 py-4"
                style={{ background: BLUE, borderLeft: `4px solid ${BLUE_INK}` }}
              >
                <p
                  className="mb-1 font-sans text-[11.5px] tracking-[0.16em] uppercase"
                  style={{ color: BLUE_INK, opacity: 0.8 }}
                >
                  What the two steps together told me
                </p>
                <p
                  className="font-sans text-[14.5px] font-medium leading-snug"
                  style={{ color: BLUE_INK }}
                >
                  Long time on screen and almost no clicks is not friction. It
                  is people reading something they do not understand. That
                  reframed the whole project from speeding the flow up to
                  explaining it better.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideResearchApproach;
