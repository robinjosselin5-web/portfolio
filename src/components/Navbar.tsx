import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Profil', href: '#profil' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header
      id="top"
      className="mx-auto flex min-h-20 w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-[var(--color-text)] sm:flex-nowrap sm:px-8 sm:py-0"
    >
      <a
        className="shrink-0 text-2xl font-bold tracking-tight"
        href="#top"
        aria-label="Accueil"
      >
        JR<span className="text-[var(--color-primary)]">.</span>
      </a>

      <nav
        className="order-3 flex w-full gap-5 overflow-x-auto pb-1 text-sm text-[var(--color-text-muted)] [scrollbar-width:none] sm:order-none sm:w-auto sm:gap-7 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden"
        aria-label="Navigation principale"
      >
        {navLinks.map((link) => (
          <a
            className="shrink-0 transition-colors hover:text-[var(--color-primary)]"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="inline-flex min-h-10 shrink-0 items-center gap-3 rounded border border-[var(--color-text)] px-4 text-xs font-bold text-[var(--color-text)] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-shadow)]"
        href="/cv_josselin_robin.pdf"
        download
        aria-label="Télécharger mon CV"
      >
        Télécharger mon CV <ArrowUpRight className="size-6" />
      </a>
    </header>
  )
}

export default Navbar
