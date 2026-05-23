import { ArrowRight, Trophy, Users, Zap, Building, Target, Shield, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// Generated Media Assets
import sarahChenImg from '../assets/images/sarah_chen_ceo_1779543866752.png';
import marcusReynoldsImg from '../assets/images/marcus_reynolds_cto_1779543884418.png';
import elenaRostovaImg from '../assets/images/elena_rostova_research_1779543905334.png';
import jamesKimImg from '../assets/images/james_kim_eng_1779543926298.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 100, damping: 16 } 
  }
};

export default function About() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300">
      {/* Hero section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#0A0A0A] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-[#0A0A0A] to-[#0A0A0A] z-0"></div>
        <div className="absolute top-0 left-0 w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] h-full pointer-events-none mix-blend-overlay z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block animate-fade-in">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight pb-2">
            Intelligence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Engineered.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
            Founded by researchers from top AI labs, NonaCrypt is on a mission to democratize enterprise-grade machine learning. 
             We build the foundational infrastructure that powers the next generation of software.
          </p>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 relative z-10">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300">10B+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Predictions / Day</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-3 group-hover:scale-105 transition-transform duration-300">99.99%</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-3 group-hover:scale-105 transition-transform duration-300">45ms</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Avg Latency</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-extrabold text-rose-400 mb-3 group-hover:scale-105 transition-transform duration-300">12</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Global Regions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">The Platform</span>
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Our Methodology</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
              <p>
                We believe that artificial intelligence shouldn't be a black box. Our architecture is built on transparency, 
                reproducibility, and rigorous mathematical foundations. 
              </p>
              <p>
                From self-supervised learning algorithms to distributed inference engines, every component of the NonaCrypt 
                platform is optimized for high-throughput, low-latency enterprise environments. We transform your data into a lasting competitive advantage.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 -z-10"></div>
            <motion.div 
              variants={cardVariants}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 flex flex-col items-start hover:-translate-y-2 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Users className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Elite Research Team</h3>
              <p className="text-base text-slate-400 font-medium leading-relaxed">100+ PhDs and engineers dedicated to advancing state-of-the-art models.</p>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 flex flex-col items-start hover:-translate-y-2 hover:border-slate-700 transition-all duration-300 group sm:translate-y-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <Building className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Enterprise Ready</h3>
              <p className="text-base text-slate-400 font-medium leading-relaxed">SOC2 compliant architecture trusted by Fortune 500 companies globally.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#0A0A0A] py-24 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider text-purple-500 uppercase mb-4 block">Our DNA</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Core Values</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">The principles that guide our research, engineering, and partnerships.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={cardVariants}
              className="rounded-3xl bg-slate-900/30 border border-slate-800 p-10 hover:bg-slate-900/50 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-8 relative z-10">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Precision First</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10">
                We believe in rigorous evaluation. Every model we deploy is tested against strict accuracy and fairness benchmarks to ensure reliable performance.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              className="rounded-3xl bg-slate-900/30 border border-slate-800 p-10 hover:bg-slate-900/50 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8 relative z-10">
                <Shield className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Absolute Security</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10">
                Enterprise AI requires enterprise security. From tenant isolation to end-to-end encryption, trust is built into the foundation of our infrastructure.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              className="rounded-3xl bg-slate-900/30 border border-slate-800 p-10 hover:bg-slate-900/50 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-2xl rounded-full group-hover:bg-rose-500/20 transition-colors"></div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/20 mb-8 relative z-10">
                <Globe className="h-8 w-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Scalable Impact</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10">
                We build for global scale. Our platforms are designed to process massive datasets autonomously, turning local insights into worldwide capability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-teal-500 uppercase mb-4 block">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Meet the Team</h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">A multidisciplinary group of visionaries charting the future of intelligence.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', borderColor: 'group-hover:border-blue-500/50', image: sarahChenImg },
            { name: 'Marcus Reynolds', role: 'Chief Technology Officer', borderColor: 'group-hover:border-indigo-500/50', image: marcusReynoldsImg },
            { name: 'Dr. Elena Rostova', role: 'Head of AI Research', borderColor: 'group-hover:border-purple-500/50', image: elenaRostovaImg },
            { name: 'James Kim', role: 'VP of Engineering', borderColor: 'group-hover:border-rose-500/50', image: jamesKimImg }
          ].map((member, idx) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/5] bg-slate-900 rounded-3xl mb-6 overflow-hidden relative shadow-md border border-slate-800 transition-all duration-300 group-hover:-translate-y-2 ${member.borderColor}`}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
              <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-slate-900 border border-slate-800 p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 hidden md:block"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20 hidden md:block"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to transform your business?</h2>
            <p className="text-xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto">
              Join industry leaders who are deploying our robust intelligence platform to stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#0A0A0A] shadow-xl transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Contact Sales
              </Link>
              <Link to="/services" className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
