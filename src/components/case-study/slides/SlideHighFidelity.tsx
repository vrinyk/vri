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
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">High Fidelity</h2>
        </div>
        
        <div className="rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Old Phone Carousel + Issues */}
            <div className="flex gap-6">
              {/* Phone Mockup Carousel */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div>
                  <div className="w-56 h-[480px] bg-foreground rounded-[2.5rem] p-2 overflow-hidden">
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
                        index === currentOldIndex ? 'bg-foreground' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground font-medium mt-2">Old</span>
              </div>
              
              {/* Issues Content */}
              <div className="space-y-3 flex-1">
                <div className="bg-background/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-primary">Issue 1</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Unclear program explanation →</h4>
                  <p className="text-xs text-muted-foreground">
                    Users didn't understand how the savings program actually worked.
                  </p>
                </div>
                <div className="bg-background/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-primary">Issue 2</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Missing account confusion →</h4>
                  <p className="text-xs text-muted-foreground">
                    Users couldn't tell which accounts were eligible vs not eligible.
                  </p>
                </div>
                <div className="bg-background/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-primary">Issue 3</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Savings method unclear →</h4>
                  <p className="text-xs text-muted-foreground">
                    How money is saved via AutoPay/UPI wasn't explained properly.
                  </p>
                </div>
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
                <div className="rounded-xl p-3">
                  <span className="text-xs font-semibold text-accent-green-foreground">What I solved here?</span>
                  <h4 className="font-sans font-bold text-sm mb-1 mt-2" style={{ color: '#2e2e2e' }}>Made how the program works clear →</h4>
                  <p className="text-xs text-muted-foreground">
                    Explained the savings program in a simple, visual way users can understand at a glance.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Explained Monthly Savings clearly →</h4>
                  <p className="text-xs text-muted-foreground">
                    Users now see exactly how much they're saving and when.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Improved account transparency →</h4>
                  <p className="text-xs text-muted-foreground">
                    Added Eligible vs Not Eligible tabs so "missing accounts" confusion is removed.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Clarified savings via AutoPay/UPI →</h4>
                  <p className="text-xs text-muted-foreground">
                    Users understand exactly how money is saved through their preferred payment method.
                  </p>
                </div>
                <div className="bg-accent-green/20 rounded-xl p-3 border border-accent-green/30">
                  <p className="text-sm font-bold text-accent-green-foreground">
                    Added benefits + trust cues upfront to build confidence before users commit.
                  </p>
                </div>
              </div>
              
              {/* Phone Mockup Carousel */}
              <div className="flex flex-col items-center flex-shrink-0 order-1 lg:order-2">
                <div>
                  <div className="w-56 h-[480px] bg-foreground rounded-[2.5rem] p-2 shadow-2xl overflow-hidden">
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
                        index === currentNewIndex ? 'bg-foreground' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium mt-2">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideHighFidelity;
