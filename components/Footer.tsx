'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: PORTFOLIO_DATA.github, label: 'GitHub' },
    { icon: Linkedin, href: PORTFOLIO_DATA.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PORTFOLIO_DATA.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {PORTFOLIO_DATA.name}
            </h3>
            <p className="text-foreground/60 text-sm mt-2">{PORTFOLIO_DATA.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-1">
              {['About', 'Skills', 'Experience', 'Projects'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const sectionId = link.toLowerCase();
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold text-foreground mb-3">Connect</h4>
            <div className="flex gap-3 justify-center md:justify-end">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="p-2 rounded-lg bg-background/50 border border-border/40 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
                    title={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60"
        >
          <p>© {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-accent" /> and React
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
