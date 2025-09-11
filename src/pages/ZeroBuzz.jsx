import Section from '../components/Section'

export default function ZeroBuzz() {
  return (
    <Section id="zerobuzz" className="relative z-20 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        {/* Intro */}
        <div className="card">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">ZeroBuzz Brew</h1>
          <p className="p mt-4">
            Skoleprojekt hvor vi skulle udvikle en hjemmeside for alkoholfri øl målrettet unge. 
            Jeg byggede løsningen i HTML, CSS og JavaScript med fokus på et ungdommeligt udtryk, 
            storytelling og tilgængelighed.
          </p>
        </div>

        {/* Screenshots */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-1.png"
              alt="ZeroBuzz screenshot 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-2.png"
              alt="ZeroBuzz screenshot 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
