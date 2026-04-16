import { team } from '../data/content';
import { Reveal } from './Reveal';

export function Team() {
  const partner = team[0];

  return (
    <section id="team" className="section-pp bg-paper-warm border-y border-line">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">
              Founder & Managing Partner
            </div>
            <div className="hidden md:block text-sm text-accent/60">05 / 05</div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tightish max-w-5xl mb-16 md:mb-24">
            {partner.name}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-20 items-start">
          <Reveal delay={0.1}>
            <div className="aspect-[4/5] bg-line overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-line via-line-strong to-line" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              {partner.bio && (
                <p className="text-base md:text-lg text-ink/85 leading-relaxed max-w-2xl mb-12">
                  {partner.bio}
                </p>
              )}

              {partner.focus.length > 0 && (
                <div className="border-t border-ink pt-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
                    Специализация
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                    {partner.focus.map((f) => (
                      <div key={f} className="border-t border-line-strong pt-3 text-ink leading-snug">
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
