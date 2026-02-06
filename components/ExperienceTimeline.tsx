'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { EXPERIENCE } from '@/lib/constants';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { slideUpVariants } from '@/lib/animations';

export function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
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
              Experience <span className="text-primary">Journey</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded"
            />
          </div>

          <div className="relative">
            <motion.div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 origin-top"
              style={prefersReducedMotion ? undefined : { scaleY: lineScale }}
            />

            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 md:px-6 mb-6 md:mb-0 pl-6 md:pl-0">
                    <motion.div layout>
                      <Card className="p-5 sm:p-6 border-border/40 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{job.role}</h3>
                          <p className="text-primary font-semibold">{job.company}</p>
                        </div>
                      </div>

                      <p className="text-sm text-foreground/60 mb-4">{job.period}</p>
                      <p className="text-foreground/70 mb-4 leading-relaxed">{job.description}</p>

                      <button
                        type="button"
                        onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                        className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        {expandedId === job.id ? 'Hide Highlights' : 'View Highlights'}
                      </button>

                      <motion.div
                        initial={false}
                        animate={expandedId === job.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 110, damping: 22 }}
                        className="overflow-hidden mt-4"
                      >
                        <div className="space-y-2">
                          {job.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              <p className="text-sm text-foreground/60">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg"
                    />
                  </div>

                  <div className="flex md:hidden absolute left-2 top-8 w-2 h-2 bg-primary rounded-full border-2 border-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
