import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { Screen } from "./PhoneWall";

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#e6e0d5";

interface PhoneCarouselProps {
  screens: Screen[];
  /** Frame width in px. Height follows a 414 x 875 phone. */
  width?: number;
  className?: string;
}

/**
 * One phone, many screens. Where PhoneWall shows a set side by side, this shows
 * a sequence in place — better when the screens belong to a single flow and the
 * reader should look at one at a time rather than compare them.
 *
 * Long pages scroll inside the frame; any screen opens full size.
 */
export default function PhoneCarousel({
  screens,
  width = 268,
  className = "",
}: PhoneCarouselProps) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [paused, setPaused] = useState(false);
  const panes = useRef<(HTMLDivElement | null)[]>([]);
  const n = screens.length;

  // Frame width is capped by the viewport so the arrows never get pushed off
  // screen on a phone. Height is derived in CSS so it tracks whichever wins.
  const frameW = `min(${width}px, 62vw)`;
  const frameH = `calc(${frameW} * 875 / 414)`;

  const go = useCallback(
    (d: number) => setI((v) => (v + d + n) % n),
    [n]
  );

  // A page taller than the frame travels top to bottom on its own, so the
  // whole screen is seen without touching it. Distance depends on the image's
  // real height, so this runs in JS rather than CSS keyframes.
  useEffect(() => {
    const el = panes.current[i];
    if (!el || !screens[i]?.tall || paused || zoom) return;
    let raf = 0;
    let dir = 1;
    let last = performance.now();
    const SPEED = 26;
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0) {
        let next = el.scrollTop + dir * SPEED * dt;
        if (next >= max) { next = max; dir = -1; }
        else if (next <= 0) { next = 0; dir = 1; }
        el.scrollTop = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [i, screens, paused, zoom]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, go]);

  const current = screens[i];

  return (
    <div className={className}>
      <div
        className="relative mx-auto"
        style={{ width: `calc(${frameW} + 96px)`, maxWidth: "100%" }}
      >
        {/* ── the phone ── */}
        <div
          className="relative mx-auto rounded-[1.9rem] bg-[#14181f] p-1.5 shadow-[0_20px_44px_-14px_rgba(20,24,31,0.45)]"
          style={{ width: frameW, height: frameH }}
        >
          <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-white">
            {/* One track, translated — keeps each screen's own scroll position
                instead of remounting the image on every step. */}
            <div
              className="flex h-full transition-transform duration-400 ease-out"
              style={{
                width: `${n * 100}%`,
                transform: `translateX(-${(i * 100) / n}%)`,
              }}
            >
              {screens.map((s, idx) => (
                <div
                  key={s.label}
                  ref={(el) => { panes.current[idx] = el; }}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onTouchStart={() => setPaused(true)}
                  className="h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ width: `${100 / n}%` }}
                >
                  <img src={s.src} alt={s.label} className="block w-full" />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label={`Open ${current.label} full size`}
            className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1f232d]/85 transition-colors hover:bg-[#1f232d]"
          >
            <Maximize2 className="h-3.5 w-3.5 text-white" />
          </button>
        </div>

        {/* ── arrows, flanking the frame ── */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-sm transition-colors hover:bg-[#f4efe6]"
          style={{ borderColor: LINE }}
        >
          <ChevronLeft className="h-4.5 w-4.5" style={{ color: INK }} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-sm transition-colors hover:bg-[#f4efe6]"
          style={{ borderColor: LINE }}
        >
          <ChevronRight className="h-4.5 w-4.5" style={{ color: INK }} />
        </button>
      </div>

      {/* ── caption and dots ── */}
      <p
        className="mt-4 text-center font-sans text-[13.5px] font-medium"
        style={{ color: INK }}
      >
        {current.label}
      </p>
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        {screens.map((s, idx) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setI(idx)}
            aria-label={s.label}
            aria-current={idx === i}
            className="rounded-full transition-all"
            style={
              idx === i
                ? { width: 20, height: 7, background: INK }
                : { width: 7, height: 7, background: `${INK}2e` }
            }
          />
        ))}
      </div>
      <p className="mt-2 text-center font-sans text-[11.5px]" style={{ color: MUTED }}>
        {i + 1} of {n} · scroll inside the phone, or open it full size
      </p>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1f232d]/88 p-6 backdrop-blur-sm"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
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
            src={current.src}
            alt={current.label}
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
          <p
            className="fixed bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-4 py-1.5 font-sans text-[13px] font-medium"
            style={{ color: INK }}
          >
            {current.label} · {i + 1} / {n}
          </p>
        </div>
      )}
    </div>
  );
}
