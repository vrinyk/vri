import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export type Screen = {
  src: string;
  label: string;
  /** Long pages get a slow auto scroll inside the frame. */
  tall?: boolean;
};

interface PhoneWallProps {
  screens: Screen[];
  /** How many render as full phone frames; the rest become thumbnails. */
  featured?: number;
  /** Frame width in px for the featured phones. */
  width?: number;
  className?: string;
}

/**
 * Shows several screens at once rather than one at a time, so the designs are
 * visible in the same fold as the reasoning beside them. Any screen opens full
 * size in a shared lightbox.
 */
export default function PhoneWall({
  screens,
  featured = 3,
  width = 176,
  className = "",
}: PhoneWallProps) {
  const [open, setOpen] = useState<number | null>(null);
  const height = Math.round((width * 875) / 414);

  const go = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? i : (i + delta + screens.length) % screens.length)),
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

  const lead = screens.slice(0, featured);
  const rest = screens.slice(featured);

  return (
    <div className={className}>
      {/* Featured phones, staggered for rhythm */}
      {/* Wraps on narrow screens — three 168px phones plus gaps overflow a
          375px viewport otherwise. */}
      <div className="flex flex-wrap items-start justify-center gap-4 lg:gap-5">
        {lead.map((s, i) => (
          <figure
            key={s.label}
            className="flex flex-col items-center"
            style={{ marginTop: i % 2 === 1 ? 22 : 0 }}
          >
            <PhoneFrame
              screen={s}
              width={width}
              height={height}
              onOpen={() => setOpen(i)}
            />
            <figcaption
              className="mt-2.5 max-w-[176px] text-center font-sans text-[11.5px] leading-snug"
              style={{ color: "#6b6f7a" }}
            >
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Remaining screens as thumbnails */}
      {rest.length > 0 && (
        <div className="mt-5 flex flex-wrap items-start justify-center gap-3">
          {rest.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setOpen(featured + i)}
              aria-label={`Open ${s.label} full size`}
              className="group relative overflow-hidden rounded-lg border transition-transform duration-300 hover:-translate-y-1"
              style={{ width: 74, height: 104, borderColor: "#e6e0d5", background: "#fff" }}
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute inset-0 bg-[#1f232d]/0 transition-colors group-hover:bg-[#1f232d]/15" />
            </button>
          ))}
        </div>
      )}

      {open !== null && (
        <Lightbox
          screen={screens[open]}
          index={open}
          count={screens.length}
          onClose={() => setOpen(null)}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      )}
    </div>
  );
}

function PhoneFrame({
  screen,
  width,
  height,
  onOpen,
}: {
  screen: Screen;
  width: number;
  height: number;
  onOpen: () => void;
}) {
  const scrollRef = useRef<HTMLSpanElement | null>(null);
  const [paused, setPaused] = useState(false);

  // Long pages travel top to bottom so the whole page is seen without a
  // 1200px frame. Distance depends on the image's real height, so this is
  // driven in JS rather than CSS keyframes.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !screen.tall || paused) return;
    let raf = 0;
    let dir = 1;
    let last = performance.now();
    const SPEED = 30;
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
  }, [screen.tall, screen.src, paused]);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={`Open ${screen.label} full size`}
      className="group relative rounded-[1.6rem] bg-[#1f232d] p-1.5 shadow-[0_14px_30px_rgba(31,35,45,0.24)] transition-transform duration-300 hover:-translate-y-1.5"
      style={{ width, height }}
    >
      <span className="block h-full w-full overflow-hidden rounded-[1.25rem] bg-white">
        {screen.tall ? (
          <span
            ref={scrollRef}
            className="block h-full w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <img src={screen.src} alt={screen.label} className="w-full" />
          </span>
        ) : (
          <img
            src={screen.src}
            alt={screen.label}
            className="h-full w-full object-cover object-top"
          />
        )}
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#1f232d]/85 opacity-0 transition-opacity group-hover:opacity-100">
        <Maximize2 className="h-3.5 w-3.5 text-white" />
      </span>
    </button>
  );
}

function Lightbox({
  screen, index, count, onClose, onPrev, onNext,
}: {
  screen: Screen; index: number; count: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f232d]/88 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={screen.label}
    >
      <button
        type="button" onClick={onClose} aria-label="Close"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 hover:bg-white"
      >
        <X className="h-5 w-5 text-[#1f232d]" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous screen"
        className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 hover:bg-white md:left-10"
      >
        <ChevronLeft className="h-5 w-5 text-[#1f232d]" />
      </button>
      <div
        className="max-h-full overflow-y-auto rounded-[1.4rem] bg-white shadow-2xl"
        style={{ width: 414 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={screen.src} alt={screen.label} className="w-full" />
      </div>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next screen"
        className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 hover:bg-white md:right-10"
      >
        <ChevronRight className="h-5 w-5 text-[#1f232d]" />
      </button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-1.5 font-sans text-[13px] font-medium text-[#1f232d]">
        {screen.label} · {index + 1} / {count}
      </p>
    </div>
  );
}
