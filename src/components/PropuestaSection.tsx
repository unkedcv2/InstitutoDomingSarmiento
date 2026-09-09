import React from 'react';
import { Languages, Cpu, Activity, Music, BookOpen, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PROPUESTA_PILAR } from '../data/colegioData';
import logoItaliano from './Logo_italiano.jpg';
import imgIdiomas from '../assets/images/primario_03.png';
import imgTics from '../assets/images/primario_02.png';
import imgDeportes from '../assets/images/secundario_01.png';
import imgCultura from '../assets/images/primario_04.png';

export const PropuestaSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'idiomas':
        return <Languages className="w-6 h-6 transition-colors duration-300" />;
      case 'tics':
        return <Cpu className="w-6 h-6 transition-colors duration-300" />;
      case 'educacion-fisica':
        return <Activity className="w-6 h-6 transition-colors duration-300" />;
      case 'cultura-musica':
        return <Music className="w-6 h-6 transition-colors duration-300" />;
      default:
        return <BookOpen className="w-6 h-6 transition-colors duration-300" />;
    }
  };

  const getImage = (id: string) => {
    switch (id) {
      case 'idiomas':
        return imgIdiomas;
      case 'tics':
        return imgTics;
      case 'educacion-fisica':
        return imgDeportes;
      case 'cultura-musica':
        return imgCultura;
      default:
        return imgIdiomas;
    }
  };

  return (
    <section id="propuesta" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#000c6b]/5 text-[#000c6b] text-xs sm:text-sm font-semibold mb-3">
            <span>Propuesta Formativa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#000c6b] mb-4">
            Curricular y Extracurricular
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ofrecemos actividades curriculares y extracurriculares que incluyen inglés, italiano, educación física, música y TICs, destacándonos por proyectos vinculados a la cultura y el idioma italiano.
          </p>
        </div>

        {/* Pillars Grid with Blue Hover & Image Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPUESTA_PILAR.map((pilar) => (
            <div
              key={pilar.id}
              id={`pilar-${pilar.id}`}
              className="relative group overflow-hidden bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#000c6b] transition-all duration-500 flex flex-col justify-between min-h-[330px] cursor-pointer"
            >
              {/* Background illustrative photo and deep blue overlay revealed on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <img
                  src={getImage(pilar.id)}
                  alt={`Actividades de ${pilar.titulo}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Dual institutional blue gradient overlay for perfect readability */}
                <div className="absolute inset-0 bg-[#000c6b]/90 group-hover:bg-[#000c6b]/85 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000c6b] via-[#000c6b]/80 to-[#000c6b]/65" />
              </div>

              {/* Card Content (Transitions to white/gold on hover) */}
              <div className="relative z-10">
                <div className="w-13 h-13 rounded-xl bg-slate-100 group-hover:bg-[#fac301] text-[#000c6b] group-hover:text-[#000c6b] flex items-center justify-center mb-5 transition-all duration-300 shadow-xs group-hover:shadow-md">
                  {getIcon(pilar.id)}
                </div>
                <h3 className="text-xl font-bold text-[#000c6b] group-hover:text-white mb-2.5 transition-colors duration-300">
                  {pilar.titulo}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-100 leading-relaxed mb-4 transition-colors duration-300">
                  {pilar.descripcion}
                </p>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#fac301] transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#fac301]" />
                  <span>Proyecto Formativo</span>
                </div>
                <div className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-[11px] uppercase tracking-wider">
                  <span>Explorar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Italian Culture Highlight Banner with Secondary Logo */}
        <div className="mt-10 p-6 sm:p-8 rounded-xl bg-[#000c6b] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-[#fac301] text-[#000c6b] mb-2">
              Distintivo Institucional Bilingüe
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Cultura e Idioma Italiano
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              Proyectos transversales que integran el aprendizaje de la lengua italiana con vivencias culturales, tradiciones y vínculos formativos comunitarios en todos los niveles.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/15 backdrop-blur-xs">
            <img
              src={logoItaliano}
              alt="Convenio Bilingüe Italiano"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 w-auto object-contain rounded bg-white p-1"
            />
            <div className="text-left">
              <span className="block text-xs font-bold text-[#fac301] uppercase tracking-wider">
                Convenio y Certificación
              </span>
              <span className="block text-[11px] text-slate-300">
                Lengua Italiana
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
