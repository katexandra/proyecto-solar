function ComoFunciona() {
  const solarSteps = [
    {
      paso: '01',
      titulo: 'Evaluación',
      texto:
        'Visitamos tu hogar para conocer tu consumo eléctrico, revisar el espacio disponible y entender tus necesidades.',
    },
    {
      paso: '02',
      titulo: 'Diseño',
      texto:
        'Diseñamos un sistema solar adaptado a tu hogar, consumo y presupuesto.',
    },
    {
      paso: '03',
      titulo: 'Instalación',
      texto:
        'Nuestro equipo instala los paneles y componentes necesarios de forma segura y profesional.',
    },
    {
      paso: '04',
      titulo: 'Activación',
      texto:
        'Ponemos tu sistema en funcionamiento y te explicamos cómo monitorear la energía que genera.',
    },
  ]

  const waterSteps = [
    {
      paso: '01',
      titulo: 'Análisis',
      texto:
        'Analizamos la calidad del agua de tu hogar para identificar las necesidades de filtración.',
    },
    {
      paso: '02',
      titulo: 'Recomendación',
      texto:
        'Te orientamos sobre el sistema de filtración que mejor se adapta a tu hogar.',
    },
    {
      paso: '03',
      titulo: 'Instalación',
      texto:
        'Instalamos el sistema de filtración en el punto adecuado de tu hogar.',
    },
    {
      paso: '04',
      titulo: 'Mantenimiento',
      texto:
        'Te ayudamos a mantener tu sistema funcionando correctamente y a reemplazar los filtros cuando sea necesario.',
    },
  ]

  const StepCard = ({ paso, titulo, texto, color }) => (
    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold mb-5 ${
          color === 'green'
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-100 text-blue-700'
        }`}
      >
        {paso}
      </div>

      <h4 className="text-xl font-bold text-gray-800 mb-3">
        {titulo}
      </h4>

      <p className="text-gray-600 leading-relaxed">
        {texto}
      </p>
    </div>
  )

  return (
    <section
      id="como-funciona"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest mb-3">
            Nuestro proceso
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
            ¿Cómo funciona?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Te acompañamos durante todo el proceso, desde la evaluación
            inicial hasta la instalación y el mantenimiento.
          </p>
        </div>

        {/* Paneles solares */}
        <div className="mb-20">

          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-4xl">☀️</span>

            <h3 className="text-3xl font-bold text-green-700">
              Paneles Solares
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarSteps.map((step) => (
              <StepCard
                key={step.paso}
                {...step}
                color="green"
              />
            ))}
          </div>
        </div>

        {/* Filtros de agua */}
        <div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-4xl">💧</span>

            <h3 className="text-3xl font-bold text-blue-700">
              Filtros de Agua
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waterSteps.map((step) => (
              <StepCard
                key={step.paso}
                {...step}
                color="blue"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ComoFunciona
