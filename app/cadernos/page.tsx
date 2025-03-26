// app/cadernos/page.tsx

import Link from 'next/link';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

export default function CadernosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Cadernos Digitais
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Explore nossos cadernos digitais interativos, com conteúdo personalizado para alunos e professores.
          Aqui você encontra materiais de apoio, exercícios e recursos didáticos para aprofundar o estudo dos temas abordados.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Caderno do Aluno */}
          <Link href="/cadernos/aluno" 
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FaGraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Caderno do Aluno
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Acesse conteúdo interativo, exercícios práticos e acompanhe seu progresso em cada tema.
                </p>
                <span className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
                  Acessar →
                </span>
              </div>
            </div>
          </Link>

          {/* Caderno do Professor */}
          <Link href="/cadernos/professor"
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <FaChalkboardTeacher className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Caderno do Professor
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Material didático completo, guias de aula, recursos complementares e ferramentas de avaliação.
                </p>
                <span className="inline-block mt-4 text-green-600 dark:text-green-400 font-medium group-hover:translate-x-2 transition-transform">
                  Acessar →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
  