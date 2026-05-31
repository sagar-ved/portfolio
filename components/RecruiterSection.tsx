'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RECRUITER_DATA, PORTFOLIO_DATA } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';
import { 
  Briefcase, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Network, 
  Compass, 
  FileDown, 
  Mail, 
  UserCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Map icon names to Lucide icons
const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Code2: Code2,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Network: Network,
  Compass: Compass,
};

export function RecruiterSection() {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-background/50 border-y border-border/20">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <UserCheck size={14} className="animate-pulse" />
            <span>Recruiter Quick Scan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent mb-4">
            Why Hire Me?
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base leading-relaxed">
            In a hurry? Here is a high-level technical summary of my credentials, key strengths, and what I bring to your engineering organization in 30 seconds.
          </p>
        </div>

        {/* 3x2 Grid for the pillars */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {RECRUITER_DATA.map((item) => {
            const IconComponent = iconMap[item.iconName] || Briefcase;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative bg-card/45 hover:bg-card/75 border border-border/40 hover:border-primary/45 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Accent corner light glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-primary/70 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                    <div className="text-primary/60 group-hover:text-primary transition-colors duration-300">
                      <IconComponent size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Area for Recruiters */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-card/30 border border-border/30 rounded-2xl p-8 backdrop-blur max-w-3xl mx-auto shadow-2xl">
          <div className="text-center sm:text-left space-y-1 flex-1">
            <h4 className="text-lg font-bold text-foreground">Like what you see?</h4>
            <p className="text-xs sm:text-sm text-foreground/50">
              Download my complete CV, check out my code portfolio, or get in touch for an interview.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="bg-primary hover:bg-primary/95 text-black font-semibold shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href={PORTFOLIO_DATA.resume} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <FileDown size={16} />
                <span>Get Resume</span>
              </a>
            </Button>
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
