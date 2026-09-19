import { ArrowUpRight } from 'lucide-react'

function Profile() {
  return (
    <section
      id="profil"
      className="mx-auto grid w-full max-w-6xl gap-12 border-t border-[var(--color-border)] px-4 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.6fr_0.85fr] lg:gap-12 lg:py-28"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-primary)]">
        01 / Profil
      </p>

      <div>
        <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          Une reconversion guidée par la curiosité.
        </h2>
        <p className="max-w-3xl text-xl leading-relaxed text-[var(--color-text-muted)]">
          Passionné par le code depuis mes quinze ans, j’ai choisi d’en faire mon métier. Aujourd’hui, je me forme à la conception d’applications et je recherche une alternance pour contribuer à des solutions adaptées aux besoins réels des entreprises.
        </p>
      </div>

      <div className="self-end rounded border border-[var(--color-text)] bg-[var(--color-surface)] p-6 shadow-[7px_7px_0_var(--color-shadow)]">
        <span className="mb-6 block font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
          Ce que je cherche
        </span>
        <strong className="mb-8 block text-xl leading-tight text-[var(--color-text)]">
          Une équipe qui aime
          <br />
          faire avancer les idées.
        </strong>
        <a
          className="inline-flex items-center gap-3 text-sm font-bold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
          href="#contact"
        >
          Me contacter
          <ArrowUpRight className="size-6" />
        </a>
      </div>
    </section>
  )
}

export default Profile
