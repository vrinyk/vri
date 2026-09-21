import { motion } from "motion/react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import namdaphaSite from "../../assets/images/namdapha-site.jpg";

/** Live site the Arunachal Pradesh card opens. */
const NAMDAPHA_URL = "https://namdapha-axuo.vercel.app/";

/** Art and experiments — images to be dropped in later. */
const TILES = [
  { label: "Poster study", ratio: "3/4" },
  { label: "Type experiment", ratio: "1/1" },
  { label: "Sketchbook", ratio: "3/4" },
  { label: "Calendar type", ratio: "1/1" },
  { label: "Photo walk", ratio: "4/5" },
  { label: "3D still", ratio: "1/1" },
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
        className="mx-auto mt-8 max-w-5xl pb-4 md:mt-[3.5%]"
      >
        <p className="mb-3 font-dm-sans text-[10.5px] uppercase tracking-[0.2em] text-white/50 md:text-[clamp(9px,0.72vw,11.5px)]">
          Art & experiments
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {TILES.map(tile => (
            <figure key={tile.label} className="min-w-0">
              <div
                className="flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/30 bg-white/[0.07]"
                style={{ aspectRatio: tile.ratio }}
              >
                <ImageIcon className="h-5 w-5 text-white/40" aria-hidden="true" />
              </div>
              <figcaption className="mt-1.5 font-dm-sans text-[10.5px] text-white/55 md:text-[clamp(9px,0.72vw,12px)]">
                {tile.label}
              </figcaption>
            </figure>
          ))}
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
