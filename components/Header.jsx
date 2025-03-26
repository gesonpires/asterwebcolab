// components/Header.tsx
import Link from 'next/link';
import Quiz from './Quiz'; // Certifique-se de que o caminho está correto


export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">ASTERWebColab</Link>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/glossario">Glossário</Link></li>
          <li><Link href="/cadernos">Cadernos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
          <li><Link href="/quiz">Quiz</Link></li>
        </ul>
        {/* Aqui você pode implementar o hamburger menu para telas menores */}
      </nav>
    </header>
  );
}
