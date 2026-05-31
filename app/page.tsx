import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { RecruiterSection } from '@/components/RecruiterSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MotionShell } from '@/components/MotionShell';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Sagar Ved Bairwa | Senior Backend Engineer | Java & Distributed Systems',
  description: 'Senior Backend Engineer specializing in scalable microservices, high-traffic Java Spring Boot APIs, SSO/IAM platforms, and database query optimization (MySQL, Aerospike).',
  keywords: 'Sagar Ved Bairwa, Sagar Ved, Senior Backend Engineer, Java Developer, Spring Boot, Microservices, Distributed Systems, API Gateway, SSO, Identity Access Management, OAuth2, Database Tuning, Aerospike, Redis, Yatra Online SDE, Gurugram Software Engineer, India SDE',
  authors: [{ name: 'SAGAR VED BAIRWA' }],
  metadataBase: new URL('https://sagarvdbairwa.com'),
  openGraph: {
    title: 'Sagar Ved Bairwa | Senior Backend Engineer | Java & Distributed Systems',
    description: 'Senior Backend Engineer specializing in scalable microservices, high-traffic Java Spring Boot APIs, SSO/IAM platforms, and database query optimization (MySQL, Aerospike).',
    type: 'website',
    url: 'https://sagarvdbairwa.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Ved Bairwa | Senior Backend Engineer | Java & Distributed Systems',
    description: 'Senior Backend Engineer specializing in scalable microservices, high-traffic Java Spring Boot APIs, SSO/IAM platforms, and database query optimization (MySQL, Aerospike).',
  },
};

export default function Home() {
  return (
    <MotionShell>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RecruiterSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" theme="dark" />
    </MotionShell>
  );
}
