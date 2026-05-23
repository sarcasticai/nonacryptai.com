import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Server, HelpCircle } from 'lucide-react';
import productsData from '../data/products.json';
import * as Icons from 'lucide-react';
import { regions, RegionConfig } from '../components/GeoSeoController';
import { motion } from 'motion/react';

// Generated Media Assets
import defectDetectImg from '../assets/images/defect_detect_core_1779543794786.png';
import threatSensorImg from '../assets/images/threat_sensor_node_1779543813097.png';

const productImages: { [key: string]: string } = {
  'defect-manage-ai': defectDetectImg,
  'threat-control-ai': threatSensorImg
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 14 }
  }
};

export default function Products() {
  const [currentRegion, setCurrentRegion] = useState<RegionConfig>(regions[0]);

  useEffect(() => {
    const handleRegionChange = (e: Event) => {
      const customEvent = e as CustomEvent<RegionConfig>;
      if (customEvent.detail) {
        setCurrentRegion(customEvent.detail);
      }
    };
    window.addEventListener('nonacrypt-region-changed', handleRegionChange);
    
    try {
      const activeFlag = document.title.match(/\((.*?)\)/);
      if (activeFlag && activeFlag[1]) {
        const found = regions.find(r => r.name === activeFlag[1]);
        if (found) {
          setCurrentRegion(found);
        }
      }
    } catch (err) {}

    return () => {
      window.removeEventListener('nonacrypt-region-changed', handleRegionChange);
    };
  }, []);

  const formatProductPrice = (productId: string) => {
    const basePrices: { [key: string]: number } = {
      'defect-manage-ai': 1499,
      'threat-control-ai': 2500,
    };

    const base = basePrices[productId] || 1500;
    
    if (currentRegion.id === 'bd') {
      const bdtAmount = Math.round(base * 115 * 0.85); // 15% regional discount
      return `৳${bdtAmount.toLocaleString()}/month (Special BD SLA)`;
    } else if (currentRegion.id === 'us') {
      return `$${base.toLocaleString()}/month`;
    } else if (currentRegion.id === 'eu') {
      const eurAmount = Math.round(base * 0.92);
      return `€${eurAmount.toLocaleString()}/month`;
    } else if (currentRegion.id === 'ca') {
      const cadAmount = Math.round(base * 1.35);
      return `C$${cadAmount.toLocaleString()}/month`;
    } else if (currentRegion.id === 'au') {
      const audAmount = Math.round(base * 1.50);
      return `A$${audAmount.toLocaleString()}/month`;
    }
    return `$${base.toLocaleString()}/month`;
  };

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 overflow-hidden relative">
      {/* Hero section */}
      <div className="relative pt-32 pb-24 overflow-hidden bg-[#0A0A0A] border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] -z-10"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-bold tracking-wider text-blue-400 uppercase mb-4 block">Commercial Products</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Deploy intelligence <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">in seconds.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
            Out-of-the-box solutions configured for immediate deployment, wrapped in stunning consumer-grade design.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 text-xs text-indigo-300 font-mono">
            <Server className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            Optimized for: <span className="font-bold text-white uppercase">{currentRegion.name}</span> &gt; Edge ping: <span className="font-bold text-emerald-400">{currentRegion.latencyCdn}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {productsData.map((product, index) => {
             // @ts-ignore
            const IconComponent = Icons[product.icon] || Icons.Cpu;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={product.id}
                variants={cardVariants}
                className="rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 md:p-12 shadow-2xl hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-500 overflow-hidden relative group"
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative z-10`}>
                  {/* Content Side */}
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950/50 border border-slate-800 text-white shadow-xl group-hover:border-slate-700 transition-colors">
                        <IconComponent className="h-8 w-8 text-blue-400" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-400 border border-blue-500/20 shadow-sm">
                        {formatProductPrice(product.id)}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-blue-400 transition-colors">{product.title}</h2>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed">
                        {product.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                          <span className="text-slate-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={`/products/${product.id}`}
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 px-8 py-4 text-base font-bold text-blue-400 shadow-lg transition-all hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        View Specifications
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <Link 
                        to={`/contact`}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] shadow-sm transition-all hover:bg-slate-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 w-full relative">
                    <div className="aspect-square md:aspect-[4/3] rounded-[2rem] bg-[#050505] border border-slate-800 overflow-hidden relative shadow-2xl flex items-center justify-center group-hover:border-slate-700 transition-all duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent z-10 pointer-events-none"></div>
                      
                      {productImages[product.id] ? (
                        <img 
                          src={productImages[product.id]} 
                          alt={product.title} 
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 select-none pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <IconComponent className="h-48 w-48 text-slate-800 opacity-60 z-0 group-hover:scale-105 transition-transform duration-700" strokeWidth={1} />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent z-10"></div>
                      
                      {/* Abstract Tech Overlays */}
                      <div className="absolute top-6 left-6 rounded-2xl bg-neutral-950/85 backdrop-blur-md p-4 shadow-2xl border border-white/5 z-20 w-44 hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                          <span className="text-[8px] font-mono font-black tracking-widest text-blue-400 uppercase">TELEMETRY</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[70%] bg-blue-500"></div>
                        </div>
                        <div className="mt-2 text-[9px] text-slate-400 font-mono">Sync latency: <span className="text-white font-bold">12ms</span></div>
                      </div>
                      
                      <div className="absolute bottom-6 right-6 rounded-2xl bg-neutral-950/85 backdrop-blur-md p-4 shadow-2xl border border-white/5 z-20 w-48 hover:-translate-y-1 transition-transform duration-300">
                         <div className="flex items-center gap-2 mb-3">
                           <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                           </span>
                           <div className="text-[9px] font-mono font-black tracking-widest uppercase text-emerald-400">ONLINE METRIC</div>
                         </div>
                         <div className="space-y-1.5">
                           <div className="text-[10px] font-semibold text-white">Sovereign Cluster Active</div>
                           <div className="text-[8px] font-mono text-slate-500">Node ID: {product.id.substring(0, 8).toUpperCase()}-NODE</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
