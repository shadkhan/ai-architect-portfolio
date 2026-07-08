# Versioning

> *"Versioning is how a living document remains trustworthy while it changes."*

---

# Why This Document Exists

This document defines how handbook documents, product requirements, architecture decisions, and release notes should be versioned.

The goal is to make change visible without making the repository bureaucratic.

---

# Document Versions

Use lightweight semantic document versions:

- `v0.1` for foundational drafts
- `v0.x` for active draft evolution
- `v1.0` for first stable publication
- `v1.x` for compatible refinements
- `v2.0` for major conceptual revisions

Documents do not need a version number until they become canonical or decision-bearing.

---

# Status Values

Use one of the following statuses:

- `Foundational Draft`
- `Draft`
- `In Review`
- `Accepted`
- `Superseded`
- `Archived`

Status should describe decision maturity, not writing polish.

---

# Change Expectations

Minor wording changes do not require version changes.

Material changes to principles, requirements, architecture, or decision logic should update version metadata and be recorded in `docs/99_META/CHANGELOG.md`.

---

## Living Document

Engineering evolves continuously.

This document captures current principles rather than immutable truths.

When new evidence contradicts an existing belief, the document should be updated accordingly.

Strong engineering values learning over consistency.
