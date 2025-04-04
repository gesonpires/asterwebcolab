import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const UnifiedNavigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo e título principal */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              AsterWebColab
            </Link>
          </div>

          {/* Menu de navegação principal */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
            >
              Início
            </Link>
            <Link
              href="/projetos"
              className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
            >
              Projetos
            </Link>
            <Link
              href="/sobre"
              className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
            >
              Contato
            </Link>

            {/* Botão de alternância de tema */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default UnifiedNavigation;
