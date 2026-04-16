import freedLogo from "@/assets/case-study-freed/freed-logo.svg";

const SlideResults = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="bg-card rounded-3xl p-10 md:p-14 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Results Content */}
            <div className="space-y-6">
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: '#2e2e2e' }}
              >
                We got numbers as expected
              </h2>

              <ul className="space-y-4 text-base md:text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                  <span>
                    Drop-offs reduced by <strong className="text-foreground font-bold">~20%</strong> across the onboarding funnel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                  <span>
                    <strong className="text-foreground font-bold">~20%</strong> increase in SPA collection rate post-redesign
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                  <span>
                    Built trust and credibility across the journey, made everything cleaner and easy to digest
                  </span>
                </li>
              </ul>

              {/* Impact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-accent-green/20 border-2 border-accent-green/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Business <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ~20% increase in SPA collection rate
                  </p>
                </div>
                <div className="bg-accent-green/20 border-2 border-accent-green/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    UX <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ~20% reduction in drop-offs
                  </p>
                </div>
                <div className="bg-accent-green/20 border-2 border-accent-green/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Design <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Trust building flow and clear value prop
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - What I Learned */}
            <div className="space-y-5">
              <h2
                className="font-serif text-3xl md:text-4xl font-bold"
                style={{ color: '#2e2e2e' }}
              >
                What I Learned
              </h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  This project taught me that great design isn't about adding more — it's about knowing what to hold back. Users weren't asking for flashy features or clever interactions. They needed clarity in a moment of financial stress, and trust before they could commit.
                </p>
                <p>
                  Through deep user research, I discovered that the real barriers weren't functional — they were emotional. People wanted to feel in control, not overwhelmed. They needed reassurance, not persuasion. That insight shifted everything about how I approached the redesign.
                </p>
                <p>
                  I learned to translate feelings like anxiety and hesitation into tangible UX decisions — simplifying copy, reducing cognitive load, and designing moments of confidence rather than conversion pressure. It sharpened my ability to design for <strong className="text-foreground">behavior and emotion</strong>, not just usability.
                </p>
                <p>
                  Most importantly, I realized that <strong className="text-foreground">intentional restraint</strong> in design can be just as powerful as innovation. Sometimes the best feature is the one you choose not to build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FREED Logo Footer */}
        <div className="mt-10 flex justify-center">
          <img src={freedLogo} alt="FREED" className="h-10 w-auto opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default SlideResults;
