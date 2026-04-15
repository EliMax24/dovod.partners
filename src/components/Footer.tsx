import { nav, contacts } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-pp py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20">
          <div>
            <div className="font-display text-3xl md:text-5xl font-medium tracking-tightish max-w-lg leading-tight">
              PRO<span className="text-paper/40">·</span>Позиция
            </div>
            <p className="mt-6 text-paper/60 max-w-md leading-relaxed">
              Международная юридическая практика для tech и&nbsp;TMT. Трансграничные сделки,
              выход на&nbsp;внешние рынки, защита активов.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">
              Навигация
            </div>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-reveal text-paper/80 hover:text-paper transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">Контакты</div>
            <ul className="space-y-3">
              <FooterContact label="Email" value={contacts.email} href={contacts.email ? `mailto:${contacts.email}` : undefined} />
              <FooterContact label="Telegram" value={contacts.telegram} href={contacts.telegram ? `https://t.me/${contacts.telegram.replace('@', '')}` : undefined} />
              <FooterContact label="LinkedIn" value={contacts.linkedin} href={contacts.linkedin || undefined} />
              <FooterContact label="Телефон" value={contacts.phone} href={contacts.phone ? `tel:${contacts.phone.replace(/\D/g, '')}` : undefined} />
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-xs text-paper/50">
            © {new Date().getFullYear()} PRO Позиция. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-paper/50">
            <a href="/term-of-use" className="link-reveal hover:text-paper">
              Пользовательское соглашение
            </a>
            <a href="/confidentiality" className="link-reveal hover:text-paper">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterContact({ label, value, href }: { label: string; value: string; href?: string }) {
  const display = value || '—';
  return (
    <li className="flex items-baseline gap-3">
      <span className="text-paper/40 text-xs uppercase tracking-[0.14em] min-w-[72px]">
        {label}
      </span>
      {href ? (
        <a href={href} className="link-reveal text-paper/80 hover:text-paper">
          {display}
        </a>
      ) : (
        <span className="text-paper/40">{display}</span>
      )}
    </li>
  );
}
