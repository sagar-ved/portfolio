'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CERTIFICATIONS } from '@/lib/constants';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpVariants, containerVariants, popInVariants } from '@/lib/animations';

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
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
              Certifications & <span className="text-primary">Achievements</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div key={cert.id} variants={popInVariants}>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                  className="h-full"
                >
                  <Card className="p-4 sm:p-6 border-border/40 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer h-full flex flex-col items-center justify-center glow-ring">
                  <motion.div
                    className="text-4xl sm:text-5xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 20 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
