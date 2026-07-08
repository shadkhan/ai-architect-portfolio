import {
  Activity,
  Blocks,
  BrainCircuit,
  ClipboardCheck,
  DatabaseZap,
  GitBranch,
  HeartPulse,
  Landmark,
  LineChart,
  Network,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const credibility = [
  { value: "15+", label: "years building software systems" },
  { value: "5+", label: "years focused on AI, ML, LLMs, and agents" },
  { value: "3", label: "core domains: AI platforms, healthcare, GovTech" },
  { value: "1", label: "decision rule: evidence before claims" },
];

export const roleSignals = [
  "AI Architect for agentic AI, applied LLM systems, RAG, and production AI infrastructure.",
  "Full-stack architect with experience across product discovery, system design, delivery, and operations.",
  "Healthcare AI and GovTech builder comfortable with sensitive workflows, auditability, and human oversight.",
];

export const buildAreas = [
  {
    title: "Agentic AI Systems",
    description:
      "Multi-agent workflows, tool orchestration, MCP-style integrations, evaluation loops, fallback behavior, and operational guardrails.",
    icon: Workflow,
  },
  {
    title: "Healthcare AI Products",
    description:
      "Clinical-adjacent platforms designed with privacy, safety, review workflows, careful claims, and trust-building user experience.",
    icon: HeartPulse,
  },
  {
    title: "GovTech and Public Systems",
    description:
      "Decision-support products for complex public-sector workflows where clarity, traceability, security, and maintainability matter.",
    icon: Landmark,
  },
  {
    title: "Production AI Infrastructure",
    description:
      "RAG pipelines, model routing, vector search, telemetry, secure data layers, deployment paths, and cost-aware operations.",
    icon: DatabaseZap,
  },
];

export const principles = [
  {
    title: "Product before technology",
    description:
      "Start with the user problem, business constraint, and success metric before choosing architecture or models.",
    icon: Scale,
  },
  {
    title: "Simplicity is an engineering feature",
    description:
      "Introduce complexity only when it earns its operational, onboarding, debugging, and maintenance cost.",
    icon: Blocks,
  },
  {
    title: "AI must earn trust",
    description:
      "Treat evaluation, guardrails, monitoring, privacy, and human accountability as core architecture, not release extras.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability comes from observability",
    description:
      "Use telemetry, structured evidence, and feedback loops to discover system reality instead of relying on assumptions.",
    icon: LineChart,
  },
];

export const caseStudies = [
  {
    title: "CareNest Autism AI Platform",
    category: "Healthcare AI",
    description:
      "Architecture concept for AI-assisted autism support, combining intake, personalized guidance, care workflows, escalation paths, and human review.",
    evidence:
      "Focus: safety boundaries, privacy, longitudinal user context, and responsible AI behavior.",
  },
  {
    title: "Mauri Women's Hormonal Health Platform",
    category: "Healthcare Product",
    description:
      "Personalized health intelligence platform shaped around sensitive data, longitudinal signals, clinically cautious UX, and measurable user trust.",
    evidence:
      "Focus: product framing, data lifecycle, risk language, and maintainable AI-assisted recommendations.",
  },
  {
    title: "CouncilAI Child Protection RAG",
    category: "GovTech / Responsible AI",
    description:
      "Retrieval-augmented decision-support concept for high-stakes public-sector workflows where citations, review, and governance are mandatory.",
    evidence:
      "Focus: source grounding, audit trails, confidence boundaries, and human-in-the-loop workflows.",
  },
  {
    title: "MCP OpenAPI Doctor",
    category: "Agentic DevTools",
    description:
      "Agent workflow for inspecting, repairing, and operationalizing OpenAPI specifications through structured tool use and validation.",
    evidence:
      "Focus: tool boundaries, deterministic checks, spec quality, and developer experience.",
  },
  {
    title: "CGC Sentinel Edge AI",
    category: "Edge Intelligence",
    description:
      "Edge AI monitoring architecture for constrained environments where local inference, resilience, latency, and offline behavior shape the design.",
    evidence:
      "Focus: deployment topology, event flow, inference limits, and operational recovery.",
  },
  {
    title: "AdTech Real-Time Intelligence Platform",
    category: "Real-Time Systems",
    description:
      "Streaming intelligence architecture for campaign signals, optimization feedback, and fast operational decision support.",
    evidence:
      "Focus: event-driven design, feedback loops, observability, and cost-aware scale.",
  },
];

export const strengths = [
  {
    title: "AI Architecture",
    description:
      "Agent design, RAG quality, model routing, evaluation, prompt governance, and responsible production patterns.",
    icon: BrainCircuit,
  },
  {
    title: "System Design",
    description:
      "Service boundaries, API contracts, data movement, event flows, reliability patterns, and long-term maintainability.",
    icon: GitBranch,
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Product interfaces, backend systems, data layers, cloud deployment, integrations, and operational readiness.",
    icon: Network,
  },
  {
    title: "Engineering Leadership",
    description:
      "Decision frameworks, documentation culture, mentoring, review quality, and alignment between product and engineering.",
    icon: ClipboardCheck,
  },
];

export const decisionLayers = [
  "Business objective",
  "User value",
  "Product validation",
  "Architecture trade-offs",
  "Engineering implementation",
  "Operational visibility",
  "Future evolution",
];

export const ActivityIcon = Activity;
