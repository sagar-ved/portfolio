export const PORTFOLIO_DATA = {
  name: 'SAGAR VED BAIRWA',
  title: 'Senior Backend Engineer',
  subtitle: 'Distributed Systems | High-Scale Microservices | Java',
  tagline: 'Building reliable, scalable backend platforms and high-performance APIs for business-critical systems.',

  about: `Senior Backend Engineer with 3+ years of experience building scalable, high-availability backend systems.
I design and operate business-critical platforms with end-to-end ownership across architecture, development, and production reliability.
My focus areas include system design, microservices architecture, API development, performance optimization, and resilient distributed systems.`,

  email: 'sagarvedbairwa.dev@gmail.com',
  github: 'https://github.com/sagar-ved',
  linkedin: 'https://linkedin.com/in/sagarvedverma',
  resume: '/portfolio/resume/SAGAR_BAIRWA_RESUME.pdf',
};

export const SKILLS = {
  'Backend & Architecture': [
    'Microservices Architecture',
    'Distributed Systems',
    'API Gateway Design',
    'REST API Design',
    'System Design',
    'Scalable System Design',
    'High-Availability Systems',
    'Event-Driven Architecture',
    'Service Discovery',
    'Load Balancing',
    'Idempotent Workflows',
    'Transaction Processing',
    'Caching Strategies',
    'Database Optimization',
    'Concurrency & Multithreading',
    'JVM Internals',
  ],

  'Languages & Frameworks': [
    'Java',
    'Spring Boot',
    'Spring MVC',
    'Hibernate',
    'REST APIs',
  ],

  'Databases & Storage': [
    'MySQL',
    'MongoDB',
    'Redis',
    'Aerospike',
    'Query Optimization',
  ],

  'Cloud & DevOps': [
    'Google Cloud Platform (GCP)',
    'AWS',
    'Docker',
    'Kubernetes',
    'Linux',
    'Bare Linux Hardware',
    'On-Premise Servers',
    'CI/CD',
  ],

  'Observability & Monitoring': [
    'Grafana',
    'Graylog',
    'Logging',
    'Production Monitoring',
  ],

  'Development Tools': [
    'Maven',
    'Gradle',
    'Git',
    'IntelliJ IDEA',
    'Postman',
    'Insomnia',
    'Agile/Scrum',
  ],

  'Testing & Quality': [
    'Unit Testing',
    'Integration Testing',
  ],
};

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Senior Backend Engineer',
    company: 'Yatra Online Ltd',
    period: 'Dec 2024 – Present | Gurugram',
    description: 'Leading migration of the Corporate Flights platform to a modern architecture with stronger maintainability and extensibility.',
    highlights: [
      'Designed and implemented critical modules including Air Reseller model, duplicate PNR handling, and flight rescheduling workflows.',
      'Own end-to-end B2B backend infrastructure for flights, hotels, and trains.',
      'Architect and maintain scalable microservices with high availability and secure cross-domain integrations.',
      'Partner with product and business teams to ship production-grade systems aligned with business KPIs.',
    ],
  },
  {
    id: 2,
    role: 'Backend Engineer',
    company: 'Yatra Online Ltd',
    period: 'Jul 2023 – Dec 2024',
    description: 'Built core B2B APIs and gateway services while improving production reliability and backend performance.',
    highlights: [
      'Designed and developed core B2B APIs including multi-profile login and wallet integration services.',
      'Built and optimized API Gateway services across Flights, Hotels, Trains, and Online Gateway platforms.',
      'Reduced service downtime by 15% through deep debugging and query optimization.',
      'Improved delivery velocity by leading Agile standups and sprint coordination.',
    ],
  },
  {
    id: 3,
    role: 'SDE Backend Intern',
    company: 'Yatra Online Ltd',
    period: 'Jan 2023 – Jul 2023',
    description: 'Improved backend infrastructure for SEO-critical services using Java, Spring Boot, SQL, and Aerospike.',
    highlights: [
      'Developed and optimized backend modules for SEO-critical workflows.',
      'Improved system efficiency through caching and SQL query optimization.',
      'Supported production stability via debugging and service tuning.',
      'Contributed to maintainable backend code and engineering quality improvements.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'DataBridge SSO Platform',
    description: 'Enterprise-grade Single Sign-On (SSO) and Identity Access Management platform supporting multi-tenant organizations, role-based access control, OAuth2, and centralized authentication.',
    tags: ['Java', 'Spring Boot', 'OAuth2', 'SSO', 'IAM'],
    github: 'https://github.com',
    demo: '/under-development',
    archSlug: 'databridge-arch',
    //image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    image: 'images/projects/DataBridge.png',
    imageAlt: 'Identity and authentication platform architecture',
  },
  {
    id: 2,
    title: 'Nearo Platform',
    description: 'SEO-driven nearby search platform enabling users to discover local businesses, services, metro stations, and points of interest with location intelligence.',
    tags: ['Spring Boot', 'SEO', 'Location Search', 'Maps'],
    github: 'https://github.com',
    demo: '/under-development',
    archSlug: 'nearo-arch',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80',
    imageAlt: 'Digital maps and location search visualization',
  },
  {
    id: 3,
    title: 'APIDash',
    description: 'Real-time API monitoring dashboard with configurable API Gateway, request analytics, traffic monitoring, rate limiting, and observability features.',
    tags: ['Java', 'Spring Cloud', 'API Gateway', 'Grafana'],
    github: 'https://github.com',
    demo: '/under-development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    imageAlt: 'API analytics and monitoring dashboard',
  },
  {
    id: 4,
    title: 'SmartCall AI',
    description: 'AI-powered Android calling assistant featuring call management, voice automation, intelligent responses, and productivity enhancements.',
    tags: ['Android', 'AI', 'Voice Assistant', 'Mobile'],
    github: 'https://github.com',
    demo: '/under-development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    imageAlt: 'Mobile AI assistant application',
  },
  {
    id: 5,
    title: 'PulseDroid',
    description: 'Android device monitoring platform providing real-time performance metrics, health checks, logs, alerts, and device analytics.',
    tags: ['Android', 'Monitoring', 'Analytics', 'Performance'],
    github: 'https://github.com',
    demo: '/under-development',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
    imageAlt: 'System monitoring and analytics dashboard',
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Deep Learning',
    icon: '🧠',
  },
  {
    id: 2,
    title: 'Linux Administration',
    icon: '🐧',
  },
  {
    id: 3,
    title: 'SQL Programming',
    icon: '🗄️',
  },
  {
    id: 4,
    title: 'Agile Kanban',
    icon: '📋',
  },
];

export const RECRUITER_DATA = [
  {
    id: 1,
    title: '4+ Years Backend Engineering',
    highlight: 'Core Experience',
    description: 'Proven track record of designing, building, and operating scalable backend services and microservices.',
    iconName: 'Briefcase',
  },
  {
    id: 2,
    title: 'Java & Spring Expert',
    highlight: 'Robust Enterprise Stack',
    description: 'Extensive production expertise in Java, Spring Boot, Spring Security, Hibernate, and MVC frameworks.',
    iconName: 'Code2',
  },
  {
    id: 3,
    title: 'High-Scale Production Systems',
    highlight: 'Reliable at Scale',
    description: 'Deep experience running high-traffic enterprise architectures, with up to 15% downtime reduction.',
    iconName: 'Cpu',
  },
  {
    id: 4,
    title: 'API Gateway & IAM Development',
    highlight: 'Secure Access & Routing',
    description: 'Engineered robust Single Sign-On (SSO) systems, multi-profile OAuth2 security, and traffic controllers.',
    iconName: 'ShieldCheck',
  },
  {
    id: 5,
    title: 'Distributed Systems Enthusiast',
    highlight: 'High-Availability Caching',
    description: 'Hands-on expertise in caching platforms (Aerospike, Redis) and multi-node database query optimization.',
    iconName: 'Network',
  },
  {
    id: 6,
    title: 'Future Software Architect',
    highlight: 'Technical Leadership',
    description: 'Passionate about system architecture, complete end-to-end design ownership, and clean coding best practices.',
    iconName: 'Compass',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Exploring ChatGPT4: A Cutting-Edge Language Model',
    description: 'An in-depth exploration of capabilities, prompt architectures, and conversational AI breakthroughs of ChatGPT-4.',
    platform: 'RelateTechno',
    url: 'https://relatetechno.blogspot.com/2023/03/why-chatgpt-4-is-overhyped.html',
    date: 'March 19, 2023',
    readTime: '5 min read',
    tags: ['AI', 'ChatGPT4', 'NLP', 'Technology'],
  },
  {
    id: 2,
    title: 'Deep Dive: Building a Resilient Single Sign-On (SSO) Platform with Spring Boot and OAuth2',
    description: 'An engineering deep-dive into creating the DataBridge SSO platform, addressing multi-tenant isolation, role-based access controls, and secure gateway routing.',
    platform: 'Medium',
    url: 'https://sagarved.medium.com/',
    date: 'May 2026',
    readTime: '6 min read',
    tags: ['Java', 'Spring Boot', 'OAuth2', 'SSO'],
  },
  {
    id: 3,
    title: 'Everything About Chmod and Chown',
    description: 'A comprehensive guide on managing file permissions and ownership on Linux/Unix systems using chmod and chown commands.',
    platform: 'RelateTechno',
    url: 'https://relatetechno.blogspot.com/2023/02/everything-about-chmod-and-chown.html',
    date: 'February 01, 2023',
    readTime: '7 min read',
    tags: ['Linux', 'Permissions', 'SysAdmin', 'Security'],
  },
  {
    id: 4,
    title: 'Designing High-Throughput API Gateways in Java Microservices',
    description: 'A comprehensive guide on implementing custom rate-limiters, route filtering, and secure token validation on bare Linux hardware.',
    platform: 'Medium',
    url: 'https://sagarved.medium.com/',
    date: 'January 2026',
    readTime: '5 min read',
    tags: ['API Gateway', 'Microservices', 'System Design'],
  },
  {
    id: 5,
    title: 'Understanding File Permissions',
    description: 'A deep dive into how file permissions are structured in Linux systems, user groups, read-write-execute flags, and security controls.',
    platform: 'RelateTechno',
    url: 'https://relatetechno.blogspot.com/2023/01/understanding-file-permissions.html',
    date: 'January 19, 2023',
    readTime: '6 min read',
    tags: ['Linux', 'Bash', 'File Permissions', 'Security'],
  },
];
