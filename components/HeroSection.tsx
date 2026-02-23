'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { containerVariants, itemVariants, letterVariants, staggerFast } from '@/lib/animations';
import { useRef } from 'react';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const nameLetters = Array.from(PORTFOLIO_DATA.name);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        style={prefersReducedMotion ? undefined : { y: parallaxY }}
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animated-gradient" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animated-gradient" />
        <div className="absolute inset-0 grid-glow" />
      </motion.div>

      <div className="w-full max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-full" />
              <motion.span
                variants={staggerFast}
                initial="hidden"
                animate="visible"
                className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                aria-label={PORTFOLIO_DATA.name}
              >
                {nameLetters.map((letter, index) => (
                  <motion.span key={`${letter}-${index}`} variants={letterVariants} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-foreground/90 mb-2">
              {PORTFOLIO_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70">
              {PORTFOLIO_DATA.subtitle}
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-14 sm:mb-16 leading-relaxed"
          >
            {PORTFOLIO_DATA.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="text-foreground/40 text-xs sm:text-sm">
                ↓ Scroll to explore
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
