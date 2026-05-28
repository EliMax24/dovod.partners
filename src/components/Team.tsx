import { motion } from 'framer-motion';
import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Reveal } from './Reveal';

export function Team() {
  const { team } = useContent();
  const { lang } = useLang();
  const partner = team[0];

  return (
    <section id="team" className="scroll-mt-16 md:scroll-mt-20 bg-paper border-y border-line overflow-hidden">
      <div className="container-pp">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20 xl:gap-28">

          {/* Photo — только десктоп */}
          <motion.div
            className="hidden lg:block relative overflow-hidden order-2 lg:order-1"
            initial="idle"
            whileHover="hover"
          >
            <motion.img
              src="/partner.webp"
              alt={lang === 'ru' ? 'Илья Максимов' : 'Ilya Maksimov'}
              className="absolute inset-0 w-full h-full object-cover object-top"
              variants={{
                idle: { filter: 'grayscale(1) brightness(1) contrast(1.15)' },
                hover: { filter: 'grayscale(0) brightness(1) contrast(1)' },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 bg-accent/15 mix-blend-multiply pointer-events-none"
              variants={{ idle: { opacity: 1 }, hover: { opacity: 0 } }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Текст */}
          <div className="py-10 md:py-12 lg:py-14 order-1 lg:order-2">
            <Reveal>
              <div className="flex items-baseline justify-between gap-8 mb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-accent">
                  {lang === 'ru' ? 'Founder & Managing Partner' : 'Founder & Managing Partner'}
                </div>
                <div className="hidden md:block text-sm text-accent/60">05 / 05</div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex items-center gap-5 mb-12 md:mb-16">
                <div className="lg:hidden flex-shrink-0 w-[38%]">
                  <img
                    src="/partner.webp"
                    alt={lang === 'ru' ? 'Илья Максимов' : 'Ilya Maksimov'}
                    className="w-full h-auto rounded"
                  />
                </div>
                <h2 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl tracking-tightish md:max-w-xl">
                  {partner.name.split(' ').map((word, i) => (
                    <span key={i} className="block lg:inline">{word}{i < partner.name.split(' ').length - 1 && <span className="hidden lg:inline"> </span>}</span>
                  ))}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                {partner.bio && (
                  <p className="text-base md:text-lg text-ink/85 leading-relaxed max-w-2xl mb-12">
                    {partner.bio}
                  </p>
                )}

                {partner.focus.length > 0 && (
                  <div className="border-t border-ink pt-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted mb-6">
                      {lang === 'ru' ? 'Специализация' : 'Focus areas'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                      {partner.focus.map((f) => (
                        <div key={f} className="border-t border-line-strong hover:border-accent hover:bg-accent hover:text-paper transition-colors duration-200 pt-3 pb-3 px-3 -mx-3 text-ink leading-snug">
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
      </div>
    </section>
  );
}
