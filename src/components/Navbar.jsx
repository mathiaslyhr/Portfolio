import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'hjem', label: 'Hjem' },
  { id: 'om', label: 'Om mig' },
  { id: 'projekter', label: 'Projekter' },
  { id: 'kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [active, setActive] = useState('hjem')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('projekter')
      return
    }

    const onScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop
      if (top < 80) {
        setActive('hjem')
        return
      }

      const positions = links.slice(1).map((l) => {
        const el = document.getElementById(l.id)
        if (!el) return { id: l.id, dist: Infinity }
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
        return { id: l.id, dist }
      })

      positions.sort((a, b) => a.dist - b.dist)
      setActive(positions[0]?.id || 'hjem')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const handleNav = (e, id) => {
    e.preventDefault()
    if (id === 'hjem') {
      if (location.pathname !== '/') {
        navigate('/')
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActive(id)
      }
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* Desktop navbar */}
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center px-2">
          <div className="relative inline-flex px-3 hidden min-[434px]:flex">
            <div className="pointer-events-none absolute inset-y-0 inset-x-9 rounded-full border border-white/10 bg-black/40 backdrop-blur px-4" />
            <nav className="relative z-10 flex items-center gap-6 px-6 py-0">
              {links.map((l) => {
                const isActive = active === l.id
                const base =
                  'relative rounded-full inline-flex items-center justify-center whitespace-nowrap transition text-sm'
                const pill = isActive
                  ? '-my-1 px-5 py-2 bg-white/85 text-black shadow-lg ring-1 ring-black/5'
                  : 'px-4 py-1.5 text-white/80 hover:text-white'
                return (
                  <a
                    key={l.id}
                    href={l.id === 'hjem' ? '/' : `#${l.id}`}
                    onClick={(e) => handleNav(e, l.id)}
                    className="relative"
                  >
                    <span className={`${base} ${pill}`}>{l.label}</span>
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Burger button visible on mobile */}
          <div className="flex min-[434px]:hidden w-full justify-end px-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col relative gap-1 z-50"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={false}
                  animate={{
                    x: menuOpen ? 0 : i * 4, // trappe når lukket
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="h-0.5 w-6 bg-white rounded"
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/70 backdrop-blur-xl
                       flex flex-col items-center justify-center gap-6
                       border-b border-white/10 shadow-xl"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.id}
                href={l.id === 'hjem' ? '/' : `#${l.id}`}
                onClick={(e) => handleNav(e, l.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="text-white text-2xl px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
