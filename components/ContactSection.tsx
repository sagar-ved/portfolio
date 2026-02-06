'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { slideUpVariants, itemVariants } from '@/lib/animations';
import { toast } from 'sonner';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2500);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: PORTFOLIO_DATA.github, color: 'hover:text-foreground' },
    { icon: Linkedin, label: 'LinkedIn', href: PORTFOLIO_DATA.linkedin, color: 'hover:text-primary' },
    { icon: Mail, label: 'Email', href: `mailto:${PORTFOLIO_DATA.email}`, color: 'hover:text-accent' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Let's Connect <span className="text-primary">Together</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-accent rounded mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Card className="p-6 sm:p-8 border-border/40 bg-card/50 backdrop-blur h-full">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80 mb-2 block">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border/40 text-foreground transition focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground/80 mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border/40 text-foreground transition focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground/80 mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="bg-background/50 border-border/40 text-foreground resize-none transition focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold ripple-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                {showSuccess && (
                  <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 110, damping: 22 }}
                    className="mt-4 flex items-center gap-2 text-sm text-primary"
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    Message sent successfully.
                  </motion.div>
                )}
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <Card className="p-6 sm:p-8 border-border/40 bg-card/50 backdrop-blur">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h3>

                <p className="text-foreground/60 mb-8 leading-relaxed">
                  I'm always interested in hearing about interesting projects and opportunities. Feel free to reach out!
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.email}`}
                    className="block p-4 rounded-lg bg-background/50 border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <p className="text-sm text-foreground/60 group-hover:text-foreground transition-colors">Email</p>
                    <p className="font-semibold text-foreground truncate">{PORTFOLIO_DATA.email}</p>
                  </a>
                </div>

                <h4 className="font-semibold text-foreground mb-4">Follow</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg bg-background/50 border border-border/40 text-foreground/60 ${link.color} transition-all`}
                        title={link.label}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
