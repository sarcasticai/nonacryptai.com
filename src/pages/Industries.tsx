import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, AnimatePresence 
} from 'motion/react';
import { 
  Shield, Globe, ArrowRight, Zap, Cpu, BarChart3, 
  HelpCircle, Sparkles, DollarSign, Heart, Sprout, 
  Truck, Database, MessageSquare, ShoppingBag, 
  MapPin, CheckCircle, Orbit, Network, Layers3, Flame,
  WifiOff, X, Sliders, Lock, Workflow, Settings, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMetaTags, generateIndustryMeta } from '../hooks/useMetaTags';

// Generated Media Assets
import sovereignHeroImage from '../assets/images/sovereign_industries_hero_1779543588002.png';
import airgappedEnclaveIcon from '../assets/images/airgapped_enclave_node_1779543608291.png';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<any>;
  metric: string;
  metricLabel: string;
  description: string;
  geoTarget: string;
  complianceStandards: string[];
  useCases: string[];
  gradient: string;
  supportsAirgapped: boolean;
  airgappedBenefits: string;
  // Extended technical & regulatory specifications for the detailed modal
  hardwareSpecs: {
    cpuAlloc: string;
    memoryEnclave: string;
    encryption: string;
    latencyCeiling: string;
    bandwidth: string;
    isolationType: string;
  };
  detailedCompliance: {
    auditFrequency: string;
    controlStandard: string;
    authorityBody: string;
    penaltyRating: string;
    auditProcedure: string;
  };
  operationalSafety: {
    dataRetention: string;
    failoverTime: string;
    modelPruning: string;
  };
}

const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: 'fintech',
    name: 'Quantitative Fintech',
    tagline: 'High-frequency sovereign anomaly detection & secure transaction routing.',
    icon: DollarSign,
    metric: '99.999%',
    metricLabel: 'SLA Trade Assurance',
    description: 'Protect quantitative trading funds, digital assets, and high-volume bank clearance channels. Execute local ledger vector scoring through sovereign enclaves without routing customer order books over public cloud networks.',
    geoTarget: 'Wall Street (US-East), London (UK-South), Frankfurt (EU-Central), Singapore (SG-East)',
    complianceStandards: ['SEC Rule 17a-4', 'PCI-DSS v4.0', 'EU DORA Act', 'SOC 2 Type II'],
    useCases: [
      'Low-latency market fraud analysis',
      'Encrypted ledger risk valuation',
      'Multi-million dollar transaction leak gating'
    ],
    gradient: 'from-blue-500/20 via-cyan-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Enforces local zero-latency ledger ledger execution with zero external metadata routing, protecting quantitative order books from inter-market clearance leakage.',
    hardwareSpecs: {
      cpuAlloc: '64 Dedicated vCPU Threads per Sandbox',
      memoryEnclave: '512 GB Unified High-Bandwidth HBM3 Enclave Node',
      encryption: 'AES-GCM-256 with Quantum-Resistant Key Wrap (FIPS 140-3 L4)',
      latencyCeiling: 'Latency ceiling < 240μs under 5,000 parallel requests',
      bandwidth: 'Direct Dedicated 100 Gbps network-isolated bypass link',
      isolationType: 'Hyper-Isolated physical hardware core partitioning'
    },
    detailedCompliance: {
      auditFrequency: 'Continuous Algorithmic Telemetry & Automatic Zero-Log Purges',
      controlStandard: 'Standardized SOC 2 Common Criteria & DORA Rule 18 Security Gating',
      authorityBody: 'Monthly automated compliance self-attestation with permanent immutable cryptographic signatures',
      penaltyRating: 'Zero exposure tier - Designed to mitigate SEC 17a-4 breach liabilities',
      auditProcedure: 'Live digital signature handshakes for every weights access session, fully audited'
    },
    operationalSafety: {
      dataRetention: 'Zero retention. 100% ephemeral processing in volatile physical L3 memory cache',
      failoverTime: '< 12ms Hot-swappable active-active fallback node replication',
      modelPruning: 'Hardware-optimized 4-bit PEFT quantization dynamically pruned for extreme clock speeds'
    }
  },
  {
    id: 'healthcare',
    name: 'Sovereign Healthcare',
    tagline: 'Confidential clinical intelligence & diagnostic enclaves.',
    icon: Heart,
    metric: 'Zero-Leak',
    metricLabel: 'Patient Telemetry Trust',
    description: 'Deploy advanced multi-agent diagnostic layers directly inside local hospital network enclaves. Keep highly sensitive medical histories and custom imaging vectors shielded inside secure, airgapped physical memory bounds.',
    geoTarget: 'Zurich (CH-West), Boston (US-East), Tokyo (JA-North)',
    complianceStandards: ['HIPAA Omnibus', 'EU GDPR Article 9', 'HITECH Act', 'HITRUST CSF'],
    useCases: [
      'Private clinical model weight scoring',
      'Confidential cohort data classification',
      'Localized diagnostic assist telemetry'
    ],
    gradient: 'from-emerald-500/20 via-teal-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Seals sensitive clinical intelligence models within secure physical hardware memory enclaves, blocking hospital intranet data leaks and complying with HIPAA/GDPR Article 9.',
    hardwareSpecs: {
      cpuAlloc: '32 Secure vCPU Threads per Isolated Ward Node',
      memoryEnclave: '256 GB Confidential Airgapped Hardware Enclave Space',
      encryption: 'Dual-Layer TLS 1.3 with AES-256-XTS physical page encryption',
      latencyCeiling: 'Sub-12ms pipeline validation limit for medical image telemetry',
      bandwidth: '10 Gbps completely local airgapped intranet pipeline',
      isolationType: 'Physical hypervisor-level memory sandbox completely detached from the internet'
    },
    detailedCompliance: {
      auditFrequency: 'Real-time HIPAA access-log verification & daily automated safety reports',
      controlStandard: 'HIPAA Security Safeguards Title 45 & GDPR Article 9 Explicit Gating Guidelines',
      authorityBody: 'Quarterly compliance proof generated locally via secure Intel SGX attestations',
      penaltyRating: 'Class-A Healthcare Privacy Enforcement Gating - mitigates HIPAA Title II civil penalties',
      auditProcedure: 'Token-based patient identity masking via local homomorphic noise addition'
    },
    operationalSafety: {
      dataRetention: 'Instant zero-state destruction upon inference release',
      failoverTime: '< 150ms state replication with passive grid redundancy',
      modelPruning: 'Sparsified diagnostic neural weights targeting low latency edge accelerators'
    }
  },
  {
    id: 'agro_logistics',
    name: 'Agro Logistics & AgTech',
    tagline: 'Precision field state estimation & localized harvest projections.',
    icon: Sprout,
    metric: '18% Yield',
    metricLabel: 'Logistics Waste Reduction',
    description: 'Optimize supply nodes and harvest distribution paths with localized compute grids. Integrate decentralized computer vision with drone imagery to dynamically monitor crop moisture and state vectors across rural zones.',
    geoTarget: 'Chicago (US-Midwest), São Paulo (BR-East), Melbourne (AU-South)',
    complianceStandards: ['EU Organic Law', 'USDA Harvest Traceability', 'AGRE-Data Accord'],
    useCases: [
      'Localized weather neural estimation',
      'Multispectral field pest identification',
      'Decentralized harvest shipping chains'
    ],
    gradient: 'from-amber-500/20 via-yellow-500/5 to-transparent',
    supportsAirgapped: false,
    airgappedBenefits: 'Agro logistics nodes standardly require constant connection to localized satellite positioning systems, thus running primarily in a multi-region active-sync hybrid state rather than 100% airgapped isolation.',
    hardwareSpecs: {
      cpuAlloc: '16 High-Efficiency Edge vCPU Threads per Station',
      memoryEnclave: '128 GB Standard Ruggedized Field Server Memory Capacity',
      encryption: 'AES-256-CBC with localized rotating sensor token handshakes',
      latencyCeiling: 'Sub-45ms spatial telemetry parsing limits for dense drone mapping',
      bandwidth: 'Integrated high-gain LoRaWAN and Starlink tracking mesh links',
      isolationType: 'Weather-hardened decentralized physical node positioning array'
    },
    detailedCompliance: {
      auditFrequency: 'Bi-annual audit reviews aligning with harvest cycles',
      controlStandard: 'USDA Organic Agriculture Traceability Standard & GDPR Location protection protocols',
      authorityBody: 'Independent organic farm certification bodies with local on-site diagnostic reads',
      penaltyRating: 'Standard logistical tracking penalty protection - prevents shipping contract violations',
      auditProcedure: 'Encrypted geographical coordinate tracking with random hashing to obfuscate precise farm boundaries'
    },
    operationalSafety: {
      dataRetention: '7-day localized buffering for flight telemetry and drone frames, then automatic sweep of metadata',
      failoverTime: '< 5.2 seconds dynamic mesh node fallback in case of regional starlink outages',
      modelPruning: 'MobileNet-class light visual weight quantizations deploying to physical field boards'
    }
  },
  {
    id: 'supply_chain',
    name: 'Global Supply Chain',
    tagline: 'Intelligent freight parsing & multimodal route optimization.',
    icon: Truck,
    metric: '4.2 Hrs',
    metricLabel: 'Average Custom Delay Avoided',
    description: 'Automate high-density logistical paperwork classification and route optimization. Process complex shipping manifesting papers via secure local NLP parsing enclaves to bypass legacy database friction limits.',
    geoTarget: 'Rotterdam (EU-West), Shanghai (CN-East), Los Angeles (US-West)',
    complianceStandards: ['C-TPAT Authorized', 'EU Authorized Economic Operator', 'WCO SAFE Framework'],
    useCases: [
      'Automated global customs bill of lading parsing',
      'Predictive intermodal container delay tracking',
      'Airgapped freight manifests validation'
    ],
    gradient: 'from-indigo-500/20 via-blue-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Secures and isolates manifesting paperwork classifications completely offline on rugged edge gateways, preventing operational downtime from seaport disruptions.',
    hardwareSpecs: {
      cpuAlloc: '32 Dedicated vCPU Threads per Logistics Interface',
      memoryEnclave: '256 GB Seaport Edge Server RAM Partition',
      encryption: 'AES-GCM-256 wrapping customs XML payloads',
      latencyCeiling: 'Sub-18ms time-series logistics anomaly classification',
      bandwidth: 'High-speed local network bypass routing seaport data lanes',
      isolationType: 'Isolated port terminal hardware stack completely independent of municipal networks'
    },
    detailedCompliance: {
      auditFrequency: 'Continuous automated validation of customs declaration integrity checks',
      controlStandard: 'WCO (World Customs Organization) SAFE Framework cybersecurity annex guidance',
      authorityBody: 'Joint maritime security audits and shipping operator compliance verification',
      penaltyRating: 'High-tier trade penalty protection - prevents freight holdups and demurrage charges',
      auditProcedure: 'Verifiable cryptographic container manifest stamps generated on local edge HSMs'
    },
    operationalSafety: {
      dataRetention: 'Log processing holds for full transit duration, automatically pruned upon customs clearance handshakes',
      failoverTime: '< 450ms redundant terminal server transition',
      modelPruning: 'Optimized attention heads configured for rapid structural text analysis and parsing'
    }
  },
  {
    id: 'energy',
    name: 'Energy & Smart Grids',
    tagline: 'Predictive localized power shedding & neural estimators.',
    icon: Zap,
    metric: '92.4%',
    metricLabel: 'Load Distribution Accuracy',
    description: 'Protect physical infrastructure grids from blackouts and distribution loads. NonaCrypt edge models constantly evaluate grid statuses, optimizing power allocations locally without creating exposed central server attack paths.',
    geoTarget: 'Houston (US-South), Berlin (EU-East), Riyadh (ME-Central)',
    complianceStandards: ['NERC CIP v6', 'EU NIS 2 Directive', 'IEEE Smart Grid Standard'],
    useCases: [
      'Real-time physical substation fault predictive grading',
      'Dynamic low-overhead battery cell discharge balancing',
      'Secure grid cyber threat indicator analysis'
    ],
    gradient: 'from-orange-500/20 via-red-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Ensures smart grid predictive models run physically decoupled from public routes, protecting substations and physical grids from remote network cyberattacks.',
    hardwareSpecs: {
      cpuAlloc: '48 Heavy-Duty vCPU Threads per Substation Enclave',
      memoryEnclave: '384 GB Hardened Industrial Memory System with ECC fault-correction',
      encryption: 'FIPS 140-3 Level 3 encryption with physical tamper detection self-destruct',
      latencyCeiling: 'Latency < 1.5ms for power system tripping and critical load shedding',
      bandwidth: 'Direct serial fiber loops decoupled from public DNS routing',
      isolationType: 'Critical infrastructure control room mechanical airgap'
    },
    detailedCompliance: {
      auditFrequency: '24/7 continuous network signal analysis & automated intrusion audits',
      controlStandard: 'NERC Critical Infrastructure Protection (CIP) standards v6 checklist',
      authorityBody: 'National grid authority regulatory spot-checks and cyber preparedness trials',
      penaltyRating: 'Critical Infrastructure Tier - avoids federal power grid security downtime liabilities',
      auditProcedure: 'Hardware-level diagnostic logs hashed onto a offline cold ledger backup'
    },
    operationalSafety: {
      dataRetention: 'Ephemeral sensory data discarded every 60 seconds; static summaries stored on encrypted local SSDs',
      failoverTime: '< 2ms mechanical switchover bypass with zero drop in load forecasting frequency',
      modelPruning: 'Ultra-low overhead convolutional nets optimized for microcontrollers and edge hardware'
    }
  },
  {
    id: 'space_aerospace',
    name: 'Space & Orbital Systems',
    tagline: 'Radiation-hardened satellite telemetry enclaves.',
    icon: Orbit,
    metric: '6.8ms',
    metricLabel: 'Orbital Collision Warning',
    description: 'Deploy defensive telemetry processing models onto orbital payloads and satellite architectures. Keep crucial tracking metrics offline, running trajectory anomalies inside radiation-shielded edge chips without ground station lag.',
    geoTarget: 'Low Earth Orbit (LEO-Alpha), Cape Canaveral (US-South), French Guiana (EU-Guiana)',
    complianceStandards: ['ITAR Compliant', 'Defense FAR Supplement', 'ECSS Space Standards'],
    useCases: [
      'Real-time orbital anomaly trajectory tracking',
      'On-satellite sensor noise parsing and filtering',
      'Downlink network crypto gateway verification'
    ],
    gradient: 'from-purple-500/20 via-indigo-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Deploys localized trajectory anomaly scoring onto radiation-hardened edge chips. Zero ground communication is required, securing payloads against orbit spoofing and cyber-hijacking.',
    hardwareSpecs: {
      cpuAlloc: '16 Radiation-Hardened Aerospace-Grade vCPU Cores',
      memoryEnclave: '64 GB Error-Correcting Space-Certified Memory Module',
      encryption: 'Highly-dense FPGA-based cryptographic payload enclaves',
      latencyCeiling: 'Sub-1ms telemetry sensor polling rate under high orbital velocity',
      bandwidth: 'High-frequency military-band downlink telemetry bypass channels',
      isolationType: 'Orbital vacuum physical separation with localized non-volatile storage enclaves'
    },
    detailedCompliance: {
      auditFrequency: 'Automated on-orbit telemetry consistency checking & diagnostic sensor audits',
      controlStandard: 'ITAR Title 22 (International Traffic in Arms Regulations) and aerospace guidelines',
      authorityBody: 'Sovereign Space Command operations desk and national space security agencies',
      penaltyRating: 'Defense ITAR Category XV Gating compliance - prevents critical technology export breaches',
      auditProcedure: 'Strict encrypted telemetry challenge-response loops verifying orbital terminal authenticity'
    },
    operationalSafety: {
      dataRetention: 'All raw camera sensor tracking data pruned instantly after trajectory vector validation',
      failoverTime: '< 10ms secondary orbital chip hot standby transition',
      modelPruning: 'Symmetric matrix compression optimized to withstand heavy cosmic ray single-event upsets'
    }
  },
  {
    id: 'communication',
    name: 'High-Volume Telecom',
    tagline: 'Airgapped network parsing & packet categorization.',
    icon: Network,
    metric: '4.8M/sec',
    metricLabel: 'Token Telemetry Processing',
    description: 'Extract multi-language content categories, intent records, and caller metadata safely. NonaCrypt cryptographic enclaves guarantee packet payload confidentiality, bypassing centralized cloud storage networks completely.',
    geoTarget: 'Tokyo (JA-East), Toronto (CA-East), Sydney (AU-East)',
    complianceStandards: ['FCRA Mandate', 'FCC Telecommunications Core', 'EU ePrivacy Directive'],
    useCases: [
      'Secure real-time audio routing classification',
      'Spam voice footprint vector identification',
      'Decentralized metadata routing'
    ],
    gradient: 'from-rose-500/20 via-pink-500/5 to-transparent',
    supportsAirgapped: true,
    airgappedBenefits: 'Guarantees voice packet payload confidentiality by isolating speech transcription enclaves locally, complying strictly with ePrivacy directive and FCRA mandates without keeping logs.',
    hardwareSpecs: {
      cpuAlloc: '128 High-Throughput Network vCPU Threads',
      memoryEnclave: '1,024 GB (1TB) Extreme-Latency DDR5 Telecom Buffer Node',
      encryption: 'IPS-grade bulk packet payload wire encryption at line rate',
      latencyCeiling: 'Under 800μs text vectorization processing latency limits',
      bandwidth: 'Direct dark fiber terminal ingress routing 100M tokens/min',
      isolationType: 'Telecom-grade isolated switching rack partitions'
    },
    detailedCompliance: {
      auditFrequency: 'Microsecond packet inspection drift checking with no intermediate storage',
      controlStandard: 'FCC Telecommunications Act Annex C & European Union ePrivacy Directive protocols',
      authorityBody: 'National communications regulators and corporate data protection panels',
      penaltyRating: 'Massive telecom scope privacy protection - guards against astronomical ePrivacy class fines',
      auditProcedure: 'Zero-knowledge pipeline audits proving network switches do not cache verbal audio vectors'
    },
    operationalSafety: {
      dataRetention: '100% ephemeral processing. Data frames are systematically overwritten in volatile RAM within milliseconds',
      failoverTime: '< 1ms optical hardware switch bypass in continuous active-backup mode',
      modelPruning: 'Ultra-fast optimized transformer heads trained strictly for lightweight packet classification'
    }
  },
  {
    id: 'ecommerce',
    name: 'Federated E-commerce',
    tagline: 'Sovereign consumer vector scoring & Zero-Retention catalog matching.',
    icon: ShoppingBag,
    metric: '42%',
    metricLabel: 'Recommendation Conversion Gain',
    description: 'Deliver hyper-personalized retail recommendations without storing individual client browser history. Run real-time affinity scoring within localized micro-node enclaves, keeping client profiles fully decentralized and private.',
    geoTarget: 'Paris (EU-West), Seoul (KR-East), San Francisco (US-West)',
    complianceStandards: ['CCPA Privacy Shield', 'EU GDPR Article 6', 'COPPA Compliant'],
    useCases: [
      'Decentralized product catalog matches',
      'Fraudulent transactional pattern checks',
      'On-device user behavioral profiling'
    ],
    gradient: 'from-violet-500/20 via-fuchsia-500/5 to-transparent',
    supportsAirgapped: false,
    airgappedBenefits: 'Sovereign conversion recommendation models require dynamic catalog synchronizations with global web endpoints to display real-time inventory levels, preventing pure deep airgapped operations.',
    hardwareSpecs: {
      cpuAlloc: '24 Elastic Compute vCPU Threads',
      memoryEnclave: '128 GB Low-overhead High-Latency Vector Buffer Space',
      encryption: 'Standard TLS 1.3 with localized client-side cookie hashing key-stores',
      latencyCeiling: 'Sub-30ms recommendation pipeline response rendering in-page',
      bandwidth: 'Standard elastic cloud API ingress with DDoS protection scrubbing',
      isolationType: 'Sandboxed virtual tenants physically divided inside multi-tenant hosting environments'
    },
    detailedCompliance: {
      auditFrequency: 'Automated privacy audits verifying customer behavior deletion logs weekly',
      controlStandard: 'CCPA Consumer Privacy Protection standard and GDPR Consent rule Article 6 compliance',
      authorityBody: 'Sovereign consumer protection agencies and internal auditing dashboards',
      penaltyRating: 'Consumer privacy compliance - avoids GDPR class administrative penalties up to 4% global turnover',
      auditProcedure: 'Federated gradient verification loops confirming consumer weights remain on mobile devices'
    },
    operationalSafety: {
      dataRetention: 'Behavioral logs kept in user memory nodes strictly, zero centralized browser history mapping',
      failoverTime: '< 200ms DNS cloud routing failover bypass',
      modelPruning: 'Low-latency matrix embedding models highly sparsified for swift in-browser calculations'
    }
  }
];

// Geo Compliance Regions for SEO & Geo-friendly interactive simulator
interface GeoRegion {
  id: string;
  name: string;
  centerName: string;
  pingTime: string;
  complianceSuite: string[];
  description: string;
  status: 'Active' | 'Deploying' | 'Backup';
  keywords: string[];
}

const GEO_REGIONS: GeoRegion[] = [
  {
    id: 'us_east',
    name: 'North America Sovereign East',
    centerName: 'Northern Virginia Sovereign Rack',
    pingTime: '8.4 ms',
    complianceSuite: ['FedRAMP High', 'HIPAA compliant', 'CCPA/COPA Secure', 'SOC2 Type II'],
    description: 'High-frequency enclave with redundant bare-metal HGX servers. Serving critical Wall Street nodes and federal agencies with low-latency private security.',
    status: 'Active',
    keywords: ['US Federal Security', 'HIPAA Secure Cloud', 'Sovereign Wall St ML', 'Airgapped US-East Node']
  },
  {
    id: 'eu_central',
    name: 'European Union Sovereign Central',
    centerName: 'Frankfurt GNN Assembly Line',
    pingTime: '12.1 ms',
    complianceSuite: ['GDPR compliant', 'EU DORA Standard', 'NIS 2 Certified', 'EBA Guidelines'],
    description: 'Data-residency locked node. Guarantees 100% regional containment. No outbound logs ever cross the European borders, meeting ultimate sovereign regulatory guidelines.',
    status: 'Active',
    keywords: ['GDPR Compliant ML', 'EU DORA AI Models', 'Frankfurt Sovereign Host', 'Deutsch Secure Inference']
  },
  {
    id: 'apac_east',
    name: 'Asia Pacific Sovereign East',
    centerName: 'Singapore High-Throughput Cluster',
    pingTime: '15.2 ms',
    complianceSuite: ['MAS Guidelines', 'APEC CBPR', 'PDPA Compliant', 'Cybersecurity Act SG'],
    description: 'High-bandwidth gateway routing financial and industrial logistical telemetry. Isolated physically from multi-tenant generic hypervisors.',
    status: 'Active',
    keywords: ['Sovereign APAC AI', 'PDPA Cloud NLP', 'Singapore Low Latency Compute', 'Asia-East Secured GPU']
  },
  {
    id: 'me_central',
    name: 'Middle East Sovereign Central',
    centerName: 'Riyadh Smart Grid Array',
    pingTime: '22.3 ms',
    complianceSuite: ['SDAIA Guidelines', 'KSA Personal Data Protection', 'ADGM Regulations'],
    description: 'Dedicated custom energy and public infrastructure model computation system. Sandboxed with dedicated crypto keys generated locally within physical HSM boards.',
    status: 'Active',
    keywords: ['SDAIA AI Compliance', 'Riyadh Smart Grid ML', 'KSA Secure Data residency', 'Middle East AI Enclave']
  },
  {
    id: 'latam_south',
    name: 'South America Sovereign South',
    centerName: 'São Paulo Agro-Logistics Vault',
    pingTime: '28.1 ms',
    complianceSuite: ['LGPD Standard', 'BR Cybersecurity Strategy', 'ANPD Guidelines'],
    description: 'AgTech image recognition and logistical trajectory modeling server system. Dynamic failover node linked with localized agricultural visual networks.',
    status: 'Active',
    keywords: ['LGPD Algorithmic Audits', 'Brazil Agricultural AI', 'Mercosur Sovereign Hosting', 'Latam Edge Enclaves']
  },
];

export default function Industries() {
  const [activeSector, setActiveSector] = useState<string>('fintech');
  const [activeRegion, setActiveRegion] = useState<string>('us_east');
  const [activeToast, setActiveToast] = useState<{
    id: number;
    sectorName: string;
    benefits: string;
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedSector = INDUSTRIES_DATA.find(s => s.id === activeSector) || INDUSTRIES_DATA[0];
  const selectedRegion = GEO_REGIONS.find(r => r.id === activeRegion) || GEO_REGIONS[0];

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const sector = INDUSTRIES_DATA.find(s => s.id === activeSector);
    if (sector && sector.supportsAirgapped) {
      setActiveToast({
        id: Date.now(),
        sectorName: sector.name,
        benefits: sector.airgappedBenefits
      });
    } else {
      setActiveToast(null);
    }
  }, [activeSector]);

  useEffect(() => {
    if (!activeToast) return;
    const timer = setTimeout(() => {
      setActiveToast(null);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeToast]);

  // Dynamic meta tags generation triggered automatically on state change
  const seoConfig = generateIndustryMeta(selectedSector, selectedRegion);
  useMetaTags(seoConfig);

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden" id="industries_route_wrapper">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* SEO Friendly Canonical & Structured Data Hooks for Visual Density */}
      <div className="hidden">
        <h2>Sovereign Machine Learning and Private NLP Models by Industry Sector</h2>
        <p>Providing GDPR-compliant, HIPAA-certified, FedRAMP-grade local hardware enclaves for financial markets, aerospace platforms, telecom, smart grids, and healthcare data.</p>
        <p>Key Cities: New York, London, Frankfurt, Singapore, Tokyo, Riyadh, São Paulo, Zurich, Rotterdam.</p>
      </div>

      {/* Header Banner */}
      <div className="pt-32 pb-20 border-b border-slate-900 bg-[#080808]/60 relative z-10" id="industries_hero_header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 font-mono text-[10px] uppercase font-bold tracking-widest max-w-max animate-pulse">
                <Globe className="h-3.5 w-3.5" />
                Geographically Localized & Regulatory Compliant
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Sovereign AI Built for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                  Critical Industries
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-semibold">
                NonaCrypt delivers secure, local-tenancy containerized model parameters tailored for fields with zero margin for error. No third-party data caching, no compliance risks, with 100% geographic residency.
              </p>

              {/* Quick numbers bar - inline in the content column */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-900">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">99.999%</div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">SLA Uptime</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-mono">Sub-15ms</div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Latency Limit</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Sovereign State</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">Airgapped</div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Local Weight</div>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-blue-500/25 via-indigo-500/10 to-transparent border border-white/5 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay opacity-40"></div>
                <img 
                  src={sovereignHeroImage} 
                  alt="NonaCrypt Sovereign AI Industries Network" 
                  className="rounded-2.5xl w-full object-cover aspect-[4/3] scale-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-900/60 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] font-mono font-black tracking-widest text-blue-400 uppercase">Live Trace Network</span>
                    <span className="block text-xs font-bold text-white mt-0.5">Sovereign Cluster Node</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">Active Security</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Interactive Sectors Split Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20" id="industries_interactive_sectors_section">
        <div className="mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-extrabold block mb-2">Bespoke Frameworks</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Target Operational Sectors</h2>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed font-semibold">
            Click on any sector below to query validated latency bounds, sovereign deployment matrices, and active compliance standardizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sectors Selection Sidemenu (4 Columns) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {INDUSTRIES_DATA.map((sector) => {
              const Icon = sector.icon;
              const isActive = sector.id === activeSector;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive 
                      ? 'bg-gradient-to-r from-slate-900 to-slate-950 border-blue-500/40 text-white shadow-xl shadow-blue-500/5' 
                      : 'bg-slate-950/20 border-slate-900/80 text-slate-400 hover:bg-slate-900/20 hover:border-slate-800'
                  }`}
                  id={`btn_sector_select_${sector.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-all ${
                      isActive ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-950 text-slate-500 group-hover:text-slate-400'
                    }`}>
                      <Icon className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-white">{sector.name}</span>
                      <span className="text-[9px] text-slate-500 font-bold tracking-wider uppercase mt-0.5 block">{sector.metricLabel}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded ${
                    isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-[#0a0a0a] text-slate-600'
                  }`}>
                    {sector.metric}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Display HUD (8 Columns) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl border border-slate-900/90 bg-slate-950/30 backdrop-blur-md relative overflow-hidden" id="active_sector_hud_display">
            {/* Visual gradient backdrop based on active item */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-b ${selectedSector.gradient} blur-3xl pointer-events-none rounded-full`}></div>

            <div className="relative z-10 space-y-8">
              {/* Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-900">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-500/15 text-indigo-400 text-[9px] font-mono font-extrabold tracking-widest uppercase border border-indigo-500/30">
                      Validated Pipeline
                    </span>
                    <span className="text-[9px] font-mono text-slate-600 tracking-wider">SECURE-ENG-ID: {selectedSector.id.toUpperCase()}_NODE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight">{selectedSector.name}</h3>
                </div>
                
                <div className="text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 bg-[#010101]/40 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-slate-900 sm:border-transparent">
                  <div className="text-2xl font-black text-emerald-400 font-mono leading-none">{selectedSector.metric}</div>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block mt-1">{selectedSector.metricLabel}</span>
                </div>
              </div>

              {/* Tagline & main Description block */}
              <div className="space-y-4">
                <p className="text-base font-bold text-slate-200 tracking-wide line-clamp-2">
                  &ldquo;{selectedSector.tagline}&rdquo;
                </p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {selectedSector.description}
                </p>
              </div>

              {/* Dynamic checklist & layout parameters row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-900/80">
                
                {/* Use Cases */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-extrabold tracking-wider text-slate-500 uppercase block">Engine Deployment Use Cases</span>
                  <div className="flex flex-col gap-3">
                    {selectedSector.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-blue-500/15 text-blue-400 mt-0.5 shrink-0">
                          <CheckCircle className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs text-slate-350 font-semibold leading-relaxed">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance & Regions */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-extrabold tracking-wider text-slate-500 uppercase block">Certified Compliance Frameworks</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSector.complianceStandards.map((std) => (
                        <span key={std} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-300">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-900/40">
                    <span className="text-[9px] font-mono font-bold text-slate-650 tracking-wider">VERIFIED EDGE HOST CHANNELS</span>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">
                      {selectedSector.geoTarget}
                    </p>
                  </div>
                </div>

              </div>

              {/* Interactive playground redirect block */}
              <div className="p-6 rounded-2xl bg-[#080809] border border-slate-900 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-inner">
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                    <Shield className="h-3.5 w-3.5 animate-pulse" />
                    Interactive Blueprint Analyzer Ready
                  </div>
                  <h4 className="text-sm font-black text-white">Simulate workload parameters and audit compliance specifications</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed max-w-xl">
                    Inspect physical thread allocation, ephemeral volatile storage cycles, FIPS-140 encryption standards, and live latency curves tailored specifically for the {selectedSector.name} sector.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    id="btn_open_technical_blueprint"
                    className="cursor-pointer inline-flex h-10 items-center justify-center gap-2 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black transition-all shadow-md shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Sliders className="h-4 w-4" />
                    Inspect Technical Specs
                  </button>
                  <Link
                    to="/"
                    className="inline-flex h-10 items-center justify-center gap-2 px-4 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all"
                  >
                    Launch Workspace
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION: Geo-Compliance Latency Matrix & Local Optimizer Simulator (SEO Grounding) */}
      <section className="py-24 bg-[#080808] border-t border-slate-900/80 relative z-10" id="geo_latency_simulator_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-3 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/18 inline-block">Geo-Target Latency Matrix</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sovereign Regional Isolation
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed font-semibold text-sm sm:text-base">
              NonaCrypt guarantees physically isolated bare-metal HGX installations that adhere completely to localized regional regulatory privacy parameters. Click on any regional jurisdiction node to inspect compliant frameworks and ping times.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left selector col (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block">Edge Installation Regions</span>
              <div className="space-y-3">
                {GEO_REGIONS.map((region) => {
                  const isActive = region.id === activeRegion;
                  return (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isActive 
                          ? 'bg-gradient-to-r from-slate-900 to-slate-950 border-emerald-500/30 text-white shadow-xl shadow-emerald-500/5' 
                          : 'bg-slate-950/20 border-slate-900 text-slate-400 hover:bg-slate-900/20'
                      }`}
                      id={`btn_geo_select_${region.id}`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2.5">
                          <MapPin className={`h-4.5 w-4.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                          <span className="text-xs font-black text-white">{region.name}</span>
                        </div>
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-extrabold ${
                          isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-slate-600'
                        }`}>
                          {region.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-900/60 text-[10px]">
                        <span className="text-slate-500 font-bold font-mono">Guaranteed Ping Limit</span>
                        <span className="text-emerald-400 font-bold font-mono">{region.pingTime}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Simulator details HUD (7 Cols) */}
            <div className="lg:col-span-7 bg-[#0b0b0b]/80 border border-slate-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden" id="geo_simulation_hud_display">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none"></div>

              <div className="space-y-6">
                <div className="pb-4 border-b border-slate-900 flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-500">LOCAL GATEWAY SPECIFICATIONS</span>
                    <h4 className="text-sm font-extrabold text-white font-mono">{selectedRegion.centerName}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-emerald-400 font-extrabold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      PING: {selectedRegion.pingTime}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  {selectedRegion.description}
                </p>

                {/* Regulatory list */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono font-extrabold tracking-wider text-slate-500 uppercase block">Geo-Compliance Shield Regulatory Matrix</span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRegion.complianceSuite.map((comp) => (
                      <div key={comp} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-900">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                        <span className="text-[10px] font-mono font-bold text-slate-300">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Search / SEO Grounding index targets for dense technical visualization */}
                <div className="pt-4 border-t border-slate-900 space-y-2">
                  <span className="text-[9px] font-mono text-slate-600 font-bold uppercase tracking-widest block">INDEX SEO OPTIMIZATION TARGET FLAGS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRegion.keywords.map((kw, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded text-[8px] font-mono text-slate-500 border border-slate-900 bg-[#060606]">
                        #{kw.toLowerCase().replace(/\s+/g, '_')}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Call to action for localized cluster setups */}
              <div className="mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Need custom regional hardware hosting bounds? Contact our operations desk to register a localized enclave.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex h-9 items-center justify-center px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shrink-0 self-start sm:self-center"
                >
                  Contact Operations
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bespoke Industry Solution Call for Innovation Block */}
      <section className="py-24 bg-[#050505] relative z-10" id="bespoke_industry_innovation_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 to-[#0c0c0c] border border-slate-900 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="absolute top-[-30%] right-[-10%] w-96 h-96 bg-indigo-500/5 blur-[90px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col xl:flex-row items-start sm:items-center gap-8 max-w-3xl text-left">
              {/* Hardware visual asset representation */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-br from-indigo-500/40 via-purple-500/10 to-transparent border border-white/5 shrink-0 overflow-hidden relative group hidden sm:block">
                <img
                  src={airgappedEnclaveIcon}
                  alt="Airgapped hardware secure core enclaves chip micro architecture close up"
                  className="rounded-xl w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-550"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity"></div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
                  <Flame className="h-4.5 w-4.5 text-orange-400 shrink-0 select-none animate-pulse" />
                  And More Critical Domains
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Don't see your compliance domain listed?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-semibold">
                  NonaCrypt customizes secure weights and fine-tuning parameters for several high-stakes targets, including chemical manufacturing logistics, sovereign defense operations, marine routing corridors, and robotic edge manufacturing enclaves.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/services"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sm font-bold text-white px-6 transition-all"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-bold text-white px-6 shadow-xl shadow-blue-500/10 transition-all"
              >
                Schedule Custom Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Airgapped Mode Toast Notification */}
      <AnimatePresence>
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] sm:w-[400px] bg-[#0A0A0A]/95 border border-emerald-500/30 rounded-2xl p-5 shadow-[0_10px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(16,185,129,0.12)] backdrop-blur-xl flex gap-4 text-left group"
            id={`airgapped_toast_${activeToast.id}`}
          >
            {/* Left Column: Airgapped Icon Badge with glowing effect */}
            <div className="flex-shrink-0">
              <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <WifiOff className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0A0A]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                </span>
              </div>
            </div>

            {/* Middle Column: Text and Airgapped Benefits details */}
            <div className="flex-grow space-y-1.5 pr-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-black tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15">
                  Airgapped Active
                </span>
                <span className="text-[9px] font-mono text-slate-500">Uncompromised Sovereign ML</span>
              </div>
              
              <h4 className="text-xs font-black text-white">
                {activeToast.sectorName} Security Safeguard
              </h4>
              
              <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                {activeToast.benefits}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                <Shield className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>Complies with strict regional zero-leak policies</span>
              </div>
            </div>

            {/* Right Column: Interactive close target */}
            <div className="flex-shrink-0 self-start">
              <button 
                onClick={() => setActiveToast(null)}
                className="p-1 rounded-lg hover:bg-white/5 text-slate-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Dismiss toast"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Technical Specifications (Blueprint) Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10" id="technical_blueprint_modal_container">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="bg-[#09090a] border border-slate-800/80 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl shadow-blue-500/5 text-left flex flex-col"
              id="technical_blueprint_modal"
            >
              <div className="p-6 sm:p-8 flex-grow space-y-8 select-none">
                {/* Header Block */}
                <div className="flex items-start justify-between gap-6 border-b border-slate-900 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-blue-400">
                      {React.createElement(selectedSector.icon, { className: "h-6 w-6 shrink-0" })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#a5d6ff] uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          CODENAME: SECURE_CORE_{selectedSector.id.toUpperCase()}_v3
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">{selectedSector.name} Blueprint</h3>
                      <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">&ldquo;{selectedSector.tagline}&rdquo;</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer hover:rotate-90 duration-300"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Main 3-Column Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1: Hardware Allocation */}
                  <div className="p-5.5 rounded-2xl bg-[#0c0c0e] border border-slate-900 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Cpu className="h-4.5 w-4.5 text-indigo-400" />
                        <h4 className="text-xs font-black uppercase text-indigo-300 tracking-wider">Hardware Allocation</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">vCPU Thread Bounds</span>
                          <span className="text-xs font-bold text-slate-300 block">{selectedSector.hardwareSpecs.cpuAlloc}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Physical Enclave Node</span>
                          <span className="text-xs font-bold text-slate-300 block">{selectedSector.hardwareSpecs.memoryEnclave}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Network Bandwidth Gate</span>
                          <span className="text-xs font-bold text-slate-300 block">{selectedSector.hardwareSpecs.bandwidth}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Memory Isolation Standard</span>
                          <span className="text-xs font-bold text-slate-300 block leading-tight">{selectedSector.hardwareSpecs.isolationType}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Cryptography & Security */}
                  <div className="p-5.5 rounded-2xl bg-[#0c0c0e] border border-slate-900 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Lock className="h-4.5 w-4.5 text-emerald-400" />
                        <h4 className="text-xs font-black uppercase text-emerald-300 tracking-wider">Sovereign Encryption</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Active Cryptography Crypt</span>
                          <span className="text-xs font-bold text-slate-300 block">{selectedSector.hardwareSpecs.encryption}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Regulatory Framework Rules</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedSector.complianceStandards.map((std) => (
                              <span key={std} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[8px] font-mono font-bold text-slate-400">
                                {std}
                              </span>
                            ))}
                          </div>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Verification Handshake</span>
                          <span className="text-xs font-bold text-slate-300 block leading-tight">{selectedSector.detailedCompliance.auditProcedure}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Operation Compliance */}
                  <div className="p-5.5 rounded-2xl bg-[#0c0c0e] border border-slate-900 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-4.5 w-4.5 text-[#a5d6ff]" />
                        <h4 className="text-xs font-black uppercase text-blue-300 tracking-wider">Audit & Controls</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">System Audit Frequency</span>
                          <span className="text-xs font-bold text-slate-300 block leading-tight">{selectedSector.detailedCompliance.auditFrequency}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Assurance Core Standards</span>
                          <span className="text-xs font-bold text-slate-300 block leading-tight">{selectedSector.detailedCompliance.controlStandard}</span>
                        </li>
                        <li className="space-y-1">
                          <span className="text-[9px] font-mono text-slate-500 block uppercase">Verification Body Authority</span>
                          <span className="text-xs font-bold text-slate-300 block leading-tight text-slate-300">{selectedSector.detailedCompliance.authorityBody}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Block: Workload Parameters Simulator */}
                <span className="text-[10px] font-mono font-extrabold tracking-wider text-slate-500 uppercase block mt-8">
                  DYNAMICAL WORKLOAD RETENTION & LATENCY SIMULATOR MODEL
                </span>
                <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-900/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.02] rounded-full pointer-events-none blur-3xl"></div>
                  
                  {/* Split parameters & visualization */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left: Interactive Sliders (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6 text-left">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold text-white">
                          <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase">
                            <Activity className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
                            Simulated Peak Ingress Load
                          </span>
                          <span className="text-blue-400 font-mono text-[11px]">
                            {(() => {
                              const sliderVal = localStorage.getItem(`load_${selectedSector.id}`) || '5000';
                              return parseInt(sliderVal).toLocaleString();
                            })()} req/s
                          </span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="100000"
                          step="100"
                          value={(() => {
                            const val = localStorage.getItem(`load_${selectedSector.id}`) || '5000';
                            return parseInt(val);
                          })()}
                          onChange={(e) => {
                            localStorage.setItem(`load_${selectedSector.id}`, e.target.value);
                            // trigger lightweight rerender by updating any state
                            setActiveRegion(activeRegion);
                          }}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <div className="flex justify-between text-[8px] font-mono text-slate-600 uppercase">
                          <span>100 req/s (Idle)</span>
                          <span>100k req/s (Extreme)</span>
                        </div>
                      </div>

                      {/* Tweak: Checkbox for Airgapped Routing Acceleration */}
                      {selectedSector.supportsAirgapped && (
                        <div className="p-4.5 rounded-xl bg-slate-900/60 border border-slate-900/80 flex items-start gap-4">
                          <input
                            type="checkbox"
                            className="cursor-pointer mt-1 h-4 w-4 rounded border-slate-800 bg-[#0B0B0C] text-emerald-500 focus:ring-emerald-500/20"
                            id="airgap_checkbox"
                            checked={(() => {
                              const val = localStorage.getItem(`airgap_enabled_${selectedSector.id}`) !== 'false';
                              return val;
                            })()}
                            onChange={(e) => {
                              localStorage.setItem(`airgap_enabled_${selectedSector.id}`, e.target.checked ? 'true' : 'false');
                              setActiveRegion(activeRegion); // push state sync
                            }}
                          />
                          <label htmlFor="airgap_checkbox" className="space-y-1 cursor-pointer select-none text-left">
                            <span className="text-xs font-extrabold text-white block">Optimize local Hardware Airgap</span>
                            <span className="text-[10px] text-slate-500 font-semibold leading-normal block">
                              Restructures neural execution directly inside local hardware SGX enclaves, cutting latency significantly.
                            </span>
                          </label>
                        </div>
                      )}
                    </div>

                    {/* Right: Dynamic Calculated Spec Telemetry Cockpit (7 Cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Telemetry Indicator 1: Dynamic Latency Display */}
                      <div className="p-5.5 rounded-2xl bg-[#09090b] border border-slate-900/80 flex flex-col justify-between text-left">
                        <div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase block">Dynamically Calculated Latency</span>
                          {/* Live Math based on Simulator parameters */}
                          {(() => {
                            const load = parseInt(localStorage.getItem(`load_${selectedSector.id}`) || '5000');
                            const isAirgapped = selectedSector.supportsAirgapped && (localStorage.getItem(`airgap_enabled_${selectedSector.id}`) !== 'false');
                            const calculatedLatency = ((0.05 + (load * 0.000008)) * (isAirgapped ? 0.35 : 1)).toFixed(3);
                            return (
                              <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-3xl font-black text-emerald-400 font-mono tracking-tight">{calculatedLatency}</span>
                                <span className="text-xs font-mono text-emerald-500">ms</span>
                              </div>
                            );
                          })()}
                        </div>
                        <div className="pt-3 border-t border-slate-900/40 text-[9px] font-mono text-slate-600 leading-tight">
                          Theoretical load latency ceiling based on active enclave isolation standard.
                        </div>
                      </div>

                      {/* Telemetry Indicator 2: Dynamic Security Assurance Seal */}
                      <div className="p-5.5 rounded-2xl bg-[#09090b] border border-slate-900/80 flex flex-col justify-between text-left">
                        <div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase block">Active Trust Guard Seal</span>
                          {(() => {
                            const isAirgapped = selectedSector.supportsAirgapped && (localStorage.getItem(`airgap_enabled_${selectedSector.id}`) !== 'false');
                            return (
                              <div className="mt-2 flex items-center gap-2">
                                <Shield className={`h-6 w-6 ${isAirgapped ? 'text-emerald-400' : 'text-blue-400'}`} />
                                <span className={`text-lg font-black font-mono tracking-wide ${isAirgapped ? 'text-emerald-400 animate-pulse' : 'text-slate-300'}`}>
                                  {isAirgapped ? 'SOVEREIGN_100%' : 'SECURED_COMPLIANT'}
                                </span>
                              </div>
                            );
                          })()}
                        </div>
                        <div className="pt-3 border-t border-slate-900/40 text-[9px] font-mono text-slate-600 leading-tight">
                          Complies with strict GDPR Article 9 / ITAR zero-retention regulatory guidance.
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

              {/* Modal Footer Controls */}
              <div className="p-6 bg-[#060607] border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-slate-500 leading-normal font-semibold text-center sm:text-left">
                  Sovereign ML Blueprint verified as contractually binding. Exported securely under 2048-bit RSA sign-key.
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="cursor-pointer inline-flex h-9 items-center justify-center gap-1.5 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition-all font-bold select-none"
                  >
                    Print Blueprint Specs
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="cursor-pointer inline-flex h-9 items-center justify-center px-4.5 rounded-xl bg-white hover:bg-slate-100 text-xs text-slate-900 font-extrabold transition-all select-none"
                  >
                    Close Specs hud
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
