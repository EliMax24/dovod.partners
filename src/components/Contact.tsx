import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';

export function Contact() {
  const { contacts } = useContent();
  const { lang } = useLang();

  const items = [
    {
      label: 'E-mail',
      value: contacts.email,
      href: contacts.email ? `mailto:${contacts.email}` : undefined,
    },
    ...(lang === 'ru' ? [{
      label: 'Телефон',
      value: contacts.phone,
      href: contacts.phone ? `tel:${contacts.phone.replace(/\D/g, '')}` : undefined,
    }] : []),
    {
      label: 'Telegram',
      value: contacts.telegram,
      href: contacts.telegram
        ? `https://t.me/${contacts.telegram.replace('@', '')}`
        : undefined,
    },
  ];

  return (
    <section
      id="contacts"
      className="scroll-mt-16 md:scroll-mt-20 bg-ink text-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container-pp py-20 md:py-28">
        <Reveal>
          <div className="mb-14 md:mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-paper/40 mb-5">
              {lang === 'ru' ? 'Контакты' : 'Contact'}
            </div>
            <h2 className="font-display font-medium text-display-lg text-paper max-w-2xl leading-none">
              {lang === 'ru' ? 'Обсудим задачу' : 'Discuss Your Matter'}
            </h2>
            {lang === 'en' && (
              <p className="mt-6 text-paper/50 text-base leading-relaxed max-w-md">
                We work with clients across MENA, EU, US and CIS. Reach out to discuss your matter — we typically respond within one working day.
              </p>
            )}
          </div>
        </Reveal>

        <div className="border-t border-paper/15">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07}>
              {item.href ? (
                <a
                  href={item.href}
                  className="group grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-6 py-7 md:py-9 border-b border-paper/15 hover:bg-paper/5 -mx-4 px-4 transition-colors duration-200"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-paper/40 group-hover:text-paper/60 transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="font-display text-lg md:text-xl lg:text-2xl font-medium tracking-tightish text-accent leading-tight">
                    {item.value}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-paper/30 group-hover:text-accent transition-colors duration-200 flex-shrink-0"
                  />
                </a>
              ) : (
                <div className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-6 py-7 md:py-9 border-b border-paper/15">
                  <span className="text-xs uppercase tracking-[0.18em] text-paper/40">
                    {item.label}
                  </span>
                  <span className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tightish text-paper/20 leading-tight">
                    —
                  </span>
                  <ArrowUpRight size={20} className="opacity-0 flex-shrink-0" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-paper/50 leading-relaxed">
            {lang === 'ru'
              ? <>Содержание переговоров защищено <a href="/confidentiality" className="underline underline-offset-2 hover:text-accent transition-colors">политикой конфиденциальности</a> и <a href="/ethics" className="underline underline-offset-2 hover:text-accent transition-colors">кодексом деловой этики</a>.</>
              : <>All communications are protected by our <a href="/confidentiality" className="underline underline-offset-2 hover:text-accent transition-colors">privacy policy</a> and <a href="/ethics" className="underline underline-offset-2 hover:text-accent transition-colors">code of ethics</a>.</>
            }
          </p>
        </Reveal>
      </div>
    </section>
  );
}
