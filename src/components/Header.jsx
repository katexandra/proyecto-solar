function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / nombre de la empresa */}
        <a
          href="#inicio"
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Eco Solar & Water Solutions"
    className="w-52 h-48 md:w-52 md:h-32 object-contain"  
  />
</a>
        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-2">
          <a
            href="#inicio"
            className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            Servicios
          </a>

          <a
            href="#como-funciona"
            className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            ¿Cómo funciona?
          </a>

          <a
            href="#beneficios"
            className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            Beneficios
          </a>

          <a
            href="#contacto"
            className="px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            Contacto
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Header
