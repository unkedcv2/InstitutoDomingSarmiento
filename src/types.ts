export type PageSection = 'inicio' | 'institucional' | 'propuesta' | 'niveles' | 'galeria' | 'contacto';

export interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  ctaText: string;
  ctaAction: PageSection | 'inscripcion';
}

export interface NivelEducativo {
  id: string;
  nombre: string;
  descripcion: string;
  caracteristicas: string[];
}

export interface PropuestaPilar {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: 'idiomas' | 'tecnologia' | 'cultura' | 'deportes';
}
