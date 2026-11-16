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

## 4. Next steps for the engineer (Kiro IDE)

The engineer works in **Kiro IDE**, not Kiro CLI. Note: this AI-DLC install targets the Kiro CLI harness
(`AGENTS.md`); in Kiro IDE only the hooks in `.kiro/hooks/*.kiro.hook` run, so rehearse the whole flow before the event.

### Step 1 - Get the project and check the baseline

1. `git clone https://github.com/searilf/AWS_AIDLCEvent.git` and open the folder in Kiro IDE.
2. In the Kiro IDE terminal: `npm install`, `npm run test`, `npm run build`. Record the real results
   (the C1 tests are skipped on purpose; do not claim they passed).

### Step 2 - Install and check AI-DLC

1. Install `aidlc` from the official release: https://github.com/awslabs/aidlc-workflows
2. In the Kiro IDE terminal, run `aidlc doctor`. Expect 0 problems; warnings are advisory.

### Step 3 - Test the human-presence blocker FIRST (about 5 minutes)

1. Press **Ctrl+Shift+P**, run **Developer: Reload Window** (Kiro IDE loads hooks at window start).
2. Open the **Agent Hooks** panel and confirm `aidlc-record-human-turn` is listed and enabled.
3. Send any short message in the Kiro IDE chat.
4. In the terminal, run `aidlc doctor --verbose` and find the line **"Human-turn receipts"**.
   - **More than 0 HUMAN_TURN rows:** human approvals work on this machine. Go to Step 4.
   - **Still 0:** the same bug as section 2 item 1. AI-DLC approval gates (including the live demo) will refuse every
     answer. Stop, tell the owner, and report the bug to awslabs/aidlc-workflows with the evidence in section 2.

### Step 4 - Restart Inception cleanly (only if Step 3 passed)

Agree with the owner first. The recommended path:

1. In Kiro IDE chat: `/aidlc intent archive 261116-health-dashboard` (this intent has a non-genuine approval and the
   wrong `poc` scope; see section 2).
2. Start a new intent on the approved plan: `/aidlc --scope health-dashboard-demo` followed by the project description.
3. Answer the questions with the owner, reusing the decisions in section 3. The owner must give every approval
   in the chat; the engineer does not approve on the owner's behalf.
4. Never use `AIDLC_SKIP_HUMAN_PRESENCE_GUARD` or any other guard bypass. If a gate refuses an answer, stop and investigate.

### Step 5 - Before the event

1. After genuine Inception approval: commit, then `git tag inception-approved`.
2. Build C1 through AI-DLC Construction (CPU classification, status badges, summary cards, enable the C1 tests),
   run `npm run test` and `npm run build`, commit, then `git tag demo-completed`.
3. Rehearse the live change request (classify ALB by response time; get the thresholds from the owner), time it
   against the 10-12 minute slot, then `git tag cr-completed` as the fallback.
4. Check the Kiro account used on stage has enough usage left (the owner's account hit its monthly limit).
5. Push branches and tags only with the owner's permission: `git push origin master --tags`.

### Step 6 - On the day

1. Start from `demo-completed`: show the dashboard and the AI-DLC record (requirements, unit plan, audit trail).
2. Run the change request live in Kiro IDE with the owner or presenter giving the approvals.
3. If it stalls, `git checkout cr-completed` and show the rehearsed result, stating that it is the rehearsal run.
   Full script and prompts: section 5.

## 5. Live demo script - 10 minutes (Kiro IDE)

Ten minutes is realistic only if everything below is prepared before the event. On stage, only the change
request runs. This timing has not been measured yet; confirm it in rehearsal.

### 5.1 Ready before going on stage

- Repo checked out at tag `demo-completed` (C1 built, tests passing).
- The short change-request scope `cr-alb-latency` exists (created in rehearsal, see 5.2).
- `aidlc doctor --verbose` shows Human-turn receipts greater than 0.
- The Kiro account used on stage has usage left.
- One full rehearsal finished in 8 minutes or less, and tag `cr-completed` exists as the fallback.
- **ALB thresholds confirmed by the owner.** The values below (300 ms / 800 ms) are PROPOSED placeholders, not approved.

### 5.2 Rehearsal prompt (before the event, in Kiro IDE chat)

Creates a 3-stage plan for the change request. The owner approves the plan at its gate.

```
/aidlc compose "Small change request on the existing health dashboard: change how the ALB health status is classified. Only these stages: requirements-analysis, code-generation, build-and-test. Skip every Ideation stage, reverse-engineering, design stages, CI and all Operation stages. Name the scope cr-alb-latency, depth Minimal."
```

Optional, to save time (a recorded AI-DLC setting, not a bypass; agree it with the owner):

```
/aidlc --review none
```

### 5.3 On-stage prompt (one message)

```
/aidlc --new-intent --scope cr-alb-latency "Change request CR-01: classify the ALB by response time instead of showing Unknown.
Rules (already approved by the product owner): responseTimeMs < 300 = Healthy; 300 to < 800 = Warning; >= 800 = Critical; null or invalid (< 0, NaN) = Unknown.
CPU rules for EC2 and RDS stay unchanged. Response time still does not affect EC2 or RDS status.
Change only src/domain/health.ts (classifyResource), the dashboard summary counts, and tests in tests/health.test.ts.
Add boundary tests for 0, 299, 300, 799, 800 ms and null.
Expected result with the fixture: ALB (120 ms) becomes Healthy; counts become Healthy 2, Warning 1, Critical 1, Unknown 0.
Mock data only. No new dependencies, no AWS calls. Do not ask clarifying questions unless a rule above is contradictory."
```

Replace 300 / 800 with the owner's approved values before rehearsal, and update the boundary tests and the
expected result to match. With the current fixture the ALB has `responseTimeMs: 120`.

### 5.4 What to type during the run

- Interaction mode question: `1` (Guide me).
- Summary confirmation and each approval gate: `1` (Looks correct / Approve). The owner or presenter gives
  the approval out loud; the engineer types it only on their instruction.
- If the agent asks anything else: `Use the rules in CR-01 exactly.`

### 5.5 Timing plan

| Minute | What the audience sees |
|---|---|
| 0-2 | Dashboard at `demo-completed` (ALB shows Unknown) and a quick look at the AI-DLC record |
| 2-3 | Engineer types the prompt from 5.3 |
| 3-5 | Requirements analysis, then approval |
| 5-8 | Code generation: code and tests written, then approval |
| 8-9 | Build and test: real `npm run test` and `npm run build` output, then approval |
| 9-10 | Refresh the dashboard: ALB changes from Unknown to Healthy, summary counts change |

### 5.6 If it runs over

At minute 8, if it is not finished: stop, run `git checkout cr-completed` and `npm run dev`, and tell the
audience: "This is the rehearsal run of the same change request." Never claim tests passed if they did not run.

## 6. Security

No AWS credentials, tokens or secrets are in this repository. Machine-local AI-DLC state (`.aidlc-engine/`,
cursors, clone id, turn counter) is excluded by `.gitignore`.
