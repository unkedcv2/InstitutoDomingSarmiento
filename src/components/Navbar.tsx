import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { PageSection } from '../types';
import logoImage from '../assets/images/Institutodfs_logook.png';
import logoItaliano from './Logo_italiano.jpg';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenInscripcion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenInscripcion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageSection; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'institucional', label: 'Institucional' },
    { id: 'propuesta', label: 'Propuesta' },
    { id: 'niveles', label: 'Niveles' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleItemClick = (id: PageSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-slate-200/90 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5'
          : 'bg-white shadow-xs py-4 sm:py-5 lg:py-5.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Group */}
        <div className="flex items-center gap-3">
          <button
            id="nav-brand-btn"
            onClick={() => handleItemClick('inicio')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img
              src={logoImage}
              alt="Logo Instituto Domingo F. Sarmiento"
              referrerPolicy="no-referrer"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? 'h-10 sm:h-11 max-w-[135px] sm:max-w-[155px]'
                  : 'h-13 sm:h-15 lg:h-16 max-w-[160px] sm:max-w-[195px]'
              }`}
            />
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="block text-sm sm:text-base font-bold tracking-tight text-[#000c6b] leading-tight">
                Instituto Domingo F. Sarmiento
              </span>
              <span className="block text-xs text-slate-500 font-medium tracking-wide">
                Mar del Plata • Proyecto Bilingüe
              </span>
            </div>
          </button>

          {/* Secondary Italian Bilingual Logo (discreet / secondary prominence) */}
          <div
            className="hidden xl:flex items-center gap-2 pl-3 ml-1 border-l border-slate-200/80 group cursor-pointer"
            onClick={() => handleItemClick('propuesta')}
            title="Proyecto Bilingüe Italiano - Certificación"
          >
            <img
              src={logoItaliano}
              alt="Convenio Bilingüe Italiano"
              referrerPolicy="no-referrer"
              className={`w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 rounded ${
                isScrolled ? 'h-7 sm:h-8' : 'h-9 sm:h-10'
              }`}
            />
            <div className="leading-none">
              <span className="block text-[10.5px] font-bold text-slate-700 uppercase tracking-wider">
                Bilingüe Italiano
              </span>
              <span className="block text-[9.5px] text-slate-400">
                Lengua y Cultura
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? 'text-[#000c6b] bg-[#000c6b]/10 font-bold'
                    : 'text-slate-700 hover:text-[#000c6b] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Subtle mobile Italian badge */}
          <img
            src={logoItaliano}
            alt="Bilingüe Italiano"
            referrerPolicy="no-referrer"
            className="h-8 w-auto object-contain opacity-85 rounded sm:hidden"
          />
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl"
        >
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#000c6b] bg-[#000c6b]/10 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-slate-200">
            {/* Italian Bilingual seal in drawer */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
              <img
                src={logoItaliano}
                alt="Proyecto Bilingüe Italiano"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain shrink-0"
              />
              <div className="text-xs">
                <span className="font-semibold text-slate-800 block">
                  Proyecto Bilingüe Italiano
                </span>
                <span className="text-slate-500 block text-[11px]">
                  Enseñanza de Lengua y Cultura Italiana
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
