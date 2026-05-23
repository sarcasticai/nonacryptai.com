import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Clock, ShieldCheck, Zap, Server, Sliders, CheckCircle2 } from 'lucide-react';

export default function Sla() {
  const [nodes, setNodes] = useState<number>(3);
  const [modelType, setModelType] = useState<'sovereign' | 'hyper-dense' | 'lightweight'>('sovereign');

  // Interactive metrics calculation
  const getSlaResult = () => {
    switch (modelType) {
      case 'sovereign':
        return {
          uptime: 99.999,
          latency: Math.max(22, 45 - nodes * 3),
          throughput: nodes * 1200,
          support: 'Dedicated Technical Account Manager',
          guaranteeText: 'Ultra-isolated multi-tenant HSM peering with physical hardware partitions.'
        };
      case 'hyper-dense':
        return {
          uptime: 99.99,
          latency: Math.max(15, 30 - nodes * 2),
          throughput: nodes * 3500,
          support: 'Continuous NOC Liaison Assist',
          guaranteeText: 'Optimized high-frequency predictive loops backed by shared hot-swappable clusters.'
        };
      case 'lightweight':
        return {
          uptime: 99.90,
          latency: Math.max(8, 18 - nodes * 1),
          throughput: nodes * 8000,
          support: '24/7 Global DevOps Command Center',
          guaranteeText: 'Maximized streaming capabilities with automated container cluster scaling.'
        };
    }
  };

  const results = getSlaResult();

  const standardTiers = [
    { title: "Network Host Uptime", target: "99.99%", desc: "Core cluster ingress points are load-balanced across three separate power-independent regional datacenters." },
    { title: "Disaster Recovery RTO", target: "< 15 minutes", desc: "Failovers transfer model execution weights securely across airgapped redundant tunnels dynamically." },
    { title: "Latency Response Caps", target: "50ms Bounds", desc: "Guaranteed maximum time limits for standard 8B token context windows under full scale load workloads." }
  ];

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-350 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-950/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>

      <div className="relative pt-32 pb-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs text-blue-400 font-bold tracking-wider uppercase mb-6">
              Platform Guarantees & SLAs
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              Enterprise Service Level <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Agreements & Assurance
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed font-semibold">
              Operating under transparent, contractually backed performance guarantees. We secure high-availability channels so you can deploy neural features with peace of mind.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 relative z-25">
        
        {/* Metric Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {standardTiers.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-mono font-extrabold uppercase text-indigo-400 tracking-wider bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/15">SLA Target</span>
                <span className="text-xl font-extrabold text-white font-mono">{t.target}</span>
              </div>
              <h3 className="text-base font-extrabold text-white mb-2">{t.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Configuration Panel */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Controls Box (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-white/5 bg-slate-900/45 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
                <Sliders className="h-5 w-5 text-blue-400" />
                Performance Modeler
              </h3>
              <p className="text-xs text-slate-400 font-semibold mb-8 leading-relaxed">
                Estimate latency bounds, network packet throughput levels, and dedicated technical assistance structures instantly.
              </p>

              {/* Model Select */}
              <div className="mb-8">
                <label className="text-xs font-mono uppercase text-slate-400 font-extrabold block mb-3">Neural Cluster Class</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['sovereign', 'hyper-dense', 'lightweight'] as const).map(type => (
                    <button
                      key={type}
                      onClick={() => setModelType(type)}
                      className={`text-[10px] font-bold py-2 px-2.5 rounded-xl border text-center transition-all uppercase tracking-wide cursor-pointer ${
                        modelType === type
                          ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-sm shadow-blue-500/5'
                          : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:bg-slate-900/20'
                      }`}
                    >
                      {type.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Node Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono uppercase text-slate-400 font-extrabold">Dedicated Node Spans</label>
                  <span className="text-sm font-bold text-blue-400 font-mono">{nodes} Active Nodes</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={nodes}
                  onChange={(e) => setNodes(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 mt-2 font-bold">
                  <span>1 MIN (Failover Node)</span>
                  <span>12 Max Nodes</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-2.5 text-[10px] font-mono text-slate-500">
              <Server className="h-4 w-4 text-slate-600" />
              PEERING LAYER CALCULATOR LOADED STATE
            </div>
          </div>

          {/* Results Box (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-950/40 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-extrabold tracking-wider">Dynamic Result Telemetry</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                  Service Guaranteed
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 border-y border-slate-900 py-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold">Uptime Commitment</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-white font-mono block mt-1.5">{results.uptime}%</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold">Inference Delay Bounds</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-blue-400 font-mono block mt-1.5">~{results.latency}ms</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold">Guaranteed Tokens/Sec</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-mono block mt-1.5">{results.throughput}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold block mb-1.5">Dedicated Incident SLA Assures</span>
                <p className="text-xs text-white leading-relaxed font-semibold">
                  {results.guaranteeText} Includes real-time auditability channels, zero telemetry payload caching, and instant recovery switches.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-extrabold block mb-1.5">SOC Team Escort Structure</span>
                <span className="text-xs text-slate-300 font-bold block bg-slate-900/50 border border-slate-900 px-3.5 py-2.5 rounded-xl">
                  {results.support}
                </span>
              </div>
            </div>

            <p className="text-[9px] text-slate-500 font-mono leading-normal mt-6 leading-relaxed">
              These performance projections act as direct benchmarks for legal Master Services Agreement (MSA) appendices. Contracted values can be scaled during annual gateway reviews.
            </p>
          </div>

        </div>

        {/* Legal note section */}
        <div className="p-6 rounded-2xl bg-slate-900/15 border border-white/5 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-xs leading-relaxed text-slate-450 font-semibold">
            NonaCrypt utilizes localized sovereign failovers to support seamless continuity during regional cable disruptions. We actively guarantee 100% data residency retention and strict compliance validation during failovers.
          </p>
        </div>

      </div>
    </div>
  );
}
