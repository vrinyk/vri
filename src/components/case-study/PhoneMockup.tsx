import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export type Screen = {
  src: string;
  label: string;
  /** Tall scrolling pages get shown from the top and are fully readable in the lightbox. */
  tall?: boolean;
};

interface PhoneMockupProps {
  screens: Screen[];
  /** Frame width in px. Height follows the 414 x 875 screen ratio. */
  width?: number;
  className?: string;
}

/**
 * Clickable phone frame — steps through a set of screens and opens any of them
 * full size in a lightbox. Used for the shipped-experiment screens.
 */
export default function PhoneMockup({
  screens,
  width = 260,
  className = "",
}: PhoneMockupProps) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLSpanElement | null>(null);

  const count = screens.length;
  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count]
  );

  // Arrow keys step through screens; Escape closes the lightbox.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = screens[index];
  const height = Math.round((width * 875) / 414);

  // Drive the long-page scroll in JS: the travel distance depends on the
  // image's real height, which CSS can't know ahead of time.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !current.tall || paused || open) return;

    let raf = 0;
    let direction = 1;
    let last = performance.now();
    const SPEED = 34; // px per second — slow enough to read

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0) {
        let next = el.scrollTop + direction * SPEED * dt;
        if (next >= max) {
          next = max;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        el.scrollTop = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current.tall, current.src, paused, open]);

  // Reset to the top whenever the screen changes.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [index]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label={`Open ${current.label} full size`}
        className="group relative rounded-[2.2rem] bg-[#1f232d] p-2 shadow-[0_18px_40px_rgba(31,35,45,0.28)] transition-transform duration-300 hover:-translate-y-1.5"
        style={{ width, height }}
      >
        <span className="block h-full w-full overflow-hidden rounded-[1.8rem] bg-white">
          {current.tall ? (
            /* Long pages travel top-to-bottom on a loop so the whole page is
               readable without a 1200px-tall frame. Hovering hands control
               back to the reader's wheel. */
            <span
              ref={scrollRef}
              className="block h-full w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <img src={current.src} alt={current.label} className="w-full" />
            </span>
          ) : (
            <img
              src={current.src}
              alt={current.label}
              className="h-full w-full object-cover object-top"
            />
          )}
        </span>
        {/* Expand affordance */}
        <span className="pointer-events-none absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#1f232d]/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4 text-white" />
        </span>
      </button>

      {/* Screen stepper */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e6e0d5] bg-[#fbfaf7] transition-colors hover:bg-[#efe9de]"
        >
          <ChevronLeft className="h-3.5 w-3.5 text-[#1f232d]" />
        </button>
        <div className="flex items-center gap-1.5">
          {screens.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={s.label}
              className={`rounded-full transition-all ${
                i === index ? "h-2 w-5 bg-[#1f232d]" : "h-2 w-2 bg-[#1f232d]/25"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e6e0d5] bg-[#fbfaf7] transition-colors hover:bg-[#efe9de]"
        >
          <ChevronRight className="h-3.5 w-3.5 text-[#1f232d]" />
        </button>
      </div>

      <p className="mt-2 text-center font-sans text-[13px] text-[#6b6f7a]">
        {current.label}
      </p>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f232d]/85 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 transition-colors hover:bg-white"
          >
            <X className="h-5 w-5 text-[#1f232d]" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous screen"
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 transition-colors hover:bg-white md:left-10"
          >
            <ChevronLeft className="h-5 w-5 text-[#1f232d]" />
          </button>

          <div
            className="max-h-full overflow-y-auto rounded-[1.6rem] bg-white shadow-2xl"
            style={{ width: 414 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.src} alt={current.label} className="w-full" />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next screen"
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 transition-colors hover:bg-white md:right-10"
          >
            <ChevronRight className="h-5 w-5 text-[#1f232d]" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-1.5 font-sans text-[13px] font-medium text-[#1f232d]">
            {current.label} · {index + 1} / {count}
          </p>
        </div>
      )}
    </div>
  );
}
