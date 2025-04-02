'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaLock, FaCircle } from 'react-icons/fa';
import { useStudentProgress } from '@/hooks/useStudentProgress';

interface Trail {
  id: string;
  title: string;
  description: string;
  modules: (ModuleData | string)[];
}

interface ModuleData {
  id: string;
  title: string;
  slug: string;
}

interface ModuleNode extends ModuleData {
  completed: boolean;
  locked: boolean;
  prerequisites: string[];
}

interface TrailNode extends Trail {
  modules: ModuleNode[];
  completion: number;
}

const trails: Trail[] = [
  {
    id: 'fundamentos-matematicos',
    title: 'Fundamentos Matemáticos',
    description: 'Conceitos matemáticos essenciais para física moderna',
    modules: [
      'Álgebra Linear',
      'Cálculo Diferencial e Integral',
      'Álgebra Abstrata',
      'Análise Funcional',
      'Geometria Diferencial'
    ]
  },
  {
    id: 'fisica-classica',
    title: 'Física Clássica',
    description: 'Mecânica newtoniana e termodinâmica',
    modules: [
      'Mecânica Newtoniana',
      'Termodinâmica',
      'Eletromagnetismo',
      'Óptica'
    ]
  },
  {
    id: 'fisica-moderna',
    title: 'Física Moderna',
    description: 'Relatividade e mecânica quântica',
    modules: [
      'Relatividade Especial',
      'Relatividade Geral',
      'Mecânica Quântica',
      'Teoria Quântica de Campos'
    ]
  },
  {
    id: 'cosmologia',
    title: 'Cosmologia',
    description: 'Evolução e estrutura do universo',
    modules: [
      'Cosmologia Observacional',
      'Inflação Cósmica',
      'Matéria Escura',
      'Energia Escura'
    ]
  }
];

const RoadmapView = () => {
  const { getTrailProgress, getTrailCompletionPercentage } = useStudentProgress();

  // Processa as trilhas e adiciona informações de progresso e pré-requisitos
  const roadmapData: TrailNode[] = trails.map(trail => {
    const completion = getTrailCompletionPercentage(trail.id, trail.modules.length);
    const trailProgress = getTrailProgress(trail.id);

    const processedModules: ModuleNode[] = trail.modules.map(
      (module: ModuleData | string, index) => {
        const moduleId =
          typeof module === 'string' ? module.toLowerCase().replace(/\s+/g, '-') : module.slug;
        const moduleProgress = trailProgress[moduleId];

        // Define pré-requisitos baseados na ordem dos módulos
        const prerequisites = index > 0 
          ? [typeof trail.modules[index - 1] === 'string' 
              ? (trail.modules[index - 1] as string).toLowerCase().replace(/\s+/g, '-')
              : (trail.modules[index - 1] as ModuleData).slug] 
          : [];

        // Um módulo está bloqueado se os pré-requisitos não foram completados
        const locked = prerequisites.some(preReq => !trailProgress[preReq]?.completed);

        return {
          id: moduleId,
          title: typeof module === 'string' ? module : module.title,
          completed: moduleProgress?.completed || false,
          locked: locked && index !== 0, // Primeiro módulo nunca está bloqueado
          prerequisites,
          slug: moduleId,
        };
      }
    );

    return {
      ...trail,
      modules: processedModules,
      completion,
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Seu Roteiro de Aprendizagem
      </h1>

      <div className="space-y-12">
        {roadmapData.map(trail => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {trail.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {trail.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Progresso: {Math.round(trail.completion)}%
                </div>
                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${trail.completion}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {trail.modules.map(module => (
                <Link
                  key={module.id}
                  href={module.locked ? '#' : `/trilhas/${trail.id}/${module.id}`}
                  className={`block ${
                    module.locked
                      ? 'cursor-not-allowed opacity-75'
                      : 'hover:transform hover:scale-105 transition-transform'
                  }`}
                >
                  <div className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-2 border-transparent hover:border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {module.title}
                      </span>
                      {module.completed ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : module.locked ? (
                        <FaLock className="text-gray-400" />
                      ) : (
                        <FaCircle className="text-blue-500" />
                      )}
                    </div>

                    {module.prerequisites.length > 0 && (
                      <div className="text-sm text-gray-700 dark:text-gray-400">
                        Pré-requisitos: {module.prerequisites.join(', ')}
                      </div>
                    )}

                    {module.locked && (
                      <div className="text-sm text-red-600 dark:text-red-400">
                        Complete os módulos anteriores para desbloquear
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapView; 