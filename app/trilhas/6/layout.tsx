'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NucleossinteseLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('conteudo');

  const modules = [
    {
      title: 'Introdução à Nucleossíntese',
      slug: 'introducao-a-nucleossintese',
    },
    {
      title: 'Nucleossíntese Primordial',
      slug: 'nucleossintese-primordial',
    },
    {
      title: 'Nucleossíntese Estelar',
      slug: 'nucleossintese-estelar',
    },
    {
      title: 'Nucleossíntese Explosiva',
      slug: 'nucleossintese-explosiva',
    },
    {
      title: 'Fusão Nuclear',
      slug: 'fusao-nuclear',
    },
    {
      title: 'Aplicações e Implicações',
      slug: 'aplicacoes-e-implicacoes',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-4">
            {modules.map(module => (
              <li key={module.slug}>
                <Link
                  href={`/trilhas/6/${module.slug}`}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pathname.includes(module.slug)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {module.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setActiveTab('conteudo')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'conteudo'
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700'
            }`}
          >
            Conteúdo
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'quiz'
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700'
            }`}
          >
            Quiz
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
