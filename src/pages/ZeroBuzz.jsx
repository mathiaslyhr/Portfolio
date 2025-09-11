import SectionStatic from '../components/SectionStatic'

export default function ZeroBuzz() {
  return (
    <SectionStatic id="zerobuzz" className="relative z-20 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        {/* Intro */}
        <div className="card">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">ZeroBuzz Brew</h1>
          <p className="p mt-4">
            Skoleprojekt hvor vi skulle udvikle en hjemmeside til alkoholfri øl målrettet unge. 
            Jeg byggede en prototype i ren HTML, CSS og JavaScript, hvor fokus var på et ungt, 
            moderne udtryk, der skulle gøre produktet attraktivt og tilgængeligt online.
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
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-3.png"
              alt="ZeroBuzz screenshot 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-4.png"
              alt="ZeroBuzz screenshot 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-5.png"
              alt="ZeroBuzz screenshot 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-6.png"
              alt="ZeroBuzz screenshot 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-7.png"
              alt="ZeroBuzz screenshot 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/zerobuzz-8.png"
              alt="ZeroBuzz screenshot 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionStatic>
  )
}
