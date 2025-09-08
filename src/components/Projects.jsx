import Section from './Section'
import { motion } from 'framer-motion'

const data = [
  {
    title: 'E-handelsprototype',
    desc: 'Hurtig, responsiv shop med fokus på konvertering.',
    tags: ['React', 'Tailwind-CSS', 'Figma'],
    link: '#'
  },
  {
    title: 'Portfolio 3D teaser',
    desc: 'Hero med WebGL-teaser og elegante overgange.',
    tags: ['React', 'Tailwind-CSS', 'Figma'],
    link: '#'
  },
  {
    title: 'Designsystem',
    desc: 'Skalerbart komponentbibliotek i Tailwind.',
    tags: ['React', 'Tailwind-CSS', 'Figma'],
    link: '#'
  },
  {
    title: 'Kampagneside',
    desc: 'Storytelling med sektioner der glider ind/ud ved scroll.',
    tags: ['React', 'Tailwind-CSS', 'Figma'],
    link: '#'
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
