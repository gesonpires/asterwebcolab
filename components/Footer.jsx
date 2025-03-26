// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} ASTERWebColab. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
