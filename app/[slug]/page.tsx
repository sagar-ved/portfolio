import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MotionShell } from '@/components/MotionShell';

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), 'public/project-docs');
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, '').toLowerCase(),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const dirPath = path.join(process.cwd(), 'public/project-docs');
  if (!fs.existsSync(dirPath)) return {};
  
  const files = fs.readdirSync(dirPath);
  const fileMap = new Map(
    files
      .filter(file => file.endsWith('.md'))
      .map(file => [file.replace(/\.md$/, '').toLowerCase(), file])
  );
  
  const actualFileName = fileMap.get(slug.toLowerCase());
  if (!actualFileName) return {};
  
  const name = actualFileName.replace(/\.md$/, '');
  const formattedName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${formattedName} Platform Architecture - SAGAR VED BAIRWA`,
    description: `Detailed technical architecture documentation for ${formattedName}.`,
  };
}

export default async function ProjectDocPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const dirPath = path.join(process.cwd(), 'public/project-docs');
  
  if (!fs.existsSync(dirPath)) {
    notFound();
  }
  
  const files = fs.readdirSync(dirPath);
  const fileMap = new Map(
    files
      .filter(file => file.endsWith('.md'))
      .map(file => [file.replace(/\.md$/, '').toLowerCase(), file])
  );
  
  const actualFileName = fileMap.get(slug.toLowerCase());
  if (!actualFileName) {
    notFound();
  }
  
  const filePath = path.join(dirPath, actualFileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div id="hero">
      <MotionShell>
        <Navbar />
        <main className="min-h-screen bg-background text-foreground pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto font-sans">
            <div className="mb-8" id="projects">
              <Button asChild variant="ghost" className="mb-4 text-foreground/60 hover:text-primary hover:bg-primary/5 transition-all duration-200">
                <Link href="/" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            
            <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-li:my-1 prose-img:rounded-xl bg-card/50 p-8 rounded-2xl border border-border/40 backdrop-blur shadow-xl">
              <MarkdownRenderer content={fileContent} />
            </article>
          </div>
        </main>
        <Footer />
      </MotionShell>
    </div>
  );
}
