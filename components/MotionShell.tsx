'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type MotionShellProps = {
  children: React.ReactNode;
};

export function MotionShell({ children }: MotionShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 22 });
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMove = (event: MouseEvent) => {
      if (!shellRef.current) return;
      const rect = shellRef.current.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [prefersReducedMotion, x, y]);

  const glow = useMotionTemplate`
    radial-gradient(420px circle at ${smoothX}px ${smoothY}px, hsl(var(--accent) / 0.15), transparent 70%)
  `;

  return (
    <div ref={shellRef} className="relative">
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{ background: glow }}
        />
      )}
      <motion.div
        className="relative z-10"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
