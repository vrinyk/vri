const INK = "#1f232d";
const MUTED = "#6b6f7a";
const PAPER = "#fbfaf7";
const ACCENT = "#265d73";
const ACCENT_BG = "#dbeef8";

export type Reason = {
  /** What was designed. One line. */
  decision: string;
  /** Why it was designed that way. Two lines at most. */
  why: string;
  /** What users said. The qualitative half of the evidence. */
  heard?: string;
  /** What the data said. The quantitative half. */
  measured?: string;
  /** Short label under the number. */
  measuredLabel?: string;
};

/**
 * One design decision, the reason behind it, and the evidence underneath.
 *
 * Every slide uses this same block so a reader learns the shape once: what was
 * built, why, and what was heard and measured that led there. It replaces the
 * paragraphs the deck used to carry — the reasoning is the content now.
 */
export function Rationale({ n, reason }: { n?: string; reason: Reason }) {
  const { decision, why, heard, measured, measuredLabel } = reason;
  return (
    <div
      className="flex h-full flex-col rounded-2xl p-5 md:p-6"
      style={{ background: PAPER, border: `1px solid ${INK}14` }}
    >
      <div className="mb-2 flex items-baseline gap-2.5">
        {n && (
          <span
            className="font-sans text-[12.5px] font-bold tracking-[0.1em]"
            style={{ color: ACCENT, opacity: 0.7 }}
          >
            {n}
          </span>
        )}
        <h3
          className="font-sans text-[16px] font-bold leading-snug"
          style={{ color: INK }}
        >
          {decision}
        </h3>
      </div>

      <p
        className="font-sans text-[14px] leading-[1.6]"
        style={{ color: MUTED }}
      >
        {why}
      </p>

      {(heard || measured) && (
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {heard && (
            <div
              className="rounded-xl px-3.5 py-3"
              style={{ background: "#fff", border: `1px solid ${INK}12` }}
            >
              <p
                className="mb-1 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: MUTED }}
              >
                Heard
              </p>
              <p
                className="font-sans text-[13px] italic leading-snug"
                style={{ color: INK }}
              >
                “{heard}”
              </p>
            </div>
          )}
          {measured && (
            <div
              className="rounded-xl px-3.5 py-3"
              style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}33` }}
            >
              <p
                className="mb-1 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: ACCENT, opacity: 0.8 }}
              >
                Measured
              </p>
              <p
                className="font-sans text-[17px] font-bold leading-tight"
                style={{ color: ACCENT }}
              >
                {measured}
              </p>
              {measuredLabel && (
                <p
                  className="mt-0.5 font-sans text-[12px] leading-snug"
                  style={{ color: ACCENT, opacity: 0.85 }}
                >
                  {measuredLabel}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Every slide sits in the same box, so the deck stops jumping around. */
export function SlideShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-start px-5 py-8 md:items-center md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </div>
  );
}

/** Slide scaffolding: eyebrow, one title, one two line standfirst. Nothing else. */
export function SlideHead({
  eyebrow,
  title,
  standfirst,
}: {
  eyebrow: string;
  title: React.ReactNode;
  standfirst?: string;
}) {
  return (
    <div className="mb-7 md:mb-9">
      <p
        className="mb-3 font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase"
        style={{ color: ACCENT }}
      >
        {eyebrow}
      </p>
      <h2
        className="max-w-3xl font-serif text-[1.9rem] font-semibold leading-[1.1] md:text-[2.7rem]"
        style={{ color: INK }}
      >
        {title}
      </h2>
      {standfirst && (
        <p
          className="mt-3 max-w-2xl font-sans text-[15.5px] leading-[1.6] md:text-[16.5px]"
          style={{ color: MUTED }}
        >
          {standfirst}
        </p>
      )}
    </div>
  );
}

/** A single headline figure. */
export function Stat({
  value,
  label,
  tone = "accent",
}: {
  value: string;
  label: string;
  tone?: "accent" | "plain";
}) {
  const on = tone === "accent";
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{
        background: on ? ACCENT_BG : PAPER,
        border: `1px solid ${on ? ACCENT + "33" : INK + "14"}`,
      }}
    >
      <p
        className="font-sans text-[20px] font-bold leading-none md:text-[24px]"
        style={{ color: on ? ACCENT : INK }}
      >
        {value}
      </p>
      <p
        className="mt-1.5 font-sans text-[12px] leading-snug"
        style={{ color: on ? ACCENT : MUTED, opacity: 0.9 }}
      >
        {label}
      </p>
    </div>
  );
}
