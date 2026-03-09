/**
 * content.ts
 * ──────────────────────────────────────────────────────────────
 * Archivo centralizado de contenido y configuración del sitio.
 * Modificá aquí textos, datos de contacto, redes sociales,
 * imágenes y cualquier valor que pueda cambiar con el tiempo.
 * ──────────────────────────────────────────────────────────────
 */

// ── Datos del sitio ──────────────────────────────────────────
export const SITE = {
  name: 'Ariana Mellao',
  tagline: 'Liderazgo Argentino',
  description:
    'Ariana Mellao, liderazgo argentino para una nueva etapa. Producción Nacional, Transparencia Institucional y Bienestar Ciudadano.',
  heroPhoto: '/politica.jpeg',       // ruta relativa a /public
  heroPhotoAlt: 'Ariana Mellao',
} as const;

// ── Redes sociales ────────────────────────────────────────────
export const SOCIAL = {
  twitter: {
    handle: '@arianamellao',
    url: 'https://twitter.com/arianamellao',
  },
  instagram: {
    handle: '@arianamellaoo',
    url: 'https://instagram.com/arianamellaoo',
  },
} as const;

// ── Contacto de prensa ────────────────────────────────────────
export const PRESS = {
  label: 'Contacto de prensa',
  /** Número en formato internacional sin espacios ni guiones */
  whatsappNumber: '5491130538404',
  /** Mensaje pre-cargado opcional; dejar vacío para omitir */
  whatsappMessage: 'Hola, me comunico por consulta de prensa.',
  get whatsappUrl() {
    const msg = this.whatsappMessage
      ? `?text=${encodeURIComponent(this.whatsappMessage)}`
      : '';
    return `https://wa.me/${this.whatsappNumber}${msg}`;
  },
  /** Número formateado para mostrar en pantalla */
  displayNumber: '+54 9 11 3053-8404',
} as const;

// ── Navegación ────────────────────────────────────────────────
export const NAV_LINKS = [
  { to: '/quien-soy',                  label: '¿Quién soy?' },
  { to: '/produccion-nacional',        label: 'Producción Nacional' },
  { to: '/transparencia-institucional',label: 'Transparencia' },
  { to: '/bienestar-ciudadano',        label: 'Bienestar Ciudadano' },
  { to: '/medios',                     label: 'Medios' },
  { to: '/sumate',                     label: 'Sumate' },
] as const;

// ── Home ──────────────────────────────────────────────────────
export const HOME = {
  heroHeadline: 'Para una',
  heroHeadlineAccent: 'nueva etapa',
  heroSubtitle:
    'Producción, transparencia y bienestar ciudadano como pilares de un proyecto político serio y comprometido.',
  heroCta: 'Conocé mi proyecto',
  heroCtaSecondary: 'Sumate al proyecto',
  quote:
    '"El cambio es posible cuando la ciudadanía y sus representantes comparten un proyecto genuino."',
  quoteAuthor: SITE.name,
  sections: [
    {
      to: '/quien-soy',
      label: '01',
      title: '¿Quién soy?',
      description:
        'Trayectoria, valores y visión de una dirigente comprometida con el futuro de Argentina.',
    },
    {
      to: '/produccion-nacional',
      label: '02',
      title: 'Producción Nacional',
      description:
        'PyMEs, desarrollo regional e innovación tecnológica como motores del progreso.',
    },
    {
      to: '/transparencia-institucional',
      label: '03',
      title: 'Transparencia Institucional',
      description:
        'Gobierno abierto, pluralismo sindical y rendición de cuentas sin privilegios.',
    },
    {
      to: '/bienestar-ciudadano',
      label: '04',
      title: 'Bienestar Ciudadano',
      description:
        'Dignidad, salud comunitaria y desarrollo integral para cada argentino.',
    },
    {
      to: '/medios',
      label: '05',
      title: 'Medios',
      description:
        'Entrevistas, artículos y apariciones en prensa, televisión y radio.',
    },
    {
      to: '/sumate',
      label: '06',
      title: 'Sumate',
      description:
        'Unite al proyecto. Tu participación hace posible el cambio que Argentina necesita.',
      highlight: true,
    },
  ],
} as const;

// ── Páginas interiores ────────────────────────────────────────

export const QUIEN_SOY = {
  pageTitle: '¿Quién soy?',
  pageLabel: 'Sobre mí',
  intro: undefined, // sin párrafo introductorio
  sections: [
    {
      title: 'Mi trayectoria',
      paragraphs: [
        'Soy una dirigente comprometida con el futuro de Argentina. Mi carrera política se ha caracterizado por la búsqueda incansable de soluciones concretas a los problemas que enfrentan los argentinos día a día.',
      ],
    },
    {
      title: 'Mis valores',
      paragraphs: [
        'Creo firmemente en la transparencia, la honestidad y el trabajo en equipo. Mi compromiso es con todos los argentinos, sin distinción de origen, ideología o condición social.',
      ],
    },
    {
      title: 'Mi visión',
      paragraphs: [
        'Argentina necesita un liderazgo renovado que ponga el foco en la producción, la transparencia y el bienestar de todos sus ciudadanos. Trabajemos juntos para construir el país que merecemos.',
      ],
    },
  ],
} as const;

export const PRODUCCION_NACIONAL = {
  pageTitle: 'Producción Nacional',
  pageLabel: 'Agenda económica',
  intro:
    'La producción nacional es el motor del desarrollo económico y social de nuestro país. Necesitamos políticas que fortalezcan a nuestros productores, generen empleo de calidad y promuevan el valor agregado en todos los sectores.',
  pillars: [
    {
      num: '01',
      title: 'Apoyo a las PyMEs',
      paragraphs: [
        'Las pequeñas y medianas empresas son el corazón productivo de Argentina. Debemos garantizar acceso al crédito, reducir la carga impositiva y simplificar los trámites burocráticos para que puedan crecer y generar más empleo.',
      ],
    },
    {
      num: '02',
      title: 'Desarrollo regional',
      paragraphs: [
        'Cada región de Argentina tiene potencial productivo único. Promoveremos el desarrollo equilibrado del territorio, fortaleciendo las economías regionales y las cadenas de valor locales.',
      ],
    },
    {
      num: '03',
      title: 'Innovación y tecnología',
      paragraphs: [
        'La innovación tecnológica es clave para aumentar la competitividad. Impulsaremos la investigación, el desarrollo y la transferencia tecnológica para modernizar nuestra matriz productiva.',
      ],
    },
  ],
} as const;

export const TRANSPARENCIA = {
  pageTitle: 'Transparencia Institucional',
  pageLabel: 'Reforma del Estado',
  intro:
    'La confianza en las instituciones se construye con transparencia, rendición de cuentas y un compromiso firme con el Estado de Derecho. Propongo una agenda de reformas profundas para fortalecer nuestra democracia.',
  pillars: [
    {
      num: '01',
      title: 'Gobierno Abierto',
      paragraphs: [
        'Los ciudadanos tienen derecho a saber cómo se utilizan los recursos públicos. Impulsaremos la implementación de plataformas digitales que permitan el acceso abierto a la información sobre gestión pública, presupuestos, contrataciones y decisiones de gobierno.',
        'La transparencia no es solo publicar datos, es garantizar que sean comprensibles y útiles para que la ciudadanía pueda ejercer un control efectivo sobre sus representantes.',
      ],
    },
    {
      num: '02',
      title: 'Pluralismo Sindical',
      paragraphs: [
        'Los trabajadores deben tener libertad real para elegir quién los representa. El modelo de sindicato único concentra poder y limita la democracia sindical. Debemos avanzar hacia un sistema que permita la coexistencia de diferentes organizaciones sindicales en cada sector.',
        'El pluralismo sindical fortalece los derechos de los trabajadores, promueve la competencia entre representantes y garantiza que las organizaciones sindicales respondan verdaderamente a los intereses de sus afiliados.',
      ],
    },
    {
      num: '03',
      title: 'Eliminación de fueros',
      paragraphs: [
        'Todos los ciudadanos deben ser iguales ante la ley. Los privilegios y fueros especiales que protegen a algunos funcionarios de la Justicia erosionan la confianza en las instituciones y crean una sensación de impunidad.',
        'Propongo la eliminación gradual de los fueros, manteniendo únicamente las garantías mínimas necesarias para el ejercicio de las funciones públicas, pero sin convertirlos en escudos contra la Justicia.',
      ],
    },
  ],
} as const;

export const BIENESTAR = {
  pageTitle: 'Bienestar Ciudadano',
  pageLabel: 'Desarrollo social',
  intro:
    'El bienestar de los ciudadanos es el objetivo último de toda política pública. Trabajar por la dignidad, la salud y el desarrollo integral de cada argentino es nuestro compromiso fundamental.',
  pillars: [
    {
      num: '01',
      title: 'Legado Alfredo Moffat',
      paragraphs: [
        'El pensamiento de Alfredo Moffat, pionero en psicología social comunitaria, nos enseña que el bienestar no es solo individual sino colectivo. Su trabajo en barrios populares demostró que las comunidades tienen recursos propios para transformar su realidad.',
        'Inspirados en su legado, propongo políticas públicas que fortalezcan el tejido social, promuevan la participación comunitaria y reconozcan la cultura popular como fuente de identidad y transformación. La salud mental y el desarrollo comunitario deben ser prioridades de Estado.',
      ],
    },
    {
      num: '02',
      title: 'Mis escritos',
      paragraphs: [
        'A lo largo de mi trayectoria he reflexionado profundamente sobre los desafíos que enfrenta Argentina. Mis escritos abordan temas como la justicia social, el desarrollo económico con inclusión, y la necesidad de construir una democracia más participativa y transparente.',
        'Creo en el poder de las ideas para transformar la realidad. Cada texto es una invitación al diálogo, un aporte al debate público y una propuesta concreta para construir el país que soñamos.',
      ],
    },
    {
      num: '03',
      title: 'Recuperar la dignidad',
      paragraphs: [
        'La dignidad no es un lujo, es un derecho fundamental de todo ser humano. Miles de argentinos viven hoy en situaciones que atentan contra su dignidad: falta de trabajo, viviendas precarias, acceso limitado a salud y educación de calidad.',
        'Recuperar la dignidad implica garantizar trabajo genuino, salarios justos, vivienda digna, educación de calidad y acceso universal a la salud. Significa también que cada ciudadano sea tratado con respeto por las instituciones y tenga oportunidades reales de desarrollo.',
      ],
    },
  ],
} as const;

export const MEDIOS = {
  pageTitle: 'Medios',
  pageLabel: 'Comunicación',
  intro:
    'El diálogo con los medios de comunicación es fundamental para acercar las propuestas a la ciudadanía. Aquí encontrarás mis apariciones, entrevistas y artículos.',
  pressNote:
    'Para solicitudes de entrevistas o información, contactá a través de nuestras redes sociales o el formulario en la sección Sumate.',
  // TODO: Agregar apariciones reales cuando estén disponibles
  appearances: [] as Array<{ date: string; outlet: string; title: string; url?: string }>,
} as const;

export const SUMATE = {
  pageTitle: 'Sumate',
  pageLabel: 'Unite al proyecto',
  intro:
    'Argentina necesita el compromiso de todos. Unite a nuestro proyecto para construir juntos el país que merecemos.',
  quote:
    '¿Por qué sumarte? Porque creemos en un país mejor para todos. Porque el cambio es posible si trabajamos juntos.',
  ways: [
    {
      key: 'participar' as const,
      title: 'Participá',
      description: 'Formá parte de nuestros encuentros y actividades territoriales.',
    },
    {
      key: 'colaborar' as const,
      title: 'Colaborá',
      description: 'Tu aporte, sea de tiempo o recursos, hace la diferencia.',
    },
    {
      key: 'difundir' as const,
      title: 'Difundí',
      description: 'Compartí nuestras propuestas en tu comunidad y redes.',
    },
  ],
  formas: [
    {
      key: 'Militancia activa',
      desc: 'Participá en nuestras actividades territoriales y eventos políticos.',
    },
    {
      key: 'Voluntariado',
      desc: 'Colaborá con tu tiempo y habilidades en proyectos comunitarios.',
    },
    {
      key: 'Difusión',
      desc: 'Ayudanos a comunicar nuestras propuestas en redes sociales y tu comunidad.',
    },
    {
      key: 'Aportes',
      desc: 'Tu contribución económica nos permite sostener nuestras actividades.',
    },
  ],
} as const;
