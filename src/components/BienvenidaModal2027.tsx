import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageSection } from '../types';
import logoColegio from '../assets/images/Institutodfs_logook.png';
import logoItaliano from './Logo_italiano.jpg';
import imagenFormulario from '../assets/images/inscripcion.jpg';

interface BienvenidaModal2027Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenInscripcion: () => void;
  onNavigate?: (section: PageSection) => void;
}

export const BienvenidaModal2027: React.FC<BienvenidaModal2027Props> = ({
  isOpen,
  onClose,
  onOpenInscripcion,
}) => {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleInscribirse = () => {
    onClose();
    onOpenInscripcion();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="modal-bienvenida-2027"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-bienvenida-title"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto z-10"
          >
            {/* Top Bar with Both Logos */}
            <div className="bg-slate-50 border-b border-slate-200/80 px-5 py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Primary Logo: Instituto */}
                <img
                  src={logoColegio}
                  alt="Instituto Domingo F. Sarmiento"
                  referrerPolicy="no-referrer"
                  className="h-10 sm:h-11 w-auto object-contain"
                />

                {/* Vertical Divider */}
                <div className="h-7 w-px bg-slate-200" />

                {/* Secondary Logo: Italiano Bilingüe */}
                <div className="flex items-center gap-1.5">
                  <img
                    src={logoItaliano}
                    alt="Proyecto Bilingüe Italiano"
                    referrerPolicy="no-referrer"
                    className="h-7 sm:h-8 w-auto object-contain opacity-90 rounded"
                  />
                  <div className="hidden sm:block leading-tight">
                    <span className="text-[10px] font-bold text-slate-700 block uppercase tracking-wider">
                      Bilingüe
                    </span>
                    <span className="text-[9px] text-slate-500 block">
                      Italiano
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                id="modal-bienvenida-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none"
                aria-label="Cerrar ventana de inscripción"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Badge & Title */}
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#000c6b]/10 text-[#000c6b] text-xs font-bold tracking-wide uppercase">
                  <span>Ciclo Lectivo 2027</span>
                </div>
                <h2
                  id="modal-bienvenida-title"
                  className="text-2xl sm:text-3xl font-extrabold text-[#000c6b] tracking-tight leading-snug"
                >
                  Inscripción Ciclo Lectivo 2027
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ya podés solicitar tu vacante para los niveles{' '}
                  <strong className="text-slate-800 font-semibold">Inicial, Primario y Secundario</strong>. Formación integral con proyecto bilingüe en Mar del Plata.
                </p>
              </div>

              {/* Image: Form with School Letterhead and Hand filling it */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <img
                  src={imagenFormulario}
                  alt="Planilla de inscripción oficial de Instituto Domingo F. Sarmiento con membrete institucional"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-103"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium flex items-center justify-between pointer-events-none">
                  <span className="bg-[#000c6b]/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] border border-white/20 font-semibold">
                    Solicitud de Vacante • Ciclo 2027
                  </span>
                  <span className="text-[11px] text-slate-200 font-medium">
                    Mar del Plata
                  </span>
                </div>
              </div>

              {/* Inscribirse Button */}
              <div className="pt-1">
                <button
                  id="modal-bienvenida-btn-inscribirse"
                  onClick={handleInscribirse}
                  className="w-full py-3.5 px-4 bg-[#fac301] hover:bg-[#e5b300] active:scale-[0.99] text-[#000c6b] font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#fac301] focus:ring-offset-2"
                >
                  <span>Inscribirse / Solicitar Vacante</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Subtle footer dismiss */}
              <div className="text-center pt-0.5">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline-offset-2 hover:underline"
                >
                  Continuar navegando en el sitio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
