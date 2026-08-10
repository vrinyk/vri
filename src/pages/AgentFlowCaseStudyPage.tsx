import AgentFlowSlider from "@/components/case-study/AgentFlowSlider";
import BackButton from "@/components/case-study/BackButton";

export function AgentFlowCaseStudyPage() {
  return (
    <div className="case-study min-h-screen bg-[#f7f3ec] text-[#1f232d] font-sans antialiased overflow-x-clip">
      <BackButton />
      <AgentFlowSlider />
    </div>
  );
}
