import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { hero } from '../data/content';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="container-pp">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.2em] text-muted mb-8"
        >
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-medium text-display-xl text-ink max-w-5xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacts"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper text-sm md:text-base font-medium hover:bg-ink-soft transition-colors"
          >
            {hero.cta}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#expertise"
            className="inline-flex items-center gap-3 px-7 py-4 border border-line-strong text-sm md:text-base font-medium hover:border-ink transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="container-pp mt-24 md:mt-32">
        <div className="h-px bg-line" />
      </div>
    </section>
  );
}
