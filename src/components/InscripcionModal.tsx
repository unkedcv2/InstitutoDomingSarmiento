import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import logoColegio from '../assets/images/Institutodfs_logook.png';

interface InscripcionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNivel?: string;
}

export const InscripcionModal: React.FC<InscripcionModalProps> = ({
  isOpen,
  onClose,
  defaultNivel = 'Nivel Primario',
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nivel: defaultNivel,
    comentario: '',
  });

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, nivel: defaultNivel }));
  }, [defaultNivel]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setEnviado(true);
  };

  const handleModalClose = () => {
    setEnviado(false);
    onClose();
  };

  return (
    <div
      id="modal-inscripcion-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        id="modal-inscripcion-content"
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="bg-[#000c6b] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoColegio}
              alt="Instituto Domingo F. Sarmiento"
              referrerPolicy="no-referrer"
              className="w-11 h-11 object-contain rounded-lg bg-white p-1 shadow-sm shrink-0 border border-white/20"
            />
            <div>
              <h3 className="font-bold text-base text-white">
                Solicitud de Admisión e Inscripción
              </h3>
              <p className="text-xs text-[#fac301]">
                Instituto Domingo F. Sarmiento • Mar del Plata
              </p>
            </div>
          </div>

          <button
            id="modal-close-btn"
            onClick={handleModalClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {enviado ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Solicitud Registrada
              </h4>
              <p className="text-sm text-slate-600 mb-6">
                Hemos recibido tu solicitud para <span className="font-semibold text-[#000c6b]">{formData.nivel}</span>. La secretaría del colegio se comunicará contigo.
              </p>
              <button
                id="modal-finish-btn"
                onClick={handleModalClose}
                className="px-5 py-2.5 bg-[#000c6b] text-white text-sm font-semibold rounded-md hover:bg-[#000a52]"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre y Apellido del Padre / Madre / Tutor *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Nombre y Apellido"
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000c6b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000c6b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+54 9 223..."
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000c6b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nivel Educativo de Interés
                </label>
                <select
                  value={formData.nivel}
                  onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000c6b]"
                >
                  <option value="Nivel Inicial">Nivel Inicial</option>
                  <option value="Nivel Primario">Nivel Primario</option>
                  <option value="Nivel Secundario">Nivel Secundario</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Observaciones (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  placeholder="Año de ingreso, consultas sobre horario o proyecto bilingüe..."
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#000c6b]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  id="modal-submit-btn"
                  className="px-5 py-2 bg-[#fac301] hover:bg-[#e5b300] text-[#000c6b] font-bold text-sm rounded shadow-sm flex items-center gap-1.5"
                >
                  <span>Enviar Solicitud</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
