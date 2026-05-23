import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Server, HelpCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen flex flex-col items-center justify-center text-slate-350 relative overflow-hidden px-4 md:px-8 py-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-xl w-full text-center relative z-10 space-y-8">
        {/* Animated Warning Orb */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mx-auto h-24 w-24 rounded-3xl bg-amber-500/5 border border-amber-500/25 flex items-center justify-center shadow-xl shadow-amber-500/5 hover:border-amber-500/50 transition-colors"
        >
          <AlertTriangle className="h-10 w-10 text-amber-400" />
        </motion.div>

        {/* Dynamic Display Typography */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 tracking-widest uppercase">
            ERR_ROUTE_DISCONNECT — CODE: 404
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Invalid Connection Path
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            The neural routing module has failed to synchronize the requested endpoint. This address is either unallocated or undergoes maintenance.
          </p>
        </div>

        {/* Technical Diagnostics */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-900 font-mono text-[10px] text-left space-y-1 text-slate-500">
          <div><span className="text-indigo-400 font-bold">RESOURCE:</span> {window.location.pathname}</div>
          <div><span className="text-indigo-400 font-bold">CLIENT_ADDR:</span> CACHED_LOCAL_RESOLVER_v3</div>
          <div><span className="text-indigo-450 text-indigo-400 font-bold">ROUTE_STATUS:</span> DISCONNECTED_OUT_OB_BOUNDS</div>
        </div>

        {/* Action recovery buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-white text-slate-950 font-bold text-sm px-6 hover:bg-slate-200 hover:-translate-y-0.5 transition-all focus:outline-none"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
          <Link
            to="/services"
            className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-white font-bold text-sm px-6 hover:border-slate-700 hover:-translate-y-0.5 transition-all focus:outline-none"
          >
            <Server className="mr-2 h-4 w-4 text-blue-400" />
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-slate-400 font-bold text-sm px-6 hover:text-white transition-colors focus:outline-none"
          >
            <HelpCircle className="mr-2 h-4 w-4 text-indigo-400" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
