function Footer() {
  return (
    <footer className="mx-auto flex min-h-20 w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] px-4 py-5 font-mono text-xs text-[var(--color-text-muted)] sm:px-8">
      <span>© 2026 Josselin Robin</span>
      <span className="hidden sm:inline">Concepteur développeur d’application</span>
      <a className="transition-colors hover:text-[var(--color-primary)]" href="#top">
        Retour en haut ↑
      </a>
    </footer>
  )
}

export default Footer
