import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Servicios />
        <ComoFunciona />
        <Beneficios />
        <Contacto />
      </main>

      <Footer />
    </>
  )
}

export default App
