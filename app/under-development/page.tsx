'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Cog, Terminal, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MotionShell } from '@/components/MotionShell';

const LOG_LINES = [
  'initializing demo sandbox v1.2.4...',
  'fetching project artifacts and blueprints...',
  'loading Spring Boot backend dependencies...',
  'mapping OAuth2 token security protocols...',
  'compiling high-scale microservices architecture...',
  'assembling live mock dashboard databases...',
  'deploying UI client shell endpoints...',
  'building SEO location intelligence map assets...',
  'optimizing traffic routing gate controllers...',
  'holding state: pending final release approval...',
];

export default function UnderDevelopmentPage() {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Log animation effect
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < LOG_LINES.length) {
        setActiveLogs(prev => [...prev, LOG_LINES[logIndex]].slice(-4)); // Keep last 4 logs
        logIndex++;
      } else {
        logIndex = 0;
        setActiveLogs([]);
      }
    }, 2800);

    // Progress bar loop
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div id="hero">
      <MotionShell>
        <Navbar />
        <main className="min-h-screen bg-background text-foreground pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center items-center">
          {/* Subtle grid glow backdrop */}
          <div className="absolute inset-0 grid-glow pointer-events-none opacity-40 z-0" />
          
          <div className="max-w-xl w-full mx-auto text-center z-10 space-y-8 px-4">
            
            {/* Pulsing Shield and Nested Spinners */}
            <div className="relative h-48 flex items-center justify-center">
              {/* Pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.4, 0.15] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute w-36 h-36 rounded-full border border-primary/30 glow-ring pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.05, 0.2, 0.05] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute w-36 h-36 rounded-full border border-accent/20 glow-ring pointer-events-none"
              />

              {/* Large Gear */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute text-primary/70 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <Cog size={110} strokeWidth={1.2} />
              </motion.div>

              {/* Small Gear */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute text-accent/80 ml-16 mt-16 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <Cog size={54} strokeWidth={1.5} />
              </motion.div>

              {/* Center Shield Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute bg-background/80 border border-border/80 p-3.5 rounded-full shadow-2xl backdrop-blur text-primary"
              >
                <ShieldAlert size={28} className="animate-pulse" />
              </motion.div>
            </div>

            {/* Typography Section */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
              >
                Demo Environment
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-foreground/60 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
              >
                This live interactive showcase sandbox is currently being fully compiled and optimized for high-performance viewing.
              </motion.p>
            </div>

            {/* Futuristic Progress Bar */}
            <div className="space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between text-xs font-mono text-primary/80">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  status: building
                </span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full bg-card border border-border/50 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent badge-glow rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Interactive Terminal Sandbox Logs */}
            <div className="bg-card/75 border border-border/40 backdrop-blur rounded-xl p-4 text-left font-mono text-xs sm:text-[11px] leading-relaxed shadow-2xl max-w-md mx-auto min-h-[140px] flex flex-col justify-end">
              <div className="flex items-center gap-2 border-b border-border/30 pb-2 mb-2 text-foreground/40 font-semibold uppercase tracking-wider text-[10px]">
                <Terminal size={12} className="text-accent" />
                <span>Compiler Sandbox logs</span>
              </div>
              <div className="space-y-1.5 text-foreground/75 overflow-hidden">
                {activeLogs.map((log, idx) => (
                  <motion.div
                    key={log + idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-1.5"
                  >
                    <span className="text-accent select-none">&gt;</span>
                    <span className="truncate">{log}</span>
                  </motion.div>
                ))}
                {activeLogs.length === 0 && (
                  <div className="text-foreground/30 italic animate-pulse">Establishing terminal stream connection...</div>
                )}
              </div>
            </div>

            {/* Premium Go Back Button */}
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-lg ripple-button group">
                <Link href="/" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

          </div>
        </main>
        <Footer />
      </MotionShell>
    </div>
  );
}
