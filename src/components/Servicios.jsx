function Servicios() {
  const servicios = [
    {
      icono: '☀️',
      titulo: 'Paneles Solares',
      descripcion:
        'Instalamos sistemas solares de alta eficiencia para hogares y negocios. Reduce tu dependencia de la red eléctrica y aprovecha una fuente de energía limpia y renovable.',
      color: 'green',
      boton: 'Conocer más',
    },
    {
      icono: '💧',
      titulo: 'Filtros de Agua',
      descripcion:
        'Sistemas avanzados de filtración para ayudarte a disfrutar de agua de mejor calidad directamente en tu hogar, reduciendo la necesidad de comprar agua embotellada.',
      color: 'blue',
      boton: 'Conocer más',
    },
  ]

  return (
    <section id="servicios" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-green-600 font-bold uppercase tracking-widest mb-3">
            Nuestras soluciones
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
            Servicios para un hogar más eficiente
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Combinamos tecnología, ahorro y sostenibilidad para ofrecer
            soluciones pensadas para las necesidades de tu hogar.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-8">

          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className={`group rounded-3xl p-8 md:p-10 shadow-lg border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                servicio.color === 'green'
                  ? 'bg-green-50 border-green-100'
                  : 'bg-blue-50 border-blue-100'
              }`}
            >

              {/* Icono */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 ${
                  servicio.color === 'green'
                    ? 'bg-green-100'
                    : 'bg-blue-100'
                }`}
              >
                {servicio.icono}
              </div>

              {/* Título */}
              <h3
                className={`text-3xl font-bold mb-4 ${
                  servicio.color === 'green'
                    ? 'text-green-700'
                    : 'text-blue-700'
                }`}
              >
                {servicio.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {servicio.descripcion}
              </p>

              {/* Botón */}
              <a
                href="#como-funciona"
                className={`inline-flex items-center px-6 py-3 rounded-full text-white font-bold shadow-md transition hover:scale-105 ${
                  servicio.color === 'green'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {servicio.boton}
                <span className="ml-2">→</span>
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Servicios
