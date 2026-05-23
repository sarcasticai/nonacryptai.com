import { ArrowRight, ScanEye, Maximize, Cpu, ScanLine } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComputerVision() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>

      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Platform Core</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            Computer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Vision</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-400 font-medium leading-relaxed">
            Enable your applications to see and understand the physical world in real-time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] hover:-translate-y-1 transition-all shadow-xl hover:bg-slate-200">
               Request Demo
             </Link>
             <Link to="/services" className="inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 px-8 py-4 text-base font-bold text-white hover:border-slate-500 hover:bg-slate-800 transition-all">
               View All Services <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-white">Pixel-Perfect Recognition at Edge</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Harness the power of neural networks for precise image and video analysis. Whether it's quality control on a manufacturing line, autonomous navigation, or facial recognition for security, our Vision API delivers remarkable accuracy at high speeds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Maximize className="h-5 w-5 text-indigo-400" />, title: "Object detection & tracking" },
                { icon: <ScanEye className="h-5 w-5 text-indigo-400" />, title: "Facial recognition" },
                { icon: <ScanLine className="h-5 w-5 text-indigo-400" />, title: "Real-time video stream analysis" },
                { icon: <Cpu className="h-5 w-5 text-indigo-400" />, title: "Edge-deployment capabilities" }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-slate-800 transition-colors">
                  <div className="shrink-0">{feat.icon}</div>
                  <span className="text-white font-bold text-sm tracking-wide">{feat.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] border border-slate-800 bg-[#050505] p-2 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
               
               {/* Vision bounding boxes overlay */}
               
               <div className="absolute top-[25%] left-[20%] w-[180px] h-[220px] border-2 border-emerald-400/80 bg-emerald-400/10 rounded-sm">
                 <div className="absolute -top-6 left-[-2px] bg-emerald-400 text-[#0A0A0A] text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1">
                   <span>Person</span>
                   <span className="opacity-80">99.2%</span>
                 </div>
               </div>

               <div className="absolute top-[40%] right-[15%] w-[140px] h-[100px] border-2 border-blue-400/80 bg-blue-400/10 rounded-sm">
                 <div className="absolute -top-6 left-[-2px] bg-blue-400 text-[#0A0A0A] text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1">
                   <span>Vehicle</span>
                   <span className="opacity-80">97.8%</span>
                 </div>
               </div>
               
               <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-white text-xs font-mono bg-[#0A0A0A]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                   STREAM_LIVE SECURE
                 </div>
                 <div className="text-white text-xs font-mono bg-[#0A0A0A]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                   60 FPS / 8.2ms
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
