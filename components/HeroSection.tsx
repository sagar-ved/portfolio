'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

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
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
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
            className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed"
          >
            {PORTFOLIO_DATA.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={PORTFOLIO_DATA.resume} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/50 hover:border-primary text-foreground"
            >
              <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary/50 hover:border-primary text-foreground"
            >
              <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
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
