const INK = "#1f232d";
const MUTED = "#6b6f7a";
const WIRE = "#9d968a";
const ACCENT = "#265d73";

const CREAM = "#f3ede1";
const CREAM_LINE = "#d9cfba";
const CARD_LINE = "#ddd6c8";
const ACCENT_BG = "#dbeef8";
const END_BG = "#fbe3dc";
const END_LINE = "#e2b8a9";
const DEC_BG = "#efebe2";
const DEC_LINE = "#cbc2b0";

const VW = 1040;
const VH = 1160;

/* Main spine */
const SX = 56; // spine left edge
const SW = 250; // spine node width
const SC = SX + SW / 2; // spine centre x
const NH = 64; // process node height
const PH = 54; // pill height
const R = 48; // decision radius

/* ── little building blocks ───────────────────────────────────────────── */

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
  fill: string;
  stroke: string;
  title: string;
  sub?: string;
  titleSize?: number;
  center?: boolean;
  titleFont?: string;
};

const Box = ({
  x, y, w, h, rx = 12, fill, stroke, title, sub, titleSize = 15,
  center = false, titleFont = "sans-serif",
}: BoxProps) => {
  const tx = center ? x + w / 2 : x + 18;
  const anchor = center ? "middle" : "start";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={1.3} />
      <text
        x={tx} y={sub ? y + 27 : y + h / 2 + 5.5} textAnchor={anchor}
        fontSize={titleSize} fontWeight={700} fill={INK} fontFamily={titleFont}
      >
        {title}
      </text>
      {sub && (
        <text x={tx} y={y + 47} textAnchor={anchor} fontSize={12} fill={MUTED} fontFamily="sans-serif">
          {sub}
        </text>
      )}
    </g>
  );
};

/** Round decision node with up to two lines of label. */
const Decision = ({ cx, cy, lines }: { cx: number; cy: number; lines: string[] }) => (
  <g>
    <circle cx={cx} cy={cy} r={R} fill={DEC_BG} stroke={DEC_LINE} strokeWidth={1.3} />
    {lines.map((l, i) => (
      <text
        key={l}
        x={cx}
        y={cy + 4 - (lines.length - 1) * 7 + i * 14}
        textAnchor="middle"
        fontSize={12}
        fill={INK}
        fontFamily="sans-serif"
      >
        {l}
      </text>
    ))}
  </g>
);

/** Small label that sits on a branch, like the reference flow charts. */
const Chip = ({ x, y, text }: { x: number; y: number; text: string }) => {
  const w = text.length * 6.4 + 16;
  return (
    <g>
      <rect x={x} y={y - 11} width={w} height={22} rx={4} fill={ACCENT_BG} />
      <text x={x + 8} y={y + 4} fontSize={11.5} fill={ACCENT} fontFamily="sans-serif">
        {text}
      </text>
    </g>
  );
};

const wire = {
  stroke: WIRE,
  strokeWidth: 1.4,
  fill: "none",
  markerEnd: "url(#ia-tip)",
} as const;

const Line = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <path {...wire} d={`M ${x1} ${y1} L ${x2} ${y2}`} />
);

/* ── spine geometry, top to bottom ────────────────────────────────────── */
const Y = {
  landing: 34,
  signup: 128,
  pull: 222,
  decReport: 362, // circle centre
  onboarding: 448,
  welcome: 542,
  locked: 636,
  paywall: 730,
  decPaid: 870, // circle centre
  unlocked: 956,
  bus: 1046, // horizontal bus feeding the three routes
  routes: 1082,
};

/** The three products the score can hand someone off to. */
const ROUTES = [
  { code: "DRP", name: "Debt Relief", chip: "already defaulted", fill: "#fdece5", line: "#ecc9bb", x: 56 },
  { code: "DCP", name: "Consolidation", chip: "paying, stretched", fill: "#e6f0f6", line: "#c3d7e2", x: 336 },
  { code: "DEP", name: "Elimination", chip: "wants to clear it", fill: "#f2fbdc", line: "#d3e5a8", x: 616 },
];
const ROUTE_W = 250;

/**
 * The information architecture as a user flow: one spine down the middle,
 * decision points where the product genuinely forks, and labelled branches
 * for the paths people actually take — including the ones that end early.
 */
export default function IaDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        className="h-auto w-full"
        role="img"
        aria-label="Credit Insights user flow: landing, sign up and OTP, credit report pull, a decision on whether a report exists, onboarding, welcome, locked home, context led paywall, a decision on paying, unlocked home, then routing to DRP, DCP or DEP."
      >
        <defs>
          <marker
            id="ia-tip" viewBox="0 0 10 10" refX="8.5" refY="5"
            markerWidth="7" markerHeight="7" orient="auto-start-reverse"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill={WIRE} />
          </marker>
        </defs>

        {/* ─── band labels, kept off the wires ─── */}
        {[
          ["ACQUISITION", SX, 18],
          ["ON THE LOCKED HOME", 410, 620],
          ["ROUTED BY THE REPORT", 768, 1042],
        ].map(([t, x, y]) => (
          <text
            key={t as string}
            x={x as number}
            y={y as number}
            fontSize={10.5}
            letterSpacing={2}
            fill={MUTED}
            fontFamily="sans-serif"
          >
            {t}
          </text>
        ))}

        {/* ─── the spine ─── */}
        <Box
          x={SX} y={Y.landing} w={SW} h={PH} rx={PH / 2}
          fill={CREAM} stroke={CREAM_LINE} title="Landing page" center
        />
        <Line x1={SC} y1={Y.landing + PH} x2={SC} y2={Y.signup} />

        <Box
          x={SX} y={Y.signup} w={SW} h={NH} fill="#fff" stroke={CARD_LINE}
          title="Sign up · OTP" sub="Name and mobile, as per PAN"
        />
        <Line x1={SC} y1={Y.signup + NH} x2={SC} y2={Y.pull} />

        <Box
          x={SX} y={Y.pull} w={SW} h={NH} fill="#fff" stroke={CARD_LINE}
          title="Pull credit report" sub="Consent, then bureau fetch"
        />
        <Line x1={SC} y1={Y.pull + NH} x2={SC} y2={Y.decReport - R} />

        <Decision cx={SC} cy={Y.decReport} lines={["Report", "found?"]} />

        {/* no-record branch */}
        <Chip x={SC + R + 16} y={Y.decReport} text="no record" />
        <Line x1={SC + R} y1={Y.decReport} x2={396} y2={Y.decReport} />
        <Box
          x={396} y={Y.decReport - NH / 2} w={230} h={NH} fill="#fff" stroke={CARD_LINE}
          title="New to credit path" sub="Education, not a score"
        />
        <Line x1={626} y1={Y.decReport} x2={706} y2={Y.decReport} />
        <Box
          x={706} y={Y.decReport - PH / 2} w={276} h={PH} rx={PH / 2}
          fill={END_BG} stroke={END_LINE} title="How to build a score" center titleSize={14}
        />

        {/* yes branch continues down the spine */}
        <Chip x={SC + 14} y={Y.decReport + R + 26} text="report found" />
        <Line x1={SC} y1={Y.decReport + R} x2={SC} y2={Y.onboarding} />

        <Box
          x={SX} y={Y.onboarding} w={SW} h={NH} fill="#fff" stroke={CARD_LINE}
          title="Onboarding" sub="4 questions, one per screen"
        />
        <Line x1={SC} y1={Y.onboarding + NH} x2={SC} y2={Y.welcome} />

        <Box
          x={SX} y={Y.welcome} w={SW} h={NH} fill="#fff" stroke={CARD_LINE}
          title="Welcome aboard" sub="Confirmation, then the reveal"
        />
        <Line x1={SC} y1={Y.welcome + NH} x2={SC} y2={Y.locked} />

        <Box
          x={SX} y={Y.locked} w={SW} h={NH} fill={ACCENT_BG} stroke={`${ACCENT}55`}
          title="Home — locked" sub="Score free, the reason is not"
        />
        {/* what is on the locked home */}
        <Line x1={SX + SW} y1={Y.locked + NH / 2} x2={410} y2={Y.locked + NH / 2} />
        <Box
          x={410} y={Y.locked - 4} w={572} h={40} rx={8} fill="#fff" stroke={CARD_LINE}
          title="Visible: score and band · savings estimate · one flagged account"
          titleSize={12.5}
        />
        <Box
          x={410} y={Y.locked + 44} w={572} h={40} rx={8} fill={CREAM} stroke={CREAM_LINE}
          title="Locked: full report · 5 score factors · boost plan · goal tracker"
          titleSize={12.5}
        />

        <Line x1={SC} y1={Y.locked + NH} x2={SC} y2={Y.paywall} />

        <Box
          x={SX} y={Y.paywall} w={SW} h={NH} fill={ACCENT_BG} stroke={`${ACCENT}55`}
          title="Context-led paywall" sub="Priced against the saving it unlocks"
        />
        <Line x1={SC} y1={Y.paywall + NH} x2={SC} y2={Y.decPaid - R} />

        <Decision cx={SC} cy={Y.decPaid} lines={["Paid?"]} />

        {/* not now */}
        <Chip x={SC + R + 16} y={Y.decPaid} text="not now" />
        <Line x1={SC + R} y1={Y.decPaid} x2={396} y2={Y.decPaid} />
        <Box
          x={396} y={Y.decPaid - PH / 2} w={230} h={PH} rx={PH / 2}
          fill={END_BG} stroke={END_LINE} title="Free score, kept" center titleSize={14}
        />

        <Chip x={SC + 14} y={Y.decPaid + R + 26} text="paid" />
        <Line x1={SC} y1={Y.decPaid + R} x2={SC} y2={Y.unlocked} />

        <Box
          x={SX} y={Y.unlocked} w={SW} h={NH} fill={ACCENT_BG} stroke={`${ACCENT}55`}
          title="Home — unlocked" sub="Same skeleton, everything filled in"
        />

        {/* ─── routing fan: one bus, three drops ─── */}
        <path
          d={`M ${SC} ${Y.unlocked + NH} L ${SC} ${Y.bus} M ${ROUTES[0].x + ROUTE_W / 2} ${Y.bus} L ${
            ROUTES[2].x + ROUTE_W / 2
          } ${Y.bus}`}
          stroke={WIRE}
          strokeWidth={1.4}
          fill="none"
        />
        {ROUTES.map((r) => {
          const cx = r.x + ROUTE_W / 2;
          return (
            <g key={r.code}>
              <Line x1={cx} y1={Y.bus} x2={cx} y2={Y.routes} />
              <Chip x={cx + 10} y={Y.bus + 18} text={r.chip} />
              <Box
                x={r.x} y={Y.routes} w={ROUTE_W} h={56} rx={10}
                fill={r.fill} stroke={r.line} title={r.code} sub={r.name}
                titleSize={17} titleFont="serif"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
