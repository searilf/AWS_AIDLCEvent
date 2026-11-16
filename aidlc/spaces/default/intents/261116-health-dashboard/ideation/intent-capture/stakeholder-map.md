# Stakeholder Map — Infrastructure Health Monitoring Dashboard

## Sources

- [Q2] Q2: Conference audience / technical audience member observing the AI-DLC live demo.
- [Q5] Q5: Presenter — demo flows smoothly, stays within time, accurately represents AI-DLC.
- [Q6] Q6: Presenter makes final scope calls; engineer flags technical blockers.
- [Q7] Q7: Post-event: share recorded demo and committed artifact state with the team.
- [desc] Initial description: "Build an Infrastructure Health Monitoring Dashboard (mock EC2, RDS, ALB data; React/TypeScript/Vite/Vitest). Draft inputs: docs/01-demo-specification.md and docs/02-inception-decisions.md."

---

## Key Stakeholders

| Role | Interest / Concern | Authority | Source |
|------|--------------------|-----------|--------|
| Presenter | Demo flows smoothly and within the 10–12 minute technical window; AI-DLC is represented accurately | Final scope and content decisions | [Q5][Q6] |
| Engineer (operating Kiro/Cursor live) | Construction unit completes and tests pass within the session; no unexpected blockers | Flags technical blockers; does not change scope unilaterally | [Q6][desc] |
| Conference audience | Demo is comprehensible and credible; can follow the AI-DLC workflow narrative | Observers only; no decision authority | [Q2][desc] |

## Decision-Makers vs. Influencers

| Role | Type | Scope |
|------|------|-------|
| Presenter | **Decision-maker** — owns demo scope and content | Demo script, stage selection, what gets shown |
| Engineer | **Influencer** — surfaces technical constraints | Implementation feasibility, test reliability |
| Conference audience | **Neither** — passive observers during the event | N/A |

## Communication Requirements

| What | Who | When | Source |
|------|-----|------|--------|
| Recorded demo video | Team | Post-event | [Q7] |
| Committed AI-DLC artifact state (aidlc/ workspace) | Team | Post-event (pushed to shared repo) | [Q7] |

## Assumptions & Open Questions

- [assumption] No formal sign-off or review process exists beyond the presenter's approval during the AI-DLC workflow gates; there is no separate stakeholder review panel.
- [assumption] "Team" in the post-event communication refers to the AWS Labs / AI-DLC team; the exact distribution list has not been confirmed.
