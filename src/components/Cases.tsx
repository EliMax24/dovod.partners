import { cases } from '../data/content';
import { Reveal } from './Reveal';

export function Cases() {
  return (
    <section id="cases" className="section-pp">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              Избранные кейсы
            </h2>
            <div className="hidden md:block text-sm text-muted">04 / 05</div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <article className="group border border-line-strong hover:border-ink transition-colors p-8 md:p-10 h-full flex flex-col">
                <div className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
                  {String(i + 1).padStart(2, '0')} · {c.tag}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium leading-snug mb-5">
                  {c.title}
                </h3>
                <p className="text-muted leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
