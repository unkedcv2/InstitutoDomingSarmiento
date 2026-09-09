import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { InstitucionalSection } from './components/InstitucionalSection';
import { PropuestaSection } from './components/PropuestaSection';
import { NivelesSection } from './components/NivelesSection';
import { GaleriaSection } from './components/GaleriaSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { InscripcionModal } from './components/InscripcionModal';
import { BienvenidaModal2027 } from './components/BienvenidaModal2027';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PageSection } from './types';

export default function App() {
  const [currentSection, setCurrentSection] = useState<PageSection>('inicio');
  const [isInscripcionOpen, setIsInscripcionOpen] = useState(false);
  const [isBienvenidaOpen, setIsBienvenidaOpen] = useState(false);
  const [selectedNivel, setSelectedNivel] = useState('Nivel Primario');

  // Trigger Welcome 2027 Popup on open
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBienvenidaOpen(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Handle hash change & initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageSection;
      const validSections: PageSection[] = ['inicio', 'institucional', 'propuesta', 'niveles', 'galeria', 'contacto'];
      if (validSections.includes(hash)) {
        setCurrentSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: PageSection) => {
    setCurrentSection(section);
    window.location.hash = section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInscripcionConNivel = (nivel: string) => {
    setSelectedNivel(nivel);
    setIsInscripcionOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#fac301] selection:text-[#000c6b]">
      {/* Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenInscripcion={() => setIsInscripcionOpen(true)}
      />

      {/* Main Content Sections - padding bottom on mobile for app bottom bar */}
      <main className="flex-grow pb-16 lg:pb-0">
        <HeroSlider
          onNavigate={handleNavigate}
          onOpenInscripcion={() => setIsInscripcionOpen(true)}
        />

        <InstitucionalSection />

        <PropuestaSection />

        <NivelesSection
          onSelectNivelParaInscripcion={handleOpenInscripcionConNivel}
        />

        <GaleriaSection />

        <ContactoSection initialNivel={selectedNivel} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Native App-like Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenInscripcion={() => setIsInscripcionOpen(true)}
      />

      {/* Welcome / Ciclo Lectivo 2027 Popup Modal with both logos */}
      <BienvenidaModal2027
        isOpen={isBienvenidaOpen}
        onClose={() => setIsBienvenidaOpen(false)}
        onOpenInscripcion={() => setIsInscripcionOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Quick Admissions / Registration Modal */}
      <InscripcionModal
        isOpen={isInscripcionOpen}
        onClose={() => setIsInscripcionOpen(false)}
        defaultNivel={selectedNivel}
      />
    </div>
  );
}
