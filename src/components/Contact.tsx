import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

const contactLinks = [
  { label: 'robinjosselin5@gmail.com', href: 'mailto:robinjosselin5@gmail.com' },
  { label: 'github.com/robinjosselin5-web', href: 'https://github.com/robinjosselin5-web' },
]

function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSending(true)
    setStatus('')
    setStatusType('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.get('nom'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Une erreur est survenue.')
      }

      form.reset()
      setStatus(result.message || 'Votre message a bien été envoyé.')
      setStatusType('success')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Une erreur est survenue.')
      setStatusType('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto grid w-full max-w-6xl gap-12 border-t border-[var(--color-border)] px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:py-28"
    >
      <div>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-[var(--color-primary)]">
          05 / Contact
        </p>
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          On construit quelque chose
          <br />
          <em className="font-medium not-italic">ensemble ?</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          Une alternance, un projet ou simplement envie d’échanger ? Écrivez-moi, je vous répondrai avec plaisir.
        </p>

        <div className="mt-10 grid gap-3">
          {contactLinks.map((link) => (
            <a
              className="inline-flex w-fit items-center gap-3 font-bold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
              href={link.href}
              key={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
              <ArrowUpRight className="size-6" />
            </a>
          ))}
        </div>
      </div>

      <form
        className="grid gap-4"
        onSubmit={handleSubmit}
      >
        <label className="font-mono text-xs uppercase tracking-wider text-[var(--color-text)]">
          Votre nom
          <input
            className="mt-2 block min-h-14 w-full rounded border border-[var(--color-text)] bg-[var(--color-surface)] px-4 font-sans text-base normal-case tracking-normal outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
            type="text"
            name="nom"
            required
            placeholder="Prénom Nom"
          />
        </label>
        <label className="font-mono text-xs uppercase tracking-wider text-[var(--color-text)]">
          Votre email
          <input
            className="mt-2 block min-h-14 w-full rounded border border-[var(--color-text)] bg-[var(--color-surface)] px-4 font-sans text-base normal-case tracking-normal outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
            type="email"
            name="email"
            required
            placeholder="vous@exemple.fr"
          />
        </label>
        <label className="font-mono text-xs uppercase tracking-wider text-[var(--color-text)]">
          Votre message
          <textarea
            className="mt-2 block min-h-40 w-full resize-y rounded border border-[var(--color-text)] bg-[var(--color-surface)] px-4 py-3 font-sans text-base normal-case tracking-normal outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
            name="message"
            required
            rows={5}
            placeholder="Bonjour Josselin..."
          />
        </label>
        <button
          className="inline-flex min-h-14 items-center justify-between gap-4 rounded border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 text-sm font-bold text-[var(--color-primary-foreground)] shadow-[7px_7px_0_var(--color-shadow)] transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--color-shadow)]"
          type="submit"
          disabled={isSending}
        >
          {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
          <ArrowUpRight className="size-6" />
        </button>
        {status && (
          <p
            className={`text-sm ${
              statusType === 'success'
                ? 'text-green-700'
                : 'text-red-700'
            }`}
            role="status"
          >
            {status}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact
