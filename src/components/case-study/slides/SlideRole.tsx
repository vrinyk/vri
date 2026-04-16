const responsibilities = [
  "Researched onboarding funnel and identified drop-off patterns with PMs.",
  "Conceptualized multiple onboarding experiments with clear hypotheses.",
  "Designed & prototyped new screens (value prop, trust layer, contextual nudges).",
  "Collaborated with PMs and developers for experiment rollouts.",
  "Tracked funnel metrics, analysed results, and iterated based on findings.",
  "Ran usability sessions to validate clarity, motivation, and comprehension of new flows.",
  "Translated findings into actionable design iterations to strengthen user trust and adoption."
];

const SlideRole = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-10">
          Project Overview
        </h2>
        
        <div className="space-y-6">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="font-sans text-2xl font-bold" style={{ color: '#2e2e2e' }}>
              My Role :
            </h3>
            <span className="text-xl text-foreground">
              Product Designer (End-to-End)
            </span>
          </div>
          
          <h3 className="font-sans text-2xl font-bold" style={{ color: '#2e2e2e' }}>
            My Responsibilities :
          </h3>
          
          <ol className="space-y-4 max-w-3xl">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg text-foreground">
                <span className="font-semibold text-muted-foreground min-w-[2rem]">
                  {index + 1}.
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SlideRole;
