export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Eco Solar & Water Solutions
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Soluciones de energía solar y sistemas de filtración
              de agua para hogares y negocios.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">
              Navegación
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-white transition"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-400 hover:text-white transition"
                >
                  ¿Cómo funciona?
                </a>
              </li>

              <li>
                <a
                  href="#beneficios"
                  className="text-gray-400 hover:text-white transition"
                >
                  Beneficios
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">
              Contáctanos
            </h4>

            <div className="space-y-4 text-gray-400">

              <p>📱 WhatsApp</p>

              <a
                href="https://wa.me/17138207553"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +1 (713) 820-7553
              </a>

              <p>☀️ Energía Solar</p>

              <p>💧 Filtración de Agua</p>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eco Solar & Water Solutions.
            Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>
  )
}
