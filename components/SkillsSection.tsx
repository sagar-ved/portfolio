'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/lib/constants';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpVariants, containerVariants, itemVariants } from '@/lib/animations';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categoryIcons: { [key: string]: string } = {
    'Languages & Frameworks': '📝',
    'Architecture & Backend': '🏗️',
    'Databases': '🗄️',
    'Engineering Practices': '⚙️',
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
              Skills & <span className="text-primary">Expertise</span>
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
            className="grid md:grid-cols-2 gap-4 sm:gap-6"
          >
            {Object.entries(SKILLS).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
              >
                <Card className="p-5 sm:p-6 border-border/40 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl sm:text-2xl">{categoryIcons[category]}</span>
                      <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
