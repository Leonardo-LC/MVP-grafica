import { useState } from 'react'

function Perfil({ onVoltar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (nome.trim() && email.trim() && telefone.trim()) {
      onVoltar()
    }
  }

  return (
    <section className="py-[70px] flex justify-center">
      <div className="w-full max-w-md text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-[#13233c] flex items-center justify-center text-white text-4xl font-bold mb-6">
          U
        </div>
        <h2 className="text-4xl text-[#13233c] font-[Georgia,serif] mb-8">Meu Perfil</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="text-left">
            <label className="text-sm text-[#555] mb-1 block">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-[#ccc] rounded-lg px-4 py-3 text-base outline-none focus:border-[#13233c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="text-sm text-[#555] mb-1 block">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#ccc] rounded-lg px-4 py-3 text-base outline-none focus:border-[#13233c] transition-colors"
            />
          </div>
          <div className="text-left">
            <label className="text-sm text-[#555] mb-1 block">Telefone</label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full border border-[#ccc] rounded-lg px-4 py-3 text-base outline-none focus:border-[#13233c] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="mt-4 border-none px-[30px] py-3 rounded-full bg-[#222] text-white cursor-pointer text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
          >
            Salvar
          </button>
        </form>
        <button
          onClick={onVoltar}
          className="mt-6 border-none px-[30px] py-3 rounded-full bg-transparent text-[#222] cursor-pointer text-base transition-all duration-300 hover:underline"
        >
          Voltar ao catálogo
        </button>
      </div>
    </section>
  );
}

export default Perfil;
