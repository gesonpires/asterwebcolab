interface ContentSection {
  title: string;
  content: (string | { image: string; caption?: string } | { video: string })[];
}

interface ModuleContent {
  sections: ContentSection[];
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Quiz {
  questions: Question[];
}

interface ModuleContents {
  [trailId: number]: {
    [moduleId: string]: ModuleContent;
  };
}

interface ModuleQuizzes {
  [trailId: number]: {
    [moduleId: string]: Quiz;
  };
}

export const moduleContents: ModuleContents = {
  1: {
    'introducao-a-astronomia': {
      sections: [
        {
          title: 'O que é Astronomia?',
          content: [
            'A Astronomia é a ciência que estuda os corpos celestes, fenômenos e estruturas que existem além da atmosfera terrestre. É uma das ciências mais antigas da humanidade, tendo suas origens nas práticas religiosas e culturais da pré-história.',
            {
              image: '/images/trails/astronomy-intro.jpg',
              caption: 'Vista do Observatório do Paranal no Chile'
            },
            'Desde os tempos antigos, os seres humanos têm olhado para o céu com admiração e curiosidade. As civilizações antigas usavam os movimentos dos corpos celestes para:',
            '• Criar calendários<br>• Navegar pelos oceanos<br>• Determinar as estações do ano<br>• Desenvolver sistemas religiosos e mitológicos',
            {
              video: 'https://www.youtube.com/embed/mO3Q4bRQZ3k'
            }
          ]
        },
        {
          title: 'Instrumentos Astronômicos',
          content: [
            'Os astrônomos utilizam diversos instrumentos para estudar o universo. O mais conhecido é o telescópio, mas existem muitos outros, como:',
            '• Radiotelescópios<br>• Espectrógrafos<br>• Detectores de ondas gravitacionais<br>• Satélites espaciais',
            {
              image: '/images/trails/telescope.jpg',
              caption: 'Telescópio Espacial James Webb'
            }
          ]
        }
      ]
    },
    'sistema-solar': {
      sections: [
        {
          title: 'Visão Geral do Sistema Solar',
          content: [
            'O Sistema Solar é composto pelo Sol e todos os corpos celestes que orbitam ao seu redor, incluindo planetas, planetas anões, asteroides, cometas e outros objetos espaciais.',
            {
              image: '/images/trails/solar-system.jpg',
              caption: 'Representação artística do Sistema Solar'
            },
            'O Sol é a estrela central do nosso sistema planetário e contém cerca de 99,86% de toda a massa do Sistema Solar. Sua gravidade mantém todos os outros corpos em órbita.',
            'Algumas características interessantes do Sistema Solar:',
            '• Idade: Aproximadamente 4,6 bilhões de anos<br>• Diâmetro: Cerca de 100 UA (Unidades Astronômicas) até o limite da heliosfera<br>• Localização: Braço de Órion da Via Láctea<br>• Velocidade de Rotação ao redor do centro da galáxia: 828.000 km/h',
            {
              image: '/images/trails/sun-prominence.jpg',
              caption: 'O Sol exibindo uma proeminência solar - fenômeno de ejeção de massa coronal'
            }
          ]
        },
        {
          title: 'Os Planetas',
          content: [
            'O Sistema Solar possui oito planetas principais, divididos em duas categorias:',
            'Planetas Rochosos (Terrestres):<br>• Mercúrio - O menor e mais próximo do Sol<br>• Vênus - O mais quente devido ao efeito estufa<br>• Terra - O único conhecido com vida<br>• Marte - O "Planeta Vermelho"',
            {
              image: '/images/trails/rocky-planets.jpg',
              caption: 'Os quatro planetas rochosos do Sistema Solar'
            },
            'Planetas Gasosos (Gigantes):<br>• Júpiter - O maior planeta<br>• Saturno - Famoso por seus anéis<br>• Urano - Gira "deitado" em sua órbita<br>• Netuno - O mais distante',
            {
              image: '/images/trails/gas-giants.jpg',
              caption: 'Os quatro planetas gigantes gasosos'
            }
          ]
        },
        {
          title: 'Outros Objetos',
          content: [
            'Além dos planetas, o Sistema Solar contém diversos outros objetos interessantes:',
            '• Planetas Anões: Plutão, Ceres, Eris, etc.<br>• Asteroides: Principalmente entre Marte e Júpiter<br>• Cometas: Corpos gelados que podem desenvolver caudas<br>• Cinturão de Kuiper: Região além de Netuno com muitos objetos pequenos',
            {
              image: '/images/trails/solar-system-objects.jpg',
              caption: 'Diversos objetos do Sistema Solar'
            }
          ]
        }
      ]
    }
  }
};

export const moduleQuizzes: ModuleQuizzes = {
  1: {
    'introducao-a-astronomia': {
      questions: [
        {
          question: 'Qual é a principal função da Astronomia?',
          options: [
            'Estudar apenas as estrelas',
            'Estudar os corpos celestes e fenômenos além da atmosfera terrestre',
            'Estudar apenas os planetas do Sistema Solar',
            'Estudar apenas a Terra e sua atmosfera'
          ],
          correctAnswer: 1
        },
        {
          question: 'Como as civilizações antigas utilizavam a Astronomia?',
          options: [
            'Apenas para navegação',
            'Apenas para criar calendários',
            'Apenas para rituais religiosos',
            'Para navegação, calendários, agricultura e religião'
          ],
          correctAnswer: 3
        },
        {
          question: 'Qual destes NÃO é um instrumento astronômico?',
          options: [
            'Telescópio',
            'Microscópio',
            'Radiotelescópio',
            'Espectrógrafo'
          ],
          correctAnswer: 1
        }
      ]
    },
    'sistema-solar': {
      questions: [
        {
          question: 'Qual porcentagem aproximada da massa total do Sistema Solar está concentrada no Sol?',
          options: [
            '50%',
            '75%',
            '99.86%',
            '25%'
          ],
          correctAnswer: 2
        },
        {
          question: 'Quantos planetas principais existem atualmente no Sistema Solar?',
          options: [
            '9',
            '8',
            '7',
            '10'
          ],
          correctAnswer: 1
        },
        {
          question: 'Qual é a correta divisão dos tipos de planetas no Sistema Solar?',
          options: [
            'Grandes e pequenos',
            'Quentes e frios',
            'Rochosos (terrestres) e gasosos (gigantes)',
            'Internos e externos'
          ],
          correctAnswer: 2
        },
        {
          question: 'Qual destes NÃO é um planeta anão do Sistema Solar?',
          options: [
            'Plutão',
            'Ceres',
            'Fobos',
            'Eris'
          ],
          correctAnswer: 2
        },
        {
          question: 'Qual característica é única de Urano entre os planetas do Sistema Solar?',
          options: [
            'Ter anéis',
            'Ser gasoso',
            'Girar "deitado" em sua órbita',
            'Ter luas'
          ],
          correctAnswer: 2
        }
      ]
    }
  }
}; 