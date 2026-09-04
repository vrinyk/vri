const VW = 1266;
const VH = 748;
const INK = "#1f232d";

/** One lane per stage of the journey, in the order a user meets them. */
const LANES = [
  { id: 1, title: "ACQUISITION", x: 6, head: "#fbf0dd", body: "#fdf7ee", node: "#dd9a3b", wire: "#c9862c" },
  { id: 2, title: "ONBOARDING", x: 322, head: "#ece2fb", body: "#f6f2fe", node: "#7b52d3", wire: "#6b45bd" },
  { id: 3, title: "LOCKED · PAYWALL", x: 638, head: "#dfecfb", body: "#f0f7fe", node: "#3f8fdd", wire: "#2f7bc6" },
  { id: 4, title: "UNLOCKED · ROUTED", x: 954, head: "#e0f0e4", body: "#f1f8f2", node: "#4d9c5f", wire: "#3d8a4e" },
] as const;

const LANE_W = 306;
const BODY_Y = 78;
const BODY_H = 652;

const [L1, L2, L3, L4] = LANES;
const C1 = L1.x + LANE_W / 2; // 159
const C2 = L2.x + LANE_W / 2; // 475
const C3 = L3.x + LANE_W / 2; // 791
const C4 = L4.x + LANE_W / 2; // 1107

const NW = 200; // standard node width
const NH = 46; // standard node height

/* ── primitives ───────────────────────────────────────────────────────── */

const Node = ({
  x, y, w = NW, h = NH, rx = 8, fill, label,
}: { x: number; y: number; w?: number; h?: number; rx?: number; fill: string; label: string }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} />
    <text
      x={x + w / 2} y={y + h / 2 + 5} textAnchor="middle"
      fontSize={13.5} fontWeight={600} fill="#fff" fontFamily="sans-serif"
    >
      {label}
    </text>
  </g>
);

const Diamond = ({
  cx, cy, rx, ry, fill, lines,
}: { cx: number; cy: number; rx: number; ry: number; fill: string; lines: string[] }) => (
  <g>
    <polygon
      points={`${cx},${cy - ry} ${cx + rx},${cy} ${cx},${cy + ry} ${cx - rx},${cy}`}
      fill={fill}
    />
    {lines.map((l, i) => (
      <text
        key={l}
        x={cx} y={cy + 5 - (lines.length - 1) * 8 + i * 16}
        textAnchor="middle" fontSize={13} fontWeight={600} fill="#fff" fontFamily="sans-serif"
      >
        {l}
      </text>
    ))}
  </g>
);

const Wire = ({ d, c, tip }: { d: string; c: string; tip: number }) => (
  <path
    d={d}
    fill="none"
    stroke={c}
    strokeWidth={1.9}
    strokeLinecap="round"
    markerEnd={`url(#fl-tip-${tip})`}
  />
);

const Tag = ({
  x, y, text, c, anchor = "start",
}: { x: number; y: number; text: string; c: string; anchor?: "start" | "middle" | "end" }) => (
  <text
    x={x} y={y} textAnchor={anchor}
    fontSize={11.5} fontWeight={600} fill={c} fontFamily="sans-serif"
  >
    {text}
  </text>
);

/** Horizontal out, then vertical, with a rounded corner. */
const hv = (x1: number, y1: number, x2: number, y2: number, r = 10) => {
  const dx = x2 > x1 ? 1 : -1;
  const dy = y2 > y1 ? 1 : -1;
  return `M ${x1} ${y1} L ${x2 - r * dx} ${y1} Q ${x2} ${y1} ${x2} ${y1 + r * dy} L ${x2} ${y2}`;
};

/** Out sideways, along, then back in — the cross-lane and loop-back shape. */
const hvh = (x1: number, y1: number, xm: number, y2: number, x2: number, r = 10) => {
  const dx1 = xm > x1 ? 1 : -1;
  const dy = y2 > y1 ? 1 : -1;
  const dx2 = x2 > xm ? 1 : -1;
  return (
    `M ${x1} ${y1} L ${xm - r * dx1} ${y1} Q ${xm} ${y1} ${xm} ${y1 + r * dy} ` +
    `L ${xm} ${y2 - r * dy} Q ${xm} ${y2} ${xm + r * dx2} ${y2} L ${x2} ${y2}`
  );
};

const PRODUCTS = [
  { y: 364, label: "DRP · Debt relief" },
  { y: 434, label: "DCP · Consolidation" },
  { y: 504, label: "DEP · Elimination" },
];

/**
 * The user flow as a swimlane diagram: one lane per stage, diamonds only where
 * the product genuinely forks, and named endings for the people who stop early
 * — no report found, and not paying, are both journeys somebody takes.
 */
export default function IaDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        className="h-auto w-full"
        role="img"
        aria-label="Credit Insights user flow across four lanes: acquisition, onboarding, locked and paywall, then unlocked and routed to DRP, DCP or DEP."
      >
        <defs>
          {LANES.map((l) => (
            <marker
              key={l.id} id={`fl-tip-${l.id}`} viewBox="0 0 10 10"
              refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 9 5 L 0 9 z" fill={l.wire} />
            </marker>
          ))}
        </defs>

        {/* ─── lanes ─── */}
        {LANES.map((l) => (
          <g key={l.id}>
            <rect x={l.x} y={8} width={LANE_W} height={52} rx={10} fill={l.head} />
            <text
              x={l.x + LANE_W / 2} y={40} textAnchor="middle"
              fontSize={12.5} fontWeight={700} letterSpacing={1.4} fill={INK}
              fontFamily="sans-serif"
            >
              {l.title}
            </text>
            <rect
              x={l.x} y={BODY_Y} width={LANE_W} height={BODY_H} rx={14}
              fill={l.body} stroke={l.head} strokeWidth={1.2}
            />
          </g>
        ))}

        {/* ══════════ LANE 1 · ACQUISITION ══════════ */}
        <Node x={C1 - 90} y={112} w={180} h={44} rx={22} fill={L1.node} label="Start" />
        <Wire d={`M ${C1} 156 L ${C1} 190`} c={L1.wire} tip={1} />

        <Node x={C1 - NW / 2} y={190} fill={L1.node} label="Landing page" />
        <Wire d={`M ${C1} 236 L ${C1} 268`} c={L1.wire} tip={1} />

        <Node x={C1 - NW / 2} y={268} fill={L1.node} label="Sign up · OTP" />
        <Wire d={`M ${C1} 314 L ${C1} 346`} c={L1.wire} tip={1} />

        <Node x={C1 - NW / 2} y={346} fill={L1.node} label="Pull credit report" />
        <Wire d={`M ${C1} 392 L ${C1} 426`} c={L1.wire} tip={1} />

        <Diamond cx={C1} cy={478} rx={104} ry={52} fill={L1.node} lines={["Report", "found?"]} />

        {/* No → build-credit ending */}
        <Wire d={hv(C1 - 104, 478, 46, 576)} c={L1.wire} tip={1} />
        <Tag x={56} y={524} text="No" c={L1.wire} />
        <Node x={22} y={576} w={186} fill={L1.node} label="New to credit path" />
        <Wire d={`M 115 622 L 115 654`} c={L1.wire} tip={1} />
        <Node x={22} y={654} w={230} h={44} rx={22} fill={L1.node} label="How to build a score" />

        {/* Yes → lane 2 */}
        <Wire d={hvh(C1 + 104, 478, 292, 135, L2.x + 53, 12)} c={L1.wire} tip={1} />
        <Tag x={286} y={462} text="Yes" c={L1.wire} anchor="end" />

        {/* ══════════ LANE 2 · ONBOARDING ══════════ */}
        <Node x={C2 - NW / 2} y={112} fill={L2.node} label="Ask 4 questions" />
        <Wire d={`M ${C2} 158 L ${C2} 192`} c={L2.wire} tip={2} />

        <Diamond cx={C2} cy={244} rx={104} ry={52} fill={L2.node} lines={["Missed any", "EMIs?"]} />

        <Wire d={hv(C2 - 104, 244, 400, 346)} c={L2.wire} tip={2} />
        <Tag x={356} y={286} text="Yes" c={L2.wire} />
        <Node x={334} y={346} w={132} h={44} fill={L2.node} label="Tag: at risk" />

        <Wire d={hv(C2 + 104, 244, 550, 346)} c={L2.wire} tip={2} />
        <Tag x={566} y={286} text="No" c={L2.wire} />
        <Node x={484} y={346} w={132} h={44} fill={L2.node} label="Tag: healthy" />

        <Wire d={hv(400, 390, C2, 436)} c={L2.wire} tip={2} />
        <Wire d={hv(550, 390, C2, 436)} c={L2.wire} tip={2} />
        <Node x={C2 - NW / 2} y={436} fill={L2.node} label="Welcome aboard" />

        {/* → lane 3 */}
        <Wire d={hvh(C2 + NW / 2, 459, 608, 135, L3.x + 53, 12)} c={L2.wire} tip={2} />

        {/* ══════════ LANE 3 · LOCKED · PAYWALL ══════════ */}
        <Node x={C3 - NW / 2} y={112} fill={L3.node} label="Home — locked" />
        <Wire d={`M ${C3} 158 L ${C3} 190`} c={L3.wire} tip={3} />

        <Node x={C3 - NW / 2} y={190} fill={L3.node} label="Context-led paywall" />
        <Wire d={`M ${C3} 236 L ${C3} 270`} c={L3.wire} tip={3} />

        <Diamond cx={C3} cy={322} rx={104} ry={52} fill={L3.node} lines={["Paid?"]} />

        {/* No → keeps the free score, then loops back to the locked home */}
        <Wire d={hv(C3 - 104, 322, 678, 424)} c={L3.wire} tip={3} />
        <Tag x={694} y={362} text="No" c={L3.wire} />
        {/* Endings are pills, so a stop reads differently from a step. */}
        <Node x={660} y={424} w={196} h={44} rx={22} fill={L3.node} label="Free score, kept" />
        <Wire d={hvh(660, 446, 650, 135, C3 - NW / 2, 12)} c={L3.wire} tip={3} />

        {/* Yes → lane 4 */}
        <Wire d={hvh(C3 + 104, 322, 924, 135, L4.x + 53, 12)} c={L3.wire} tip={3} />
        <Tag x={918} y={306} text="Yes" c={L3.wire} anchor="end" />

        {/* ══════════ LANE 4 · UNLOCKED · ROUTED ══════════ */}
        <Node x={C4 - NW / 2} y={112} fill={L4.node} label="Home — unlocked" />
        <Wire d={`M ${C4} 158 L ${C4} 194`} c={L4.wire} tip={4} />

        <Diamond
          cx={C4} cy={252} rx={104} ry={58} fill={L4.node}
          lines={["What does the", "report say?"]}
        />

        {/* one trunk down the left of the lane, one stub per product */}
        <path
          d={hv(C4, 310, 1000, 387, 12)}
          fill="none" stroke={L4.wire} strokeWidth={1.9} strokeLinecap="round"
        />
        <path d="M 1000 387 L 1000 527" fill="none" stroke={L4.wire} strokeWidth={1.9} />
        {PRODUCTS.map((p) => (
          <g key={p.label}>
            <Wire d={`M 1000 ${p.y + 23} L 1022 ${p.y + 23}`} c={L4.wire} tip={4} />
            <Node x={1022} y={p.y} w={220} fill={L4.node} label={p.label} />
          </g>
        ))}
      </svg>
    </div>
  );
}
