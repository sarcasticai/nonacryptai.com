import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none z-0"></div>

      {/* Header section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[130px] rounded-full pointer-events-none z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">Connect</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight pb-2">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">touch</span></h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
            Interested in integrating NonaCrypt into your product? Our engineering team is ready to assist with custom architectures and deployments.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Form */}
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">Send a message</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-bold text-slate-400 mb-2">First name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-medium"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-bold text-slate-400 mb-2">Last name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-400 mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-medium"
                  placeholder="jane@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-400 mb-2">How can we help?</label>
                <textarea
                  id="message"
                  rows={5}
                  className="block w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3.5 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none font-medium resize-none"
                  placeholder="Tell us about your technical requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-4 mt-4 text-base font-bold text-[#0A0A0A] shadow-lg shadow-white/5 hover:bg-slate-200 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                onClick={(e) => e.preventDefault()}
              >
                Send Message <MessageSquare className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10 flex flex-col justify-center lg:pl-8 relative z-10">
            <div className="flex items-start group">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <Mail className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Sales & Enterprise</h3>
                <p className="text-base text-slate-400 font-medium mb-1 relative z-10">For volume pricing and custom SLAs.</p>
                <a href="mailto:enterprise@nonacrypt.com" className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors relative z-10">enterprise@nonacrypt.com</a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Professional Helpline</h3>
                <p className="text-base text-slate-400 font-medium mb-1 relative z-10">Direct real-time advisory line for audited clients.</p>
                <a href="tel:+14155550199" className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors relative z-10 font-mono">+1-415-555-0199</a>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Technical Support</h3>
                <p className="text-base text-slate-400 font-medium mb-1 relative z-10">24/7 support for deployed models.</p>
                <a href="mailto:support@nonacrypt.com" className="font-bold text-blue-400 hover:text-blue-300 transition-colors relative z-10">support@nonacrypt.com</a>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Headquarters</h3>
                <p className="text-base text-slate-400 font-medium leading-relaxed relative z-10">
                  100 Innovation Drive<br />
                  San Francisco, CA 94103<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">API Status</h3>
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1.5 border border-emerald-500/20 font-medium">
                <div className="mr-3 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)] relative z-10"></div>
                <span className="text-sm font-bold text-emerald-400 relative z-10">All Systems Operational</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
