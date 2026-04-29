import { useState, useEffect } from "react";
import signupOld from "@/assets/case-study-freed/signup-old.png";
import otpOld from "@/assets/case-study-freed/otp-old.png";
import signupNew1 from "@/assets/case-study-freed/signup-new-1.png";
import signupNew2 from "@/assets/case-study-freed/signup-new-2.png";
import signupNew3 from "@/assets/case-study-freed/signup-new-3.png";

const oldImages = [
  { src: signupOld, label: "Sign Up" },
  { src: otpOld, label: "OTP" },
];

const newImages = [
  { src: signupNew1, label: "Sign Up" },
  { src: signupNew2, label: "OTP" },
  { src: signupNew3, label: "Credit Report" },
];

const SlideExperiment2 = () => {
  const [oldIndex, setOldIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);

  // Auto-scroll for old mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setOldIndex((prev) => (prev + 1) % oldImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for new mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setNewIndex((prev) => (prev + 1) % newImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center px-6 py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d] mb-4">Signup-OTP</h2>
          <span 
            className="inline-block px-8 py-2.5 bg-[#1f232d] text-[#f7f3ec] font-semibold rounded-lg text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Experiment 2
          </span>
        </div>
        
        <div className="rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Old Phone + Issues */}
            <div className="flex gap-6">
              {/* Phone Mockup with Carousel */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div>
                  <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 overflow-hidden">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <img 
                        src={oldImages[oldIndex].src} 
                        alt={`Old ${oldImages[oldIndex].label} design`} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {oldImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setOldIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        oldIndex === index 
                          ? "w-6 bg-[#1f232d]" 
                          : "w-2 bg-[#e6e0d5] hover:bg-[#6b6f7a]"
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
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Signup felt heavy and overwhelming →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    The old design used a strong orange background with dense form fields and long consent text, making the first interaction feel stressful and effort-heavy.
                  </p>
                </div>
                <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#1f232d]">Issue 2</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Single long form caused drop-offs →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    All input fields were crammed into a single screen, making the signup process feel lengthy and discouraging users from completing it.
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
                  <span className="text-xs font-semibold text-[#294b3a]">Solved</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Calmer and simpler signup experience →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Redesigned the screen with a white background, better spacing, and clearer visual hierarchy to make the form feel lighter, easier, and less intimidating to complete.
                  </p>
                </div>
                <div className="rounded-xl p-3">
                  <span className="text-xs font-semibold text-[#294b3a]">Solved</span>
                  <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>Multi-step form with progressive disclosure →</h4>
                  <p className="text-xs text-[#6b6f7a]">
                    Split the long form into multiple focused steps, reducing cognitive load and improving completion rates by showing one task at a time with clear progress indication.
                  </p>
                </div>
                <div className="bg-[#dce8e1]/20 rounded-xl p-3 border border-[#dce8e1]/30">
                  <p className="text-sm font-bold text-[#294b3a]">
                    This experiment aimed to reduce signup anxiety and improve form completion by focusing on visual calmness and trust reinforcement.
                  </p>
                </div>
              </div>
              
              {/* Phone Mockup with Carousel */}
              <div className="flex flex-col items-center flex-shrink-0 order-1 lg:order-2">
                <div>
                  <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 shadow-2xl overflow-hidden">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <img 
                        src={newImages[newIndex].src} 
                        alt={`New ${newImages[newIndex].label} design`} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {newImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setNewIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        newIndex === index 
                          ? "w-6 bg-[#1f232d]" 
                          : "w-2 bg-[#e6e0d5] hover:bg-[#6b6f7a]"
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

export default SlideExperiment2;
