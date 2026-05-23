import { useState } from 'react';
import { 
  MessageCircle, Linkedin, Phone, Mail, X, Sparkles, Send, Check
} from 'lucide-react';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const contactOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Messenger',
      subtitle: 'Instant Advisory Chat',
      val: 'https://wa.me/14155550199',
      isLink: true,
      icon: <MessageCircle className="h-5 w-5" />,
      colorClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20',
      badge: 'Live Now'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Portal',
      subtitle: 'Connect with Leadership',
      val: 'https://linkedin.com/company/nonacrypt',
      isLink: true,
      icon: <Linkedin className="h-5 w-5" />,
      colorClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20',
      badge: 'Interactive'
    },
    {
      id: 'mobile',
      name: 'Professional Hotline',
      subtitle: 'Client Advisory Terminal',
      val: '+1-415-555-0199',
      isLink: false,
      isPhone: true,
      icon: <Phone className="h-5 w-5" />,
      colorClass: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20',
      badge: 'P1 Priority'
    },
    {
      id: 'email',
      name: 'Secure Enterprise Mail',
      subtitle: 'enterprise@nonacrypt.com',
      val: 'mailto:enterprise@nonacrypt.com',
      isLink: true,
      icon: <Mail className="h-5 w-5" />,
      colorClass: 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:bg-slate-700',
      badge: '2hr SLA'
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans" id="floating_chat_widget_container">
      {/* Expanding chat popover panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 sm:bottom-18 right-0 w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-none sm:w-80 md:w-96 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          id="chat_popover_panel"
        >
          {/* Header Banner */}
          <div className="p-5 border-b border-slate-900 bg-slate-900/40 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-950 animate-pulse"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">NonaCrypt Advisory</h4>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Client On-ramp Network</p>
                </div>
              </div>
              <button 
                id="btn_close_chat_popover"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-white hover:bg-slate-900 transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/* Context advisory memo */}
            <div className="mt-4 text-xs text-slate-400 font-medium bg-[#010101]/40 p-3 rounded-lg border border-slate-900 leading-relaxed">
              "Welcome to NonaCrypt's instant workspace gateway. Connect with our technical staff or principal enterprise advisors below."
            </div>
          </div>

          {/* Connection Channels List */}
          <div className="p-4 space-y-2.5 max-h-[360px] overflow-y-auto" id="chat_channels_list">
            {contactOptions.map((opt) => (
              <div 
                key={opt.id}
                className="p-3 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 transition-all flex items-center justify-between gap-3 group"
                id={`widget_channel_${opt.id}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border transition-all ${opt.colorClass}`}>
                    {opt.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate">{opt.name}</span>
                      <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-400 uppercase tracking-wider shrink-0">
                        {opt.badge}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 truncate block mt-0.5 font-medium">{opt.subtitle}</span>
                  </div>
                </div>

                {/* Primary Interaction Hook */}
                <div>
                  {opt.isLink ? (
                    <a 
                      href={opt.val}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 px-3.5 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-slate-300 border border-slate-800 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all shrink-0"
                    >
                      Connect
                    </a>
                  ) : (
                    <div className="flex gap-1.5 shrink-0">
                      {opt.isPhone && (
                        <a 
                          href={`tel:${opt.val.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:border-slate-750 transition-all"
                          title="Call representative"
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <button 
                        id={`btn_copy_val_${opt.id}`}
                        onClick={() => handleCopy(opt.val)}
                        className="inline-flex h-8 px-2.5 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-all"
                      >
                        {copiedValue === opt.val ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          'Copy'
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer branding */}
          <div className="px-5 py-3 border-t border-slate-900 bg-slate-950 flex justify-between items-center text-[9px] font-mono text-slate-500">
            <span>Direct Core Latency: &lt;1.2s</span>
            <span className="text-indigo-400/70 font-semibold uppercase">Secure Secure Tunnel</span>
          </div>
        </div>
      )}

      {/* Floating launcher trigger button */}
      <button
        id="btn_toggle_floating_chat"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-2xl transition-all duration-300 hover:bg-indigo-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-600 focus:ring-offset-offset-4"
        aria-label="Toggle contact chat panel"
      >
        {/* Pulsating back glow */}
        <span className="absolute -inset-1 rounded-full bg-indigo-500/20 blur pointer-events-none group-hover:bg-indigo-500/40 transition-colors animate-pulse"></span>
        
        {isOpen ? (
          <X className="h-6 w-6 relative z-10 transition-transform duration-300 rotate-90" />
        ) : (
          <div className="relative z-10">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0A0A0A] animate-bounce"></span>
          </div>
        )}
      </button>
    </div>
  );
}
