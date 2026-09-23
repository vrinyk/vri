import { useState, useEffect } from "react";
import highFidelityOld1 from "@/assets/case-study-freed/high-fidelity-old-1.png";
import highFidelityOld2 from "@/assets/case-study-freed/high-fidelity-old-2.png";
import highFidelityOld3 from "@/assets/case-study-freed/high-fidelity-old-3.png";
import highFidelityNew1 from "@/assets/case-study-freed/high-fidelity-new-1.png";
import highFidelityNew2 from "@/assets/case-study-freed/high-fidelity-new-2.png";
import highFidelityNew3 from "@/assets/case-study-freed/high-fidelity-new-3.png";

const oldMockups = [highFidelityOld1, highFidelityOld2, highFidelityOld3];
const newMockups = [highFidelityNew1, highFidelityNew2, highFidelityNew3];

const SlideHighFidelity = () => {
  const [currentOldIndex, setCurrentOldIndex] = useState(0);
  const [currentNewIndex, setCurrentNewIndex] = useState(0);

  // Auto-scroll for old carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOldIndex((prev) => (prev === oldMockups.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for new carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewIndex((prev) => (prev === newMockups.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d]">High Fidelity</h2>
        </div>
        
        <div className="rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Old Phone Carousel + Issues */}
            <div className="flex gap-6">
              {/* Phone Mockup Carousel */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div>
                  <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 overflow-hidden">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <img 
                        src={oldMockups[currentOldIndex]} 
                        alt={`Old High Fidelity design ${currentOldIndex + 1}`} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                {/* Carousel Dots */}
                <div className="flex gap-2 mt-4">
                  {oldMockups.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentOldIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentOldIndex ? 'bg-[#1f232d]' : 'bg-[#6b6f7a]/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#6b6f7a] font-medium mt-2">Old</span>
              </div>
              
              {/* Issues Content */}
              <div className="space-y-3 flex-1">
                <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#1f232d]">Issue 1</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Unclear program explanation →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Users didn't understand how the savings program actually worked.
                  </p>
                </div>
                <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#1f232d]">Issue 2</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Missing account confusion →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Users couldn't tell which accounts were eligible vs not eligible.
                  </p>
                </div>
                <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#1f232d]">Issue 3</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Savings method unclear →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    How money is saved via AutoPay/UPI wasn't explained properly.
                  </p>
                </div>
              </div>
            </div>
            
            {/* VS Divider */}
            <div className="hidden lg:flex flex-col items-center self-stretch">
              <div className="w-px h-full bg-[#e6e0d5] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#fbfaf7] border border-[#e6e0d5] rounded-full flex items-center justify-center">
                  <span className="text-[#6b6f7a] text-xs font-semibold">VS</span>
                </div>
              </div>
            </div>
            
            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-[#e6e0d5] my-4" />
            
            {/* Right Side - New Phone + Solutions */}
            <div className="flex gap-6">
              {/* Solutions Content */}
              <div className="space-y-3 flex-1 order-2 lg:order-1">
                <div className="rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#294b3a]">What I solved here?</span>
                  <h4 className="font-sans font-bold text-sm mb-1 mt-2" style={{ color: '#2e2e2e' }}>Made how the program works clear →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Explained the savings program in a simple, visual way users can understand at a glance.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Explained Monthly Savings clearly →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Users now see exactly how much they're saving and when.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Surfaced the accounts we were hiding →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    We only ever showed eligible accounts, so users assumed the rest were
                    forgotten and lost trust in the plan. Added Eligible vs Not Eligible
                    tabs with a reason against each, so nothing goes missing, and users
                    learn why an account can't be settled.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Clarified savings via AutoPay/UPI →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Users understand exactly how money is saved through their preferred payment method.
                  </p>
                </div>
                <div className="bg-[#dce8e1]/20 rounded-xl p-3 border border-[#dce8e1]/30">
                  <p className="text-sm font-bold text-[#294b3a]">
                    Added benefits + trust cues upfront to build confidence before users commit.
                  </p>
                </div>
              </div>
              
              {/* Phone Mockup Carousel */}
              <div className="flex flex-col items-center flex-shrink-0 order-1 lg:order-2">
                <div>
                  <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 shadow-2xl overflow-hidden">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <img 
                        key={currentNewIndex}
                        src={newMockups[currentNewIndex]} 
                        alt={`New High Fidelity design ${currentNewIndex + 1}`} 
                        className={`w-full object-cover ${
                          currentNewIndex === 1 
                            ? 'h-auto animate-[scrollUpDown_3s_ease-in-out_infinite_alternate]' 
                            : 'h-full object-top'
                        }`}
                        style={currentNewIndex === 1 ? { 
                          animation: 'scrollUpDown 3s ease-in-out infinite alternate'
                        } : {}}
                      />
                    </div>
                  </div>
                </div>
                {/* Carousel Dots */}
                <div className="flex gap-2 mt-4">
                  {newMockups.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNewIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentNewIndex ? 'bg-[#1f232d]' : 'bg-[#6b6f7a]/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#1f232d] font-medium mt-2">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideHighFidelity;
