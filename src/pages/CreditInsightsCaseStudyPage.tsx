import CreditInsightsSlider from "@/components/case-study/CreditInsightsSlider";
import BackButton from "@/components/case-study/BackButton";

export function CreditInsightsCaseStudyPage() {
  return (
    <div className="case-study min-h-screen overflow-x-clip bg-[#f7f3ec] font-sans text-[#1f232d] antialiased">
      <BackButton />
      <CreditInsightsSlider />
    </div>
  );
}
