import {
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  CertificateItem,
  ContactInfo,
} from "./types";

export const PORTFOLIO_DATA = {
  hero: {
    roleTag: "SENIOR SOFTWARE ENGINEER",
    headline: "Building digital\nsystems beyond\nthe ordinary.",
    subheadline:
      "I design and build reliable software systems, scalable APIs, and digital products with a focus on performance and simplicity.",
    ctaPrimary: "Explore Projects",
    ctaSecondary: "Contact Me",
  },
  about: {
    title: "About Me",
    subtitle: "Architecture, Craftsmanship & Systems Thinking",
    bio: [
      "I am a Senior Software Engineer with over 7 years of experience engineering high-throughput backend systems, distributed architectures, and modern web applications. My journey is rooted in a deep fascination with how complex systems behave under load and how elegant architecture solves tangible human problems.",
      "My technical philosophy revolves around pragmatic minimalism: write clean, maintainable code, eliminate unnecessary layers of abstraction, and treat performance and reliability as first-class citizens. I believe the best engineering decisions are those that simplify maintenance while unlocking business agility.",
      "From designing event-driven microservices processing millions of daily transactions to crafting immersive, accessible digital interfaces, I bridge the gap between low-level system efficiency and high-level product design.",
    ],
    strengths: [
      {
        title: "Distributed Systems & Scalability",
        description:
          "Designing fault-tolerant, event-driven architectures with asynchronous queues, microservices, and decoupled components that scale reliably.",
      },
      {
        title: "Performance & Low Latency",
        description:
          "Profiling hot code paths, optimizing database queries, tuning memory allocations, and leveraging caching strategies to achieve sub-millisecond latencies.",
      },
      {
        title: "Domain-Driven Design",
        description:
          "Translating complex business workflows into robust domain boundaries, strict type definitions, and testable codebases.",
      },
      {
        title: "End-to-End Delivery & DevOps",
        description:
          "Architecting CI/CD pipelines, container orchestration with Kubernetes, and infrastructure-as-code with comprehensive telemetry.",
      },
    ],
  },
  projects: [
    {
      id: "hyperion-engine",
      title: "Hyperion Event Engine",
      description:
        "High-performance distributed event streaming platform built for real-time telemetry processing and anomaly detection.",
      detailedDescription:
        "Engineered with Go and Apache Kafka, capable of handling 85,000+ events per second with end-to-end latency under 12ms. Features an automated backpressure mitigation algorithm and dynamic partition balancing.",
      technology: ["Go", "Kafka", "Redis", "gRPC", "Docker", "Prometheus"],
      role: "Lead Systems Architect",
      year: "2024",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.tama.dev",
      featured: true,
    },
    {
      id: "strata-cloud",
      title: "Strata Multi-Tenant Cloud Platform",
      description:
        "Enterprise-grade multi-tenant SaaS control plane with automated workspace provisioning and role-based access control.",
      detailedDescription:
        "Architected using Next.js, Node.js, PostgreSQL with row-level security (RLS), and Kubernetes custom resource definitions (CRDs). Reduced tenant onboarding latency by 78%.",
      technology: ["TypeScript", "Next.js", "PostgreSQL", "Kubernetes", "Tailwind CSS"],
      role: "Principal Full-Stack Engineer",
      year: "2024",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.tama.dev",
      featured: true,
    },
    {
      id: "aegis-api-gateway",
      title: "Aegis Zero-Trust API Gateway",
      description:
        "Dynamic edge proxy providing token introspection, rate limiting, and mTLS verification with distributed Redis state.",
      detailedDescription:
        "Engineered in Rust with Tokio async runtime. Benchmarked against industry standards with 40% lower memory footprint and zero garbage collection pauses.",
      technology: ["Rust", "Tokio", "Redis", "OpenTelemetry", "Docker"],
      role: "Core Engineer",
      year: "2023",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.tama.dev",
      featured: true,
    },
    {
      id: "nexus-metrics",
      title: "Nexus Observability Suite",
      description:
        "Unified metrics aggregation and distributed tracing dashboard providing real-time visibility into microservice health.",
      detailedDescription:
        "Built with React, ClickHouse, and OpenTelemetry collector pipelines. Visualizes high-cardinality time-series data with smooth canvas-rendered charts.",
      technology: ["React", "TypeScript", "ClickHouse", "Go", "Tailwind CSS"],
      role: "Senior Full-Stack Engineer",
      year: "2023",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.tama.dev",
      featured: false,
    },
  ] as ProjectItem[],
  experience: [
    {
      id: "exp-1",
      company: "Aether Systems Inc.",
      position: "Senior Staff Software Engineer",
      period: "2022 — Present",
      location: "San Francisco, CA (Remote)",
      description: [
        "Led core architecture of the primary distributed ledger and messaging system, scaling the platform to support over 12M daily active transactions.",
        "Pioneered a company-wide migration to containerized microservices orchestrated on AWS EKS, reducing deployment failure rates by 65%.",
        "Mentored team of 14 engineers across backend, infrastructure, and full-stack disciplines, establishing high standards for RFCs and testing practices.",
      ],
      technologies: ["Go", "TypeScript", "AWS EKS", "Kafka", "PostgreSQL", "Terraform"],
    },
    {
      id: "exp-2",
      company: "Vanguard Tech Labs",
      position: "Senior Backend Engineer",
      period: "2020 — 2022",
      location: "Singapore",
      description: [
        "Designed and implemented high-concurrency payment gateways and ledger integration services handling multi-currency settlements.",
        "Refactored relational query patterns and introduced Redis cluster caching, dropping p99 latency from 320ms to 42ms.",
        "Automated continuous integration and zero-downtime rolling deployment workflows using GitLab CI and ArgoCD.",
      ],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "GCP"],
    },
    {
      id: "exp-3",
      company: "CyberneXt Digital",
      position: "Full-Stack Software Engineer",
      period: "2018 — 2020",
      location: "Jakarta, Indonesia",
      description: [
        "Built customer-facing portals and internal analytical dashboards for enterprise financial technology clients.",
        "Authored reusable UI component libraries and modular API client SDKs adopted by 5 internal cross-functional squads.",
        "Collaborated closely with product designers to implement pixel-perfect, accessible, and responsive client experiences.",
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Python", "Docker"],
    },
  ] as ExperienceItem[],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript" },
        { name: "Go" },
        { name: "Python" },
        { name: "Rust" },
        { name: "SQL" },
        { name: "JavaScript" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js" },
        { name: "Express / Fastify" },
        { name: "gRPC & Protocol Buffers" },
        { name: "REST APIs" },
        { name: "GraphQL" },
        { name: "Microservices" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React" },
        { name: "Next.js (App Router)" },
        { name: "Tailwind CSS" },
        { name: "Three.js / WebGL" },
        { name: "State Management" },
        { name: "Web Accessibility" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "ClickHouse" },
        { name: "SQLite / Prisma" },
        { name: "MongoDB" },
        { name: "Elasticsearch" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker" },
        { name: "Kubernetes (K8s)" },
        { name: "Terraform" },
        { name: "CI / CD Pipelines" },
        { name: "Linux Administration" },
        { name: "Helm" },
      ],
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS (EKS, RDS, S3, SQS)" },
        { name: "Google Cloud Platform" },
        { name: "Cloudflare Workers & Edge" },
        { name: "Serverless Architecture" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git & GitHub Actions" },
        { name: "Prometheus & Grafana" },
        { name: "OpenTelemetry" },
        { name: "Kafka" },
        { name: "Postman" },
        { name: "Vim / Neovim" },
      ],
    },
  ] as SkillCategory[],
  certificates: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-948102",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      id: "cert-2",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "2023",
      credentialId: "CKA-773194-LINUX",
      credentialUrl: "https://www.cncf.io/certification/cka/",
    },
    {
      id: "cert-3",
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
      credentialId: "HC-TA-510294",
      credentialUrl: "https://www.hashicorp.com/certification",
    },
    {
      id: "cert-4",
      name: "Meta Professional Front-End Software Engineering",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-FE-331089",
      credentialUrl: "https://coursera.org/verify/meta",
    },
  ] as CertificateItem[],
  contact: {
    email: "contact@tama.dev",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    location: "Jakarta, ID / Remote Worldwide",
    availability: "Available for select senior engineering roles and technical advisory.",
  } as ContactInfo,
};

