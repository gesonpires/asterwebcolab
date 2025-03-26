export interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
  image: string;
  sections: ContentSection[];
  objectives?: string[];
  prerequisites?: string[];
  resources?: TeacherResource[];
  teacherNotes?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: (TextContent | ImageContent | VideoContent | InteractiveContent)[];
}

export interface TextContent {
  type: 'text';
  text: string;
  highlight?: boolean;
}

export interface ImageContent {
  type: 'image';
  src: string;
  caption: string;
  alt: string;
}

export interface VideoContent {
  type: 'video';
  src: string;
  title: string;
}

export interface InteractiveContent {
  type: 'interactive';
  component: 'simulation' | 'exercise' | 'quiz';
  data: any;
}

export interface TeacherResource {
  type: 'document' | 'presentation' | 'activity' | 'assessment';
  title: string;
  description: string;
  url: string;
}

export const topics: Topic[] = [
  {
    id: 'astronomia-basica',
    title: 'Astronomia Básica',
    description: 'Introdução aos conceitos fundamentais da astronomia, incluindo o Sistema Solar, estrelas e galáxias.',
    duration: '4 semanas',
    level: 'basic',
    image: '/images/topics/astronomy-intro.jpg',
    sections: [
      {
        id: 'introducao',
        title: 'Introdução à Astronomia',
        content: [
          {
            type: 'text',
            text: 'A astronomia é a ciência que estuda os corpos celestes, incluindo planetas, estrelas, galáxias e todos os fenômenos que se originam fora da atmosfera da Terra.'
          },
          {
            type: 'image',
            src: '/images/topics/observatory.jpg',
            caption: 'Observatório astronômico moderno',
            alt: 'Imagem de um observatório astronômico com um grande telescópio'
          },
          {
            type: 'text',
            text: '<strong>Por que estudar astronomia?</strong><br>O estudo da astronomia nos ajuda a:<ul><li>Compreender nosso lugar no universo</li><li>Desenvolver tecnologias avançadas</li><li>Responder questões fundamentais sobre nossa existência</li></ul>',
            highlight: true
          },
          {
            type: 'interactive',
            component: 'exercise',
            data: {
              id: 'astronomia-basica'
            }
          }
        ]
      },
      {
        id: 'sistema-solar',
        title: 'O Sistema Solar',
        content: [
          {
            type: 'text',
            text: 'O Sistema Solar é composto pelo Sol e todos os corpos celestes que orbitam ao seu redor, incluindo planetas, planetas anões, asteroides e cometas.'
          },
          {
            type: 'video',
            src: 'https://www.youtube.com/embed/mO3Q4bRQZ3k',
            title: 'Estrutura do Sistema Solar'
          },
          {
            type: 'interactive',
            component: 'simulation',
            data: {
              type: 'solar-system-model',
              options: {
                interactive: true,
                showOrbits: true
              }
            }
          },
          {
            type: 'interactive',
            component: 'exercise',
            data: {
              id: 'sistema-solar'
            }
          }
        ]
      }
    ],
    objectives: [
      'Compreender os conceitos básicos da astronomia',
      'Identificar os principais componentes do Sistema Solar',
      'Desenvolver habilidades de observação astronômica'
    ],
    prerequisites: [
      'Matemática básica',
      'Física básica'
    ],
    resources: [
      {
        type: 'presentation',
        title: 'Slides: Introdução à Astronomia',
        description: 'Apresentação detalhada com conceitos fundamentais',
        url: '/resources/astronomy-intro-slides.pdf'
      },
      {
        type: 'activity',
        title: 'Atividade Prática: Observação do Céu',
        description: 'Roteiro para atividade de observação noturna',
        url: '/resources/sky-observation-guide.pdf'
      },
      {
        type: 'assessment',
        title: 'Avaliação Diagnóstica',
        description: 'Teste inicial para verificar conhecimentos prévios',
        url: '/resources/diagnostic-assessment.pdf'
      },
      {
        type: 'document',
        title: 'Guia do Professor',
        description: 'Orientações didáticas e sugestões de atividades',
        url: '/resources/teacher-guide.pdf'
      }
    ],
    teacherNotes: 'Enfatizar a importância da observação prática. Sugerir atividades noturnas de observação do céu com os alunos, quando possível. Abordar questões comuns sobre escalas astronômicas.'
  }
];

export const getLevelColor = (level: Topic['level']) => {
  switch (level) {
    case 'basic':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
  }
};

export const getResourceIcon = (type: TeacherResource['type']) => {
  switch (type) {
    case 'document':
      return '📄';
    case 'presentation':
      return '📊';
    case 'activity':
      return '🔬';
    case 'assessment':
      return '📝';
  }
}; 