import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { contacts, formCopy } from '../data/content';

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const hasAny = contacts.email || contacts.telegram || contacts.linkedin || contacts.phone;

  return (
    <section id="contacts" className="section-pp bg-paper-warm border-y border-line">
      <div className="container-pp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
                Контакты
              </div>
              <h2 className="font-display font-medium text-display-lg mb-10 max-w-xl">
                Обсудим&nbsp;задачу
              </h2>

              <div className="space-y-6 pt-8 border-t border-ink">
                <ContactRow label="E-mail" value={contacts.email} href={contacts.email ? `mailto:${contacts.email}` : undefined} />
                <ContactRow label="Telegram" value={contacts.telegram} href={contacts.telegram ? `https://t.me/${contacts.telegram.replace('@', '')}` : undefined} />
                <ContactRow label="LinkedIn" value={contacts.linkedin} href={contacts.linkedin || undefined} />
                <ContactRow label="Телефон" value={contacts.phone} href={contacts.phone ? `tel:${contacts.phone.replace(/\D/g, '')}` : undefined} />
              </div>

              {!hasAny && (
                <p className="mt-8 text-sm text-muted max-w-md leading-relaxed">
                  Контакты будут опубликованы позднее. Пока оставьте сообщение через форму справа — партнёр ответит напрямую.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="bg-paper border border-line p-8 md:p-10">
              <h3 className="font-display text-xl md:text-2xl font-medium mb-2">
                {formCopy.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {formCopy.description}
              </p>

              <div className="space-y-7">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">Имя</span>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 pb-2 bg-transparent border-b border-line-strong focus:border-ink outline-none transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    Коротко о задаче
                  </span>
                  <textarea
                    rows={4}
                    required
                    placeholder="Отрасль, юрисдикции, суть вопроса, сроки"
                    className="w-full mt-2 pb-2 bg-transparent border-b border-line-strong focus:border-ink outline-none transition-colors resize-none placeholder:text-muted-2"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted">
                    Как связаться
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Email или Telegram"
                    className="w-full mt-2 pb-2 bg-transparent border-b border-line-strong focus:border-ink outline-none transition-colors placeholder:text-muted-2"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group mt-10 inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors disabled:opacity-60"
              >
                {sent ? formCopy.sent : formCopy.submit}
                {!sent && (
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <p className="mt-6 text-xs text-muted leading-relaxed">{formCopy.disclaimer}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const display = value || '—';
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-2">{label}</div>
      {href ? (
        <a href={href} className="font-display text-xl md:text-2xl font-medium link-reveal w-fit">
          {display}
        </a>
      ) : (
        <div className="font-display text-xl md:text-2xl font-medium text-muted-2">{display}</div>
      )}
    </div>
  );
}
