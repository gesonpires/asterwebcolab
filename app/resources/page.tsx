import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  // Categorias de recursos
  const resourceCategories = [
    {
      id: 'tutorials',
      title: 'Tutoriais e Guias',
      description:
        'Aprenda novas tecnologias e conceitos com nossos tutoriais detalhados.',
      icon: '📚',
    },
    {
      id: 'tools',
      title: 'Ferramentas e Utilitários',
      description:
        'Descubra ferramentas que podem aumentar sua produtividade no desenvolvimento.',
      icon: '🛠️',
    },
    {
      id: 'libraries',
      title: 'Bibliotecas e Frameworks',
      description:
        'Conheça as melhores bibliotecas e frameworks para seus projetos.',
      icon: '📦',
    },
    {
      id: 'design',
      title: 'Design e UI/UX',
      description:
        'Recursos para criar interfaces bonitas e experiências de usuário incríveis.',
      icon: '🎨',
    },
    {
      id: 'career',
      title: 'Carreira e Desenvolvimento Profissional',
      description:
        'Dicas e recursos para impulsionar sua carreira como desenvolvedor.',
      icon: '💼',
    },
  ];

  // Recursos em destaque
  const featuredResources = [
    {
      id: 1,
      title: 'Guia Completo de Next.js',
      description:
        'Aprenda a construir aplicações web modernas com Next.js e React neste guia abrangente.',
      category: 'tutorials',
      tags: ['Next.js', 'React', 'Frontend'],
    },
    {
      id: 2,
      title: 'Introdução ao TypeScript',
      description:
        'Um tutorial passo a passo para começar a usar TypeScript em seus projetos JavaScript.',
      category: 'tutorials',
      tags: ['TypeScript', 'JavaScript', 'Programação'],
    },
    {
      id: 3,
      title: 'As Melhores Ferramentas de Desenvolvimento Web em 2023',
      description:
        'Uma lista curada das ferramentas mais úteis para desenvolvedores web modernos.',
      category: 'tools',
      tags: ['Ferramentas', 'Produtividade', 'Desenvolvimento'],
    },
  ];

  // Recursos por categoria
  const resourcesByCategory = {
    tutorials: [
      {
        id: 101,
        title: 'Dominando React Hooks',
        description:
          'Um guia completo sobre todos os hooks do React e como usá-los efetivamente.',
      },
      {
        id: 102,
        title: 'Construindo APIs RESTful com Node.js',
        description:
          'Aprenda a criar APIs robustas e escaláveis usando Node.js e Express.',
      },
    ],
    tools: [
      {
        id: 201,
        title: 'VS Code: Extensões Essenciais',
        description:
          'As melhores extensões do Visual Studio Code para desenvolvedores web.',
      },
      {
        id: 202,
        title: 'Ferramentas de Teste Automatizado',
        description:
          'Um guia sobre as principais ferramentas para testar seu código automaticamente.',
      },
    ],
  };

  return (
    <div className="resources-page">
      {/* Cabeçalho da página */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Recursos para Desenvolvedores
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Uma coleção curada de tutoriais, ferramentas, bibliotecas e outros
          recursos para ajudar você a se tornar um desenvolvedor melhor.
        </p>
      </section>

      {/* Barra de pesquisa */}
      <section className="mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Categorias de recursos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Categorias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCategories.map(category => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-start">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recursos em destaque */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Recursos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <Link
                href={`/resources/${resource.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ler mais →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/resources/all"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Ver todos os recursos
          </Link>
        </div>
      </section>

      {/* Tutoriais */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Tutoriais e Guias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesByCategory.tutorials.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/resources/categories/tutorials"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver todos os tutoriais →
          </Link>
        </div>
      </section>

      {/* Ferramentas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Ferramentas e Utilitários
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesByCategory.tools.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/resources/categories/tools"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver todas as ferramentas →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Receba novos recursos em seu email
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Inscreva-se em nossa newsletter para receber os melhores recursos
            para desenvolvedores toda semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
