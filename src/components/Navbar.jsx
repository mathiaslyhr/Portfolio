import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { id: 'hjem', label: 'Hjem' },
  { id: 'om', label: 'Om mig' },
  { id: 'projekter', label: 'Projekter' },
]

export default function Navbar() {
  const [active, setActive] = useState('hjem')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      // Hvis vi er på en projektside → marker "Projekter"
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
        return { id: l.id, dist: Math.abs(rect.top - 140) }
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
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      } else {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="relative inline-flex px-3">
          {/* sort pill – lidt smallere i bredden */}
          <div className="pointer-events-none absolute inset-y-0 inset-x-9 rounded-full border border-white/10 bg-black/40 backdrop-blur px-4" />

          <nav className="relative z-10 flex items-center gap-6 px-6 py-0 overflow-visible">
            {links.map((l) => {
              const isActive = active === l.id
              const base =
                'relative rounded-full text-sm inline-flex items-center justify-center transition'

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
      </div>
    </header>
  )
}
