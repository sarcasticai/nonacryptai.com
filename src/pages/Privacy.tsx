import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-[#0A0A0A] w-full min-h-screen pb-24 text-slate-300 relative">
      <div className="relative pt-32 pb-12 overflow-hidden bg-[#0A0A0A] border-b border-white/5 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-slate-400 font-medium">Last updated: May 22, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 relative z-20">
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-blue-400">
          <h2>1. Introduction</h2>
          <p>
            At NonaCrypt, we take your privacy seriously. This Privacy Policy explains how NonaCrypt Technologies Inc. 
            ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website 
            and use our enterprise artificial intelligence services and platforms.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information that you configure when setting up NonaCrypt API connections, including telemetry data necessary 
            for performance optimization.
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Name, work email address, and company details provided during enterprise registration.</li>
            <li><strong>Usage Data:</strong> Model invocation frequencies, latency metrics, and API endpoint usage statistics.</li>
            <li><strong>Training Data:</strong> NonaCrypt strictly <em>does not</em> use your proprietary enterprise data to train our foundational models without explicit opt-in agreements.</li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>
            We use the information we collect primarily to provide, maintain, and improve our AI infrastructure services,
             process transactions, and provide robust technical support.
          </p>

          <h2>4. Data Security & Residency</h2>
          <p>
            We deploy strict physical, electronic, and procedural safeguards. Data residency options exist for enterprise 
            contracts, allowing localized processing in US, EU, or APAC regions compliant with GDPR and CCPA.
          </p>
          
          <h2>5. Contact Us</h2>
          <p>
            For privacy inquiries, please contact our Data Protection Officer at <strong>privacy@nonacrypt.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
