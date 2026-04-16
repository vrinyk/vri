import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import freedLogo from "@/assets/case-study-freed/freed-logo.svg";
import SlideHero from "./slides/SlideHero";
import SlideOverview from "./slides/SlideOverview";
import SlideProblem from "./slides/SlideProblem";
import SlideRole from "./slides/SlideRole";
import SlideUserResearch from "./slides/SlideUserResearch";
import SlideUserInsights from "./slides/SlideUserInsights";
import SlideUserFeedbacks from "./slides/SlideUserFeedbacks";
import SlideExperiment1 from "./slides/SlideExperiment1";
import SlideExperiment2 from "./slides/SlideExperiment2";
import SlideABTesting from "./slides/SlideABTesting";
import SlideIterations from "./slides/SlideIterations";
import SlideHighFidelity from "./slides/SlideHighFidelity";
import SlideRetentionConversion from "./slides/SlideRetentionConversion";
import SlideResults from "./slides/SlideResults";
import SlideShowcase from "./slides/SlideShowcase";


const slides = [
  { id: 1, component: SlideHero, label: "Hero" },
  { id: 2, component: SlideOverview, label: "Overview" },
  { id: 3, component: SlideProblem, label: "Problem" },
  { id: 4, component: SlideRole, label: "Role" },
  { id: 5, component: SlideUserResearch, label: "Research" },
  { id: 6, component: SlideUserFeedbacks, label: "User Feedbacks" },
  { id: 7, component: SlideUserInsights, label: "Insights" },
  { id: 8, component: SlideExperiment1, label: "Landing Page" },
  { id: 9, component: SlideExperiment2, label: "Sign up flow" },
  { id: 10, component: SlideABTesting, label: "Pre Onboarding" },
  { id: 11, component: SlideIterations, label: "Iterations" },
  { id: 12, component: SlideHighFidelity, label: "High Fidelity" },
  { id: 13, component: SlideShowcase, label: "Visual Craft" },
  { id: 14, component: SlideRetentionConversion, label: "Growth Loops" },
  { id: 15, component: SlideResults, label: "Results" },
];

const CaseStudySlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={freedLogo} alt="FREED" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => scrollTo(index)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  selectedIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            {selectedIndex + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Slider */}
      <div className="flex-1 pt-16" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 h-full">
              <slide.component />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                selectedIndex === index 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudySlider;
