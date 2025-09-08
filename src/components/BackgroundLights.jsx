import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function BackgroundLights() {
  const { scrollYProgress } = useScroll()
  const glow = useTransform(scrollYProgress, [0, .25, .5, .75, 1], [0.16, 0.28, 0.2, 0.3, 0.18])
  const vignette = useTransform(scrollYProgress, [0, 1], [0.25, 0.45])

  const mx = useMotionValue(50)
  const my = useMotionValue(30)
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      mx.set(x); my.set(y)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [mx, my])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />
      <div className="grain absolute inset-0" />

      {/* moving key light */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(48rem 30rem at var(--mx)% var(--my)%, rgba(255,255,255,0.14), transparent 70%)',
          '--mx': mx,
          '--my': my,
          opacity: glow,
          filter: 'blur(26px)'
        }}
      />
      {/* fill lights */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(36rem 24rem at 20% 70%, rgba(255,255,255,0.08), transparent 70%), radial-gradient(28rem 18rem at 80% 20%, rgba(255,255,255,0.07), transparent 70%)',
          opacity: 0.9,
          filter: 'blur(24px)'
        }}
      />
      <motion.div className="absolute inset-0" style={{ boxShadow: `inset 0 0 200px rgba(0,0,0,${vignette})` }} />
    </div>
  )
}
