import { motion } from "motion/react";
import greenDot from "../../assets/images/green-dot.svg";

const TESTIMONIALS = [
  { name: "Vikas Singh", time: "1:33 PM", messages: ["This is good vrinda"] },
  { name: "Vrinda Khandelwal", time: "6:59 PM", messages: ["Cool, I'll share figma link in group"] },
  { name: "Vikas Singh", time: "2:40 PM", messages: ["this is cool vrinda."] },
  { name: "Kartik Jain", time: "8:39 PM", messages: ["This is so good!!", "Wow!"] },
  { name: "Vikas Singh", time: "1:43 PM", messages: ["Very elegant looking UI vrinda.", "just one suggestion, we dont have t..."] },
];

export default function ConnectSection() {
  return (
    <>
      <div className="relative h-full w-full p-[6%]">
        {/* ─── Title ─── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-oswald text-[clamp(32px,4.5vw,72px)] font-semibold uppercase text-white mb-[1%]"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-center font-dm-sans text-[clamp(12px,1.2vw,20px)] text-white/80 mb-[4%]"
        >
          Open for new opportunities , Startups can count on!
        </motion.p>

        {/* ─── Contact Links ─── */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-[4%]">
          <motion.a
            href="mailto:vrinyk@gmail.com"
            initial={{ opacity: 0, y: 15, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="rounded-full bg-[#E8B4F8] px-6 py-3 font-dm-sans text-[clamp(14px,1.4vw,22px)] font-semibold text-black shadow-md cursor-pointer"
          >
            vrinyk@gmail.com
          </motion.a>

          <motion.img
            src={greenDot}
            alt=""
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6, type: "spring" }}
            className="h-4 w-4"
          />

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 15, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="rounded-full bg-[#E8B4F8] px-6 py-3 font-dm-sans text-[clamp(14px,1.4vw,22px)] font-semibold text-black shadow-md cursor-pointer"
          >
            LINKDIN
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 15, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="rounded-md bg-black px-6 py-3 font-dm-sans text-[clamp(14px,1.4vw,22px)] font-semibold text-white shadow-md cursor-pointer"
          >
            INSTAGRAM
          </motion.a>
        </div>

        {/* ─── Testimonials ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-center font-caveat text-[clamp(14px,1.3vw,22px)] font-bold text-white/70 italic mb-[3%]"
        >
          some kind words which keeps me pushing
        </motion.p>

        <div className="flex flex-wrap items-start justify-center gap-3 px-[5%]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className="rounded-lg bg-white px-4 py-3 shadow-sm max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="h-5 w-5 rounded-full bg-blue-card/30 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-blue-card">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-dm-sans text-[11px] font-semibold text-black">
                  {t.name}
                </span>
                <span className="font-dm-sans text-[9px] text-black/40 ml-auto">
                  {t.time}
                </span>
              </div>
              {t.messages.map((msg, j) => (
                <p key={j} className="font-dm-sans text-[11px] text-black/70 leading-snug">
                  {msg}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Decorative star burst */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
          className="absolute right-[8%] bottom-[15%]"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <polygon
              points="24,0 28,18 48,18 32,28 36,48 24,36 12,48 16,28 0,18 20,18"
              fill="#FFD700"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
