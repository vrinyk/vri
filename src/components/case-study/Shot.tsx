import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

interface ShotProps {
  src: string;
  label: string;
  className?: string;
  aspectRatio?: string;
}

/**
 * A product screenshot in the case study. Shows the top of the screen in a
 * framed 16:10 crop and opens the full-height image in a lightbox on click —
 * these are dense CRM screens, so the crop alone is never readable.
 */
export default function Shot({
  src,
  label,
  className = "",
  aspectRatio = "16/10",
}: ShotProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${label} full size`}
        className={`group relative block w-full overflow-hidden rounded-lg border border-border bg-secondary/40 ${className}`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="pointer-events-none absolute inset-0 bg-[#1f232d]/0 transition-colors duration-300 group-hover:bg-[#1f232d]/10" />
        <span className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1f232d]/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4 text-white" />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#1f232d]/88 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="fixed right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 transition-colors hover:bg-white"
          >
            <X className="h-5 w-5 text-[#1f232d]" />
          </button>
          <figure className="my-auto w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={label}
              className="w-full rounded-lg bg-white shadow-2xl"
            />
            <figcaption className="mt-3 text-center font-sans text-[13px] text-white/80">
              {label}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
