import React from 'react';
import { GraduationCap, ArrowRight, Check } from 'lucide-react';
import { NIVELES_EDUCATIVOS } from '../data/colegioData';
import imgInicial from '../assets/images/primario_02.png';
import imgPrimario from '../assets/images/primario_01.png';
import imgSecundario from '../assets/images/secundario_01.png';

interface NivelesSectionProps {
  onSelectNivelParaInscripcion: (nivelNombre: string) => void;
}

export const NivelesSection: React.FC<NivelesSectionProps> = ({ onSelectNivelParaInscripcion }) => {
  const nivelImages = [imgInicial, imgPrimario, imgSecundario];

  return (
    <section id="niveles" className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#000c6b]/5 text-[#000c6b] text-xs sm:text-sm font-semibold mb-3">
            <GraduationCap className="w-4 h-4 text-[#fac301]" />
            <span>Niveles de Educación</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#000c6b] mb-4">
            Trayectoria Educativa Completa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Acompañamos cada etapa evolutiva con dedicación pedagógica, idiomas, tecnología y contención comunitaria en Mar del Plata.
          </p>
        </div>

        {/* Niveles Grid with Institutional Color Nuances */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NIVELES_EDUCATIVOS.map((nivel, index) => {
            // Distinct institutional color scheme for each educational tier
            const tierStyles = [
              // Nivel Inicial: Gama Oro / Ámbar Institucional (Cálido, formativo)
              {
                topBanner: 'bg-[#fac301] text-[#000c6b]',
                topTag: 'bg-white/80 text-[#000c6b] font-bold',
                cardBorder: 'border-amber-300 hover:border-[#fac301] shadow-amber-500/10',
                imageBorder: 'border-b-4 border-[#fac301]',
                imageOverlay: 'bg-gradient-to-t from-amber-950/70 via-transparent to-transparent',
                imageTint: 'bg-amber-500/10',
                tierSubtitle: 'Primera Infancia & Expresión',
                checkIcon: 'text-amber-700 bg-amber-100',
                btnBorder: 'border-2 border-[#fac301] bg-[#fac301] text-[#000c6b] hover:bg-[#e5b300]',
              },
              // Nivel Primario: Gama Azul Real Institucional (Equilibrado, alfabetización y bilingual)
              {
                topBanner: 'bg-[#000c6b] text-white',
                topTag: 'bg-white/20 text-white font-bold',
                cardBorder: 'border-blue-300 hover:border-[#000c6b] shadow-blue-500/10',
                imageBorder: 'border-b-4 border-[#000c6b]',
                imageOverlay: 'bg-gradient-to-t from-[#000c6b]/80 via-transparent to-transparent',
                imageTint: 'bg-blue-600/10',
                tierSubtitle: 'Formación Integral & TICs',
                checkIcon: 'text-blue-700 bg-blue-100',
                btnBorder: 'border-2 border-[#000c6b] bg-[#000c6b] text-white hover:bg-[#00084d]',
              },
              // Nivel Secundario: Gama Azul Marino Profundo / Prestige Navy (Rigor, pre-universitario)
              {
                topBanner: 'bg-[#00084d] text-white',
                topTag: 'bg-[#fac301] text-[#000c6b] font-bold',
                cardBorder: 'border-indigo-300 hover:border-[#00084d] shadow-indigo-500/10',
                imageBorder: 'border-b-4 border-[#00084d]',
                imageOverlay: 'bg-gradient-to-t from-slate-950/85 via-transparent to-transparent',
                imageTint: 'bg-indigo-950/15',
                tierSubtitle: 'Orientación & Doble Titulación',
                checkIcon: 'text-[#000c6b] bg-indigo-100',
                btnBorder: 'border-2 border-[#00084d] bg-[#00084d] text-white hover:bg-slate-900',
              },
            ][index];

            return (
              <div
                key={nivel.id}
                id={`card-nivel-${nivel.id}`}
                className={`relative rounded-2xl border ${tierStyles.cardBorder} bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top prominent institutional color header bar */}
                  <div className={`py-2.5 px-4 ${tierStyles.topBanner} flex items-center justify-between shadow-xs`}>
                    <span className="font-extrabold text-sm tracking-wider uppercase">
                      {nivel.nombre}
                    </span>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded shadow-2xs ${tierStyles.topTag}`}>
                      {tierStyles.tierSubtitle}
                    </span>
                  </div>

                  {/* Visual Header Image - strictly identical height and alignment across all cards */}
                  <div className={`h-52 sm:h-56 w-full overflow-hidden relative ${tierStyles.imageBorder}`}>
                    <img
                      src={nivelImages[index]}
                      alt={`Actividades de ${nivel.nombre}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 block"
                    />
                    
                    {/* Level-specific color overlay and gradient */}
                    <div className={`absolute inset-0 ${tierStyles.imageTint} pointer-events-none`} />
                    <div className={`absolute inset-0 ${tierStyles.imageOverlay} pointer-events-none`} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#000c6b] mb-2">
                      {nivel.nombre}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {nivel.descripcion}
                    </p>

                    <div className="space-y-3 mb-6">
                      {nivel.caracteristicas.map((caract, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${tierStyles.checkIcon}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{caract}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100/90 mt-2">
                  <button
                    id={`btn-inscribir-${nivel.id}`}
                    onClick={() => onSelectNivelParaInscripcion(nivel.nombre)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn focus:outline-none shadow-xs ${tierStyles.btnBorder}`}
                  >
                    <span>Consultar Admisión {nivel.nombre}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
