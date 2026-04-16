import CaseStudySlider from "@/components/case-study/CaseStudySlider";
import BackButton from "@/components/case-study/BackButton";

export function FreedDrpCaseStudyPage() {
  return (
    <div className="case-study min-h-screen bg-background text-foreground">
      <BackButton />
      <CaseStudySlider />
    </div>
  );
}
