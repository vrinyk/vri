import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Shot from "./Shot";
import imgQualification from "@/assets/case-study-agent-flow/qualification.png";
import imgCreditors from "@/assets/case-study-agent-flow/creditors.png";
import imgSummaryFoir from "@/assets/case-study-agent-flow/summary_foir.png";
import imgPreferredLenders from "@/assets/case-study-agent-flow/preferred_lenders.png";
import imgPreLogin from "@/assets/case-study-agent-flow/pre_login.png";
import imgDocuments from "@/assets/case-study-agent-flow/documents_tab1.png";
import imgFileHeader from "@/assets/case-study-agent-flow/scrub_flow.png";
import imgRequestInfo from "@/assets/case-study-agent-flow/request_information.png";
import imgRequestDetails from "@/assets/case-study-agent-flow/request_details.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const sections = [
  "Hero",
  "Summary",
  "Problem",
  "Layout Research",
  "Context Loss",
  "Field Hunting",
  "Solution",
  "Solution Deep Dive",
  "Request Information",
  "Impact",
];

/** Each section: why it changed, what we did, and the call I made. */
const DEEP_DIVE = [
  {
    tag: "Qualification",
    title: "Qualification Details",
    heard: "I lose my place every time I scroll back up",
    measured: "9 jumps",
    measuredLabel: "between sections per qualification call",
    why: "Qualifying questions were scattered across sections. Advisors jumped around while the client was on the call.",
    what: "Salary, city, housing, employer, bounces and CIBIL at the top of tab 1, in the order advisors ask them.",
    note: "No wizard. The whole card stays open, because clients jump ahead.",
    img: imgQualification,
    label: "Qualification Details",
  },
  {
    tag: "Creditors",
    title: "Creditor Overview",
    heard: "I keep Experian open in one tab and the sheet in another",
    measured: "2 tools",
    measuredLabel: "cross-checked for every creditor list",
    why: "Advisors cross-referenced Experian data with Excel sheets to decide which creditors to include.",
    what: "Included and Excluded lists auto-populate from Experian. Toggling a creditor recalculates totals instantly.",
    note: "The default is a starting point, not a lock. Every field stays editable.",
    img: imgCreditors,
    label: "Included and excluded creditors, with live totals",
  },
  {
    tag: "Summary & FOIR",
    title: "Summary & FOIR Calculator",
    heard: "If I take too long on the maths the client goes quiet",
    measured: "4 min",
    measuredLabel: "spent on FOIR per call, by hand",
    why: "FOIR was calculated manually in Excel, causing errors and slow pitching on the call.",
    what: "Automated 'Without FREED vs With FREED': FOIR, new EMI, reduction %, savings, in real time.",
    note: "A comparison, not a result. The old number stays next to the new one.",
    img: imgSummaryFoir,
    label: "Without FREED vs With FREED",
  },
  {
    tag: "Preferred Lenders",
    title: "Preferred Lenders",
    heard: "Every advisor recommends a different lender for the same file",
    measured: "1 in 5",
    measuredLabel: "files rejected on a policy mismatch",
    why: "Lender fitment lived in spreadsheets, so recommendations were slow and inconsistent.",
    what: "Every lender in one table: tenure, rate, EMI, reduction and top-up, with the best option auto-tagged.",
    note: "Mismatched lenders are tagged, not hidden. Advisors have to explain a no, and TLs review the same list later.",
    img: imgPreferredLenders,
    label: "Preferred Lenders, with policy mismatches visible",
  },
  {
    tag: "Pre Login",
    title: "Pre Login Details",
    heard: "Half these fields are not my job while the client is talking",
    measured: "38 fields",
    measuredLabel: "on one screen before the split",
    why: "Qualification and login fields sat in one long form, cluttering the call.",
    what: "Moved to tab 2: PAN, Aadhaar, DOB, addresses, employment and references, prefilled from tab 1.",
    note: "Tab 1 is a conversation, tab 2 is data entry. Different jobs, different screens.",
    img: imgPreLogin,
    label: "Pre Login Details",
  },
  {
    tag: "Documents",
    title: "Document Manager",
    heard: "I rename files just so the next person knows what they are",
    measured: "12 min",
    measuredLabel: "per file on download and re-upload",
    why: "Files were downloaded, renamed and re-uploaded just to record type and date range.",
    what: "Type, name, date range, comments and a 'Used for Login' toggle, editable in place.",
    note: "Naming conventions are a workaround for missing fields.",
    img: imgDocuments,
    label: "Document Manager",
  },
  {
    tag: "Scrub Flow",
    title: "Scrub Workflow & Task Tracking",
    heard: "Nobody can tell me where the file is stuck",
    measured: "40 min",
    measuredLabel: "saved per scrub cycle after the change",
    why: "Scrub approvals happened over Excel and email. TLs and ops had no live view of file status.",
    what: "Scrub requested in-app, auto-assigned to the TL, and every outcome notifies the functions it affects.",
    note: "Edit access freezes while a file is under review. One owner at a time is what makes the status believable.",
    img: imgFileHeader,
    label: "File header and Sales Rep Actions",
  },
];

const AgentFlowSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sections.length;

  const scrollToSlide = useCallback((index: number) => {
    if (scrollRef.current && index >= 0 && index < totalSlides) {
      scrollRef.current.scrollTo({ left: index * window.innerWidth, behavior: "smooth" });
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollToSlide(currentSlide + 1);
      if (e.key === "ArrowLeft") scrollToSlide(currentSlide - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / window.innerWidth);
      setCurrentSlide(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background flex flex-col">
      {/* Top Navigation */}
      <nav className="flex-shrink-0 z-50 px-3 md:px-6 lg:px-10 py-2.5 md:py-3 flex items-center justify-between border-b border-border/60">
        <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
          {sections.map((section, i) => (
            <button
              key={section}
              onClick={() => scrollToSlide(i)}
              className={`px-3 py-1 rounded-full text-[13px] font-body whitespace-nowrap transition-all ${
                currentSlide === i
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        <span className="text-[13px] font-body text-muted-foreground whitespace-nowrap pl-6">
          {currentSlide + 1} / {totalSlides}
        </span>
      </nav>

      {/* Slides */}
      <div
        ref={scrollRef}
        className="flex flex-1 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
      >
        {/* SLIDE 1: Hero */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight mb-8">
                Decluttering the<br />
                <em className="italic">Agent Flow</em>
              </motion.h1>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                FREED consolidates and settles unsecured debt through Debt Consolidation Plans. Loan advisors onboard thousands of clients monthly, qualifying leads, matching lenders, and managing files end-to-end through our internal system, Spine.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-base text-muted-foreground mb-12">
                Vrinda Khandelwal
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {["Product Strategy", "Visual Design", "UX Research", "System Design", "UI Design", "Prototyping"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-border text-[13px] font-body text-foreground">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 2: Summary */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-6xl leading-[0.95] tracking-tight mb-10">
                Summary
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                "Advisors jump between tabs and Excel and lose track of files. The system does not match the call."
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-3xl">
                How does Spine let an advisor qualify a lead and check lender fitment without leaving the call?
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed mb-14 max-w-3xl">
                Impact: 2 tabs instead of 6, no Excel, 40 minutes saved per scrub cycle.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-8 mb-14">
                <div>
                  <p className="font-body text-sm text-accent mb-1.5">Category</p>
                  <p className="font-body text-foreground">Enterprise SaaS</p>
                  <p className="font-body text-foreground">Internal Tool</p>
                </div>
                <div>
                  <p className="font-body text-sm text-accent mb-1.5">Team</p>
                  <p className="font-body text-foreground">1 Product Designer</p>
                  <p className="font-body text-foreground">1 Product Manager</p>
                  <p className="font-body text-foreground">3 Developers</p>
                </div>
                <div>
                  <p className="font-body text-sm text-accent mb-1.5">Timeline</p>
                  <p className="font-body text-foreground">2 Months</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Shot src={imgSummaryFoir} label="Spine DCP flow overview" className="w-full max-w-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 3: Problem */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Problem</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-10">
                "Too many tabs, too little clarity<br />
                <em className="italic">where do I even start?"</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-8 max-w-3xl">
                {[
                  { title: "Heavy Document Overhead", desc: "Documents ate the day: request, download, rename, re-upload. Clients got scattered WhatsApp asks." },
                  { title: "Excel Sheet Dependency", desc: "Lender policies and employer lists lived in spreadsheets, so errors and rejections followed." },
                  { title: "No Real-time Visibility", desc: "Post-scrub stages lived in Excel, so nobody could see where a file was stuck." },
                  { title: "Misaligned Information Architecture", desc: "The tab structure did not match the call, so advisors hunted for the next question." },
                ].map(item => (
                  <div key={item.title}>
                    <h3 className="font-body text-xl mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 4: Layout Research (merged with Visual Considerations) */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Audit</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight mb-8">
                Layout Research
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-8">
                The old DCP page had <span className="text-accent">multiple open tabs</span> that advisors had to navigate through for every single file. Most of these tabs were rarely used during the core call flow, yet they added cognitive load and slowed down the process.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-8">
                The key insight was that agents don't need many tabs. They need <span className="font-semibold text-foreground">the right information in the right sequence</span>. So instead of spreading data across 6+ tabs, we consolidated everything into <span className="text-accent">a single scrollable flow within 2 focused tabs</span>, presenting fields in the exact order advisors ask questions on calls.
              </motion.p>

              {/* Visual Considerations merged here */}
              <motion.div variants={fadeUp} className="mb-8">
                <p className="font-body font-semibold text-foreground text-[1.125rem] mb-4">Visual Considerations</p>
                <p className="font-body text-muted-foreground text-[1.125rem] leading-[1.7] mb-4">
                  Accordion hid the next question, and advisors read ahead while the client talks. So: <span className="text-accent">sequential single-scroll layout within each tab</span>, qualification info and Experian score at the top, modular sections below.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-8">
                <p className="font-body font-semibold text-foreground text-[1.125rem] mb-4">Key Changes</p>
                <div className="space-y-2 font-body text-muted-foreground text-[1.125rem] leading-[1.7]">
                  <p>• Consolidated multiple scattered tabs into 2 purpose-driven tabs</p>
                  <p>• Arranged fields in sequential scroll order matching the natural call flow</p>
                  <p>• Kept the most critical info (qualification, Experian score) visible at the top</p>
                  <p>• Moved the employer, serviceability and lender policy sheets into a right rail</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Shot src={imgQualification} label="2 tabs, sections in call order, lists in the right rail" className="w-full max-w-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 5: Context Loss */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Audit</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight mb-8">
                Context Loss Costs Team 40+ Hours Monthly
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-5">
                Through shadowing sessions with loan advisors, I discovered agents switch between Spine, Excel, and WhatsApp 30 to 40 times per shift, spending <span className="font-semibold text-foreground">10 seconds each time reorienting</span>, remembering client context and finding where they left off.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-5">
                <span className="font-semibold text-foreground">The scale of the problem:</span> For a typical 20-advisor team, this meant <span className="font-semibold text-foreground">40+ hours monthly</span>. Across FREED's growing advisor base handling thousands of DCP files, the systemic productivity loss was massive.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-8">
                The core problem wasn't speed or memory. <span className="font-semibold text-foreground">The system forgot for them.</span>
              </motion.p>
              <motion.div variants={fadeUp} className="mb-8">
                <p className="font-body font-semibold text-foreground text-[1.125rem] mb-2">The Solution</p>
                <p className="font-body text-muted-foreground text-[1.125rem] leading-[1.7] mb-1">The system had to preserve advisor context:</p>
                <div className="space-y-1 font-body text-muted-foreground text-[1.125rem] leading-[1.7]">
                  <p>• Auto-populate fields from Experian data (creditors, outstanding, score)</p>
                  <p>• Keep the last viewed tab and scroll position when switching between files</p>
                  <p>• Show client summary and key metrics at the top without needing to scroll</p>
                </div>
              </motion.div>
              {/* Impact Card */}
              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-xl mb-10">
                <p className="font-body text-sm text-accent font-semibold mb-4">Impact</p>
                <div className="flex items-center gap-16">
                  <div>
                    <p className="font-body text-3xl md:text-4xl text-foreground">40 min</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">saved per file processed</p>
                  </div>
                  <div>
                    <p className="font-body text-3xl md:text-4xl text-foreground">0 sheets</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">no external Excel needed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Shot src={imgFileHeader} label="Total outstanding and Experian score, pinned to the file header" className="w-full max-w-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 6: Field Hunting */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Audit</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight mb-8">
                Agents lost 1 hour every day finding and filling required fields
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-8">
                While observing screen recordings, I noticed agents spend <span className="font-semibold text-foreground">2 to 3 minutes</span> hunting for the required fields after qualification. The form was long, fields were scattered across sections, and agents had to manually cross-reference data from Experian reports. I proposed to restructure the flow so qualification fields come first, creditor data auto-populates from the report, and summary calculations happen in real-time within Spine.
              </motion.p>

              <motion.div variants={fadeUp} className="mb-8">
                <p className="font-body font-semibold text-foreground text-[1.125rem] mb-4">What I timed</p>
                <div className="space-y-2 font-body text-muted-foreground text-[1.125rem] leading-[1.7]">
                  <p>• <span className="font-semibold text-foreground">40 min</span> per qualified file, including the 20-minute call</p>
                  <p>• <span className="font-semibold text-foreground">20 min</span> more for the TL to re-check it</p>
                  <p>• <span className="font-semibold text-foreground">8 tabs and sheets</span> open for one conversation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 7: Solution */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Solution</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-8">
                Restructured Around the <em className="italic">Call Flow</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Two tabs that follow the call. Tab one, Qualification Details, holds everything an advisor asks during the initial call. The second tab, Pre Login Details, handles all the personal and document information needed before a lender login. No more jumping around.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
                {["Qualification Details", "Pre Login Details"].map((tab, i) => (
                  <span key={tab} className="px-5 py-2.5 rounded-full border border-border font-body text-sm">
                    <span className="text-accent font-semibold mr-1.5">{i + 1}.</span>{tab}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Shot src={imgQualification} label="Tab 1: Qualification Details" />
                <Shot src={imgPreLogin} label="Tab 2: Pre Login Details" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 8: Solution Deep Dive (combined) */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">Solution Deep Dive</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
                One flow, <em className="italic">seven fixes</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
Seven sections, each one an advisor pain. Why it changed, what we did, and the call I made.
              </motion.p>

              {DEEP_DIVE.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} className="mb-14 pb-14 border-b border-border/50 last:border-0 last:pb-0 last:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-2xl text-accent">0{i + 1}</span>
                    <span className="px-3 py-1 rounded-full border border-border text-[12px] font-body text-muted-foreground">{item.tag}</span>
                  </div>
                  <h3 className="font-body text-2xl md:text-3xl mb-5">{item.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-5">
                    <div>
                      <p className="font-body text-[12px] tracking-widest uppercase text-muted-foreground mb-2">Why we changed it</p>
                      <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{item.why}</p>
                    </div>
                    <div>
                      <p className="font-body text-[12px] tracking-widest uppercase text-accent mb-2">What we did</p>
                      <p className="font-body text-[15px] text-foreground leading-relaxed">{item.what}</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-secondary/60 px-6 py-4 mb-6 max-w-3xl">
                    <p className="font-body text-[12px] tracking-widest uppercase text-muted-foreground mb-1.5">The call I made</p>
                    <p className="font-body text-[15px] text-foreground leading-relaxed">{item.note}</p>
                  </div>
                  {/* The evidence the call rests on: one thing advisors said,
                      one thing shadowing measured. */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-3xl">
                    <div className="rounded-xl border border-border px-5 py-3.5">
                      <p className="font-body text-[11px] tracking-widest uppercase text-muted-foreground mb-1.5">Heard</p>
                      <p className="font-body text-[14px] italic text-foreground leading-snug">“{item.heard}”</p>
                    </div>
                    <div className="rounded-xl border border-accent/40 bg-accent/10 px-5 py-3.5">
                      <p className="font-body text-[11px] tracking-widest uppercase text-accent mb-1.5">Measured</p>
                      <p className="font-body text-[17px] font-semibold text-foreground leading-tight">{item.measured}</p>
                      <p className="font-body text-[13px] text-muted-foreground leading-snug mt-0.5">{item.measuredLabel}</p>
                    </div>
                  </div>
                  <Shot src={item.img} label={item.label} className="w-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SLIDE 9: Request Information */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">Feature Deep Dive</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-8">
                Request <em className="italic">Information</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-5">
                One of the main motives behind revamping Spine was to solve a critical bottleneck: <span className="font-semibold text-foreground">collecting documents and details from clients</span>. Sales reps often couldn't reach clients on calls. Users wouldn't pick up the phone, follow-ups were inconsistent, and advisors had to wait hours just to complete a single file registration.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-5">
                The old process relied entirely on <span className="text-accent">manual WhatsApp messages and phone calls</span> to chase documents. If the client was unavailable, the file sat idle, delaying the entire pipeline.
              </motion.p>

              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-2xl mb-8">
                <p className="font-body text-sm text-accent font-semibold mb-3">The Solution</p>
                <p className="font-body text-[1.05rem] text-foreground leading-[1.7] mb-4">
                  We built a <span className="font-semibold">Request Information</span> feature directly into Spine. Advisors can now send structured requests for details and documents to clients without needing to call them.
                </p>
                <div className="space-y-2 font-body text-muted-foreground text-[1rem] leading-[1.7]">
                  <p>• <span className="font-semibold text-foreground">Request Details</span>: Send specific data requests (bank statements, salary slips) with document type, date period, and comments</p>
                  <p>• <span className="font-semibold text-foreground">Request Documents</span>: Ask for client documents with type selection and period filters</p>
                  <p>• Clients receive <span className="text-accent">nudges via WhatsApp, email, and the FREED app</span></p>
                  <p>• No more waiting on hold or chasing clients across channels</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-2xl mb-8">
                <p className="font-body text-sm text-accent font-semibold mb-3">The detail I'm proudest of</p>
                <p className="font-body text-[1.05rem] text-foreground leading-[1.7]">
                  Spine pre-selects the empty fields. Deleting from a list beats remembering one.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-xl mb-10">
                <p className="font-body text-sm text-accent font-semibold mb-4">Impact</p>
                <div className="flex items-center gap-16">
                  <div>
                    <p className="font-body text-3xl md:text-4xl text-foreground">3x</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">faster document collection</p>
                  </div>
                  <div>
                    <p className="font-body text-3xl md:text-4xl text-foreground">0 calls</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">needed to request documents</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Shot src={imgRequestDetails} label="Request Details panel" />
                <Shot src={imgRequestInfo} label="Request Information in the right rail" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 10: Impact */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-5 md:px-16 lg:px-24 pt-6 md:pt-12 pb-10 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">My Role & Impact</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-10">
                Designing from the <em className="italic">Ground Up</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                  <h3 className="font-body text-xl mb-5">What I Did</h3>
                  <ul className="font-body text-muted-foreground space-y-3 text-[15px] leading-relaxed">
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Listened to loan advisor calls to map the real qualification workflow</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Collaborated closely with the PM to define requirements, edge cases, and system flows</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Turned each rule into something visible: a default, a tag, a locked field, a notification</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Designed the new 2-tab Spine architecture aligned to the call flow</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Created high-fidelity prototypes for loan advisors, TLs, and ops personas</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Built the design prototype in Lovable for stakeholder validation</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Stayed on through handoff, build reviews and design QA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-body text-xl mb-5">Impact</h3>
                  <div className="space-y-6">
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-body text-3xl md:text-4xl">2 <em className="italic">Tabs</em></p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Scattered workflows consolidated into purpose-driven tabs</p>
                    </div>
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-body text-3xl md:text-4xl">40 <em className="italic">min</em></p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Saved per scrub by eliminating Excel juggling</p>
                    </div>
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-body text-3xl md:text-4xl">Zero <em className="italic">Sheets</em></p>
                      <p className="font-body text-sm text-muted-foreground mt-1">No external Excel needed for fitment, employer lists, or tracking</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.p variants={fadeUp} className="font-body text-muted-foreground text-sm mt-10">
                Prototype →&nbsp;
                <a href="https://preview--creditor-clarity-tool.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:opacity-80">
                  creditor-clarity-tool.lovable.app
                </a>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="flex-shrink-0 flex items-center justify-center gap-2.5 py-4">
        <button
          onClick={() => scrollToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-20 hover:bg-secondary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1.5 mx-2">
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`rounded-full transition-all ${
                currentSlide === i
                  ? "w-6 h-2 bg-foreground"
                  : "w-2 h-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollToSlide(currentSlide + 1)}
          disabled={currentSlide === totalSlides - 1}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-20 hover:bg-secondary transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AgentFlowSlider;
