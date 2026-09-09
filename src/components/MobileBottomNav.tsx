import React from 'react';
import { Home, GraduationCap, UserPlus, Image, MessageCircle } from 'lucide-react';
import { PageSection } from '../types';

interface MobileBottomNavProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenInscripcion: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentSection,
  onNavigate,
  onOpenInscripcion,
}) => {
  return (
    <nav
      id="mobile-bottom-nav"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] pb-safe"
      aria-label="Navegación móvil"
    >
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center px-1">
        {/* Tab 1: Inicio */}
        <button
          id="mobile-tab-inicio"
          onClick={() => onNavigate('inicio')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 text-center transition-all ${
            currentSection === 'inicio'
              ? 'text-[#000c6b] font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Ir a Inicio"
        >
          <Home className="w-5 h-5 transition-transform active:scale-90" />
          <span className="text-[10px] mt-1 tracking-tight leading-none">Inicio</span>
        </button>

        {/* Tab 2: Niveles */}
        <button
          id="mobile-tab-niveles"
          onClick={() => onNavigate('niveles')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 text-center transition-all ${
            currentSection === 'niveles'
              ? 'text-[#000c6b] font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Ir a Niveles"
        >
          <GraduationCap className="w-5 h-5 transition-transform active:scale-90" />
          <span className="text-[10px] mt-1 tracking-tight leading-none">Niveles</span>
        </button>

        {/* Tab 3 (Center Highlight): Inscripción 2027 */}
        <button
          id="mobile-tab-inscripcion"
          onClick={onOpenInscripcion}
          className="flex flex-col items-center justify-center -mt-5 group focus:outline-none"
          aria-label="Inscribirse Ciclo Lectivo 2027"
        >
          <div className="w-12 h-12 rounded-full bg-[#fac301] hover:bg-[#e5b300] text-[#000c6b] shadow-lg flex items-center justify-center border-2 border-white transition-transform active:scale-95 group-hover:scale-105">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="text-[10px] mt-1 font-bold text-[#000c6b] tracking-tight leading-none whitespace-nowrap">
            Inscripción
          </span>
        </button>

        {/* Tab 4: Galería */}
        <button
          id="mobile-tab-galeria"
          onClick={() => onNavigate('galeria')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 text-center transition-all ${
            currentSection === 'galeria'
              ? 'text-[#000c6b] font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Ir a Galería"
        >
          <Image className="w-5 h-5 transition-transform active:scale-90" />
          <span className="text-[10px] mt-1 tracking-tight leading-none">Galería</span>
        </button>

        {/* Tab 5: Contacto */}
        <button
          id="mobile-tab-contacto"
          onClick={() => onNavigate('contacto')}
          className={`flex flex-col items-center justify-center h-full w-full py-1 text-center transition-all ${
            currentSection === 'contacto'
              ? 'text-[#000c6b] font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Ir a Contacto"
        >
          <MessageCircle className="w-5 h-5 transition-transform active:scale-90" />
          <span className="text-[10px] mt-1 tracking-tight leading-none">Contacto</span>
        </button>
      </div>
    </nav>
  );
};
