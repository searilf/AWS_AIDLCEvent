# Infrastructure Health Monitoring — AI-DLC Live Construction Demo

**Status: starter only.** This ZIP intentionally does NOT contain AI-DLC runtime/state or completed Inception. Cursor must install the official AWS Labs AI-DLC runtime, run Inception with real human approvals, and commit the resulting shared project records before this repo is presented as resumable.

## Start the local skeleton

```bash
npm install
npm run test
npm run dev
```

The app displays the resource inventory but **does not classify health** yet. `src/domain/health.ts` throws `NOT_IMPLEMENTED`, and Construction acceptance tests are deliberately skipped. This is intentional so the engineer has a visible live Construction unit to implement.

## Read before handing to Cursor

1. `docs/01-demo-specification.md`
2. `docs/02-inception-decisions.md`
3. `cursor/CURSOR-TASK.md`
4. `docs/03-git-handoff.md`
5. `demo/ENGINEER-RUNBOOK.md`
6. `demo/PRESENTER-RUN-OF-SHOW.md`

## AWS Labs AI-DLC (official)

- https://github.com/awslabs/aidlc-workflows
- https://github.com/awslabs/aidlc-workflows/blob/main/docs/guide/harnesses/cursor.md
- https://github.com/awslabs/aidlc-workflows/blob/main/docs/guide/harnesses/kiro.md
- https://github.com/awslabs/aidlc-workflows/blob/main/docs/guide/03-spaces-and-intents.md

**Important:** Each engineer needs the `aidlc` native runtime and compatible Kiro/Cursor installed locally. Shared `aidlc/` records travel in Git, while active space/intent pointers are machine-local. A clone does not automatically select the intent. Verify with `aidlc doctor` and explicitly select the committed intent in Kiro.
