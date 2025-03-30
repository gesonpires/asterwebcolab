'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAtom, FaWater, FaLightbulb, FaLeaf } from 'react-icons/fa';

export default function InteracoesNaNatureza() {
  const modules = [
    {
      title: 'Introdução às Interações',
      description: 'Conheça as forças fundamentais que governam o universo.',
      icon: <FaAtom className="w-8 h-8" />,
      slug: 'introducao-as-interacoes',
      color: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      title: 'Força Gravitacional',
      description: 'A força que mantém os planetas em órbita e nos mantém firmes no chão.',
      icon: <FaWater className="w-8 h-8" />,
      slug: 'forca-gravitacional',
      color: 'bg-green-100 dark:bg-green-900',
    },
    {
      title: 'Força Eletromagnética',
      description: 'A força que alimenta nossa tecnologia moderna e mantém os átomos unidos.',
      icon: <FaLightbulb className="w-8 h-8" />,
      slug: 'forca-eletromagnetica',
      color: 'bg-yellow-100 dark:bg-yellow-900',
    },
    {
      title: 'Forças Nucleares',
      description: 'As forças que governam o interior dos átomos e alimentam as estrelas.',
      icon: <FaAtom className="w-8 h-8" />,
      slug: 'forcas-nucleares',
      color: 'bg-red-100 dark:bg-red-900',
    },
    {
      title: 'Interações na Vida Cotidiana',
      description: 'Como as forças fundamentais se manifestam em nosso dia a dia.',
      icon: <FaLeaf className="w-8 h-8" />,
      slug: 'interacoes-na-vida-cotidiana',
      color: 'bg-purple-100 dark:bg-purple-900',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Interações na Natureza</h1>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-center">
            Explore as forças fundamentais que governam o universo, desde a gravidade até as
            interações nucleares. Cada módulo oferece uma visão única sobre como essas forças moldam
            nosso mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <Link key={index} href={`/trilhas/interacoes/${module.slug}`} className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${module.color} p-6 rounded-lg shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {module.icon}
                  <h2 className="text-2xl font-semibold">{module.title}</h2>
                </div>
                <p className="text-lg">{module.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
