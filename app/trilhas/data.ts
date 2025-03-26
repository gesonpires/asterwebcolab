export interface Trail {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  modules: string[];
}

export const trails: Trail[] = [
  {
    id: 1,
    title: 'Fundamentos de Astronomia',
    description: 'Aprenda os conceitos básicos da astronomia, desde o sistema solar até as galáxias.',
    image: '/images/trails/astronomy-basics.jpg',
    duration: '4 semanas',
    level: 'Iniciante',
    modules: [
      'Introdução à Astronomia',
      'Sistema Solar',
      'Estrelas e Constelações',
      'Galáxias e Universo'
    ]
  },
  {
    id: 2,
    title: 'Gravitação Universal',
    description: 'Explore as leis que governam o movimento dos corpos celestes.',
    image: '/images/trails/gravity.jpg',
    duration: '3 semanas',
    level: 'Intermediário',
    modules: [
      'Leis de Kepler',
      'Lei da Gravitação Universal',
      'Órbitas e Trajetórias'
    ]
  },
  {
    id: 3,
    title: 'Astrofísica Moderna',
    description: 'Descubra os mistérios dos buracos negros, matéria escura e energia escura.',
    image: '/images/trails/astrophysics.jpg',
    duration: '6 semanas',
    level: 'Avançado',
    modules: [
      'Relatividade Especial',
      'Buracos Negros',
      'Matéria e Energia Escura',
      'Cosmologia Moderna'
    ]
  }
]; 