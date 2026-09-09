import { SlideItem, NivelEducativo, PropuestaPilar } from '../types';

export const INFO_COLEGIO = {
  nombre: 'Instituto Domingo F. Sarmiento',
  lema: 'Escuela de gestión privada con proyecto Bilingüe',
  ciudad: 'Mar del Plata, Provincia de Buenos Aires, Argentina',
  direccion: '11 de Septiembre 3733 (entre Dorrego y 14 de Julio), Mar del Plata',
  instagram: 'https://www.instagram.com/institutodfsarmiento/',
  telefonoPlaceholder: 'Consultar por formulario o secretaría',
  emailPlaceholder: 'contacto@institutodomingosarmiento.com.ar',
  descripcionInstitucional:
    'El Instituto Domingo F. Sarmiento es un establecimiento educativo privado de gestión privada ubicado en la ciudad de Mar del Plata, Provincia de Buenos Aires, Argentina. Cuenta con trayectoria en formación general y una sólida propuesta pedagógica.',
};

export const SLIDES_HERO: SlideItem[] = [
  {
    id: 'inscripciones',
    badge: 'Ciclo Lectivo',
    title: 'Inscripciones y Admisiones',
    subtitle: 'Conocé nuestra propuesta educativa para los niveles Inicial, Primario y Secundario.',
    ctaText: 'Solicitar Información de Inscripción',
    ctaAction: 'inscripcion',
  },
  {
    id: 'bilingue',
    badge: 'Identidad Pedagógica',
    title: 'Proyecto Bilingüe e Italiano',
    subtitle: 'Enseñanza formativa con proyectos vinculados a la cultura y el idioma italiano, inglés y TICs.',
    ctaText: 'Ver Propuesta Formativa',
    ctaAction: 'propuesta',
  },
  {
    id: 'niveles',
    badge: 'Comunidad Educativa',
    title: 'Trayectoria en Formación Integral',
    subtitle: 'Acompañamos el desarrollo de niños y jóvenes en un entorno de aprendizaje cuidado y estimulante.',
    ctaText: 'Explorar Niveles Educativos',
    ctaAction: 'niveles',
  },
];

export const NIVELES_EDUCATIVOS: NivelEducativo[] = [
  {
    id: 'inicial',
    nombre: 'Nivel Inicial',
    descripcion: 'Primeras experiencias de socialización, juego pedagógico, exploración y estímulo temprano en idiomas y expresión.',
    caracteristicas: [
      'Iniciación en inglés e italiano',
      'Desarrollo psicomotriz y juego pedagógico',
      'Música y expresión creativa',
      'Articulación fluida con el Nivel Primario',
    ],
  },
  {
    id: 'primario',
    nombre: 'Nivel Primario',
    descripcion: 'Formación académica integral, afianzamiento de competencias lingüísticas, pensamiento lógico y saberes científicos.',
    caracteristicas: [
      'Proyecto bilingüe e intensificación en idioma italiano',
      'Integración de TICs en el aula',
      'Educación física y actividades deportivas',
      'Formación en valores y proyectos culturales',
    ],
  },
  {
    id: 'secundario',
    nombre: 'Nivel Secundario',
    descripcion: 'Consolidación de autonomía, pensamiento crítico y competencias para estudios superiores y vida ciudadana.',
    caracteristicas: [
      'Profundización en lengua extranjera y cultura italiana',
      'Uso de tecnologías digitales aplicadas al aprendizaje',
      'Proyectos curriculares y extracurriculares integrales',
      'Acompañamiento vocacional y formativo',
    ],
  },
];

export const PROPUESTA_PILAR: PropuestaPilar[] = [
  {
    id: 'idiomas',
    titulo: 'Inglés e Italiano',
    descripcion: 'Proyecto bilingüe con fuerte vinculación al idioma y la cultura italiana, junto con formación continua en lengua inglesa.',
    categoria: 'idiomas',
  },
  {
    id: 'tics',
    titulo: 'Tecnologías (TICs)',
    descripcion: 'Inclusión de herramientas tecnológicas y recursos digitales integrados al plan de estudios para potenciar el aprendizaje.',
    categoria: 'tecnologia',
  },
  {
    id: 'educacion-fisica',
    titulo: 'Educación Física y Deportes',
    descripcion: 'Actividades curriculares y extracurriculares orientadas al trabajo en equipo, hábitos saludables y desarrollo corporal.',
    categoria: 'deportes',
  },
  {
    id: 'cultura-musica',
    titulo: 'Música y Cultura',
    descripcion: 'Espacios de expresión artística, apreciación musical y proyectos vinculados a la cultura ítalo-argentina.',
    categoria: 'cultura',
  },
];
