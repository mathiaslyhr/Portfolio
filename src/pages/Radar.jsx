import SectionStatic from '../components/SectionStatic'

export default function Radar() {
  return (
    <SectionStatic id="radar" className="relative z-20 scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        {/* Intro */}
        <div className="card">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">Radar</h1>
          <p className="p mt-4">
            Skoleprojekt for spillestedet Radar ved banegården. Målet var at få flere unge til 
            at engagere sig og støtte stedet. Jeg udviklede en webplatform inspireret af sociale 
            medier, hvor man kunne se månedens kunstner, uploade billeder, vælge notifikationer 
            og tilmelde sig medlemskab.
          </p>
        </div>

        {/* Screenshots */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card overflow-hidden">
            <img
              src="/img/radar-1.png"
              alt="Radar screenshot 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/radar-2.png"
              alt="Radar screenshot 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/radar-3.png"
              alt="Radar screenshot 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/radar-4.png"
              alt="Radar screenshot 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/radar-5.png"
              alt="Radar screenshot 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card overflow-hidden">
            <img
              src="/img/radar-6.png"
              alt="Radar screenshot 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionStatic>
  )
}
