import { useState } from 'react';
import { team } from '../data/content';
import { Reveal } from './Reveal';

export function Team() {
  const [active, setActive] = useState(0);
  const partner = team[active];

  return (
    <section id="team" className="section-pp bg-paper-warm border-y border-line">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">Команда</h2>
            <div className="hidden md:block text-sm text-muted">05 / 05</div>
          </div>
        </Reveal>

        {/* Partner tabs */}
        {team.length > 1 && (
          <div className="flex gap-8 mb-12 border-b border-line">
            {team.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`pb-4 text-sm uppercase tracking-[0.14em] transition-colors border-b-2 -mb-px ${
                  active === i
                    ? 'border-ink text-ink'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {p.name || `Партнёр ${i + 1}`}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-20 items-start">
          <Reveal key={`photo-${active}`}>
            <div className="aspect-[4/5] bg-line overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-line via-line-strong to-line" />
            </div>
          </Reveal>

          <Reveal key={`info-${active}`} delay={0.1}>
            <div className="border-t border-ink pt-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
                Партнёр практики
              </div>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tightish leading-none mb-2">
                {partner.name}
              </h3>
              <div className="text-muted mb-10">{partner.role}</div>

              {partner.bio && (
                <p className="text-lg text-ink/85 leading-relaxed max-w-2xl mb-10">{partner.bio}</p>
              )}

              {partner.focus.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-2xl">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted sm:col-span-2 mb-1">
                    Специализация
                  </div>
                  {partner.focus.map((f) => (
                    <div key={f} className="border-t border-line-strong pt-3 text-ink leading-snug">
                      {f}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
