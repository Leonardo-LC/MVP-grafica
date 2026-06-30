function Banner() {
  return (
    <section className="h-[500px] bg-[linear-gradient(to_right,_rgba(196,173,137,0.95),_rgba(235,232,227,0.5))] flex items-center justify-between px-[200px]">
      <div className="max-w-[500px]">
        <span className="tracking-[8px] text-base">FAÇA VOCÊ</span>

        <h1 className="text-5xl leading-[0.95] my-5 font-[Georgia,serif] font-normal">
          Personalize
          <br />
          para a família
        </h1>

        <p className="text-2xl text-[#444]">
          Com fotos, textos ou desenhos únicos,
          como vocês.
        </p>
      </div>

      <img
        src="https://i.pinimg.com/1200x/8f/94/fe/8f94febf292a823e4ea40abc730e97db.jpg"
        alt="blusa"
        className="w-[20%] mr-[140px]"
      />
    </section>
  );
}

export default Banner;
