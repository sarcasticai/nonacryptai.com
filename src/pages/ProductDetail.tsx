import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import productsData from '../data/products.json';
import * as Icons from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0A0A0A] px-4">
        <h1 className="text-4xl font-extrabold text-white mb-4">404 - Product Not Found</h1>
        <p className="text-slate-400 font-medium mb-8">The product you are looking for does not exist in our catalog.</p>
        <Link to="/products" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Products
        </Link>
      </div>
    );
  }

  // @ts-ignore
  const IconComponent = Icons[product.icon] || Icons.Cpu;

  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen">
      {/* Hero section */}
      <div className="relative pt-32 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A] -z-10"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/products" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-white mb-10 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to products
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-sm font-bold text-blue-400 mb-6">
                <IconComponent className="mr-2 h-4 w-4 text-blue-500" />
                NonaCrypt Premium Suite
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">{product.title}</h1>
              <p className="text-xl text-slate-400 font-medium mb-10 max-w-2xl leading-relaxed">{product.shortDescription}</p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-base font-bold text-slate-900 shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Contact Sales
                </Link>
                <div className="text-slate-500 text-base font-medium">
                  Starting at <span className="text-white font-extrabold text-lg">{product.price}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[450px]">
              <div className="aspect-video lg:aspect-square rounded-[2.5rem] bg-slate-900 border border-slate-800 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>
                  <IconComponent className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-slate-800" />
                  
                  <div className="relative z-10 backdrop-blur-md bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                          <span className="text-white font-bold">System Status</span>
                          <span className="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                              Active
                          </span>
                      </div>
                      <div className="space-y-3">
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full w-[92%] bg-blue-500 rounded-full"></div>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full w-[78%] bg-indigo-500 rounded-full"></div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-[#050505] border-t border-white/5 py-24 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white mb-6">Product Overview</h2>
                        <div className="prose prose-lg prose-slate prose-invert max-w-none">
                        <p className="text-slate-400 leading-relaxed font-medium">
                            {product.fullDescription}
                        </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-16">
                    <h3 className="text-xl font-extrabold text-white mb-8">Key Features</h3>
                    <ul className="space-y-6">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                        <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-xl mr-4 flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        </div>
                        <span className="text-slate-300 font-bold leading-tight">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
