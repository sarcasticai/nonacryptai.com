import { useState, useEffect } from 'react';
import { Globe, Shield, Wifi, Compass, HelpCircle, Phone, MapPin, Database, Check, Github, Terminal, Copy, AlertCircle, FileText, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface RegionConfig {
  id: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  priceMultiplier: number;
  datacenter: string;
  latencyCdn: string;
  latencyInference: string;
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  complianceStandard: string;
  hotline: string;
  seoDescription: string;
  seoKeywords: string;
}

export const regions: RegionConfig[] = [
  {
    id: 'us',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    priceMultiplier: 1.0,
    datacenter: 'US-East (Virginia) / US-West (Oregon) Dedicated GPU cluster',
    latencyCdn: '1.4ms',
    latencyInference: '4.8ms',
    geoRegion: 'US-CA',
    geoPlacename: 'San Francisco',
    geoPosition: '37.7749;-122.4194',
    complianceStandard: 'SOC 2 Type II, HIPAA, ISO 42001',
    hotline: '+1-415-555-0199',
    seoDescription: 'NonaCrypt USA delivers enterprise-grade secure AI platform hosting, low-latency high-consequence predictive models and edge neural processing across US centers.',
    seoKeywords: 'USA AI, American GPU Cloud, SOC 2 HIPAA AI, Virginia GPU Clusters, NonaCrypt US'
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    flag: '🇧🇩',
    currency: 'BDT',
    currencySymbol: '৳',
    priceMultiplier: 0.85, // Regional pricing
    datacenter: 'Dhaka Local Edge / South Asia Premium Gateway (SGP-1)',
    latencyCdn: '4.2ms',
    latencyInference: '9.5ms',
    geoRegion: 'BD-13',
    geoPlacename: 'Dhaka',
    geoPosition: '23.8103;90.4125',
    complianceStandard: 'BDS-2024 local data sovereign compliance, ISO 27001',
    hotline: '+1-415-555-0199 (Internal BD Router: ext 801)',
    seoDescription: 'NonaCrypt Bangladesh features highly accelerated South-Asian localized AI models, local factory defect analytics, and sovereign Dhaka database nodes.',
    seoKeywords: 'Bangladesh AI Automation, Dhaka Edge Computing, South Asia GPU, BDS Compliance, Dhaka Deep Learning'
  },
  {
    id: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    currencySymbol: 'C$',
    priceMultiplier: 1.15,
    datacenter: 'Canada Central (Toronto) Localized Sovereign Node',
    latencyCdn: '2.1ms',
    latencyInference: '5.9ms',
    geoRegion: 'CA-ON',
    geoPlacename: 'Toronto',
    geoPosition: '43.6532;-79.3832',
    complianceStandard: 'PIPEDA compliant, SOC 2 audited, ISO/IEC 27018',
    hotline: '+1-415-555-0199 (Toronto Hub)',
    seoDescription: 'NonaCrypt Canada hosts secure PIPEDA-compliant model training pipelines, real-time predictive analytics and legal tech pipelines local to Ontario & Quebec.',
    seoKeywords: 'Canada AI, Toronto Cloud Datacenter, PIPEDA AI compliant, Ontario Machine Learning'
  },
  {
    id: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    currencySymbol: 'A$',
    priceMultiplier: 1.25,
    datacenter: 'Australia East (Sydney) Ultra-Safe Cluster',
    latencyCdn: '3.1ms',
    latencyInference: '7.2ms',
    geoRegion: 'AU-NSW',
    geoPlacename: 'Sydney',
    geoPosition: '-33.8688;151.2093',
    complianceStandard: 'IRAP assessed framework, SOC 2 compliance, ASA',
    hotline: '+1-415-555-0199 (Sydney Direct)',
    seoDescription: 'NonaCrypt Australia integrates high-security IRAP aligned AI algorithms, dynamic spatial computer vision pipelines and localized Sydney edge clusters.',
    seoKeywords: 'Australia AI Edge, Sydney GPU Infrastructure, IRAP AI Compliant, Melbourne Deep Learning'
  },
  {
    id: 'eu',
    name: 'Europe (Sovereign)',
    flag: '🇪🇺',
    currency: 'EUR',
    currencySymbol: '€',
    priceMultiplier: 1.10,
    datacenter: 'EU-West (Frankfurt, Germany & Paris, France) Secure Nodes',
    latencyCdn: '1.8ms',
    latencyInference: '5.1ms',
    geoRegion: 'DE-HE',
    geoPlacename: 'Frankfurt',
    geoPosition: '50.1109;8.6821',
    complianceStandard: 'GDPR sovereign cloud strict isolation, ISO 27001, AI Act Ready',
    hotline: '+1-415-555-0199 (Frankfurt Route)',
    seoDescription: 'NonaCrypt Europe brings specialized GDPR-compliant machine learning networks and sovereign German/French physical GPU containers to European commerce.',
    seoKeywords: 'Europe AI, Frankfurt Sovereign GPU, GDPR AI, European AI Act, France GPU Clusters'
  }
];

export default function GeoSeoController() {
  const [selectedRegion, setSelectedRegion] = useState<RegionConfig>(regions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [autoDetected, setAutoDetected] = useState(false);
  const [activeTab, setActiveTab] = useState<'gateways' | 'github_seo'>('gateways');
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  // High-precision geolocation resolution states
  const [geoState, setGeoState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [geoErrorMessage, setGeoErrorMessage] = useState<string>('');

  const findClosestRegion = (lat: number, lon: number): RegionConfig => {
    let closest = regions[0];
    let minDistance = Infinity;

    regions.forEach(r => {
      const [rLat, rLon] = r.geoPosition.split(';').map(Number);
      const dLat = lat - rLat;
      const dLon = lon - rLon;
      const dist = dLat * dLat + dLon * dLon;
      if (dist < minDistance) {
        minDistance = dist;
        closest = r;
      }
    });

    return closest;
  };

  const handleGeolocationDetect = () => {
    if (!navigator.geolocation) {
      setGeoState('error');
      setGeoErrorMessage('Geolocation API is not supported by your browser.');
      return;
    }

    setGeoState('loading');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const closest = findClosestRegion(latitude, longitude);
        selectRegion(closest);
        setGeoState('success');
        setAutoDetected(true);
      },
      (error) => {
        setGeoState('error');
        let msg = 'Failed to retrieve location coordinates.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Location permission denied by user browser.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'Location information is currently unavailable.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location retrieval request timed out.';
        }
        setGeoErrorMessage(msg);
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 }
    );
  };

  // Attempt rapid auto-detection based on system locale / timezone or URL query param / localStorage
  useEffect(() => {
    try {
      // 1. Is there a query param?
      const searchParams = new URLSearchParams(window.location.search);
      const regionParam = searchParams.get('region');
      if (regionParam) {
        const found = regions.find(r => r.id === regionParam.toLowerCase());
        if (found) {
          setSelectedRegion(found);
          setAutoDetected(false);
          applyGeoSeoMetadata(found);
          localStorage.setItem('nonacrypt-selected-region', found.id);
          return;
        }
      }

      // 2. Is there a saved region in localStorage?
      const saved = localStorage.getItem('nonacrypt-selected-region');
      if (saved) {
        const found = regions.find(r => r.id === saved);
        if (found) {
          setSelectedRegion(found);
          setAutoDetected(false);
          applyGeoSeoMetadata(found);
          return;
        }
      }

      // 3. Fallback to timezone-based auto-detection
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const locale = navigator.language || "";
      
      let matchedRegion = regions[0]; // default US

      if (tz.includes('Dhaka') || tz.includes('Asia/Dhaka') || locale.includes('BN') || locale.includes('bn')) {
        matchedRegion = regions.find(r => r.id === 'bd') || regions[0];
      } else if (tz.includes('Sydney') || tz.includes('Melbourne') || tz.includes('Australia') || locale.includes('AU') || locale.includes('au')) {
        matchedRegion = regions.find(r => r.id === 'au') || regions[0];
      } else if (tz.includes('Toronto') || tz.includes('Vancouver') || tz.includes('Canada') || locale.includes('CA') || locale.includes('ca')) {
        matchedRegion = regions.find(r => r.id === 'ca') || regions[0];
      } else if (
        tz.includes('Europe') || tz.includes('Berlin') || tz.includes('Paris') || tz.includes('Frankfurt') ||
        tz.includes('London') || tz.includes('Madrid') || tz.includes('Rome') || tz.includes('Amsterdam')
      ) {
        matchedRegion = regions.find(r => r.id === 'eu') || regions[0];
      }

      setSelectedRegion(matchedRegion);
      setAutoDetected(true);
      applyGeoSeoMetadata(matchedRegion);
    } catch (e) {
      // Fallback silently to US
      applyGeoSeoMetadata(regions[0]);
    }
  }, []);

  // Synchronize on external changes (like URL change parsing in SEOManager)
  useEffect(() => {
    const handleRegionChange = (e: Event) => {
      const customEvent = e as CustomEvent<RegionConfig>;
      if (customEvent.detail && customEvent.detail.id !== selectedRegion.id) {
        setSelectedRegion(customEvent.detail);
        setAutoDetected(false);
      }
    };
    window.addEventListener('nonacrypt-region-changed', handleRegionChange);
    return () => {
      window.removeEventListener('nonacrypt-region-changed', handleRegionChange);
    };
  }, [selectedRegion]);

  const selectRegion = (reg: RegionConfig) => {
    setSelectedRegion(reg);
    setAutoDetected(false);
    applyGeoSeoMetadata(reg);
    
    // Dispatch a custom window event so other components (Pricing, Contacts, Product pages)
    // can adapt their UI dynamically!
    const event = new CustomEvent('nonacrypt-region-changed', { detail: reg });
    window.dispatchEvent(event);
  };

  const applyAutoTranslation = (langCode: string) => {
    try {
      document.documentElement.lang = langCode;

      if (langCode === 'en') {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
        return;
      }

      const cookieValue = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/`;
      document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/`;

      let gElement = document.getElementById('google_translate_element');
      if (!gElement) {
        gElement = document.createElement('div');
        gElement.id = 'google_translate_element';
        gElement.setAttribute('style', 'display:none !important; visibility:hidden !important; position:absolute; top:-9999px;');
        document.body.appendChild(gElement);
      }

      if (!(window as any).googleTranslateElementInit) {
        (window as any).googleTranslateElementInit = () => {
          try {
            new (window as any).google.translate.TranslateElement({
              pageLanguage: 'en',
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          } catch (err) {
            console.error('[NonaCrypt-Translate] Init error:', err);
          }
        };
      }

      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
      }

      if (!document.getElementById('google-translate-cleaner-styles')) {
        const style = document.createElement('style');
        style.id = 'google-translate-cleaner-styles';
        style.innerHTML = `
          iframe.skiptranslate,
          .skiptranslate,
          .goog-te-banner-frame,
          .goog-te-banner-frame.skiptranslate,
          #goog-gt-tt,
          #goog-gt-tt.skiptranslate,
          .goog-te-balloon-frame,
          .goog-te-gadget,
          .goog-te-gadget-icon {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
          }
          body {
            top: 0px !important;
          }
          .goog-te-indent {
            margin-left: 0 !important;
          }
          font {
            background-color: transparent !important;
            box-shadow: none !important;
          }
        `;
        document.head.appendChild(style);
      }
    } catch (error) {
      console.error('[NonaCrypt-Translate] Auto-translation error:', error);
    }
  };

  const applyGeoSeoMetadata = (reg: RegionConfig) => {
    // 1. Dynamic document SEO title
    document.title = `NonaCrypt — Intelligence, Engineered (${reg.name})`;

    // 2. Head Description Metas
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', reg.seoDescription);

    // 3. Head Keywords Metas
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (!metaKeys) {
      metaKeys = document.createElement('meta');
      metaKeys.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeys);
    }
    metaKeys.setAttribute('content', `${reg.seoKeywords}, AI Platform, Predictive Analytics, NLP, Vision API, NonaCrypt`);

    // 4. Update Geotagging Tags
    const geoProps = [
      { name: 'geo.region', val: reg.geoRegion },
      { name: 'geo.placename', val: reg.geoPlacename },
      { name: 'geo.position', val: reg.geoPosition },
      { name: 'ICBM', val: reg.geoPosition.replace(';', ', ') }
    ];

    geoProps.forEach(prop => {
      let el = document.querySelector(`meta[name="${prop.name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', prop.name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', prop.val);
    });

    // 5. Update OpenGraph Protocols dynamically
    const ogProps = [
      { p: 'og:title', v: `NonaCrypt — Specialized Intel Platform (${reg.name})` },
      { p: 'og:description', v: reg.seoDescription }
    ];
    ogProps.forEach(prop => {
      let el = document.querySelector(`meta[property="${prop.p}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop.p);
        document.head.appendChild(el);
      }
      el.setAttribute('content', prop.v);
    });

    // 6. Dynamically update Structured JSON-LD schema
    let scriptSchema = document.getElementById('geo-targeted-schema');
    if (scriptSchema) {
      scriptSchema.remove();
    }
    scriptSchema = document.createElement('script');
    scriptSchema.id = 'geo-targeted-schema';
    scriptSchema.setAttribute('type', 'application/ld+json');
    scriptSchema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": `NonaCrypt (${reg.name} Regional Division)`,
      "url": "https://nonacrypt.com",
      "logo": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      "description": reg.seoDescription,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": reg.geoPlacename,
        "addressRegion": reg.geoRegion,
        "addressCountry": reg.id.toUpperCase() === 'EU' ? 'DE' : reg.id.toUpperCase()
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": parseFloat(reg.geoPosition.split(';')[0]),
        "longitude": parseFloat(reg.geoPosition.split(';')[1])
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": reg.hotline,
        "contactType": "technical support and enterprise sales",
        "email": "enterprise@nonacrypt.com",
        "availableLanguage": "English"
      }
    });
    document.head.appendChild(scriptSchema);

    // 7. Auto-Translation Feature trigger
    let targetLang = 'en';
    if (reg.id === 'bd') {
      targetLang = 'bn';
    } else if (reg.id === 'eu') {
      const locale = navigator.language.substring(0, 2).toLowerCase();
      if (['de', 'fr', 'es', 'it', 'nl', 'pl'].includes(locale)) {
        targetLang = locale;
      } else {
        targetLang = 'de';
      }
    } else if (reg.id === 'ca') {
      const locale = navigator.language.substring(0, 2).toLowerCase();
      if (locale === 'fr') {
        targetLang = 'fr';
      } else {
        targetLang = 'en';
      }
    } else {
      const locale = navigator.language.substring(0, 2).toLowerCase();
      if (['es', 'hi', 'zh', 'ja', 'ar', 'ru', 'pt'].includes(locale)) {
        targetLang = locale;
      }
    }
    applyAutoTranslation(targetLang);
  };

  return null;
}
