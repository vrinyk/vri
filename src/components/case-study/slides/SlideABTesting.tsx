const SlideABTesting = () => {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-20 bg-[#f7f3ec]">
      <div className="max-w-4xl mx-auto text-left">
        {/* Main Heading */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-6"
          style={{ color: '#2e2e2e' }}
        >
          Here's the interesting part
        </h2>
        
        <p className="text-base md:text-lg text-[#6b6f7a] mb-10 leading-relaxed">
          I redesigned the DRP onboarding to fix long-standing funnel issues while reducing pages, cutting extra content, and making the flow simpler + clearer especially for users under stress and with low financial awareness.
        </p>

        {/* Major Issues Section */}
        <h3 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
        >
          Major issues
        </h3>
        
        <ul className="text-base md:text-lg text-[#6b6f7a] mb-10 leading-relaxed space-y-3">
          <li>
            <strong className="text-[#1f232d]">Users didn't clearly understand DRP:</strong> what FREED does/doesn't do, how the program works, and what to expect, causing doubt and drop-offs.
          </li>
          <li>
            <strong className="text-[#1f232d]">Too many screens + too much text:</strong> users skimmed, missed key points (payments, AutoPay, fees), and abandoned mid-journey.
          </li>
          <li>
            <strong className="text-[#1f232d]">Low motivation to finish:</strong> after starting, users didn't feel enough reassurance or progress, so many exited before completion.
          </li>
        </ul>

        {/* Limitations and Challenges Section */}
        <h3 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
        >
          Limitations and challenges
        </h3>
        
        <ul className="text-base md:text-lg text-[#6b6f7a] leading-relaxed space-y-3">
          <li>
            <strong className="text-[#1f232d]">Fewer pages, same understanding:</strong> I had to compress the flow without losing clarity or increasing support tickets.
          </li>
          <li>
            <strong className="text-[#1f232d]">Explain complex concepts fast:</strong> SPA, AutoPay, and fees needed to be understood in seconds, without jargon.
          </li>
          <li>
            <strong className="text-[#1f232d]">Small screen + short attention:</strong> messaging had to be highly scannable and visual-first, not text-heavy.
          </li>
          <li>
            <strong className="text-[#1f232d]">Trust + compliance balance:</strong> transparent enough to meet requirements, but not so "legal" that users disengage.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlideABTesting;
