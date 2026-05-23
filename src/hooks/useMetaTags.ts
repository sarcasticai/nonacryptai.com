import { useEffect } from 'react';

export interface MetaTagsConfig {
  title: string;
  description: string;
  keywords: string | string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  // Geotargeting Meta Tags for SEO (Geo-friendliness)
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}

/**
 * Custom React Hook to dynamically inject and update document head elements 
 * for live SEO crawl responsiveness and geotargeting.
 */
export function useMetaTags(config: MetaTagsConfig) {
  useEffect(() => {
    // 1. Update primary browser title
    document.title = config.title;

    // Helper closure to dynamically query or instantiate head entries
    const updateOrCreateMetaTag = (attributeName: string, attributeValue: string, content: string, isRawProperty = false) => {
      const matchCriteria = isRawProperty 
        ? `meta[property="${attributeValue}"]` 
        : `meta[name="${attributeValue}"]`;
      
      let element = document.head.querySelector(matchCriteria) as HTMLMetaElement | null;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // 2. Set description
    updateOrCreateMetaTag('name', 'description', config.description);

    // 3. Set keywords array/strings
    const queryKeywords = Array.isArray(config.keywords) 
      ? config.keywords.join(', ') 
      : config.keywords;
    updateOrCreateMetaTag('name', 'keywords', queryKeywords);

    // 4. Set OpenGraph Meta tags for rich indexing & social routing
    updateOrCreateMetaTag('property', 'og:title', config.ogTitle || config.title, true);
    updateOrCreateMetaTag('property', 'og:description', config.ogDescription || config.description, true);
    updateOrCreateMetaTag('property', 'og:type', config.ogType || 'website', true);

    // 5. Geotargeting Tag Injection for Geo-SEO-friendly optimization
    if (config.geoRegion) {
      updateOrCreateMetaTag('name', 'geo.region', config.geoRegion);
    } else {
      // Clean up past region meta if present
      const existing = document.head.querySelector('meta[name="geo.region"]');
      if (existing) existing.remove();
    }

    if (config.geoPlacename) {
      updateOrCreateMetaTag('name', 'geo.placename', config.geoPlacename);
    } else {
      const existing = document.head.querySelector('meta[name="geo.placename"]');
      if (existing) existing.remove();
    }

    if (config.geoPosition) {
      updateOrCreateMetaTag('name', 'ICBM', config.geoPosition);
      updateOrCreateMetaTag('name', 'geo.position', config.geoPosition);
    } else {
      const ex1 = document.head.querySelector('meta[name="ICBM"]');
      const ex2 = document.head.querySelector('meta[name="geo.position"]');
      if (ex1) ex1.remove();
      if (ex2) ex2.remove();
    }

    // Clean-up sequence on unmount to prevent head dilution
    return () => {
      // Optional: keep title/description of root app or reset
    };
  }, [
    config.title, 
    config.description, 
    config.keywords, 
    config.ogTitle, 
    config.ogDescription, 
    config.ogType,
    config.geoRegion,
    config.geoPlacename,
    config.geoPosition
  ]);
}

/**
 * Utility matching specific industry sectors and physical geo-jurisdiction regions 
 * to granular, high-density regulatory and search-bot index optimization criteria.
 */
export function generateIndustryMeta(
  sector: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    geoTarget: string;
    complianceStandards: string[];
    useCases: string[];
  },
  region?: {
    id: string;
    name: string;
    centerName: string;
    complianceSuite: string[];
  }
): MetaTagsConfig {
  const brandSuffix = ' | NonaCrypt Sovereign AI';
  
  // Dynamic Title building
  const baseTitle = `${sector.name} Airgapped ML Solutions`;
  const locationSuffix = region ? ` (${region.centerName})` : '';
  const title = `${baseTitle}${locationSuffix}${brandSuffix}`;

  // SEO Description building - dense technical keywords representation
  const complianceStr = sector.complianceStandards.slice(0, 3).join(', ');
  const targetArea = region ? region.name : sector.geoTarget.split(',')[0];
  const description = `${sector.tagline} Compliant with ${complianceStr}. Designed for secure regional isolation in ${targetArea}. ${sector.description.slice(0, 120)}...`;

  // Keywords optimization
  const defaultKeywords = [
    'sovereign AI', 'airgapped machine learning', 'private NLP model', 
    'enclave compute', 'data residency security', 'NonaCrypt AI'
  ];

  const sectorKeywords = [
    sector.id, sector.name.toLowerCase(), ...sector.useCases.map(uc => uc.toLowerCase().slice(0, 30))
  ];

  const regionKeywords = region ? [
    region.id, region.name.toLowerCase(), region.centerName.toLowerCase(), ...region.complianceSuite.map(c => c.toLowerCase())
  ] : [];

  const keywords = Array.from(new Set([...defaultKeywords, ...sectorKeywords, ...regionKeywords]));

  // Geotarget mappings based on selected locations
  let geoRegion: string | undefined;
  let geoPlacename: string | undefined;
  let geoPosition: string | undefined;

  // Approximate coordinate profiles for crawl maps
  if (region) {
    if (region.id === 'us_east') {
      geoRegion = 'US-VA';
      geoPlacename = 'Northern Virginia';
      geoPosition = '38.0293;-78.4767';
    } else if (region.id === 'eu_central') {
      geoRegion = 'DE-HE';
      geoPlacename = 'Frankfurt';
      geoPosition = '50.1109;8.6821';
    } else if (region.id === 'apac_east') {
      geoRegion = 'SG';
      geoPlacename = 'Singapore';
      geoPosition = '1.3521;103.8198';
    } else if (region.id === 'me_central') {
      geoRegion = 'SA-01';
      geoPlacename = 'Riy Riyadh';
      geoPosition = '24.7136;46.6753';
    } else if (region.id === 'latam_south') {
      geoRegion = 'BR-SP';
      geoPlacename = 'São Paulo';
      geoPosition = '-23.5505;-46.6333';
    }
  } else {
    // Default global anchor (Zurich Switzerland node coordinate anchor)
    geoRegion = 'CH-ZH';
    geoPlacename = 'Zurich';
    geoPosition = '47.3769;8.5417';
  }

  return {
    title,
    description,
    keywords,
    geoRegion,
    geoPlacename,
    geoPosition,
    ogTitle: `${sector.name} Private Enclave Compute`,
    ogDescription: sector.tagline
  };
}
