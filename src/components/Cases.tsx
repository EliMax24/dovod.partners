import { useState } from 'react';
import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Reveal } from './Reveal';

function CaseCard({ c, i, lang }: { c: { tag: string; title: string; desc: string }; i: number; lang: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="group border border-line-strong hover:border-accent hover:bg-accent transition-colors duration-200 p-8 md:p-10 h-full flex flex-col">
      <div className="text-xs uppercase tracking-[0.18em] text-muted group-hover:text-paper/60 transition-colors duration-200 mb-6">
        <span className="text-accent group-hover:text-paper/60 transition-colors duration-200">{String(i + 1).padStart(2, '0')}</span> · {c.tag}
      </div>
      <h3 className="font-display text-xl md:text-2xl font-medium leading-snug mb-5 group-hover:text-paper transition-colors duration-200">
        {c.title}
      </h3>
      <p className={`text-muted leading-relaxed group-hover:text-paper/75 transition-colors duration-200 ${expanded ? '' : 'line-clamp-4'} md:line-clamp-none`}>
        {c.desc}
      </p>
      <button
        className="mt-3 text-xs uppercase tracking-[0.18em] text-accent group-hover:text-paper/60 transition-colors duration-200 text-left md:hidden"
        onClick={() => setExpanded(v => !v)}
      >
        {expanded
          ? (lang === 'ru' ? 'Свернуть' : 'Show less')
          : (lang === 'ru' ? 'Читать далее' : 'Read more')}
      </button>
    </article>
  );
}

export function Cases() {
  const { cases } = useContent();
  const { lang } = useLang();
  return (
    <section id="cases" className="section-pp">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              {lang === 'ru' ? 'Недавние кейсы' : 'Recent cases'}
            </h2>
            <div className="hidden md:block text-sm text-accent/60">04 / 05</div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <CaseCard c={c} i={i} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
