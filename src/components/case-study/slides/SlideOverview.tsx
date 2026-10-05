import phoneMockup from "@/assets/case-study-freed/freed-phone-mockup.gif";

const SlideOverview = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d] mb-10">
              Project Overview
            </h2>
            
            <div className="space-y-8">
              <div>
              <h3 className="font-sans text-2xl font-bold mb-4" style={{ color: '#2e2e2e' }}>
                  About the Product
                </h3>
                <p className="text-lg text-[#1f232d] leading-relaxed">
                  FREED turns scattered credit card and loan debt into one structured plan, for people fielding creditor calls with little financial guidance.
                </p>
              </div>
              
              <div>
              <h3 className="font-sans text-2xl font-bold mb-4" style={{ color: '#2e2e2e' }}>
                  Duration
                </h3>
                <p className="text-lg text-[#1f232d]">
                  Aug 2025 to Oct 2025
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - Phone Mockup (animated walkthrough, frame baked into the GIF) */}
          <div className="flex justify-center items-center">
            <img
              src={phoneMockup}
              alt="FREED app walkthrough on a phone: splash screen, then onboarding"
              width={448}
              height={960}
              className="w-[min(260px,62vw)] h-auto drop-shadow-[0_18px_40px_rgba(31,35,45,0.28)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOverview;
