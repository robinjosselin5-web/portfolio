import { ArrowUpRight } from 'lucide-react'

const linkedinUrl = 'https://www.linkedin.com/in/josselinrobin/'

const posts = [
  {
    meta: 'EN APPRENTISSAGE · 01',
    title: 'Construire une application, c’est aussi apprendre à mieux poser les questions.',
    featured: false,
  },
  {
    meta: 'PROJET · 02',
    title: 'De l’idée à une première interface : les coulisses de Lucarne.',
    featured: true,
  },
  {
    meta: 'VEILLE · 03',
    title: 'Ce que l’IA change dans la façon de concevoir des produits utiles.',
    featured: false,
  },
]

function SocialSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8 lg:pb-36">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-wider text-[var(--color-primary)]">
            04 / Fil LinkedIn
          </p>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            Ce que je partage
            <br />
            <em className="font-medium not-italic">en chemin.</em>
          </h2>
        </div>

        <a
          className="inline-flex min-h-14 items-center justify-between gap-4 self-start rounded border border-[var(--color-text)] px-5 text-sm font-bold text-[var(--color-text)] transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-shadow)] lg:self-auto"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          Suivre sur LinkedIn
          <ArrowUpRight className="size-6" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <a
            className={`flex min-h-64 flex-col rounded border border-[var(--color-text)] p-6 transition-transform duration-200 hover:-translate-y-1 ${
              post.featured
                ? 'bg-[var(--color-accent)] text-[var(--color-text)] shadow-[7px_7px_0_var(--color-shadow)]'
                : 'bg-[var(--color-surface)] text-[var(--color-text)]'
            }`}
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            key={post.meta}
          >
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
              {post.meta}
            </span>
            <h3 className="mt-auto max-w-sm text-xl font-bold leading-tight tracking-tight">
              {post.title}
            </h3>
            <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold">
              Lire sur LinkedIn
              <ArrowUpRight className="size-6" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
