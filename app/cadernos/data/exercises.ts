export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ExerciseSet {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const exercises: { [key: string]: ExerciseSet } = {
  'astronomia-basica': {
    id: 'astronomia-basica',
    title: 'Conceitos Básicos de Astronomia',
    description: 'Teste seus conhecimentos sobre os fundamentos da astronomia e do Sistema Solar.',
    questions: [
      {
        id: 'q1',
        text: 'Qual é a estrela central do nosso Sistema Solar?',
        options: [
          'Sirius',
          'Sol',
          'Alpha Centauri',
          'Betelgeuse'
        ],
        correctAnswer: 1,
        explanation: 'O Sol é a estrela central do nosso Sistema Solar, uma estrela de tipo G da sequência principal que fornece luz e calor para todos os planetas do sistema.'
      },
      {
        id: 'q2',
        text: 'Quantos planetas existem atualmente no Sistema Solar?',
        options: [
          '8 planetas',
          '9 planetas',
          '7 planetas',
          '10 planetas'
        ],
        correctAnswer: 0,
        explanation: 'Desde 2006, quando Plutão foi reclassificado como planeta anão, o Sistema Solar possui oficialmente 8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.'
      },
      {
        id: 'q3',
        text: 'O que é um ano-luz?',
        options: [
          'O tempo que a luz leva para dar uma volta ao redor da Terra',
          'A distância que a luz percorre em um ano',
          'O tempo que a Terra leva para dar uma volta ao redor do Sol',
          'A velocidade da luz no espaço'
        ],
        correctAnswer: 1,
        explanation: 'Um ano-luz é uma unidade de distância, não de tempo. É a distância que a luz percorre no vácuo durante um ano, aproximadamente 9,46 trilhões de quilômetros.'
      },
      {
        id: 'q4',
        text: 'Qual é o planeta mais próximo do Sol?',
        options: [
          'Vênus',
          'Terra',
          'Mercúrio',
          'Marte'
        ],
        correctAnswer: 2,
        explanation: 'Mercúrio é o planeta mais próximo do Sol, orbitando a uma distância média de 57,9 milhões de quilômetros da estrela.'
      },
      {
        id: 'q5',
        text: 'O que é uma galáxia?',
        options: [
          'Um conjunto de planetas',
          'Uma estrela muito grande',
          'Um conjunto de estrelas, gás e poeira unidos pela gravidade',
          'Um satélite natural'
        ],
        correctAnswer: 2,
        explanation: 'Uma galáxia é um grande sistema de estrelas, gás, poeira e matéria escura, mantidos unidos pela força gravitacional. Nossa galáxia, a Via Láctea, contém bilhões de estrelas.'
      }
    ]
  },
  'sistema-solar': {
    id: 'sistema-solar',
    title: 'Sistema Solar em Detalhes',
    description: 'Avalie seu conhecimento sobre os planetas e outros corpos do Sistema Solar.',
    questions: [
      {
        id: 'q1',
        text: 'Qual é o maior planeta do Sistema Solar?',
        options: [
          'Saturno',
          'Júpiter',
          'Urano',
          'Netuno'
        ],
        correctAnswer: 1,
        explanation: 'Júpiter é o maior planeta do Sistema Solar, com um diâmetro de aproximadamente 139.820 km, mais de 11 vezes o diâmetro da Terra.'
      },
      {
        id: 'q2',
        text: 'O que é o cinturão de asteroides?',
        options: [
          'Um anel ao redor de Saturno',
          'Uma região entre Marte e Júpiter com muitos asteroides',
          'Uma área ao redor da Terra com satélites',
          'Um conjunto de cometas'
        ],
        correctAnswer: 1,
        explanation: 'O cinturão de asteroides é uma região do Sistema Solar localizada principalmente entre as órbitas de Marte e Júpiter, contendo milhões de objetos rochosos.'
      },
      {
        id: 'q3',
        text: 'Qual planeta é conhecido como "planeta vermelho"?',
        options: [
          'Vênus',
          'Júpiter',
          'Marte',
          'Mercúrio'
        ],
        correctAnswer: 2,
        explanation: 'Marte é conhecido como o "planeta vermelho" devido à sua coloração avermelhada, causada pela grande quantidade de óxido de ferro (ferrugem) em sua superfície.'
      },
      {
        id: 'q4',
        text: 'O que são os anéis de Saturno?',
        options: [
          'Satélites naturais',
          'Nuvens de gás',
          'Discos de gelo, rocha e poeira',
          'Tempestades atmosféricas'
        ],
        correctAnswer: 2,
        explanation: 'Os anéis de Saturno são compostos principalmente de partículas de gelo, rocha e poeira, variando em tamanho de microscópicas a vários metros de diâmetro.'
      },
      {
        id: 'q5',
        text: 'Qual é o planeta mais quente do Sistema Solar?',
        options: [
          'Mercúrio',
          'Vênus',
          'Marte',
          'Júpiter'
        ],
        correctAnswer: 1,
        explanation: 'Apesar de Mercúrio ser o planeta mais próximo do Sol, Vênus é o mais quente devido ao intenso efeito estufa causado por sua densa atmosfera de dióxido de carbono.'
      }
    ]
  }
}; 