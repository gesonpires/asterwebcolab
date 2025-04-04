import React from 'react';
import Link from 'next/link';

export default function CommunityPage() {
  // Dados simulados de membros da comunidade
  const communityMembers = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Desenvolvedora Frontend',
      avatar: '/avatars/member1.jpg',
      bio: 'Especialista em React e Next.js com 5 anos de experiência.',
      github: 'https://github.com/anasilva',
      linkedin: 'https://linkedin.com/in/anasilva',
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Desenvolvedor Backend',
      avatar: '/avatars/member2.jpg',
      bio: 'Desenvolvedor Node.js e especialista em APIs RESTful.',
      github: 'https://github.com/carlosoliveira',
      linkedin: 'https://linkedin.com/in/carlosoliveira',
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'UX/UI Designer',
      avatar: '/avatars/member3.jpg',
      bio: 'Designer com foco em experiência do usuário e interfaces acessíveis.',
      github: 'https://github.com/marianacosta',
      linkedin: 'https://linkedin.com/in/marianacosta',
    },
  ];

  // Dados simulados de eventos da comunidade
  const communityEvents = [
    {
      id: 1,
      title: 'Meetup de Desenvolvimento Web',
      date: '15 de Junho, 2023',
      location: 'Online',
      description:
        'Discussão sobre as últimas tendências em desenvolvimento web e novas tecnologias.',
      link: '/events/meetup-dev-web',
    },
    {
      id: 2,
      title: 'Workshop de Next.js',
      date: '22 de Junho, 2023',
      location: 'São Paulo, SP',
      description:
        'Aprenda a construir aplicações modernas com Next.js e React.',
      link: '/events/workshop-nextjs',
    },
  ];

  // Dados simulados de projetos da comunidade
  const communityProjects = [
    {
      id: 1,
      title: 'Biblioteca de Componentes React',
      description:
        'Uma coleção de componentes React reutilizáveis para acelerar o desenvolvimento.',
      github: 'https://github.com/asterwebcolab/react-components',
      demo: 'https://components.asterwebcolab.com',
    },
    {
      id: 2,
      title: 'API de Gerenciamento de Tarefas',
      description: 'Uma API RESTful para gerenciamento de tarefas e projetos.',
      github: 'https://github.com/asterwebcolab/tasks-api',
      demo: 'https://api.asterwebcolab.com/docs',
    },
  ];

  return (
    <div className="community-page">
      {/* Seção de Cabeçalho */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Nossa Comunidade
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Conheça as pessoas e projetos que fazem parte da comunidade
          AsterWebColab. Junte-se a nós para colaborar, aprender e compartilhar
          conhecimento.
        </p>
        <div className="mt-8">
          <Link
            href="/join-community"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Junte-se à Comunidade
          </Link>
        </div>
      </section>

      {/* Seção de Membros */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Membros em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityMembers.map(member => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden relative">
                    {/* Placeholder para avatar */}
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-600">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/community/members"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver todos os membros →
          </Link>
        </div>
      </section>

      {/* Seção de Eventos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Próximos Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityEvents.map(event => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <span className="mr-2">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <span className="mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                <Link
                  href={event.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/community/events"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver todos os eventos →
          </Link>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-2">
          Projetos da Comunidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/community/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver todos os projetos →
          </Link>
        </div>
      </section>

      {/* Seção de Participação */}
      <section className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Como Participar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Existem várias maneiras de se envolver com nossa comunidade. Escolha
            a que melhor se adapta a você!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Contribua com Código
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ajude em projetos open source, corrija bugs ou adicione novas
                funcionalidades.
              </p>
              <Link
                href="/community/contribute"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Como contribuir →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Participe de Eventos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Compareça aos nossos meetups, workshops e conferências online e
                presenciais.
              </p>
              <Link
                href="/community/events"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Próximos eventos →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Compartilhe Conhecimento
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Escreva artigos, grave tutoriais ou ajude outros membros no
                fórum.
              </p>
              <Link
                href="/community/share"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Comece a compartilhar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato/Newsletter */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Fique por dentro
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Inscreva-se em nossa newsletter para receber atualizações sobre
          eventos, projetos e oportunidades da comunidade.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Inscrever-se
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
