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
  },
  2: {
    'leis-de-kepler': {
      sections: [
        {
          title: 'Introdução às Leis de Kepler',
          content: [
            'As Leis de Kepler descrevem o movimento dos planetas ao redor do Sol, estabelecendo que as órbitas são elípticas, com o Sol em um dos focos.',
            { image: '/images/trails/kepler.jpg', caption: 'Ilustração das órbitas planetárias' }
          ]
        },
        {
          title: 'Detalhes das Leis',
          content: [
            '1ª Lei (Lei das Órbitas): Os planetas se movem em órbitas elípticas com o Sol em um dos focos.',
            '2ª Lei (Lei das Áreas): Uma linha que liga um planeta ao Sol varre áreas iguais em tempos iguais.',
            '3ª Lei (Lei dos Períodos): O quadrado do período orbital é proporcional ao cubo do semieixo maior da órbita.'
          ]
        }
      ]
    },
    'lei-da-gravitacao-universal': {
      sections: [
        {
          title: 'Conceito da Lei da Gravitação Universal',
          content: [
            'A Lei da Gravitação Universal, proposta por Isaac Newton, afirma que cada partícula atrai outra com uma força proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre elas.',
            { image: '/images/trails/newton.jpg', caption: 'Isaac Newton e a Lei da Gravitação' }
          ]
        },
        {
          title: 'Aplicações da Lei',
          content: [
            'Essa lei explica não apenas o movimento dos planetas, mas também a trajetória de projéteis, a formação das marés e outros fenômenos naturais.'
          ]
        }
      ]
    },
    'orbitas-e-trajetorias': {
      sections: [
        {
          title: 'Conceitos de Órbitas',
          content: [
            'Órbitas são os caminhos que os corpos celestes seguem ao redor de um centro de gravidade. Esses caminhos podem ser elípticos, circulares ou parabólicos, dependendo das condições iniciais do movimento.',
            { image: '/images/trails/orbit.jpg', caption: 'Exemplo de órbita planetária' }
          ]
        },
        {
          title: 'Trajetórias de Satélites e Naves',
          content: [
            'O cálculo das trajetórias de satélites e naves espaciais utiliza as leis de Kepler e a Lei da Gravitação Universal, garantindo que eles se mantenham em órbita ou sigam trajetórias planejadas para missões espaciais.'
          ]
        }
      ]
    }
  },
  3: {
    'relatividade-especial': {
      sections: [
        {
          title: 'Fundamentos da Relatividade Especial',
          content: [
            'A Relatividade Especial, formulada por Einstein, revolucionou nossa compreensão do espaço e do tempo, demonstrando que as medições de tempo e distância são relativas ao observador.',
            { image: '/images/trails/relatividade-especial.jpg', caption: 'Ilustração da dilatação do tempo' }
          ]
        },
        {
          title: 'Efeitos e Implicações',
          content: [
            'Entre os efeitos mais conhecidos estão a dilatação do tempo e a contração do espaço, que se tornam significativos em velocidades próximas à da luz.'
          ]
        }
      ]
    },
    'buracos-negros': {
      sections: [
        {
          title: 'O que são Buracos Negros?',
          content: [
            'Buracos negros são regiões do espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, consegue escapar. Eles surgem do colapso gravitacional de estrelas massivas.',
            { image: '/images/trails/buracos-negros.jpg', caption: 'Representação artística de um buraco negro' }
          ]
        },
        {
          title: 'Detecção e Observações',
          content: [
            'Apesar de sua natureza "invisível", os buracos negros podem ser detectados pelos efeitos gravitacionais que exercem sobre a matéria próxima e pela radiação emitida por discos de acreção.'
          ]
        }
      ]
    },
    'materia-e-energia-escura': {
      sections: [
        {
          title: 'Introdução à Matéria e Energia Escura',
          content: [
            'A matéria escura não emite, absorve ou reflete luz, mas sua presença é inferida a partir dos efeitos gravitacionais. A energia escura está associada à aceleração da expansão do universo.',
            { image: '/images/trails/materia-energia-escura.jpg', caption: 'Representação da matéria e energia escura no universo' }
          ]
        },
        {
          title: 'Impactos na Cosmologia',
          content: [
            'Juntas, matéria e energia escuras compõem a maior parte do universo e são fundamentais para entender sua estrutura e evolução.'
          ]
        }
      ]
    },
    'cosmologia-moderna': {
      sections: [
        {
          title: 'A Evolução do Universo',
          content: [
            'A Cosmologia Moderna busca entender a origem, evolução e destino do universo, desde o Big Bang até as teorias atuais que explicam sua expansão e estrutura.'
          ]
        },
        {
          title: 'Modelos e Teorias',
          content: [
            'Modelos como o Big Bang, a inflação cósmica e a teoria do universo em expansão ajudam a explicar as observações astronômicas, como a radiação cósmica de fundo e a distribuição das galáxias.'
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
  },
  2: {
    'leis-de-kepler': {
      questions: [
        {
          question: 'Qual a afirmação correta sobre a primeira lei de Kepler?',
          options: [
            'Os planetas se movem em órbitas circulares',
            'Os planetas se movem em órbitas elípticas com o Sol em um dos focos',
            'Os planetas se movem em órbitas parabólicas',
            'Os planetas permanecem estacionários'
          ],
          correctAnswer: 1
        },
        {
          question: 'O que a segunda lei de Kepler estabelece?',
          options: [
            'Que as áreas varridas em intervalos iguais de tempo são iguais',
            'Que os planetas se movem em órbitas elípticas',
            'Que a velocidade dos planetas é constante',
            'Que os planetas aceleram uniformemente'
          ],
          correctAnswer: 0
        }
      ]
    },
    'lei-da-gravitacao-universal': {
      questions: [
        {
          question: 'Qual a relação estabelecida pela Lei da Gravitação Universal?',
          options: [
            'A força de atração é proporcional à soma das massas',
            'A força de atração é inversamente proporcional ao quadrado da distância entre os corpos',
            'A força de atração é constante entre quaisquer dois corpos',
            'A força de atração é proporcional à diferença das massas'
          ],
          correctAnswer: 1
        }
      ]
    },
    'orbitas-e-trajetorias': {
      questions: [
        {
          question: 'Qual dos seguintes não é um tipo de órbita?',
          options: [
            'Elíptica',
            'Circular',
            'Parabólica',
            'Retangular'
          ],
          correctAnswer: 3
        },
        {
          question: 'O que influencia a trajetória de uma nave espacial?',
          options: [
            'Somente a gravitação do corpo celeste',
            'As leis de Kepler e a gravitação universal',
            'A resistência do ar',
            'A cor da nave'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  3: {
    'relatividade-especial': {
      questions: [
        {
          question: 'Quem formulou a Teoria da Relatividade Especial?',
          options: ['Newton', 'Einstein', 'Galileu', 'Bohr'],
          correctAnswer: 1
        },
        {
          question: 'Qual fenômeno é consequência da Relatividade Especial?',
          options: [
            'Dilatação do tempo',
            'Contração do espaço',
            'Ambas as anteriores',
            'Nenhuma das anteriores'
          ],
          correctAnswer: 2
        }
      ]
    },
    'buracos-negros': {
      questions: [
        {
          question: 'O que caracteriza um buraco negro?',
          options: [
            'Emite luz intensa',
            'É uma estrela supernova',
            'Possui gravidade tão intensa que nada escapa',
            'É um buraco no espaço'
          ],
          correctAnswer: 2
        },
        {
          question: 'Como os buracos negros podem ser detectados?',
          options: [
            'Pela radiação emitida pelo próprio buraco',
            'Por meio dos efeitos gravitacionais na matéria próxima',
            'Pela emissão de som',
            'Pelo brilho intenso ao seu redor'
          ],
          correctAnswer: 1
        }
      ]
    },
    'materia-e-energia-escura': {
      questions: [
        {
          question: 'O que é matéria escura?',
          options: [
            'Matéria que interage fortemente com a luz',
            'Matéria que não emite nem absorve luz',
            'Matéria visível',
            'Energia concentrada em forma de matéria'
          ],
          correctAnswer: 1
        },
        {
          question: 'Qual o efeito da energia escura no universo?',
          options: [
            'Faz o universo contrair',
            'Acelera a expansão do universo',
            'Estabiliza a formação de estruturas',
            'Não tem efeito notável'
          ],
          correctAnswer: 1
        }
      ]
    },
    'cosmologia-moderna': {
      questions: [
        {
          question: 'Qual evento é considerado o início do universo no modelo do Big Bang?',
          options: [
            'A formação das estrelas',
            'A expansão inicial do universo',
            'A explosão de uma supernova',
            'A formação dos planetas'
          ],
          correctAnswer: 1
        },
        {
          question: 'O que a inflação cósmica explica?',
          options: [
            'A formação de buracos negros',
            'A expansão acelerada do universo logo após o Big Bang',
            'A rotação das galáxias',
            'A origem das estrelas'
          ],
          correctAnswer: 1
        }
      ]
    }
  }
};

