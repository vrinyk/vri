import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import Shot from "./Shot";
import imgQualification from "@/assets/case-study-agent-flow/qualification.png";
import imgCreditors from "@/assets/case-study-agent-flow/creditors.png";
import imgSummaryFoir from "@/assets/case-study-agent-flow/summary_foir.png";
import imgPreferredLenders from "@/assets/case-study-agent-flow/preferred_lenders.png";
import imgPreLogin from "@/assets/case-study-agent-flow/pre_login.png";
import imgDocuments from "@/assets/case-study-agent-flow/documents_tab1.png";
import imgScrubFlow from "@/assets/case-study-agent-flow/scrub_flow.png";
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
      <nav className="flex-shrink-0 z-50 px-6 lg:px-10 py-3 flex items-center justify-between border-b border-border/60">
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
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight mb-8">
                Decluttering the<br />
                <em className="italic">Agent Flow</em>
              </motion.h1>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                FREED is India's leading debt relief platform, helping individuals consolidate and settle unsecured debt through Debt Consolidation Plans (DCP). Our loan advisors onboard thousands of clients monthly, qualifying leads, matching lenders, and managing files end-to-end through our internal system, Spine.
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
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-6xl leading-[0.95] tracking-tight mb-10">
                Summary
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                "Loan advisors are jumping between tabs, switching to Excel sheets, and losing track of client files. The system doesn't match how they actually work."
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-3xl">
                How can we restructure Spine's DCP flow so that loan advisors can qualify leads, check lender fitment, and process files without relying on external tools or breaking their natural call flow?
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed mb-14 max-w-3xl">
                Impact: Consolidated scattered workflows into 2 purpose-driven tabs, eliminated Excel dependency for scrub tracking, and saved 40 minutes per scrub cycle.
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
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Problem</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-10">
                "Too many tabs, too little clarity<br />
                <em className="italic">where do I even start?"</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-8 max-w-3xl">
                {[
                  { title: "Heavy Document Overhead", desc: "Most advisor time went to requesting, downloading, renaming, and re-uploading documents. Clients received multiple informal WhatsApp requests instead of one structured ask." },
                  { title: "Excel Sheet Dependency", desc: "Lender policies, employer lists, serviceability checks all lived in scattered spreadsheets. This caused frequent human errors and higher rejection rates." },
                  { title: "No Real-time Visibility", desc: "Post-scrub stages lived in Excel. TLs and ops had no clean live view to track where files were stuck, at which function, and why." },
                  { title: "Misaligned Information Architecture", desc: "Spine's tab structure didn't match the actual call flow. Advisors had to jump between sections to follow their natural qualification sequence." },
                ].map(item => (
                  <div key={item.title}>
                    <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 4: Layout Research (merged with Visual Considerations) */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
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
                  We explored several layout options: accordion, multi-tab, and single-scroll. The final decision was to use a <span className="text-accent">sequential single-scroll layout within each tab</span>, placing qualification info and Experian score at the top, with modular sections below. This approach minimised tab-switching while keeping interactions focused and purposeful.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-8">
                <p className="font-body font-semibold text-foreground text-[1.125rem] mb-4">Key Changes</p>
                <div className="space-y-2 font-body text-muted-foreground text-[1.125rem] leading-[1.7]">
                  <p>– Consolidated multiple scattered tabs into 2 purpose-driven tabs</p>
                  <p>– Arranged fields in sequential scroll order matching the natural call flow</p>
                  <p>– Kept the most critical info (qualification, Experian score) visible at the top</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <ImagePlaceholder label="Add layout research visuals" className="w-full max-w-3xl" aspectRatio="16/9" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 5: Context Loss */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
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
                  <p>– Auto-populate fields from Experian data (creditors, outstanding, score)</p>
                  <p>– Keep the last viewed tab and scroll position when switching between files</p>
                  <p>– Show client summary and key metrics at the top without needing to scroll</p>
                </div>
              </motion.div>
              {/* Impact Card */}
              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-xl">
                <p className="font-body text-sm text-accent font-semibold mb-4">Impact</p>
                <div className="flex items-center gap-16">
                  <div>
                    <p className="font-heading text-3xl md:text-4xl text-foreground">40 min</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">saved per file processed</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl md:text-4xl text-foreground">0 sheets</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">no external Excel needed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 6: Field Hunting */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Audit</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight mb-8">
                Agents lost 1 hour every day finding and filling required fields
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-[1.125rem] text-muted-foreground leading-[1.7] max-w-3xl mb-10">
                While observing screen recordings, I noticed agents spend <span className="font-semibold text-foreground">2 to 3 minutes</span> hunting for the required fields after qualification. The form was long, fields were scattered across sections, and agents had to manually cross-reference data from Experian reports. I proposed to restructure the flow so qualification fields come first, creditor data auto-populates from the report, and summary calculations happen in real-time within Spine.
              </motion.p>
              <motion.div variants={fadeUp}>
                <ImagePlaceholder label="Add field hunting / screen recording visuals" className="w-full max-w-3xl" aspectRatio="16/9" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 7: Solution */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">The Solution</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-8">
                Restructured Around the <em className="italic">Call Flow</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
                We reorganised the entire DCP section into 2 purpose-driven tabs that mirror the natural call progression. The first tab, Qualification Details, captures everything an advisor asks during the initial call. The second tab, Pre Login Details, handles all the personal and document information needed before a lender login. No more jumping around.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
                {["Qualification Details", "Pre Login Details"].map((tab, i) => (
                  <span key={tab} className="px-5 py-2.5 rounded-full border border-border font-body text-sm">
                    <span className="text-accent font-semibold mr-1.5">{i + 1}.</span>{tab}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImagePlaceholder label="Before: Old Spine Layout" aspectRatio="16/10" />
                <Shot src={imgQualification} label="After: Redesigned Tab Structure" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 8: Solution Deep Dive (combined) */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">Solution Deep Dive</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
                One flow, <em className="italic">seven fixes</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
                Every section below solved a specific advisor pain — from scattered qualification fields to Excel-based scrub tracking. Together they became the new 2-tab Spine flow.
              </motion.p>

              {[
                {
                  tag: "Qualification",
                  title: "Qualification Details",
                  problem: "Qualifying questions were scattered across sections. Advisors had to jump around while the client was still on the call.",
                  solution: "Grouped net salary, city, housing, employer, bounces and CIBIL at the top of tab 1 in the exact order advisors ask on the call.",
                  label: "Qualification Details",
                  afterImg: imgQualification,
                },
                {
                  tag: "Creditors",
                  title: "Creditor Overview",
                  problem: "Advisors cross-referenced Experian data with separate Excel sheets to decide which creditors to include.",
                  solution: "Included / Excluded lists auto-populate from Experian. Toggling a creditor instantly recalculates totals inside Spine.",
                  label: "Creditor Overview",
                  afterImg: imgCreditors,
                },
                {
                  tag: "Summary & FOIR",
                  title: "Summary & FOIR Calculator",
                  problem: "FOIR was calculated manually in Excel, causing errors and slow pitching on the call.",
                  solution: "Automated 'Without FREED vs With FREED' comparison shows FOIR, new EMI, reduction % and monthly savings in real time.",
                  label: "Summary with FOIR",
                  afterImg: imgSummaryFoir,
                },
                {
                  tag: "Preferred Lenders",
                  title: "Preferred Lenders",
                  problem: "Lender fitment lived in spreadsheets. Recommending the right lender was slow and inconsistent.",
                  solution: "All preferred lenders shown with tenure, rate, EMI, reduction, top-up. Best option auto-tagged based on the client profile.",
                  label: "Preferred Lenders",
                  afterImg: imgPreferredLenders,
                },
                {
                  tag: "Pre Login",
                  title: "Pre Login Details",
                  problem: "Qualification and login fields were mixed into one long form, cluttering the call flow.",
                  solution: "Separated into tab 2 — PAN, Aadhaar, DOB, addresses, employment, family — used only after the client is qualified.",
                  label: "Pre Login Details",
                  afterImg: imgPreLogin,
                },
                {
                  tag: "Documents",
                  title: "Document Manager",
                  problem: "Files were renamed and re-uploaded manually. No structure for type, period, or login usage.",
                  solution: "Type tagging, date ranges, comments and a 'Used for Login' toggle in a single organised view.",
                  label: "Document Manager",
                  afterImg: imgDocuments,
                },
                {
                  tag: "Scrub Flow",
                  title: "Scrub Workflow & Task Tracking",
                  problem: "Scrub approvals happened over Excel and email. TLs and ops had no live view of file status.",
                  solution: "Advisors request scrub checks in-app, tasks auto-assign to TLs, and status changes notify advisor, TL, ops and credit officer.",
                  label: "In-app Scrub Flow",
                  afterImg: imgScrubFlow,
                },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} className="mb-14 pb-14 border-b border-border/50 last:border-0 last:pb-0 last:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading text-2xl text-accent">0{i + 1}</span>
                    <span className="px-3 py-1 rounded-full border border-border text-[12px] font-body text-muted-foreground">{item.tag}</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl mb-5">{item.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-body text-[12px] tracking-widest uppercase text-muted-foreground mb-2">Problem</p>
                      <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <p className="font-body text-[12px] tracking-widest uppercase text-accent mb-2">Solution</p>
                      <p className="font-body text-[15px] text-foreground leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImagePlaceholder label={`Before: ${item.label}`} aspectRatio="16/10" />
                    <Shot src={item.afterImg} label={`After: ${item.label}`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SLIDE 15: Request Information */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
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
                  <p>– <span className="font-semibold text-foreground">Request Details</span>: Send specific data requests (bank statements, salary slips) with document type, date period, and comments</p>
                  <p>– <span className="font-semibold text-foreground">Request Documents</span>: Ask for client documents with type selection and period filters</p>
                  <p>– Clients receive <span className="text-accent">nudges via WhatsApp, email, and the FREED app</span></p>
                  <p>– No more waiting on hold or chasing clients across channels</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl bg-secondary/80 px-8 py-6 max-w-xl mb-10">
                <p className="font-body text-sm text-accent font-semibold mb-4">Impact</p>
                <div className="flex items-center gap-16">
                  <div>
                    <p className="font-heading text-3xl md:text-4xl text-foreground">3x</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">faster document collection</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl md:text-4xl text-foreground">0 calls</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">needed to request documents</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Shot src={imgRequestDetails} label="Request Details panel" />
                <Shot src={imgRequestInfo} label="Request Information dialog" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 16: Impact */}
        <section className="min-w-[100vw] flex-shrink-0 snap-start overflow-y-auto px-8 md:px-16 lg:px-24 pt-10 md:pt-12 pb-12 md:pb-16 flex flex-col justify-start">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="font-body text-[13px] tracking-widest uppercase text-muted-foreground mb-6">My Role & Impact</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight mb-10">
                Designing from the <em className="italic">Ground Up</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                  <h3 className="font-heading text-xl mb-5">What I Did</h3>
                  <ul className="font-body text-muted-foreground space-y-3 text-[15px] leading-relaxed">
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Listened to loan advisor calls to map the real qualification workflow</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Collaborated closely with the PM to define requirements, edge cases, and system flows</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Designed the new 2-tab Spine architecture aligned to the call flow</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Created high-fidelity prototypes for loan advisors, TLs, and ops personas</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Built the design prototype in Lovable for stakeholder validation</li>
                    <li className="flex items-start gap-2.5"><span className="text-accent mt-0.5">•</span> Worked closely with 1 PM to prioritise features and manage scope</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-5">Impact</h3>
                  <div className="space-y-6">
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-heading text-3xl md:text-4xl">2 <em className="italic">Tabs</em></p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Scattered workflows consolidated into purpose-driven tabs</p>
                    </div>
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-heading text-3xl md:text-4xl">40 <em className="italic">min</em></p>
                      <p className="font-body text-sm text-muted-foreground mt-1">Saved per scrub by eliminating Excel juggling</p>
                    </div>
                    <div className="rounded-xl bg-secondary/60 px-6 py-5">
                      <p className="font-heading text-3xl md:text-4xl">Zero <em className="italic">Sheets</em></p>
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
