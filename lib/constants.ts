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
    'Distributed Systems',
    'Microservices Architecture',
    'REST API Design',
    'System Design',
    'High-Availability Systems',
  ],
  'Languages & Frameworks': [
    'Java',
    'Spring Boot',
    'Spring MVC',
  ],
  'Databases': [
    'MySQL',
    'MongoDB',
    'Query Optimization',
  ],
  'Infrastructure & Tools': [
    'API Gateway',
    'Aerospike',
    'Bare Linux Hardware',
    'On-Premise Servers',
    'Docker',
    'Kubernetes',
    'GCP',
    'Git',
    'Agile/Scrum',
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
    title: 'High-Performance API Gateway',
    description: 'Built a scalable API gateway handling 100K+ requests per second with intelligent routing and rate limiting.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Distributed Transaction System',
    description: 'Designed and implemented a distributed transaction system with ACID guarantees across multiple microservices.',
    tags: ['Java', 'PostgreSQL', 'Saga Pattern', 'Spring Cloud'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Built backend infrastructure for real-time analytics processing millions of events with low latency.',
    tags: ['Java', 'MongoDB', 'Aerospike', 'Message Queue'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Database Migration Framework',
    description: 'Created a robust framework for zero-downtime database migrations handling terabytes of data.',
    tags: ['Java', 'MySQL', 'PostgreSQL', 'System Design'],
    github: 'https://github.com',
    demo: 'https://example.com',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
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
