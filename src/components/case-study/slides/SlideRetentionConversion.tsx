import { useState, useEffect, useCallback } from "react";
import fastTrackHome from "@/assets/case-study-freed/fast-track-home.png";
import fastTrackDeposit from "@/assets/case-study-freed/fast-track-deposit.png";
import fastTrackModal from "@/assets/case-study-freed/fast-track-modal.png";
import fastTrackDone from "@/assets/case-study-freed/fast-track-done.png";
import jarAnimation from "@/assets/case-study-freed/jar-animation.gif";
import freedShieldHome from "@/assets/case-study-freed/freed-shield-home.png";
import freedShieldRights from "@/assets/case-study-freed/freed-shield-rights.png";
import freedShieldReport from "@/assets/case-study-freed/freed-shield-report.png";
import freedShieldUpload from "@/assets/case-study-freed/freed-shield-upload.png";
import freedShieldPermission from "@/assets/case-study-freed/freed-shield-permission.png";

const carouselImages = [
  { src: fastTrackHome, label: "Home Page" },
  { src: fastTrackDeposit, label: "Deposit Funds" },
  { src: fastTrackModal, label: "Fast Track Modal" },
  { src: fastTrackDone, label: "Fast Track Done", gif: jarAnimation },
];

const shieldCarouselImages = [
  { src: freedShieldHome, label: "FREED Shield Home" },
  { src: freedShieldRights, label: "Know Your Rights" },
  { src: freedShieldReport, label: "Report Complaint" },
  { src: freedShieldUpload, label: "Upload Proof" },
  { src: freedShieldPermission, label: "Permission & Submit" },
];

const PhoneCarousel = ({
  images,
  autoPlayInterval = 3000,
}: {
  images: { src: string; label: string; gif?: string }[];
  autoPlayInterval?: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-56 h-[480px] bg-[#1f232d] rounded-[2.5rem] p-2 shadow-2xl overflow-hidden relative">
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white relative">
            {images.map((img, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: currentSlide === index ? 1 : 0 }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover object-top"
                />
                {img.gif && (
                  <img
                    src={img.gif}
                    alt="Jar animation"
                    className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-7 h-7 rounded-full border border-[#e6e0d5] flex items-center justify-center text-[#6b6f7a] hover:text-[#1f232d] hover:border-[#1f232d] transition-colors text-xs"
        >
          ←
        </button>
        <div className="flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-[#1f232d] w-5" : "bg-[#6b6f7a]/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-7 h-7 rounded-full border border-[#e6e0d5] flex items-center justify-center text-[#6b6f7a] hover:text-[#1f232d] hover:border-[#1f232d] transition-colors text-xs"
        >
          →
        </button>
      </div>
      <p className="text-xs text-[#6b6f7a]">{images[currentSlide].label}</p>
    </div>
  );
};

const SlideRetentionConversion = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d] mb-4">
            User Retention &amp; Conversion Initiatives
          </h2>
          <span
            className="inline-block px-8 py-2.5 bg-[#1f232d] text-[#f7f3ec] font-semibold rounded-lg text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Conversion Boost Initiatives
          </span>
          <p className="text-base md:text-lg text-[#6b6f7a] max-w-3xl mx-auto mt-6 leading-relaxed">
            Designing focused interventions to improve commitment, clarity, and revenue conversion across post-onboarding journeys.
          </p>
        </div>

        {/* Section 1 – Fast Track Settlement */}
        <div className="rounded-3xl p-8 mb-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Content */}
            <div className="space-y-3 flex-1">
              <h3
                className="font-sans text-xl md:text-2xl font-bold mb-3"
                style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
              >
                Fast Track Settlement
              </h3>
              <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>The Problem →</h4>
                <p className="text-xs text-[#6b6f7a]">
                  After onboarding, we observed that users clearly understood their debt position but were still delaying commitment. The journey between seeing potential savings and making a payment decision was too long, creating hesitation and drop-offs.
                </p>
              </div>
              <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>The Solution →</h4>
                <p className="text-xs text-[#6b6f7a]">
                  We simplify the commitment path and highlighting immediate financial benefit, the feature nudges users toward faster action.
                </p>
              </div>
              <div className="bg-[#dce8e1]/20 rounded-xl p-3 border border-[#dce8e1]/30">
                <p className="text-sm font-bold text-[#294b3a]">
                  20% increase in SPA collection rate
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex flex-col items-center self-stretch">
              <div className="w-px h-full bg-[#e6e0d5]" />
            </div>

            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-[#e6e0d5] my-4" />

            {/* Right Side - Phone Carousel */}
            <PhoneCarousel images={carouselImages} />
          </div>
        </div>

        {/* Section 2 – FREED Shield */}
        <div className="rounded-3xl p-8">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Left Side - Content */}
            <div className="space-y-3 flex-1">
              <h3
                className="font-sans text-xl md:text-2xl font-bold mb-1"
                style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
              >
                FREED Shield – Building Protection &amp; Emotional Assurance
              </h3>
              <p
                className="text-base font-semibold mb-2"
                style={{ color: '#2e2e2e', fontFamily: "'DM Sans', sans-serif" }}
              >
                Addressing the Emotional Barrier
              </p>
              <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>The Problem →</h4>
                <p className="text-xs text-[#6b6f7a]">
                  Users frequently expressed concerns about recovery calls, legal notices, and home visits. Even after onboarding, fear of harassment reduced commitment confidence.
                </p>
              </div>
              <div className="bg-[#f7f3ec]/50 rounded-xl p-3">
                <h4 className="font-sans font-bold text-sm mb-1" style={{ color: '#2e2e2e' }}>The Solution →</h4>
                <p className="text-xs text-[#6b6f7a]">
                  To directly address this emotional barrier, we introduced FREED Shield — a clearly communicated protection layer within the product journey to upload harassment reports and legal guidance, providing structured support and guidance.
                </p>
              </div>
              <div className="bg-[#dce8e1]/20 rounded-xl p-3 border border-[#dce8e1]/30 space-y-1.5">
                <p className="text-xs font-bold text-[#294b3a]">Reduced anxiety-driven drop-offs</p>
                <p className="text-xs font-bold text-[#294b3a]">Increase in plan continuation rate</p>
                <p className="text-xs font-bold text-[#294b3a]">Improved user trust perception</p>
                <p className="text-xs font-bold text-[#294b3a]">Lower support queries related to creditor harassment</p>
                <p className="text-xs font-bold text-[#294b3a]">Higher consistency in monthly savings adherence</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex flex-col items-center self-stretch">
              <div className="w-px h-full bg-[#e6e0d5]" />
            </div>

            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-[#e6e0d5] my-4" />

            {/* Right Side - Phone Carousel */}
            <PhoneCarousel images={shieldCarouselImages} autoPlayInterval={3500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideRetentionConversion;
