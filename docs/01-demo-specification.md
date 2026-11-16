# Demo Specification — Infrastructure Health Monitoring

## Business problem
Operations teams need a concise view of infrastructure condition. This **demo** uses synthetic snapshots and is **not** a real CloudWatch interface or operational monitoring system.

## Audience and session
AWS public event; total session 30 minutes; technical demonstration 10–12 minutes; one presenter and one engineer. Show a genuine AI-DLC Construction continuation after a real, approved Inception. Do not claim unrun tests passed.

## Scope of the application
- Four resources from `src/data/resources.json`: two EC2, one RDS, one ALB.
- Display overall count and resource inventory.
- **Construction Unit C1 (LIVE):** Implement deterministic CPU health classification for resources with CPU telemetry; add Healthy / Warning / Critical badges, status summary cards and unit tests.
- CPU boundary rules: Healthy >=0% and <70%; Warning >=70% and <90%; Critical >=90% and <=100%; missing CPU => Unknown. Invalid values (<0, >100, NaN) must be explicitly handled by a chosen rule confirmed during Inception (suggested: Unknown); do not silently invent it.
- ALB has null CPU and should show Unknown rather than claim Healthy. Response time is displayed for context only; it does NOT influence status unless explicitly approved.
- Dashboard must label metrics as **synthetic/mock** and avoid suggesting live AWS resource telemetry.

## Acceptance criteria proposed for approval during Inception
- AC-01: Boundary tests for 0, 69.9, 70, 89.9, 90, 100 and null CPU.
- AC-02: CPU status of API Server (78%) is Warning and RDS Primary DB (94%) is Critical; EC2 Web Server (34%) is Healthy; ALB status is Unknown.
- AC-03: Counts match four fixtures: Healthy 1, Warning 1, Critical 1, Unknown 1.
- AC-04: Accessible readable status labels (not color alone), responsive display.
- AC-05: `npm run build` and `npm run test` pass with enabled Construction tests.
- AC-06: Git diff shows an implementation corresponding to the approved C1 unit; no AWS secrets or unrelated features are added.

## Out of scope (live)
Actual CloudWatch/EC2/RDS API calls, IAM, login, database, alarms, alert delivery, live charts, deployment to production, multi-user collaboration, persistence and any medical/health data.

## Technical boundaries
React + TypeScript + Vite + Vitest. No UI component library is necessary. Keep visuals attractive but minimal. Use source fixture as the authoritative data. Existing starter intentionally does not implement classification.

## Separate optional future work
Replace local fixtures with an authenticated backend reading CloudWatch metrics and alarms, noting EC2 memory metrics need additional instrumentation. Separate architecture/cost/security approval is required.
