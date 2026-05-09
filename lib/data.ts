// ─── Portfolio Data ────────────────────────────────────────────────────────
// Single source of truth for all content on the portfolio.

export const owner = {
  name: "Gayathri U",
  shortName: "Gayathri",
  title: "Backend & Data Engineer",
  tagline: "Backend Engineering · Data Pipelines · ML & NLP · Distributed Systems",
  bio: [
    "I build systems from the infrastructure up and work with data from the pipeline down — distributed backends, event-driven architectures, and the ML/NLP pipelines that run on top of them.",
    "Currently pursuing B.Tech in Computer Science at Amrita Vishwa Vidyapeetham, Coimbatore. I'm drawn to the full stack of data: collection, processing, modeling, and serving — and the engineering that makes it reliable at scale.",
    "My projects span Kafka-driven microservices, federated networks, NLP pipelines, and ML experimentation platforms. I like working close to both the data and the systems that move it.",
  ],
  focus: [
    "Data Pipelines & Lifecycle",
    "NLP & Language Models",
    "Machine Learning & DL",
    "Backend Engineering",
    "Distributed Systems",
    "ML Infrastructure",
  ],
  location: "Coimbatore, India",
  university: "Amrita Vishwa Vidyapeetham",
  github: "https://github.com/gayathriuthamaraj",
  linkedin: "https://www.linkedin.com/in/gayathri-uthamaraj-011a0a306/",
  email: "gayathriutham2905@gmail.com",
  resume: "#",
};

// ─── Projects ────────────────────────────────────────────────────────────────
export type Project = {
  id: string;
  name: string;
  tagline: string;
  context: string;
  description: string;
  systemContext: string;
  architecture: string[];
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  demo?: string;
  status: "live" | "active" | "research";
  category: "distributed" | "federated" | "ml" | "security" | "infra";
  flow: { label: string; sub?: string }[];
  infraNotes: string[];
  deploymentMeta: { key: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "indel",
    name: "InDel",
    tagline: "Parametric Income Insurance Platform",
    context: "Event-driven microservices · Kafka streaming · Docker orchestration",
    description:
      "Parametric income insurance for gig-economy workers. Built on a 7-container Docker Compose ecosystem with Kafka-driven disruption detection, real-time telemetry, and automated payout pipelines validated across 1,000 simulated delivery workers.",
    systemContext:
      "The core engineering challenge was building a reliable disruption-detection pipeline that could trigger automated claim evaluation without human intervention. Kafka provides the event bus; zone-level telemetry feeds the ML classifier; the payout pipeline executes conditionally on signal thresholds — all within a single Compose-orchestrated environment.",
    architecture: [
      "Kafka + Zookeeper for disruption event streaming",
      "7-service Docker Compose orchestration",
      "PostgreSQL with zone-level telemetry partitioning",
      "Automated claim evaluation & payout pipeline",
      "ML-based disruption signal prediction",
      "Razorpay UPI integration for instant payouts",
    ],
    flow: [
      { label: "Zone Telemetry", sub: "real-time signals" },
      { label: "Kafka Bus", sub: "event streaming" },
      { label: "ML Classifier", sub: "disruption signal" },
      { label: "Claim Engine", sub: "automated eval" },
      { label: "Payout Pipeline", sub: "UPI / Razorpay" },
    ],
    highlights: [
      "Kafka-driven disruption detection",
      "7-container Docker ecosystem",
      "Real-time telemetry processing",
      "Payout orchestration pipelines",
    ],
    infraNotes: [
      "Zookeeper manages Kafka broker coordination and leader election",
      "PostgreSQL partitioned by zone ID for efficient telemetry reads",
      "Dedicated worker service handles async claim processing",
      "Nginx reverse proxy routes traffic across Go microservices",
      "Docker health checks ensure service readiness before startup",
    ],
    deploymentMeta: [
      { key: "Runtime", value: "Docker Compose (7 services)" },
      { key: "Event Broker", value: "Apache Kafka" },
      { key: "Database", value: "PostgreSQL" },
      { key: "Backend", value: "Go microservices" },
      { key: "Frontend", value: "React + Vercel" },
      { key: "Validated Against", value: "1,000 simulated workers" },
      { key: "Status", value: "Live — Render + Vercel" },
    ],
    stack: ["Go", "Kafka", "Zookeeper", "PostgreSQL", "Docker", "React", "Python", "FastAPI"],
    github: "https://github.com/gayathriuthamaraj",
    live: "https://indel-portal.vercel.app/",
    status: "live",
    category: "distributed",
  },
  {
    id: "gotham",
    name: "Gotham",
    tagline: "Federated Social Networking Platform",
    context: "ActivityPub-inspired federation · Cross-server identity · Multi-node deployment",
    description:
      "ActivityPub-inspired federated social network with cross-server identity resolution, message propagation, and feed federation across independently deployed nodes. Multi-service Go backend with federation, auth, and moderation layers.",
    systemContext:
      "Gotham's core design challenge is distributed identity — a user on Node A can follow, message, and interact with users on Node B without a central authority. Each node runs an independent backend with its own PostgreSQL instance; federation sync is handled by an async propagation engine that resolves cross-instance references and replicates relevant activity streams.",
    architecture: [
      "ActivityPub-inspired federation protocol",
      "Cross-server identity & authentication",
      "Distributed feed propagation engine",
      "Multi-service Go backend microarchitecture",
      "PostgreSQL per-node with federation sync",
      "Next.js frontend with federated search",
    ],
    flow: [
      { label: "Node A", sub: "user origin" },
      { label: "Federation Layer", sub: "protocol bridge" },
      { label: "Identity Resolver", sub: "cross-server auth" },
      { label: "Feed Propagator", sub: "async sync" },
      { label: "Node B", sub: "remote instance" },
    ],
    highlights: [
      "Cross-server federation",
      "Distributed identity systems",
      "Federation protocols",
      "Multi-service backend architecture",
    ],
    infraNotes: [
      "Each node maintains its own auth state — no shared session store",
      "Federation queue handles eventual-consistency across nodes",
      "Moderation layer operates independently per node with local policy",
      "Federated search resolves remote profiles via node discovery",
      "Docker-composed per-instance for independent deployment",
    ],
    deploymentMeta: [
      { key: "Architecture", value: "Multi-node federated" },
      { key: "Protocol", value: "ActivityPub-inspired" },
      { key: "Backend", value: "Go (multi-service)" },
      { key: "Database", value: "PostgreSQL (per node)" },
      { key: "Frontend", value: "Next.js + TypeScript" },
      { key: "Auth", value: "Distributed, node-local" },
      { key: "Status", value: "Active — Vercel + Render" },
    ],
    stack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Docker", "ActivityPub"],
    github: "https://github.com/gayathriuthamaraj",
    live: "https://federated-frontend-b.vercel.app/login",
    status: "active",
    category: "federated",
  },
  {
    id: "rkive",
    name: "RKIVE",
    tagline: "AI-Powered Candidate Shortlisting System",
    context: "NLP pipelines · LLM evaluation · Multi-model benchmarking",
    description:
      "Hybrid resume screening pipeline combining NER, rule-based scoring, and LLM-based resume–JD semantic matching. Benchmarked LLM, SLM, and heuristic approaches for accuracy vs. latency tradeoffs across enterprise-scale datasets.",
    systemContext:
      "RKIVE addresses the fundamental tradeoff between screening accuracy and pipeline latency at scale. The system runs three parallel evaluation strategies — NER-rule scoring, fine-tuned SLM matching, and full LLM semantic analysis — and benchmarks them against ground-truth shortlists. The harness produces comparative accuracy, precision, and P95 latency reports across model families.",
    architecture: [
      "NER pipeline for structured entity extraction",
      "LLM-based semantic JD–resume matching",
      "Multi-model benchmarking framework",
      "Modular preprocessing pipeline stages",
      "Accuracy vs. latency evaluation harness",
      "Configurable scoring & ranking system",
    ],
    flow: [
      { label: "Resume Ingestion", sub: "PDF / text parse" },
      { label: "NER Extraction", sub: "spaCy pipeline" },
      { label: "Scoring Engine", sub: "rule + ML" },
      { label: "LLM Matcher", sub: "semantic JD match" },
      { label: "Benchmark Report", sub: "accuracy / latency" },
    ],
    highlights: [
      "NER + LLM evaluation pipeline",
      "Resume–JD semantic matching",
      "Modular preprocessing pipelines",
      "Benchmarking workflows",
    ],
    infraNotes: [
      "Preprocessing is pipeline-composable — stages can be toggled independently",
      "NER models trained on domain-specific resume corpora",
      "LLM calls batched and cached for benchmark reproducibility",
      "Evaluation harness records P50/P95 latency per model family",
      "Configurable scoring weights for domain-specific tuning",
    ],
    deploymentMeta: [
      { key: "Pipeline", value: "NER → Score → LLM match" },
      { key: "NLP", value: "spaCy + custom NER" },
      { key: "LLM Backend", value: "API-based (configurable)" },
      { key: "Data Layer", value: "Pandas / NumPy" },
      { key: "API", value: "FastAPI inference endpoint" },
      { key: "Status", value: "Research / Active" },
    ],
    stack: ["Python", "Pandas", "scikit-learn", "spaCy", "LLMs", "FastAPI"],
    github: "https://github.com/SudharsanSaravanan/RKIVE",
    status: "research",
    category: "ml",
  },
  {
    id: "kuzhu",
    name: "Kuzhu",
    tagline: "Secure Community Communication Platform",
    context: "RBAC · Hybrid encryption · Audit-first architecture",
    description:
      "Community communication platform built with security-first architecture. Features role-based access control, hybrid encryption schemes, immutable audit logging, and secure channel management for private communities.",
    systemContext:
      "Kuzhu is built around the principle that trust is earned by verifiable action. Every permission decision is logged in an immutable audit chain. Encryption is layered — channels use symmetric keys wrapped in per-user asymmetric envelopes, so key rotation does not require re-encrypting message history. RBAC scopes are hierarchical and composable.",
    architecture: [
      "RBAC with fine-grained, composable permission scopes",
      "Hybrid encryption (asymmetric key wrap + symmetric payload)",
      "Immutable audit log chain per channel",
      "Secure channel lifecycle management",
      "End-to-end encrypted messaging",
      "Administrative moderation pipeline",
    ],
    flow: [
      { label: "Auth Gate", sub: "RBAC check" },
      { label: "Key Exchange", sub: "asymmetric wrap" },
      { label: "Channel Layer", sub: "symmetric encrypt" },
      { label: "Audit Logger", sub: "immutable chain" },
      { label: "Moderation API", sub: "admin pipeline" },
    ],
    highlights: [
      "RBAC systems",
      "Hybrid encryption",
      "Audit logging",
      "Secure communication workflows",
    ],
    infraNotes: [
      "Per-user asymmetric key pairs stored securely server-side",
      "Symmetric channel keys rotated without re-encrypting history",
      "Audit log is append-only with hash chaining for tamper detection",
      "Permission scopes are composable — admin ⊃ moderator ⊃ member",
      "Channel membership changes trigger automatic audit events",
    ],
    deploymentMeta: [
      { key: "Auth Model", value: "RBAC (hierarchical)" },
      { key: "Encryption", value: "Hybrid (RSA + AES)" },
      { key: "Audit Layer", value: "Append-only hash chain" },
      { key: "Backend", value: "Go + PostgreSQL" },
      { key: "Frontend", value: "React + TypeScript" },
      { key: "Status", value: "Active" },
    ],
    stack: ["Go", "PostgreSQL", "Docker", "React", "TypeScript"],
    github: "https://github.com/gayathriuthamaraj",
    status: "active",
    category: "security",
  },
  {
    id: "fern",
    name: "Fern",
    tagline: "Machine Learning Experimentation Platform",
    context: "No-code ML pipelines · Real-time training · Model versioning",
    description:
      "No-code ML experimentation platform with real-time training visualizations, configurable pipeline stages, and model persistence. Enables rapid iteration on ML workflows without code by exposing configurable training graphs.",
    systemContext:
      "Fern abstracts the ML training loop into composable, configuration-driven pipeline stages. Users define preprocessing transforms, model architectures, and evaluation strategies via a schema — the backend executes the graph, streams metrics in real time, and versions every artifact. The goal is zero-friction experimentation without sacrificing engineering visibility.",
    architecture: [
      "No-code ML pipeline via JSON/YAML configuration",
      "Real-time training metrics streaming (SSE / WebSocket)",
      "Configurable preprocessing stages (composable transforms)",
      "Model versioning & persistence layer",
      "Experiment comparison dashboard",
      "Pluggable dataset ingestion system",
    ],
    flow: [
      { label: "Pipeline Config", sub: "YAML / JSON schema" },
      { label: "Data Ingestion", sub: "pluggable source" },
      { label: "Training Loop", sub: "configurable stages" },
      { label: "Metrics Stream", sub: "real-time SSE" },
      { label: "Model Registry", sub: "versioned artifacts" },
    ],
    highlights: [
      "No-code ML workflows",
      "Real-time visualizations",
      "Configurable training pipelines",
      "Model persistence systems",
    ],
    infraNotes: [
      "Pipeline stages are lazy-evaluated and composable",
      "Training metrics pushed via Server-Sent Events for low-latency UI",
      "Model artifacts stored with semantic versioning and experiment tags",
      "Dataset ingestion is pluggable — CSV, Parquet, API sources",
      "Experiment comparison uses aligned metric time-series",
    ],
    deploymentMeta: [
      { key: "Pipeline Engine", value: "Python (custom executor)" },
      { key: "API", value: "FastAPI + SSE streaming" },
      { key: "Model Storage", value: "Versioned artifact registry" },
      { key: "Frontend", value: "React + TypeScript" },
      { key: "ML Backends", value: "scikit-learn, TensorFlow" },
      { key: "Status", value: "Active / WIP" },
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "scikit-learn", "TensorFlow"],
    github: "https://github.com/gayathriuthamaraj",
    status: "active",
    category: "ml",
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export type TechItem = {
  name: string;
  proficiency: "expert" | "advanced" | "proficient" | "intermediate" | "beginner";
};

export type TechGroup = {
  label: string;
  icon: string;
  items: TechItem[];
};

export const techStack: TechGroup[] = [
  {
    label: "Backend & Infrastructure",
    icon: "server",
    items: [
      { name: "Go", proficiency: "intermediate" },
      { name: "Python", proficiency: "intermediate" },
      { name: "FastAPI", proficiency: "intermediate" },
      { name: "Docker", proficiency: "beginner" },
      { name: "Apache Kafka", proficiency: "beginner" },
      { name: "PostgreSQL", proficiency: "intermediate" },
      { name: "Docker Compose", proficiency: "intermediate" },
      { name: "Redis", proficiency: "beginner" },
      { name: "Nginx", proficiency: "beginner" },
      { name: "Linux", proficiency: "intermediate" },
    ],
  },
  {
    label: "Frontend",
    icon: "layout",
    items: [
      { name: "TypeScript", proficiency: "intermediate" },
      { name: "React", proficiency: "intermediate" },
      { name: "Next.js", proficiency: "intermediate" },
      { name: "TailwindCSS", proficiency: "intermediate" },
      { name: "Framer Motion", proficiency: "beginner" },
    ],
  },
  {
    label: "ML / Data",
    icon: "brain",
    items: [
      { name: "scikit-learn", proficiency: "intermediate" },
      { name: "TensorFlow", proficiency: "intermediate" },
      { name: "spaCy / NLP", proficiency: "intermediate" },
      { name: "Pandas", proficiency: "intermediate" },
      { name: "NumPy", proficiency: "intermediate" },
      { name: "LLM Integration", proficiency: "intermediate" },
    ],
  },
  {
    label: "Languages & Systems",
    icon: "code",
    items: [
      { name: "Go", proficiency: "intermediate" },
      { name: "Python", proficiency: "intermediate" },
      { name: "TypeScript", proficiency: "intermediate" },
      { name: "C++", proficiency: "intermediate" },
      { name: "Java", proficiency: "beginner" },
      { name: "Haskell", proficiency: "beginner" },
    ],
  },
];

// ─── Research ─────────────────────────────────────────────────────────────────
export const research = [
  {
    id: "blockchain-pm",
    title:
      "Project Management with Tamper-Proof Evaluation System using Blockchain and Secured Storage",
    venue: "Springer CVR 2025",
    year: 2025,
    abstract:
      "A blockchain-anchored project management system providing tamper-proof evaluation records and secure distributed storage. Enables verifiable audit trails for collaborative engineering projects with cryptographic integrity guarantees.",
    tags: ["Blockchain", "Distributed Storage", "Tamper-Proof Audit", "Cryptography"],
    published: true,
  },
];

// ─── Current Exploration ──────────────────────────────────────────────────────
export const explorations = [
  {
    title: "Natural Language Processing",
    description: "Text understanding, tokenization, embeddings, named entity recognition",
    icon: "brain",
  },
  {
    title: "Data Pipelines",
    description: "Ingestion, transformation, scheduling, and orchestration of data flows",
    icon: "activity",
  },
  {
    title: "The Data Lifecycle",
    description: "Collection, storage, processing, serving, and observability of data at scale",
    icon: "layers",
  },
  {
    title: "Machine Learning",
    description: "Supervised & unsupervised learning, model evaluation, feature engineering",
    icon: "cpu",
  },
  {
    title: "Deep Learning",
    description: "Neural architectures, backpropagation, CNNs, RNNs, transformers",
    icon: "zap",
  },
  {
    title: "ML Infrastructure",
    description: "Experiment tracking, model serving, pipeline orchestration, reproducibility",
    icon: "git-branch",
  },
];

// ─── Sidebar Navigation ───────────────────────────────────────────────────────
export const sidebarSections = [
  {
    id: "nav",
    label: "Navigation",
    icon: "compass",
    defaultOpen: true,
    items: [
      { label: "Hero", href: "#hero", icon: "home" },
      { label: "About", href: "#about", icon: "user" },
      { label: "Projects", href: "#projects", icon: "folder" },
      { label: "Tech Stack", href: "#stack", icon: "layers" },
      { label: "Research", href: "#research", icon: "book-open" },
      { label: "GitHub", href: "#github", icon: "github" },
      { label: "Infrastructure", href: "#infrastructure", icon: "server" },
      { label: "Exploration", href: "#exploration", icon: "compass" },
      { label: "Contact", href: "#contact", icon: "mail" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: "folder",
    defaultOpen: false,
    items: [
      { label: "InDel", href: "#indel", icon: "activity" },
      { label: "Gotham", href: "#gotham", icon: "share-2" },
      { label: "RKIVE", href: "#rkive", icon: "cpu" },
      { label: "Kuzhu", href: "#kuzhu", icon: "shield" },
      { label: "Fern", href: "#fern", icon: "git-branch" },
    ],
  },

  {
    id: "ml",
    label: "ML Models",
    icon: "cpu",
    defaultOpen: false,
    items: [
      { label: "Disruption Predictor", href: "#", icon: "activity", badge: "live" },
      { label: "Resume Matcher (LLM)", href: "#", icon: "cpu", badge: "soon" },
      { label: "Fern AutoML", href: "#", icon: "git-branch", badge: "wip" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: "server",
    defaultOpen: false,
    items: [
      { label: "InDel Topology", href: "#", icon: "layers" },
      { label: "Gotham Node Map", href: "#", icon: "share-2" },
      { label: "Monitoring / Grafana", href: "#", icon: "activity", badge: "soon" },
      { label: "System Telemetry", href: "#", icon: "zap", badge: "soon" },
    ],
  },
  {
    id: "research",
    label: "Research",
    icon: "book-open",
    defaultOpen: false,
    items: [
      { label: "Blockchain PM Paper", href: "#", icon: "book-open", badge: "Springer 2025" },
    ],
  },
  {
    id: "social",
    label: "Social",
    icon: "link",
    defaultOpen: true,
    items: [
      { label: "GitHub", href: "https://github.com/gayathriuthamaraj", icon: "github", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gayathri-uthamaraj-011a0a306/", icon: "linkedin", external: true },
      { label: "Email", href: "mailto:gayathriutham2905@gmail.com", icon: "mail", external: true },
    ],
  },
];
