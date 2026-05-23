import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Services() {
  return (
    <div className="py-24 bg-[#0A0A0A] w-full min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0A0A0A] to-[#0A0A0A] z-0 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-4 block">Core Platform</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 pb-2">Enterprise AI Services</h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Augment your business capabilities with our specifically engineered, high-performance artificial intelligence modules designed for seamless integration.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon] || Icons.Cpu;
            const colors = [
              "from-blue-500 to-indigo-500",
              "from-purple-500 to-indigo-500",
              "from-emerald-500 to-teal-500"
            ];
            const glowColors = [
              "bg-blue-500/20",
              "bg-purple-500/20",
              "bg-emerald-500/20"
            ];
            const bgGradient = colors[index % colors.length];
            const glow = glowColors[index % glowColors.length];
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link 
                  to={`/services/${service.id}`}
                  className="flex flex-col h-full relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-xl hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300 group overflow-hidden backdrop-blur-sm"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${glow} blur-3xl rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${bgGradient} shadow-lg relative z-10 p-[1px]`}>
                    <div className="absolute inset-[1px] rounded-[15px] bg-slate-900 z-0"></div>
                    <IconComponent className="h-7 w-7 text-white relative z-10 drop-shadow-sm" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white relative z-10 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="mb-8 flex-1 text-slate-400 font-medium leading-relaxed relative z-10">
                    {service.shortDescription}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors relative z-10">
                    Detailed specifications
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
