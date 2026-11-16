# Intent Capture Questions - Infrastructure Health Monitoring Dashboard

## Sources

- [desc] Initial description: "Build an Infrastructure Health Monitoring Dashboard (mock EC2, RDS, ALB data; React/TypeScript/Vite/Vitest). Draft inputs: docs/01-demo-specification.md and docs/02-inception-decisions.md. Run Inception only; Construction unit C1 (CPU health classification and dashboard visualization) is to be left unimplemented."
- [scope] Workflow-selected scope: `health-dashboard-demo`.

---

## Q1. What is the core business problem this dashboard solves?

The initial description says this is an infrastructure health monitoring dashboard using mock data. We want to confirm the problem being solved so the initiative is grounded correctly.

A. Operations teams lack a quick, consolidated view of infrastructure health status across EC2, RDS, and ALB resources, so this dashboard provides that consolidated status view using synthetic data.
B. The goal is to demonstrate AI-DLC's Construction workflow at a live event - the "business problem" is primarily a demo vehicle, not a production operations need.
C. Both A and B - it models a real operations use case while serving as a live demo.
D. Other - the business problem is different from the above.
X. Other (please specify)

[Answer]: C. Both - it models a real operations use case while serving as a live demo.

---

## Q2. Who is the primary user, and what pain are they experiencing?

Understanding who benefits and what frustrates them right now shapes what success looks like.

A. An operations engineer who currently has to check multiple AWS consoles or dashboards to determine whether EC2, RDS, and ALB resources are healthy - this dashboard gives them a single-screen summary.
B. A conference attendee / technical audience member observing the AI-DLC live demo - the "user" is the demo viewer, not an ongoing real end-user.
C. Both - model it as an operations engineer persona for the artifact, while acknowledging the demo audience context.
D. Not yet defined - no specific user persona has been confirmed.
X. Other (please specify)

[Answer]: A. An operations engineer who currently has to check multiple AWS consoles or dashboards to determine whether EC2, RDS, and ALB resources are healthy - this dashboard gives them a single-screen summary.

---

## Q3. What does success look like, and what metrics matter?

Success metrics should be measurable. Please select all that apply.

A. `npm run test` and `npm run build` pass with Construction Unit C1 tests enabled.
B. The dashboard correctly classifies all four fixture resources (EC2 Web Server: Healthy, API Server: Warning, RDS Primary DB: Critical, ALB: Unknown).
C. Status badge counts display Healthy 1, Warning 1, Critical 1, Unknown 1 from the four fixtures.
D. Accessible, responsive display - labels are readable (not color alone), layout works at typical screen sizes.
E. The session completes on time (10-12 minutes of live demo with a visible AI-DLC Construction continuation).
X. Other (please specify)

[Answer]: A. `npm run test` and `npm run build` pass with Construction Unit C1 tests enabled.

---

## Q4. What triggered this initiative, and why now?

A. An AWS public event / conference demo deadline - the trigger is an external presentation commitment, not an internal operations need.
B. A team decision to validate AI-DLC's Construction workflow on a realistic brownfield-style project.
C. Both A and B.
D. Not yet defined.
X. Other (please specify)

[Answer]: A. An AWS public event / conference demo deadline - the trigger is an external presentation commitment, not an internal operations need.

---

## Q5. Who are the key stakeholders and what does each care about?

Select all roles that apply and confirm their primary concern.

A. Presenter - cares that the demo flows smoothly, stays within time, and accurately represents AI-DLC.
B. Engineer operating Kiro live - cares that the Construction work can be completed and tested within the session without unexpected failures.
C. AWS Labs / internal team - cares that AI-DLC is represented accurately and no unrun tests are claimed to have passed.
D. Conference audience - cares that the demo is comprehensible and credible.
E. No additional stakeholders beyond the above.
X. Other (please specify)

[Answer]: A, B. Presenter - cares that the demo flows smoothly, stays within time, and accurately represents AI-DLC; Engineer operating Kiro live - cares that the Construction work can be completed and tested within the session without unexpected failures.

---

## Q6. Who decides scope or priority, and who can influence those decisions?

A. The presenter / demo owner makes final scope calls; the engineer can flag technical blockers but does not change scope unilaterally.
B. The AWS Labs team owns the AI-DLC methodology decisions; the presenter owns the demo script.
C. Both A and B - presenter owns demo scope, AWS Labs owns framework fidelity.
D. Not yet defined.
X. Other (please specify)

[Answer]: A. The presenter / demo owner makes final scope calls; the engineer can flag technical blockers but does not change scope unilaterally.

---

## Q7. Are there communication requirements or a reporting cadence?

A. None - this is a one-off demo, no ongoing reporting cadence is needed.
B. Post-event: share the recorded demo and resulting committed artifact state with the team.
C. Both A and B.
D. Other requirements exist.
X. Other (please specify)

[Answer]: B. Post-event: share the recorded demo and resulting committed artifact state with the team.

---

## Q8. The workflow was started with the scope `health-dashboard-demo`. Does that scope match the intended product boundary?

The `health-dashboard-demo` scope runs 13 of 33 stages at Minimal depth: Intent Capture, Scope Definition, Rough Mockups and Approval & Handoff in Ideation; Practices Discovery, Requirements Analysis, Domain Design and Units Generation in Inception; then Code Generation and Build & Test for the health classification and dashboard unit (C1). The product boundary is a mock-data dashboard only: no real AWS, CloudWatch, login, alerts or deployment.

A. Yes - confirm the workflow-selected scope `health-dashboard-demo` and the mock-data-only product boundary.
B. No - define a different product boundary (please describe).
C. Not yet defined.
X. Other (please specify)

[Answer]: A. Yes - confirm the workflow-selected scope `health-dashboard-demo` and the mock-data-only product boundary.

---

## Assumptions & Open Questions

- [assumption] The four fixture resources in `src/data/resources.json` (two EC2, one RDS, one ALB) are the authoritative data for all acceptance criteria; no additional resources will be added during Construction.
- [assumption] Invalid CPU values (<0, >100, NaN) are treated as Unknown - this is proposed in the draft inputs but has not been formally confirmed through this workflow.
- [assumption] Response time is displayed for context only and does not influence health status unless explicitly approved.
- [assumption] "Run Inception only; Construction unit C1 ... is to be left unimplemented" means the workflow will proceed through all Inception stages and stop before implementing C1 code - the AI-DLC workflow itself, not the application code, is the primary deliverable of this session.

---

## Consolidated Summary Confirmation

- Looks correct
- Request changes

[Answer]: Looks correct
Looks correct
