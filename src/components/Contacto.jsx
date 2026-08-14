function Contacto() {
  return (
    <section
      id="contacto"
      className="py-20 px-6 bg-gradient-to-r from-green-700 to-blue-700"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center text-white mb-12">

          <p className="uppercase tracking-widest font-semibold mb-3">
            Estamos aquí para ayudarte
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            ¿Listo para dar el siguiente paso?
          </h2>

          <p className="text-lg max-w-3xl mx-auto text-green-50">
            Solicita información sobre nuestros sistemas solares
            y soluciones de filtración de agua. Nuestro equipo
            estará encantado de orientarte.
          </p>

        </div>

        {/* Tarjetas de contacto */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/17138207553"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl mb-4">
              💬
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              WhatsApp
            </h3>

            <p className="text-gray-600 mb-4">
              Escríbenos directamente para recibir información.
            </p>

            <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
              Escribir por WhatsApp
            </span>

          </a>

          {/* Cotización */}
          <a
            href="https://wa.me/17138207553"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl mb-4">
              💰
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Solicita una cotización
            </h3>

            <p className="text-gray-600 mb-4">
              Cuéntanos qué solución necesitas para tu hogar.
            </p>

            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
              Solicitar cotización
            </span>

          </a>

          {/* Atención */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl">

            <div className="text-5xl mb-4">
              🤝
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Atención personalizada
            </h3>

            <p className="text-gray-600">
              Te ayudamos a encontrar la solución que mejor
              se adapte a tus necesidades y presupuesto.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contacto
