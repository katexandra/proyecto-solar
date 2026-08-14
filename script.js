export default function PaginaNegocio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header con nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <h1 className="text-2xl font-bold text-green-700">
            Eco Solar & Water Solutions
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="text-gray-700 font-semibold hover:text-green-600 transition">Servicios</a>
            <a href="#como-funciona" className="text-gray-700 font-semibold hover:text-green-600 transition">¿Cómo funciona?</a>
            <a href="#beneficios" className="text-gray-700 font-semibold hover:text-green-600 transition">Beneficios</a>
            <a href="#contacto" className="text-gray-700 font-semibold hover:text-green-600 transition">Contacto</a>
          </nav>
          
            href="https://wa.me/17138207553"
            className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-700 transition font-semibold"
          >
            Contáctanos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-green-100 to-blue-100">
        <><h2 className="text-5xl font-bold mb-6 text-gray-800">
          Energía Solar y Agua Limpia para tu Hogar
        </h2><p className="text-lg max-w-3xl mx-auto mb-8 text-gray-700">
            Instalación profesional de paneles solares y sistemas avanzados
            de filtración de agua para ahorrar dinero y proteger a tu familia.
          </p><div className="flex justify-center gap-4">
            <a href="#contacto" className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg text-lg hover:bg-blue-700 transition">
              Solicitar Cotización
            </a>

            href="https://wa.me/17138207553"
            className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition"
            >
            WhatsApp
          </a></>
        </div>
      </section>

      {/* Servicios - Tarjetas principales */}
      <section id="servicios" className="py-20 px-6 bg-white">
        <><h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2><div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl shadow-lg bg-green-50 hover:scale-105 transition">
            <div className="text-5xl mb-4">☀️</div>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Paneles Solares</h3>
            <p className="text-gray-600">
              Instalamos sistemas solares de alta eficiencia para hogares y negocios.
              Reduce tu factura eléctrica hasta un 90% y contribuye al medio ambiente
              con energía 100% limpia y renovable.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-lg bg-blue-50 hover:scale-105 transition">
            <div className="text-5xl mb-4">💧</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Filtros de Agua</h3>
            <p className="text-gray-600">
              Sistemas avanzados de filtración que eliminan contaminantes, bacterias
              y metales pesados. Agua pura y segura directo de tu llave, sin necesidad
              de comprar botellas.
            </p>
          </div>
        </div></>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">¿Cómo Funciona?</h2>

        {/* Paneles solares */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-green-700 text-center mb-10">☀️ Paneles Solares</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { paso: "1", titulo: "Evaluación", texto: "Visitamos tu hogar y analizamos tu consumo eléctrico y espacio disponible." },
              { paso: "2", titulo: "Diseño", texto: "Diseñamos el sistema ideal según tus necesidades y presupuesto." },
              { paso: "3", titulo: "Instalación", texto: "Nuestro equipo instala los paneles de forma segura y eficiente." },
              { paso: "4", titulo: "Activación", texto: "Conectamos el sistema y te enseñamos a monitorear tu energía generada." },
            ].map((item) => (
              <div key={item.paso} className="text-center p-6 bg-white rounded-2xl shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">{item.paso}</div>
                <h4 className="font-semibold text-lg mb-2">{item.titulo}</h4>
                <p className="text-gray-600 text-sm">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros de agua */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-700 text-center mb-10">💧 Filtros de Agua</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { paso: "1", titulo: "Análisis", texto: "Analizamos la calidad del agua de tu hogar para identificar contaminantes." },
              { paso: "2", titulo: "Recomendación", texto: "Te recomendamos el sistema de filtración más adecuado para tu caso." },
              { paso: "3", titulo: "Instalación", texto: "Instalamos el filtro en tu tubería principal o punto de uso específico." },
              { paso: "4", titulo: "Mantenimiento", texto: "Te brindamos servicio de mantenimiento y reemplazo de filtros." },
            ].map((item) => (
              <div key={item.paso} className="text-center p-6 bg-white rounded-2xl shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.paso}</div>
                <h4 className="font-semibold text-lg mb-2">{item.titulo}</h4>
                <p className="text-gray-600 text-sm">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
```jsx
{/* =====================================================
    BENEFICIOS
===================================================== */}

<section id="beneficios" className="py-20 px-6 bg-gray-50">

  {/* Título */}
  <div className="max-w-4xl mx-auto text-center mb-14">

    <p className="text-green-600 font-semibold uppercase tracking-wider mb-3">
      ¿Por qué elegir nuestras soluciones?
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
      Beneficios para tu hogar y tu familia
    </h2>

    <p className="text-lg text-gray-600">
      Descubre cómo nuestras soluciones de energía solar y filtración
      de agua pueden ayudarte a ahorrar, mejorar tu calidad de vida
      y contribuir a un futuro más sostenible.
    </p>

  </div>


  {/* =====================================================
      DOS COLUMNAS
  ===================================================== */}

  <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">


    {/* =================================================
        PANEL SOLAR
    ================================================= */}

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden
                    border border-green-100
                    hover:shadow-2xl transition duration-300">

      <div className="bg-gradient-to-r from-green-600 to-green-500
                      text-white p-8">

        <div className="text-5xl mb-4">
          ☀️
        </div>

        <h3 className="text-3xl font-bold mb-2">
          Beneficios de los Paneles Solares
        </h3>

        <p className="text-green-50">
          Energía limpia, mayor independencia y una solución
          pensada para el futuro.
        </p>

      </div>


      <div className="p-8">

        <div className="space-y-6">

          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
              💰
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Reduce tus costos de energía
              </h4>

              <p className="text-gray-600">
                Genera parte de la electricidad que necesitas
                utilizando una fuente de energía renovable.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
              ⚡
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Mayor independencia energética
              </h4>

              <p className="text-gray-600">
                Produce tu propia energía y reduce tu dependencia
                de la electricidad proveniente de la red.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
              🌎
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Energía limpia y renovable
              </h4>

              <p className="text-gray-600">
                Aprovecha la energía del sol y contribuye a reducir
                el impacto ambiental de tu consumo energético.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
              🏠
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Una inversión a largo plazo
              </h4>

              <p className="text-gray-600">
                Los sistemas solares están diseñados para ofrecer
                años de generación de energía con un mantenimiento
                relativamente bajo.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-green-100
                            flex items-center justify-center text-2xl">
              🌱
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Apoya un futuro sostenible
              </h4>

              <p className="text-gray-600">
                Utiliza una fuente de energía renovable y ayuda
                a construir un futuro más limpio.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


    {/* =================================================
        FILTROS DE AGUA
    ================================================= */}

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden
                    border border-blue-100
                    hover:shadow-2xl transition duration-300">

      <div className="bg-gradient-to-r from-blue-600 to-blue-500
                      text-white p-8">

        <div className="text-5xl mb-4">
          💧
        </div>

        <h3 className="text-3xl font-bold mb-2">
          Beneficios de los Filtros de Agua
        </h3>

        <p className="text-blue-50">
          Agua de mejor calidad directamente en tu hogar,
          de una manera práctica y conveniente.
        </p>

      </div>


      <div className="p-8">

        <div className="space-y-6">

          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
              💧
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Agua de mejor calidad
              </h4>

              <p className="text-gray-600">
                Los sistemas de filtración ayudan a reducir
                determinados contaminantes y mejorar las
                características del agua.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
              💵
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Reduce la compra de agua embotellada
              </h4>

              <p className="text-gray-600">
                Tener un sistema de filtración en casa puede
                reducir la necesidad de comprar constantemente
                botellas de agua.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
              👨‍👩‍👧
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Una solución para toda la familia
              </h4>

              <p className="text-gray-600">
                Disfruta de agua filtrada para beber, cocinar
                y utilizar diariamente en tu hogar.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
              🍃
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Menos plástico
              </h4>

              <p className="text-gray-600">
                Reduce el consumo de botellas plásticas y contribuye
                a disminuir los residuos en el medio ambiente.
              </p>
            </div>

          </div>


          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12
                            rounded-full bg-blue-100
                            flex items-center justify-center text-2xl">
              🚰
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-800 mb-1">
                Agua disponible cuando la necesitas
              </h4>

              <p className="text-gray-600">
                Disfruta de la comodidad de contar con un sistema
                de filtración instalado directamente en tu hogar.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
```
