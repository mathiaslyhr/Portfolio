export default function SectionStatic({ id, children, className = '' }) {
    return (
      <section
        id={id}
        className={`section my-24 md:my-32 ${className}`}
      >
        <div className="transform-gpu will-change-transform">
          {children}
        </div>
      </section>
    )
  }
  