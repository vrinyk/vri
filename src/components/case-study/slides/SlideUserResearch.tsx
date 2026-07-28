const userPersonas = [
  { tier: "Tier 1", debt: "₹7L - ₹22L", income: "₹40K - ₹1.4L", mindset: "Urgent need for help" },
  { tier: "Tier 2", debt: "₹2.7L - ₹50L", income: "₹15K - ₹25K", mindset: "Seeking consolidation" },
  { tier: "Tier 3", debt: "₹2L - ₹7.6L", income: "₹20K - ₹22K", mindset: "Confused & helpless" },
];

const hardshipDrivers = [
  "Medical expenses",
  "Job loss / salary reduction",
  "Fraud incidents",
  "Multiple credit cards"
];

const SlideUserResearch = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d] mb-10">
          User Research —
        </h2>
        <h3 className="font-sans text-2xl font-bold mb-4 mt-8" style={{ color: '#2e2e2e' }}>
          Starting with questions, not solutions
        </h3>
        <p className="text-[#1f232d] leading-relaxed text-lg mb-10 max-w-4xl">
          Before sketching a single screen, I spent time understanding who these users really were — their fears, their language, their doubts. Freed's users aren't just debt-burdened; they're anxious, often financially undereducated, and skeptical of any platform that asks for their data. To design for them, I had to understand them first.
        </p>
        
        <div className="bg-[#dbeef8]/20 rounded-2xl p-8 border border-[#dbeef8]/30">
          <span className="inline-block px-4 py-1.5 bg-[#dbeef8] text-[#265d73] text-sm font-semibold rounded-full mb-6">
            User Segments
          </span>
          
          <h4 className="font-sans text-xl font-semibold text-[#1f232d] mb-6">
            User Personas by Tier
          </h4>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1f232d] text-[#f7f3ec]">
                  <th className="text-left py-4 px-6 font-semibold">Tier</th>
                  <th className="text-left py-4 px-6 font-semibold">Outstanding Debt</th>
                  <th className="text-left py-4 px-6 font-semibold">Monthly Income</th>
                  <th className="text-left py-4 px-6 font-semibold">Mindset</th>
                </tr>
              </thead>
              <tbody>
                {userPersonas.map((persona, index) => (
                  <tr key={persona.tier} className={index % 2 === 0 ? "bg-[#fbfaf7]" : "bg-[#fbfaf7]/50"}>
                    <td className="py-4 px-6 text-[#1f232d] font-medium">{persona.tier}</td>
                    <td className="py-4 px-6 text-[#1f232d]">{persona.debt}</td>
                    <td className="py-4 px-6 text-[#1f232d]">{persona.income}</td>
                    <td className="py-4 px-6 text-[#1f232d]">{persona.mindset}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-[#dbeef8]/30 rounded-xl p-6">
            <h5 className="text-xl font-bold text-[#1f232d] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Key hardship drivers
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {hardshipDrivers.map((driver) => (
                <div key={driver} className="flex items-center gap-2 text-[#1f232d] bg-[#fbfaf7]/50 rounded-lg px-4 py-2">
                  <span className="w-2 h-2 bg-[#1f232d] rounded-full" />
                  {driver}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideUserResearch;
