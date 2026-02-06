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
        <meta name="description" content="Senior Backend Engineer - Java, Spring Boot, Distributed Systems. Portfolio showcasing 3+ years of experience building scalable systems and high-performance APIs." />
        <meta name="theme-color" content="#1f2937" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagarvdbairwa.com" />
        <meta property="og:title" content="Sagar Ved Bairwa - Backend Engineer" />
        <meta property="og:description" content="Senior Backend Engineer specializing in scalable systems, microservices, and distributed architecture." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sagar Ved Bairwa - Backend Engineer" />
        <meta name="twitter:description" content="Senior Backend Engineer specializing in scalable systems, microservices, and distributed architecture." />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
