import { motion } from "motion/react";
import woodsPhoto from "../../assets/images/about-woods.jpg";
import ramenPhoto from "../../assets/images/about-ramen.jpg";

/** A photo in a polaroid frame, with a strip of tape. */
function Polaroid({
  src,
  alt,
  rotate,
  tape = "left",
}: {
  src: string;
  alt: string;
  rotate: number;
  tape?: "left" | "right";
}) {
  return (
    <div
      className="relative bg-[#F4F3EF] p-[5%] pb-[9%] shadow-[0_10px_24px_rgba(20,28,60,0.35)]"
      style={{ rotate: `${rotate}deg` }}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-[6%] h-[13%] w-[32%] bg-[#F2C94C]/85 ${
          tape === "left" ? "left-[-5%]" : "right-[-5%]"
        }`}
        style={{ rotate: tape === "left" ? "-38deg" : "36deg" }}
      />
      <img src={src} alt={alt} className="block h-full w-full object-cover" />
    </div>
  );
}

/** Hand drawn arrow that curves down and to the left. */
const CurlyArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 130 78" fill="none" className={className} aria-hidden>
    <path d="M124 10 C 96 4, 56 14, 30 52" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M41 42 L 27 56 L 46 60" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function AboutSection() {
  return (
    // A flow column rather than a stack of absolutely positioned pieces. The
    // title now reserves its own band, so nothing can ride up over it.
    <div className="flex h-full w-full flex-col p-6 md:p-[5.5%]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="shrink-0 text-center font-oswald text-[28px] font-semibold uppercase tracking-wide text-white md:text-[clamp(30px,3.6vw,56px)]"
      >
        Who Am I?
      </motion.h2>

      <div className="mt-6 flex min-h-0 flex-1 flex-col gap-8 md:mt-[3%] md:flex-row md:items-center md:gap-[6%]">
        {/* ─── Photos ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto w-full max-w-[300px] md:mx-0 md:aspect-[1/1.04] md:w-[45%] md:max-w-none"
        >
          {/* phone: one column, each photo with its own caption */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            <figure className="w-[72%]">
              <Polaroid src={woodsPhoto} alt="Above the clouds on a trek" rotate={-4} />
              <figcaption className="mt-3 flex items-start gap-2 text-[#F2C94C]">
                <CurlyArrow className="mt-0.5 w-10 shrink-0 -scale-y-100" />
                <span className="font-caveat text-[18px] font-bold leading-tight text-white">
                  I find myself in woods, my happy escape.
                </span>
              </figcaption>
            </figure>

            <figure className="w-[64%] self-end">
              <Polaroid src={ramenPhoto} alt="A bowl of ramen" rotate={5} tape="right" />
              <figcaption className="mt-2 text-center font-oswald text-[15px] font-bold text-[#e8a23a]">
                Fin-Gourmet
              </figcaption>
            </figure>

            <p className="self-start font-caveat text-[17px] font-bold leading-tight text-white">
              currently chasing after my dreams always!
            </p>
          </div>

          {/* desktop: scrapbook, laid out so nothing collides */}
          <div className="relative hidden h-full w-full md:block">
            <div className="absolute left-0 top-[7%] w-[48%]">
              <Polaroid src={woodsPhoto} alt="Above the clouds on a trek" rotate={-5} />
            </div>

            <div className="absolute left-[54%] top-0 w-[46%]">
              <p className="font-caveat text-[clamp(14px,1.4vw,22px)] font-bold leading-tight text-white">
                I find myself in woods,
                <br />
                my happy escape.
              </p>
              <CurlyArrow className="mt-1 w-[clamp(46px,4.4vw,74px)] text-[#F2C94C]" />
            </div>

            <div className="absolute left-[50%] top-[33%] w-[44%]">
              <Polaroid src={ramenPhoto} alt="A bowl of ramen" rotate={6} tape="right" />
            </div>
            <p
              className="absolute left-[54%] top-[84%] font-oswald text-[clamp(12px,1.15vw,18px)] font-bold text-[#e8a23a]"
              style={{ rotate: "6deg" }}
            >
              Fin-Gourmet
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute left-[2%] top-[76%] w-[44%]"
              style={{ rotate: "-7deg" }}
            >
              <p className="font-caveat text-[clamp(11px,1.15vw,17px)] font-bold leading-snug text-white">
                currently chasing after
                <br />
                my dreams always!
              </p>
              <svg
                className="mt-1 h-[8px] w-[88%]"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke="#c4e44e" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Bio ─── */}
        <div className="w-full md:w-[49%]">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 font-oswald text-[22px] font-semibold uppercase leading-[1.1] text-white md:mb-[6%] md:text-[clamp(19px,2.15vw,36px)]"
          >
            Economics first,<br />design for good
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-dm-sans text-[14px] leading-[1.6] text-white/80 md:text-[clamp(11px,1.02vw,16px)] md:leading-[1.65]"
          >
            I grew up on <em className="italic">M.A.D</em> and{" "}
            <em className="italic">Art Attack</em>, and on watching my mom
            thread beads at the kitchen table. That is where the urge to make
            things started, whether it was a handmade gift or a sorting hat.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-4 font-dm-sans text-[14px] leading-[1.6] text-white/80 md:mt-[4%] md:text-[clamp(11px,1.02vw,16px)] md:leading-[1.65]"
          >
            <span className="font-medium text-white">Economics</span> came
            first. I found my way into{" "}
            <span className="font-medium text-white">design</span> by being nosy
            about everything around me, and that is where{" "}
            <span className="font-medium text-white">
              curiosity and problem solving
            </span>{" "}
            finally clicked together. Today I design thoughtful, immersive
            experiences that balance imagination with structure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-4 font-dm-sans text-[14px] italic leading-[1.5] text-white/90 md:mt-[4%] md:text-[clamp(11px,1.02vw,16px)]"
          >
            Let's make something complicated look easy.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
