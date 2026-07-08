import Image from "next/image";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ActivityIcon,
  buildAreas,
  caseStudies,
  credibility,
  decisionLayers,
  principles,
  roleSignals,
  strengths,
} from "@/lib/content";

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-ink/35 text-white backdrop-blur-md">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <a href="#top" className="text-sm font-semibold tracking-normal">
            shadkhan.io
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-sm text-white/72 md:flex"
          >
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#judgment">
              Judgment
            </a>
            <a className="transition hover:text-white" href="#case-studies">
              Case studies
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="mailto:hello@shadkhan.io"
            className="inline-flex min-h-10 items-center justify-center gap-2 border border-white/16 px-4 text-sm font-semibold transition hover:border-white/36 hover:bg-white/8"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/ai-architecture-hero.png"
        alt="Layered AI architecture visualization"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,20,23,0.96)_0%,rgba(17,20,23,0.88)_46%,rgba(17,20,23,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />

      <Header />

      <Container>
        <div className="relative flex min-h-[760px] items-center pb-24 pt-32 sm:min-h-[820px]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 border border-white/14 bg-white/8 px-4 py-2 text-sm text-white/78 backdrop-blur">
              <ActivityIcon className="h-4 w-4 text-signal" aria-hidden="true" />
              AI Architect · Agentic AI · Healthcare AI · GovTech
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Shadab Khan builds production AI systems people can trust.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              AI Architect and full-stack engineering leader with 15+ years of
              software engineering experience and 5+ years focused on AI, ML,
              LLMs, and agentic systems.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#case-studies"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cloud"
              >
                Review selected work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#judgment"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/18 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/42 hover:bg-white/8"
              >
                Understand my approach
              </a>
            </div>

            <div className="mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden border border-white/12 bg-white/10 sm:grid-cols-4">
              {credibility.map((item) => (
                <div key={item.label} className="bg-ink/62 p-5 backdrop-blur">
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

function Positioning() {
  return (
    <section className="border-b border-ink/8 bg-white py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {roleSignals.map((signal) => (
            <div key={signal} className="border-l-2 border-signal pl-5">
              <p className="text-sm leading-7 text-steel">{signal}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhatIBuild() {
  return (
    <section id="work" className="bg-cloud py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What I Build"
          title="AI products where architecture, product thinking, and risk controls have to work together."
          description="The work is not centered on demos. It is about systems that teams can operate, evaluate, extend, and explain."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buildAreas.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border border-ink/10 bg-white p-6 shadow-subtle"
            >
              <div className="flex h-11 w-11 items-center justify-center bg-ink text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Judgment() {
  return (
    <section id="judgment" className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Engineering Judgment"
            title="I make architecture decisions by asking better questions before choosing technology."
            description="Good systems come from clear constraints, validated assumptions, and trade-offs that can be explained to both product and engineering teams."
          />

          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {principles.map(({ title, description, icon: Icon }) => (
              <article key={title} className="bg-white p-6">
                <Icon className="h-6 w-6 text-signal" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DecisionFramework() {
  return (
    <section className="bg-ink py-24 text-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
              Decision Framework
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Architecture is the management of trade-offs.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              Before adopting a model, framework, database, or cloud pattern, I
              work through the layers that determine whether the decision will
              still make sense after the first release.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {decisionLayers.map((layer, index) => (
              <li key={layer} className="bg-white/6 p-5">
                <span className="text-sm font-semibold text-signal">
                  0{index + 1}
                </span>
                <p className="mt-3 text-base font-semibold text-white">
                  {layer}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="bg-cloud py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            title="Case-study briefs across agentic AI, healthcare AI, GovTech, edge AI, and real-time intelligence."
          />
          <p className="max-w-2xl text-base leading-8 text-steel lg:justify-self-end">
            Each project is framed around the questions senior reviewers care
            about: problem fit, data flow, architecture, reliability,
            governance, operational risk, and future change.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex min-h-[300px] flex-col border border-ink/10 bg-white p-6 transition hover:border-signal/40"
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
              <p className="mt-auto pt-6 text-sm font-medium leading-6 text-ink/72">
                {study.evidence}
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
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Capability Map"
          title="Hands-on architecture across the AI product lifecycle."
          description="The useful work happens where product intent meets system design: model behavior, retrieval quality, data movement, developer experience, risk controls, and deployment reality."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article key={title} className="bg-white p-7">
              <Icon className="h-6 w-6 text-signal" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="bg-cloud py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 border border-ink/10 bg-white p-7 shadow-subtle sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              Useful when an AI product needs senior engineering judgment.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel">
              Open to AI architecture, agentic AI platform work, healthcare AI
              systems, GovTech products, and senior hands-on engineering
              leadership roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-steel">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-signal" aria-hidden="true" />
                Remote-first, global teams
              </span>
            </div>
          </div>
          <a
            href="mailto:hello@shadkhan.io"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite"
          >
            Email Shadab
            <Send className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function HomePage() {
  return (
    <main>
      <Hero />
      <Positioning />
      <WhatIBuild />
      <Judgment />
      <DecisionFramework />
      <FeaturedCaseStudies />
      <TechnicalStrengths />
      <ContactCta />
    </main>
  );
}
