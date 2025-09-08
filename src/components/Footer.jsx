export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-white/10 bg-base/60">
      <div className="container max-w-6xl py-8 flex justify-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Mathias — Portfolio
        </p>
      </div>
    </footer>
  )
}
