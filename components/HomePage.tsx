import Image from "next/image";
import { ArrowRight, Download, Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ActivityIcon,
  buildAreas,
  caseStudies,
  credibility,
  recruiterSignals,
  strengths,
} from "@/lib/content";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/ai-architecture-hero.png"
        alt="Abstract AI architecture system visualization"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/18" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <Container>
        <div className="relative flex min-h-[760px] items-center py-24 sm:min-h-[820px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/78 backdrop-blur">
              <ActivityIcon className="h-4 w-4 text-ember" aria-hidden="true" />
              AI Architect · Agentic AI · Healthcare AI
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Shadab Khan builds production-grade AI platforms.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Senior software engineer and AI Architect with 15+ years in
              software delivery and 5+ years building AI, ML, and agentic AI
              systems across healthcare, automation, and real-time intelligence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#case-studies"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-porcelain"
              >
                View case studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/18 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/42 hover:bg-white/8"
              >
                Contact Shadab
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-white/12 bg-white/10 sm:grid-cols-4">
              {credibility.map((item) => (
                <div key={item.label} className="bg-ink/58 p-5 backdrop-blur">
                  <div className="text-3xl font-semibold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm leading-5 text-white/62">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhatIBuild() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What I Build"
          title="AI systems designed for real users, sensitive data, and operational pressure."
          description="The focus is not prompt demos. It is durable architecture: agents that know their boundaries, retrieval that can be evaluated, and platforms that teams can extend."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {buildAreas.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-ink/10 bg-white/72 p-7 shadow-premium backdrop-blur"
            >
              <div className="flex h-11 w-11 items-center justify-center bg-ink text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-base leading-7 text-steel">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Featured Case Studies"
            title="Selected platforms across agentic AI, healthcare, edge AI, and real-time intelligence."
          />
          <p className="max-w-2xl text-base leading-8 text-steel lg:justify-self-end">
            These are placeholder case studies for now, structured around the
            kinds of production questions that matter: architecture, data flow,
            reliability, responsible AI controls, and delivery tradeoffs.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group border border-ink/10 bg-porcelain/50 p-6 transition hover:border-signal/40 hover:bg-white"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">
                  {study.category}
                </p>
                <ArrowRight
                  className="h-4 w-4 text-steel transition group-hover:translate-x-1 group-hover:text-signal"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-7 text-xl font-semibold leading-7 text-ink">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-steel">
                {study.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TechnicalStrengths() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Architecture Strengths"
          title="Hands-on technical depth across the AI platform lifecycle."
          description="Shadab works where product intent meets system design: model behavior, retrieval quality, data movement, developer experience, risk controls, and deployment realities."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article key={title} className="bg-porcelain p-7">
              <Icon className="h-6 w-6 text-ember" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RecruiterCta() {
  return (
    <section className="bg-ink py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">
              Recruiter Signal
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Senior AI architecture capability with real delivery experience.
            </h2>
          </div>
          <div className="space-y-3">
            {recruiterSignals.map((signal) => (
              <div
                key={signal}
                className="flex gap-4 border border-white/10 bg-white/6 p-4"
              >
                <div className="mt-1 h-2 w-2 shrink-0 bg-signal" />
                <p className="text-base leading-7 text-white/76">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <div className="border border-ink/10 bg-white p-7 shadow-premium sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Building an AI platform that needs architectural judgment?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-steel">
                Reach out for AI architecture, agentic AI platform work,
                healthcare AI systems, or senior technical leadership roles.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-steel">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ember" aria-hidden="true" />
                  Open to remote and global teams
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:shadab@example.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
              >
                Email Shadab
                <Send className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/12 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/30 hover:bg-porcelain"
              >
                Download resume
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomePage() {
  return (
    <main>
      <Hero />
      <WhatIBuild />
      <FeaturedCaseStudies />
      <TechnicalStrengths />
      <RecruiterCta />
      <ContactCta />
    </main>
  );
}
