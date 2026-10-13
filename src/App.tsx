import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StarUniverseBackground } from './components/StarUniverseBackground';
import { CaseStudy, ServiceItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inquiryPreset, setInquiryPreset] = useState<string>('Marketing Opportunity');

  const scrollToContact = (inquiryType = 'Marketing Opportunity') => {
    setInquiryPreset(inquiryType);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCaseStudyInquiry = (projectTitle: string) => {
    setSelectedProject(null);
    let mappedType = 'Creative Campaign';
    if (projectTitle.toLowerCase().includes('paid') || projectTitle.toLowerCase().includes('scale')) {
      mappedType = 'Performance Marketing';
    } else if (projectTitle.toLowerCase().includes('brand') || projectTitle.toLowerCase().includes('positioning')) {
      mappedType = 'Brand Strategy';
    }
    scrollToContact(mappedType);
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedService(null);
    let mappedType = 'Marketing Opportunity';
    if (serviceTitle.toLowerCase().includes('performance')) {
      mappedType = 'Performance Marketing';
    } else if (serviceTitle.toLowerCase().includes('brand')) {
      mappedType = 'Brand Strategy';
    } else if (serviceTitle.toLowerCase().includes('creative') || serviceTitle.toLowerCase().includes('copywriting')) {
      mappedType = 'Creative Campaign';
    }
    scrollToContact(mappedType);
  };

  return (
    <div className="relative min-h-screen bg-[#06070B] text-[#F8F9FA] font-sans antialiased overflow-x-hidden selection:bg-white/30 selection:text-white">
      {/* Dynamic Star Universe Backdrop with Twinkling Stars & Meteors */}
      <StarUniverseBackground />

      {/* Signature Coordinate Grid Texture Layer (Fixed across entire universe) */}
      <div 
        className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-80"
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      <Navbar onContactClick={() => scrollToContact('Marketing Opportunity')} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onExploreWork={scrollToWork}
          onContactClick={() => scrollToContact('Marketing Opportunity')}
        />

        {/* 01. Trust and Core Capabilities (4-card metrics/pillars with glitter shine) */}
        <CapabilitiesSection />

        {/* 02. Selected Work (6 Case Studies with cosmic starlight details) */}
        <PortfolioSection onSelectProject={setSelectedProject} />

        {/* 03. Services */}
        <ServicesSection onSelectService={setSelectedService} />

        {/* 04. About Section */}
        <AboutSection onContactClick={() => scrollToContact('Collaboration')} />

        {/* 05. Process Timeline */}
        <ProcessSection />

        {/* 06. Philosophy & Principles */}
        <PhilosophySection />

        {/* 07. Contact & Inquiries */}
        <ContactSection initialInquiryType={inquiryPreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInitiateInquiry={handleCaseStudyInquiry}
      />

      {/* Service Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleServiceInquiry}
      />
    </div>
  );
}
