// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaRocket, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            AsterWebColab
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Uma plataforma interativa para ensino de física com simulações e análise de respostas
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/interactive-learning"
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="text-center">
                <FaRocket className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Aprendizado Interativo
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Explore conceitos físicos através de simulações interativas
                </p>
              </div>
            </Link>

            <Link
              href="/concept-map"
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="text-center">
                <FaBook className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Mapa Conceitual
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Visualize as relações entre diferentes conceitos físicos
                </p>
              </div>
            </Link>

            <Link
              href="/community"
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="text-center">
                <FaUsers className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Comunidade
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Interaja com outros estudantes e professores
                </p>
              </div>
            </Link>

            <Link
              href="/resources"
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="text-center">
                <FaChalkboardTeacher className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Recursos
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Acesse materiais didáticos e recursos de estudo
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
