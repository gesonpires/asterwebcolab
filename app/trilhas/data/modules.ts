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
              caption: 'Vista do Observatório do Paranal no Chile',
            },
            'Desde os tempos antigos, os seres humanos têm olhado para o céu com admiração e curiosidade. As civilizações antigas usavam os movimentos dos corpos celestes para:',
            '• Criar calendários<br>• Navegar pelos oceanos<br>• Determinar as estações do ano<br>• Desenvolver sistemas religiosos e mitológicos',
            {
              video: 'https://www.youtube.com/embed/mO3Q4bRQZ3k',
            },
          ],
        },
        {
          title: 'Instrumentos Astronômicos',
          content: [
            'Os astrônomos utilizam diversos instrumentos para estudar o universo. O mais conhecido é o telescópio, mas existem muitos outros, como:',
            '• Radiotelescópios<br>• Espectrógrafos<br>• Detectores de ondas gravitacionais<br>• Satélites espaciais',
            {
              image: '/images/trails/telescope.jpg',
              caption: 'Telescópio Espacial James Webb',
            },
          ],
        },
      ],
    },
    'sistema-solar': {
      sections: [
        {
          title: 'Visão Geral do Sistema Solar',
          content: [
            'O Sistema Solar é composto pelo Sol e todos os corpos celestes que orbitam ao seu redor, incluindo planetas, planetas anões, asteroides, cometas e outros objetos espaciais.',
            {
              image: '/images/trails/solar-system.jpg',
              caption: 'Representação artística do Sistema Solar',
            },
            'O Sol é a estrela central do nosso sistema planetário e contém cerca de 99,86% de toda a massa do Sistema Solar. Sua gravidade mantém todos os outros corpos em órbita.',
            'Algumas características interessantes do Sistema Solar:',
            '• Idade: Aproximadamente 4,6 bilhões de anos<br>• Diâmetro: Cerca de 100 UA (Unidades Astronômicas) até o limite da heliosfera<br>• Localização: Braço de Órion da Via Láctea<br>• Velocidade de Rotação ao redor do centro da galáxia: 828.000 km/h',
            {
              image: '/images/trails/sun-prominence.jpg',
              caption:
                'O Sol exibindo uma proeminência solar - fenômeno de ejeção de massa coronal',
            },
          ],
        },
        {
          title: 'Os Planetas',
          content: [
            'O Sistema Solar possui oito planetas principais, divididos em duas categorias:',
            'Planetas Rochosos (Terrestres):<br>• Mercúrio - O menor e mais próximo do Sol<br>• Vênus - O mais quente devido ao efeito estufa<br>• Terra - O único conhecido com vida<br>• Marte - O "Planeta Vermelho"',
            {
              image: '/images/trails/rocky-planets.jpg',
              caption: 'Os quatro planetas rochosos do Sistema Solar',
            },
            'Planetas Gasosos (Gigantes):<br>• Júpiter - O maior planeta<br>• Saturno - Famoso por seus anéis<br>• Urano - Gira "deitado" em sua órbita<br>• Netuno - O mais distante',
            {
              image: '/images/trails/gas-giants.jpg',
              caption: 'Os quatro planetas gigantes gasosos',
            },
          ],
        },
        {
          title: 'Outros Objetos',
          content: [
            'Além dos planetas, o Sistema Solar contém diversos outros objetos interessantes:',
            '• Planetas Anões: Plutão, Ceres, Eris, etc.<br>• Asteroides: Principalmente entre Marte e Júpiter<br>• Cometas: Corpos gelados que podem desenvolver caudas<br>• Cinturão de Kuiper: Região além de Netuno com muitos objetos pequenos',
            {
              image: '/images/trails/solar-system-objects.jpg',
              caption: 'Diversos objetos do Sistema Solar',
            },
          ],
        },
      ],
    },

    'estrelas-e-constelacoes': {
      sections: [
        {
          title: 'Anatomia do Céu Noturno',
          content: [
            'As estrelas são corpos celestes que brilham devido aos processos nucleares ocorrendo em seus núcleos. Elas variam amplamente em tamanho, cor e luminosidade, refletindo diferentes estágios evolutivos e composições químicas.',
            {
              image: '/images/trails/sky-stars.jpg',
              caption: 'Uma visão detalhada do céu noturno repleto de estrelas',
            },
            'As constelações são agrupamentos de estrelas que formam padrões reconhecíveis. Antigos povos associavam esses padrões a figuras, animais e objetos, facilitando a orientação e a transmissão de conhecimentos culturais.',
            'Estudar a disposição das estrelas e o surgimento das constelações nos permite compreender como os humanos interpretavam o universo e como essas interpretações influenciaram mitos e lendas em diversas culturas.',
          ],
        },
        {
          title: 'Observação e Catalogação',
          content: [
            'A observação do céu passou de métodos puramente a olho nu para técnicas avançadas com telescópios e câmeras digitais. Isso possibilitou a captura de imagens de alta resolução e a análise detalhada das características das estrelas.',
            {
              image: '/images/trails/telescope-observatory.jpg',
              caption:
                'Telescópio moderno em um observatório, permitindo a observação detalhada do céu',
            },
            'Os astrônomos utilizam ferramentas como espectroscopia e fotografia de longa exposição para catalogar as estrelas e constelações, possibilitando estudos sobre a formação, evolução e dinâmica do universo.',
            'Essas técnicas modernas complementam os registros históricos e ajudam a identificar novas estruturas e padrões no céu.',
          ],
        },
        {
          title: 'Significado Cultural e Mitológico',
          content: [
            'As constelações possuem um significado cultural profundo. Em diversas culturas, elas serviram como base para a criação de mitos, lendas e calendários, ajudando na orientação para a navegação e na organização das atividades agrícolas e festivas.',
            {
              image: '/images/trails/constellation-myths.jpg',
              caption: 'Ilustração que representa mitos associados às constelações',
            },
            'Por exemplo, a constelação de Orion foi interpretada de maneira distinta entre gregos, egípcios e povos indígenas, refletindo valores e crenças próprios de cada sociedade.',
            'O estudo dessas histórias nos mostra como a humanidade buscou explicar os fenômenos naturais e como o céu influenciou as artes, a religião e a ciência ao longo dos séculos.',
          ],
        },
      ],
    },

    'galaxias-e-universo': {
      sections: [
        {
          title: 'Panorama das Galáxias e do Universo',
          content: [
            'O universo é composto por bilhões de galáxias, cada uma contendo bilhões de estrelas. Neste módulo, vamos explorar a diversidade de galáxias e entender como elas se organizam em larga escala.',
            {
              image: '/images/trails/galaxy-overview.jpg',
              caption: 'Uma galáxia espiral vista de longe',
            },
            'As galáxias são classificadas principalmente em espirais, elípticas e irregulares, e essa classificação nos dá pistas sobre sua formação e evolução ao longo do tempo.',
            '<strong>Subtítulo: Classificação das Galáxias</strong>',
            '• <em>Galáxias Espirais:</em> Possuem braços bem definidos que se estendem a partir de um núcleo central brilhante.',
            '• <em>Galáxias Elípticas:</em> Apresentam formas mais uniformes, com pouco ou nenhum traço de estrutura em espiral.',
            '• <em>Galáxias Irregulares:</em> Não possuem uma forma definida, geralmente resultado de interações ou colisões com outras galáxias.',
          ],
        },
        {
          title: 'Estrutura Cósmica e a Teia do Universo',
          content: [
            'Além de estudar as galáxias individualmente, os astrônomos observam a disposição delas em larga escala. O universo forma uma teia cósmica composta por filamentos, aglomerados e vazios, que delineiam a estrutura de todo o cosmos.',
            '<div class="box-ilustrativo" style="padding: 1rem; border: 1px solid #ccc; background: #f9f9f9;">Dica: Imagine a teia cósmica como uma rede onde cada nó é um aglomerado de galáxias, interligados por filamentos de matéria escura.</div>',
            {
              image: '/images/trails/cosmic-web.jpg',
              caption: 'Representação artística da teia cósmica formada por filamentos de galáxias',
            },
            'Essa estrutura revela a história da formação do universo e os processos de interação gravitacional entre os seus componentes.',
          ],
        },
        {
          title: 'Modelos Cosmológicos e a Expansão do Universo',
          content: [
            'O estudo das galáxias fornece evidências fundamentais para o modelo do Big Bang. A observação de que as galáxias se afastam umas das outras com velocidades proporcionais às suas distâncias sustenta a teoria de um universo em expansão.',
            {
              image: '/images/trails/expanding-universe.jpg',
              caption: 'Ilustração da expansão do universo',
            },
            'Pesquisas indicam que a expansão do universo está acelerando, um fenômeno atribuído à energia escura, que compõe a maior parte do cosmos e ainda é um dos grandes mistérios da física moderna.',
            '<strong>Box Informativo:</strong> <em>A energia escura representa aproximadamente 68% do universo, sendo responsável pela aceleração na expansão cósmica.</em>',
          ],
        },
      ],
    },
  },
  2: {
    'leis-de-kepler': {
      sections: [
        {
          title: 'Introdução às Leis de Kepler',
          content: [
            'As Leis de Kepler descrevem o movimento dos planetas ao redor do Sol, estabelecendo que as órbitas são elípticas, com o Sol em um dos focos.',
            { image: '/images/trails/kepler.jpg', caption: 'Ilustração das órbitas planetárias' },
          ],
        },
        {
          title: 'Detalhes das Leis',
          content: [
            '1ª Lei (Lei das Órbitas): Os planetas se movem em órbitas elípticas com o Sol em um dos focos.',
            '2ª Lei (Lei das Áreas): Uma linha que liga um planeta ao Sol varre áreas iguais em tempos iguais.',
            '3ª Lei (Lei dos Períodos): O quadrado do período orbital é proporcional ao cubo do semieixo maior da órbita.',
          ],
        },
      ],
    },
    'lei-da-gravitacao-universal': {
      sections: [
        {
          title: 'Conceito da Lei da Gravitação Universal',
          content: [
            'A Lei da Gravitação Universal, proposta por Isaac Newton, afirma que cada partícula atrai outra com uma força proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre elas.',
            { image: '/images/trails/newton.jpg', caption: 'Isaac Newton e a Lei da Gravitação' },
          ],
        },
        {
          title: 'Aplicações da Lei',
          content: [
            'Essa lei explica não apenas o movimento dos planetas, mas também a trajetória de projéteis, a formação das marés e outros fenômenos naturais.',
          ],
        },
      ],
    },
    'orbitas-e-trajetorias': {
      sections: [
        {
          title: 'Conceitos de Órbitas',
          content: [
            'Órbitas são os caminhos que os corpos celestes seguem ao redor de um centro de gravidade. Esses caminhos podem ser elípticos, circulares ou parabólicos, dependendo das condições iniciais do movimento.',
            { image: '/images/trails/orbit.jpg', caption: 'Exemplo de órbita planetária' },
          ],
        },
        {
          title: 'Trajetórias de Satélites e Naves',
          content: [
            'O cálculo das trajetórias de satélites e naves espaciais utiliza as leis de Kepler e a Lei da Gravitação Universal, garantindo que eles se mantenham em órbita ou sigam trajetórias planejadas para missões espaciais.',
          ],
        },
      ],
    },
  },
  3: {
    'relatividade-especial': {
      sections: [
        {
          title: 'Fundamentos e Postulados',
          content: [
            'A Teoria da Relatividade Especial, formulada por Albert Einstein em 1905, baseia-se em dois postulados fundamentais:',
            '1. As leis da física são as mesmas em todos os referenciais inerciais.',
            '2. A velocidade da luz no vácuo, denotada por \\(c \\approx 3\\times10^8\\,\\mathrm{m/s}\\), é constante e independe do referencial.',
            'A partir desses postulados, deriva-se o fator de Lorentz:',
            '   \\(\\gamma = \\frac{1}{\\sqrt{1-\\frac{v^2}{c^2}}}\\), que é crucial para explicar fenômenos como a dilatação do tempo e a contração do espaço.',
          ],
        },
        {
          title: 'Dilatação do Tempo e Contração do Espaço',
          content: [
            'Um dos resultados mais surpreendentes é a dilatação do tempo. Se um observador em repouso mede um intervalo de tempo \\(\\Delta t\\), um observador em movimento com velocidade \\(v\\) percebe:',
            "   \\(\\Delta t' = \\gamma\\,\\Delta t\\).",
            'Analogamente, o comprimento medido em movimento sofre contração:',
            "   \\(L' = \\frac{L}{\\gamma}\\),",
            "onde \\(L\\) é o comprimento no referencial de repouso e \\(L'\\) no referencial em movimento. Esses efeitos são significativos quando \\(v\\) se aproxima de \\(c\\).",
          ],
        },
        {
          title: 'Equivalência Massa–Energia',
          content: [
            'Outra consequência revolucionária é a equivalência entre massa e energia, expressa pela famosa equação:',
            '   \\(E = m c^2\\).',
            'Para um objeto em movimento, a energia total é dada por:',
            '   \\(E = \\gamma m c^2\\),',
            'ilustrando como a energia aumenta com a velocidade e se torna infinita conforme \\(v \\to c\\).',
          ],
        },
        {
          title: 'Invariância do Intervalo Espaço-Temporal',
          content: [
            'Um conceito central na Relatividade é o intervalo espaço-temporal, que é invariante entre referenciais inerciais. Esse intervalo \\(s^2\\) é definido por:',
            '   \\(s^2 = c^2\\Delta t^2 - \\Delta x^2 - \\Delta y^2 - \\Delta z^2\\).',
            'Essa invariança garante que, apesar das diferentes medidas de tempo e espaço por observadores em movimento relativo, o valor de \\(s^2\\) permanece constante, preservando a causalidade no universo.',
          ],
        },
      ],
    },
    'buracos-negros': {
      sections: [
        {
          title: 'O que são Buracos Negros?',
          content: [
            'Buracos negros são regiões do espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, pode escapar de sua influência. Eles se formam, em geral, a partir do colapso gravitacional de estrelas massivas que esgotaram seu combustível nuclear, resultando em uma singularidade envolta por um horizonte de eventos.',
            {
              image: '/images/trails/buracos-negros.jpg',
              caption: 'Representação artística de um buraco negro',
            },
            'Além dos buracos negros estelares, existem também os buracos negros supermassivos, que se encontram no centro de galáxias e possuem massas que podem chegar a milhões ou bilhões de vezes a massa do Sol, bem como os buracos negros de massa intermediária, cuja existência ainda é objeto de estudo e debate.',
            'Esses objetos enigmáticos são fundamentais para o entendimento dos limites da gravidade e para testar as teorias da relatividade em condições extremas.',
          ],
        },
        {
          title: 'Tipos de Buracos Negros',
          content: [
            'Os buracos negros podem ser classificados em três principais categorias:',
            '• <strong>Buracos negros estelares:</strong> Resultam do colapso de estrelas massivas e possuem massas da ordem de algumas vezes a massa solar.',
            '• <strong>Buracos negros supermassivos:</strong> Encontrados nos centros das galáxias, com massas que variam de milhões a bilhões de vezes a massa do Sol.',
            '• <strong>Buracos negros de massa intermediária:</strong> Suas massas ficam entre as dos buracos estelares e supermassivos, e sua existência é inferida a partir de certos aglomerados estelares e eventos observados, mas ainda são pouco compreendidos.',
          ],
        },
        {
          title: 'Detecção e Observações',
          content: [
            'Embora buracos negros não emitam luz diretamente, sua presença é inferida através de diversos métodos indiretos:',
            '• <strong>Discos de acreção:</strong> Matéria que se aproxima do buraco negro aquece devido à fricção e emite radiação em diversas faixas do espectro, especialmente raios-X.',
            '• <strong>Efeitos gravitacionais:</strong> A influência gravitacional de um buraco negro pode alterar as órbitas de estrelas próximas, permitindo sua detecção por meio de movimentos anômalos.',
            '• <strong>Ondas gravitacionais:</strong> A fusão de buracos negros gera ondas gravitacionais, detectadas por observatórios como LIGO e Virgo, que confirmam a existência desses objetos extremos.',
          ],
        },
        {
          title: 'Impacto na Astrofísica Moderna',
          content: [
            'O estudo dos buracos negros tem implicações profundas na astrofísica e na física teórica:',
            '• Eles são laboratórios naturais para testar os limites da relatividade geral e investigar fenômenos em regimes de gravidade extrema.',
            '• A detecção de ondas gravitacionais abriu uma nova janela para observar eventos cósmicos extremos, permitindo estudar fusões e interações de buracos negros de maneira direta.',
            '• Os buracos negros supermassivos influenciam a evolução das galáxias e estão intimamente ligados à dinâmica dos núcleos galácticos.',
          ],
        },
      ],
    },
    'materia-e-energia-escura': {
      sections: [
        {
          title: 'Introdução à Matéria e Energia Escura',
          content: [
            'A matéria escura é uma forma de matéria que não interage significativamente com a radiação eletromagnética, tornando-se invisível aos telescópios convencionais. Sua existência é inferida por meio dos efeitos gravitacionais sobre a matéria visível, como a manutenção das curvas de rotação das galáxias.',
            'Por outro lado, a energia escura é uma forma misteriosa de energia que permeia o espaço e está associada à aceleração da expansão do universo. Embora seus mecanismos ainda sejam pouco compreendidos, ela é considerada o principal motor da dinâmica cósmica em larga escala.',
            {
              image: '/images/trails/materia-energia-escura.jpg',
              caption: 'Representação da matéria e energia escura no universo',
            },
            'Juntas, essas componentes invisíveis compõem aproximadamente 95% do conteúdo total do universo, sendo fundamentais para explicar a formação de estruturas cósmicas e o destino final do universo.',
          ],
        },
        {
          title: 'Evidências e Métodos de Detecção',
          content: [
            'As evidências da existência da matéria escura vêm de múltiplas observações astronômicas:',
            '• <strong>Curvas de rotação de galáxias:</strong> As velocidades das estrelas nas regiões externas das galáxias permanecem altas, indicando a presença de massa adicional que não é visível.',
            '• <strong>Lentes gravitacionais:</strong> A curvatura da luz proveniente de objetos distantes, causada pela massa invisível, reforça a existência da matéria escura.',
            '• <strong>Flutuações na radiação cósmica de fundo:</strong> Pequenas variações na radiação remanescente do Big Bang sugerem a influência de matéria escura na estrutura inicial do universo.',
            'A energia escura foi descoberta através de observações de supernovas distantes, que mostraram que a expansão do universo está se acelerando, contrariando as expectativas de desaceleração em um universo dominado apenas pela matéria.',
          ],
        },
        {
          title: 'Impactos na Cosmologia Moderna',
          content: [
            'A matéria escura é essencial para a formação e estruturação das galáxias. Sem ela, os modelos de formação de estruturas não conseguiriam explicar a estabilidade das galáxias e aglomerados.',
            'A energia escura, por sua vez, influencia o destino do universo, determinando se sua expansão continuará acelerada indefinidamente ou se haverá alguma mudança futura no regime dinâmico.',
            'Estudos atuais sugerem que o universo é composto aproximadamente por 5% de matéria bariônica, 27% de matéria escura e 68% de energia escura, o que demonstra a importância desses componentes para a nossa compreensão do cosmos.',
          ],
        },
      ],
    },

    'cosmologia-moderna': {
      sections: [
        {
          title: 'Cronologia Cósmica: Do Big Bang aos Dias Atuais',
          content: [
            'A Cosmologia Moderna investiga a história do universo a partir do Big Bang, ocorrido há aproximadamente 13,8 bilhões de anos. Nos primeiros instantes, o universo passou por uma rápida expansão conhecida como inflação cósmica, que estabeleceu as bases para a formação das grandes estruturas que observamos hoje.',
            'Durante os primeiros minutos, ocorreu a nucleossíntese primordial, que sintetizou os primeiros elementos leves (hélio, deutério e pequenas quantidades de lítio).',
            'Com o resfriamento do universo, formaram-se as primeiras estrelas e galáxias, marcando o início da era da reionização, quando a radiação ultravioleta dessas estrelas reionizou o meio interestelar.',
            'Nas últimas décadas, observações de telescópios espaciais, como o Hubble, e projetos de mapeamento, como o Sloan Digital Sky Survey, permitiram refinar essa cronologia e revelar detalhes inéditos da evolução cósmica.',
          ],
        },
        {
          title: 'Modelos e Teorias Contemporâneas',
          content: [
            'O modelo do Big Bang continua a ser o alicerce da cosmologia, mas diversas teorias complementares foram desenvolvidas para explicar fenômenos observados:',
            '<strong>Inflação Cósmica:</strong> Propõe uma fase de expansão exponencial logo após o Big Bang, explicando a uniformidade do universo em larga escala e a distribuição das flutuações primordiais.',
            '<strong>Matriz de Matéria e Energia Escura:</strong> Observações indicam que cerca de 95% do universo é composto por matéria escura e energia escura, elementos fundamentais para explicar a formação de estruturas e a aceleração da expansão.',
            '<strong>Modelos Híbridos:</strong> Novas abordagens buscam integrar a mecânica quântica com a relatividade geral, abrindo caminho para uma teoria quântica da gravidade.',
          ],
        },
        {
          title: 'Avanços Recentes e Desafios Atuais',
          content: [
            'Os últimos anos têm sido marcados por descobertas que revolucionaram nossa compreensão do cosmos:',
            '<strong>Ondas Gravitacionais:</strong> A detecção de ondas gravitacionais por observatórios como LIGO e Virgo abriu uma nova janela para observar eventos extremos, como a fusão de buracos negros e estrelas de nêutrons.',
            '<strong>Mapeamento do Universo:</strong> Projetos atuais e futuros, como o Euclid e o James Webb Space Telescope, estão refinando nosso entendimento sobre a distribuição de matéria e a evolução das galáxias.',
            '<strong>Desafios em Aberto:</strong> Questões sobre a natureza da energia escura, a integração entre gravidade e mecânica quântica e os detalhes da formação de estruturas cósmicas permanecem em aberto, estimulando novas pesquisas teóricas e experimentais.',
          ],
        },
      ],
    },
  },
  4: {
    'tipos-de-estrelas': {
      sections: [
        {
          title: 'Classificação das Estrelas',
          content: [
            'As estrelas podem ser classificadas de acordo com sua temperatura, luminosidade e estágio evolutivo. Entre os principais grupos estão as estrelas da sequência principal, gigantes, supergigantes e anãs brancas.',
            {
              image: '/images/trails/star-classification.jpg',
              caption: 'Exemplo de classificação estelar',
            },
            'Além disso, a sequência espectral (O, B, A, F, G, K, M) organiza as estrelas de quentes e azuis a frias e vermelhas, fornecendo uma base para compreender suas propriedades físicas.',
          ],
        },
        {
          title: 'Características e Exemplos',
          content: [
            'Estrelas da sequência principal, como o nosso Sol, representam a fase mais longa e estável da vida estelar, onde ocorre a fusão de hidrogênio em hélio. Gigantes e supergigantes são estrelas em estágios mais avançados, apresentando maior luminosidade e tamanho, enquanto as anãs brancas são os remanescentes finais de estrelas de baixa massa.',
            'Cada categoria possui propriedades distintas que influenciam a cor, o brilho e a evolução das estrelas ao longo do tempo.',
          ],
        },
      ],
    },

    'diagrama-HR': {
      sections: [
        {
          title: 'Introdução ao Diagrama de Hertzsprung-Russell',
          content: [
            'O Diagrama de Hertzsprung-Russell (diagrama HR) é uma ferramenta fundamental para estudar a evolução estelar. Ele relaciona a luminosidade (ou magnitude absoluta) com a temperatura superficial das estrelas, revelando padrões que permitem identificar os diferentes estágios evolutivos.',
            {
              image: '/images/trails/hr-diagram.jpg',
              caption: 'Exemplo de Diagrama HR, mostrando a sequência principal e outras regiões',
            },
            'No diagrama, as estrelas da sequência principal se organizam em uma faixa diagonal, enquanto estrelas que já evoluíram, como gigantes e anãs brancas, se posicionam fora dessa faixa, fornecendo pistas sobre seus processos internos e história evolutiva.',
          ],
        },
        {
          title: 'Interpretação do Diagrama',
          content: [
            'A interpretação do diagrama HR permite identificar a temperatura, luminosidade, tamanho e estágio evolutivo das estrelas. Por exemplo, estrelas quentes e luminosas encontram-se no canto superior esquerdo, enquanto estrelas frias e pouco luminosas estão no canto inferior direito.',
            'Esse diagrama é essencial para compreender a relação entre massa, idade e evolução estelar, e serve como base para modelos teóricos de evolução das estrelas.',
          ],
        },
      ],
    },

    'evolucao-estelar': {
      sections: [
        {
          title: 'Fases da Evolução Estelar',
          content: [
            'A evolução de uma estrela é determinada principalmente por sua massa. Estrelas de baixa massa, como o Sol, passam a maior parte de suas vidas na sequência principal e, eventualmente, evoluem para anãs brancas. Em contraste, estrelas massivas evoluem rapidamente, passando por fases de supergigante e, ao final, podem explodir em supernovas, deixando remanescentes como estrelas de nêutrons ou buracos negros.',
            {
              image: '/images/trails/stellar-evolution.jpg',
              caption: 'Linha evolutiva típica de uma estrela',
            },
            'Essa progressão é fundamental para a reciclagem de elementos no universo, contribuindo para a formação de novas estrelas e planetas.',
          ],
        },
        {
          title: 'Impacto da Massa na Evolução',
          content: [
            'A massa inicial de uma estrela define seu destino. Estrelas mais massivas têm ciclos de vida muito mais curtos e produzem explosões violentas, enquanto estrelas de menor massa evoluem de forma mais tranquila e duradoura. Essa diferença tem implicações importantes para a dinâmica das galáxias e a formação de elementos químicos no universo.',
            'O estudo desses processos é crucial para entender a distribuição de matéria e a evolução de estruturas em larga escala no cosmos.',
          ],
        },
      ],
    },
  },
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
            'Estudar apenas a Terra e sua atmosfera',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Como as civilizações antigas utilizavam a Astronomia?',
          options: [
            'Apenas para navegação',
            'Apenas para criar calendários',
            'Apenas para rituais religiosos',
            'Para navegação, calendários, agricultura e religião',
          ],
          correctAnswer: 3,
        },
        {
          question: 'Qual destes NÃO é um instrumento astronômico?',
          options: ['Telescópio', 'Microscópio', 'Radiotelescópio', 'Espectrógrafo'],
          correctAnswer: 1,
        },
      ],
    },
    'sistema-solar': {
      questions: [
        {
          question:
            'Qual porcentagem aproximada da massa total do Sistema Solar está concentrada no Sol?',
          options: ['50%', '75%', '99.86%', '25%'],
          correctAnswer: 2,
        },
        {
          question: 'Quantos planetas principais existem atualmente no Sistema Solar?',
          options: ['9', '8', '7', '10'],
          correctAnswer: 1,
        },
        {
          question: 'Qual é a correta divisão dos tipos de planetas no Sistema Solar?',
          options: [
            'Grandes e pequenos',
            'Quentes e frios',
            'Rochosos (terrestres) e gasosos (gigantes)',
            'Internos e externos',
          ],
          correctAnswer: 2,
        },
        {
          question: 'Qual destes NÃO é um planeta anão do Sistema Solar?',
          options: ['Plutão', 'Ceres', 'Fobos', 'Eris'],
          correctAnswer: 2,
        },
        {
          question: 'Qual característica é única de Urano entre os planetas do Sistema Solar?',
          options: ['Ter anéis', 'Ser gasoso', 'Girar "deitado" em sua órbita', 'Ter luas'],
          correctAnswer: 2,
        },
      ],
    },
    'estrelas-e-constelacoes': {
      questions: [
        {
          question: 'O que são constelações?',
          options: [
            'Agrupamentos aleatórios de estrelas sem significado',
            'Formações de estrelas associadas a figuras, mitos e lendas',
            'Concentrações de planetas e satélites',
            'Nuvens de poeira cósmica',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Qual a importância histórica das constelações?',
          options: [
            'Apenas para fins estéticos',
            'Para orientação, navegação e transmissão de conhecimentos culturais',
            'Elas não tiveram relevância prática',
            'Apenas para a previsão do tempo',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Como a tecnologia moderna contribuiu para o estudo das constelações?',
          options: [
            'Permitindo a observação e catalogação detalhada do céu',
            'Eliminando a necessidade de observação direta',
            'Substituindo completamente as técnicas tradicionais',
            'Reduzindo o interesse pelo estudo do universo',
          ],
          correctAnswer: 0,
        },
      ],
    },
    'galaxias-e-universo': {
      questions: [
        {
          question: 'Qual é a principal característica das galáxias espirais?',
          options: [
            'Elas possuem formas totalmente irregulares sem estrutura definida',
            'Elas apresentam braços espirais que se estendem a partir de um núcleo central',
            'São formadas exclusivamente por matéria escura',
            'Elas não apresentam nenhum movimento rotacional',
          ],
          correctAnswer: 1,
        },
        {
          question: 'O que representa a teia cósmica no universo?',
          options: [
            'Um agrupamento isolado de estrelas',
            'Uma rede de filamentos e aglomerados que conectam as galáxias em larga escala',
            'A formação de buracos negros em massa',
            'A estrutura interna de uma galáxia',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Qual evidência sustenta o modelo do Big Bang?',
          options: [
            'A observação de que as galáxias estão se afastando umas das outras',
            'A existência de apenas uma galáxia dominante no universo',
            'A estabilidade e imutabilidade do universo',
            'A formação contínua de novas galáxias sem qualquer expansão',
          ],
          correctAnswer: 0,
        },
      ],
    },
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
            'Os planetas permanecem estacionários',
          ],
          correctAnswer: 1,
        },
        {
          question: 'O que a segunda lei de Kepler estabelece?',
          options: [
            'Que as áreas varridas em intervalos iguais de tempo são iguais',
            'Que os planetas se movem em órbitas elípticas',
            'Que a velocidade dos planetas é constante',
            'Que os planetas aceleram uniformemente',
          ],
          correctAnswer: 0,
        },
      ],
    },
    'lei-da-gravitacao-universal': {
      questions: [
        {
          question: 'Qual a relação estabelecida pela Lei da Gravitação Universal?',
          options: [
            'A força de atração é proporcional à soma das massas',
            'A força de atração é inversamente proporcional ao quadrado da distância entre os corpos',
            'A força de atração é constante entre quaisquer dois corpos',
            'A força de atração é proporcional à diferença das massas',
          ],
          correctAnswer: 1,
        },
      ],
    },
    'orbitas-e-trajetorias': {
      questions: [
        {
          question: 'Qual dos seguintes não é um tipo de órbita?',
          options: ['Elíptica', 'Circular', 'Parabólica', 'Retangular'],
          correctAnswer: 3,
        },
        {
          question: 'O que influencia a trajetória de uma nave espacial?',
          options: [
            'Somente a gravitação do corpo celeste',
            'As leis de Kepler e a gravitação universal',
            'A resistência do ar',
            'A cor da nave',
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
  3: {
    'relatividade-especial': {
      questions: [
        {
          question: 'Quem formulou a Teoria da Relatividade Especial?',
          options: ['Newton', 'Einstein', 'Galileu', 'Bohr'],
          correctAnswer: 1,
        },
        {
          question: 'Qual fenômeno é consequência da Relatividade Especial?',
          options: [
            'Dilatação do tempo',
            'Contração do espaço',
            'Ambas as anteriores',
            'Nenhuma das anteriores',
          ],
          correctAnswer: 2,
        },
      ],
    },
    'buracos-negros': {
      questions: [
        {
          question: 'O que caracteriza um buraco negro?',
          options: [
            'Emite luz intensa',
            'É uma estrela supernova',
            'Possui gravidade tão intensa que nada escapa',
            'É um buraco no espaço',
          ],
          correctAnswer: 2,
        },
        {
          question: 'Qual método NÃO é utilizado para detectar buracos negros?',
          options: [
            'Observação da radiação emitida por discos de acreção',
            'Análise dos movimentos de estrelas próximas',
            'Observação direta da luz emitida pelo buraco negro',
            'Detecção de ondas gravitacionais',
          ],
          correctAnswer: 2,
        },
        {
          question: 'Quais são os tipos principais de buracos negros?',
          options: [
            'Estelares, supermassivos e de massa intermediária',
            'Estelares e supermassivos',
            'Estelares, de massa intermediária e primordiais',
            'Supermassivos e de massa intermediária',
          ],
          correctAnswer: 0,
        },
        {
          question: 'Qual técnica inovadora permite estudar a fusão de buracos negros?',
          options: [
            'Espectroscopia óptica',
            'Detecção de ondas gravitacionais',
            'Imagens em infravermelho',
            'Observação de raios X',
          ],
          correctAnswer: 1,
        },
      ],
    },
    'materia-e-energia-escura': {
      questions: [
        {
          question: 'O que é matéria escura?',
          options: [
            'Matéria que interage fortemente com a luz',
            'Matéria que não emite, absorve nem reflete luz',
            'Matéria visível',
            'Energia concentrada em forma de matéria',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Como a energia escura afeta o universo?',
          options: [
            'Acelerando a expansão do universo',
            'Contraindo o universo',
            'Estabilizando a formação de estruturas',
            'Não tem efeito notável',
          ],
          correctAnswer: 0,
        },
        {
          question: 'Quais evidências suportam a existência da matéria escura?',
          options: [
            'Curvas de rotação de galáxias',
            'Lentes gravitacionais',
            'Flutuações na radiação cósmica de fundo',
            'Todas as anteriores',
          ],
          correctAnswer: 3,
        },
        {
          question:
            'Qual é a composição aproximada do universo em termos de matéria bariônica, matéria escura e energia escura?',
          options: [
            '5% matéria bariônica, 27% matéria escura, 68% energia escura',
            '10% matéria bariônica, 30% matéria escura, 60% energia escura',
            '20% matéria bariônica, 40% matéria escura, 40% energia escura',
            '30% matéria bariônica, 40% matéria escura, 30% energia escura',
          ],
          correctAnswer: 0,
        },
      ],
    },

    'cosmologia-moderna': {
      questions: [
        {
          question: 'Qual evento marca o início do universo no modelo do Big Bang?',
          options: [
            'A formação das primeiras estrelas',
            'A expansão inicial do universo',
            'A nucleossíntese primordial',
            'A reionização do universo',
          ],
          correctAnswer: 1,
        },
        {
          question: 'O que a inflação cósmica explica no contexto da Cosmologia Moderna?',
          options: [
            'A homogeneidade e isotropia do universo',
            'A formação das galáxias',
            'A aceleração da expansão do universo',
            'A existência de matéria escura',
          ],
          correctAnswer: 0,
        },
        {
          question:
            'Qual é a porcentagem aproximada de matéria escura e energia escura combinadas no universo, segundo observações recentes?',
          options: ['95%', '68%', '27%', '5%'],
          correctAnswer: 0,
        },
        {
          question:
            'Qual avanço recente permitiu a observação direta de eventos como a fusão de buracos negros?',
          options: [
            'Telescópios ópticos de alta resolução',
            'Detecção de ondas gravitacionais',
            'Observação em raios-X',
            'Mapeamento por satélites',
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
  4: {
    'tipos-de-estrelas': {
      questions: [
        {
          question: 'Qual tipo de estrela representa a fase mais longa da vida estelar?',
          options: ['Gigante', 'Supergigante', 'Estrela da sequência principal', 'Anã branca'],
          correctAnswer: 2,
        },
        {
          question: 'O que caracteriza uma anã branca?',
          options: [
            'Estrelas em formação',
            'Remanescentes de estrelas de baixa massa',
            'Estrelas com alta massa',
            'Estrelas que ainda estão fundindo hidrogênio',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Qual das seguintes séries espectrais organiza as estrelas por temperatura?',
          options: [
            'O, B, A, F, G, K, M',
            'M, K, G, F, A, B, O',
            'A, F, G, K, M, L, T',
            'Todas as anteriores',
          ],
          correctAnswer: 0,
        },
      ],
    },
    'diagrama-HR': {
      questions: [
        {
          question: 'O que o Diagrama de Hertzsprung-Russell relaciona?',
          options: [
            'Temperatura e massa',
            'Luminosidade e temperatura',
            'Tamanho e cor',
            'Massa e composição química',
          ],
          correctAnswer: 1,
        },
        {
          question:
            'Onde se encontram, geralmente, as estrelas da sequência principal no diagrama HR?',
          options: [
            'No canto superior esquerdo',
            'No canto inferior direito',
            'Ao longo de uma faixa diagonal central',
            'Em uma região isolada no centro',
          ],
          correctAnswer: 2,
        },
      ],
    },
    'evolucao-estelar': {
      questions: [
        {
          question: 'Qual é o destino final típico de uma estrela de baixa massa, como o Sol?',
          options: ['Supernova', 'Buraco negro', 'Anã branca', 'Estrela de nêutrons'],
          correctAnswer: 2,
        },
        {
          question: 'O que determina principalmente a evolução de uma estrela?',
          options: [
            'Sua temperatura',
            'Sua massa',
            'Sua composição química',
            'Sua distância da Terra',
          ],
          correctAnswer: 1,
        },
        {
          question: 'Estrelas muito massivas podem terminar sua evolução como:',
          options: [
            'Anãs brancas',
            'Supergigantes sem explosão',
            'Supernovas e buracos negros',
            'Estrelas da sequência principal',
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
};
