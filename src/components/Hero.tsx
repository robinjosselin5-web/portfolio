import { ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section className="mx-auto grid min-h-[672px] w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-8 md:gap-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
      <div>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#4f564c]">
          <span className="size-2 rounded-full bg-[#63b66a] shadow-[0_0_0_4px_#63b66a33]" />
          Ouvert à une alternance
        </div>

        <h1 className="mb-8 mt-10 text-7xl font-extrabold leading-[0.85] tracking-tight text-[var(--color-text)] sm:text-8xl lg:text-9xl">
          Josselin
          <br />
          <em className="font-medium not-italic">Robin</em>
          <span className="text-[var(--color-primary)]">.</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
          Concepteur développeur d’application, je transforme les idées en expériences web utiles, simples et bien construites.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            className="inline-flex min-h-14 items-center justify-between gap-4 rounded border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 text-sm font-bold text-[var(--color-primary-foreground)] shadow-[7px_7px_0_var(--color-shadow)] transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-shadow)]"
            href="#contact"
          >
            Parlons de votre projet
            <ArrowUpRight className="size-6" />
          </a>
          <a
            className="inline-flex min-h-14 items-center justify-between gap-4 rounded border border-[var(--color-text)] px-5 text-sm font-bold text-[var(--color-text)] transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-shadow)]"
            href="https://www.linkedin.com/in/josselinrobin/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight className="size-6" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
          <a className="transition-colors hover:text-[var(--color-primary)]" href="mailto:robinjosselin5@gmail.com">
            robinjosselin5@gmail.com
          </a>
          <span aria-hidden="true">·</span>
          <span>Nantes, France</span>
        </div>
      </div>

      <div className="relative grid h-[440px] place-items-center lg:h-[530px]" aria-label="Portrait de Josselin Robin">
        <div className="absolute size-80 rounded-full border border-[var(--color-text)] -rotate-12 sm:size-96">
          <div className="absolute inset-5 rounded-full border border-dashed border-[var(--color-primary)]" />
        </div>

        <span className="absolute left-2 top-12 z-10 rotate-[-8deg] border border-[var(--color-text)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs shadow-[3px_3px_0_var(--color-shadow)] sm:left-4">
          coder
        </span>
        <span className="absolute right-2 top-28 z-10 rotate-6 border border-[var(--color-text)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs shadow-[3px_3px_0_var(--color-shadow)] sm:right-4 sm:top-48">
          apprendre
        </span>
        <span className="absolute bottom-12 left-6 z-10 rotate-3 border border-[var(--color-text)] bg-[var(--color-surface)] px-3 py-2 font-mono text-xs shadow-[3px_3px_0_var(--color-shadow)] sm:bottom-20 sm:left-8">
          construire
        </span>

        <div className="relative grid h-96 w-80 place-items-end overflow-hidden rounded-t-full rounded-b border border-[var(--color-text)] bg-[var(--color-accent)] shadow-[7px_7px_0_var(--color-shadow)] sm:h-[416px] sm:w-88">
          <img className="h-full w-full object-contain" src="/portrait.png" alt="Portrait illustré de Josselin Robin" />
        </div>
      </div>
    </section>
  )
}

export default Hero
