import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Database, Network } from 'lucide-react';

export default function FoundationalModels() {
  const models = [
    {
      name: "NonaCrypt-Omni",
      size: "Trillion-parameter multi-modal",
      description: "Our flagship frontier model. Capable of seamlessly interpreting text, code, audio, and high-resolution images in a single forward pass with state-of-the-art zero-shot reasoning.",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      features: ["Native multi-modal reasoning", "128K context window", "Advanced coding capabilities"]
    },
    {
      name: "NonaCrypt-Code",
      size: "34B parameter dense model",
      description: "Purpose-built for software engineering workflows. Trained heavily on diverse enterprise codebases, with an unparalleled ability to spot security vulnerabilities and write testable code.",
      icon: <Network className="h-8 w-8 text-purple-400" />,
      features: ["Near-instant completion", "Supports 60+ languages", "IDE-ready natively"]
    },
    {
      name: "NonaCrypt-Embed",
      size: "Optimized embedding model",
      description: "High-dimensional text embeddings designed specifically for enterprise Retrieval-Augmented Generation (RAG) pipelines, allowing hyper-accurate vector search over thousands of documents.",
      icon: <Database className="h-8 w-8 text-emerald-400" />,
      features: ["MTEB Leaderboard Top 3", "2048 Output Dimensions", "High-throughput serving"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>

      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Platform Core</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            Foundational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Models</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-400 font-medium leading-relaxed">
            The compute engines powering the NonaCrypt ecosystem. Available via our low-latency API or for deployment on your own isolated infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] hover:-translate-y-1 transition-all shadow-xl hover:bg-slate-200">
               Get API Access
             </Link>
             <Link to="/products" className="inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 px-8 py-4 text-base font-bold text-white hover:border-slate-500 hover:bg-slate-800 transition-all">
               View Platforms <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="space-y-12">
          {models.map((model, idx) => (
            <div key={idx} className="group p-8 md:p-12 rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:border-slate-700 transition-all cursor-pointer relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-slate-950/50 border border-slate-800 flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                  {model.icon}
                </div>
              </div>
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{model.name}</h2>
                  <span className="rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 font-bold">
                    {model.size}
                  </span>
                </div>
                <p className="text-lg text-slate-400 font-medium leading-relaxed mb-6 max-w-3xl">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-sm font-bold text-slate-300">
                      <Zap className="h-4 w-4 text-emerald-400 mr-2 shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 pb-10">
        <div className="p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
               <Shield className="h-6 w-6 text-blue-400" />
             </div>
             <div>
               <h3 className="text-white font-bold text-lg leading-tight">Enterprise Safety Enforced</h3>
               <p className="text-slate-400 text-sm">Every model is aligned by default for harmlessness and enterprise readiness.</p>
             </div>
          </div>
          <Link to="/security" className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800 text-sm font-bold text-white hover:bg-slate-700 transition-all">
            Read Security Protocol
          </Link>
        </div>
      </div>
    </div>
  );
}
