import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Cpu, Menu, X, Github, Twitter, Linkedin, CheckCircle2, 
  ChevronDown, BrainCircuit, ScanEye, Terminal, Shield, 
  Activity, Users, HelpCircle, Layers, Info 
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingChatWidget from './FloatingChatWidget';
import GeoSeoController from './GeoSeoController';
import SEOManager from './SEOManager';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const location = useLocation();

  // Desktop Dropdown Open State Managers
  const [activeDropdown, setActiveDropdown] = useState<'platform' | 'company' | null>(null);

  // Mobile Accordion Open State Managers
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

  const platformMenu = [
    { name: 'Foundational Models', href: '/foundational-models', desc: 'Secure heavy cognitive weights', icon: Cpu },
    { name: 'Predictive Analytics', href: '/predictive-analytics', desc: 'Multi-agent temporal modeling', icon: BrainCircuit },
    { name: 'NLP Automation', href: '/nlp-automation', desc: 'Enclave document extraction', icon: Terminal },
    { name: 'Computer Vision', href: '/computer-vision', desc: 'Sovereign line camera systems', icon: ScanEye },
  ];

  const companyMenu = [
    { name: 'About Us', href: '/about', desc: 'Our machine alignment principles', icon: Info },
    { name: 'Careers', href: '/careers', desc: 'Solve ultimate scale parameters', icon: Users, badge: 'Hiring' },
    { name: 'Partners Ecosystem', href: '/partners', desc: 'Sovereign hardware alliances', icon: Layers },
    { name: 'AI Safety & Alignment', href: '/safety', desc: 'Defensive model boundary weights', icon: Shield },
    { name: 'Service SLAs', href: '/sla', desc: 'Our contractual latency uptime rules', icon: HelpCircle },
    { name: 'System Status', href: '/status', desc: 'Active secure edge node ping', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-300 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <SEOManager />
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-3 group transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 shadow-lg shadow-blue-500/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-300">
                <Cpu className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent pb-1">NonaCrypt</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 relative">
            {/* Home link */}
            <Link
              to="/"
              className={`text-sm font-bold tracking-wide transition-colors ${
                location.pathname === '/' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Company Dropdown (Mega Menu combining Company & Platform) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors py-2 cursor-pointer ${
                  activeDropdown === 'company' || companyMenu.some(item => location.pathname === item.href) || platformMenu.some(item => location.pathname === item.href)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Company
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-indigo-400' : 'text-slate-500'}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full -left-28 mt-1.5 w-[620px] rounded-2xl border border-slate-900 bg-[#0c0c0c]/98 p-6 shadow-2xl backdrop-blur-xl z-50 grid grid-cols-2 gap-6"
                  >
                    {/* Platform column */}
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-blue-400 uppercase font-extrabold pb-2 border-b border-slate-900 mb-3">
                        Platform Capabilities
                      </div>
                      <div className="flex flex-col gap-1">
                        {platformMenu.map((item) => {
                          const IconComponent = item.icon;
                          const isActive = location.pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                isActive 
                                  ? 'bg-blue-600/10 border border-blue-500/20 text-white' 
                                  : 'hover:bg-slate-900/60 text-slate-300 hover:text-white border border-transparent'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-950 text-slate-500'}`}>
                                <IconComponent className="h-4 w-4 shrink-0" />
                              </div>
                              <div>
                                <div className="text-xs font-bold font-sans">{item.name}</div>
                                <div className="text-[9px] text-slate-500 mt-0.5 font-semibold leading-normal">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* Company Column */}
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase font-extrabold pb-2 border-b border-slate-900 mb-3">
                        Corporate & Operations
                      </div>
                      <div className="flex flex-col gap-1">
                        {companyMenu.map((item) => {
                          const IconComponent = item.icon;
                          const isActive = location.pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                isActive 
                                  ? 'bg-indigo-500/10 border border-indigo-500/20 text-white' 
                                  : 'hover:bg-slate-900/60 text-slate-300 hover:text-white border border-transparent'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-950 text-slate-500'}`}>
                                <IconComponent className="h-4 w-4 shrink-0" />
                              </div>
                              <div className="flex-1 text-left">
                                <div className="text-xs font-bold font-sans flex items-center justify-between">
                                  {item.name}
                                  {item.badge && (
                                    <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold font-mono bg-indigo-500/15 text-indigo-400 uppercase border border-indigo-500/30">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[9px] text-slate-500 mt-0.5 font-semibold leading-normal">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services link */}
            <Link
              to="/services"
              className={`text-sm font-bold tracking-wide transition-colors ${
                location.pathname.startsWith('/services') ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Services
            </Link>

            {/* Industries link */}
            <Link
              to="/industries"
              className={`text-sm font-bold tracking-wide transition-colors ${
                location.pathname.startsWith('/industries') ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Industries
            </Link>

            {/* Products link */}
            <Link
              to="/products"
              className={`text-sm font-bold tracking-wide transition-colors ${
                location.pathname.startsWith('/products') ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Products
            </Link>

            {/* Pricing Link */}
            <a
              href="/#saas_subscription_pricing"
              className="text-sm font-bold tracking-wide text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </a>

            {/* Sovereignty & Security link */}
            <Link
              to="/security"
              className={`text-sm font-bold tracking-wide transition-colors ${
                location.pathname === '/security' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sovereignty
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <GeoSeoController />
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-slate-900 shadow-xl shadow-white/5 hover:bg-blue-55 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <GeoSeoController />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-b border-white/5 bg-[#0A0A0A]/95 backdrop-blur-xl px-4 pb-6 pt-2 shadow-2xl absolute w-full left-0 right-0 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {/* Direct Page: Home */}
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-colors ${
                    location.pathname === '/' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Home
                </Link>

                {/* Company Group Accordion (combines Corporate & Platform) */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                    className="w-full flex justify-between items-center px-4 py-3 text-base font-extrabold text-slate-300 hover:bg-white/5 rounded-xl transition-all"
                  >
                    <span>Company</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isMobileCompanyOpen ? 'rotate-180 text-indigo-400' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isMobileCompanyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 pr-2 space-y-4 overflow-hidden text-left"
                      >
                        {/* Company Sub Section */}
                        <div className="space-y-1">
                          <div className="text-[9px] font-mono tracking-wider text-indigo-400 uppercase font-extrabold pl-3 py-1">Corporate & Operations</div>
                          {companyMenu.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = location.pathname === item.href;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileCompanyOpen(false);
                                }}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                  isActive ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <IconComponent className="h-4 w-4 mt-0.5 text-indigo-400 shrink-0" />
                                <div className="text-left flex-1">
                                  <div className="text-xs font-bold flex items-center justify-between">
                                    {item.name}
                                    {item.badge && (
                                      <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold font-mono bg-indigo-500/15 text-indigo-400 uppercase">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[9px] text-slate-500 mt-0.5 font-semibold leading-normal">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Platform Sub Section */}
                        <div className="space-y-1">
                          <div className="text-[9px] font-mono tracking-wider text-blue-400 uppercase font-extrabold pl-3 py-1">Platform Capabilities</div>
                          {platformMenu.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = location.pathname === item.href;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileCompanyOpen(false);
                                }}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                  isActive ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <IconComponent className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                                <div className="text-left">
                                  <div className="text-xs font-bold">{item.name}</div>
                                  <div className="text-[9px] text-slate-500 mt-0.5 font-semibold leading-normal">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Direct Page: Services */}
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-colors ${
                    location.pathname.startsWith('/services') ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Services
                </Link>

                {/* Direct Page: Industries */}
                <Link
                  to="/industries"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-colors ${
                    location.pathname.startsWith('/industries') ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Industries
                </Link>

                {/* Direct Page: Products */}
                <Link
                  to="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-colors ${
                    location.pathname.startsWith('/products') ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Products
                </Link>

                {/* Direct Page: Pricing */}
                <a
                  href="/#saas_subscription_pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-extrabold text-slate-400 hover:bg-white/5 hover:text-white transition-colors animate-none"
                >
                  Pricing
                </a>

                {/* Direct Page: Sovereignty & Security */}
                <Link
                  to="/security"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-extrabold transition-colors ${
                    location.pathname === '/security' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Sovereignty
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3.5 text-base font-bold text-slate-900 shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 flex flex-col w-full relative z-0">
        <Outlet />
      </main>

      <footer className="bg-[#050505] text-slate-400 mt-auto border-t border-white/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 relative z-10">
          <div className="xl:grid xl:grid-cols-4 xl:gap-12 lg:pb-12 border-b border-white/5 pb-10">
            <div className="space-y-8 xl:col-span-1">
              <Link to="/" className="flex items-center gap-3 group transition-all w-max">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white mb-0">NonaCrypt</span>
              </Link>
              <p className="text-base leading-relaxed text-slate-400 font-medium max-w-xs">
                Architecting the next epoch of intelligence. Enterprise-grade AI infrastructure for the world's most ambitious teams.
              </p>
              <div className="flex space-x-5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"><span className="sr-only">GitHub</span><Github className="h-5 w-5" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 lg:grid-cols-3">
              <div>
                <h3 className="text-xs font-bold leading-6 text-slate-300 uppercase tracking-widest mb-6">Platform</h3>
                <ul role="list" className="space-y-4 text-slate-400 font-medium">
                  <li><Link to="/foundational-models" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Foundational Models <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                  <li><Link to="/predictive-analytics" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Predictive Analytics <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                  <li><Link to="/nlp-automation" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">NLP Automation <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                  <li><Link to="/computer-vision" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Computer Vision <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xs font-bold leading-6 text-slate-300 uppercase tracking-widest mb-6">Company</h3>
                <ul role="list" className="space-y-4 text-slate-400 font-medium">
                  <li><Link to="/about" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">About Us <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                  <li><Link to="/careers" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Careers <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] uppercase font-bold ml-1">Hiring</span></Link></li>
                  <li><Link to="/contact" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Contact Sales <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                  <li><Link to="/partners" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group">Partners <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-xs tracking-wider">→</span></Link></li>
                </ul>
              </div>
              
              <div className="col-span-2 lg:col-span-1 border-t border-white/5 pt-8 lg:border-t-0 lg:pt-0">
                <h3 className="text-xs font-bold leading-6 text-slate-300 uppercase tracking-widest mb-6">Stay Updated</h3>
                
                <AnimatePresence mode="wait">
                  {!isSubscribed ? (
                    <motion.div
                      key="subscribe_form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-slate-400 font-medium mb-4">
                        Subscribe to our newsletter for the latest AI research and product updates.
                      </p>
                      <form 
                        className="mt-2 sm:flex sm:max-w-md"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsSubscribed(true);
                        }}
                      >
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                          type="email"
                          name="email"
                          id="email-address"
                          autoComplete="email"
                          required
                          className="w-full min-w-0 appearance-none rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-base text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-xl sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                          <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#050505] hover:bg-slate-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="subscribe_success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex flex-col gap-2 shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        <span className="font-extrabold text-sm text-white">Subscription Active</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        You have successfully joined the research list. We will send model updates as soon as they deploy.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm leading-5 text-slate-500 font-medium flex items-center gap-2">
              &copy; {new Date().getFullYear()} NonaCrypt Technologies Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
               <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
               <Link to="/security" className="hover:text-slate-300 transition-colors">Security & Keys</Link>
               <Link to="/safety" className="hover:text-slate-300 transition-colors">AI Safety & Alignment</Link>
               <Link to="/sla" className="hover:text-slate-300 transition-colors">Service SLAs</Link>
               <Link to="/status" className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div> System Status
               </Link>
            </div>
          </div>
        </div>
      </footer>
      <FloatingChatWidget />
    </div>
  );
}
