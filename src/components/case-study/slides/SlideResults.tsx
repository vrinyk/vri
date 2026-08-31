import freedLogo from "@/assets/case-study-freed/freed-logo.svg";

const SlideResults = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="bg-[#fbfaf7] rounded-3xl p-10 md:p-14 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Results Content */}
            <div className="space-y-6">
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: '#2e2e2e' }}
              >
                We got numbers as expected
              </h2>

              <ul className="space-y-4 text-base md:text-lg text-[#6b6f7a]">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#1f232d] flex-shrink-0" />
                  <span>
                    Drop-offs reduced by <strong className="text-[#1f232d] font-bold">~20%</strong> across the onboarding funnel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#1f232d] flex-shrink-0" />
                  <span>
                    <strong className="text-[#1f232d] font-bold">~20%</strong> increase in SPA collection rate post-redesign
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#1f232d] flex-shrink-0" />
                  <span>
                    Built trust and credibility across the journey, made everything cleaner and easy to digest
                  </span>
                </li>
              </ul>

              {/* Impact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#dce8e1]/20 border-2 border-[#dce8e1]/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Business <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-[#6b6f7a]">
                    ~20% increase in SPA collection rate
                  </p>
                </div>
                <div className="bg-[#dce8e1]/20 border-2 border-[#dce8e1]/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    UX <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-[#6b6f7a]">
                    ~20% reduction in drop-offs
                  </p>
                </div>
                <div className="bg-[#dce8e1]/20 border-2 border-[#dce8e1]/40 rounded-2xl p-5 text-center">
                  <p
                    className="font-sans text-sm font-bold mb-1"
                    style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Design <em className="font-serif">Impact</em>
                  </p>
                  <p className="text-xs text-[#6b6f7a]">
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
              <div className="space-y-4 text-base text-[#6b6f7a] leading-relaxed">
                <p>
                  The biggest shift was recognizing that <strong className="text-[#1f232d]">the obvious problem wasn't the real problem.</strong> A low completion rate looks like a UI problem — fix the flow, shorten the steps. But when I talked to users, I realized they weren't dropping off because the design was hard to use. They were dropping off because they didn't trust what was happening.
                </p>
                <p>
                  That realization changed everything about how I approached the redesign. Instead of asking "how do we make this cleaner?", I started asking "what does the user need to feel safe enough to proceed?" Their fears, their goals, their questions — those became the brief. Figma came later.
                </p>
                <p>
                  I learned to translate feelings like anxiety and hesitation into tangible UX decisions — simplifying copy, reducing cognitive load, and designing moments of confidence rather than conversion pressure. It sharpened my ability to design for <strong className="text-[#1f232d]">behavior and emotion</strong>, not just usability.
                </p>
                <p>
                  Most importantly, I realized that <strong className="text-[#1f232d]">intentional restraint</strong> in design can be just as powerful as innovation. Sometimes the best feature is the one you choose not to build.
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
