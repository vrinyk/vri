import { useState } from "react";
import { X } from "lucide-react";

export const INK = "#1f232d";
export const MUTED = "#6b6f7a";
export const PAPER = "#fbfaf7";
export const LINE = "#e6e0d5";
export const ACCENT = "#265d73";
export const ACCENT_BG = "#dbeef8";
export const GREEN = "#294b3a";
export const GREEN_BG = "#dce8e1";
export const CORAL = "#864432";
export const CORAL_BG = "#f9ddd4";
/** Score bands, matched to the EMI Score UI. */
export const RISK = "#d9433a";
export const FAIR = "#e8a23a";
export const SAFE = "#2e9d5b";

/**
 * A bare phone: dark bezel straight onto the page, no card or panel behind
 * it. `tall` screens scroll inside the frame. Click opens the full screen.
 */
export function Phone({
  src,
  alt,
  width = 200,
  tall = false,
  caption,
  dim = false,
}: {
  src: string;
  alt: string;
  width?: number;
  tall?: boolean;
  caption?: string;
  dim?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const height = Math.round((width * 875) / 414);
  const r = Math.max(14, Math.round(width * 0.13));
  return (
    <figure className="flex shrink-0 flex-col items-center" style={{ width }}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt} full size`}
        className="group relative block transition-transform duration-300 hover:-translate-y-1"
        style={{
          width,
          height,
          padding: Math.max(4, Math.round(width * 0.03)),
          borderRadius: r,
          background: "#14181f",
          boxShadow: "0 18px 36px -16px rgba(20,24,31,0.45)",
          opacity: dim ? 0.92 : 1,
        }}
      >
        <span
          className={`block h-full w-full bg-white ${tall ? "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "overflow-hidden"}`}
          style={{ borderRadius: r - 5 }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={tall ? "block w-full" : "block h-full w-full object-cover object-top"}
          />
        </span>
      </button>
      {caption && (
        <figcaption
          className="mt-2.5 text-center font-sans text-[11.5px] leading-snug"
          style={{ color: MUTED }}
        >
          {caption}
        </figcaption>
      )}
      {open && <Zoom src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}

export function Zoom({ src, alt, onClose, wide = false }: { src: string; alt: string; onClose: () => void; wide?: boolean }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1f232d]/88 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 hover:bg-white"
      >
        <X className="h-5 w-5" style={{ color: INK }} />
      </button>
      <img
        src={src}
        alt={alt}
        className="my-auto rounded-[1.2rem] bg-white shadow-2xl"
        style={{ width: wide ? 1200 : 414, maxWidth: "100%" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/** A plain image (board, screenshot) that opens full size. No frame. */
export function Board({ src, alt, className = "", caption }: { src: string; alt: string; className?: string; caption?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <figure className={className}>
      <button type="button" onClick={() => setOpen(true)} aria-label={`Open ${alt} full size`} className="block w-full overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-0.5">
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </button>
      {caption && (
        <figcaption className="mt-2 font-sans text-[12px] leading-snug" style={{ color: MUTED }}>
          {caption}
        </figcaption>
      )}
      {open && <Zoom src={src} alt={alt} wide onClose={() => setOpen(false)} />}
    </figure>
  );
}

/** Hand-drawn style arrow between screens in a flow. */
export function FlowArrow({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`flex shrink-0 flex-col items-center justify-center gap-1 ${className}`} aria-hidden>
      <svg width="44" height="18" viewBox="0 0 44 18" fill="none">
        <path d="M2 9h36M31 3l7 6-7 6" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && (
        <span className="max-w-[70px] text-center font-sans text-[10px] leading-tight" style={{ color: MUTED }}>
          {label}
        </span>
      )}
    </div>
  );
}

export function Eyebrow({ children, color = ACCENT }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="mb-2 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

export function Quote({ text, who }: { text: string; who?: string }) {
  return (
    <div className="rounded-xl px-4 py-3" style={{ background: "#fff", border: `1px solid ${INK}12` }}>
      <p className="font-sans text-[13.5px] italic leading-snug" style={{ color: INK }}>
        “{text}”
      </p>
      {who && (
        <p className="mt-1.5 font-sans text-[11px]" style={{ color: MUTED }}>
          {who}
        </p>
      )}
    </div>
  );
}

/** Red/green "what broke / what changed" pair used after each round. */
export function Learned({ broke, changed }: { broke: string[]; changed: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl p-4" style={{ background: `${CORAL_BG}66`, border: `1px solid ${CORAL_BG}` }}>
        <Eyebrow color={CORAL}>What broke</Eyebrow>
        <ul className="space-y-1.5">
          {broke.map((b) => (
            <li key={b} className="flex gap-2 font-sans text-[13px] leading-snug" style={{ color: INK }}>
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: CORAL }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl p-4" style={{ background: `${GREEN_BG}66`, border: `1px solid ${GREEN_BG}` }}>
        <Eyebrow color={GREEN}>What I changed</Eyebrow>
        <ul className="space-y-1.5">
          {changed.map((b) => (
            <li key={b} className="flex gap-2 font-sans text-[13px] leading-snug" style={{ color: INK }}>
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: GREEN }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * A collage of overlapping, slightly tilted phones. Groups a whole version
 * into one compact picture instead of a row that eats the slide.
 */
export function Stack({
  screens,
  width = 120,
  overlap = 0.42,
  tilt = 5,
  className = "",
}: {
  screens: { src: string; label: string }[];
  width?: number;
  overlap?: number;
  tilt?: number;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const n = screens.length;
  const mid = (n - 1) / 2;
  const height = Math.round((width * 875) / 414);
  const stepX = width * (1 - overlap);
  const r = Math.max(12, Math.round(width * 0.13));
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: width + stepX * (n - 1), height: height + 24, maxWidth: "100%" }}>
      {screens.map((s, i) => {
        const d = i - mid;
        return (
          <button
            key={s.label + i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open ${s.label}`}
            className="absolute top-3 transition-transform duration-300 hover:z-30 hover:!rotate-0 hover:-translate-y-2"
            style={{
              left: i * stepX,
              width,
              height,
              padding: Math.max(3, Math.round(width * 0.03)),
              borderRadius: r,
              background: "#14181f",
              boxShadow: "0 14px 28px -12px rgba(20,24,31,0.45)",
              transform: `rotate(${d * tilt}deg) translateY(${Math.abs(d) * 8}px)`,
              zIndex: 10 - Math.round(Math.abs(d) * 2),
            }}
          >
            <span className="block h-full w-full overflow-hidden bg-white" style={{ borderRadius: r - 4 }}>
              <img src={s.src} alt={s.label} loading="lazy" className="block h-full w-full object-cover object-top" />
            </span>
          </button>
        );
      })}
      {open !== null && <Zoom src={screens[open].src} alt={screens[open].label} onClose={() => setOpen(null)} />}
    </div>
  );
}

/** Big slide title with an optional eyebrow and one-line subtitle. */
export function Title({ eyebrow, title, sub }: { eyebrow?: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8 md:mb-10">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-4xl font-serif text-[2.3rem] font-semibold leading-[1.05] md:text-[3.6rem]" style={{ color: INK }}>
        {title}
      </h2>
      {sub && (
        <p className="mt-3 max-w-2xl font-sans text-[16px] leading-snug md:text-[18px]" style={{ color: MUTED }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** Short pointers. Each item: bold lead + optional plain tail. */
export function Points({ items, color = ACCENT, size = "md" }: { items: (string | [string, string])[]; color?: string; size?: "sm" | "md" }) {
  const t = size === "sm" ? "text-[13.5px]" : "text-[15.5px]";
  return (
    <ul className="space-y-2.5">
      {items.map((it) => {
        const [lead, tail] = Array.isArray(it) ? it : [it, ""];
        return (
          <li key={lead} className={`flex gap-3 font-sans leading-snug ${t}`} style={{ color: INK }}>
            <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-[3px]" style={{ background: color }} />
            <span>
              <strong className="font-semibold">{lead}</strong>
              {tail && <span style={{ color: MUTED }}> {tail}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Sub heading used inside slides. */
export function Sub({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`mb-3 font-sans text-[20px] font-bold md:text-[22px] ${className}`} style={{ color: "#2e2e2e" }}>
      {children}
    </h3>
  );
}

/** A horizontal row that scrolls sideways on small screens. */
export function Row({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`hide-scrollbar -mx-5 overflow-x-auto px-5 pb-3 md:mx-0 md:px-0 ${className}`}>
      <div className="flex w-max items-start gap-4 md:gap-5">{children}</div>
    </div>
  );
}
