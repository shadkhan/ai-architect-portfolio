# Repository Principles

> *"A repository should make good decisions easier to repeat."*

---

# Why This Document Exists

This document defines the rules that govern the AI Architect Knowledge Platform repository.

The repository is not only storage for files.

It is a professional knowledge system, an engineering handbook, and an implementation workspace.

Its structure should therefore reflect the same engineering judgment the platform claims to demonstrate.

---

# Core Repository Principles

## 1. Documentation Is the Source of Intent

Implementation should follow documented product and architecture intent.

When code and documentation disagree, the disagreement must be resolved explicitly rather than hidden inside implementation.

---

## 2. Single Source of Truth

Every important concept should have one canonical explanation.

Other documents should reference the canonical source instead of duplicating the same reasoning.

---

## 3. Structure Should Teach

Folder names, file names, document order, and cross-references should help readers understand the system.

The repository structure is part of the product experience.

---

## 4. Evidence Before Claims

The repository should demonstrate capability through case studies, architecture decisions, lessons learned, and working software.

Unsupported claims should be avoided.

---

## 5. Simplicity Before Expansion

New folders, abstractions, tools, or conventions should be added only when they improve clarity or reduce meaningful complexity.

Growth should increase coherence rather than fragmentation.

---

## 6. AI Agents Must Follow the Handbook

AI coding agents should read the handbook before implementation.

They should not invent product behavior, architecture, or documentation conventions that contradict the repository's canonical documents.

---

## 7. Every Change Should Leave a Trail

Major product, architecture, documentation, and repository-structure changes should be traceable through documentation, decision records, or the changelog.

Future readers should be able to understand why the repository changed.

---

# Canonical Sources

- Engineering principles: `docs/00_FOUNDATION/01_ENGINEERING_PHILOSOPHY.md`
- Identity and motivations: `docs/00_FOUNDATION/02_WHO_I_AM.md`
- Brand positioning: `docs/00_FOUNDATION/03_BRAND.md`
- Decision logic: `docs/00_FOUNDATION/04_DECISION_FRAMEWORK.md`
- Product intent: `docs/01_PRODUCT_THINKING/01_PRODUCT_VISION.md`
- Documentation rules: `docs/99_META/DOCUMENT_CONVENTIONS.md`
- Reading order: `docs/99_META/HANDBOOK_INDEX.md`

---

# Repository Change Rules

Before adding a new top-level docs folder, ask:

1. Does an existing folder already own this knowledge?
2. Is this a new domain or only a new document type?
3. Will this make navigation clearer?
4. Which existing documents should reference it?
5. Does this change require a changelog entry?

Before adding a new feature, ask:

1. Which user problem does this solve?
2. Which requirement does this satisfy?
3. Which architecture document governs it?
4. Which non-functional requirements apply?
5. How will future maintainers understand it?

---

# Closing Principle

The repository should become easier to understand as it grows.

If growth makes the system harder to navigate, the architecture has failed.

---

## Living Document

Engineering evolves continuously.

This document captures current principles rather than immutable truths.

When new evidence contradicts an existing belief, the document should be updated accordingly.

Strong engineering values learning over consistency.
