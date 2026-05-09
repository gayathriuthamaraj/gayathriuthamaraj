"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
};

const focusAreas = [
  "Distributed Systems",
  "Backend Infrastructure",
  "Event-Driven Architectures",
  "Federated Networking",
  "ML Infrastructure",
  "DevOps & Containerization",
];

const projects: Project[] = [
  {
    name: "InDel",
    description: "Parametric income insurance platform for gig workers.",
    architecture:
      "Kafka-driven backend services orchestrated in a multi-container Docker environment for disruption detection and automated payout workflows.",
    highlights: [
      "Architected a 7-container Docker Compose ecosystem",
      "Built Kafka-driven disruption detection pipelines",
      "Simulated 1,000 workers across multiple cities",
      "Automated payout workflows using Razorpay UPI",
    ],
    stack: ["Go", "Kafka", "PostgreSQL", "Docker", "React"],
  },
  {
    name: "Gotham",
    description:
      "Federated social networking platform inspired by ActivityPub.",
    architecture:
      "Distributed federation services enabling cross-server identity, messaging, and profile resolution.",
    highlights: [
      "Cross-server identity and messaging",
      "Multi-service federation backend",
      "Federated search and profile resolution",
      "Dockerized distributed deployment",
    ],
    stack: ["Go", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    name: "RKIVE",
    description: "AI-powered candidate shortlisting system.",
    architecture:
      "Modular NLP pipeline combining deterministic preprocessing with LLM-assisted evaluation for resume-JD matching.",
    highlights: [
      "Hybrid NER + LLM evaluation pipeline",
      "Resume–JD matching workflows",
      "Benchmarking LLM/SLM approaches",
      "Modular preprocessing architecture",
    ],
    stack: ["Python", "Pandas", "Scikit-Learn", "NLP"],
  },
  {
    name: "Kuzhu",
    description: "Secure community communication platform.",
    architecture:
      "Security-first service design with role-governed workflows, encryption primitives, and tamper-resistant audit traces.",
    highlights: [
      "RBAC-based governance workflows",
      "RSA + AES hybrid encryption",
      "Digital signatures and audit logging",
      "Secure announcement infrastructure",
    ],
    stack: ["React", "Express", "TypeScript", "Security Systems"],
  },
  {
    name: "Fern",
    description: "Interactive machine learning experimentation platform.",
    architecture:
      "FastAPI-based orchestration for experiment execution, evaluation pipelines, and real-time visualization flows.",
    highlights: [
      "No-code ML experimentation workflows",
      "Real-time visualization dashboards",
      "Configurable model training",
      "Model persistence and evaluation pipelines",
    ],
    stack: ["FastAPI", "React", "Scikit-Learn", "Plotly"],
  },
];

const skills = [
  {
    title: "Backend & Infrastructure",
    items: [
      "Go",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Apache Kafka",
      "Apache Zookeeper",
      "Docker",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "ML/Data",
    items: ["TensorFlow", "Scikit-Learn", "Pandas", "NLP Pipelines"],
  },
  {
    title: "Systems Concepts",
    items: [
      "Distributed Systems",
      "Event-Driven Systems",
      "Caching",
      "Blockchain",
    ],
  },
];

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Exploration", "exploration"],
  ["GitHub", "github"],
  ["Research", "research"],
  ["Contact", "contact"],
] as const;

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/90">{title}</p>
        <div className="h-px w-full bg-slate-800" />
      </div>
      {children}
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
      <h3 className="text-sm font-semibold tracking-wide text-slate-100">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
        <div className="flex gap-2 text-xs">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-2 py-1 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              GitHub
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-2 py-1 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        <span className="font-medium text-slate-300">Architecture focus:</span> {project.architecture}
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-cyan-900/70 bg-cyan-950/30 px-2 py-1 text-xs text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-dashed border-slate-700/80 bg-slate-900/70 p-4 text-xs text-slate-400">
        Placeholder: Architecture diagram / deployment screenshot
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid opacity-40 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-10">
          <p className="text-sm font-semibold tracking-wide text-cyan-300">Gayathri U</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
            {navItems.map(([label, target]) => (
              <li key={target}>
                <a href={`#${target}`} className="transition hover:text-cyan-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-14 md:gap-24 md:px-10 md:py-20">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="scroll-mt-24 space-y-8"
        >
          <div className="space-y-4">
            <p className="inline-block rounded-full border border-cyan-800/70 bg-cyan-950/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Systems Engineer Portfolio
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Building resilient distributed platforms for backend, federation, and
              machine-learning infrastructure.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Computer Science undergraduate focused on architecture-first engineering,
              scalable service design, and operationally reliable backend systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/gayathriuthamaraj"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gayathri-u"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-slate-700 bg-slate-900/90 px-2.5 py-1 text-xs text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="about" title="About">
            <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Computer Science undergraduate with hands-on experience building distributed
              systems, federated networking platforms, ML-powered evaluation systems,
              and event-driven backend infrastructure. Interested in scalable systems
              engineering, real-time architectures, and infrastructure-focused
              development.
            </p>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="projects" title="Featured Projects">
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="skills" title="Technical Skills">
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((skill) => (
                <SkillGroup key={skill.title} title={skill.title} items={skill.items} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="exploration" title="Engineering Philosophy / Current Exploration">
            <p className="max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I optimize for system clarity, operational reliability, and composable
              architecture. Current exploration includes distributed coordination systems,
              telemetry pipelines, scalable backend architectures, ML infrastructure,
              and federated systems.
            </p>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="github" title="GitHub Activity">
            <div className="grid gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="mb-3 text-sm text-slate-300">Contribution Graph</p>
                <a href="https://github.com/gayathriuthamaraj" target="_blank" rel="noreferrer">
                  <Image
                    src="https://ghchart.rshah.org/22d3ee/gayathriuthamaraj"
                    alt="Gayathri U GitHub contribution graph"
                    className="w-full rounded-md border border-slate-800"
                    width={1200}
                    height={200}
                  />
                </a>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <a
                  href="https://github.com/gayathriuthamaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <p className="mb-3 text-sm text-slate-300">Pinned Repositories / Stats</p>
                  <Image
                    src="https://github-readme-stats.vercel.app/api?username=gayathriuthamaraj&show_icons=true&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=e2e8f0&icon_color=22d3ee"
                    alt="GitHub stats"
                    className="w-full rounded-md border border-slate-800"
                    width={600}
                    height={280}
                  />
                </a>
                <a
                  href="https://github.com/gayathriuthamaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <p className="mb-3 text-sm text-slate-300">Coding Consistency</p>
                  <Image
                    src="https://streak-stats.demolab.com?user=gayathriuthamaraj&theme=transparent&hide_border=true&background=00000000&ring=22d3ee&fire=22d3ee&currStreakLabel=e2e8f0"
                    alt="GitHub streak stats"
                    className="w-full rounded-md border border-slate-800"
                    width={600}
                    height={280}
                  />
                </a>
              </div>
            </div>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="research" title="Publication / Research">
            <article className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Project Management with Tamper-Proof Evaluation System using Blockchain
                and Secured Storage
              </h3>
              <p className="mt-2 text-sm text-slate-300">Published in Springer CVR 2025.</p>
            </article>
          </Section>
        </motion.div>

        <motion.div
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Section id="contact" title="Contact">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                Open to internships and engineering collaborations in distributed systems,
                backend infrastructure, and ML platforms.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/gayathriuthamaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  GitHub
                </a>
                <a
                  href="mailto:gayathriuthamaraj@gmail.com"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Email
                </a>
              </div>
            </div>
          </Section>
        </motion.div>
      </main>
    </div>
  );
}
