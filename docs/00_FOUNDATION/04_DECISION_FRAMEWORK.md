# Decision Framework

> *"Good architecture is rarely the result of knowing more technologies. It is the result of asking better questions."*

---

# Document Metadata

- Version: v0.1
- Status: Foundational Draft
- Canonical role: Architectural and product decision-making framework for this repository
- Depends on:
  - `docs/00_FOUNDATION/01_ENGINEERING_PHILOSOPHY.md`
  - `docs/00_FOUNDATION/02_WHO_I_AM.md`
  - `docs/00_FOUNDATION/03_BRAND.md`

---

# How This Document Should Be Used

This document is the canonical source for architectural and product decision-making across this repository.

Future case studies, architecture notes, ADRs, implementation plans, and product documents should reference this framework instead of redefining decision logic from scratch.

The framework translates the broader engineering principles from `01_ENGINEERING_PHILOSOPHY.md`, the identity and motivations from `02_WHO_I_AM.md`, and the public positioning from `03_BRAND.md` into a repeatable decision-making process.

---

# Why This Document Exists

Every software system is the cumulative result of thousands of decisions.

Some decisions affect only a single function.

Others determine the direction of an entire organisation.

Programming languages can be replaced.

Frameworks can be upgraded.

Infrastructure can be migrated.

Poor architectural decisions, however, can remain embedded in a system for years.

This document explains the decision-making framework I use when designing software systems, evaluating technologies, leading engineering discussions, and building AI products.

It is intentionally technology-agnostic.

The goal is not to produce identical decisions every time.

The goal is to make consistently good decisions.

---

# The First Question

Before discussing architecture, frameworks, programming languages, databases, AI models, or cloud providers, I always begin with one question.

> **What problem are we actually trying to solve?**

Many engineering discussions begin too late.

People debate implementation before establishing the problem.

Technology selected before understanding the problem usually results in unnecessary complexity.

Every architectural conversation should begin with understanding users, business goals, operational constraints, and long-term maintenance expectations.

---

# The Seven Layers of Decision Making

Every significant technical decision is evaluated through seven progressively deeper questions.

```text
Business
  |
  v
Users
  |
  v
Product
  |
  v
Architecture
  |
  v
Engineering
  |
  v
Operations
  |
  v
Evolution
```

Skipping layers almost always creates hidden costs later.

---

# Layer One - Business

Questions:

- What business objective are we trying to achieve?
- How will success be measured?
- What constraints exist?
- Is speed more valuable than perfection?
- Is this a strategic investment or an operational improvement?

Without business clarity, technical optimisation is often wasted effort.

---

# Layer Two - Users

Technology exists to serve users.

Questions include:

- Who benefits from this decision?
- What pain point does it remove?
- Does it reduce cognitive load?
- Does it improve trust?
- Does it simplify the user journey?

User value always precedes technical elegance.

---

# Layer Three - Product

Only after understanding business and users do I evaluate product implications.

Questions include:

- Is this solving the correct problem?
- Can we validate it quickly?
- What assumptions remain untested?
- Can we release incrementally?
- How will we gather feedback?

Products succeed through learning faster than competitors.

---

# Layer Four - Architecture

Architecture is the process of managing trade-offs.

Questions include:

- Is this complexity justified?
- Can the system evolve?
- Can another engineer understand it?
- Can components be replaced independently?
- What assumptions are we making?

Architecture should reduce future engineering effort rather than increase it.

---

# Layer Five - Engineering

Now implementation becomes relevant.

Typical questions include:

- Which language best fits the constraints?
- Which framework improves delivery speed?
- Which database matches the access patterns?
- Where should caching exist?
- What should remain asynchronous?

Technology choices should emerge naturally from earlier decisions.

---

# Layer Six - Operations

Software is valuable only after deployment.

Operational questions include:

- Can this system be monitored?
- Can failures be diagnosed quickly?
- Can deployments be reversed safely?
- Are alerts meaningful?
- Are costs observable?

Reliability depends on operational visibility rather than optimistic assumptions.

---

# Layer Seven - Evolution

The final question is rarely asked.

> How will this decision affect us two years from now?

Technology changes.

Business priorities change.

Teams change.

Architecture should make future change easier rather than harder.

Every decision should therefore reduce the cost of future adaptation.

---

# My Technology Selection Framework

I evaluate technologies using the following priorities.

## Problem Fit

Does this technology genuinely solve the identified problem?

---

## Simplicity

Can a simpler alternative achieve similar outcomes?

---

## Team Capability

Can the existing team build, debug, and maintain this successfully?

---

## Operational Cost

Infrastructure.

Maintenance.

Monitoring.

Licensing.

Training.

Everything has a cost.

---

## Vendor Lock-in

How difficult would migration become?

---

## Community

Is the ecosystem healthy?

Is documentation mature?

Is knowledge widely available?

---

## Longevity

Will this technology still be maintainable several years from now?

---

# AI Decision Framework

Artificial Intelligence introduces additional questions.

Before adopting any AI capability I evaluate:

- Is AI genuinely required?
- Could deterministic software solve this instead?
- How will accuracy be measured?
- What are acceptable failure modes?
- What guardrails exist?
- How will hallucinations be detected?
- Can outputs be explained?
- Who remains accountable?

AI should increase trust.

Not reduce it.

---

# Decision Anti-Patterns

I deliberately avoid decisions driven by:

- Industry hype
- Social media trends
- Resume-driven development
- Premature optimisation
- Architecture for architecture's sake
- "Everyone else is doing it."

Popularity is not evidence.

---

# When I Change My Mind

One principle guides every major decision.

> **Evidence always outranks opinion.**

I have changed architectural approaches after benchmarking showed different results.

I have replaced custom solutions with open-source alternatives.

I have abandoned technically elegant systems when user validation disproved initial assumptions.

Changing direction after learning new information is not inconsistency.

It is responsible engineering.

---

# Engineering Questions I Ask Before Every Major Decision

1. What problem are we solving?
2. Who benefits?
3. What assumptions are we making?
4. How will this fail?
5. Can another engineer maintain it?
6. How will we observe it?
7. How will we test it?
8. How will we secure it?
9. How expensive will it become?
10. How difficult will it be to change later?

If these questions cannot be answered confidently, the design is not yet ready.

---

# Closing Thought

Architecture is not the art of choosing technologies.

Architecture is the discipline of making decisions that continue creating value long after today's technologies have changed.

---

## Living Document

Engineering evolves continuously.

This document captures current principles rather than immutable truths.

When new evidence contradicts an existing belief, the document should be updated accordingly.

Strong engineering values learning over consistency.
