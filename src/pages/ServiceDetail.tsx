import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import servicesData from '../data/services.json';
import * as Icons from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#0A0A0A] px-4 w-full">
        <h1 className="text-4xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-500 pb-1">404 - Module Not Found</h1>
        <p className="text-slate-400 font-medium mb-8">The service module you are looking for does not exist or has been deprecated.</p>
        <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Services
        </Link>
      </div>
    );
  }

  // @ts-ignore
  const IconComponent = Icons[service.icon] || Icons.Cpu;

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen text-slate-300 relative overflow-hidden">
       {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Hero section */}
      <div className="relative border-b border-white/5 bg-[#0A0A0A] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none opacity-50 z-0"></div>
        <div className="absolute top-0 left-0 w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] h-full pointer-events-none mix-blend-overlay z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 inline-flex">
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 hover:border-blue-500/30 backdrop-blur-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to services index
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500/10 border border-blue-500/20 shadow-2xl shadow-blue-500/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <IconComponent className="h-12 w-12 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">{service.title}</h1>
              <p className="text-xl text-slate-400 font-medium max-w-3xl leading-relaxed">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-slate-900/30 backdrop-blur-sm rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full"></div>
              
              <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Technical Overview</h2>
              <div className="prose prose-lg prose-slate prose-invert max-w-none">
                <p className="text-slate-400 font-medium leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
              
              <h2 className="text-3xl font-extrabold text-white mt-16 mb-8 tracking-tight">Core Capabilities</h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center bg-slate-900/50 px-5 py-4 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400 mr-4 flex-shrink-0 drop-shadow-sm" />
                    <span className="text-slate-300 text-lg font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl p-8 sticky top-28 overflow-hidden group hover:border-slate-700 transition-colors">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
              <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 shadow-lg shadow-blue-500/20 relative z-10"></div>
              <h3 className="text-2xl font-extrabold text-white mb-4 relative z-10">Ready to deploy?</h3>
              <p className="text-slate-400 font-medium text-base mb-10 relative z-10 leading-relaxed">Connect with our engineering team to evaluate robust enterprise integration requirements.</p>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 text-base font-bold text-[#0A0A0A] hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl hover:bg-slate-200 relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Architecture Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
