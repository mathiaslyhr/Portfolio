import Section from './Section'

export default function About() {
  return (
    <Section id="om" enterFrom="right" className="relative z-20 scroll-mt-24 md:scroll-mt-28">
      <div className="grid md:grid-cols-12 gap-5 md:gap-8 items-stretch">
        {/* Left: portrait full height */}
        <div className="md:col-span-5 flex">
          <div className="card w-full flex items-center justify-center overflow-hidden aspect-[4/5] md:aspect-auto">
            {/* BEMÆRK: billedsti — se note nedenfor */}
            <img
              src="/portrait-placeholder.jpg"
              alt="Portræt"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right: about + small grid */}
        <div className="md:col-span-7 flex flex-col gap-5 md:gap-6">
          <div className="card flex-1">
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">Hej, jeg er Mathias</h2>
            <p className="p mt-3 sm:mt-4">
              Web- og multimediedesigner med passion for minimalistisk design, mikrointeraktioner
              og pixelperfekt frontend-udvikling. Jeg arbejder i <span className="text-white">React</span>, <span className="text-white">Tailwind</span> og
              moderne værktøjer som <span className="text-white">Vite</span> og <span className="text-white">Framer Motion</span>.
            </p>
            <p className="p mt-3 sm:mt-4">
              Jeg designer med fokus på brugeren og bygger komponenter, der er lynhurtige,
              vedligeholdelsesdygtige og tilgængelige.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 flex-1">
            {[
              ['Brand & UI', 'Designsystemer, farver, typografi, ikoner.'],
              ['Frontend', 'Semantisk HTML, React, Tailwind, performance.'],
              ['Animation', 'Scroll-effekter, microinteractions, Motion.'],
              ['Optimering', 'Lighthouse, best practices, SEO basics.'],
            ].map(([title, text]) => (
              <div key={title} className="card h-full">
                <h3 className="text-white font-medium">{title}</h3>
                <p className="p mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
