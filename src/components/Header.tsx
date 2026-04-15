import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/content';
import clsx from 'clsx';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#top" className="font-display font-semibold tracking-tightish text-lg md:text-xl">
          PRO<span className="text-muted">·</span>Позиция
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-reveal text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contacts"
            className="text-sm font-medium px-5 py-2.5 bg-ink text-paper hover:bg-ink-soft transition-colors"
          >
            Обсудить задачу
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
              Обсудить задачу
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
