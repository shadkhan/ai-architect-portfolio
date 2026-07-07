# Product Requirements Document (PRD)

## Part III - Information Architecture

> *"Architecture is not only how software is organised. It is how knowledge is organised."*

---

# Why This Section Exists

Every software product has an architecture.

Most portfolios only architect the software.

This platform architects the knowledge itself.

The purpose of the Information Architecture is to ensure that every document, project, article, case study, and engineering lesson belongs to a coherent knowledge system rather than existing as isolated content.

The architecture should make it possible for both humans and AI coding agents to discover, understand, and connect information naturally.

---

# Design Philosophy

The platform is not a collection of web pages.

It is a connected engineering knowledge graph.

The website is simply one interface for exploring that graph.

Every page should answer three questions:

1. Why does this exist?
2. How is it connected?
3. Where should the reader go next?

---

# Knowledge Architecture

The platform is organised into seven layers.

```text
Vision
  |
  v
Engineering Philosophy
  |
  v
Identity
  |
  v
Brand
  |
  v
Product Thinking
  |
  v
Architecture
  |
  v
Engineering Practice
  |
  v
Evidence
```

Every new document should belong to exactly one primary layer while referencing other related layers.

This prevents duplication and encourages a single source of truth.

---

# Primary Knowledge Domains

## Foundation

Purpose:

Defines identity, values, philosophy, and decision-making.

Documents:

- Engineering Philosophy
- Who I Am
- Brand
- Decision Framework
- Values

Questions Answered:

- Who am I?
- What do I believe?
- How do I make decisions?

---

## Product Thinking

Purpose:

Defines why products exist and how they evolve.

Documents:

- Product Vision
- Product Strategy
- PRD
- User Journeys
- Recruiter Journey

Questions Answered:

- Why build this?
- Who is it for?
- How should success be measured?

---

## Architecture

Purpose:

Explains how systems are designed.

Documents:

- Architecture
- AI Architecture
- System Design
- Design System
- Architecture Decision Records

Questions Answered:

- Why this architecture?
- Why not another?
- What trade-offs were accepted?

---

## Engineering

Purpose:

Explains execution.

Documents:

- AGENTS
- Coding Standards
- Engineering Standards
- Security
- Performance
- Deployment

Questions Answered:

- How should this be built?
- How should quality be maintained?

---

## Evidence

Purpose:

Proves engineering capability.

Documents:

- Case Studies
- Production Incidents
- Lessons Learned
- Open Source
- Benchmarks
- Metrics

Questions Answered:

- Can these ideas be trusted?
- Have they worked in practice?

---

## Knowledge

Purpose:

Teach others.

Documents:

- Articles
- Architecture Guides
- Interview Handbook
- Whitepapers
- Presentations

Questions Answered:

- How can others apply these ideas?

---

## Community

Purpose:

Create long-term professional relationships.

Documents:

- Speaking
- Mentoring
- Open Source
- Contact
- Collaboration

Questions Answered:

- How can we work together?

---

# Information Relationships

Every document should define four relationships.

## Depends On

Which documents must exist first?

Example:

Architecture

Depends On:

- Engineering Philosophy
- Decision Framework
- Product Strategy

---

## Influences

Which documents inherit ideas from this document?

Example:

Engineering Philosophy

Influences:

- Brand
- Architecture
- Case Studies
- Website

---

## Related

Documents discussing similar ideas.

Example:

Case Study

Related:

- Architecture Decision Records
- Engineering Stories
- Production Incidents

---

## Used By

Which implementation artifacts consume this knowledge?

Examples:

- Website
- Codex
- AI Agents
- Documentation
- Blog
- Interview Preparation

---

# Navigation Philosophy

Navigation should follow understanding rather than file structure.

Visitors should naturally move from broad ideas toward increasing technical depth.

Example:

```text
Homepage
  |
  v
Engineering Philosophy
  |
  v
Architecture
  |
  v
Case Study
  |
  v
Source Code
```

Rather than:

```text
Homepage
  |
  v
Projects
  |
  v
Contact
  |
  v
Resume
```

The first teaches.

The second lists.

---

# Content Types

The platform contains several distinct content types.

## Principle

Timeless engineering belief.

Example:

"Simplicity is an engineering feature."

---

## Framework

Reusable decision model.

Example:

Decision Framework.

---

## Architecture

System design explanation.

Example:

RAG Architecture.

---

## Decision Record

Why a decision was made.

Example:

Why Documentation Comes Before UI.

---

## Story

Real engineering experience.

Example:

The Tuesday Agent Loop Incident.

---

## Case Study

Complete project journey.

Problem.

Architecture.

Trade-offs.

Results.

Lessons.

---

## Guide

Educational documentation.

Example:

Building Reliable AI Systems.

---

# Content Lifecycle

Every major engineering experience should generate multiple knowledge assets.

```text
Production Incident
  |
  v
Engineering Story
  |
  v
Architecture Lesson
  |
  v
Case Study
  |
  v
Interview Story
  |
  v
Conference Talk
  |
  v
Blog Article
  |
  v
Open Source Improvement
```

Knowledge should compound over time.

No important lesson should exist in only one place.

---

# Search Strategy

Search should support multiple ways of thinking.

Users may search by:

Technology

Example:

- Rust
- Redis
- LLMs

Problem

Example:

- Latency
- Scaling
- Caching
- Security

Architecture

Example:

- CQRS
- RAG
- Semantic Cache

Leadership

Example:

- Hiring
- Mentoring
- Team Building

AI Agent

Example:

- Evaluation
- Prompt Guardrails
- Model Routing

This makes the platform valuable for learning rather than simple browsing.

---

# URL Strategy

URLs should remain stable.

Example:

- `/engineering-philosophy`
- `/product-strategy`
- `/architecture/modular-monolith`
- `/case-studies/carenest`
- `/articles/semantic-caching`

Avoid version numbers inside URLs.

Knowledge evolves.

Links should remain permanent.

---

# AI Agent Navigation

AI coding agents should navigate the repository through relationships rather than filenames.

When generating code:

Read:

```text
Engineering Philosophy
  |
  v
Decision Framework
  |
  v
PRD
  |
  v
Architecture
  |
  v
AGENTS
  |
  v
Implementation
```

This guarantees implementation aligns with philosophy.

---

# Evolution Rules

Adding new content should never require redesigning the repository.

Instead:

```text
New Project
  |
  v
Case Study
  |
  v
Architecture
  |
  v
Engineering Story
  |
  v
Open Source
  |
  v
Interview Story
  |
  v
Blog
```

Everything fits existing structures.

Growth increases coherence rather than complexity.

---

# Information Architecture Principles

Every document must answer:

Why does this exist?

Every document must define:

How does it relate?

Every document must teach:

Something reusable.

Every document must help:

Humans.

AI coding agents.

Future versions of myself.

The repository itself becomes the architecture demonstration.

---

## Living Document

Engineering evolves continuously.

This document captures current principles rather than immutable truths.

When new evidence contradicts an existing belief, the document should be updated accordingly.

Strong engineering values learning over consistency.
