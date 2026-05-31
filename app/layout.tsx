'use client';

import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sagar Ved Bairwa - Senior Backend Engineer. Portfolio showcasing 4+ years of expertise in building high-scale Java Spring Boot microservices, API Gateways, IAM/SSO platforms, and high-throughput caching (Aerospike, Redis)." />
        <meta name="keywords" content="Sagar Ved Bairwa, Sagar Ved, Senior Backend Engineer, Java Developer, Spring Boot, Microservices, Distributed Systems, API Gateway, SSO, Identity Access Management, OAuth2, Database Tuning, Aerospike, Redis, Yatra Online SDE, Gurugram Software Engineer, India SDE" />
        <meta name="theme-color" content="#06b6d4" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagarvdbairwa.com" />
        <meta property="og:title" content="Sagar Ved Bairwa | Senior Backend Engineer | Java & Distributed Systems" />
        <meta property="og:description" content="Senior Backend Engineer specializing in scalable microservices, high-traffic Java Spring Boot APIs, SSO/IAM platforms, and database query optimization (MySQL, Aerospike)." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sagar Ved Bairwa | Senior Backend Engineer | Java & Distributed Systems" />
        <meta name="twitter:description" content="Senior Backend Engineer specializing in scalable microservices, high-traffic Java Spring Boot APIs, SSO/IAM platforms, and database query optimization (MySQL, Aerospike)." />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
