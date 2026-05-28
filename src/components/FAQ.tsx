import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '../data/useContent';
import { useLang } from '../context/LangContext';
import { Reveal } from './Reveal';
import clsx from 'clsx';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { faq } = useContent();
  const { lang } = useLang();

  return (
    <section id="faq" className="section-pp">
      <div className="container-pp">
        <Reveal>
          <div className="flex items-baseline justify-between gap-8 mb-16 md:mb-24">
            <h2 className="font-display font-medium text-display-md max-w-3xl">
              {lang === 'ru' ? 'Частые вопросы' : 'Common questions'}
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-ink">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                <div className="border-b border-line-strong">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-8 py-6 md:py-8 text-left group"
                  >
                    <div className="flex items-baseline gap-6 md:gap-8">
                      <span className="font-display text-accent text-sm md:text-base tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-lg md:text-2xl font-medium leading-snug">
                        {item.q}
                      </span>
                    </div>
                    <Plus
                      size={24}
                      className={clsx(
                        'shrink-0 mt-1.5 text-muted transition-transform duration-300',
                        isOpen && 'rotate-45 text-ink',
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 md:pb-10 pl-10 md:pl-[4.25rem] pr-12 text-muted leading-relaxed max-w-3xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
