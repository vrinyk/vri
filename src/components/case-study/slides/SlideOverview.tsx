import mockupOld from "@/assets/case-study-freed/mockup-old.png";
import mockupNew from "@/assets/case-study-freed/mockup-new.png";

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
                  Managing debt in India is often overwhelming, especially with constant creditor calls and low financial literacy. Freed addresses this by breaking down credit scores into simple insights, consolidating multiple loans into a single structured plan, and offering clear repayment strategies that reduce interest burden and loan tenure.
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
          
          {/* Right - Phone Mockups */}
          <div className="flex justify-center items-center gap-8">
            {/* Phone 1 - Old */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img 
                    src={mockupOld} 
                    alt="Old app design" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            
            {/* Phone 2 - New */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img 
                    src={mockupNew} 
                    alt="New app design" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOverview;
