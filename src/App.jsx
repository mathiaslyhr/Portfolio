import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import ZeroBuzz from './pages/ZeroBuzz.jsx'
import Radar from './pages/Radar.jsx'

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Routes>
        {/* Forsiden */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Projektsider */}
        <Route path="/zerobuzz" element={<ZeroBuzz />} />
        <Route path="/radar" element={<Radar />} />
      </Routes>
    </main>
  )
}
