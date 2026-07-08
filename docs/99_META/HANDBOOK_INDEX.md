# Handbook Index

> *"A handbook is valuable only when readers can quickly find, understand, and connect its knowledge."*

---

# Purpose

The Handbook Index is the primary navigation map for the AI Architect Handbook.

It defines the recommended reading order, explains relationships between handbook volumes, and provides both human readers and AI coding agents with a single entry point into the repository.

This document is the canonical navigation reference for the entire handbook.

---

# Reading Order

```text
Volume I
Foundation
|
+-- Engineering Philosophy
+-- Who I Am
+-- Brand
+-- Decision Framework
        |
        v
Volume II
Product Thinking
|
+-- Product Vision
+-- Product Strategy
+-- Product Requirements
+-- User Personas & Journeys
+-- Information Architecture
+-- Functional Requirements
+-- Design & Engineering Standards
+-- Success Metrics
        |
        v
Volume III
System Architecture
|
+-- Architecture
+-- Engineering Standards
+-- AI Architecture
+-- Data Architecture
+-- Deployment Architecture
+-- Security Architecture
+-- Performance Architecture
+-- Observability Architecture
+-- Design System
+-- AI Agent Handbook
        |
        v
Volume IV
Case Studies
        |
        v
Volume V
Open Source
        |
        v
Volume VI
Writing
        |
        v
Volume VII
Decision Records
        |
        v
Implementation
```

---

# Knowledge Dependency

```text
Engineering Philosophy
  |
  v
Decision Framework
  |
  v
Product Vision
  |
  v
Product Strategy
  |
  v
Requirements
  |
  v
Architecture
  |
  v
Engineering Standards
  |
  v
AI Agent Handbook
  |
  v
Implementation
  |
  v
Evidence
```

No implementation should bypass this dependency chain.

---

# Handbook Volumes

## Volume I - Foundation

- `docs/00_FOUNDATION/01_ENGINEERING_PHILOSOPHY.md`
- `docs/00_FOUNDATION/02_WHO_I_AM.md`
- `docs/00_FOUNDATION/03_BRAND.md`
- `docs/00_FOUNDATION/04_DECISION_FRAMEWORK.md`

## Volume II - Product Thinking

- `docs/01_PRODUCT_THINKING/01_PRODUCT_VISION.md`
- `docs/01_PRODUCT_THINKING/02_PRODUCT_STRATEGY.md`
- `docs/01_PRODUCT_THINKING/03_PRODUCT_REQUIREMENTS.md`
- `docs/01_PRODUCT_THINKING/04_USER_PERSONAS_AND_JOURNEYS.md`
- `docs/01_PRODUCT_THINKING/05_INFORMATION_ARCHITECTURE.md`
- `docs/01_PRODUCT_THINKING/06_FUNCTIONAL_AND_NON_FUNCTIONAL_REQUIREMENTS.md`
- `docs/01_PRODUCT_THINKING/07_DESIGN_AND_ENGINEERING_STANDARDS.md`
- `docs/01_PRODUCT_THINKING/08_SUCCESS_METRICS_GOVERNANCE_RISKS_AND_RELEASE_STRATEGY.md`

## Volume III - System Architecture

- `docs/02_SYSTEM_ARCHITECTURE/README.md`
- `docs/02_SYSTEM_ARCHITECTURE/01_ARCHITECTURE.md`

## Volume IV - Case Studies

- `docs/03_CASE_STUDIES/README.md`

## Volume V - Open Source

- `docs/04_OPEN_SOURCE/README.md`

## Volume VI - Writing

- `docs/05_WRITING/README.md`

## Volume VII - Decision Records

- `docs/06_DECISION_RECORDS/README.md`

## Meta

- `README.md`
- `docs/99_META/README.md`
- `docs/99_META/HANDBOOK_INDEX.md`
- `docs/99_META/DOCUMENT_CONVENTIONS.md`
- `docs/99_META/GLOSSARY.md`
- `docs/99_META/REPOSITORY_PRINCIPLES.md`
- `docs/99_META/VERSIONING.md`
- `docs/99_META/CHANGELOG.md`

---

# Navigation Rules

Every chapter should answer:

- Why does this exist?
- What problem does it solve?
- Which chapter should be read next?

Every chapter should contain:

- Related Chapters
- Dependencies
- Future Reading
- Living Chapter Statement

---

# For AI Coding Agents

Always begin with:

1. `docs/99_META/HANDBOOK_INDEX.md`
2. Engineering Philosophy
3. Decision Framework
4. Product Thinking
5. Architecture
6. Engineering Standards
7. AI Agent Handbook
8. Implementation

This sequence preserves architectural intent.

---

## Living Document

Engineering evolves continuously.

This document captures current principles rather than immutable truths.

When new evidence contradicts an existing belief, the document should be updated accordingly.

Strong engineering values learning over consistency.
