import Section from './Section'

const Icon = ({ name, className }) => {
  const common = 'w-5 h-5'
  switch (name) {
    case 'phone': return (<svg className={common + ' ' + className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M2.5 5.5c0-1.1.9-2 2-2h2.2c.8 0 1.5.5 1.7 1.3l.8 2.5c.2.6 0 1.3-.5 1.7l-1.2 1c1.5 2.8 3.9 5.1 6.7 6.7l1-1.2c.4-.5 1.1-.7 1.7-.5l2.5.8c.8.2 1.3.9 1.3 1.7V19.5c0 1.1-.9 2-2 2h-.5C9.6 21.5 2.5 14.4 2.5 5.5z"/></svg>)
    case 'mail': return (<svg className={common + ' ' + className} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M22 8l-10 6L2 8"/></svg>)
    case 'linkedin': return (<svg className={common + ' ' + className} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.1c.5-1 1.7-2.1 3.6-2.1 3.9 0 4.6 2.6 4.6 6V23h-4v-6.5c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V23h-4V8.5z"/></svg>)
    default: return null
  }
}

export default function Contact() {
  return (
    <Section id="kontakt" enterFrom="right">
      <div className="card flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-white text-3xl font-semibold">Lad os tale sammen</h2>
          <p className="p mt-2">Ping mig direkte på din foretrukne kanal.</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Udfyld dine egne links her */}
          <a href="tel:+4512345678" className="icon-btn" aria-label="Ring"><Icon name="phone" /></a>
          <a href="mailto:hej@mathias.design" className="icon-btn" aria-label="Email"><Icon name="mail" /></a>
          <a href="https://www.linkedin.com/in/mathias" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        </div>
      </div>
    </Section>
  )
}
