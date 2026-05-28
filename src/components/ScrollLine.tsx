import { useScroll, useSpring, motion } from 'framer-motion';

export function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div
      className="fixed top-0 bottom-0 z-30 pointer-events-none flex flex-col items-center"
      style={{ left: 'clamp(1.5rem, calc(50vw - 45rem + 1.5rem), 4rem)' }}
    >
      {/* dot — anchor at hero eyebrow level */}
      <div
        className="w-1.5 h-1.5 bg-accent flex-shrink-0"
        style={{ marginTop: 'calc(5rem + 8rem)' }}
      />
      {/* growing line */}
      <motion.div
        className="w-px bg-accent flex-1 origin-top"
        style={{ scaleY }}
      />
    </div>
  );
}
