import Section from './Section'
import { motion } from 'framer-motion'

const data = [
  {
    title: 'ZeroBuzz Brew',
    desc: 'Skoleprojekt: Hjemmeside for alkoholfri øl til unge. Bygget i HTML, CSS og JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '/zerobuzz'
  },
  {
    title: 'Radar',
    desc: 'Skoleprojekt: Hjemmeside for Radar – et musiksted ved banegården. Fokus på unge brugere og community.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '/radar'
  },
  {
    title: 'ZentroAI',
    desc: 'Officiel hjemmeside til vores virksomhed med produkter, kontakt og præsentation.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    link: 'https://zentroai.dk'
  },
  {
    title: 'ZentroAI Platform',
    desc: 'Webapp hvor kunder logger ind og bruger de produkter, de har købt på vores platform.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    link: 'https://app.zentroai.dk'
  }
]


export default function Projects() {
  return (
    <Section id="projekter" enterFrom="left">
      <div className="flex items-end justify-between">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">Udvalgte projekter</h2>
        <a href="#kontakt" className="hidden md:inline-flex btn-ghost">Lad os arbejde sammen</a>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {data.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            className="card group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-white text-lg font-medium">{p.title}</h3>
              <span className="text-white/60 group-hover:text-white transition">↗</span>
            </div>
            <p className="p mt-2">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs text-white/80 bg-white/5 border border-white/10">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
