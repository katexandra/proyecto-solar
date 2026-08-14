function Beneficios() {
  return (
    <section
      id="beneficios"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-wider mb-3">
            ¿Por qué elegir nuestras soluciones?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            Beneficios para tu hogar y tu familia
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de energía solar y
            filtración de agua pueden ayudarte a ahorrar, mejorar
            tu calidad de vida y contribuir a un futuro más sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Paneles solares */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

            <div className="text-5xl mb-5">
              ☀️
            </div>

            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Paneles Solares
            </h3>

            <p className="text-gray-600 mb-6">
              Una solución de energía limpia que puede ayudarte
              a reducir tus costos de electricidad y aumentar
              tu independencia energética.
            </p>

            <ul className="space-y-4 text-left">

              <li className="bg-green-50 p-4 rounded-xl">
                💰 Reduce tus costos de energía
              </li>

              <li className="bg-green-50 p-4 rounded-xl">
                ⚡ Mayor independencia energética
              </li>

              <li className="bg-green-50 p-4 rounded-xl">
                🌎 Energía limpia y renovable
              </li>

              <li className="bg-green-50 p-4 rounded-xl">
                🏠 Inversión a largo plazo
              </li>

              <li className="bg-green-50 p-4 rounded-xl">
                🌱 Apoya un futuro sostenible
              </li>

            </ul>

          </div>

          {/* Filtros de agua */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">

            <div className="text-5xl mb-5">
              💧
            </div>

            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Filtros de Agua
            </h3>

            <p className="text-gray-600 mb-6">
              Disfruta de agua filtrada directamente en tu hogar
              de una manera práctica y conveniente.
            </p>

            <ul className="space-y-4 text-left">

              <li className="bg-blue-50 p-4 rounded-xl">
                💧 Agua de mejor calidad
              </li>

              <li className="bg-blue-50 p-4 rounded-xl">
                💵 Reduce la compra de agua embotellada
              </li>

              <li className="bg-blue-50 p-4 rounded-xl">
                👨‍👩‍👧 Una solución para toda la familia
              </li>

              <li className="bg-blue-50 p-4 rounded-xl">
                🍃 Menos plástico
              </li>

              <li className="bg-blue-50 p-4 rounded-xl">
                🚰 Agua disponible cuando la necesitas
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Beneficios
