interface Term {
  id: string;
  category: string;
  term: string;
  definition: string;
  example: string;
  image: string;
  relatedTerms: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const terms: Term[] = [
  {
    id: 'solar-system',
    category: 'solar-system',
    term: 'Sistema Solar',
    definition: 'O Sistema Solar é o conjunto formado pelo Sol e todos os corpos celestes que orbitam ao seu redor, incluindo planetas, planetas anões, asteroides, cometas e outros objetos espaciais.',
    example: 'Imagine o Sistema Solar como uma família: o Sol é o pai/mãe no centro, e os planetas são os filhos orbitando ao seu redor em diferentes distâncias e velocidades.',
    image: '/images/glossary/solar-system.jpg',
    relatedTerms: ['Sol', 'Planetas', 'Órbita', 'Gravidade'],
    difficulty: 'beginner'
  },
  {
    id: 'sun',
    category: 'stars',
    term: 'Sol',
    definition: 'O Sol é a estrela central do nosso Sistema Solar, uma esfera de plasma que gera energia através da fusão nuclear de hidrogênio em hélio.',
    example: 'Se o Sol fosse do tamanho de uma bola de basquete, a Terra seria do tamanho de uma ervilha, e estaria a cerca de 30 metros de distância.',
    image: '/images/glossary/sun.jpg',
    relatedTerms: ['Fusão Nuclear', 'Fotosfera', 'Manchas Solares', 'Vento Solar'],
    difficulty: 'intermediate'
  },
  {
    id: 'galaxy',
    category: 'galaxies',
    term: 'Galáxia',
    definition: 'Uma galáxia é um sistema gravitacionalmente ligado de estrelas, restos estelares, gás interestelar, poeira e matéria escura.',
    example: 'A Via Láctea, nossa galáxia, contém cerca de 100 bilhões de estrelas e tem um diâmetro de aproximadamente 100.000 anos-luz.',
    image: '/images/glossary/galaxy.jpg',
    relatedTerms: ['Via Láctea', 'Estrelas', 'Nebulosas', 'Matéria Escura'],
    difficulty: 'intermediate'
  },
  {
    id: 'big-bang',
    category: 'cosmology',
    term: 'Big Bang',
    definition: 'O Big Bang é a teoria científica que descreve como o universo se expandiu a partir de um estado inicial de alta densidade e temperatura.',
    example: 'Imagine um balão sendo inflado: assim como os pontos na superfície do balão se afastam uns dos outros, as galáxias se afastam umas das outras no espaço.',
    image: '/images/glossary/big-bang.jpg',
    relatedTerms: ['Expansão do Universo', 'Radiação Cósmica de Fundo', 'Inflação Cósmica', 'Evolução do Universo'],
    difficulty: 'advanced'
  },
  {
    id: 'nucleosynthesis',
    category: 'stars',
    term: 'Nucleossíntese',
    definition: 'Processo de criação de novos núcleos atômicos a partir de núcleos preexistentes e nucleons (prótons e nêutrons). Nas estrelas, este processo ocorre através da fusão nuclear, sendo responsável pela produção da maioria dos elementos químicos do universo.',
    example: 'O hélio em balões de festa foi produzido principalmente durante os primeiros minutos após o Big Bang, enquanto o cálcio em nossos ossos foi criado em estrelas massivas através da nucleossíntese estelar.',
    image: '/images/glossary/nucleosynthesis.jpg',
    relatedTerms: ['Fusão Nuclear', 'Ciclo CNO', 'Cadeia p-p', 'Evolução Estelar'],
    difficulty: 'advanced'
  },
  {
    id: 'cno-cycle',
    category: 'stars',
    term: 'Ciclo CNO',
    definition: 'O ciclo carbono-nitrogênio-oxigênio (CNO) é uma série de reações de fusão nuclear que ocorre em estrelas mais massivas que o Sol. Neste processo, carbono, nitrogênio e oxigênio atuam como catalisadores para converter hidrogênio em hélio.',
    example: 'Em uma estrela com 1.3 vezes a massa do Sol, cerca de 20% da energia é produzida pelo ciclo CNO. Em estrelas mais massivas, este ciclo se torna o processo dominante de geração de energia.',
    image: '/images/glossary/cno-cycle.jpg',
    relatedTerms: ['Nucleossíntese', 'Fusão Nuclear', 'Cadeia p-p', 'Evolução Estelar'],
    difficulty: 'advanced'
  },
  {
    id: 'pp-chain',
    category: 'stars',
    term: 'Cadeia próton-próton',
    definition: 'A cadeia próton-próton (cadeia p-p) é uma sequência de reações nucleares onde quatro prótons (núcleos de hidrogênio) se fundem para formar um núcleo de hélio. Este é o principal processo de geração de energia no Sol e em estrelas de massa similar ou menor.',
    example: 'A cada segundo, o Sol converte cerca de 600 milhões de toneladas de hidrogênio em hélio através da cadeia p-p, liberando energia em forma de luz e calor.',
    image: '/images/glossary/pp-chain.jpg',
    relatedTerms: ['Nucleossíntese', 'Fusão Nuclear', 'Ciclo CNO', 'Sol'],
    difficulty: 'advanced'
  },
  {
    id: 'nuclear-fusion',
    category: 'stars',
    term: 'Fusão Nuclear',
    definition: 'Processo onde núcleos atômicos leves se combinam para formar núcleos mais pesados, liberando ou absorvendo energia. Este processo é a principal fonte de energia das estrelas e requer temperaturas e pressões extremamente altas para superar a repulsão eletrostática entre os núcleos.',
    example: 'No centro do Sol, a temperatura de 15 milhões de graus Celsius permite que núcleos de hidrogênio se fundam para formar hélio, liberando a energia que mantém a Terra aquecida.',
    image: '/images/glossary/nuclear-fusion.jpg',
    relatedTerms: ['Nucleossíntese', 'Cadeia p-p', 'Ciclo CNO', 'Tunelamento Quântico'],
    difficulty: 'intermediate'
  },
  {
    id: 'quantum-tunneling',
    category: 'stars',
    term: 'Tunelamento Quântico',
    definition: 'Fenômeno da mecânica quântica onde uma partícula atravessa uma barreira de potencial que classicamente seria impossível de transpor. Este processo é fundamental para a fusão nuclear nas estrelas, permitindo que prótons se aproximem o suficiente para se fundirem, mesmo quando a temperatura não seria suficiente pela física clássica.',
    example: 'Sem o tunelamento quântico, o Sol precisaria ser muito mais quente para sustentar a fusão nuclear. É como se as partículas encontrassem um "atalho" através da barreira de energia, tornando a fusão possível em temperaturas mais baixas.',
    image: '/images/glossary/quantum-tunneling.jpg',
    relatedTerms: ['Fusão Nuclear', 'Nucleossíntese', 'Mecânica Quântica'],
    difficulty: 'advanced'
  }
];

export const getTermsByCategory = (category: string): Term[] => {
  return terms.filter(term => term.category === category);
};

export const getTermsByDifficulty = (difficulty: string): Term[] => {
  if (difficulty === 'all') return terms;
  return terms.filter(term => term.difficulty === difficulty);
};

export const searchTerms = (query: string): Term[] => {
  const searchQuery = query.toLowerCase();
  return terms.filter(term => 
    term.term.toLowerCase().includes(searchQuery) ||
    term.definition.toLowerCase().includes(searchQuery) ||
    term.example.toLowerCase().includes(searchQuery)
  );
}; 