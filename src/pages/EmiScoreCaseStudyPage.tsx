import { useEffect } from "react";
import EmiScoreStory from "@/components/case-study/emi-score/EmiScoreStory";
import BackButton from "@/components/case-study/BackButton";

/** One long scrolling story rather than a slide deck. */
export function EmiScoreCaseStudyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen bg-[#fbfaf8] antialiased">
      <BackButton />
      <EmiScoreStory />
    </div>
  );
}
