// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaRocket, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('/assets/astronomia-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore o Universo do Conhecimento
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Uma plataforma colaborativa para o ensino de Astronomia, Gravitação e Física Moderna.
              Descubra, aprenda e compartilhe conhecimento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/trilhas" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                <FaRocket className="w-5 h-5" />
                Começar Jornada
              </Link>
              <Link href="/sobre" 
                className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium backdrop-blur-sm">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Por que escolher o ASTERWebColab?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <FaBook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Conteúdo Estruturado
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trilhas de aprendizado cuidadosamente elaboradas para guiar seu desenvolvimento.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <FaChalkboardTeacher className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Suporte Pedagógico
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Material didático e recursos exclusivos para professores enriquecerem suas aulas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Comunidade Ativa
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Interaja com outros estudantes e professores, compartilhando experiências e conhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Destaques do Conteúdo
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Astronomia Moderna</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Explore os mais recentes descobrimentos sobre o universo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Física das Interações</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Compreenda as forças fundamentais que governam o universo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Evolução Estelar</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Acompanhe o ciclo de vida das estrelas, do nascimento à morte.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/trilhas" 
                className="inline-block mt-8 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                Ver Todos os Tópicos
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/assets/featured-content.jpg"
                alt="Conteúdo em destaque"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a nossa comunidade de aprendizado e explore o fascinante mundo da astronomia e física.
          </p>
          <Link href="/cadastro" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Criar Conta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
