// app/contato/page.tsx

export default function ContatoPage() {
    return (
      <>
        <h1 className="text-2xl font-bold mb-4">Contato</h1>
        <p className="mb-6">
          Caso tenha dúvidas ou sugestões, entre em contato com o professor Geson Pires:
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-1 font-semibold">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Seu nome"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="seuemail@exemplo.com"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="mensagem" className="block mb-1 font-semibold">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="border border-gray-300 rounded w-full px-3 py-2"
              rows={4}
              placeholder="Digite sua mensagem..."
            />
          </div>
  
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </>
    );
  }
  