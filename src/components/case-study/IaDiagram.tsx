const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#d9d2c4";
const PAPER = "#fbfaf7";
const ACCENT = "#265d73";
const ACCENT_BG = "#dbeef8";

/** Funnel steps, left to right across the top band. */
const FUNNEL = [
  { t: "Landing page", s: "Check your score, free" },
  { t: "Sign up · OTP", s: "Name and mobile, as per PAN" },
  { t: "Pull credit report", s: "Consent, then bureau fetch" },
  { t: "Onboarding", s: "4 questions, one per screen" },
  { t: "Welcome aboard", s: "Confirmation, then reveal" },
];

/** The five places the score can send someone. */
const ROUTES = [
  { code: "DRP", name: "Debt Relief", who: "Already defaulted", tint: "#fdece5" },
  { code: "DCP", name: "Consolidation", who: "Paying, but stretched", tint: "#e6f0f6" },
  { code: "DEP", name: "Elimination", who: "Wants to clear it alone", tint: "#f2fbdc" },
  { code: "NTC", name: "New to credit", who: "No history yet", tint: "#f4f1ea" },
  { code: "Others", name: "Monitor only", who: "Healthy, just watching", tint: "#f4f1ea" },
];

const SHARED = [
  "Credit report",
  "5 score factors",
  "Account detail",
  "Raise a dispute",
  "Goal tracker",
  "Monthly snapshot",
];

/* ── geometry ─────────────────────────────────────────────── */
const W = 1120;
const H = 668;
const COL_W = 192;
const COL_X = [16, 238, 460, 682, 904];
const CARD_W = 200;

const Box = ({
  x, y, w, h, fill = PAPER, stroke = LINE, dash,
}: { x: number; y: number; w: number; h: number; fill?: string; stroke?: string; dash?: string }) => (
  <rect
    x={x} y={y} width={w} height={h} rx={10}
    fill={fill} stroke={stroke} strokeWidth={1.25}
    strokeDasharray={dash}
  />
);

/** Straight connector with a small solid arrowhead at the far end. */
const Arrow = ({
  x1, y1, x2, y2, dash,
}: { x1: number; y1: number; x2: number; y2: number; dash?: string }) => {
  const down = y2 !== y1;
  const head = down
    ? `${x2 - 4},${y2 - 6} ${x2 + 4},${y2 - 6} ${x2},${y2}`
    : `${x2 - 6},${y2 - 4} ${x2 - 6},${y2 + 4} ${x2},${y2}`;
  return (
    <g>
      <line
        x1={x1} y1={y1} x2={down ? x2 : x2 - 5} y2={down ? y2 - 5 : y2}
        stroke={`${ACCENT}80`} strokeWidth={1.4} strokeDasharray={dash}
      />
      <polygon points={head} fill={`${ACCENT}b3`} />
    </g>
  );
};

/**
 * The information architecture as an actual diagram rather than a list: one
 * acquisition funnel across the top, the locked-to-unlocked spine down the
 * middle, and the five routes the credit score can hand someone off to.
 */
export default function IaDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Credit Insights information architecture: landing, sign up, credit report pull, onboarding, locked home, context led paywall, unlocked home, then routing to DRP, DCP, DEP, new to credit or monitor only."
      >
        {/* ─── Band 1: acquisition funnel ─── */}
        <text x={16} y={22} fontSize={11} letterSpacing={2} fill={MUTED} fontFamily="sans-serif">
          ACQUISITION
        </text>
        {FUNNEL.map((n, i) => (
          <g key={n.t}>
            <Box x={COL_X[i]} y={32} w={COL_W} h={56} />
            <text x={COL_X[i] + 14} y={54} fontSize={14} fontWeight={700} fill={INK} fontFamily="sans-serif">
              {n.t}
            </text>
            <text x={COL_X[i] + 14} y={72} fontSize={11.5} fill={MUTED} fontFamily="sans-serif">
              {n.s}
            </text>
            {i < FUNNEL.length - 1 && (
              <Arrow
                x1={COL_X[i] + COL_W} y1={60}
                x2={COL_X[i + 1]} y2={60}
              />
            )}
          </g>
        ))}

        {/* dead-end branch: no bureau record */}
        <Arrow x1={556} y1={88} x2={556} y2={116} dash="4 4" />
        <Box x={460} y={116} w={COL_W} h={44} fill="#fff" dash="4 4" />
        <text x={474} y={135} fontSize={12.5} fontWeight={700} fill={INK} fontFamily="sans-serif">
          No report found
        </text>
        <text x={474} y={150} fontSize={11} fill={MUTED} fontFamily="sans-serif">
          Education path, not a score
        </text>
        <Arrow x1={556} y1={160} x2={556} y2={196} dash="4 4" />

        {/* ─── Band 2: locked home ─── */}
        <Arrow x1={1000} y1={88} x2={1000} y2={196} />
        <text x={16} y={186} fontSize={11} letterSpacing={2} fill={MUTED} fontFamily="sans-serif">
          FIRST SESSION
        </text>
        <Box x={16} y={196} w={1088} h={78} fill="#fff" stroke={ACCENT + "40"} />
        <text x={38} y={224} fontSize={16} fontWeight={700} fill={INK} fontFamily="sans-serif">
          Home — locked
        </text>
        <text x={38} y={244} fontSize={11.5} fill={MUTED} fontFamily="sans-serif">
          Score is free. The reason behind it is not.
        </text>
        <line x1={330} y1={210} x2={330} y2={260} stroke={LINE} strokeWidth={1} />
        <text x={356} y={220} fontSize={11} letterSpacing={1.4} fill={ACCENT} fontFamily="sans-serif">
          VISIBLE
        </text>
        <text x={356} y={240} fontSize={12.5} fill={INK} fontFamily="sans-serif">
          Score and band · savings estimate · one flagged account
        </text>
        <text x={356} y={258} fontSize={11.5} fill={MUTED} fontFamily="sans-serif">
          Enough to prove we have actually read their report
        </text>
        <line x1={760} y1={210} x2={760} y2={260} stroke={LINE} strokeWidth={1} />
        <text x={786} y={220} fontSize={11} letterSpacing={1.4} fill={ACCENT} fontFamily="sans-serif">
          LOCKED
        </text>
        <text x={786} y={240} fontSize={12.5} fill={INK} fontFamily="sans-serif">
          Full report · 5 factors
        </text>
        <text x={786} y={258} fontSize={12.5} fill={INK} fontFamily="sans-serif">
          Boost plan · goal tracker
        </text>

        {/* ─── Band 3: paywall ─── */}
        <Arrow x1={560} y1={274} x2={560} y2={306} />
        <Box x={316} y={306} w={488} h={58} fill={ACCENT_BG} stroke={ACCENT + "55"} />
        <text x={340} y={332} fontSize={15} fontWeight={700} fill={ACCENT} fontFamily="sans-serif">
          Context-led paywall
        </text>
        <text x={340} y={350} fontSize={11.5} fill={ACCENT} fontFamily="sans-serif">
          Priced against the saving it unlocks · coupon · retry
        </text>

        {/* ─── Band 4: unlocked home ─── */}
        <Arrow x1={560} y1={364} x2={560} y2={396} />
        <Box x={16} y={396} w={1088} h={72} fill="#fff" stroke={ACCENT + "40"} />
        <text x={38} y={424} fontSize={16} fontWeight={700} fill={INK} fontFamily="sans-serif">
          Home — unlocked
        </text>
        <text x={38} y={444} fontSize={11.5} fill={MUTED} fontFamily="sans-serif">
          Same skeleton, everything filled in
        </text>
        <line x1={330} y1={410} x2={330} y2={456} stroke={LINE} strokeWidth={1} />
        <text x={356} y={428} fontSize={12.5} fill={INK} fontFamily="sans-serif">
          Full report · score factors · boost plan · goal tracker · payment reminders
        </text>
        <text x={356} y={447} fontSize={11.5} fill={MUTED} fontFamily="sans-serif">
          Plus one recommendation, chosen by what the report says — never a menu of three
        </text>

        {/* ─── Band 5: routing ─── */}
        <Arrow x1={560} y1={468} x2={560} y2={492} />
        <line x1={116} y1={492} x2={1004} y2={492} stroke={`${ACCENT}80`} strokeWidth={1.4} />
        <text x={16} y={486} fontSize={11} letterSpacing={2} fill={MUTED} fontFamily="sans-serif">
          ROUTED BY SCORE
        </text>
        {ROUTES.map((r, i) => {
          const cx = COL_X[i] + CARD_W / 2 - 4;
          return (
            <g key={r.code}>
              <Arrow x1={cx} y1={492} x2={cx} y2={516} />
              <Box x={COL_X[i]} y={516} w={CARD_W} h={74} fill={r.tint} stroke={`${INK}1f`} />
              <text x={COL_X[i] + 14} y={542} fontSize={17} fontWeight={700} fill={INK} fontFamily="serif">
                {r.code}
              </text>
              <text x={COL_X[i] + 14} y={560} fontSize={12} fill={INK} fontFamily="sans-serif">
                {r.name}
              </text>
              <text x={COL_X[i] + 14} y={578} fontSize={11} fill={MUTED} fontFamily="sans-serif">
                {r.who}
              </text>
            </g>
          );
        })}

        {/* ─── Band 6: shared surfaces ─── */}
        <line x1={116} y1={608} x2={1004} y2={608} stroke={LINE} strokeWidth={1} strokeDasharray="4 4" />
        {ROUTES.map((r, i) => (
          <line
            key={r.code}
            x1={COL_X[i] + CARD_W / 2 - 4} y1={590}
            x2={COL_X[i] + CARD_W / 2 - 4} y2={608}
            stroke={LINE} strokeWidth={1} strokeDasharray="4 4"
          />
        ))}
        <Box x={16} y={616} w={1088} h={44} fill={PAPER} stroke={LINE} dash="4 4" />
        <text x={38} y={636} fontSize={11} letterSpacing={1.4} fill={MUTED} fontFamily="sans-serif">
          SHARED ACROSS EVERY ROUTE
        </text>
        <text x={38} y={652} fontSize={12.5} fill={INK} fontFamily="sans-serif">
          {SHARED.join("   ·   ")}
        </text>
      </svg>
    </div>
  );
}
