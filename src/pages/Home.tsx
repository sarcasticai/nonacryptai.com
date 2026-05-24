import { useState, useEffect } from 'react';
import { 
  ArrowRight, Shield, Zap, Database, DollarSign, Briefcase, Network,
  ArrowUpRight, LineChart, MessageSquareText, ScanEye, Cpu, Code2, 
  ShieldCheck, Activity, ChevronDown, ChevronUp, HelpCircle, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { getTranslation } from '../lib/translations';

interface RegionHubDetail {
  id: string;
  name: string;
  flag: string;
  headline: string;
  description: string;
  uptime: string;
  latencyAvg: string;
  activeNodes: number;
  compliance: string[];
  datacenterSpeed: string;
  anchorLocation: string;
  accentClass: string;
  bgGlowClass: string;
  allocationPercent: number;
}

const REGION_INFO_MAP: Record<string, RegionHubDetail> = {
  us: {
    id: "us",
    name: "United States Hub",
    flag: "🇺🇸",
    headline: "Federal-Grade Airgapped Sovereignty",
    description: "Highly redundant computing clusters engineered for low-latency financial systems and ITAR defense compliance guidelines across North America.",
    uptime: "99.9997%",
    latencyAvg: "4.8ms",
    activeNodes: 1024,
    compliance: ["SOC 2 Type II", "HIPAA", "ITAR Category XV"],
    datacenterSpeed: "22.4 PetaFLOPs/sec",
    anchorLocation: "Ashburn, VA",
    accentClass: "from-blue-500 to-indigo-600 bg-blue-500/10 border-blue-500/30 text-blue-400",
    bgGlowClass: "from-blue-600/10 via-indigo-600/5 to-transparent",
    allocationPercent: 84
  },
  bd: {
    id: "bd",
    name: "Bangladesh Hub",
    flag: "🇧🇩",
    headline: "Highly Optimized Regional Edge Hub",
    description: "Serving high-speed local inference endpoints optimized for Dhaka tech corridors with local English/Bangla-ready sovereign enclaves.",
    uptime: "99.9920%",
    latencyAvg: "18.2ms",
    activeNodes: 128,
    compliance: ["BDS-2024 Sovereignty Guidance", "ISO 27001 Keyed", "GDPR Guarded"],
    datacenterSpeed: "2.8 PetaFLOPs/sec",
    anchorLocation: "Dhaka (Tejgaon Core)",
    accentClass: "from-emerald-500 to-teal-600 bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    bgGlowClass: "from-emerald-600/10 via-teal-600/5 to-transparent",
    allocationPercent: 43
  },
  ca: {
    id: "ca",
    name: "Canada Hub",
    flag: "🇨🇦",
    headline: "PIPEDA-Compliant Public Infrastructure",
    description: "Hydro-powered computing facilities protecting Canadian databases and public records safely within high-integrity local enclaves.",
    uptime: "99.9989%",
    latencyAvg: "11.6ms",
    activeNodes: 384,
    compliance: ["PIPEDA Compliant", "SOC 2 Type II", "Sovereign RCIP"],
    datacenterSpeed: "8.4 PetaFLOPs/sec",
    anchorLocation: "Montreal, QC",
    accentClass: "from-red-500 to-rose-600 bg-red-500/10 border-red-500/30 text-red-400",
    bgGlowClass: "from-red-600/10 via-rose-600/5 to-transparent",
    allocationPercent: 61
  },
  au: {
    id: "au",
    name: "Australia Hub",
    flag: "🇦🇺",
    headline: "IRAP-Aligned Defence Cloud Clusters",
    description: "Sovereign computational infrastructure crafted to satisfy rigorous on-shore data policies and local privacy framework criteria.",
    uptime: "99.9991%",
    latencyAvg: "14.5ms",
    activeNodes: 256,
    compliance: ["IRAP Aligned", "APP Compliant", "ISO 27018 Data Protect"],
    datacenterSpeed: "5.6 PetaFLOPs/sec",
    anchorLocation: "Sydney, NSW",
    accentClass: "from-amber-500 to-orange-600 bg-amber-500/10 border-amber-500/30 text-amber-400",
    bgGlowClass: "from-amber-600/10 via-orange-600/5 to-transparent",
    allocationPercent: 52
  },
  eu: {
    id: "eu",
    name: "European Union Hub",
    flag: "🇪🇺",
    headline: "GDPR & EU AI Act Absolute Boundary",
    description: "Fully certified sovereign nodes ensuring model weights, pipeline parameters, and transactional telemetry remain strictly inside European borders.",
    uptime: "99.9998%",
    latencyAvg: "7.1ms",
    activeNodes: 896,
    compliance: ["Strict GDPR Resident", "EU AI Act Ready", "BSI C5 Attested"],
    datacenterSpeed: "19.8 PetaFLOPs/sec",
    anchorLocation: "Frankfurt, DE",
    accentClass: "from-indigo-500 to-violet-600 bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    bgGlowClass: "from-indigo-600/10 via-violet-600/5 to-transparent",
    allocationPercent: 78
  }
};

export default function Home() {
  // Region synchronization
  const [regionId, setRegionId] = useState(() => {
    try {
      return localStorage.getItem('nonacrypt-selected-region') || 'us';
    } catch {
      return 'us';
    }
  });

  useEffect(() => {
    const handleRegion = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail && customEvent.detail.id) {
        setRegionId(customEvent.detail.id);
      }
    };
    window.addEventListener('nonacrypt-region-changed', handleRegion);
    return () => window.removeEventListener('nonacrypt-region-changed', handleRegion);
  }, []);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Real-time server performance ticker simulation
  const [operationalPing, setOperationalPing] = useState<number>(8.4);
  const [throughputTokens, setThroughputTokens] = useState<number>(142050);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setOperationalPing(prev => +Math.max(6.1, Math.min(11.8, prev + (Math.random() - 0.5) * 1.5)).toFixed(2));
      setThroughputTokens(prev => Math.floor(prev + (Math.random() - 0.5) * 450));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeHub = REGION_INFO_MAP[regionId] || REGION_INFO_MAP.us;
  const [allocationLoad, setAllocationLoad] = useState(activeHub.allocationPercent);
  
  useEffect(() => {
    setAllocationLoad(activeHub.allocationPercent);
  }, [regionId, activeHub.allocationPercent]);

  const handleHubSwitch = (id: string) => {
    setRegionId(id);
    try {
      localStorage.setItem('nonacrypt-selected-region', id);
    } catch (err) {
      console.error(err);
    }
    const event = new CustomEvent('nonacrypt-region-changed', { detail: { id } });
    window.dispatchEvent(event);
  };

  return (
    <div className="flex flex-col bg-[#0A0A0A] w-full min-h-screen relative font-sans overflow-x-hidden animate-fade-in" id="home_root_page">
      {/* Background radial and grid masks */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-700/5 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] bg-blue-700/5 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative overflow-hidden w-full pt-32 pb-24 border-b border-slate-900/80 z-10" id="hero_showcase_section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293704_1px,transparent_1px),linear-gradient(to_bottom,#1f293704_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="flex flex-col items-center text-center animate-fade-in"
          >
            {/* Version Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: -15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } }
              }}
              className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-blue-400 shadow-inner mb-8 transition-colors hover:border-blue-500/35 hover:bg-blue-500/10 cursor-pointer group" 
              id="copilot_gen_link"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-wider uppercase opacity-80">Research Release v3.4</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <span className="flex items-center gap-1 font-medium select-none notranslate" translate="no">
                {getTranslation(regionId, 'hero_version_badge')}
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform animate-pulse" />
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="max-w-5xl tracking-tight text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05]" 
              id="hero_main_headline"
            >
              {getTranslation(regionId, 'hero_headline_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                {getTranslation(regionId, 'hero_headline_accent')}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="mx-auto max-w-3xl text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-normal" 
              id="hero_description_lead"
            >
              {getTranslation(regionId, 'hero_description')}
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg mx-auto mb-16 px-4" 
              id="hero_ctas"
            >
              <Link
                to="/products"
                id="hero_btn_explore"
                className="inline-flex w-full sm:w-auto h-14 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-[#0A0A0A] shadow-xl hover:bg-slate-200 transition-all hover:-translate-y-0.5"
              >
                {getTranslation(regionId, 'cta_deploy')}
                <Sparkles className="ml-2 h-4.5 w-4.5 text-indigo-600 shrink-0" />
              </Link>
              <Link
                to="/contact"
                id="hero_btn_demo"
                className="inline-flex w-full sm:w-auto h-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm px-8 text-base font-bold text-white hover:bg-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                {getTranslation(regionId, 'cta_sla')}
              </Link>
            </motion.div>

            {/* Live Operational Metrics Ticker */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm text-left" 
              id="live_telemetry_banner"
            >
              <div className="p-3 border-r border-slate-900">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-1">Model Inference Latency</div>
                <div className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-1.5 notranslate" translate="no">
                  <Activity className="h-4 w-4 shrink-0 text-emerald-500 animate-pulse" />
                  {operationalPing}ms <span className="text-[10px] text-slate-500 font-sans font-normal">(p99)</span>
                </div>
              </div>
              <div className="p-3 md:border-r border-slate-900">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-1">Global Core Throughput</div>
                <div className="text-xl font-bold font-mono text-white notranslate" translate="no">
                  {throughputTokens.toLocaleString()} <span className="text-[10px] text-slate-400 font-sans">t/s</span>
                </div>
              </div>
              <div className="p-3 border-r border-[#151515]">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-1">GPU Partition SLA</div>
                <div className="text-xl font-bold font-mono text-blue-400 notranslate" translate="no">99.998%</div>
              </div>
              <div className="p-3">
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-1">Compliance Standard</div>
                <div className="text-xl font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#a5d6ff] shrink-0" /> ISO/SOC2 Encrypted
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US / WHY WE ARE SPECIAL SECTION */}
      <section className="py-24 bg-[#080809] border-b border-slate-900/80 relative z-10" id="why_we_are_special_section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293704_1px,transparent_1px),linear-gradient(to_bottom,#1f293704_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-40"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-mono font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 inline-block">
              Engineered Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 leading-tight">
              Why Forward-Thinking Enterprises Partner with NonaCrypt
            </h2>
            <p className="text-slate-400 mt-4 text-base font-semibold leading-relaxed">
              While general-purpose AI platforms compromise on data privacy and queue latency overhead, NonaCrypt operates physical hyper-isolated enclaves engineered for severe operational and compliance thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "sovereign-isolation",
                title: "Physical Zero-Trust Airgapping",
                desc: "We process enterprise parameters, prompt scopes, and query registers strictly within volatile, single-tenant physical memory blocks. Data undergoes absolute local zero-retention destruction instantly upon inference delivery.",
                icon: <Shield className="h-6 w-6 text-emerald-400" />,
                metric: "100% Ephemeral"
              },
              {
                id: "bare-metal-speed",
                title: "SXM5 Bare-Metal Performance",
                desc: "Bypass typical multi-tenant hyperscaler virtualization and scheduling bottlenecks. Your requests run on private NVIDIA HGX B200 / H100 GPU pipelines interconnected over 900 GB/s high-fidelity NVLink bands.",
                icon: <Zap className="h-6 w-6 text-blue-400" />,
                metric: "Sub-12ms Inference"
              },
              {
                id: "weights-ownership",
                title: "Complete Weights Sovereignty",
                desc: "Under our dedicated agreements, you receive unrestricted cryptographic licenses to local fine-tuned weight sets. Deploy models entirely offline inside your secure physical HSM racks with zero cloud network calls.",
                icon: <Database className="h-6 w-6 text-indigo-400" />,
                metric: "True Offline Execution"
              },
              {
                id: "price-predictability",
                title: "Flat-Rate Price Predictability",
                desc: "Insulate your budget from volatile input tokens, seasonal volume spikes, or hidden API surcharge adjustments. Enjoy dedicated hardware cluster allocations under transparent, unthrottled annual flat rates.",
                icon: <DollarSign className="h-6 w-6 text-emerald-400" />,
                metric: "Zero Dynamic Token Fees"
              },
              {
                id: "strict-regulatory",
                title: "High-Tier Regulatory Alignment",
                desc: "Specifically calibrated to meet strict ITAR Category XV technology restrictions, NERC CIP power utility cybersecurity criteria, HIPAA Omnibus HIPAA-compliance, and sovereign EU NIS-2 directives.",
                icon: <Briefcase className="h-6 w-6 text-yellow-400" />,
                metric: "ITAR / NERC CIP Compliant"
              },
              {
                id: "agentic-autonomy",
                title: "Autonomous Multi-Agent Flows",
                desc: "Synchronize high-frequency predictive time-series loops and intricate legal classification pipelines smoothly across departments. Deliver real-time transaction monitoring with total cryptographic safety.",
                icon: <Network className="h-6 w-6 text-purple-400" />,
                metric: "Dynamic Ledger Sync"
              }
            ].map((pillar, idx) => (
              <div 
                key={pillar.id}
                className="group relative bg-[#0B0B0C]/95 border border-slate-900/60 hover:bg-[#0F0F12] hover:border-slate-800 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/5"
                id={`speciality_card_${pillar.id}`}
              >
                {/* Visual light accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/[0.012] to-transparent blur-xl group-hover:from-indigo-500/[0.04] rounded-full pointer-events-none transition-all"></div>
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="text-[9px] font-mono font-black text-[#a5d6ff] bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed font-semibold transition-colors">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between text-[9px] font-mono text-slate-600 group-hover:text-indigo-400 transition-colors">
                  <span>UNFAIR_ADV_0{idx + 1}</span>
                  <span>SECURE_ENCLAVE_v3</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured AI Services Nano-Grid Section */}
      <section className="py-24 bg-[#0A0A0A] border-b border-slate-900/80 relative z-10" id="services_nano_grid_section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-bold mb-3">System Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Our Core Machine Intelligence Suite
              </h2>
              <p className="text-slate-400 mt-2 leading-relaxed max-w-2xl text-sm font-semibold">
                High-leverage analytical modules designed for seamless local orchestration, zero latency spikes, and strict data isolation guarantees.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-bold font-mono text-blue-400 group border border-blue-500/20 hover:border-blue-500/40 bg-blue-500/5 hover:bg-blue-500/10 rounded-xl px-5 py-3.5 transition-all shrink-0 hover:-translate-y-0.5"
            >
              Analyze Complete Specs
              <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" id="services_nano_cards_container">
            {[
              {
                id: "predictive-analytics",
                title: "Predictive Analytics Engine",
                desc: "Forecast volatile trends and security signals using advanced GNN time-series ML pipelines.",
                icon: <LineChart className="h-5 w-5 text-indigo-400" />,
                badge: "V3 Active"
              },
              {
                id: "nlp-automation",
                title: "NLP Workflow Automation",
                desc: "Classify contracts, parse legal files, and route queues locally with zero data caching.",
                icon: <MessageSquareText className="h-5 w-5 text-emerald-400" />,
                badge: "OCR Enabled"
              },
              {
                id: "computer-vision",
                title: "Spatial & Vision APIs",
                desc: "Surveil assembly queues, track inventory physical coordinates, and verify authorizations at 120 FPS.",
                icon: <ScanEye className="h-5 w-5 text-blue-400" />,
                badge: "Edge Ready"
              },
              {
                id: "business-automation",
                title: "Autonomous Decision Loops",
                desc: "Coordinate compound, multi-agent workflows safely across isolated departmental databases.",
                icon: <Network className="h-5 w-5 text-purple-400" />,
                badge: "Adaptive Flow"
              },
              {
                id: "industry-automation",
                title: "Decentralized Edge Nodes",
                desc: "Deploy fast prediction endpoints directly onto rugged telemetry hardware and grid relays.",
                icon: <Cpu className="h-5 w-5 text-indigo-400" />,
                badge: "Edge Local"
              },
              {
                id: "data-management",
                title: "Clean Data Sanitization",
                desc: "Securely screen, anonymize, noise-mask, and partition sensitive transactional data structures.",
                icon: <Database className="h-5 w-5 text-teal-400" />,
                badge: "ETL Isolation"
              },
              {
                id: "custom-ai-development",
                title: "Custom Model Architectures",
                desc: "Calibrate proprietary neural frameworks, specific weights, and PEFT fine-tuning modules.",
                icon: <Code2 className="h-5 w-5 text-pink-400" />,
                badge: "Sovereign Fine-Tune"
              },
              {
                id: "business-ai-audit",
                title: "Real-time Compliance Audits",
                desc: "Continually assess drift, parameter biases, and weights access security via automated ledgers.",
                icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
                badge: "Continuous Audit"
              }
            ].map((srv, idx) => (
              <div
                key={srv.id}
                className="group relative bg-[#0C0C0D]/90 border border-slate-900/60 hover:bg-[#101014] hover:border-slate-800 w-full p-6 rounded-2xl flex flex-col justify-between min-h-[170px] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <span className="text-[8px] font-mono font-black tracking-widest text-[#a5d6ff] uppercase px-2 py-0.5 rounded bg-blue-500/5 border border-blue-500/10 transition-colors">
                      {srv.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight mt-5">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-semibold leading-normal mt-1.5 transition-colors group-hover:text-slate-400">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900/40 mt-4 flex items-center justify-between text-[10px] font-bold font-mono">
                  <span className="text-slate-600 group-hover:text-indigo-400 transition-colors">CAP_0{idx+1}</span>
                  <Link 
                    to={`/services/${srv.id}`}
                    className="inline-flex items-center text-slate-400 group-hover:text-white transition-colors"
                  >
                    SPECS <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Theme Client Logos Corporate Bar */}
      <section className="py-16 bg-[#050506] border-b border-slate-900 relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mb-8">Integrated Ecosystem Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale hover:opacity-75 transition-opacity duration-300">
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-white"></div><span className="text-xs font-extrabold font-mono text-white tracking-widest">ACME_NODE</span></div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 rounded bg-white rotate-45"></div><span className="text-xs font-extrabold font-mono text-white tracking-widest">GLOBAL_NET</span></div>
            <div className="flex items-center gap-2"><div className="w-5 h-2.5 border-2 border-white rounded-lg"></div><span className="text-xs font-extrabold font-mono text-white tracking-widest">SYNTH_AI</span></div>
            <div className="flex items-center gap-2"><div className="w-5 h-2.5 rounded-full bg-white"></div><span className="text-xs font-extrabold font-mono text-white tracking-widest">VANGUARD</span></div>
            <div className="flex items-center gap-2"><div className="w-5 h-5 border border-dashed border-white rounded-full"></div><span className="text-xs font-extrabold font-mono text-white tracking-widest">SaaS_ENCLAVE</span></div>
          </div>
        </div>
      </section>

      {/* Highly Designed Adaptive Multi-Hub Status & Telemetry Banner */}
      <section className="py-24 bg-[#080809] border-b border-slate-900 relative z-10 overflow-hidden" id="homepage_adaptive_hub_banner_section">
        {/* Glow Effects */}
        <div className={`absolute -bottom-24 -left-20 w-80 h-80 bg-gradient-to-tr ${activeHub.id === 'us' ? 'from-blue-600/10' : activeHub.id === 'bd' ? 'from-emerald-600/10' : activeHub.id === 'ca' ? 'from-red-600/10' : activeHub.id === 'au' ? 'from-amber-600/10' : 'from-indigo-600/10'} blur-[100px] rounded-full pointer-events-none`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293702_1px,transparent_1px),linear-gradient(to_bottom,#1f293702_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-20"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left max-w-4xl mb-12">
            <span className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-[0.25em] bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/15 inline-block">
              HYBRID ENTERPRISE INTEL CONNECTIVITY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 leading-tight">
              Adaptive Sovereign Computing Hubs
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base font-semibold max-w-2xl">
              NonaCrypt's system adapts its computational pathways depending on your jurisdiction. Select a sovereign node below to inspect real-time localized compliance matrices, datacenter capacity, and latency baselines.
            </p>
          </div>

          {/* Interactive Core Banner Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="adaptive_status_panel_inner">
            
            {/* LEFT SIDE: Dynamic Node Insights */}
            <div className="lg:col-span-7 bg-slate-950/60 border border-slate-900/90 rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              
              {/* Dynamic glow corner */}
              <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${activeHub.id === 'us' ? 'from-blue-600/5' : activeHub.id === 'bd' ? 'from-emerald-600/5' : activeHub.id === 'ca' ? 'from-red-600/5' : activeHub.id === 'au' ? 'from-amber-600/5' : 'from-indigo-600/5'} to-transparent blur-2xl pointer-events-none rounded-full`}></div>

              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <span className="text-3xl filter drop-shadow select-none">{activeHub.flag}</span>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block font-bold">SOVEREIGN NETWORK GATEWAY</span>
                    <h3 className="text-lg font-black text-white flex items-center gap-2 font-mono">
                      {activeHub.name}
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 tracking-tight leading-snug">
                    {activeHub.headline}
                  </h4>
                  <p className="text-sm text-slate-400 font-semibold leading-relaxed">
                    {activeHub.description}
                  </p>
                </div>

                {/* Localized Grid Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-slate-900/60 bg-slate-950/40 mb-8">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#a5d6ff]/60 uppercase block font-black">Node Connection</span>
                    <span className="text-sm font-bold font-mono text-white flex items-center gap-1.5 mt-1">
                      <Activity className="h-3.5 w-3.5 text-blue-400 animate-pulse shrink-0" />
                      {activeHub.latencyAvg} avg
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#a5d6ff]/60 uppercase block font-black">Cluster Hardware</span>
                    <span className="text-sm font-bold font-mono text-white flex items-center gap-1.5 mt-1">
                      <Cpu className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      {activeHub.activeNodes} Units
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#a5d6ff]/60 uppercase block font-black">Uptime SLA</span>
                    <span className="text-sm font-bold font-mono text-white flex items-center gap-1.5 mt-1">
                      <Shield className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      {activeHub.uptime}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-3 pt-3 border-t border-slate-900/60 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-black">Total Computational Capacity</span>
                    <span className="text-xs font-mono font-bold text-white uppercase bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      ⚡ {activeHub.datacenterSpeed}
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance Badges with Shields */}
              <div>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-black mb-3">ACTIVE SOVEREIGN COMPLIANCE SUITE</span>
                <div className="flex flex-wrap gap-2.5">
                  {activeHub.compliance.map((cert) => (
                    <div 
                      key={cert} 
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900/80 border border-slate-800/80 px-3.5 py-2 text-xs font-bold text-slate-300 font-mono shadow-sm hover:border-indigo-500/20 transition-all cursor-default select-none animate-fade-in"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Interactive Controller Node Allocator */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0e0e11] to-[#0a0a0c] border border-slate-900/90 rounded-3xl p-8 lg:p-10 flex flex-col justify-between backdrop-blur-md relative overflow-hidden">
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase block font-black">ACTIVE ROUTING PATHWAY</span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    Toggle Sovereign Hubs
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1">
                    Simulate real-time network latency, legal jurisdiction boundaries, and power allocations instantly.
                  </p>
                </div>

                {/* Hub Buttons Stack with Hover Effects */}
                <div className="space-y-3 mb-8" id="adaptive_toggle_stack">
                  {Object.values(REGION_INFO_MAP).map((hub) => {
                    const isActive = hub.id === activeHub.id;
                    return (
                      <button
                        key={hub.id}
                        onClick={() => handleHubSwitch(hub.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                          isActive 
                            ? 'bg-slate-900/80 border-indigo-500/40 shadow-lg shadow-indigo-950/20 text-white' 
                            : 'bg-slate-950/20 border-slate-900 hover:bg-slate-950/40 hover:border-slate-800/80 text-slate-400'
                        }`}
                        id={`switch_hub_btn_${hub.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl filter drop-shadow shrink-0 select-none">{hub.flag}</span>
                          <div>
                            <span className="text-xs font-bold text-white block">{hub.name}</span>
                            <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold mt-0.5">{hub.anchorLocation}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                          <span className="text-slate-500">PING:</span>
                          <span className={isActive ? "text-emerald-400 animate-pulse" : "text-slate-400"}>
                            {hub.latencyAvg}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Load Capacity Bar Visualization */}
                <div className="p-5 rounded-2xl border border-slate-900 bg-slate-950/30">
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-slate-500">COGNITIVE COMPUTE ALLOCATION</span>
                    <span className="text-[#a5d6ff]">{allocationLoad}% CAPACITY</span>
                  </div>
                  {/* Outer Bar */}
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    {/* Inner Fluid Bar */}
                    <motion.div 
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${allocationLoad}%` }}
                      transition={{ type: "spring", stiffness: 60, damping: 12 }}
                    />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-600 block mt-2 text-right">
                    PROVISIONED BY REAL-TIME ISO/IEC 42001 SCHEDULERS
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-900/60">
                <Link
                  to="/contact"
                  id="dynamic_enclave_alliance_cta"
                  className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all text-sm group"
                >
                  Acquire Local SLA and Hardware Locks
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Corporate Accordion Section */}
      <section className="py-24 bg-[#0A0A0A] relative z-10 overflow-hidden" id="homepage_faq_accordion_section">
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-indigo-505/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block font-bold mb-3 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/18 inline-block">Common Inquiries</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 leading-relaxed font-semibold text-sm sm:text-base">
              Learn about our enterprise SLA commitments, offline integration capabilities, and strict data privacy enclaves.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does NonaCrypt guarantee 100% data residency during failovers?",
                a: "NonaCrypt operates redundant, independent node hardware setups in each certified regional zone. If a primary gateway experiences a regional network temporary fault, requests are dynamically channeled strictly to an adjacent airgapped server within the same sovereign compliance zone. No enterprise payload data is ever routed outside your designated jurisdiction."
              },
              {
                q: "Can we deploy custom weight configurations and run models offline?",
                a: "Absolutely. Under our Sovereign Custom enclave plan, we support exporting compiled parameters, fine-tuned weights, and custom tokenizers directly onto your hardware vaults. This enables you to run NonaCrypt models securely within airgapped security grids entirely offline, without any public internet dependencies."
              },
              {
                q: "How does flat-rate corporate billing avoid token usage traps?",
                a: "We allocate dedicated physical GPU cluster nodes to your enterprise pipeline under fixed annual master services agreements (MSAs). Because you are renting physical computing enclaves rather than paying per cloud API request, you can run billions of monthly inferences without experiencing scaling cost spikes, penalty bounds, or token counts."
              },
              {
                q: "Is NonaCrypt compatible with our legacy databases and data warehouses?",
                a: "Yes. We support native database connector channels (including AWS S3, Snowflake, and Postgres) that secure data feeds dynamically using TLS/VPN tunnels. We bypass complex resource-heavy ETL setups by executing federated vector embedding calculations directly inside your secure database warehouse environment."
              },
              {
                q: "What are your incident support speed guarantees (RTO/RPO)?",
                a: "Contracted Scale Cluster Pro and Sovereign Custom clients are accompanied by a dedicated on-call Technical Account Officer. We guarantee emergency response times below 15 minutes, with automated failover grids targeting a Recovery Time Objective (RTO) below 15 minutes and Recovery Point Objective (RPO) near-zero."
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-slate-900 bg-slate-950/40 hover:bg-slate-950/70 transition-all overflow-hidden"
                  id={`faq_accordion_item_${idx}`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left text-white font-bold text-base cursor-pointer focus-visible:outline-none focus-visible:bg-slate-900/40"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                      {faq.q}
                    </span>
                    <span className="ml-4 shrink-0 p-1 rounded bg-[#010101] border border-slate-900 text-slate-400">
                      {isOpen ? <ChevronUp className="h-4 w-4 text-indigo-400" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-400 text-sm leading-relaxed border-t border-slate-950 bg-slate-950/20 font-semibold text-left">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Final Invitation Section */}
      <section className="py-24 bg-white text-center w-full relative z-10 overflow-hidden" id="homepage_cta_contact_gate">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/10 via-white to-white pointer-events-none"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 pb-2">
            Ready to reshape your industry?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 font-normal max-w-2xl mx-auto">
            Get absolute secure infrastructure. Integrate state-of-the-art predictive, NLP, and computer vision systems directly into your platforms.
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              id="cta_final_get_started_btn"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-slate-900 px-10 text-base font-bold text-white shadow-xl hover:-translate-y-0.5 transition-transform hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              Start your journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
