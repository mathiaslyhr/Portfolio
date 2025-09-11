import Section from './Section'

export default function About() {
  return (
    <Section
      id="om"
      enterFrom="right"
      className="relative z-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="grid md:grid-cols-12 gap-5 md:gap-8 items-stretch">
        {/* Left: portrait */}
        <div className="md:col-span-5 flex">
          <div className="card w-full flex items-center justify-center overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              src="/img/IMG_0924.jpeg"   // 👈 nu loader dit eget billede
              alt="Portræt af Mathias"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right: about + small grid */}
        <div className="md:col-span-7 flex flex-col gap-5 md:gap-6">
        <div className="card flex-1">
  <h2 className="text-2xl sm:text-3xl text-white font-semibold">
    Hej, Jeg er Mathias
  </h2>
  <p className="p mt-3 sm:mt-4">
    Jeg er multimediedesigner med speciale i frontend-udvikling. Jeg har erfaring
    med klassisk HTML, CSS og JavaScript, men arbejder i dag primært med React og
    Tailwind CSS. Derudover bruger jeg Node.js og er i gang med at lære backend og har derfor
    en god forståelse af hele flowet i webudvikling – men min styrke ligger i frontend.
  </p>
  <p className="p mt-3 sm:mt-4">
  Mit fokus er at skabe løsninger, der er brugervenlige, stilrene og lette at arbejde med.
  Jeg gør komplekse ting enkle og leverer digitale oplevelser, der fungerer og giver værdi for brugeren.
  </p>
</div>


          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 flex-1">
            {[
                ['UI & Design', 'Stilrene interfaces med fokus på struktur, typografi og visuel sammenhæng.'],
                ['Frontend', 'React og Tailwind med vægt på performance, hovereffekter og et levende udtryk.'],
                ['Brugeroplevelse', 'Små interaktioner og detaljer, der gør oplevelsen intuitiv og behagelig.'],
                ['Fra idé til produkt', 'Jeg kan tage et projekt fra koncept og design til en færdig digital løsning.'],
              
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
