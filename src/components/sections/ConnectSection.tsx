import { motion } from "motion/react";
import chat0 from "../../assets/images/testimonials/chat-0.png";
import chat1 from "../../assets/images/testimonials/chat-1.png";
import chat2 from "../../assets/images/testimonials/chat-2.png";
import chat3 from "../../assets/images/testimonials/chat-3.png";

/*
 * Geometry ported 1:1 from the Figma export ("get in touch .svg").
 * Source artboard is 1040 x 628 with origin (8.1, 9.1); every value below is
 * that coordinate converted to a percentage of the card box, so the layout
 * holds at any card size:
 *   left = (x - 8.1) / 1040      top = (y - 9.1) / 628
 */

type Shot = {
  src: string;
  alt: string;
  /** left, top, width, height as % of the card box. */
  box: [number, number, number, number];
};

const SHOTS: Shot[] = [
  {
    src: chat0,
    alt: "Vikas Singh: This is good vrinda — Vrinda Khandelwal: Cool, I'll share figma link in group",
    box: [5.38, 76.26, 21.25, 11.15],
  },
  {
    src: chat1,
    alt: "Kartik Jain: This is so good!! Wow!",
    box: [36.73, 74.35, 20.38, 14.17],
  },
  {
    src: chat2,
    alt: "Vikas Singh: this is cool vrinda.",
    box: [22.12, 81.85, 17.79, 9.55],
  },
  {
    src: chat3,
    alt: "Vikas Singh: Very elegant looking UI vrinda. Just one suggestion, we dont have to write 300, 900 on the credit report gauge",
    box: [55.05, 78.5, 24.71, 13.38],
  },
];

/** Instagram's brand gradient, used on hover. */
const INSTAGRAM_GRADIENT =
  "linear-gradient(45deg, #FFDC80 0%, #FCAF45 15%, #F77737 30%, #F56040 45%, #FD1D1D 60%, #E1306C 75%, #C13584 88%, #833AB4 100%)";

/** Gmail's four brand colours as a hard-stop strip. */
const GMAIL_STRIP =
  "linear-gradient(90deg, #4285F4 0 25%, #EA4335 25% 50%, #FBBC04 50% 75%, #34A853 75% 100%)";

/** Green thumbtack pinning the Instagram tag. */
function PushPin() {
  return (
    <svg viewBox="0 0 40 52" fill="none" className="h-full w-full">
      <path
        d="M18.5 30.5 L14 50 L21.5 31.5 Z"
        fill="#999999"
        stroke="#7A7A7A"
        strokeWidth="0.8"
      />
      <ellipse cx="20" cy="26.5" rx="7.5" ry="5" fill="#53A629" />
      <ellipse cx="20" cy="13" rx="13" ry="10" fill="#81C746" />
      <ellipse cx="16" cy="10" rx="5" ry="3.6" fill="#CFFC9C" opacity="0.75" />
    </svg>
  );
}

export function ConnectSection() {
  return (
    // `container-type: size` makes this the sizing reference for every child.
    // Font sizes below use cqw/cqh (percent of THIS box) instead of vw, so text
    // scales in exact lockstep with the pills — which are sized in % of the
    // same box. Mixing vw with % is what let the labels outgrow their pills.
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ containerType: "size" }}
    >
      {/* ─── Decorative hanging strings (behind everything) ─── */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewBox="8.1 9.1 1040 628"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
      >
        <path
          d="M273.102 49.1001C283.435 81.4334 292.201 154.7 244.601 195.1C185.101 245.6 150.54 242.145 146.101 230.6C143.602 224.1 152.768 217.6 159.102 219.6M168.602 221.6C170.602 223.1 180.602 220.6 179.602 229.1C178.602 237.6 146.101 285.1 97.6016 280.1C84.6016 277.767 56.3016 266.3 47.1016 239.1"
          stroke="#A7A7A7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M534.602 358.6C539.002 357 541.102 357.933 541.602 358.6C551.102 366.6 490.547 400.672 379.102 417.1C253.602 435.6 122.102 358.6 70.1018 320.1C18.1012 281.6 47.1018 264.1 47.1018 264.1"
          stroke="#A7A7A7"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      {/* ─── Title ─── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-0 right-0 top-[11.5%] text-center font-oswald text-[7.31cqw] font-semibold uppercase leading-[0.95] tracking-[0.01em] text-white"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="absolute left-0 right-0 top-[24.8%] px-[6%] text-center font-dm-sans text-[2.12cqw] leading-tight text-white"
      >
        Open for new opportunites , Startups can count on!
      </motion.p>

      {/* ─── Mint dot in the gap between tags ─── */}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 1, type: "spring" }}
        className="pointer-events-none absolute z-[14] aspect-square w-[2.12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8AFFBE]"
        style={{ left: "69.03%", top: "43.31%" }}
        aria-hidden
      />

      {/* ─── Instagram tag (bottom of the stack) ─── */}
      <motion.a
        href="https://www.instagram.com/blithe_colors"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram — blithe_colors"
        initial={{ opacity: 0, y: 22, rotate: -14 }}
        animate={{ opacity: 1, y: 0, rotate: -8.57 }}
        transition={{ duration: 0.55, delay: 0.85, type: "spring", bounce: 0.35 }}
        whileHover={{ rotate: -4, scale: 1.07, y: "-11%" }}
        className="group absolute z-[12] flex w-max items-center justify-center whitespace-nowrap rounded-[12px] bg-black px-[2.2cqw] font-oswald text-[9.6cqh] font-medium uppercase leading-none tracking-[0.02em] text-white shadow-[0_6px_16px_rgba(0,0,0,0.3)] hover:z-30 hover:shadow-[0_16px_34px_rgba(193,53,132,0.45)]"
        style={{
          left: "51.44%",
          top: "52.19%",
          minWidth: "31.75%",
          maxWidth: "44%",
          height: "11.04%",
          transformOrigin: "0 0",
        }}
      >
        {/* Brand gradient fades in behind the label */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[12px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{ background: INSTAGRAM_GRADIENT }}
        />
        <span className="relative z-10">Instagram</span>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-[52%] -right-[3%] z-20 h-[85%] w-[13%]"
        >
          <PushPin />
        </span>
      </motion.a>

      {/* ─── LinkedIn tag ─── */}
      <motion.a
        href="https://www.linkedin.com/in/vrinda-khandelwal-60bab8243/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn — Vrinda Khandelwal"
        initial={{ opacity: 0, y: 20, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -2.4 }}
        transition={{ duration: 0.55, delay: 0.75, type: "spring", bounce: 0.35 }}
        whileHover={{ rotate: 0, scale: 1.07, y: "-11%" }}
        className="group absolute z-[13] flex w-max items-center justify-center whitespace-nowrap rounded-[14px] bg-[#FFFEF9] px-[2cqw] font-oswald text-[8.4cqh] font-semibold uppercase leading-none tracking-[0.01em] text-[#0B66C3] shadow-[0_5px_14px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:z-30 hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_16px_34px_rgba(10,102,194,0.45)]"
        style={{
          left: "30.92%",
          top: "48.63%",
          minWidth: "19.13%",
          maxWidth: "30%",
          height: "10.35%",
          transformOrigin: "0 0",
        }}
      >
        <span className="relative z-10">Linkdin</span>
        {/* Punch hole on the trailing edge */}
        <span
          aria-hidden
          className="absolute right-[2%] top-[62%] aspect-square w-[7%] -translate-y-1/2 rounded-full bg-[#3B3663] transition-colors duration-300 group-hover:bg-[#04416f]"
        />
      </motion.a>

      {/* ─── Email tag (top of the stack) ─── */}
      <motion.a
        href="mailto:vrinyk@gmail.com"
        aria-label="Email vrinyk@gmail.com"
        initial={{ opacity: 0, y: 24, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 4.5 }}
        transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.3 }}
        whileHover={{ rotate: 2, scale: 1.06, y: "-9%" }}
        className="group absolute z-[11] flex w-max items-center justify-center whitespace-nowrap rounded-[18px] bg-[#E1C3FF] px-[2.6cqw] font-dm-sans text-[6.5cqh] font-normal leading-none text-white shadow-[0_6px_18px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:z-30 hover:bg-white hover:text-[#C5221F] hover:shadow-[0_16px_34px_rgba(234,67,53,0.35)]"
        style={{
          left: "15.74%",
          top: "32.0%",
          minWidth: "49.25%",
          maxWidth: "56%",
          height: "15.61%",
          transformOrigin: "0 0",
        }}
      >
        <span className="relative z-10">vrinyk@gmail.com</span>
        {/* Gmail's four brand colours sweep in along the bottom edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-[5%] bottom-[9%] h-[7%] origin-left scale-x-0 rounded-full opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
          style={{ background: GMAIL_STRIP }}
        />
        {/* Punch hole on the leading edge */}
        <span
          aria-hidden
          className="absolute left-[1.8%] top-[22%] aspect-square w-[3.2%] rounded-full bg-[#3B3663] transition-colors duration-300 group-hover:bg-[#C5221F]"
        />
      </motion.a>

      {/* ─── Caption ─── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.05 }}
        className="absolute left-0 right-0 top-[67.5%] text-center font-caveat text-[2.88cqw] font-medium italic text-white"
      >
        some kind words which keeps me pushing
      </motion.p>

      {/* ─── Yellow sun-burst ─── */}
      <motion.svg
        initial={{ opacity: 0, scale: 0, rotate: -25 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 1.15, type: "spring", bounce: 0.4 }}
        className="pointer-events-none absolute z-[8]"
        style={{
          left: "83.27%",
          top: "66.24%",
          width: "9.81%",
          height: "16.24%",
        }}
        viewBox="874.102 425.1 102 102"
        fill="none"
        aria-hidden
      >
        <path
          d="M925.102 449.702L938.77 425.1L938.304 453.236L962.434 438.768L947.966 462.897L976.102 462.432L951.499 476.1L976.102 489.768L947.966 489.303L962.434 513.432L938.304 498.964L938.77 527.1L925.102 502.498L911.434 527.1L911.899 498.964L887.77 513.432L902.237 489.303L874.102 489.768L898.704 476.1L874.102 462.432L902.237 462.897L887.77 438.768L911.899 453.236L911.434 425.1L925.102 449.702Z"
          fill="#F0D332"
        />
      </motion.svg>

      {/* ─── Testimonial screenshots ─── */}
      {SHOTS.map((s, i) => (
        <motion.img
          key={i}
          src={s.src}
          alt={s.alt}
          draggable={false}
          initial={{ opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 1.2 + i * 0.09 }}
          whileHover={{ scale: 1.04, zIndex: 20 }}
          className="absolute rounded-[3px] object-cover shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          style={{
            left: `${s.box[0]}%`,
            top: `${s.box[1]}%`,
            width: `${s.box[2]}%`,
            height: `${s.box[3]}%`,
            zIndex: 2 + i,
          }}
        />
      ))}

      {/* ─── Pink sparkle over the screenshot band ─── */}
      <motion.svg
        initial={{ opacity: 0, scale: 0, rotate: -40 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1.6, type: "spring" }}
        className="pointer-events-none absolute z-[10] -translate-x-1/2 -translate-y-1/2"
        style={{ left: "31.6%", top: "77.7%", width: "2.6%", height: "4.2%" }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 0.5 L13.9 8.4 L20.5 4.2 L16.3 10.8 L23.5 12 L16.3 13.2 L20.5 19.8 L13.9 15.6 L12 23.5 L10.1 15.6 L3.5 19.8 L7.7 13.2 L0.5 12 L7.7 10.8 L3.5 4.2 L10.1 8.4 Z"
          fill="#F8C6FF"
        />
      </motion.svg>
    </div>
  );
}
