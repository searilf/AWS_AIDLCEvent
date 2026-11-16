---
name: health-dashboard-demo
depth: Minimal
keywords: []
description: Mock infrastructure health dashboard demo - genuine Inception, then one Construction unit (C1)
skeleton: off
review_cap: advisory
guard_policy: strict
---
# health-dashboard-demo scope

Composed scope for the Infrastructure Health Monitoring Dashboard demo
(mock EC2, RDS and ALB data; React + TypeScript + Vite + Vitest). Approved by
the human at the composition gate on 2026-11-16.

Guard Policy is strict: the presenter and engineer share these approvals and
the demo depends on an honest record, so an input that changes after approval
reopens that approval.

## Why these stages, why skip those

The change is small and concentrated (one package, low risk, mock data only),
but several decisions are still open: the invalid-CPU rule, accessibility and
responsive criteria, whether response time affects status, and the unit
boundary. The grid therefore keeps the cheap framing and decision stages and
drops the expensive design ceremony.

- EXECUTE: intent-capture, scope-definition, rough-mockups, approval-handoff,
  practices-discovery, requirements-analysis, domain-design, units-generation,
  code-generation, build-and-test (plus initialization).
- scope-definition and domain-design run because rough-mockups,
  approval-handoff and units-generation require their outputs.
- SKIP: market-research (internal demo), feasibility (standard pattern),
  team-formation (one presenter, one engineer), reverse-engineering (CSU low),
  user-stories and refined-mockups (one persona, IAE low), contract-design and
  delivery-planning (single unit), functional-design and the NFR and
  infrastructure stages (low CSU and risk), ci-pipeline (verification is local
  test and build), and the whole operation phase (no deployment).
