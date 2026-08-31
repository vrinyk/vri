/**
 * Rubber-stamp resume badge.
 *
 * Rebuilt as live SVG rather than the Figma export — that export had every
 * letter flattened into one of 4,455 <path> elements, so the "Deigner" typo
 * could not be corrected. Text here is real <text>, so it stays editable and
 * the file is ~1.4 MB lighter.
 *
 * Curved lettering is positioned letter-by-letter rather than with <textPath>,
 * because textPath's startOffset/textAnchor combination renders inconsistently
 * across engines. Per-letter transforms are exact everywhere.
 *
 * Must be rendered inline (not via <img src="...svg">) so the page's Oswald
 * webfont applies — an <img> would fall back to a system sans.
 */

const INK = "#B4462B";
const PAPER = "#F2EEE7";
const CX = 100;
const CY = 100;

interface ArcTextProps {
  text: string;
  /** Distance from centre to the letter baseline. */
  radius: number;
  /** Total angle the string spans, in degrees. */
  span: number;
  fontSize: number;
  fontWeight?: number;
  /** "top" reads over the top; "bottom" reads upright along the bottom. */
  side?: "top" | "bottom";
}

/** Lays a string around the circle, one <text> per character. */
function ArcText({
  text,
  radius,
  span,
  fontSize,
  fontWeight = 600,
  side = "top",
}: ArcTextProps) {
  const chars = [...text];
  const step = chars.length > 1 ? span / (chars.length - 1) : 0;

  return (
    <g fill={INK} fontFamily="'Oswald', sans-serif" fontWeight={fontWeight}>
      {chars.map((ch, i) => {
        // alpha: 0 = 12 o'clock, increasing clockwise.
        const alpha =
          side === "top"
            ? -span / 2 + i * step
            : 180 + span / 2 - i * step;
        const rad = (alpha * Math.PI) / 180;
        const x = CX + radius * Math.sin(rad);
        const y = CY - radius * Math.cos(rad);
        // Bottom letters need flipping so they read upright, not inverted.
        const rotation = side === "top" ? alpha : alpha + 180;
        return (
          <text
            key={`${ch}-${i}`}
            x={x}
            y={y}
            fontSize={fontSize}
            textAnchor="middle"
            transform={`rotate(${rotation} ${x} ${y})`}
          >
            {ch}
          </text>
        );
      })}
    </g>
  );
}

/** A row of small five-point stars. */
function StarRow({ y, count, size }: { y: number; count: number; size: number }) {
  const spacing = size * 2.4;
  const start = CX - ((count - 1) * spacing) / 2;
  return (
    <g fill={INK}>
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          transform={`translate(${start + i * spacing}, ${y}) scale(${size / 10})`}
          d="M0,-10 L2.9,-3.5 L10,-3.1 L4.5,1.5 L6.2,8.5 L0,4.7 L-6.2,8.5 L-4.5,1.5 L-10,-3.1 L-2.9,-3.5 Z"
        />
      ))}
    </g>
  );
}

interface ResumeStampProps {
  className?: string;
}

export function ResumeStamp({ className = "" }: ResumeStampProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Download resume"
    >
      {/* Stamped paper disc */}
      <circle cx={CX} cy={CY} r="99" fill={PAPER} />

      {/* Ink rings */}
      <circle cx={CX} cy={CY} r="94" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx={CX} cy={CY} r="88" fill="none" stroke={INK} strokeWidth="1" />

      {/* Curved lettering */}
      <ArcText
        text="VRINDA · DESIGNER · 2 YOE"
        radius={79}
        span={186}
        fontSize={13}
        fontWeight={600}
        side="top"
      />
      <ArcText
        text="DESIGNER PROFILE · OFFICIALLY HIREABLE"
        radius={80}
        span={200}
        fontSize={9}
        fontWeight={500}
        side="bottom"
      />

      {/* Inner dashed ring */}
      <circle
        cx={CX}
        cy={CY}
        r="63"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeDasharray="3 4.5"
        strokeLinecap="round"
      />

      {/* Centre block, tilted like a hand stamp */}
      <g transform={`rotate(-5 ${CX} ${CY})`}>
        <StarRow y={73} count={7} size={3.2} />
        <text
          x={CX}
          y="107"
          fill={INK}
          fontFamily="'Oswald', sans-serif"
          fontSize="25"
          fontWeight="600"
          textAnchor="middle"
        >
          DOWNLOAD
        </text>
        <text
          x={CX}
          y="124"
          fill={INK}
          fontFamily="'Oswald', sans-serif"
          fontSize="14"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="3"
        >
          RESUME
        </text>
        <StarRow y={137} count={7} size={3.2} />
      </g>
    </svg>
  );
}

export default ResumeStamp;
