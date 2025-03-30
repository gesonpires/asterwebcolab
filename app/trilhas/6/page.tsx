'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAtom, FaStarOfLife, FaBomb, FaFlask, FaArrowRight } from 'react-icons/fa';

export default function Nucleossintese() {
  const modules = [
    {
      title: 'Introdução à Nucleossíntese',
      description: 'Compreenda os fundamentos da formação dos elementos químicos no universo.',
      icon: FaAtom,
      slug: 'introducao-a-nucleossintese',
      colorClass: 'bg-blue-500',
    },
    {
      title: 'Nucleossíntese Primordial',
      description: 'Explore a formação dos primeiros elementos após o Big Bang.',
      icon: FaStarOfLife,
      slug: 'nucleossintese-primordial',
      colorClass: 'bg-purple-500',
    },
    {
      title: 'Nucleossíntese Estelar',
      description: 'Descubra como as estrelas produzem elementos químicos.',
      icon: FaStarOfLife,
      slug: 'nucleossintese-estelar',
      colorClass: 'bg-yellow-500',
    },
    {
      title: 'Nucleossíntese Explosiva',
      description: 'Entenda a formação de elementos pesados em eventos cataclísmicos.',
      icon: FaBomb,
      slug: 'nucleossintese-explosiva',
      colorClass: 'bg-red-500',
    },
    {
      title: 'Fusão Nuclear',
      description: 'Aprenda sobre o processo que alimenta as estrelas e seu potencial na Terra.',
      icon: FaAtom,
      slug: 'fusao-nuclear',
      colorClass: 'bg-green-500',
    },
    {
      title: 'Aplicações e Implicações',
      description: 'Explore as aplicações práticas e o impacto na sociedade.',
      icon: FaFlask,
      slug: 'aplicacoes-e-implicacoes',
      colorClass: 'bg-indigo-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Nucleossíntese</h1>
        <p className="text-xl mb-12">
          Explore a fascinante jornada da formação dos elementos químicos no universo, desde o Big
          Bang até as explosões de supernovas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(module => {
            const Icon = module.icon;
            return (
              <Link key={module.slug} href={`/trilhas/6/${module.slug}`} className="group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg h-full"
                >
                  <div
                    className={`w-12 h-12 ${module.colorClass} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {module.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{module.description}</p>
                  <div className="flex items-center text-blue-500">
                    <span className="mr-2">Começar</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
