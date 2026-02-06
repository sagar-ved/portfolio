import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MotionShell } from '@/components/MotionShell';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Sagar Ved Bairwa - Backend Engineer',
  description: 'Senior Backend Engineer specializing in scalable systems, microservices, and distributed architecture.',
  keywords: 'Backend Engineer, Java, Spring Boot, Microservices, Distributed Systems',
  authors: [{ name: 'Sagar Ved Bairwa' }],
  metadataBase: new URL('https://sagarvdbairwa.com'),
  openGraph: {
    title: 'Sagar Ved Bairwa - Backend Engineer',
    description: 'Senior Backend Engineer specializing in scalable systems and high-performance APIs.',
    type: 'website',
    url: 'https://sagarvdbairwa.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Ved Bairwa - Backend Engineer',
    description: 'Senior Backend Engineer specializing in scalable systems and high-performance APIs.',
  },
};

export default function Home() {
  return (
    <MotionShell>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" theme="dark" />
    </MotionShell>
  );
}
