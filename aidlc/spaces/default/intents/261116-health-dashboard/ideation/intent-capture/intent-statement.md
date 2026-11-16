# Intent Statement — Infrastructure Health Monitoring Dashboard

## Sources

- [desc] Initial description: "Build an Infrastructure Health Monitoring Dashboard (mock EC2, RDS, ALB data; React/TypeScript/Vite/Vitest). Draft inputs: docs/01-demo-specification.md and docs/02-inception-decisions.md. Run Inception only; Construction unit C1 (CPU health classification and dashboard visualization) is to be left unimplemented."
- [scope] Workflow-selected scope: `mvp` (user-confirmed product boundary: `poc` — to be applied at scope change).
- [Q1] Q1: Both — models a real operations use case while serving as a live AI-DLC demo.
- [Q2] Q2: Conference audience / technical audience member observing the AI-DLC live demo.
- [Q3] Q3: `npm run test` and `npm run build` pass with Construction Unit C1 tests enabled.
- [Q4] Q4: AWS public event / conference demo deadline.
- [Q5] Q5: Presenter — demo flows smoothly, stays within time, accurately represents AI-DLC.
- [Q6] Q6: Presenter makes final scope calls; engineer flags technical blockers.
- [Q7] Q7: Post-event: share recorded demo and committed artifact state with the team.
- [Q8a] Q8a: `poc` scope — Minimal depth, 8 stages.

---

## Problem Statement

Operations teams dealing with distributed AWS infrastructure currently lack a single-screen consolidated view of resource health. This project models that problem using synthetic data — four mock resources (two EC2 instances, one RDS database, one ALB) — and builds a React/TypeScript dashboard that classifies each resource's CPU telemetry into Healthy, Warning, Critical, or Unknown status. [Q1][desc]

The immediate purpose is to serve as a live demonstration at an AWS public event, showing a real AI-DLC Inception workflow followed by a Construction unit implementation. [Q4] The dashboard intentionally labels all metrics as synthetic/mock and makes no claim to represent live AWS telemetry. [desc]

## Target Customer

The primary audience for this demonstration is a technical conference audience observing the AI-DLC live demo. [Q2] The modeled end-user persona — an operations engineer who needs a consolidated health view — provides the narrative frame for the demo but is not an active user of this specific deliverable. [Q1]

## Success Metrics

- `npm run test` and `npm run build` both pass with Construction Unit C1 acceptance tests enabled. [Q3]
- The dashboard correctly classifies the four fixture resources according to the agreed CPU threshold rules (Healthy <70%, Warning 70–<90%, Critical ≥90%, null/missing CPU → Unknown). [desc]
- Status badge counts from the fixtures display Healthy 1, Warning 1, Critical 1, Unknown 1. [desc]
- The demo session runs within its 10–12 minute technical window. [desc]

## Initiative Trigger

An external AWS public event presentation deadline. The trigger is a conference commitment, not an internal operational need. [Q4]

## Initial Scope Signal

- **Workflow-selected scope:** `mvp` [scope]
- **User-confirmed product boundary:** `poc` — Minimal depth, 8 stages; the scope change will be applied before Inception proceeds. [Q8a]

The `poc` scope covers: Intent Capture, Scope Definition, Approval & Handoff (Ideation); Requirements Analysis (Inception); Code Generation, Build and Test (Construction). Stages outside this set — including market research, feasibility, user stories, domain design, and all Operation stages — are out of scope for this workflow run. [Q8a][desc]

## Assumptions & Open Questions

- [assumption] The four fixture resources in `src/data/resources.json` are the authoritative data for all acceptance criteria; no additional resources will be added during Construction.
- [assumption] Invalid CPU values (<0, >100, NaN) are treated as Unknown — this is proposed in the draft inputs but has not been formally confirmed through this workflow's question set.
- [assumption] Response time is displayed for context only and does not influence health status unless explicitly approved.
- [assumption] "Run Inception only; Construction unit C1 … is to be left unimplemented" means the AI-DLC workflow proceeds through Inception stages and stops before implementing C1 application code — the workflow artifacts, not the finished React application, are the primary deliverable of this session's Inception run.
