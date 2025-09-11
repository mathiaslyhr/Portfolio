import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div id="hjem" className="relative overflow-hidden min-h-screen">
      {/* ===== Baggrund – lys flyder hele vejen ned til linjen ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hero-noise absolute inset-0" />

        {/* Key light */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(70rem 40rem at var(--x1) var(--y1), rgba(255,255,255,0.48), transparent 70%)',
            filter: 'blur(30px)',
            '--x1': '15%',
            '--y1': '10%',
          }}
          animate={{
            ['--x1']: ['15%','85%','50%','0%','100%','15%'],
            ['--y1']: ['10%','30%','70%','90%','15%','10%'],
            opacity: [0.42,0.5,0.38,0.46,0.52,0.42],
          }}
          transition={{ duration: 24, ease: 'easeInOut', repeat: Infinity }}
        />

        {/* Fill light #1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(52rem 34rem at var(--x2) var(--y2), rgba(255,255,255,0.34), transparent 72%)',
            filter: 'blur(26px)',
            '--x2': '85%',
            '--y2': '75%',
          }}
          animate={{
            ['--x2']: ['85%','10%','60%','100%','40%','85%'],
            ['--y2']: ['75%','60%','20%','10%','85%','75%'],
            opacity: [0.32,0.38,0.34,0.36,0.32,0.34],
          }}
          transition={{ duration: 28, ease: 'easeInOut', repeat: Infinity }}
        />

        {/* Fill light #2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(44rem 30rem at var(--x3) var(--y3), rgba(255,255,255,0.26), transparent 74%)',
            filter: 'blur(24px)',
            '--x3': '0%',
            '--y3': '55%',
          }}
          animate={{
            ['--x3']: ['0%','100%','20%','80%','0%'],
            ['--y3']: ['55%','35%','15%','85%','55%'],
            opacity: [0.24,0.3,0.26,0.28,0.24],
          }}
          transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>

      {/* ===== Indhold ===== */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="section text-center -translate-y-2 md:-translate-y-4">
          <div className="max-w-[1100px] mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight glow leading-tight">
            Jeg bygger brugervenlige og stilrene digitale løsninger, der performer.
            </h1>

            <p
              className="mt-4 md:mt-5 text-base md:text-lg max-w-2xl mx-auto text-white/85"
              style={{ textShadow: '0 0 8px rgba(255,255,255,.12)' }}
            >
           Mit fokus er på brugervenlighed, performance og et stilrent udtryk, så digitale oplevelser både fungerer og imponerer.
            </p>

            <div className="mt-6 md:mt-7 flex items-center justify-center gap-3 md:gap-4">
              <a href="#projekter" className="btn">Se projekter</a>
              <a href="#kontakt" className="btn-ghost">Kontakt mig</a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Scroll-indikator + streg (fast i bunden af hero) ===== */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* pilen – mere luft over stregen */}
        <a
          href="#om"
          className="absolute left-1/2 -translate-x-1/2 -top-20 md:-top-24 text-white/70 hover:text-white"
        >
          <motion.span
            initial={{ y: 0, opacity: .7 }}
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-2xl select-none"
          >
            ↓
          </motion.span>
        </a>

        <div className="h-px w-full from-white/10 to-transparent bg-gradient-to-r" />
      </div>
    </div>
  )
}
