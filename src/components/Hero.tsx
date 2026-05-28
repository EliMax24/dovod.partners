import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../data/useContent';

const SOURCE = '01010100 · 01000101 · 01000011 · 01001000';

function ScrambleBinary() {
  const [text, setText] = useState(SOURCE);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        SOURCE.split('').map((c) =>
          c === ' ' || c === '·' ? c : Math.random() > 0.5 ? '1' : '0'
        ).join('')
      );
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return <>{text}</>;
}

export function Hero() {
  const { hero } = useContent();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const lineProgress = useMotionValue(0);
  const width = useTransform(lineProgress, [0, 1], ['0%', '100%']);

  // Phase 1: auto-draw to 50% on mount
  useEffect(() => {
    const controls = animate(lineProgress, 0.5, {
      duration: 0.8,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, []);

  // Phase 2: scroll draws from 50% to 100%
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const scrollValue = 0.5 + v * 0.5;
      if (scrollValue > lineProgress.get()) {
        lineProgress.set(scrollValue);
      }
    });
  }, [scrollYProgress]);

  return (
    <section ref={ref} id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
        willChange: 'auto',
      }} />
      <div className="container-pp">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted mb-8"
        >
          <motion.span
            className="inline-block w-1.5 h-1.5 bg-accent flex-shrink-0"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
          />
          <span>
            <span className="text-accent/50 mr-1">[</span>
            {hero.eyebrow}
            <span className="text-accent/50 ml-1">]</span>
          </span>
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
            className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper text-sm md:text-base font-medium hover:bg-accent transition-colors"
          >
            {hero.cta}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#expertise"
            className="inline-flex items-center gap-3 px-7 py-4 border border-line-strong text-sm md:text-base font-medium hover:border-accent hover:bg-accent hover:text-paper transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="container-pp mt-24 md:mt-32">
        {/* binary digits revealed by the same clip as the line */}
        <motion.div className="overflow-hidden mb-1.5" style={{ width }}>
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent/35 whitespace-nowrap">
            <ScrambleBinary />
          </div>
        </motion.div>
        <motion.div
          className="h-px bg-accent"
          style={{ width }}
        />
      </div>
    </section>
  );
}
