import mockupOld from "@/assets/case-study-freed/old_screen.png";
import mockupNew from "@/assets/case-study-freed/mockup-new.png";
import arrowMore from "@/assets/case-study-freed/arrow-more.svg";
import uiMotionMockup from "@/assets/case-study-freed/ui-motion-mockup.svg";
const issues = [
  {
    id: 1,
    title: "Weak value communication",
    description: "The older landing screen focused on an aspirational message (\"Start Saving on Your Debt Today\") without first acknowledging the user's actual problem. Users dealing with loans were not emotionally validated before being pushed to act.",
    solved: "Problem-first messaging with guided storytelling",
    solvedDesc: "Introduced a 3-screen flow that starts by acknowledging the problem (\"Loans can become a problem\"), then explains the solution (\"We help you fix it\"), before finally asking users to take action."
  },
  {
    id: 2,
    title: "No sense of guided onboarding",
    description: "The old experience felt like a landing page rather than a guided introduction. Users were expected to understand the product on their own without visual cues or flow.",
    solved: "Intentional 3-screen animated onboarding",
    solvedDesc: "Designed animations that guide users through the narrative across the first two screens and intentionally stop on the final screen, keeping attention on the CTA and preventing distraction at the decision moment."
  },
  {
    id: 3,
    title: "Trust signals were not strong enough",
    description: "For a debt-relief fintech product, users did not see enough visible proof to feel confident about the platform before getting started.",
    solved: "Stronger and clearer trust markers",
    solvedDesc: "The new design clearly highlights credibility through media mentions, platform positioning (India's 1st Debt Relief Platform), and impact-focused messaging to build confidence early."
  }
];

const SlideExperiment1 = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Improving First Impressions<br />with Guided Landing
          </h2>
          <span 
            className="inline-block px-8 py-2.5 bg-foreground text-background font-semibold rounded-lg text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Experiment 1
          </span>
        </div>
        
        <div className="rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Old Phone + Issues */}
            <div className="flex gap-6">
              {/* Phone Mockup */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-56 h-[480px] bg-foreground rounded-[2.5rem] p-2 overflow-hidden">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden">
                    <img 
                      src={mockupOld} 
                      alt="Old app design" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <span className="text-muted-foreground font-medium mt-3">Old</span>
              </div>
              
              {/* Issues Content */}
              <div className="space-y-3 flex-1">
                {issues.map((issue) => (
                  <div key={issue.id} className="bg-background/50 rounded-xl p-3">
                    <span className="text-xs font-semibold text-primary">Issue {issue.id}</span>
                    <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>{issue.title} →</h4>
                    <p className="text-xs text-muted-foreground">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* VS Divider */}
            <div className="hidden lg:flex flex-col items-center self-stretch">
              <div className="w-px h-full bg-border relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-semibold">VS</span>
                </div>
              </div>
            </div>
            
            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-border my-4" />
            
            {/* Right Side - New Phone + Solutions */}
            <div className="flex gap-6">
              {/* Solutions Content */}
              <div className="space-y-3 flex-1 order-2 lg:order-1">
                {issues.map((issue) => (
                  <div key={issue.id} className="rounded-xl p-3">
                    <span className="text-xs font-semibold text-accent-green-foreground">Solved</span>
                    <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>{issue.solved} →</h4>
                    <p className="text-xs text-muted-foreground">{issue.solvedDesc}</p>
                  </div>
                ))}
              </div>
              
              {/* Phone Mockup */}
              <div className="flex flex-col items-center flex-shrink-0 order-1 lg:order-2">
                <div className="w-56 h-[480px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl overflow-hidden">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden">
                    <img 
                      src={mockupNew} 
                      alt="New app design" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <span className="text-foreground font-medium mt-3">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow and "Wait there's more" */}
        <div className="mt-4 flex flex-col items-start ml-4 md:ml-12">
          <img 
            src={arrowMore} 
            alt="Arrow pointing down" 
            className="w-16 md:w-24 h-auto rotate-90"
          />
          <p 
            className="font-caveat text-2xl md:text-3xl mt-2 text-[#c45a3b]"
          >
            wait..there's lot more
          </p>
        </div>

        {/* A-B Testing and UI Ideation Section */}
        <div className="mt-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-sans font-bold mb-4"
            style={{ color: '#2e2e2e' }}
          >
            A-B Testing UI Ideation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Exploring different design variations and testing them with real users to validate our hypotheses and optimize the user experience.
          </p>
          {/* Experiment 2 Box */}
          <span 
            className="inline-block px-8 py-2.5 bg-foreground text-background font-semibold rounded-lg text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Experiment 2
          </span>
        </div>

        {/* UI – Illustrations & Motion Section */}
        <div className="mt-20 rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Phone Mockup + Pointers */}
            <div className="flex gap-6">
              {/* Phone Mockup */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-56 h-[480px] bg-foreground rounded-[2.5rem] p-2 overflow-hidden">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={uiMotionMockup} 
                      alt="UI Illustrations & Motion mockup" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Pointers Content */}
              <div className="space-y-3 flex-1">
                <div className="bg-background/50 rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Visual-First Communication →</h4>
                  <p className="text-xs text-muted-foreground">Used illustrations and motion to convey the message instantly, ensuring users understand the context even without reading the text.</p>
                </div>
                <div className="bg-background/50 rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Motion-Led Attention Flow →</h4>
                  <p className="text-xs text-muted-foreground">Subtle animations and eye-direction cues guide user focus naturally across the screen, increasing engagement and comprehension.</p>
                </div>
                <div className="bg-background/50 rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Progressive Value Clarity →</h4>
                  <p className="text-xs text-muted-foreground">Clearly communicates what FREED does and how it helps users get out of debt through a simple, step-by-step visual narrative.</p>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="hidden lg:flex flex-col items-center self-stretch">
              <div className="w-px h-full bg-border" />
            </div>
            
            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-border my-4" />
            
            {/* Right Side - Heading + Image */}
            <div className="flex flex-col items-center">
              <h3 
                className="text-2xl md:text-3xl font-sans font-bold mb-6 text-center"
                style={{ color: '#2e2e2e' }}
              >
                UI – Illustrations & Motion
              </h3>
              <div className="w-56 h-[420px] rounded-2xl shadow-lg overflow-hidden bg-white">
                <img 
                  src={uiMotionMockup} 
                  alt="UI Illustrations and Motion design" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideExperiment1;
