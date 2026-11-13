export const site = {
  name: 'Tarwinder Singh',
  role: 'Full Stack Software Engineer',
  tagline:
    'Building scalable systems with Spring Boot, React, and event-driven architecture.',
  location: 'Kolkata, India',
  email: 'tarwinder303@gmail.com',
  phone: '+91 9007421542',
  phoneHref: 'tel:+919007421542',
  links: {
    github: 'https://github.com/RAW85',
    linkedin: 'http://linkedin.com/in/tarwinder-singh-50675b199/',
    // Same Drive file — keep this file & use "Manage versions" so the link never changes
    resume: {
      view: 'https://drive.google.com/file/d/1vEbJ9e3nOPn6LzjBYvtsREAC2tXzgALA/view',
      download:
        'https://drive.google.com/uc?export=download&id=1vEbJ9e3nOPn6LzjBYvtsREAC2tXzgALA',
    },
  },
  /**
   * About portrait — Google Drive image (Anyone with the link → Viewer).
   * Paste the file share link (…/file/d/FILE_ID/view). On load failure, monogram shows.
   * Update via Manage versions on the same file so this URL never needs changing.
   */
  profile: {
    drive: 'https://drive.google.com/file/d/1L0k2dz9U4PlaWVSC2jjEKkAIQOJKjZ2T/view',
    alt: 'Tarwinder Singh',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],
  about: {
    title: 'Full-stack engineer focused on scale, security, and delivery',
    paragraphs: [
      'Full Stack Software Engineer with 3+ years of experience delivering scalable, high-throughput systems using Java (Spring Boot) and React. Led platform enhancements, multi-tenant security upgrades, and microservice integrations that improved user engagement and reduced operational turnaround time.',
      'Strong in designing RESTful APIs, event-driven architectures (Kafka), distributed caching (Redis), and frontend performance optimization — shipping resilient systems that scale cleanly under real production traffic.',
      'Currently at Reloy as an SDE, I work across the stack on real estate loyalty platforms, event-driven rewards ledgers, third-party fintech integrations, and automated reconciliation pipelines.',
    ],
    traits: [
      'Spring Boot',
      'React.js',
      'Apache Kafka',
      'Microservices',
      'Docker',
      'Redis',
      'RESTful APIs',
      'System Design',
    ],
    highlights: [
      { label: 'Experience', value: '3+ Years' },
      { label: 'Engagement lift', value: '20%+' },
      { label: 'Ops turnaround', value: '−60%' },
    ],
    focus:
      'Event-driven microservices, platform security & multi-tenancy, high-throughput APIs, and full-stack product delivery.',
    education:
      'BTech in CSE — Techno Main Salt Lake (MAKAUT), Kolkata · Graduated 2023',
  },
  experience: [
    {
      role: 'Software Development Engineer (Full Stack)',
      company: 'Reloy',
      period: 'Oct 2023 — Present',
      bullets: [
        'Architected end-to-end features on the loyalty platform using React and Spring Boot, driving a 20%+ lift in user engagement and referral conversions through advanced analytics and contest workflows.',
        'Integrated external platforms (Razorpay, WebEngage, LeadSquared) via robust REST APIs and asynchronous webhook processors, streamlining payment workflows and lead-tracking pipelines.',
        'Designed and scaled an event-driven Rewards ledger via Apache Kafka and Redis caching, implementing retry queues and automated payment reconciliation to enhance customer retention.',
        'Hardened platform security with Spring Security (JWT/OTP) and multi-tenant RBAC, slashing operational turnaround time by ~60% and strengthening tenant data isolation.',
        'Accelerated client dashboard load performance by 40% via Redux Toolkit state normalization, dynamic code splitting, and debounced queries.',
      ],
      concepts: [
        'Microservices Architecture',
        'Event-Driven Systems',
        'REST APIs & Webhooks',
        'Multi-Tenant RBAC',
        'State Management & Caching',
        'Database Optimization',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Informatica',
      period: 'Jul 2022 — Jul 2023',
      bullets: [
        'Migrated cloud administrator console modules from legacy JSP to modular React components, improving maintainability and cutting debugging overhead by 20%.',
        'Revamped telemetry and administrator dashboards with interactive charting, modal workflows, and responsive metric tables to boost system visibility and customer satisfaction.',
        'Integrated client-side interfaces with cloud RESTful APIs, implementing robust error handling, form validation, and optimistic UI updates to ensure seamless data flow.',
      ],
      concepts: [
        'Frontend Migration',
        'Performance Optimization',
        'Telemetry Dashboards',
        'Component Architecture',
        'Data Visualization',
      ],
    },
  ],
  projects: [
    {
      title: 'FlagForge',
      subtitle: 'Open Source Feature Flag Platform',
      problem:
        'Shipping features behind full deploys is slow and risky. Teams need progressive rollouts, sticky targeting, and a safe way for client apps to evaluate flags without rebuilding for every change.',
      solution:
        'Built an end-to-end feature flag platform featuring sticky percentage and multivariate evaluation, progressive rollout sagas, dual auth (JWT dashboard + SDK API keys), and a real-time React/Redux admin dashboard. Implemented CQRS architecture with domain events, Redis evaluation caching, and Kafka event streaming for flexible, low-latency deployments across Docker environments (from local H2 to full stack).',
      tech: [
        'Java 21',
        'Spring Boot',
        'CQRS',
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'TypeScript',
        'Docker',
        'Redis',
        'Kafka',
      ],
      outcome:
        'Demonstrates full-stack systems engineering: sticky bucket evaluation correctness, dual authentication models, event-driven writes, and production-grade deployment modes.',
      badge: 'Primary · Open source',
      href: 'https://github.com/RAW85/flagforge',
      linkLabel: 'GitHub',
      // Direct attachment asset (playable) — not a github.com/.../blob/... page
      demoVideo:
        'https://github.com/user-attachments/assets/8d1bbff2-73af-448a-9b0d-80f890150223',
    },
    {
      title: 'Suberscribe',
      subtitle: 'Subscription-based Article Platform',
      problem:
        'Content products need a clean path from signup to paid access: one-month plans, tiered libraries, and secure unlocks without overbuilding billing infrastructure.',
      solution:
        'Built a tiered content access platform where users purchase one-month Basic / Standard / Premium plans via Stripe billing cycles and unlock matching articles for 30 days without auto-renew. Higher tiers inherit access to lower-tier content. Features JWT authentication, plan-based access control, and a responsive Tailwind/React UI.',
      tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'Stripe',
      ],
      outcome:
        'Demonstrates product-minded full-stack delivery: payment integration, tiered authorization, security best practices, and a polished subscription UX.',
      badge: 'Full-stack · MERN',
      href: 'https://github.com/RAW85/Suberscribe',
      linkLabel: 'GitHub',
      demoVideo:
        'https://github.com/user-attachments/assets/183280a6-6962-49be-bdb0-20b050c343eb',
    },
  ],
  skills: {
    title: 'Tools I ship with',
    groups: [
      {
        label: 'Backend',
        items: [
          'Java',
          'Spring Boot',
          'Microservices',
          'Spring Security',
          'Hibernate / JPA',
          'RESTful APIs',
          'JWT',
          'JUnit',
          'Mockito',
          'Node.js',
          'Express.js',
        ],
      },
      {
        label: 'Frontend',
        items: [
          'React.js',
          'Redux Toolkit',
          'TypeScript',
          'JavaScript',
          'Context API',
          'Tailwind CSS',
          'Vite',
          'HTML5 & CSS3',
        ],
      },
      {
        label: 'Data & Messaging',
        items: [
          'Apache Kafka',
          'Redis (Caching)',
          'PostgreSQL',
          'MySQL',
          'MongoDB',
        ],
      },
      {
        label: 'Architecture & DevOps',
        items: [
          'Docker',
          'CI/CD',
          'Git',
          'Event-Driven Architecture',
          'CQRS',
          'System Design',
          'DSA',
        ],
      },
    ],
  },
} as const
