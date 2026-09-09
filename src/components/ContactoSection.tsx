import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, Instagram, Clock, ArrowRight } from 'lucide-react';
import { INFO_COLEGIO } from '../data/colegioData';

interface ContactoSectionProps {
  initialNivel?: string;
}

export const ContactoSection: React.FC<ContactoSectionProps> = ({ initialNivel = 'Nivel Primario' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nivel: initialNivel,
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setEnviado(true);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#000c6b]/5 text-[#000c6b] text-xs sm:text-sm font-semibold mb-3">
              <Phone className="w-4 h-4 text-[#fac301]" />
              <span>Contacto y Admisiones</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#000c6b] mb-4">
              Comunicate con el Instituto
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              Estamos a disposición para brindar información sobre inscripciones, vacantes y el proyecto pedagógico bilingüe del colegio.
            </p>

            <div className="space-y-4 mb-8">
              {/* Dirección */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#000c6b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Dirección
                  </h4>
                  <p className="text-sm font-medium text-slate-800 mt-0.5">
                    {INFO_COLEGIO.direccion}
                  </p>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Mar del Plata, Provincia de Buenos Aires
                  </span>
                </div>
              </div>

              {/* Instagram */}
              <a
                href={INFO_COLEGIO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#000c6b] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#000c6b] text-[#fac301] flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                      Instagram Oficial
                    </h4>
                    <span className="text-sm font-semibold text-[#000c6b] group-hover:underline">
                      @institutodfsarmiento
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#000c6b] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Horarios & Atención */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#000c6b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Atención de Secretaría
                  </h4>
                  <p className="text-sm text-slate-700 mt-0.5">
                    Lunes a Viernes en horario escolar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#000c6b] mb-1">
                Formulario de Consulta e Inscripción
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Completá tus datos y el nivel educativo de tu interés para recibir respuesta institucional.
              </p>

              {enviado ? (
                <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">
                    Consulta enviada correctamente
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto mb-4">
                    Gracias por contactar al Instituto Domingo F. Sarmiento. El equipo de secretaría se comunicará a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setEnviado(false);
                      setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        nivel: initialNivel,
                        mensaje: '',
                      });
                    }}
                    className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contacto-nombre" className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        id="contacto-nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Martín González"
                        className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#000c6b] focus:border-[#000c6b]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contacto-email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="contacto-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tuemail@ejemplo.com"
                        className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#000c6b] focus:border-[#000c6b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contacto-telefono" className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="contacto-telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. +54 9 223..."
                        className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#000c6b] focus:border-[#000c6b]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contacto-nivel" className="block text-xs font-semibold text-slate-700 mb-1">
                        Nivel de Interés
                      </label>
                      <select
                        id="contacto-nivel"
                        value={formData.nivel}
                        onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#000c6b] focus:border-[#000c6b]"
                      >
                        <option value="Nivel Inicial">Nivel Inicial</option>
                        <option value="Nivel Primario">Nivel Primario</option>
                        <option value="Nivel Secundario">Nivel Secundario</option>
                        <option value="Información General">Información General</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contacto-mensaje" className="block text-xs font-semibold text-slate-700 mb-1">
                      Mensaje o Consulta
                    </label>
                    <textarea
                      id="contacto-mensaje"
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Escribí aquí tu consulta sobre inscripciones o propuesta..."
                      className="w-full px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#000c6b] focus:border-[#000c6b]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="btn-enviar-consulta"
                    className="w-full py-2.5 px-4 rounded-md bg-[#000c6b] hover:bg-[#000a52] text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#fac301] focus:ring-offset-2"
                  >
                    <span>Enviar Solicitud de Información</span>
                    <Send className="w-4 h-4 text-[#fac301]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
