'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/constants';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { slideUpVariants, containerVariants, itemVariants } from '@/lib/animations';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 90, damping: 22 });
  const rotateY = useSpring(tiltY, { stiffness: 90, damping: 22 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateMax = 6;
    tiltY.set(((x / rect.width) - 0.5) * rotateMax);
    tiltX.set(((y / rect.height) - 0.5) * -rotateMax);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={prefersReducedMotion ? undefined : { y: -8 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22 }}
        className="h-full transform-gpu"
      >
        <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 h-full flex flex-col group floating-shadow">
          <div className="relative h-44 sm:h-48 overflow-hidden bg-card">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5 sm:p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
            <p className="text-foreground/60 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary text-xs border-primary/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full sm:flex-1 border-primary/50 hover:border-primary text-foreground"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 w-full border border-border/40 hover:border-primary/50"
                >
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                    <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
              Featured <span className="text-primary">Projects</span>
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
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
