'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onDismiss: () => void;
}

export function SplashScreen({ onDismiss }: SplashScreenProps) {
  const backendFocus = [
    'Java',
    'Spring Boot',
    'Microservices',
    'Distributed Systems',
    'API Gateway',
    'MySQL',
    'Aerospike',
  ];
  const mavenLogs = [
    '$ mvn clean package -Pportfolio-prod',

    '[INFO] Scanning for projects...',
    '[INFO] Building sagar-backend-portfolio 1.0.0',
    '[INFO] Active profile: portfolio-prod',
    '[INFO] Java 17 | Maven 3.9.6',

    '[INFO] Cleaning target directory...',
    '[INFO] Copying resources (application-prod.yml)',
    '[INFO] Compiling 148 source files...',

    '[INFO] Loading modules: flights-service, hotels-service, trains-service',
    '[INFO] Initializing: api-gateway, auth, reseller, pnr-dedupe, rescheduler',

    '[INFO] Running 68 tests...',
    '[INFO] Tests passed: 66 | Skipped: 2',

    '[INFO] Verifying MySQL ✓ | Aerospike ✓ | Gateway ✓',
    '[INFO] Packaging Spring Boot executable JAR...',
    '[INFO] Building jar: target/sagar-backend-portfolio-1.0.0.jar',

    '[INFO] BUILD SUCCESS',
    '[INFO] Total time: 12.4 s',
    '[INFO] Deploying bundle to production runtime...',
    '[INFO] Publishing static assets and API contracts...',
    '[INFO] Deployment completed successfully',
  ];
  const [visibleLines, setVisibleLines] = useState(1);
  const isComplete = visibleLines === mavenLogs.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((current) => {
        if (current >= mavenLogs.length) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 110); // Speed up log rendering for a snappier experience

    return () => window.clearInterval(interval);
  }, [mavenLogs.length]);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 1000); // Automatically proceed to the website 1s after build completes successfully
      return () => clearTimeout(timer);
    }
  }, [isComplete, onDismiss]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
    >
      <div className="relative w-full max-w-2xl px-6 text-center">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 blur-3xl" />
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.35em] text-foreground/55"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Initializing Backend Systems
        </motion.p>
        <motion.h1
          className="mt-4 text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          {PORTFOLIO_DATA.name}
        </motion.h1>
        <motion.p
          className="mt-2 text-sm sm:text-base text-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          {PORTFOLIO_DATA.title} | {PORTFOLIO_DATA.subtitle}
        </motion.p>

        <motion.div
          className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {backendFocus.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-primary/30 bg-card/70 px-3 py-1 text-xs text-primary/90"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-6 w-full max-w-xl rounded-lg border border-primary/20 bg-card/60 p-3 text-left font-mono text-xs text-foreground/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
        >
          {mavenLogs.slice(0, visibleLines).map((line) => (
            <p
              key={line}
              className={
                line.includes('BUILD SUCCESS') || line.includes('Deployment completed')
                  ? 'text-primary'
                  : undefined
              }
            >
              {line}
            </p>
          ))}
          {visibleLines < mavenLogs.length && (
            <motion.p
              className="text-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              [INFO] ...
            </motion.p>
          )}
        </motion.div>

        {/* Real Dynamic Progress Bar */}
        <div className="mx-auto mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-foreground/10 border border-primary/10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${(visibleLines / mavenLogs.length) * 100}%` }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
        </div>

        {/* Premium Skip / Enter Website Action Area */}
        <div className="mt-8 min-h-[48px] flex flex-col items-center justify-center">
          {isComplete ? (
            <motion.button
              onClick={onDismiss}
              className="px-6 py-2.5 rounded-xl border border-primary bg-primary/10 hover:bg-primary/20 text-xs font-semibold tracking-wider uppercase text-primary transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-105"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              Enter Portfolio
            </motion.button>
          ) : (
            <motion.button
              onClick={onDismiss}
              className="px-4 py-1.5 rounded-lg border border-border/40 bg-card/40 hover:bg-card/80 hover:border-primary/30 text-[11px] font-medium text-foreground/50 hover:text-primary transition-all duration-300 flex items-center gap-1 group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>Skip Intro</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
