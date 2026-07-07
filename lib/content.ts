import {
  Activity,
  Blocks,
  BrainCircuit,
  DatabaseZap,
  GitBranch,
  HeartPulse,
  LockKeyhole,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const buildAreas = [
  {
    title: "Agentic AI Platforms",
    description:
      "Multi-agent workflows, tool orchestration, MCP integrations, evaluation loops, and operational guardrails for real business processes.",
    icon: Workflow,
  },
  {
    title: "Healthcare AI Systems",
    description:
      "Clinical-adjacent product architecture with safety, privacy, auditability, and human-in-the-loop review designed into the system.",
    icon: HeartPulse,
  },
  {
    title: "Production AI Infrastructure",
    description:
      "RAG pipelines, model routing, observability, secure data layers, and deployment patterns that can survive beyond a prototype.",
    icon: DatabaseZap,
  },
];

export const caseStudies = [
  {
    title: "CareNest Autism AI Platform",
    category: "Healthcare AI",
    description:
      "AI-assisted autism support platform concept spanning intake, personalized guidance, care workflows, and responsible escalation.",
  },
  {
    title: "Mauri Women's Hormonal Health Platform",
    category: "Healthcare AI",
    description:
      "Personalized hormonal health intelligence platform designed around longitudinal signals, privacy, and clinically cautious UX.",
  },
  {
    title: "MCP OpenAPI Doctor",
    category: "Agentic DevTools",
    description:
      "MCP-based system for inspecting, repairing, and operationalizing OpenAPI specs through structured agent workflows.",
  },
  {
    title: "CGC Sentinel Edge AI",
    category: "Edge Intelligence",
    description:
      "Edge AI monitoring architecture for constrained environments where latency, resilience, and local inference matter.",
  },
  {
    title: "CouncilAI Child Protection RAG",
    category: "Responsible AI",
    description:
      "Retrieval-augmented intelligence concept for sensitive child protection work with governance, citations, and review controls.",
  },
  {
    title: "AdTech Real-Time Intelligence Platform",
    category: "Real-Time AI",
    description:
      "Streaming intelligence architecture for campaign signals, optimization feedback, and fast operational decision support.",
  },
];

export const strengths = [
  {
    title: "Agent Orchestration",
    description:
      "Planning, routing, tool use, memory patterns, MCP servers, workflow boundaries, and fallback behavior.",
    icon: GitBranch,
  },
  {
    title: "RAG and Knowledge Systems",
    description:
      "Chunking strategy, retrieval quality, citation discipline, freshness, evaluations, and domain-aware grounding.",
    icon: BrainCircuit,
  },
  {
    title: "Platform Architecture",
    description:
      "Service boundaries, event flows, API contracts, data lifecycle, cloud deployment, and maintainable delivery paths.",
    icon: Blocks,
  },
  {
    title: "AI Safety and Governance",
    description:
      "Audit trails, privacy controls, human review, risk classification, observability, and production readiness checks.",
    icon: ShieldCheck,
  },
  {
    title: "Data and Integration Layers",
    description:
      "OpenAPI, vector databases, operational databases, queues, third-party systems, and secure enterprise integration.",
    icon: Network,
  },
  {
    title: "Healthcare Sensibility",
    description:
      "Architecting for sensitive users, regulated workflows, careful claims, explainability, and real-world care contexts.",
    icon: LockKeyhole,
  },
];

export const credibility = [
  { value: "15+", label: "years software engineering" },
  { value: "5+", label: "years AI, ML, and agentic AI" },
  { value: "6", label: "case-study platforms in progress" },
  { value: "0", label: "interest in toy demos" },
];

export const recruiterSignals = [
  "AI Architect for senior IC, platform, and hands-on leadership roles",
  "Strong fit for healthcare AI, agentic AI, applied RAG, and AI product infrastructure",
  "Comfortable moving from ambiguous product goals to deployable technical architecture",
];

export const ActivityIcon = Activity;
