function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[650px] flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/solar.jpg')" }}
      />

      {/* Capa oscura para mejorar la lectura */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">

        <p className="mb-4 text-lg md:text-xl font-semibold text-green-300 uppercase tracking-widest">
          Energía limpia • Agua pura • Futuro sostenible
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Energía Solar y Agua Limpia
          <span className="block text-green-300">
            para tu Hogar
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-100 mb-10">
          Soluciones profesionales de energía solar y sistemas de
          filtración de agua diseñadas para ayudarte a ahorrar,
          proteger a tu familia y construir un futuro más sostenible.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#contacto"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            Solicitar Cotización
          </a>

          <a
            href="https://wa.me/17138207553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 hover:scale-105 transition"
          >
            💬 Hablar por WhatsApp
          </a>

        </div>

        {/* Pequeños indicadores */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base">

          <div className="flex items-center gap-2">
            <span className="text-2xl">☀️</span>
            <span>Energía renovable</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <span>Agua filtrada</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span>Soluciones para tu hogar</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
