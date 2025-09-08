import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/**
 * Ultra-clean Section
 * - GPU-only anim: transform + opacity
 * - No filters
 * - Optional parallax (off by default)
 * - Smarter inView + debounced scroll direction
 */
export default function Section({
  id,
  children,
  className = '',
  enterFrom = 'down',          // 'down' | 'up' | 'left' | 'right'
  space = 'loose',             // 'loose' | 'tight' | 'tight-top'
  parallax = false,            // true = mild parallax
}) {
  const ref = useRef(null)

  // inView trigger (ret tunet, så ind/ud føles roligt)
  const isInView = useInView(ref, {
    amount: 0.45,
    margin: '-12% 0px -12% 0px',
  })

  // reduced motion
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  // scroll-retning (debounced via rAF)
  const [dir, setDir] = useState('down')
  useEffect(() => {
    let last = window.scrollY
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          setDir(y > last ? 'down' : 'up')
          last = y
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // optional parallax (meget mild)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [10, -10])

  // retning
  const axis = (enterFrom === 'left' || enterFrom === 'right') ? 'x' : 'y'
  const sign  = (enterFrom === 'left' || enterFrom === 'up') ? -1 : 1
  const dist  = 42

  // states (kun transform + opacity)
  const show = prefersReduced
    ? { opacity: 1, x: 0, y: 0, transition: { duration: 0.2 } }
    : { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 140, damping: 22, mass: 0.9 } }

  const hideDown = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, [axis]: sign * -dist, transition: { duration: 0.28, ease: 'easeOut' } }

  const hideUp = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, [axis]: sign * dist, transition: { duration: 0.28, ease: 'easeOut' } }

  const animate = isInView ? show : (dir === 'down' ? hideDown : hideUp)

  // spacing classes
  const spaceClass =
    space === 'tight-top' ? 'mt-12 md:mt-16 mb-24 md:mb-32' :
    space === 'tight'     ? 'my-16 md:my-20' :
                            'my-24 md:my-32'

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${spaceClass} ${className} transform-gpu [contain:layout_paint_style] will-change-transform`}
    >
      <motion.div
        style={{ y: (parallax && !prefersReduced) ? parallaxY : 0 }}
        className="transform-gpu will-change-transform"
      >
        <motion.div
          initial={hideUp}
          animate={animate}
          className="transform-gpu will-change-transform"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
}
