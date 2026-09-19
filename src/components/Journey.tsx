import { ArrowUpRight } from 'lucide-react'

const journeyItems = [
  {
    date: '2026',
    type: 'Formation',
    title: 'DWWM — Wild Code School',
    description: 'Formation à distance · conception et développement d’applications.',
  },
  {
    date: '2026',
    type: 'Projet',
    title: 'Lucarne',
    description: 'Référencement du football féminin · React / Express · agent IA · Docker / PostgreSQL.',
    link: 'https://www.lucarne.team',
    linkLabel: 'Voir le projet',
  },
  {
    date: '2025–26',
    type: 'Expérience',
    title: 'Technicien de maintenance itinérant — Claie',
    description: 'Varades · autonomie, diagnostic et relation terrain.',
  },
  {
    date: '2018–25',
    type: 'Expériences',
    title: 'Maintenance & qualité',
    description: 'John Deere · Nacelle44 · Sigmaphy. Des environnements exigeants qui ont forgé ma méthode.',
  },
]

function Journey() {
  return (
    <section id="parcours" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8 lg:pb-36">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-wider text-[var(--color-primary)]">
            03 / Parcours
          </p>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl">
            Apprendre en faisant.
          </h2>
        </div>
        <p className="max-w-xs text-base leading-relaxed text-[var(--color-text-muted)]">
          Chaque étape ajoute une nouvelle façon de comprendre un problème et de le résoudre.
        </p>
      </div>

      <div className="border-t border-[var(--color-text)]">
        {journeyItems.map((item) => (
          <article
            className="flex flex-col gap-4 border-b border-[var(--color-border)] py-7 lg:flex-row lg:items-start lg:gap-8"
            key={`${item.date}-${item.title}`}
          >
            <div className="shrink-0 font-mono text-sm text-[var(--color-primary)] lg:w-24">
              {item.date}
            </div>

            <div className="flex-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                {item.type}
              </span>
              <h3 className="mb-1 mt-2 text-xl font-bold tracking-tight text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </div>

            {item.link && item.linkLabel && (
              <a
                className="inline-flex items-center gap-3 text-sm font-bold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] lg:pt-7"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel}
                <ArrowUpRight className="size-6" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journey
