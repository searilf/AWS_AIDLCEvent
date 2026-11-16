# Inception Decisions — Human Approval Sheet (NOT APPROVED YET)

This document is a *proposal* for real AI-DLC Inception. Do not mark approved until a human answers all material questions in the actual AI-DLC workflow. AI-DLC's generated artifacts and approval audit are the source of truth, not this sheet.

| Decision | Proposed answer for a human to review | Status |
|---|---|---|
| Goal | Mock infrastructure health status dashboard | Needs approval |
| User | Operations engineer | Needs approval |
| Stack | React + TypeScript + Vite; Vitest | Needs approval |
| C1 unit | CPU classification + badge and summary counts | Needs approval |
| Thresholds | Healthy <70; Warning 70–<90; Critical >=90 | Needs approval |
| Missing CPU | Unknown; ALB is Unknown | Needs approval |
| Invalid CPU | Unknown (proposed) | Needs approval |
| In-scope resources | Mock EC2, RDS and ALB | Needs approval |
| Live AWS integration | Excluded | Needs approval |
| Quality | Tests + build + human visual review | Needs approval |

## Inception checkpoint requirements
- AI-DLC installer has created authentic `aidlc/` workspace and compatible harness files.
- A **real intent** exists in AI-DLC registry with its own `aidlc-state.md` and requisite artifacts.
- Human has reviewed the plan, stage outputs, and any critical approvals in Cursor.
- Current workflow is at a **legitimate Construction entry checkpoint** for Unit C1, not an artificial stage jump.
- Inception artifacts correspond to the exact source fixture and agreed boundaries.
- All shared records committed; no local pointers, tokens or machine secrets committed.
- Another operator successfully clones into a clean directory, selects the intent, and can resume in Kiro.
- `inception-approved` Git tag points to the last good commit BEFORE implementing C1.
