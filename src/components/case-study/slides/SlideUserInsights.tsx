const dropoffStages = [
  { title: "Credit Pull Stage", items: ["Missing loan accounts", "Non-eligible debt not shown"] },
  { title: "Agreement Stage", items: ["Trust issues", "Payment confusion"] },
  { title: "PG Page View", items: ["Wrong expectations", "Seeking consolidation"] },
  { title: "Emendate Stage", items: ["EMI vs settlement confusion", "Unclear payment flow"] },
];

const comprehensionIssues = [
  { title: "Settlement vs Consolidation", quote: '"Expected DCP, got settlement"' },
  { title: "Payment Flow", quote: '"Who do I pay – FREED or bank?"' },
  { title: "Program Benefits", quote: '"Not aware of creditor protection"' },
  { title: "Total Cost", quote: '"Confused about final amount"' },
  { title: "Monthly Calculations", quote: '"Considered it as EMI"' },
  { title: "Trust Issues", quote: '"Thought it was fraud"' },
];

const SlideUserInsights = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-10">
          User Insights
        </h2>
        <h3 className="font-sans text-2xl font-bold mb-4" style={{ color: '#2e2e2e' }}>
          Journey Drop-offs & Understanding Gaps
        </h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Drop-off Analysis */}
          <div className="bg-accent-green/20 rounded-2xl p-6 border border-accent-green/30">
            <span className="inline-block px-4 py-1.5 bg-accent-green text-accent-green-foreground text-sm font-semibold rounded-full mb-6">
              Drop-off Analysis
            </span>
            
            <h4 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              User Journey Drop-offs
            </h4>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {dropoffStages.map((stage) => (
                <div key={stage.title} className="bg-accent-green/30 rounded-lg p-4">
                  <h5 className="font-bold text-sm text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stage.title}</h5>
                  <ul className="space-y-1">
                    {stage.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-accent-green/40 rounded-xl p-4 border-2 border-accent-green/50">
              <h5 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Primary drop-off reasons
              </h5>
              <p className="text-sm text-foreground">
                Users consistently drop off due to misaligned expectations between consolidation and settlement programs
              </p>
            </div>
          </div>
          
          {/* Comprehension Issues */}
          <div className="bg-accent-coral/20 rounded-2xl p-6 border border-accent-coral/30">
            <span className="inline-block px-4 py-1.5 bg-accent-coral text-accent-coral-foreground text-sm font-semibold rounded-full mb-6">
              Understanding Gaps
            </span>
            
            <h4 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Program Comprehension Issues
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {comprehensionIssues.map((issue) => (
                <div key={issue.title} className="bg-accent-coral/30 rounded-lg p-4">
                  <h5 className="font-bold text-sm text-foreground mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{issue.title}</h5>
                  <p className="text-xs text-muted-foreground italic">{issue.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideUserInsights;
