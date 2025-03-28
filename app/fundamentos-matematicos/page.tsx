import Link from 'next/link';
import { FaSquareRootAlt, FaInfinity, FaAtom } from 'react-icons/fa';

const topics = [
  {
    id: 'relatividade',
    title: 'Relatividade',
    description: 'Desenvolvimento matemático da teoria da relatividade especial e geral',
    icon: FaInfinity,
    prerequisites: ['Cálculo diferencial e integral', 'Álgebra linear', 'Geometria diferencial'],
  },
  {
    id: 'mecanica-quantica',
    title: 'Mecânica Quântica',
    description: 'Formalismo matemático da mecânica quântica e suas aplicações',
    icon: FaAtom,
    prerequisites: ['Álgebra linear', 'Equações diferenciais', 'Análise complexa'],
  },
  {
    id: 'gravitacao',
    title: 'Gravitação',
    description: 'Fundamentos matemáticos da teoria da gravitação newtoniana e relativística',
    icon: FaSquareRootAlt,
    prerequisites: ['Cálculo vetorial', 'Equações diferenciais', 'Geometria diferencial'],
  },
];

export default function FundamentosMatematicos() {
  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Fundamentos Matemáticos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          Explore o desenvolvimento matemático rigoroso dos conceitos fundamentais da física moderna.
          Esta seção é dedicada aos estudantes que desejam aprofundar sua compreensão através do
          formalismo matemático.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {topic.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Pré-requisitos:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {topic.prerequisites.map((prereq) => (
                      <li key={prereq}>{prereq}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/fundamentos-matematicos/${topic.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explorar tópico
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Recursos Adicionais
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Para aproveitar ao máximo esta seção, recomendamos familiaridade com os seguintes tópicos:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Cálculo Diferencial e Integral (até Cálculo 3)</li>
            <li>Álgebra Linear</li>
            <li>Equações Diferenciais Ordinárias</li>
            <li>Noções de Geometria Diferencial</li>
            <li>Análise Complexa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}