import CaseStudySlider from "@/components/case-study/CaseStudySlider";
import BackButton from "@/components/case-study/BackButton";

export function FreedDrpCaseStudyPage() {
  return (
    <div className="case-study min-h-screen bg-[#f7f3ec] text-[#1f232d] font-sans antialiased overflow-x-clip">
      <BackButton />
      <CaseStudySlider />
    </div>
  );
}
