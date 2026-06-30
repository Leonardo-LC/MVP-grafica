import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Catalogo from './components/Catalogo'
import Perfil from './components/Perfil'

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [filtroAtivo, setFiltroAtivo] = useState("Todos")
  const [deveRolarCatalogo, setDeveRolarCatalogo] = useState(false)
  const [mostrarPerfil, setMostrarPerfil] = useState(false)

  const handleFiltroChange = (filtro) => {
    setFiltroAtivo(filtro);
    setProdutoSelecionado(null);
    setDeveRolarCatalogo(true);
  };

  useEffect(() => {
    if (deveRolarCatalogo) {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
      setDeveRolarCatalogo(false);
    }
  }, [deveRolarCatalogo, filtroAtivo]);

  function handleMostrarPerfil() {
    setProdutoSelecionado(null)
    setMostrarPerfil(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleVoltarDoPerfil() {
    setMostrarPerfil(false)
    setDeveRolarCatalogo(true)
  }

  return (
    <div className="w-full">
      <Header filtroAtivo={filtroAtivo} setFiltroAtivo={handleFiltroChange} onMostrarPerfil={handleMostrarPerfil} />
      {mostrarPerfil ? (
        <Perfil onVoltar={handleVoltarDoPerfil} />
      ) : !produtoSelecionado ? (
        <>
          <Banner />
          <Catalogo onSelecionarProduto={setProdutoSelecionado} filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
        </>
      ) : (
        <section className="py-[70px] flex justify-start pl-[200px]">
          <div className="text-left">
            <img
              src={produtoSelecionado.imagem}
              alt={produtoSelecionado.nome}
              className="w-[200px] h-[200px] object-cover rounded-[18px] shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
            />
            <h2 className="text-4xl text-[#13233c] font-[Georgia,serif] mt-8">{produtoSelecionado.nome}</h2>
            <button
              onClick={() => setProdutoSelecionado(null)}
              className="mt-8 border-none px-[30px] py-3 rounded-full bg-[#222] text-white cursor-pointer text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            >
              Voltar ao catálogo
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default App
