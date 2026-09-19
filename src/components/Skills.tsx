const skillCards = [
  {
    index: '01',
    title: 'Front-end',
    description: 'Des interfaces lisibles, responsives et pensées pour les personnes qui les utilisent.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'],
    featured: true,
  },
  {
    index: '02',
    title: 'Back-end',
    description: 'Des bases solides pour relier l’expérience, la donnée et les services.',
    tags: ['Node.js', 'Express', 'API REST', 'PostgreSQL', 'Prisma'],
    featured: false,
  },
  {
    index: '03',
    title: 'Culture projet',
    description: 'Un esprit pragmatique, curieux et attentif au travail d’équipe.',
    tags: ['Git / GitHub', 'Docker', 'Agile', 'Responsive design'],
    featured: false,
  },
]

function Skills() {
  return (
    <section id="competences" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8 lg:pb-36">
      <div className="mb-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-[var(--color-primary)]">
          02 / Compétences
        </p>
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          Les outils que j’aime
          <br />
          <em className="font-medium not-italic">mettre en mouvement.</em>
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {skillCards.map((skill) => (
          <article
            className={`flex min-h-72 flex-col rounded border border-[var(--color-text)] p-6 transition-transform duration-200 hover:-translate-y-1 ${
              skill.featured
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[7px_7px_0_var(--color-shadow)]'
                : 'bg-[var(--color-surface)] text-[var(--color-text)]'
            }`}
            key={skill.index}
          >
            <span className="font-mono text-xs opacity-65">{skill.index}</span>
            <h3 className="mb-3 mt-16 text-2xl font-bold tracking-tight">{skill.title}</h3>
            <p className={`max-w-sm text-base leading-relaxed ${skill.featured ? 'text-[#e3e6ff]' : 'text-[var(--color-text-muted)]'}`}>
              {skill.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {skill.tags.map((tag) => (
                <span className="rounded border border-current px-2 py-1 font-mono text-xs" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
