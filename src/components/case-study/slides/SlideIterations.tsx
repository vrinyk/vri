import highFidelityScreens from "@/assets/case-study-freed/high-fidelity-screens.png";
import iterationsBoard from "@/assets/case-study-freed/iterations-board.png";
const SlideIterations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]">
      {/* Top heading section - centered */}
      <div className="flex flex-col items-center text-center pt-28 pb-8 px-6">
        <h2 
          className="text-5xl md:text-6xl font-bold uppercase tracking-wide leading-tight text-black"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          NEVER ENDING
        </h2>
        <h1 
          className="text-4xl md:text-5xl italic mt-2 text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Iterationsssss........
        </h1>
        <p 
          className="text-lg mt-4 text-muted-foreground max-w-2xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Until I reach that perfect spot
        </p>
        <p
          className="text-sm mt-6 text-muted-foreground/80 max-w-xl leading-relaxed italic"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Endless debates with PMs, late-night pivots fueled by AI insights, marketing pushing for "just one more tweak" — every version got closer to something that finally clicked.
        </p>
      </div>

      {/* Image section */}
      <div className="flex-1 flex items-center justify-center px-8 pb-20">
        <div className="w-full max-w-6xl flex gap-6">
          <div className="flex-1">
            <img 
              src={highFidelityScreens} 
              alt="Onboarding Iterations across multiple versions" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <img 
              src={iterationsBoard} 
              alt="Iterations board overview" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIterations;
