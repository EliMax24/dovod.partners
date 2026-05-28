import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Logo } from './Logo';

export function Footer() {
  const { nav, contacts } = useContent();
  const { lang } = useLang();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-pp py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12 mb-16 md:mb-20">
          <div>
            <Logo dark width={200} />
            <p className="mt-5 text-paper/60 max-w-md leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Международная юридическая практика для tech и digital. Трансграничные сделки, выход на внешние рынки, защита активов.'
                : 'International legal practice for tech & digital. Cross-border transactions, market entry, asset protection.'}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">
              {lang === 'ru' ? 'Навигация' : 'Navigation'}
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
            <div className="text-xs uppercase tracking-[0.18em] text-paper/40 mb-5">
              {lang === 'ru' ? 'Контакты' : 'Contact'}
            </div>
            <ul className="space-y-3">
              <FooterContact label="Email" value={contacts.email} href={contacts.email ? `mailto:${contacts.email}` : undefined} />
              {lang === 'ru' && (
                <FooterContact label="Телефон" value={contacts.phone} href={contacts.phone ? `tel:${contacts.phone.replace(/\D/g, '')}` : undefined} />
              )}
              <FooterContact label="Telegram" value={contacts.telegram} href={contacts.telegram ? `https://t.me/${contacts.telegram.replace('@', '')}` : undefined} />
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-xs text-paper/50">
            © {new Date().getFullYear()} DOVOD Partners.{' '}
            {lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-paper/50">
            <a href="/term-of-use" className="link-reveal hover:text-paper">
              {lang === 'ru' ? 'Пользовательское соглашение' : 'Terms of use'}
            </a>
            <a href="/confidentiality" className="link-reveal hover:text-paper">
              {lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy policy'}
            </a>
            <a href="/ethics" className="link-reveal hover:text-paper">
              {lang === 'ru' ? 'Кодекс деловой этики' : 'Code of ethics'}
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
