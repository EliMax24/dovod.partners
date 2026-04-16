import { approach, principles } from '../data/content';
import { Reveal } from './Reveal';

export function Stages() {
  return (
    <section id="stages" className="section-pp bg-ink text-paper">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">Как строится работа</h2>
            <div className="hidden md:block text-sm text-accent-soft/70">03 / 05</div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-28 md:mb-36">
          {approach.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="flex flex-col h-full border-t border-paper/20 pt-6">
                <div className="font-display text-accent-soft text-sm mb-8">{s.num}</div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-4">{s.title}</h3>
                <p className="text-paper/70 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display font-medium text-display-md max-w-3xl mb-16">Принципы</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-paper/20 pt-6">
                <h4 className="font-display text-xl md:text-2xl font-medium mb-4">{p.title}</h4>
                <p className="text-paper/70 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
