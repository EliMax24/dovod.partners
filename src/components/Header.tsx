import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import clsx from 'clsx';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { nav, hero } = useContent();
  const { lang, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent',
      )}
    >
      <div className="container-pp flex items-center justify-between h-16 md:h-20">
        <a href="#top">
          <Logo width={180} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-reveal text-sm text-ink/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LangToggle lang={lang} toggle={toggle} />
          <a
            href="#contacts"
            className="text-sm font-medium px-5 py-2.5 bg-ink text-paper hover:bg-accent transition-colors"
          >
            {hero.cta}
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LangToggle lang={lang} toggle={toggle} />
          <button
            className="p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
          {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-pp py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 border-b border-line/60"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center bg-ink text-paper py-3 text-sm font-medium"
            >
              {hero.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, toggle }: { lang: 'ru' | 'en'; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="flex items-center border border-line-strong hover:border-accent transition-colors duration-200 overflow-hidden"
    >
      <span className={clsx(
        'px-3 py-1.5 text-xs font-medium tracking-widest transition-colors duration-200',
        lang === 'ru' ? 'bg-ink text-paper' : 'text-ink/40 hover:text-ink',
      )}>
        RU
      </span>
      <span className={clsx(
        'px-3 py-1.5 text-xs font-medium tracking-widest transition-colors duration-200',
        lang === 'en' ? 'bg-ink text-paper' : 'text-ink/40 hover:text-ink',
      )}>
        EN
      </span>
    </button>
  );
}
