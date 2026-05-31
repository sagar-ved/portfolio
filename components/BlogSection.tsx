'use client';

import { motion } from 'framer-motion';
import { BLOG_POSTS, PORTFOLIO_DATA } from '@/lib/constants';
import { containerVariants, itemVariants } from '@/lib/animations';
import { BookOpen, ArrowUpRight, Rss, ExternalLink } from 'lucide-react';

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Profile Links */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <BookOpen size={14} />
              <span>Technical Writing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-foreground to-primary bg-clip-text text-transparent mb-4">
              Engineering Insights
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed">
              I share deep dives, architecture blueprints, and performance engineering solutions derived from real production challenges.
            </p>
          </div>

          {/* Profile Quick-links */}
          <div className="flex items-center gap-4 flex-wrap justify-center font-mono text-xs">
            <a 
              href="https://sagarved.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-border/40 hover:border-primary/40 bg-card/45 hover:bg-card/75 rounded-xl text-foreground/70 hover:text-primary transition-all duration-300 backdrop-blur shadow-md group"
            >
              <Rss size={14} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span>Follow on Medium</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
            <a 
              href="https://relatetechno.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 border border-border/40 hover:border-accent/40 bg-card/45 hover:bg-card/75 rounded-xl text-foreground/70 hover:text-accent transition-all duration-300 backdrop-blur shadow-md group"
            >
              <Rss size={14} className="text-accent group-hover:rotate-12 transition-transform duration-300" />
              <span>Read on RelateTechno</span>
              <ExternalLink size={10} className="opacity-50" />
            </a>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-card/35 hover:bg-card/75 border border-border/30 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 backdrop-blur shadow-xl flex flex-col justify-between overflow-hidden relative cursor-pointer"
              onClick={() => window.open(post.url, '_blank')}
            >
              {/* Dynamic bottom subtle gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                {/* Meta info header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                      post.platform === 'Medium' 
                        ? 'bg-foreground/5 border-foreground/10 text-foreground/80' 
                        : 'bg-accent/5 border-accent/15 text-accent/90'
                    }`}>
                      {post.platform}
                    </span>
                    <span className="text-[10px] text-foreground/45 font-mono">{post.date}</span>
                  </div>
                  <span className="text-[10px] text-foreground/45 font-mono">{post.readTime}</span>
                </div>

                {/* Post Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug mb-3">
                  {post.title}
                </h3>
                
                {/* Post Description */}
                <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed font-sans line-clamp-3 mb-6">
                  {post.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-medium text-foreground/50 bg-background/60 border border-border/20 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Call-to-action */}
                <div className="flex items-center justify-between pt-3 border-t border-border/20 group/btn">
                  <span className="text-xs font-semibold text-foreground/50 group-hover:text-accent font-mono transition-colors duration-300">
                    Read Article
                  </span>
                  <div className="w-7 h-7 rounded-full bg-border/20 group-hover:bg-accent/10 border border-border/30 group-hover:border-accent/40 flex items-center justify-center text-foreground/60 group-hover:text-accent transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
