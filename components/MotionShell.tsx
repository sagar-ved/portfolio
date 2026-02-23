'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { SplashScreen } from '@/components/SplashScreen';
import { usePathname } from 'next/navigation';

type MotionShellProps = {
  children: React.ReactNode;
};

export function MotionShell({ children }: MotionShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 22 });
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowSplash(false);

      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

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
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{ background: glow }}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="relative z-10"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14, scale: 0.99, filter: 'blur(10px)' }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, scale: 0.995, filter: 'blur(8px)' }}
          transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
