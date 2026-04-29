const SlideProblem = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
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
              Freed's onboarding was lengthy and information-heavy, failing to clearly communicate its core value early on. Users were asked to share sensitive financial details before trust was established, while complex concepts around repayment process and debt relief lacked context creating confusion and anxiety. Over time, the product also accumulated design and engineering debt, resulting in fragmented user experiences, navigation complexities, and an inconsistent design language.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#f9ddd4]/20 rounded-xl p-6 border-l-4 border-[#f9ddd4]">
              <h4 className="font-semibold text-[#1f232d] mb-2">Lengthy Flow</h4>
              <p className="text-[#6b6f7a] text-sm">
                Too many steps before showing value to users
              </p>
            </div>
            <div className="bg-[#dbeef8]/20 rounded-xl p-6 border-l-4 border-[#dbeef8]">
              <h4 className="font-semibold text-[#1f232d] mb-2">Trust Issues</h4>
              <p className="text-[#6b6f7a] text-sm">
                Users asked to share sensitive data before trust was established
              </p>
            </div>
            <div className="bg-[#dce8e1]/20 rounded-xl p-6 border-l-4 border-[#dce8e1]">
              <h4 className="font-semibold text-[#1f232d] mb-2">Confusion</h4>
              <p className="text-[#6b6f7a] text-sm">
                Complex debt concepts lacked context and explanation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideProblem;
