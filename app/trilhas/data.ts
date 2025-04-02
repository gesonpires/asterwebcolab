// Defina o tipo dos módulos:
export interface ModuleData {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
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
    description: 'Aprenda os conceitos básicos da astronomia, desde o sistema solar até as galáxias.',
    image: '/images/trails/astronomy-basics.jpg',
    duration: '4 semanas',
    level: 'Iniciante',
    modules: [
      {
        id: 1,
        title: 'Introdução à Astronomia',
        slug: 'introducao-a-astronomia',
        description: 'Conceitos básicos e história da astronomia',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Sistema Solar',
        slug: 'sistema-solar',
        description: 'Exploração do nosso sistema solar',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Estrelas e Constelações',
        slug: 'estrelas-e-constelacoes',
        description: 'Conhecendo as estrelas e suas formações',
        content: 'Conteúdo do módulo 3'
      },
      {
        id: 4,
        title: 'Galáxias e Universo',
        slug: 'galaxias-e-universo',
        description: 'Estrutura e evolução do universo',
        content: 'Conteúdo do módulo 4'
      }
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
      {
        id: 1,
        title: 'Leis de Kepler',
        slug: 'leis-de-kepler',
        description: 'As três leis do movimento planetário',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Lei da Gravitação Universal',
        slug: 'lei-da-gravitacao-universal',
        description: 'A força que governa o universo',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Órbitas e Trajetórias',
        slug: 'orbitas-e-trajetorias',
        description: 'Movimento orbital e suas características',
        content: 'Conteúdo do módulo 3'
      }
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
      {
        id: 1,
        title: 'Relatividade Especial',
        slug: 'relatividade-especial',
        description: 'Os fundamentos da teoria da relatividade',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Buracos Negros',
        slug: 'buracos-negros',
        description: 'Estrutura e propriedades dos buracos negros',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Matéria e Energia Escura',
        slug: 'materia-e-energia-escura',
        description: 'Os componentes misteriosos do universo',
        content: 'Conteúdo do módulo 3'
      },
      {
        id: 4,
        title: 'Cosmologia Moderna',
        slug: 'cosmologia-moderna',
        description: 'A evolução e estrutura do universo',
        content: 'Conteúdo do módulo 4'
      }
    ]
  },
  {
    id: 4,
    title: 'Estrelas',
    description: 'Entenda qual a importância da existência das estrelas para a composição química do Universo.',
    image: '/images/trails/stars.jpg',
    duration: '4 semanas',
    level: 'Intermediário',
    modules: [
      {
        id: 1,
        title: 'Tipos de estrelas',
        slug: 'tipos-de-estrelas',
        description: 'Classificação e características das estrelas',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Diagrama HR',
        slug: 'diagrama-HR',
        description: 'O diagrama de Hertzsprung-Russell',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Evolução Estelar',
        slug: 'evolucao-estelar',
        description: 'O ciclo de vida das estrelas',
        content: 'Conteúdo do módulo 3'
      }
    ]
  },
  {
    id: 5,
    title: 'Interações na natureza',
    description: 'Explore as forças fundamentais que governam o universo, desde a gravidade até as interações nucleares.',
    image: '/images/trails/interactions.jpg',
    duration: '4 semanas',
    level: 'Intermediário',
    modules: [
      {
        id: 1,
        title: 'Introdução às Interações',
        slug: 'introducao-as-interacoes',
        description: 'Visão geral das forças fundamentais',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Força Gravitacional',
        slug: 'forca-gravitacional',
        description: 'A força que governa o movimento dos corpos celestes',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Força Eletromagnética',
        slug: 'forca-eletromagnetica',
        description: 'A força que governa as interações eletromagnéticas',
        content: 'Conteúdo do módulo 3'
      },
      {
        id: 4,
        title: 'Forças Nucleares',
        slug: 'forcas-nucleares',
        description: 'As forças que mantêm o núcleo atômico unido',
        content: 'Conteúdo do módulo 4'
      },
      {
        id: 5,
        title: 'Interações na Vida Cotidiana',
        slug: 'interacoes-na-vida-cotidiana',
        description: 'Exemplos práticos das forças fundamentais',
        content: 'Conteúdo do módulo 5'
      }
    ]
  },
  {
    id: 6,
    title: 'Nucleossíntese',
    description: 'Descubra como e onde foram produzidos os elementos químicos.',
    image: '/images/trails/p-table.jpg',
    duration: '4 semanas',
    level: 'Avançado',
    modules: [
      {
        id: 1,
        title: 'Fusão Nuclear',
        slug: 'fusao-nuclear',
        description: 'O processo de fusão nuclear nas estrelas',
        content: 'Conteúdo do módulo 1'
      },
      {
        id: 2,
        title: 'Tunelamento quântico',
        slug: 'tunelamento-quantico',
        description: 'O fenômeno que permite a fusão nuclear',
        content: 'Conteúdo do módulo 2'
      },
      {
        id: 3,
        title: 'Cadeia p-p',
        slug: 'cadeia-pp',
        description: 'A cadeia próton-próton no Sol',
        content: 'Conteúdo do módulo 3'
      },
      {
        id: 4,
        title: 'Ciclo CNO',
        slug: 'ciclo-cno',
        description: 'O ciclo carbono-nitrogênio-oxigênio',
        content: 'Conteúdo do módulo 4'
      }
    ]
  }
];
