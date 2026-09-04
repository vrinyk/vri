import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screen } from "./PhoneWall";

interface PhoneFanProps {
  screens: Screen[];
  /** Width of the centre phone in px, on desktop. */
  width?: number;
  /** Horizontal offset between neighbours, as a fraction of `width`. */
  step?: number;
  /** How much each step away from centre shrinks and drops the phone. */
  falloff?: number;
  /** Soft backdrop behind the fan. Pass null to sit on the parent's colour. */
  tint?: string | null;
  className?: string;
}

const INK = "#1f232d";
const MUTED = "#6b6f7a";

/**
 * The hero arrangement: phones fanned out, centre one largest and in front,
 * bottoms bleeding off the frame. Reads as a product shot rather than a
 * contact sheet, which is what the journey slides need.
 *
 * Desktop only — at 375px a fan is unreadable, so small screens get a
 * snap-scrolling row instead.
 */
export default function PhoneFan({
  screens,
  width = 226,
  step = 0.64,
  falloff = 0.09,
  tint = "linear-gradient(165deg,#f6f2ff 0%,#eef3fb 55%,#f4f8f1 100%)",
  className = "",
}: PhoneFanProps) {
  const [open, setOpen] = useState<number | null>(null);
  const centre = (screens.length - 1) / 2;
  const frameH = Math.round(width * 2.02);
  const maxDrop = Math.round(centre * falloff * width * 1.1);

  const go = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + screens.length) % screens.length)),
    [screens.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <div className={className}>
      {/* ── Desktop fan ── */}
      <div
        className="relative hidden overflow-hidden rounded-[1.75rem] md:block"
        style={{ background: tint ?? undefined }}
      >
        {/* This wrapper clips the phones so their bottoms bleed off rather than
            spilling over the caption row underneath. */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{ height: frameH + maxDrop - Math.round(width * 0.42) }}
        >
          {screens.map((s, i) => {
            const d = Math.abs(i - centre);
            const scale = 1 - d * falloff;
            return (
              // The positioning transform lives on the wrapper, so the hover
              // lift on the button is free to compose with it.
              <div
                key={s.label}
                className="absolute top-0"
                style={{
                  left: "50%",
                  width,
                  height: frameH,
                  zIndex: 10 - Math.round(d * 2),
                  transform: `translateX(calc(-50% + ${(i - centre) * step * width}px)) translateY(${
                    d * falloff * width * 1.1
                  }px) scale(${scale})`,
                  transformOrigin: "top center",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open ${s.label} full size`}
                  className="block h-full w-full rounded-[1.9rem] bg-[#14181f] p-[6px] shadow-[0_26px_60px_-18px_rgba(20,24,31,0.5)] transition-transform duration-300 hover:-translate-y-2"
                >
                  <span className="block h-full w-full overflow-hidden rounded-[1.5rem] bg-white">
                    <img src={s.src} alt={s.label} className="block w-full" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <ol className="relative z-20 flex items-center justify-center gap-2 px-6 pb-5 pt-1">
          {screens.map((s, i) => (
            <li key={s.label} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="font-sans text-[11.5px] transition-colors hover:underline"
                style={{ color: i === Math.round(centre) ? INK : MUTED }}
              >
                {s.label}
              </button>
              {i < screens.length - 1 && (
                <span aria-hidden style={{ color: MUTED, opacity: 0.5 }}>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* ── Mobile: one at a time, swipe across ── */}
      <div
        className="-mx-5 overflow-hidden rounded-[1.5rem] px-5 py-6 md:hidden"
        style={{ background: tint ?? undefined }}
      >
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {screens.map((s, i) => (
            <figure key={s.label} className="shrink-0 snap-center">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open ${s.label} full size`}
                className="block rounded-[1.4rem] bg-[#14181f] p-1.5"
                style={{ width: 168 }}
              >
                <span className="block overflow-hidden rounded-[1.1rem] bg-white" style={{ height: 340 }}>
                  <img src={s.src} alt={s.label} className="w-full" />
                </span>
              </button>
              <figcaption
                className="mt-2 w-[168px] text-center font-sans text-[11.5px] leading-snug"
                style={{ color: MUTED }}
              >
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1f232d]/88 p-6 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={screens[open].label}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="fixed right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 hover:bg-white"
          >
            <X className="h-5 w-5" style={{ color: INK }} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous screen"
            className="fixed left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 hover:bg-white md:left-10"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: INK }} />
          </button>
          <img
            src={screens[open].src}
            alt={screens[open].label}
            className="rounded-[1.4rem] bg-white shadow-2xl"
            style={{ width: 414, maxWidth: "100%" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next screen"
            className="fixed right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 hover:bg-white md:right-10"
          >
            <ChevronRight className="h-5 w-5" style={{ color: INK }} />
          </button>
          <p className="fixed bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-1.5 font-sans text-[13px] font-medium" style={{ color: INK }}>
            {screens[open].label} · {open + 1} / {screens.length}
          </p>
        </div>
      )}
    </div>
  );
}
