function Card({ nome, imagem, onClick }) {
  return (
    <div onClick={onClick} className="bg-white rounded-[18px] overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-all duration-350 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
      <img src={imagem} alt={nome} className="w-full h-[260px] object-cover" />
      <h3 className="p-[18px] text-[#13233c] text-xl">{nome}</h3>
      <button onClick={onClick} className="mx-[18px] mb-[18px] w-[calc(100%-36px)] border-none bg-[#13233c] text-white py-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#1f3a62]">
        Personalizar
      </button>
    </div>
  );
}

export default Card;
