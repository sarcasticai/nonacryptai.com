import { Shield, Lock, Eye, AlertCircle, Cpu, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Safety() {
  const principles = [
    {
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: "Zero-Knowledge Inferences",
      desc: "Model parameters render outputs inside fully sandboxed client environments or encrypted VPC gates. Input frames and query histories are instantly flushed following reply delivery."
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-400" />,
      title: "Sealed Context Training Rules",
      desc: "Our base architectures never use client training transcripts, corporate metadata, or synthetic execution loops for model reinforcement. Your intellectual capital remains exclusively yours."
    },
    {
      icon: <Eye className="h-6 w-6 text-indigo-400" />,
      title: "Hardened Red Teaming Safeguards",
      desc: "Every model checkpoint undergoes intense programmatic stress testing, adversarial neural alignment injections, and zero-day prompt injection audits prior to direct cluster hosting."
    }
  ];

  const standards = [
    { metric: "Inference Sanitization", value: ">99.997%", status: "Guaranteed" },
    { metric: "Leak-Rate Telemetry", value: "0.00%", status: "Verified" },
    { metric: "Red-Teaming Regimen", value: "Daily Audits", status: "Active" },
    { metric: "Bias Skew Coefficient", value: "<0.002", status: "Compliant" }
  ];

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-350 relative overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A]/50 to-[#0A0A0A] pointer-events-none"></div>

      <div className="relative pt-32 pb-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-400 font-bold tracking-wider uppercase mb-6">
              Core Alignment Standards
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              AI Safety, Alignment & <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Adversarial Defense Policy
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed font-semibold">
              Deploying cutting-edge deep learning parameters within zero-trust boundaries. Our architectures guarantee safety, mathematical absolute defense, and privacy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 relative z-20">
        {/* Core Principles Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-left">
          {principles.map((pr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                  {pr.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{pr.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 font-medium">{pr.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-Time Assessment Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl border border-white/5 bg-slate-950/40 p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 h-48 w-48 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4 flex items-center gap-2">
                <Cpu className="h-6 w-6 text-emerald-400" />
                Inference Alignment Monitor
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 font-semibold mb-6">
                Operating continuously to prevent semantic poisoning and verify compliance indexes. High-consequence models deploy filters at logit-levels before returning outputs to client sockets.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-350 font-bold">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Prompt Injection Sanitizer Active
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-350 font-bold">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Dynamic Model Hallucination Filtering (Real-time)
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-350 font-bold">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Instant Key Isolation & Session Flushing
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 grid grid-cols-2 gap-4">
              {standards.map((st, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold tracking-wider">{st.metric}</span>
                  <div className="mt-3">
                    <span className="text-2xl font-extrabold text-white block">{st.value}</span>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[9px] font-bold font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                      {st.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Informative text body */}
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white mt-12">
          <h2>Adversarial Network Protection</h2>
          <p className="text-slate-400 leading-relaxed font-semibold">
            We employ automated generative networks to simulate high-frequency spoofing, extraction patterns, and classification shifts. This ensures our operational endpoints remain fully resilient to zero-day threat models targeting deep neural assets.
          </p>
          <p className="text-slate-400 leading-relaxed font-semibold">
            In compliance with the highest federal and corporate regulatory criteria, clients have direct capabilities to trigger hardware-integrated security switches to isolate local model weight slices instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
