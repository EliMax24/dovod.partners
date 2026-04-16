import { manifest } from '../data/content';
import { Reveal } from './Reveal';

export function Stats() {
  return (
    <section id="about" className="section-pp bg-paper-warm border-y border-line">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              О&nbsp;практике
            </h2>
            <div className="hidden md:block text-sm text-accent/60">01 / 05</div>
          </div>
        </Reveal>

        <Reveal>
          <p className="max-w-3xl text-lg md:text-xl text-ink/80 leading-relaxed mb-16 md:mb-20">
            Мы — бутиковая международная юридическая практика для tech- и&nbsp;TMT-компаний.
            Работаем с&nbsp;трансграничными сделками, выходом на&nbsp;зарубежные рынки,
            санкционным комплаенсом и&nbsp;цифровым регулированием. Партнёр включён
            в&nbsp;каждый проект от&nbsp;диагностики до&nbsp;закрытия.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {manifest.map((m, i) => (
            <Reveal key={m.k} delay={i * 0.08}>
              <div className="flex flex-col border-t-2 border-accent pt-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted mb-4">{m.k}</div>
                <div className="font-display font-medium text-3xl md:text-4xl text-ink mb-4 leading-tight tracking-tightish">
                  {m.v}
                </div>
                <p className="text-muted leading-relaxed text-sm">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
