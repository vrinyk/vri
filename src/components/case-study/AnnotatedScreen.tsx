import { useState } from "react";
import { X } from "lucide-react";

export type Annotation = {
  /** How far down the screen this component sits, 0 to 1. */
  at: number;
  title: string;
  body: string;
};

interface AnnotatedScreenProps {
  src: string;
  alt: string;
  notes: Annotation[];
  /** Width of the phone frame in px on desktop. */
  width?: number;
  className?: string;
}

const INK = "#1f232d";
const MUTED = "#6b6f7a";
const LINE = "#e6e0d5";
const ACCENT = "#265d73";

/**
 * A full screen shown uncropped with callouts down the left, each one wired to
 * the part of the UI it describes. The whole point is that the reader can see
 * the component and read why it exists without moving their eyes twice.
 *
 * `at` is a fraction of the IMAGE height, not of the container, so the phone is
 * rendered at its natural aspect ratio and never cropped — otherwise the
 * connector lines would point at the wrong thing.
 */
export default function AnnotatedScreen({
  src,
  alt,
  notes,
  width = 300,
  className = "",
}: AnnotatedScreenProps) {
  const [zoom, setZoom] = useState(false);

  return (
    <div className={className}>
      {/* ── Desktop: callouts wired to the screen ── */}
      {/* `items-stretch` (the flex default) is what makes this work: the notes
          column inherits the phone's height, so `top: at%` lands on the same
          part of the screen the note is describing. */}
      <div className="hidden md:flex">
        <div className="relative flex-1 pr-6">
          {notes.map((n, i) => (
            <div
              key={n.title}
              className="absolute right-6 flex w-full max-w-[330px] items-center justify-end gap-0"
              style={{
                top: `${n.at * 100}%`,
                transform: "translateY(-50%)",
              }}
            >
              <div className="text-right">
                <p
                  className="mb-1 font-sans text-[10.5px] tracking-[0.16em] uppercase"
                  style={{ color: ACCENT, opacity: 0.75 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="font-sans text-[14px] font-bold leading-tight"
                  style={{ color: INK }}
                >
                  {n.title}
                </p>
                <p
                  className="mt-1 font-sans text-[12.8px] leading-[1.45]"
                  style={{ color: MUTED }}
                >
                  {n.body}
                </p>
              </div>
              {/* connector: rule out to the phone edge, with an arrowhead */}
              <span
                aria-hidden
                className="absolute -right-6 top-1/2 flex w-6 items-center"
                style={{ transform: "translateY(-50%)" }}
              >
                <span className="h-px flex-1" style={{ background: `${ACCENT}66` }} />
                <span
                  className="h-0 w-0"
                  style={{
                    borderTop: "3.5px solid transparent",
                    borderBottom: "3.5px solid transparent",
                    borderLeft: `5px solid ${ACCENT}99`,
                  }}
                />
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label={`Open ${alt} full size`}
          className="shrink-0 rounded-[1.7rem] p-1.5 shadow-[0_16px_34px_rgba(31,35,45,0.22)] transition-transform duration-300 hover:-translate-y-1"
          style={{ width, background: INK }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-[1.35rem] bg-white"
          />
        </button>
      </div>

      {/* ── Mobile: screen first, then a numbered list ── */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label={`Open ${alt} full size`}
          className="mx-auto block w-full max-w-[260px] rounded-[1.5rem] p-1.5"
          style={{ background: INK }}
        >
          <img src={src} alt={alt} className="w-full rounded-[1.2rem] bg-white" />
        </button>
        <ol className="mt-5 space-y-3.5">
          {notes.map((n, i) => (
            <li key={n.title} className="flex gap-3">
              <span
                className="shrink-0 font-serif text-[14px]"
                style={{ color: ACCENT, opacity: 0.7 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p
                  className="font-sans text-[14px] font-bold leading-tight"
                  style={{ color: INK }}
                >
                  {n.title}
                </p>
                <p
                  className="mt-0.5 font-sans text-[13px] leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {n.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1f232d]/88 p-6 backdrop-blur-sm"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            aria-label="Close"
            className="fixed right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 hover:bg-white"
          >
            <X className="h-5 w-5" style={{ color: INK }} />
          </button>
          <img
            src={src}
            alt={alt}
            className="rounded-[1.4rem] bg-white shadow-2xl"
            style={{ width: 414, maxWidth: "100%", border: `1px solid ${LINE}` }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
