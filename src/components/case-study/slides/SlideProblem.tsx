const SlideProblem = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d] mb-10">
          Project Overview
        </h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="font-sans text-2xl font-bold mb-4" style={{ color: '#2e2e2e' }}>
              Problem
            </h3>
            <p className="text-xl text-[#1f232d] leading-relaxed max-w-4xl">
              The easy assumption was that Freed's onboarding needed a UI fix — shorten the flow, clean up the screens. But when users dropped off mid-way through sharing financial details, or abandoned the payment step, it wasn't because the button was hard to find. It was because they didn't trust the platform yet. These weren't design problems. They were trust problems.
            </p>
          </div>

          {/* Highlighted callout */}
          <div className="border-l-4 border-[#1f232d] pl-6 py-2 max-w-3xl">
            <p className="text-xl text-[#1f232d] font-medium italic leading-relaxed">
              "If we mistake a trust problem for a UI problem, we'll end up designing a better interface that still doesn't solve the user's real concern."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="bg-[#f9ddd4]/20 rounded-xl p-6 border-l-4 border-[#f9ddd4]">
              <h4 className="font-semibold text-[#1f232d] mb-2">Lengthy Flow</h4>
              <p className="text-[#6b6f7a] text-sm">
                Too many steps before showing value — users left before they understood why it mattered
              </p>
            </div>
            <div className="bg-[#dbeef8]/20 rounded-xl p-6 border-l-4 border-[#dbeef8]">
              <h4 className="font-semibold text-[#1f232d] mb-2">A Trust Problem</h4>
              <p className="text-[#6b6f7a] text-sm">
                Sensitive data was asked for before the platform had earned the right to ask
              </p>
            </div>
            <div className="bg-[#dce8e1]/20 rounded-xl p-6 border-l-4 border-[#dce8e1]">
              <h4 className="font-semibold text-[#1f232d] mb-2">Language Gap</h4>
              <p className="text-[#6b6f7a] text-sm">
                Debt relief concepts weren't explained in users' own language — creating anxiety, not clarity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideProblem;
