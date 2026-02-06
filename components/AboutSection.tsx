'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpVariants } from '@/lib/animations';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <motion.h2
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              About <span className="text-primary">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 110, damping: 22 }}
              >
                <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur">
                  <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl mb-4">👨‍💻</div>
                      <p className="text-foreground/60">Professional Headshot</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary flex-shrink-0">🎯</div>
                  <div>
                    <h3 className="font-semibold mb-2">Performance First</h3>
                    <p className="text-foreground/60 text-sm">
                      Obsessed with building systems that scale and perform under extreme load.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary flex-shrink-0">🏗️</div>
                  <div>
                    <h3 className="font-semibold mb-2">System Design</h3>
                    <p className="text-foreground/60 text-sm">
                      Expert in designing distributed systems with focus on reliability and maintainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl text-primary flex-shrink-0">🔧</div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Excellence</h3>
                    <p className="text-foreground/60 text-sm">
                      Committed to writing clean, well-tested code and following engineering best practices.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
