import React, { useState } from 'react';
import { Camera, X, ArrowUpRight, Maximize2 } from 'lucide-react';
import colegioImg from '../assets/images/colegio_01.png';
import primario01Img from '../assets/images/primario_01.png';
import primario02Img from '../assets/images/primario_02.png';
import primario03Img from '../assets/images/primario_03.png';
import primario04Img from '../assets/images/primario_04.png';
import secundario01Img from '../assets/images/secundario_01.png';

export const GaleriaSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todas' | 'instalaciones' | 'primario' | 'secundario' | 'actividades'>('todas');
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; label: string } | null>(null);

  const galleryItems = [
    {
      id: 'foto-colegio',
      image: colegioImg,
      title: 'Sede e Instalaciones',
      category: 'instalaciones',
      label: '11 de Septiembre 3733, Mar del Plata',
    },
    {
      id: 'foto-primario-1',
      image: primario01Img,
      title: 'Aulas de Nivel Primario',
      category: 'primario',
      label: 'Aprendizaje en aula y proyectos bilingües',
    },
    {
      id: 'foto-primario-2',
      image: primario02Img,
      title: 'Dinámicas Grupales',
      category: 'primario',
      label: 'Enseñanza formativa y valores',
    },
    {
      id: 'foto-primario-3',
      image: primario03Img,
      title: 'Cultura e Idiomas',
      category: 'actividades',
      label: 'Talleres pedagógicos e idioma italiano',
    },
    {
      id: 'foto-primario-4',
      image: primario04Img,
      title: 'Educación Física y Deportes',
      category: 'actividades',
      label: 'Desarrollo corporal y trabajo en equipo',
    },
    {
      id: 'foto-secundario-1',
      image: secundario01Img,
      title: 'Nivel Secundario',
      category: 'secundario',
      label: 'Formación académica superior y autonomía',
    },
  ];

  const filteredItems = activeCategory === 'todas'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#000c6b]/5 text-[#000c6b] text-xs sm:text-sm font-semibold mb-3">
              <Camera className="w-4 h-4 text-[#fac301]" />
              <span>Galería Institucional</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#000c6b]">
              Instalaciones y Vida Escolar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Registro visual de las actividades curriculares, extracurriculares y espacios del Instituto Domingo F. Sarmiento.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'instalaciones', label: 'Instalaciones' },
              { id: 'primario', label: 'Nivel Primario' },
              { id: 'secundario', label: 'Nivel Secundario' },
              { id: 'actividades', label: 'Actividades y Cultura' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#000c6b] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedPhoto({ src: item.image, title: item.title, label: item.label })}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#000c6b]/40 transition-all cursor-pointer group flex flex-col"
            >
              <div className="h-56 bg-slate-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/90 text-[#000c6b] shadow-sm">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between border-t border-slate-100">
                <div>
                  <h4 className="text-sm font-bold text-[#000c6b]">
                    {item.title}
                  </h4>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] font-semibold capitalize px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0 ml-2">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Instagram */}
        <div className="mt-8 p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span>
            Fotografías oficiales del Instituto Domingo F. Sarmiento de Mar del Plata.
          </span>
          <a
            href="https://www.instagram.com/institutodfsarmiento/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#000c6b] hover:underline inline-flex items-center gap-1 shrink-0 ml-4"
          >
            <span>Ver más en Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Light Photo Modal */}
      {selectedPhoto && (
        <div
          id="photo-modal-overlay"
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/20 relative"
          >
            <div className="bg-[#000c6b] text-white px-5 py-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white">{selectedPhoto.title}</h3>
                <p className="text-xs text-[#fac301]">{selectedPhoto.label}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
