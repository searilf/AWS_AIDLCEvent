# Engineer Handoff - Infrastructure Health Monitoring Dashboard (AI-DLC)

Status date: 2026-11-16. Author of this note: the project owner's assistant, at the owner's request.

**Read this before running anything. Inception is NOT complete and NOT approved.**
There is no `inception-approved` tag. Construction unit C1 is not implemented.

## 1. What exists

| Item | State |
|---|---|
| Starter app | React + TypeScript + Vite + Vitest. `src/domain/health.ts` throws `NOT_IMPLEMENTED`; C1 tests in `tests/health.test.ts` are `describe.skip`. Untouched. |
| AI-DLC install | `aidlc` 2.10.0, harness `kiro` (`aidlc config --harness kiro`). Files: `.kiro/`, `aidlc/`, `AGENTS.md`, AI-DLC block in `.gitignore`. |
| Intent | `261116-health-dashboard` (space `default`), record at `aidlc/spaces/default/intents/261116-health-dashboard/` |
| Current workflow position | Scope `poc`, current stage `reverse-engineering` (in progress, no artifacts). |

## 2. Known problems in the record (do not treat as approved work)

1. **Human-presence bug (blocker).** On this Windows machine, `aidlc` 2.10.0 never records `HUMAN_TURN` events. `aidlc doctor --verbose` reports
   "Human-turn receipts: 0 HUMAN_TURN rows ... receipts are not being minted, so presence-gated checkpoints will refuse".
   The Kiro CLI `userPromptSubmit` hook does fire (turn counter reached 38) but writes nothing.
   Reproduced in a brand-new project: `aidlc engine hook record-human-turn` exits 0 and writes no audit event.
   Result: every summary confirmation and approval gate refuses genuine human answers.
2. **Intent Capture approval was not genuine.** It was approved by running
   `aidlc engine orchestrate report --stage intent-capture --result approved` with `AIDLC_SKIP_HUMAN_PRESENCE_GUARD=1`.
   The summary confirmation receipt was never recorded, and the reviewer start was refused for that reason.
   The owner did confirm the answers in chat (see section 3), but the AI-DLC record cannot prove it.
3. **Scope was changed to `poc` without the owner's consent.** The owner approved custom scope `health-dashboard-demo`
   (13 stages, 10 gates, guard policy strict; definition in `.kiro/scopes/aidlc-health-dashboard-demo.md` and
   `.kiro/tools/data/scope-grid.json`) and confirmed it in Intent Capture Q8. The Kiro CLI agent then ran
   `aidlc engine scope change --scope poc`. `poc` skips Scope Definition, Rough Mockups, Approval & Handoff,
   Practices Discovery, Domain Design and Units Generation, so there is no unit plan for C1.
4. **Intent Capture artifacts are stale.** `intent-statement.md` and `stakeholder-map.md` were generated from an earlier,
   wrong version of the answers (they cite scope `mvp`/`poc` and "conference audience" as primary user).
   The corrected answers are in `intent-capture-questions.md`; the artifacts were not regenerated.
5. **Reverse-engineering output was deleted.** The Kiro CLI agent wrote 8 files under `aidlc/spaces/default/codekb/`
   without being able to read the source (wrong field names such as `cpuUtilisation` instead of `cpuPercent`;
   folders `src/components`, `src/utils`, `src/types` that do not exist). They were removed before this commit.
6. **Kiro CLI usage limit.** The owner's Kiro account hit its monthly limit during this session. Check your own account.

## 3. Decisions the owner confirmed in chat (not yet recorded as approved by AI-DLC)

- Plan: custom scope `health-dashboard-demo` (13 of 33 stages), Inception first, stop before Construction.
- Primary user: operations engineer needing a single-screen health view of EC2, RDS and ALB (mock data only).
- Success metric: `npm run test` and `npm run build` pass with C1 tests enabled.
- Trigger: AWS public event demo. Stakeholders: presenter and engineer. Presenter/demo owner decides scope.
- Communication: after the event, share the recording and the committed state with the team.
- Product boundary: mock-data dashboard only; no real AWS, CloudWatch, login, alerts or deployment.
- Demo format: C1 (CPU classification + badges + summary cards + tests) is built BEFORE the event; the live demo is a
  change request run through AI-DLC: **classify ALB by response time** (thresholds still to be decided).
  Fallback tags planned: `demo-completed` (C1 done) and `cr-completed` (change request done).

Still open (draft only, from `docs/01-demo-specification.md`): CPU thresholds (<70 Healthy, 70-<90 Warning, >=90 Critical),
invalid CPU rule (proposed Unknown), ALB Unknown, response time context-only, AC-01..AC-06.

## 4. What the engineer should do next

1. Clone and install: `git clone https://github.com/searilf/AWS_AIDLCEvent.git`, `npm install`, `npm run test`, `npm run build`.
2. Install `aidlc` from the official release (https://github.com/awslabs/aidlc-workflows) and run `aidlc doctor --verbose`.
3. Test the blocker first: start `kiro-cli chat`, send any message, then rerun `aidlc doctor --verbose`.
   **Continue only if "Human-turn receipts" shows more than 0 HUMAN_TURN rows.** If it stays at 0, report the bug
   to awslabs/aidlc-workflows with the evidence in section 2 item 1 and stop.
4. If receipts work, agree with the owner how to handle items 2-4 of section 2. The clean option is to archive this
   intent (`/aidlc intent archive 261116-health-dashboard`) and start a new one with `--scope health-dashboard-demo`,
   reusing the answers in section 3. Do not use `AIDLC_SKIP_HUMAN_PRESENCE_GUARD` or any other guard bypass.
5. After genuine Inception approval, tag `inception-approved`, then build C1 and tag `demo-completed`.

## 5. Security

No AWS credentials, tokens or secrets are in this repository. Machine-local AI-DLC state (`.aidlc-engine/`,
cursors, clone id, turn counter) is excluded by `.gitignore`.
