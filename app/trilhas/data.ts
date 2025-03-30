// Defina o tipo dos módulos:
export interface ModuleData {
  title: string;
  slug: string;
}

export interface Trail {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  modules: ModuleData[];
}

export const trails: Trail[] = [
  {
    id: 1,
    title: 'Fundamentos de Astronomia',
    description:
      'Aprenda os conceitos básicos da astronomia, desde o sistema solar até as galáxias.',
    image: '/images/trails/astronomy-basics.jpg',
    duration: '4 semanas',
    level: 'Iniciante',
    modules: [
      { title: 'Introdução à Astronomia', slug: 'introducao-a-astronomia' },
      { title: 'Sistema Solar', slug: 'sistema-solar' },
      { title: 'Estrelas e Constelações', slug: 'estrelas-e-constelacoes' },
      { title: 'Galáxias e Universo', slug: 'galaxias-e-universo' },
    ],
  },
  {
    id: 2,
    title: 'Gravitação Universal',
    description: 'Explore as leis que governam o movimento dos corpos celestes.',
    image: '/images/trails/gravity.jpg',
    duration: '3 semanas',
    level: 'Intermediário',
    modules: [
      { title: 'Leis de Kepler', slug: 'leis-de-kepler' },
      { title: 'Lei da Gravitação Universal', slug: 'lei-da-gravitacao-universal' },
      { title: 'Órbitas e Trajetórias', slug: 'orbitas-e-trajetorias' },
    ],
  },
  {
    id: 3,
    title: 'Astrofísica Moderna',
    description: 'Descubra os mistérios dos buracos negros, matéria escura e energia escura.',
    image: '/images/trails/astrophysics.jpg',
    duration: '6 semanas',
    level: 'Avançado',
    modules: [
      { title: 'Relatividade Especial', slug: 'relatividade-especial' },
      { title: 'Buracos Negros', slug: 'buracos-negros' },
      { title: 'Matéria e Energia Escura', slug: 'materia-e-energia-escura' },
      { title: 'Cosmologia Moderna', slug: 'cosmologia-moderna' },
    ],
  },
  {
    id: 4,
    title: 'Estrelas',
    description:
      'Entenda qual a importância da existênci das estrelas para a composição química do Universo.',
    image: '/images/trails/stars.jpg',
    duration: '4 semanas',
    level: 'Intermediário',
    modules: [
      { title: 'Tipos de estrelas', slug: 'tipos-de-estrelas' },
      { title: 'Diagrama HR', slug: 'diagrama-HR' },
      { title: 'Evolução Estelar', slug: 'evolucao-estelar' },
    ],
  },
  {
    id: 5,
    title: 'Interações na natureza',
    description:
      'Explore as forças fundamentais que governam o universo, desde a gravidade até as interações nucleares.',
    image: '/images/trails/interactions.jpg',
    duration: '4 semanas',
    level: 'Intermediário',
    modules: [
      { title: 'Introdução às Interações', slug: 'introducao-as-interacoes' },
      { title: 'Força Gravitacional', slug: 'forca-gravitacional' },
      { title: 'Força Eletromagnética', slug: 'forca-eletromagnetica' },
      { title: 'Forças Nucleares', slug: 'forcas-nucleares' },
      { title: 'Interações na Vida Cotidiana', slug: 'interacoes-na-vida-cotidiana' },
    ],
  },
  {
    id: 6,
    title: 'Nucleossíntese',
    description: 'Descubra como e onde foram produzidos os elementos químicos.',
    image: '/images/trails/p-table.jpg',
    duration: '4 semanas',
    level: 'Avançado',
    modules: [
      { title: 'Fusão Nuclear', slug: 'fusao-nuclear' },
      { title: 'Tunelamento quântico', slug: 'tunelamento-quantico' },
      { title: 'Cadeia p-p', slug: 'cadeia-pp' },
      { title: 'Ciclo CNO', slug: 'ciclo-cno' },
    ],
  },
];
