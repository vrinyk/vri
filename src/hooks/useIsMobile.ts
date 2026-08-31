import { useSyncExternalStore } from "react";

/**
 * True below Tailwind's `md` breakpoint. Used where mobile needs a different
 * DOM rather than different CSS — the card deck stacks siblings with absolute
 * positioning and JS transforms, which cannot be undone with media queries
 * alone.
 */
export function useIsMobile(query = "(max-width: 767px)") {
  // useSyncExternalStore rather than useState + useEffect: matchMedia is an
  // external store, and subscribing this way avoids a setState during the
  // effect and the flash of desktop layout it causes on first paint.
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
