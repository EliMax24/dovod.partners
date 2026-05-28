import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Reveal } from './Reveal';

export function Practices() {
  const { expertise } = useContent();
  const { lang } = useLang();
  return (
    <section id="expertise" className="section-pp">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              {lang === 'ru' ? 'Экспертиза' : 'Expertise'}
            </h2>
            <div className="hidden md:block text-sm text-accent/60">02 / 05</div>
          </div>
        </Reveal>

        <div className="border-t border-ink">
          {expertise.map((e, i) => (
            <Reveal key={e.num} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-[90px_1fr_2fr] gap-6 md:gap-10 py-10 md:py-14 border-b border-line-strong">
                <div className="font-display text-accent text-sm tabular-nums">
                  {e.num} / 06
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tightish text-ink leading-tight">
                  {e.title}
                </h3>
                <p className="text-muted leading-relaxed md:text-lg max-w-xl">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
