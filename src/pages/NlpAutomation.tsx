import { ArrowRight, Bot, MessageSquareText, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NlpAutomation() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>

      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Platform Core</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            NLP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Automation</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-400 font-medium leading-relaxed">
            Automate document processing and customer interactions using advanced Natural Language Processing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] hover:-translate-y-1 transition-all shadow-xl hover:bg-slate-200">
               Request Demo
             </Link>
             <Link to="/services" className="inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 px-8 py-4 text-base font-bold text-white hover:border-slate-500 hover:bg-slate-800 transition-all">
               View All Services <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold text-white">Understand Nuance at Scale</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Transform unstructured text into structured, actionable data. From automated customer support routing to extracting crucial data points from legal documents, our NLP solutions streamline manual workflows and reduce human error.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MessageSquareText className="h-5 w-5 text-blue-400" />, title: "Multi-language support" },
                { icon: <Bot className="h-5 w-5 text-blue-400" />, title: "Sentiment analysis" },
                { icon: <FileText className="h-5 w-5 text-blue-400" />, title: "Intelligent text extraction" },
                { icon: <Shield className="h-5 w-5 text-blue-400" />, title: "Automated ticket routing" }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <div className="shrink-0">{feat.icon}</div>
                  <span className="text-white font-bold text-sm tracking-wide">{feat.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
            <div className="rounded-[2.5rem] border border-slate-800 bg-[#050505] p-2 shadow-2xl relative overflow-hidden">
               <div className="border border-slate-800 bg-slate-950 rounded-[2rem] p-6 h-full flex flex-col gap-4">
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-800 shrink-0"></div>
                    <div className="bg-slate-800/80 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-300">
                      I need help resetting my password and my credit card was double charged yesterday.
                    </div>
                 </div>
                 <div className="flex items-start gap-4 justify-end mt-4">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-sm p-4 text-sm text-blue-100 flex-1 relative">
                      <div className="absolute -top-3 right-4 bg-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-full text-blue-300 uppercase tracking-widest border border-blue-700/50">Auto-Routed</div>
                      Detected multiple intents:
                      <br /><br />
                      <span className="inline-block px-2 py-1 bg-slate-900/50 rounded mr-2 mb-2 text-rose-400 border border-slate-700 text-xs font-mono">Intent: Billing_Dispute</span>
                      <span className="inline-block px-2 py-1 bg-slate-900/50 rounded mr-2 mb-2 text-blue-400 border border-slate-700 text-xs font-mono">Intent: Auth_Reset</span>
                      <span className="inline-block px-2 py-1 bg-slate-900/50 rounded text-emerald-400 border border-slate-700 text-xs font-mono">Sentiment: Frustrated (-0.8)</span>
                      <br /><br />
                      Routing to Priority Support Queue (Human Hand-off)...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 shrink-0 flex items-center justify-center border border-blue-500/30"><Bot className="h-4 w-4 text-blue-400" /></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
