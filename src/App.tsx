import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EstimatorModal } from './components/EstimatorModal';
import { ClientPortalModal } from './components/ClientPortalModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedProjectQuote, setSelectedProjectQuote] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState<boolean>(false);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleApplyEstimate = (data: { service: string; budget: string; description: string }) => {
    setSelectedService(data.service);
    setSelectedProjectQuote(data.description);
  };

  const handleSelectProjectSimilar = (projectName: string) => {
    setSelectedProjectQuote(`Interested in building a project with architecture similar to "${projectName}".`);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans selection:bg-[#4cd7f6] selection:text-[#003640]">
      {/* Top Fixed Header */}
      <Header
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        {/* 1. Hero Section */}
        <Hero
          onSelectService={handleSelectService}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why Us Section */}
        <WhyUs onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* 5. Process Section */}
        <Process />

        {/* 6. Portfolio Section */}
        <Portfolio onRequestProject={handleSelectProjectSimilar} />

        {/* 7. CTA Banner */}
        <CtaBanner />

        {/* 8. Contact Section */}
        <Contact
          prefilledRequirement={selectedService}
          prefilledDetails={selectedProjectQuote}
        />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Scope & Cost Estimator Modal */}
      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyToQuote={handleApplyEstimate}
      />

      {/* Client Portal Demo Modal */}
      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />
    </div>
  );
}
