'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpVariants } from '@/lib/animations';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const profileLinks = [
    { icon: FileText, href: PORTFOLIO_DATA.resume, label: 'Resume' },
    { icon: Github, href: PORTFOLIO_DATA.github, label: 'GitHub' },
    { icon: Linkedin, href: PORTFOLIO_DATA.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PORTFOLIO_DATA.email}`, label: 'Email' },
  ];

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
                  <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src="https://sagar-ved.github.io/portfolio/images/headshots/IMG_20260112_091144.jpg"
                      alt="Professional headshot"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
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

              <div className="flex flex-wrap items-center gap-3">
                {profileLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card/60 text-primary transition-all hover:border-primary hover:bg-primary/10 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

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
