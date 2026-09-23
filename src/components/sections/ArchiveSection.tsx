import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import namdaphaSite from "../../assets/images/namdapha-site.jpg";
import artBlueStudy from "../../assets/images/art-blue-study.jpg";
import artWatercolour from "../../assets/images/art-watercolour-portrait.jpg";
import artPressedFlowers from "../../assets/images/art-pressed-flowers.jpg";
import artSortingHat from "../../assets/images/art-sorting-hat.jpg";

/** Live site the Arunachal Pradesh card opens. */
const NAMDAPHA_URL = "https://namdapha-axuo.vercel.app/";

/** Things made with no brief attached. */
const ART = [
  { src: artBlueStudy, label: "Everything blue" },
  { src: artWatercolour, label: "Watercolour portrait" },
  { src: artPressedFlowers, label: "I am a mosaic of" },
  { src: artSortingHat, label: "The sorting hat" },
];

export function ArchiveSection() {
  return (
    <div className="h-full w-full overflow-y-auto px-5 py-8 md:px-[6%] md:py-[4%]">
      {/* ─── Centred header ─── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-dm-sans text-[11px] uppercase tracking-[0.24em] text-white/55 md:text-[clamp(9px,0.8vw,12px)]">
          Archive
        </p>
        <h2 className="mt-2.5 font-oswald text-[26px] font-semibold uppercase leading-[1.05] text-white md:text-[clamp(28px,3.6vw,54px)]">
          My work, beyond case studies
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-dm-sans text-[13.5px] leading-relaxed text-white/75 md:text-[clamp(11px,1vw,16px)]">
          A little bit of this and a little bit of that — side projects, posters,
          type, sketchbook pages and the things I make when nobody briefs me.
        </p>
      </motion.div>

      {/* ─── Side project ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mx-auto mt-8 max-w-5xl md:mt-[3.5%]"
      >
        <p className="mb-3 font-dm-sans text-[10.5px] uppercase tracking-[0.2em] text-white/50 md:text-[clamp(9px,0.72vw,11.5px)]">
          Side project
        </p>

        <SideProjectCard />
      </motion.div>

      {/* ─── Art and experiments ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 pb-4 md:mt-[3.5%]"
      >
        <p className="mx-auto mb-3 max-w-5xl font-dm-sans text-[10.5px] uppercase tracking-[0.2em] text-white/50 md:text-[clamp(9px,0.72vw,11.5px)]">
          Art & experiments
        </p>

        {/* Runs edge to edge — the negative margin cancels the section padding
            so the strip bleeds off both sides instead of stopping short. */}
        <div
          className="-mx-5 overflow-hidden md:-mx-[6%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
          }}
        >
          {/* The list is rendered twice and the track travels exactly half its
              own width. The trailing padding matches the gap — without it the
              track is half a gap short of a full cycle and the loop jumps. */}
          <motion.div
            className="flex w-max gap-4 pr-4 md:gap-5 md:pr-5"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 36, ease: "linear", repeat: Infinity }}
          >
            {[...ART, ...ART].map((art, i) => (
              <figure key={`${art.label}-${i}`} className="shrink-0">
                <img
                  src={art.src}
                  alt={art.label}
                  loading="lazy"
                  aria-hidden={i >= ART.length}
                  className="h-[190px] w-auto rounded-xl object-cover shadow-[0_10px_26px_rgba(20,28,60,0.3)] md:h-[clamp(190px,21vw,310px)]"
                />
                <figcaption className="mt-2 font-dm-sans text-[11px] text-white/55 md:text-[clamp(9px,0.75vw,12.5px)]">
                  {art.label}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * The Arunachal Pradesh revamp. Renders as a link once NAMDAPHA_URL is set,
 * and stays a plain card until then rather than shipping a dead link.
 */
function SideProjectCard() {
  const body = (
    <>
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/15 bg-white/[0.07] md:aspect-auto md:h-full md:w-[46%] md:shrink-0 md:border-b-0 md:border-r">
        <img
          src={namdaphaSite}
          alt="The Namdapha Tiger Reserve home page"
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center p-5 md:p-[4%]">
        <p className="font-dm-sans text-[10.5px] uppercase tracking-[0.18em] text-white/55 md:text-[clamp(9px,0.7vw,11.5px)]">
          Govt. of Arunachal Pradesh
        </p>
        <h3 className="mt-2 font-oswald text-[19px] font-semibold uppercase leading-tight text-white md:text-[clamp(17px,1.7vw,28px)]">
          Namdapha Wildlife Reserve, website revamp
        </h3>
        <p className="mt-2.5 font-dm-sans text-[13px] leading-relaxed text-white/75 md:text-[clamp(10px,0.92vw,15px)]">
          I got the opportunity to work with the Arunachal Pradesh wildlife
          reserve to rebuild their website — from design through deployment,
          with accessibility and nature-first storytelling as the north stars.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-dm-sans text-[12.5px] font-medium text-white md:text-[clamp(10px,0.9vw,14px)]">
          {NAMDAPHA_URL ? "Visit the live site" : "Live site coming soon"}
          {NAMDAPHA_URL && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
        </span>
      </div>
    </>
  );

  const shell =
    "flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/[0.04] md:h-[clamp(200px,22vw,300px)] md:flex-row";

  if (!NAMDAPHA_URL) return <div className={shell}>{body}</div>;

  return (
    <motion.a
      href={NAMDAPHA_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className={`${shell} transition-colors hover:border-white/40 hover:bg-white/[0.08]`}
    >
      {body}
    </motion.a>
  );
}
