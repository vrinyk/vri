import showcase1 from "@/assets/case-study-freed/showcase-1.png";
import showcase2 from "@/assets/case-study-freed/showcase-2.png";
import showcase4 from "@/assets/case-study-freed/showcase-4.png";
import showcase5 from "@/assets/case-study-freed/showcase-5.png";
import showcase6 from "@/assets/case-study-freed/showcase-6.png";

const mockups = [
  { src: showcase5, label: "Landing" },
  { src: showcase6, label: "Program" },
  { src: showcase2, label: "Home" },
  { src: showcase1, label: "Cashback" },
  
  { src: showcase4, label: "Fast Track" },
];

const SlideShowcase = () => {
  // Duplicate for seamless loop
  const allMockups = [...mockups, ...mockups];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: "DM Sans, sans-serif", color: "#2e2e2e" }}
        >
          Screens That Speak
        </h2>
        <p
          className="text-lg md:text-xl text-muted-foreground italic"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          A collection of high-impact UI experiments crafted for FREED
        </p>
      </div>

      {/* Scrolling Mockups */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-8 animate-marquee">
          {allMockups.map((mockup, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{ width: "280px" }}
            >
              {/* Phone Frame */}
              <div className="rounded-[40px] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden shadow-2xl"
                style={{ height: "580px" }}
              >
                <div className="w-full h-full relative bg-white overflow-hidden rounded-[34px]">
                  <img
                    src={mockup.src}
                    alt={mockup.label}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SlideShowcase;
