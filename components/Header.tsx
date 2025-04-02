'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Trilhas', href: '/trilhas' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Cadernos', href: '/cadernos' },
  { name: 'Fundamentos Matemáticos', href: '/fundamentos-matematicos' },
  { name: 'Glossário', href: '/glossario' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full">
        <nav className="relative px-4 py-4" role="navigation" aria-label="Navegação principal">
          <div className="flex items-center justify-between w-full">
            {/* Logo - sempre visível */}
            <div className="flex-none">
              <Link 
                href="/" 
                className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-md p-2"
                aria-label="Ir para página inicial"
              >
                <Image
                  src="/logo.svg"
                  alt="ASTER Logo"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  ASTERWebColab
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              {navigation.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Controls - sempre visível em telas menores */}
            <div className="flex items-center gap-2 flex-none">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white dark:bg-gray-800 z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <nav className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  {navigation.map(item => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium px-4 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                          isActive
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
