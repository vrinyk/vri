import { Smartphone } from "lucide-react";

interface PhonePlaceholderProps {
  label: string;
  /** Frame width in px; height follows a 414 x 875 screen ratio. */
  width?: number;
  /** Small caption under the frame, e.g. which product this screen belongs to. */
  note?: string;
}

/**
 * An empty phone frame standing in for a screen that has not been exported
 * yet. Same proportions as PhoneWall so swapping a real image in later needs
 * no layout change.
 */
export default function PhonePlaceholder({
  label,
  width = 168,
  note,
}: PhonePlaceholderProps) {
  const height = Math.round((width * 875) / 414);
  return (
    <figure className="flex flex-col items-center">
      <div
        className="flex items-center justify-center rounded-[1.6rem] bg-[#1f232d] p-1.5"
        style={{ width, height }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[1.25rem] border-2 border-dashed border-[#c9c3b6] bg-[#fbfaf7] px-3">
          <Smartphone className="h-5 w-5 text-[#6b6f7a]/50" />
          <span className="text-center font-sans text-[11px] leading-snug text-[#6b6f7a]">
            {label}
          </span>
        </div>
      </div>
      {note && (
        <figcaption
          className="mt-2 max-w-[168px] text-center font-sans text-[11px]"
          style={{ color: "#6b6f7a" }}
        >
          {note}
        </figcaption>
      )}
    </figure>
  );
}
