const skillTags = [
  "Product Strategy",
  "Visual Design",
  "UX Research",
  "Empathy",
  "A/B Testing",
  "UI Design",
  "Design System"
];

const impactCards = [
  {
    type: "UX",
    title: "Impact",
    metric: "20%",
    description: "Drop offs reduced across the funnel"
  },
  {
    type: "Business",
    title: "Impact",
    metric: "17%",
    description: "Increase in program enrollment"
  },
  {
    type: "Design",
    title: "Impact",
    metric: "Trust building flow",
    description: "and clear value prop"
  }
];

const SlideHero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12">
      <div className="container max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-[#1f232d] mb-3">
          <span className="text-[#1f232d]">Rethinking</span>{" "}
           <span className="italic">Onboarding</span>
        </h1>
        
        <p className="font-sans text-base md:text-lg text-[#6b6f7a] max-w-2xl mb-2 leading-relaxed">
          Reducing friction, building trust, and turning a complex financial journey into a confident first step.
        </p>
        
        <p className="font-sans text-xl text-[#6b6f7a] mb-8">
          Vrinda Khandelwal
        </p>
        
        <div className="flex flex-wrap gap-3 mb-16">
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-[#e6e0d5] rounded-full text-sm text-[#6b6f7a] hover:border-[#1f232d] hover:text-[#1f232d] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {impactCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#dce8e1]/30 to-[#dce8e1]/10 rounded-2xl p-6 border border-[#dce8e1]/30"
            >
              
              <h3 className="font-sans text-lg mb-3">
                <span className="font-bold text-[#1f232d]">{card.type}</span>{" "}
                <span className="italic text-[#1f232d]">{card.title}</span>
              </h3>
              <p className="text-[#1f232d]">
                <span className="font-bold text-xl">{card.metric}</span>
                {" "}{card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideHero;
