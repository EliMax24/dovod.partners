import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Reveal } from './Reveal';

export function Stats() {
  const { manifest } = useContent();
  const { lang } = useLang();
  return (
    <section id="about" className="scroll-mt-16 md:scroll-mt-20 section-pp bg-paper-warm border-y border-line">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              {lang === 'ru' ? 'О практике' : 'About'}
            </h2>
            <div className="hidden md:block text-sm text-accent/60">01 / 05</div>
          </div>
        </Reveal>

        <Reveal>
          <p className="max-w-3xl text-lg md:text-xl text-ink/80 leading-relaxed mb-16 md:mb-20">
            {lang === 'ru'
              ? 'Мы — бутиковая международная юридическая практика для tech и TMT-компаний. Работаем с трансграничными сделками, выходом на зарубежные рынки, санкционным комплаенсом и цифровым регулированием. Партнёр включён в каждый проект от диагностики до закрытия.'
              : 'We are a boutique international legal practice for tech and TMT companies. We work on cross-border transactions, market entry, sanctions compliance and digital regulation. The partner is personally involved in every engagement from diagnosis to closing.'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {manifest.map((m, i) => (
            <Reveal key={m.k} delay={i * 0.08}>
              <div className="group flex flex-col border-t-2 border-accent hover:bg-accent hover:border-accent transition-colors duration-200 pt-5 pb-5 px-4 -mx-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted group-hover:text-paper/60 transition-colors duration-200 mb-4">{m.k}</div>
                <div className="font-display font-medium text-3xl md:text-4xl text-ink group-hover:text-paper mb-4 leading-tight tracking-tightish transition-colors duration-200">
                  {m.v}
                </div>
                <p className="text-muted leading-relaxed text-sm group-hover:text-paper/75 transition-colors duration-200">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
