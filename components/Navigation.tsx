import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav 
      className="flex flex-col space-y-2"
      role="navigation"
      aria-label="Navegação principal"
    >
      <Link
        href="/"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          pathname === '/'
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <span>Início</span>
      </Link>
      <Link
        href="/trilhas"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          pathname.startsWith('/trilhas')
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-current={pathname.startsWith('/trilhas') ? 'page' : undefined}
      >
        <span>Trilhas</span>
      </Link>
      <Link
        href="/cadernos"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          pathname.startsWith('/cadernos')
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-current={pathname.startsWith('/cadernos') ? 'page' : undefined}
      >
        <span>Cadernos</span>
      </Link>
      <Link
        href="/fundamentos-matematicos"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
          pathname.startsWith('/fundamentos-matematicos')
            ? 'bg-blue-600 text-white dark:bg-blue-500'
            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-current={pathname.startsWith('/fundamentos-matematicos') ? 'page' : undefined}
      >
        <span>Fundamentos Matemáticos</span>
      </Link>
    </nav>
  );
} 