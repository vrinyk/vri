import type { SectionName } from "./Navbar";

/**
 * Sections that break out of the card deck into a full viewport overlay on
 * desktop. Kept out of CardSlider.tsx so that file only exports components,
 * which is what Vite's fast refresh requires.
 */
export const FULLSCREEN_SECTIONS: SectionName[] = ["Work", "Archive"];

export function isFullscreenSection(section: SectionName): boolean {
  return FULLSCREEN_SECTIONS.includes(section);
}
