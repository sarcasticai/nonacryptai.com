import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function Status() {
  const systems = [
    { name: "NonaCrypt API Gateway", status: "operational", uptime: "99.99%" },
    { name: "Predictive Analytics Engine", status: "operational", uptime: "99.99%" },
    { name: "Vision Processing Nodes", status: "operational", uptime: "99.95%" },
    { name: "Auth & Identity", status: "operational", uptime: "100.00%" },
    { name: "Partner Sandbox Portal", status: "operational", uptime: "99.90%" }
  ];

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative">
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">System Status</h1>
          
          <div className="p-6 mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mr-6 shrink-0 relative">
               <div className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-20"></div>
               <CheckCircle2 className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400">All Systems Operational</h2>
              <p className="text-emerald-500/70 font-medium mt-1">Last updated: Just now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-20">
        <h3 className="text-xl font-bold text-white mb-6">Current Services</h3>
        <div className="space-y-4">
          {systems.map((sys, i) => (
            <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <span className="text-lg font-bold text-white">{sys.name}</span>
              <div className="flex items-center gap-6">
                <span className="text-slate-500 font-mono text-sm">{sys.uptime} uptime</span>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Operational</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-slate-800">
           <h3 className="text-xl font-bold text-white mb-6">Past Incidents</h3>
           <div className="p-6 rounded-2xl border border-slate-800 border-l-4 border-l-slate-500 bg-slate-900/30">
              <div className="flex items-center text-slate-400 font-bold mb-2 text-sm">
                <Clock className="h-4 w-4 mr-2" /> May 15, 2026
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Elevated Latency on Europe-West1 Node</h4>
              <p className="text-slate-400">The issue has been resolved. All API requests are processing normally. Systems were experiencing an average of ~800ms delay during a core routing update.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
