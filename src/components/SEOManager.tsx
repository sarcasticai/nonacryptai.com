import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { regions, RegionConfig } from './GeoSeoController';

// Detailed page-specific SEO structures
interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

const PAGE_METADATA: Record<string, PageSEOConfig> = {
  '/': {
    title: 'Architecting the Next Epoch of Intelligence',
    description: 'Enterprise-grade secure AI platform offering state-of-the-art predictive pipelines, deep natural language comprehension, and low-latency computer vision.',
    keywords: 'enterprise ai, predictive pipelines, deep neural clusters, sovereign large language models, machine learning infrastructure',
    ogTitle: 'NonaCrypt — Next-Gen Enterprise AI',
    ogDescription: 'Leverage specialized, isolated cloud-GPU models built securely for high-frequency predictive calculations.'
  },
  '/products': {
    title: 'Specialized Enterprise Neural Models',
    description: 'Explore the NonaCrypt neural software catalogue. Download weight maps, configure sandboxed APIs, and fine-tune proprietary classifiers.',
    keywords: 'ai model catalog, weights download, private model clusters, fine-tuning api, hsm training, large language model weights',
    ogTitle: 'NonaCrypt Product Catalog',
    ogDescription: 'Direct deployment weight-maps and secure APIs optimized for extreme performance.'
  },
  '/services': {
    title: 'Neural Engineering & Dedicated Platform Services',
    description: 'Professional AI consulting, legacy translation to LLMs, custom physical GPU container integrations, and 24/7 dedicated SOC2 command assistance.',
    keywords: 'neural engineering services, legacy model migration, custom gpu containerization, ai systems audit, soc2 platform assistance',
    ogTitle: 'NonaCrypt Cloud & Consultive Engineering',
    ogDescription: 'Accelerate your legacy applications via native deep-learning pipelines.'
  },
  '/industries': {
    title: 'Custom Sovereign AI Blueprints for Regulated Industries',
    description: 'Calibrate neural workloads specifically for finance order books, clinic memory bounds, seaport logistics, energy grid airgaps, and ITAR defense systems.',
    keywords: 'finance ai sandbox, medical image pipeline, logistics tracking, smart grid airgap, defense aerospace telemetry, itar artificial intelligence',
    ogTitle: 'NonaCrypt Sector-Specific AI Workload Specifications',
    ogDescription: 'Inspect direct vCPU allocations, FIPS 140 crypto standards, and sub-millisecond physical enclaves customized for regulated markets.'
  },
  '/foundational-models': {
    title: 'Foundational Models & Heavy Cognitive Weight Systems',
    description: 'Architecting enterprise-scale custom LLM configurations and heavy neural weights for safe, local deployment within isolated hardware enclaves.',
    keywords: 'foundational models, large language models, custom weights, neural weights, LLM deployment, isolated llm, heavy weights',
    ogTitle: 'NonaCrypt Foundational LLM Weights & Parameters',
    ogDescription: 'Deploy deep-learning architectures offline into secure HSM racks with absolute weights sovereignty.'
  },
  '/predictive-analytics': {
    title: 'High-Frequency Predictive Analytics & GNN Pipelines',
    description: 'Deploy severe multi-agent temporal modeling, real-time fraud forecasting, and graph neural network pipelines designed for 100% ephemeral memory nodes.',
    keywords: 'predictive analytics, time series forecasting, GNN pipeline, real time prediction, fraud detection ML, graph neural network',
    ogTitle: 'NonaCrypt High-Performance Predictive Engines',
    ogDescription: 'Process critical financial, agro, and trade indicators with sub-microsecond vector operations.'
  },
  '/nlp-automation': {
    title: 'Sovereign Document-Centric NLP Automation Pipelines',
    description: 'Extract, classify, and orchestrate unstructured documents, contracts, and filings entirely locally within hardware-guaranteed secure private enclaves.',
    keywords: 'sovereign nlp, text classification, private data ocr, document intel, localized llm nlp, contract parsing',
    ogTitle: 'NonaCrypt Isolated Language Comprehension APIs',
    ogDescription: 'Execute zero-state secure contract analysis and document intelligence without cloud data leaks.'
  },
  '/computer-vision': {
    title: 'Low-Latency Edge Computer Vision Systems & APIs',
    description: 'Monitor assembly queues, perform secure coordinate tracking, and verify visual authorizations at 120 FPS locally on rugged field-hardware.',
    keywords: 'edge vision, computer vision, spatial tracking, surveillance inspection, edge classification, real time image analysis',
    ogTitle: 'NonaCrypt Sovereign Spatial & Vision Systems',
    ogDescription: 'Deploy radiation-hardened or ruggedized vision algorithms directly on edge accelerators.'
  },
  '/security': {
    title: 'Sovereign VPC Networks, Zero-Leaking Policies & Keys',
    description: 'Industry-standard ISO/SOC2 compliant frameworks with isolated AWS/Azure/GCP tunnel peering, FIPS HSM keys, and GDPR compliant sovereign airgaps.',
    keywords: 'vpc peering ai, sovereign cloud, zero leaking model policy, hsm cryptography client key, secure isolated gpus',
    ogTitle: 'Enterprise Cryptography & Airgap Security',
    ogDescription: 'Complete compliance assurance. Your data is isolated and never used for basic training loops.'
  },
  '/about': {
    title: 'The PhDs, Researchers & Engineers Behind the Mission',
    description: 'Founded by senior AI scientists dedicated to executing complex, safe, high-consequence calculations for global scale enterprises.',
    keywords: 'ai research laboratory, phds neural network design, cognitive computing, machine intelligence safety, leadership team',
    ogTitle: 'NonaCrypt Pioneers of Intelligent Architecture',
    ogDescription: 'Meet the team defining the state-of-the-art parameters.'
  },
  '/contact': {
    title: 'Schedule Corporate AI Assessment & Sales Support',
    description: 'Connect directly with technical sales, claim specialized enterprise test credits, and architect your regional datacenter gateways.',
    keywords: 'technical sales team, enterprise integration credit, contact cognitive system expert',
    ogTitle: 'Contact NonaCrypt Enterprises',
    ogDescription: 'Receive custom telemetry and SLA pricing designs for your engineering group.'
  },
  '/careers': {
    title: 'Neural Research Positions & Core Systems Recruitment',
    description: 'We are recruiting world-class computer vision researchers, distributed training optimization experts, and privacy engineers.',
    keywords: 'ai systems engineering career, deep learning job, remote distributed compute recruitment',
    ogTitle: 'Join the NonaCrypt Core Team',
    ogDescription: 'Open positions in neural synthesis, GPU low-level optimizations, and compliance isolation.'
  },
  '/partners': {
    title: 'Strategic System Integrators & Federated Alliances',
    description: 'Partner with NonaCrypt for direct neural distribution, co-development opportunities, and client system retrofittings.',
    keywords: 'strategic technology partnership, corporate system integrator, federated cognitive modeling',
    ogTitle: 'NonaCrypt Partner Ecosystem',
    ogDescription: 'Empower clients with integrated, state-of-the-art secure inference speeds.'
  },
  '/privacy': {
    title: 'Customer Data Shield Privacy & Isolated Transit Policy',
    description: 'Review our cryptographic customer privacy pledges, end-to-end telemetry anonymizers, and regulatory compliance protocols.',
    keywords: 'consumer data policy, gdpr data controller, anonymizer algorithms, compliance encryption rights',
    ogTitle: 'Data Protection & Isolation Guidelines',
    ogDescription: 'How we enforce complete zero-trust constraints for all platform requests.'
  },
  '/terms': {
    title: 'Corporate Master Service Agreement & System Terms',
    description: 'Understand the legal frameworks, operational SLAs, usage constraints, and liability parameters governing NonaCrypt cloud assets.',
    keywords: 'master system service agreement, usage limits, operational liability parameters, cloud client terms',
    ogTitle: 'NonaCrypt Terms of Service',
    ogDescription: 'Read the standard customer licensing and model execution guidelines.'
  },
  '/status': {
    title: 'Operational Infrastructure & Datacenter Cluster Status',
    description: 'View real-time heartbeats, core model inferences speed logs, active GPU partition loads, and regional platform latencies.',
    keywords: 'server uptime monitors, GPU system load rate, api ping performance logs',
    ogTitle: 'NonaCrypt Network Telemetry Monitor',
    ogDescription: 'No active incidents. Our sovereign nodes are reporting operational status globally.'
  },
  '/safety': {
    title: 'AI Safety, Alignment & Adversarial Defense Policies',
    description: 'Learn about our rigorous security and machine learning alignment protocols, zero-knowledge filters, and automated adversarial resistance testing checks.',
    keywords: 'ai alignment, machine learning safety model, red teaming, prompt injection defender compliance protocol, adversarial defense engineering',
    ogTitle: 'Sovereign AI Ethics & System Alignment Standards',
    ogDescription: 'Absolute security, rigorous verification, and standard isolation defenses.'
  },
  '/sla': {
    title: 'Enterprise SLAs, Guaranteed Latency & Uptime Commits',
    description: 'Explore our direct performance commitments, guaranteed sub-50ms inference delays, and live redundant failover cluster routing frameworks.',
    keywords: 'ai cloud sla, latency guarantee, sub-50ms token delay, disaster recovery rto, hardware hsm availability',
    ogTitle: 'Enterprise Performance Service Level Agreements',
    ogDescription: 'Contractually backed uptime targets, scale throughput capacities, and NOC escorts.'
  }
};

export default function SEOManager() {
  const location = useLocation();
  const params = useParams();
  const [currentRegion, setCurrentRegion] = useState<RegionConfig>(regions[0]);

  // Read saved region from query param or localStorage or default on load
  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const regionParam = searchParams.get('region');
      if (regionParam) {
        const found = regions.find(r => r.id === regionParam.toLowerCase());
        if (found) {
          setCurrentRegion(found);
          localStorage.setItem('nonacrypt-selected-region', found.id);
          // dispatch event to sync up dropdown controller
          const event = new CustomEvent('nonacrypt-region-changed', { detail: found });
          window.dispatchEvent(event);
        }
      } else {
        const saved = localStorage.getItem('nonacrypt-selected-region');
        if (saved) {
          const found = regions.find(r => r.id === saved);
          if (found) {
            setCurrentRegion(found);
          }
        }
      }
    } catch (e) {
      // Passive fallback
    }
  }, [location.search]);

  // Sync state with global changes
  useEffect(() => {
    const handleRegionChange = (e: Event) => {
      const customEvent = e as CustomEvent<RegionConfig>;
      if (customEvent.detail && customEvent.detail.id !== currentRegion.id) {
        setCurrentRegion(customEvent.detail);
        localStorage.setItem('nonacrypt-selected-region', customEvent.detail.id);
      }
    };

    window.addEventListener('nonacrypt-region-changed', handleRegionChange);
    return () => {
      window.removeEventListener('nonacrypt-region-changed', handleRegionChange);
    };
  }, [currentRegion]);

  useEffect(() => {
    // 1. Resolve active path metadata
    const path = location.pathname;
    let pageMeta = PAGE_METADATA[path];

    // Handle dynamic product / service details dynamically
    if (!pageMeta) {
      if (path.startsWith('/products/')) {
        const productId = params.id || 'product';
        const prettyId = productId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        pageMeta = {
          title: `Configure ${prettyId} Core Model Details`,
          description: `Custom-tailor weight sizes, evaluate active inference delays, and initialize HSM API scopes for ${prettyId} in ${currentRegion.name}.`,
          keywords: `${productId} weights, fine tune ${productId}, low load ${productId}, model gateway integration`,
          ogTitle: `${prettyId} Integration Hub`,
          ogDescription: `Configure compliant execution properties for ${prettyId}.`
        };
      } else if (path.startsWith('/services/')) {
        const serviceId = params.id || 'service';
        const prettyId = serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        pageMeta = {
          title: `Technical Specifications for ${prettyId} Engineering`,
          description: `Engage high-availability systems engineers to deploy, containerize, or audit ${prettyId} parameters for your team.`,
          keywords: `custom ${serviceId}, integrate ${serviceId} enterprise, physical server deployment ${serviceId}`,
          ogTitle: `${prettyId} Architecture Outline`,
          ogDescription: `Detailed service capabilities and expert staffing for ${prettyId}.`
        };
      } else {
        // Core fallback
        pageMeta = PAGE_METADATA['/'];
      }
    }

    // Combine with selected region settings for extreme geological SEO optimization!
    const siteTitle = `NonaCrypt — ${pageMeta.title} (${currentRegion.name})`;
    const fullKeywords = `${pageMeta.keywords}, ${currentRegion.seoKeywords}, NonaCrypt ${currentRegion.name}, Sovereign AI Hosting`;
    const fullDescription = `${currentRegion.flag} [Geotargeted for ${currentRegion.name}] ${pageMeta.description}`;

    // Apply basic main document metadata
    document.title = siteTitle;

    // Generalized DOM element creator/updater to handle meta, links and other SEO tags
    const updateOrCreateElement = (tagName: string, attributes: Record<string, string>, searchSelector: string) => {
      let el = document.querySelector(searchSelector);
      if (!el) {
        el = document.createElement(tagName);
        document.head.appendChild(el);
      }
      Object.entries(attributes).forEach(([k, v]) => el?.setAttribute(k, v));
      return el;
    };

    updateOrCreateElement('meta', { name: 'description', content: fullDescription }, 'meta[name="description"]');
    updateOrCreateElement('meta', { name: 'keywords', content: fullKeywords }, 'meta[name="keywords"]');
    updateOrCreateElement('meta', { name: 'robots', content: 'index, follow' }, 'meta[name="robots"]');

    // Geographic tags
    updateOrCreateElement('meta', { name: 'geo.region', content: currentRegion.geoRegion }, 'meta[name="geo.region"]');
    updateOrCreateElement('meta', { name: 'geo.placename', content: currentRegion.geoPlacename }, 'meta[name="geo.placename"]');
    updateOrCreateElement('meta', { name: 'geo.position', content: currentRegion.geoPosition }, 'meta[name="geo.position"]');
    updateOrCreateElement('meta', { name: 'ICBM', content: currentRegion.geoPosition.replace(';', ', ') }, 'meta[name="ICBM"]');

    // Canonical link tag dynamic synchronization
    const currentCanonicalUrl = `https://nonacrypt.ai${location.pathname}`;
    updateOrCreateElement('link', { rel: 'canonical', href: currentCanonicalUrl }, 'link[rel="canonical"]');

    // Clean up existing hreflangs first to prevent stacking duplication
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    // Create hreflang alternate links for country targeting
    regions.forEach(r => {
      const lang = r.id === 'us' ? 'en-US' : r.id === 'bd' ? 'bn-BD' : r.id === 'ca' ? 'en-CA' : r.id === 'au' ? 'en-AU' : 'en-DE';
      const alternateUrl = `https://nonacrypt.ai${location.pathname}?region=${r.id}`;
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang.toLowerCase());
      link.setAttribute('href', alternateUrl);
      document.head.appendChild(link);
    });

    // Add x-default alternate
    const xDefaultLink = document.createElement('link');
    xDefaultLink.setAttribute('rel', 'alternate');
    xDefaultLink.setAttribute('hreflang', 'x-default');
    xDefaultLink.setAttribute('href', `https://nonacrypt.ai${location.pathname}`);
    document.head.appendChild(xDefaultLink);

    // Open Graph standard protocols for fast social platform indexing (Linkedin, Facebook, Slack etc.)
    const ogTitleText = `NonaCrypt | ${pageMeta.ogTitle} (${currentRegion.id.toUpperCase()})`;
    updateOrCreateElement('meta', { property: 'og:title', content: ogTitleText }, 'meta[property="og:title"]');
    updateOrCreateElement('meta', { property: 'og:description', content: pageMeta.ogDescription }, 'meta[property="og:description"]');
    updateOrCreateElement('meta', { property: 'og:url', content: currentCanonicalUrl }, 'meta[property="og:url"]');
    updateOrCreateElement('meta', { property: 'og:type', content: 'website' }, 'meta[property="og:type"]');
    updateOrCreateElement('meta', { property: 'og:image', content: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80' }, 'meta[property="og:image"]');
    updateOrCreateElement('meta', { property: 'og:site_name', content: 'NonaCrypt' }, 'meta[property="og:site_name"]');
    updateOrCreateElement('meta', { property: 'og:locale', content: currentRegion.id === 'us' ? 'en_US' : currentRegion.id === 'bd' ? 'bn_BD' : 'en_GB' }, 'meta[property="og:locale"]');

    // Twitter / X protocols for live posts previews
    updateOrCreateElement('meta', { name: 'twitter:card', content: 'summary_large_image' }, 'meta[name="twitter:card"]');
    updateOrCreateElement('meta', { name: 'twitter:title', content: ogTitleText }, 'meta[name="twitter:title"]');
    updateOrCreateElement('meta', { name: 'twitter:description', content: pageMeta.ogDescription }, 'meta[name="twitter:description"]');
    updateOrCreateElement('meta', { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630&q=80' }, 'meta[name="twitter:image"]');

    // Dynamically insert structured schema script
    let schemaScript = document.getElementById('router-active-jsonld') as HTMLScriptElement;
    if (schemaScript) {
      schemaScript.remove();
    }
    schemaScript = document.createElement('script');
    schemaScript.id = 'router-active-jsonld';
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": siteTitle,
      "description": fullDescription,
      "url": `https://nonacrypt.ai${location.pathname}`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "NonaCrypt AI",
        "url": "https://nonacrypt.ai"
      },
      "provider": {
        "@type": "Corporation",
        "name": "NonaCrypt",
        "logo": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Enterprise Engineering Teams, CTOs, CIOs"
      }
    });
    document.head.appendChild(schemaScript);

    // Logging for diagnostics without pollution
    console.log(`[SEO-AUTOMATION] Fast indexed page: ${location.pathname} (${currentRegion.id.toUpperCase()})`);

  }, [location.pathname, params.id, currentRegion]);

  return null; // Side-effect executor only
}
