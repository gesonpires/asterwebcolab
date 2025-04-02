// app/contato/page.tsx

export default function ContatoPage() {
    return (
      <>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contato</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Caso tenha dúvidas ou sugestões, entre em contato com o professor Geson Pires:
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-1 font-semibold text-gray-900 dark:text-white">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              className="border border-gray-300 rounded w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              placeholder="Seu nome"
              placeholderTextColor="text-gray-500 dark:text-gray-400"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-900 dark:text-white">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              placeholder="seuemail@exemplo.com"
              placeholderTextColor="text-gray-500 dark:text-gray-400"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="mensagem" className="block mb-1 font-semibold text-gray-900 dark:text-white">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="border border-gray-300 rounded w-full px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              rows={4}
              placeholder="Digite sua mensagem..."
              placeholderTextColor="text-gray-500 dark:text-gray-400"
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
  