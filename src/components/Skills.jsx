import Section from './Section'

const skills = [
  ['React', 90],
  ['Tailwind', 100],
  ['Framer Motion', 80],
  ['TypeScript', 70],
  ['Figma', 85],
  ['SEO basics', 70],
]

export default function Skills() {
  return (
    <Section id="kompetencer" enterFrom="bottom">
      <h2 className="text-white text-3xl md:text-4xl font-semibold">Kompetencer</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {skills.map(([label, pct]) => (
          <div key={label} className="card">
            <div className="flex items-center justify-between">
              <span className="text-white/90">{label}</span>
              <span className="text-white/60">{pct}%</span>
            </div>
            <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: pct + '%' }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
