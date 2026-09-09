import React from 'react';
import { MapPin, Instagram, ArrowUp } from 'lucide-react';
import { INFO_COLEGIO } from '../data/colegioData';
import { PageSection } from '../types';
import logoItaliano from './Logo_italiano.jpg';
import logoColegio from '../assets/images/Institutodfs_logook.png';

interface FooterProps {
  onNavigate: (section: PageSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000c6b] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Columna Institucional */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoColegio}
                alt="Instituto Domingo F. Sarmiento"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-sm shrink-0 border border-white/20"
              />
              <div>
                <span className="block text-lg font-bold tracking-tight text-white leading-tight">
                  Instituto Domingo F. Sarmiento
                </span>
                <span className="block text-xs text-[#fac301] font-medium">
                  Mar del Plata • Proyecto Bilingüe
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mb-5">
              Establecimiento educativo privado de gestión privada ubicado en Mar del Plata. Trayectoria y formación integral en niveles Inicial, Primario y Secundario.
            </p>

            {/* Secondary Italian Logo Badge */}
            <div className="inline-flex items-center gap-2.5 p-2 rounded-lg bg-white/10 border border-white/15 mb-6">
              <img
                src={logoItaliano}
                alt="Proyecto Bilingüe Italiano"
                referrerPolicy="no-referrer"
                className="h-7 w-auto object-contain rounded bg-white p-0.5"
              />
              <span className="text-xs text-slate-200">
                Convenio y Certificación Lengua Italiana
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#fac301] shrink-0" />
              <span>{INFO_COLEGIO.direccion}</span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#fac301] mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('institucional')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Institucional
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('propuesta')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Propuesta Formativa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('niveles')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Niveles Educativos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Niveles y Redes */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#fac301] mb-4">
              Comunidad y Redes
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={INFO_COLEGIO.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#fac301]" />
                <span>Instagram Oficial</span>
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Actividades curriculares y extracurriculares: inglés, italiano, educación física, música y TICs.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Instituto Domingo F. Sarmiento. Todos los derechos reservados.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
