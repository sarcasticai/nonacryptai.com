import { ArrowRight, Code, Cpu, LineChart, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const roles = [
    {
      title: "Senior AI Researcher",
      department: "Research",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      icon: <Terminal className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Distributed Systems Engineer",
      department: "Engineering",
      location: "Remote (US/Canada)",
      type: "Full-time",
      icon: <Cpu className="h-6 w-6 text-purple-400" />
    },
    {
      title: "Security Architect",
      department: "Security",
      location: "London, UK (Hybrid)",
      type: "Full-time",
      icon: <Shield className="h-6 w-6 text-emerald-400" />
    },
    {
      title: "Data Science Lead",
      department: "Analytics",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      icon: <LineChart className="h-6 w-6 text-indigo-400" />
    }
  ];

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Careers at NonaCrypt</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Future</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
            Join a multi-disciplinary team of researchers and engineers working on the bleeding edge of artificial intelligence.
          </p>
        </div>
      </div>

      {/* Roles list */}
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Open Positions</h2>
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm font-bold">4 Openings</span>
        </div>
        
        <div className="space-y-4">
          {roles.map((role, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{role.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 font-medium">
                    <span>{role.department}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600 self-center"></span>
                    <span>{role.location}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600 self-center"></span>
                    <span>{role.type}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="relative z-10 rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2 text-sm font-bold text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl border border-slate-800 bg-slate-900/30 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Don't see a fit?</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">We're always looking for exceptional talent. Send your resume and we'll reach out when a matching role opens.</p>
          <Link to="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300">
            Contact Recruiting <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
