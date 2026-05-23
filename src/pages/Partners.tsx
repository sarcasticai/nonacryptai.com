import { ArrowRight, Box, Cable, Codesandbox, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">Partner Network</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            Build together. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Scale globally.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
            Join the NonaCrypt Partner Network to integrate state-of-the-art predictive and generative systems directly into your platforms.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-10 group hover:border-slate-700 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <Codesandbox className="h-7 w-7 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Technology Partners</h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Integrate your SaaS platform, data warehouse, or cloud architecture directly with NonaCrypt API. Offer your users embedded intelligence seamlessly.
            </p>
            <Link to="/contact" className="inline-flex items-center text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-5 py-2.5 rounded-full transition-all">
              Become a Technology Partner <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-10 group hover:border-slate-700 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Solution Providers</h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Consultancies, system integrators, and managed service providers using NonaCrypt to solve complex challenges for enterprise clients.
            </p>
            <Link to="/contact" className="inline-flex items-center text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-5 py-2.5 rounded-full transition-all">
              Apply as a Solution Provider <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="text-center p-12 rounded-3xl border border-white/5 bg-[#050505] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Access the Partner Portal</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">Current partners can access SDK testing environments, co-marketing resources, and dedicated technical support channels.</p>
          <Link 
            to="/contact" 
            className="inline-block relative z-10 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-[#0A0A0A] hover:-translate-y-1 transition-all shadow-xl hover:bg-slate-200"
          >
            Sign In to Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
