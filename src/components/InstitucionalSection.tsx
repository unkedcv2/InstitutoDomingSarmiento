import React from 'react';
import { MapPin, Award, Globe, Building2 } from 'lucide-react';
import { INFO_COLEGIO } from '../data/colegioData';
import colegioFoto from '../assets/images/colegio_01.png';

export const InstitucionalSection: React.FC = () => {
  return (
    <section id="institucional" className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#000c6b]/5 text-[#000c6b] text-xs sm:text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              <span>Institucional</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#000c6b] mb-6">
              Instituto Domingo F. Sarmiento
            </h2>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 font-normal">
              {INFO_COLEGIO.descripcionInstitucional}
            </p>

            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#000c6b] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Ubicación en Mar del Plata
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    {INFO_COLEGIO.direccion}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-100 bg-white shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <Award className="w-5 h-5 text-[#fac301]" />
                  <span className="font-semibold text-[#000c6b] text-sm">Gestión Privada</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Establecimiento educativo privado comprometido con la excelencia académica y la formación integral.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-slate-100 bg-white shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <Globe className="w-5 h-5 text-[#000c6b]" />
                  <span className="font-semibold text-[#000c6b] text-sm">Proyecto Bilingüe</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Formación con énfasis en la lengua inglesa e italiana junto a proyectos de integración cultural.
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Official Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md relative group">
              <img
                src={colegioFoto}
                alt="Instalaciones del Instituto Domingo F. Sarmiento"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[440px] transition-transform duration-500 group-hover:scale-102"
              />
              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-[#000c6b]">
                    Sede Institucional
                  </span>
                  <span className="block text-xs text-slate-500">
                    11 de Septiembre 3733, Mar del Plata
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#000c6b] bg-[#000c6b]/10 px-2.5 py-1 rounded">
                  Oficial
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
