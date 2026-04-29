import { motion } from "motion/react";

type Testimonial = {
  name: string;
  time: string;
  messages: string[];
  avatarColor: string;
  avatarBg: string;
  /** Position as `top%, left%` within the messages area. */
  pos: { top: string; left: string };
  rotate: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vikas Singh",
    time: "6:55 PM",
    messages: ["This is good vrinda"],
    avatarColor: "#000",
    avatarBg: "#D9D9D9",
    pos: { top: "0%", left: "4%" },
    rotate: -2,
  },
  {
    name: "Vrinda Khandelwal",
    time: "6:59 PM",
    messages: ["Cool, I'll share figma link in group"],
    avatarColor: "#fff",
    avatarBg: "#E86E5C",
    pos: { top: "32%", left: "8%" },
    rotate: 1.5,
  },
  {
    name: "Kartik Jain",
    time: "8:39 PM",
    messages: ["This is so good!!", "Wow!"],
    avatarColor: "#fff",
    avatarBg: "#677DC6",
    pos: { top: "0%", left: "40%" },
    rotate: -1,
  },
  {
    name: "Vikas Singh",
    time: "2:40 PM",
    messages: ["this is cool vrinda."],
    avatarColor: "#000",
    avatarBg: "#D9D9D9",
    pos: { top: "44%", left: "30%" },
    rotate: 1,
  },
  {
    name: "Vikas Singh",
    time: "1:43 PM",
    messages: [
      "Very elegant looking UI vrinda.",
      "jsut one suggestion, we dont have t…",
    ],
    avatarColor: "#000",
    avatarBg: "#D9D9D9",
    pos: { top: "30%", left: "62%" },
    rotate: -1.5,
  },
];

/** Person-silhouette avatar — matches the small icon used in the chat cards. */
function AvatarIcon({ bg, fg }: { bg: string; fg: string }) {
  return (
    <span
      className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
      style={{ background: bg }}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill={fg} aria-hidden>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.314 0-8 1.657-8 5v1h16v-1c0-3.343-4.686-5-8-5Z" />
      </svg>
    </span>
  );
}

export function ConnectSection() {
  return (
    <div className="relative h-full w-full p-[6%]">
      {/* ─── Title ─── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center font-oswald text-[clamp(36px,5.2vw,76px)] font-semibold uppercase tracking-wide text-white"
      >
        GET IN TOUCH
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-1 text-center font-dm-sans text-[clamp(12px,1.25vw,20px)] text-white/85"
      >
        Open for new opportunites , Startups can count on!
      </motion.p>

      {/* ─── Hang-tags row ─── */}
      <div className="relative mx-auto mt-[4%] h-[22%] w-[88%]">
        {/* Curvy string threading through the tag holes */}
        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.7, pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" }}
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path
            d="M40 60 C 140 10, 240 130, 360 90 S 600 30, 740 110 S 940 60, 980 120"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        </motion.svg>

        {/* Email tag — large lavender */}
        <motion.a
          href="mailto:vrinyk@gmail.com"
          initial={{ opacity: 0, y: 15, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.35 }}
          whileHover={{ rotate: -2, y: -3, scale: 1.02 }}
          className="absolute left-[6%] top-[8%] flex items-center gap-3 rounded-l-full rounded-r-[12px] bg-[#D8B8EE] px-7 py-3 pl-5 font-oswald text-[clamp(18px,2vw,32px)] font-medium tracking-wide text-black shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
          style={{ transformOrigin: "left center" }}
        >
          <span className="block h-3 w-3 rounded-full bg-blue-card-back ring-2 ring-white/40" />
          vrinyk@gmail.com
        </motion.a>

        {/* Green dot accent */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.85, type: "spring" }}
          className="absolute left-[55%] top-[18%] h-3.5 w-3.5 rounded-full bg-[#A6E84F] shadow-[0_0_0_3px_rgba(255,255,255,0.25)]"
        />

        {/* LINKDIN tag — small cream */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 18, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.5, delay: 0.75, type: "spring", bounce: 0.4 }}
          whileHover={{ rotate: 0, y: -3, scale: 1.04 }}
          className="absolute left-[24%] top-[58%] flex items-center gap-2 rounded-l-full rounded-r-md bg-[#EFEAE0] px-5 py-2 pl-4 font-oswald text-[clamp(14px,1.6vw,26px)] font-medium tracking-wide text-[#3A6BB6] shadow-[0_4px_10px_rgba(0,0,0,0.18)]"
          style={{ transformOrigin: "left center" }}
        >
          <span className="block h-2.5 w-2.5 rounded-full bg-blue-card-back ring-2 ring-white/40" />
          LINKDIN
        </motion.a>

        {/* INSTAGRAM tag — black with green clip */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 18, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5, delay: 0.9, type: "spring", bounce: 0.4 }}
          whileHover={{ rotate: 0, y: -3, scale: 1.04 }}
          className="absolute left-[50%] top-[55%] flex items-center gap-3 rounded-md bg-black px-7 py-3 font-oswald text-[clamp(14px,1.7vw,28px)] font-medium tracking-wider text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        >
          INSTAGRAM
          {/* Green push-pin / clip on the top-right */}
          <span aria-hidden className="absolute -top-3 -right-3">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <path
                d="M8 24 L24 8 C 27 5 33 6 35 9 C 37 12 36 17 33 19 L18 32 Z"
                fill="#7BC74D"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="29" cy="13" r="2.5" fill="#000" />
            </svg>
          </span>
        </motion.a>
      </div>

      {/* ─── Yellow sun-burst (right side) ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1, type: "spring", bounce: 0.4 }}
        className="pointer-events-none absolute right-[5%] top-[58%] -translate-y-1/2"
      >
        <svg width="78" height="78" viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,2 56,30 78,12 64,40 96,42 66,52 86,76 56,60 58,92 46,62 22,86 36,56 4,58 30,46 12,20 40,32"
            fill="#F2C232"
            stroke="#000"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ─── Caption ─── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.05 }}
        className="mt-[3%] text-center font-caveat text-[clamp(14px,1.5vw,26px)] font-bold italic text-white"
      >
        some kind words which keeps me pushing
      </motion.p>

      {/* ─── Scattered chat cards ─── */}
      <div className="relative mx-auto mt-[1.5%] h-[34%] w-[92%]">
        {/* Pink decorative star floating between cards */}
        <motion.svg
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.45, type: "spring" }}
          className="absolute left-[28%] top-[10%] z-10"
          width="26"
          height="26"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 1 L13.6 8.5 L21 9.2 L15.5 14 L17 21 L12 17.2 L7 21 L8.5 14 L3 9.2 L10.4 8.5 Z"
            fill="#E36AA8"
            stroke="#000"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </motion.svg>

        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, scale: 0.9, rotate: t.rotate * 2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: t.rotate }}
            transition={{ duration: 0.45, delay: 1.2 + i * 0.08 }}
            whileHover={{ rotate: 0, scale: 1.03, zIndex: 20 }}
            style={{ top: t.pos.top, left: t.pos.left }}
            className="absolute w-[22%] min-w-[180px] max-w-[240px] rounded-md bg-white px-3 py-2 shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
          >
            <div className="mb-0.5 flex items-center gap-1.5">
              <AvatarIcon bg={t.avatarBg} fg={t.avatarColor} />
              <span className="font-dm-sans text-[clamp(9px,0.8vw,12px)] font-bold text-black">
                {t.name}
              </span>
              <span className="ml-auto font-dm-sans text-[clamp(8px,0.7vw,10px)] text-black/45">
                {t.time}
              </span>
            </div>
            {t.messages.map((msg, j) => (
              <p
                key={j}
                className="font-dm-sans text-[clamp(9px,0.85vw,12px)] leading-snug text-black/75"
              >
                {msg}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
