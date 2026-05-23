import { 
  Shield, Lock, Server, FileCheck2, Database, Key, CheckCircle2, 
  Terminal, Copy, Check, ShieldCheck, Cpu, FileText, RefreshCw, 
  Settings, Layers, HelpCircle, Eye
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Generated Media Assets
import securityLockImg from '../assets/images/security_lock_1779544203586.png';

export default function Security() {
  const certifications = ["SOC 2 Type II", "ISO 27001", "HIPAA Compliant", "GDPR Ready", "BDS-2024 Sovereign"];

  // 1. SecOps Workspace State
  const [complianceStandard, setComplianceStandard] = useState<'soc2' | 'iso' | 'gdpr' | 'hipaa'>('soc2');
  const [hostingArch, setHostingArch] = useState<'vps' | 'vpc' | 'sovereign'>('vpc');
  const [encryptionStandard, setEncryptionStandard] = useState<'aes' | 'byok' | 'hsm'>('aes');
  const [threatShield, setThreatShield] = useState<'waf' | 'active-sentry' | 'airgap'>('active-sentry');

  // 2. Token Generator Workspace State
  const [targetScopes, setTargetScopes] = useState({
    predictive: true,
    nlp: false,
    vision: false
  });
  const [routingHub, setRoutingHub] = useState<'us' | 'eu' | 'ca' | 'bd' | 'au'>('eu');
  const [accessLevel, setAccessLevel] = useState<'read' | 'full'>('read');
  const [isTokenGenerating, setIsTokenGenerating] = useState(false);
  const [generatedTokens, setGeneratedTokens] = useState<{
    apiKey: string;
    jwt: string;
    clientId: string;
  } | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Helper calculation for SecOps Compliance Score & stats
  const calculateSecOpsMetrics = () => {
    let score = 88;
    let rto = '4 Hours';
    let sla = '99.90%';
    let securityLevel = 'Standard Secure';

    // Compliance factor
    if (complianceStandard === 'gdpr') score += 3;
    if (complianceStandard === 'soc2') score += 2;

    // Infrastructure Factor
    if (hostingArch === 'vpc') {
      score += 4;
      rto = '1 Hour';
      sla = '99.99%';
      securityLevel = 'Enterprise VPC Peer';
    } else if (hostingArch === 'sovereign') {
      score += 6;
      rto = '15 Min';
      sla = '99.999%';
      securityLevel = 'Military-Grade Sovereign Airgap';
    }

    // Encryption factor
    if (encryptionStandard === 'byok') score += 2;
    if (encryptionStandard === 'hsm') score += 4;

    // Threat shield factor
    if (threatShield === 'active-sentry') score += 2;
    if (threatShield === 'airgap') {
      score += 3;
      rto = '5 Min';
      sla = '99.9999%';
    }

    score = Math.min(100, score);

    return { score, rto, sla, securityLevel };
  };

  const { score, rto, sla, securityLevel } = calculateSecOpsMetrics();

  const handleGenerateCredentials = () => {
    setIsTokenGenerating(true);
    setTimeout(() => {
      const uniqueId = Math.floor(1000 + Math.random() * 9000);
      const scopesSelected = Object.keys(targetScopes)
        // @ts-ignore
        .filter(k => targetScopes[k])
        .map(k => `${accessLevel}:${k}:data`);
      
      const jwtPayload = {
        iss: "nonacrypt.ai",
        sub: `ent_tenant_usr_${uniqueId}`,
        aud: `gateway.${routingHub}.nonacrypt.ai`,
        scopes: scopesSelected.length > 0 ? scopesSelected : [`${accessLevel}:public:ping`],
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 31536000,
        compliance_enforce: complianceStandard.toUpperCase()
      };

      const mockJwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9." + btoa(JSON.stringify(jwtPayload)).replace(/=/g, '') + ".signature_field_encrypted_hsm";

      setGeneratedTokens({
        apiKey: `nc_${accessLevel}_${routingHub}_${btoa(Math.random().toString()).slice(0, 24).toLowerCase()}`,
        jwt: mockJwt,
        clientId: `client_tenant_id_${uniqueId}`
      });
      setIsTokenGenerating(false);
    }, 750);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-32 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-indigo-500/5 blur-[180px] rounded-full pointer-events-none z-0"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 border border-emerald-500/20 shadow-xl">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight pb-1 leading-tight">
                Corporate Trust, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 font-black">Security & Isolation</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                NonaCrypt builds highly isolated deep learning ecosystems. Configure your target compliance shield, simulate enterprise firewalls, and provision sandboxed API tokens instantly.
              </p>
            </div>

            {/* Right graphic column */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-[2rem] bg-[#050505] border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={securityLockImg} 
                  alt="NonaCrypt Cryptographic Shield" 
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/20 to-transparent z-15"></div>
                
                {/* Tech HUD markers */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-white/5 z-20 flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono tracking-widest text-emerald-400 uppercase font-black block">FIPS-140 COMPLIANT</span>
                    <span className="text-[11px] font-bold text-white block">Cluster Shield v3.1</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">ACTIVE</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-20">
        
        {/* Certification Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 animate-fade-in">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center px-4 py-2 rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-sm shadow-md">
              <FileCheck2 className="h-5 w-5 text-emerald-400 mr-2.5" />
              <span className="font-extrabold text-white tracking-wide text-xs uppercase font-mono">{cert}</span>
            </div>
          ))}
        </div>

        {/* Feature Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/5 border border-emerald-500/15 flex items-center justify-center mb-6">
              <Database className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Zero Model-Leaking Policies</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              We never train NonaCrypt models on your enterprise database records or token inputs. Your propriety metadata is cryptographically sequestered on a per-tenant session basis.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/5 border border-indigo-500/15 flex items-center justify-center mb-6">
              <Lock className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Enclaved In-Transit & At-Rest Cryptography</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Data frames utilize high-grade TLS 1.3 encryption alongside dedicated HSM (Hardware Security Modules) key wrappers, complete with options for active sovereign cloud hosting.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-500/5 border border-teal-500/15 flex items-center justify-center mb-6">
              <Server className="h-6 w-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Isolated VPC Peerings</h3>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Provision high-frequency machine learning inference clusters directly to your local AWS PrivateLink, Azure Hub-Spoke networks, or Google Cloud Dedicated Interconnects.
            </p>
          </div>
        </div>

        {/* INTERACTIVE COMPONENT 1: SecOps Compliance Infrastructure Simulation */}
        <section className="mb-24" id="corporate_secops_planner_section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest mb-3">
              Interactive Architect Tool
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">SecOps Compliance & Topology Simulator</h2>
            <p className="text-slate-400 font-medium">
              Tweak compliance guardrails, hardware isolation protocols, and threat perimeter shields to see how NonaCrypt adjusts security scoring and SLA uptime parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Inputs - Left */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-slate-800">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase block mb-3">
                    Target Compliance Framework
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'soc2', label: 'SOC 2 Type II' },
                      { id: 'iso', label: 'ISO 27001' },
                      { id: 'gdpr', label: 'GDPR Directive' },
                      { id: 'hipaa', label: 'HIPAA Health' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setComplianceStandard(f.id as any)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                          complianceStandard === f.id
                          ? 'bg-emerald-500/10 border-emerald-500/45 text-emerald-400 shadow-inner'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase block mb-3">
                    Inference Node Hosting Sandbox
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'vps', label: 'Isolated VPS' },
                      { id: 'vpc', label: 'VPC Tunnel' },
                      { id: 'sovereign', label: 'Airgap Cloud' }
                    ].map(a => (
                      <button
                        key={a.id}
                        onClick={() => setHostingArch(a.id as any)}
                        className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                          hostingArch === a.id
                          ? 'bg-blue-500/10 border-blue-500/45 text-blue-400'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase block mb-3">
                    Cryptographic Key Wrapping Key
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'aes', label: 'AES-256 GCM' },
                      { id: 'byok', label: 'Bring-Your-Own-Key' },
                      { id: 'hsm', label: 'FIPS HSM Cluster' }
                    ].map(e => (
                      <button
                        key={e.id}
                        onClick={() => setEncryptionStandard(e.id as any)}
                        className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                          encryptionStandard === e.id
                          ? 'bg-indigo-500/10 border-indigo-500/45 text-indigo-400'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase block mb-3">
                    Threat Block Perimeter
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'waf', label: 'Edge-WAF' },
                      { id: 'active-sentry', label: 'Active Shield' },
                      { id: 'airgap', label: 'Direct Airgap' }
                    ].map(p => (
                      <button
                        key={p.id}
                        onClick={() => setThreatShield(p.id as any)}
                        className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all cursor-pointer ${
                          threatShield === p.id
                          ? 'bg-teal-500/10 border-teal-500/45 text-teal-400'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-5 mt-6 text-xs text-slate-500 flex items-center gap-2">
                <Settings className="h-4 w-4 animate-spin shrink-0 text-slate-600" />
                <span>Simulating dynamic infrastructure parameters...</span>
              </div>
            </div>

            {/* Simulated Live Schematics Engine - Right */}
            <div className="lg:col-span-7 flex flex-col p-6 md:p-8 rounded-3xl bg-[#050505] border border-slate-800 relative overflow-hidden justify-between">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Header info */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block">Topology Schematic Report</span>
                    <h4 className="text-sm font-bold text-white mt-1">Virtual Security Compliance Enclave</h4>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold rounded-lg uppercase">
                    Status: Validated
                  </span>
                </div>

                {/* Score and Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Audit Score</span>
                    <span className="text-xl font-mono font-bold text-emerald-400">{score}%</span>
                  </div>
                  <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Uptime SLA</span>
                    <span className="text-xl font-mono font-bold text-white">{sla}</span>
                  </div>
                  <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">RTO Target</span>
                    <span className="text-xl font-mono font-bold text-indigo-300">{rto}</span>
                  </div>
                  <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-2xl">
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Key Mode</span>
                    <span className="text-xs font-bold text-white mt-1 block truncate">{encryptionStandard.toUpperCase()}</span>
                  </div>
                </div>

                {/* Simulated Network Topology Visualization Block */}
                <div className="bg-slate-950 rounded-2xl border border-slate-900/80 p-5 h-48 flex items-center justify-center relative overflow-hidden font-mono text-[9px]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                  
                  <div className="flex items-center gap-6 relative z-10 w-full justify-around pt-2">
                    {/* Source Endpoint node */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-400/40 flex items-center justify-center">
                        <Cpu className="h-4.5 w-4.5 text-indigo-400" />
                      </div>
                      <span className="text-white font-extrabold mt-1.5 font-sans">Consumer API</span>
                      <span className="text-slate-500 text-[8px]">Session Tunnel</span>
                    </div>

                    {/* Routing Bridge Line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500/20 via-emerald-500 to-teal-500/20 relative">
                      <span className="absolute left-[40%] -top-4 font-mono font-bold text-[8px] tracking-tight bg-slate-900 px-1 border border-slate-800/80 text-emerald-400 uppercase rounded">
                        {threatShield === 'airgap' ? 'AIRGAP-ENCRYPTED' : 'TLS-1.3'}
                      </span>
                    </div>

                    {/* Security Controller node */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-400/40 flex items-center justify-center relative">
                        <motion.div 
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="absolute inset-0 border border-teal-400/20 rounded-xl"
                        ></motion.div>
                        <Shield className="h-5 w-5 text-teal-400" />
                      </div>
                      <span className="text-white font-extrabold mt-1.5 font-sans">Isolation Gate</span>
                      <span className="text-emerald-400 font-bold font-mono text-[8px] uppercase">{securityLevel.split(' ')[0]}</span>
                    </div>

                    {/* Routing Bridge Line */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-teal-500/20 via-pink-500 to-pink-500/20 relative"></div>

                    {/* Isolated GPU Node */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-400/40 flex items-center justify-center">
                        <Database className="h-4.5 w-4.5 text-pink-400" />
                      </div>
                      <span className="text-white font-extrabold mt-1.5 font-sans">Model Node</span>
                      <span className="text-pink-500 text-[8px]">Isolated Tenant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Downloadable / Info summary */}
              <div className="mt-6 p-4 rounded-xl border border-slate-900 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between text-xs font-semibold">
                <div className="mb-3 md:mb-0">
                  <span className="text-slate-500 block text-[10px] font-mono">SLA Guarantee Status</span>
                  <span className="text-white">Active ISO certificate mapping configured for standard compliance.</span>
                </div>
                <button 
                  onClick={() => alert(`Generating PDF configuration profile containing: Compliance: ${complianceStandard.toUpperCase()}, Hosting: ${hostingArch.toUpperCase()}, Isolation target: ${securityLevel}. Successful.`)}
                  className="px-4 py-2 bg-white text-[#050505] hover:bg-slate-200 transition-all text-xs font-extrabold rounded-lg font-sans shadow-lg cursor-pointer shrink-0"
                >
                  Generate SecOps Manifest
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE COMPONENT 2: Dynamic API Credentials Configurator / Token Manager */}
        <section id="corporate_api_developer_sandbox">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-500/10 border border-teal-500/20 text-[10px] font-mono font-bold text-teal-400 uppercase tracking-widest mb-3">
              Developer Ecosystem
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Enterprise API & Scoped Token Provisioner</h2>
            <p className="text-slate-400 font-medium">
              Simulate secure multi-region corporate tokens for testing. Grant minimal scopes for model query streams and generate direct SDK initialization snippets instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Selection Columns */}
            <div className="lg:col-span-5 p-6 md:p-8 rounded-3xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* 1. Target Scopes */}
                <div>
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Authorized API Target Lines
                  </span>
                  <div className="space-y-2">
                    {[
                      { key: 'predictive', title: 'Predictive analytics & Trend Forecaster' },
                      { key: 'nlp', title: 'NLP document parser & entity classifier' },
                      { key: 'vision', title: 'Computer Vision surveillance stream processing' }
                    ].map(scope => (
                      <label 
                        key={scope.key} 
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:bg-slate-900/30 cursor-pointer transition-all select-none"
                      >
                        <input 
                          type="checkbox"
                          // @ts-ignore
                          checked={targetScopes[scope.key]}
                          onChange={() => setTargetScopes(prev => ({
                            ...prev,
                            // @ts-ignore
                            [scope.key]: !prev[scope.key]
                          }))}
                          className="rounded border-slate-700 text-teal-500 focus:ring-teal-500 h-4.5 w-4.5 bg-slate-950 cursor-pointer"
                        />
                        <span className="text-xs font-bold text-slate-300">{scope.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Routing Hub Zone */}
                <div>
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Target Geolocation Gateway Routing
                  </span>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { id: 'us', label: 'US-East' },
                      { id: 'eu', label: 'Euro' },
                      { id: 'ca', label: 'Canada' },
                      { id: 'au', label: 'Sydney' },
                      { id: 'bd', label: 'Dhaka' }
                    ].map(zone => (
                      <button
                        key={zone.id}
                        onClick={() => setRoutingHub(zone.id as any)}
                        className={`py-2 px-1 text-[10px] font-mono font-extrabold rounded-lg border text-center transition-all cursor-pointer ${
                          routingHub === zone.id
                          ? 'bg-indigo-600/10 border-indigo-500/40 text-indigo-400'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {zone.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Access Permission role */}
                <div>
                  <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Role Base Level Permissions
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setAccessLevel('read')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        accessLevel === 'read'
                        ? 'bg-teal-500/10 border-teal-500/45 text-teal-400'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Read Only / Query (Secure)
                    </button>
                    <button
                      onClick={() => setAccessLevel('full')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        accessLevel === 'full'
                        ? 'bg-amber-500/10 border-amber-500/45 text-amber-400'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      Full Write / Execute
                    </button>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <button
                  onClick={handleGenerateCredentials}
                  disabled={isTokenGenerating}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-indigo-500 text-white font-extrabold text-sm hover:opacity-90 active:opacity-100 rounded-xl transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  {isTokenGenerating ? (
                    <>
                      <RefreshCw className="h-4.5 w-4.5 animate-spin text-white" />
                      Securing HSM Tunnel...
                    </>
                  ) : (
                    <>
                      <Key className="h-4.5 w-4.5" />
                      Provision Sandboxed API Access
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Sandbox Credentials output terminal - Right */}
            <div className="lg:col-span-7 flex flex-col p-6 md:p-8 rounded-3xl bg-[#050505] border border-slate-800 relative justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent blur-3xl pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {generatedTokens ? (
                  <motion.div 
                    key="token_output_screen"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 relative z-10 w-full"
                  >
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4.5 w-4.5 text-teal-400" />
                        <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">Live Sandbox Environment</span>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(generatedTokens.apiKey)}
                        className="py-1 px-2.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 flex items-center gap-1.5 hover:text-white transition-all cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-400" />
                            Copied Key
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy Core Key
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Sub id */}
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 block uppercase mb-1">Consumer Authorization ID</span>
                        <div className="p-2.5 font-mono text-xs rounded-xl bg-slate-950 border border-slate-900 text-slate-300 select-all">
                          {generatedTokens.clientId}
                        </div>
                      </div>

                      {/* API Key */}
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 block uppercase mb-1">Sovereign API Secret (Static)</span>
                        <div className="p-2.5 font-mono text-xs rounded-xl bg-slate-950 border border-slate-900 text-emerald-400 select-all font-bold">
                          {generatedTokens.apiKey}
                        </div>
                      </div>

                      {/* Scoped HSM JWT */}
                      <div>
                        <span className="text-[9px] font-mono text-slate-500 block uppercase mb-1">Decoded Scoped JWT Signature Envelope</span>
                        <div className="p-3 font-mono text-[10px] leading-relaxed rounded-xl bg-slate-950 border border-slate-900 text-slate-400 select-all max-h-24 overflow-y-auto break-all">
                          {generatedTokens.jwt}
                        </div>
                      </div>
                    </div>

                    {/* Node code snippet displaying direct import */}
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 block uppercase mb-1.5">Direct Service Call Snippet</span>
                      <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 font-mono text-[10px] text-indigo-300 leading-relaxed overflow-x-auto selection:bg-indigo-500/20">
{`import { NonaEngine } from '@nonacrypt/sdk';

const nona = new NonaEngine({
  apiKey: "${generatedTokens.apiKey}",
  region: "${routingHub.toUpperCase()}",
  bypassVpcSla: true
});

// Native corporate secure model inference
const prediction = await nona.predictive.forecastVectors({
  tenantId: "${generatedTokens.clientId}",
  enforceCompliance: "${complianceStandard.toUpperCase()}"
});`}
                      </pre>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 pt-2 border-t border-slate-900 flex items-center justify-between">
                      <span>Token Authority Version 3.48</span>
                      <button 
                        onClick={() => setGeneratedTokens(null)}
                        className="text-indigo-400 hover:underline cursor-pointer"
                      >
                        Reset Credentials Config
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div 
                    key="token_blank_screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Terminal className="h-6 w-6 text-slate-600 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">No API Credentials Configured</h4>
                      <p className="text-xs text-slate-500 mt-2 max-w-sm font-sans mx-auto">
                        Please check authorized API targets, routing hub zones and click the button to generate secure, region-specific tenant keys.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
