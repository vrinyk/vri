import { MessageSquare, BarChart3 } from "lucide-react";

const userInterviews = [
  "I couldn't see all my loan accounts — it felt incomplete and confusing.",
  "I didn't understand who I'm supposed to pay… FREED or the bank?",
  "I thought this was like EMI repayment or consolidation. Settlement wasn't clear.",
  "Kuch samajh nahi aaya — I needed a step-by-step explanation.",
  "I couldn't figure out the total amount I'll pay in the end or how monthly savings work.",
];

const salesRepsFeedbacks = [
  "Most users think FREED pays creditors first, and they repay FREED later as EMI.",
  "90% users don't read the agreement/program details — they skip and misunderstand.",
  "Biggest friction is trust: some users assume it's fraud due to unclear payment flow.",
  "Users don't know what happens after signup — next steps are not obvious.",
  "Users don't understand protection from creditor calls and the real program benefits.",
];

const appReviews = [
  "Payment flow is unclear — who am I paying and why?",
  "Not enough transparency on which accounts are covered / visible.",
  "Too many terms… settlement process is not explained simply.",
  "I need clear breakdown: what I pay monthly + total payable + when settlement happens.",
  "Explain benefits clearly — especially how you stop creditor calls and support the user.",
];

const commonProblems = [
  "Hard to understand how DRP works",
  "Unclear payment mechanism (FREED vs creditors)",
  "Trust issues due to low transparency",
  "Users confuse DRP with EMI / consolidation",
  "Lack of simple breakdown (monthly + total + timeline)",
  "Benefits not explained clearly (e.g., protection from creditor calls)",
];

const SlideUserFeedbacks = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start md:items-center px-4 py-8 md:px-6 md:py-12">
      <div className="container max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-8">
          {/* Page Title - Top Left */}
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1f232d]">
            User Feedbacks
          </h2>
          
          {/* UX Tools - Top Right */}
          <div className="text-right">
            <p className="text-sm font-semibold text-[#6b6f7a] mb-2">UX Tools used</p>
            <ul className="text-xs text-[#6b6f7a] space-y-0.5">
              <li>User interviews</li>
              <li>Heuristic evaluation</li>
              <li>Sales rep analysis</li>
              <li>App review</li>
            </ul>
          </div>
        </div>
        
        {/* Center Heading */}
        <div className="mb-10">
          <h3
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            What users actually said
          </h3>
          <p className="text-[#6b6f7a] max-w-2xl">
            I started with questions, not hypotheses. Talking to real users — and listening to the language they used — revealed the problem wasn't about UI. Words like <em>"fraud"</em>, <em>"confused"</em>, <em>"who do I even pay?"</em> weren't describing a navigation issue. They were describing a trust crisis.
          </p>
        </div>
        
        {/* 3-Column Structure */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Column 1: User Interviews */}
          <div className="bg-[#dbeef8]/20 rounded-2xl p-6 border border-[#dbeef8]/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#dbeef8] rounded-full flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h4 className="font-bold text-[#1f232d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>User Interviews</h4>
                <p className="text-xs text-[#6b6f7a]">5 users (M+F)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {userInterviews.map((quote, index) => (
                <p key={index} className="text-sm text-[#1f232d] italic bg-[#dbeef8]/30 rounded-lg p-3">
                  "{quote}"
                </p>
              ))}
            </div>
          </div>
          
          {/* Plus Separator */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <span className="text-2xl text-[#6b6f7a] font-bold">+</span>
          </div>
          
          {/* Column 2: Sales Reps Feedbacks */}
          <div className="bg-[#dce8e1]/20 rounded-2xl p-6 border border-[#dce8e1]/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#dce8e1] rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#294b3a]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1f232d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sales Reps Feedbacks</h4>
              </div>
            </div>
            
            <div className="space-y-3">
              {salesRepsFeedbacks.map((quote, index) => (
                <p key={index} className="text-sm text-[#1f232d] italic bg-[#dce8e1]/30 rounded-lg p-3">
                  "{quote}"
                </p>
              ))}
            </div>
          </div>
          
          {/* Column 3: App Reviews & Forums */}
          <div className="bg-[#f9ddd4]/20 rounded-2xl p-6 border border-[#f9ddd4]/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f9ddd4] rounded-full flex items-center justify-center">
                <span className="text-xl">🧐</span>
              </div>
              <div>
                <h4 className="font-bold text-[#1f232d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>App Reviews & Forums</h4>
              </div>
            </div>
            
            <div className="space-y-3">
              {appReviews.map((quote, index) => (
                <p key={index} className="text-sm text-[#1f232d] italic bg-[#f9ddd4]/30 rounded-lg p-3">
                  "{quote}"
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sales-Led User Research Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1f232d]/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#1f232d]" />
            </div>
            <h3 
              className="text-xl md:text-2xl font-bold text-[#1f232d]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Insights from Sales-Led User Research
            </h3>
          </div>
          <p className="text-[#6b6f7a] max-w-3xl mb-6">
            I conducted a structured survey with sales representatives to understand recurring user confusions, objections, and mental models observed during real customer conversations. These insights directly informed the DRP onboarding redesign.
          </p>
          
          {/* Survey Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fbfaf7] rounded-[16px] p-4 border border-[#e6e0d5] overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Sales survey results - Payment beliefs and DRP understanding" 
                className="w-full h-auto rounded-[16px]"
              />
            </div>
            <div className="bg-[#fbfaf7] rounded-[16px] p-4 border border-[#e6e0d5] overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Sales survey results - Drop-offs and EMI beliefs" 
                className="w-full h-auto rounded-[16px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Common Problems */}
        <div className="bg-[#fbfaf7] rounded-2xl p-6 border border-[#e6e0d5]">
          <span
            className="inline-block text-lg mb-4 text-[#1f232d]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            The real problems users had — not the ones we assumed
          </span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-[#1f232d]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideUserFeedbacks;
