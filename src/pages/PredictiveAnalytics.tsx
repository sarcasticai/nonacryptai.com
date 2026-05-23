import { ArrowRight, BrainCircuit, LineChart, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PredictiveAnalytics() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>

      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Platform Core</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight pb-2">
            Predictive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Analytics</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-400 font-medium leading-relaxed">
            Forecast trends and customer behavior with our advanced machine learning models. Transform your historical data into proactive, actionable insights.
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
            <h2 className="text-3xl font-extrabold text-white">Anticipate the Future of Your Business</h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Our Predictive Analytics Engine processes vast amounts of historical data to uncover hidden patterns and forecast future trends. Employs deep learning and time-series analysis to give your business a competitive edge, allowing proactive rather than reactive strategies.
            </p>
            <div className="space-y-4">
              {[
                { icon: <LineChart className="h-6 w-6 text-emerald-400" />, title: "Real-time data processing" },
                { icon: <Zap className="h-6 w-6 text-emerald-400" />, title: "Automated anomaly detection" },
                { icon: <BrainCircuit className="h-6 w-6 text-emerald-400" />, title: "Customizable forecasting dashboards" },
                { icon: <Network className="h-6 w-6 text-emerald-400" />, title: "API integration for enterprise systems" }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <div className="p-3 bg-slate-950 rounded-lg shadow-inner">{feat.icon}</div>
                  <span className="text-white font-bold">{feat.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="aspect-[4/3] rounded-[2rem] border border-slate-800 bg-[#050505] p-8 shadow-2xl relative overflow-hidden flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                 <h3 className="text-lg font-bold text-white">Revenue Forecast (Q3)</h3>
                 <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/20 mr-2">+24.5% Targeted</span>
              </div>
              <div className="flex-1 flex items-end gap-3 justify-between pt-10">
                 {[40, 55, 45, 60, 80, 75, 90, 85].map((h, i) => (
                   <div key={i} className="w-full bg-gradient-to-t from-blue-900/50 to-blue-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
                 {[100, 110, 130].map((h, i) => (
                   <div key={i} className="w-full bg-gradient-to-t from-emerald-900/50 to-emerald-400/50 rounded-t-sm opacity-50 relative border-t-2 border-emerald-400 border-dashed" style={{ height: `${h}%` }}>
                     {i === 2 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-400">Prediction</div>}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
