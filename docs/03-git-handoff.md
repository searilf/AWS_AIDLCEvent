# Git & AI-DLC Handoff — From Cursor Preparation to Kiro Demo

## Why not create AI-DLC files manually?
The official installer generates `.cursor/`, `.kiro/`, `aidlc/`, settings, skills, hooks and method memory. The *workflow* writes the actual intent artifacts, state, stage ledger and decisions. Fabricating these files or just creating `aidlc/` directories will not demonstrate genuine resumption.

## Setup flow (Cursor computer)
1. Extract project, `git init`, and create a GitHub repository **only when owner approves repository destination and visibility**.
2. Install the `aidlc` native tool from official GitHub release after inspecting installer. For Windows use the documented PowerShell route; on macOS/Linux use the documented shell route.
3. Run `aidlc config --harness cursor`, then `aidlc doctor`.
4. Set up Kiro for the **same project** with `aidlc config --harness kiro`, then `aidlc doctor`. Ensure both projections remain usable; version-specific behavior may differ.
5. Open Cursor and invoke `/aidlc` with the project purpose. Do not instruct Cursor to directly synthesize state. Review its proposed scope and make approval decisions honestly.
6. Execute Inception in its actual stages and stop at the real boundary before implementing live Unit C1.
7. Confirm `src/domain/health.ts` still contains NOT_IMPLEMENTED and the health acceptance tests are still skipped.
8. Review `git status`, remove secrets, commit shared AI-DLC records and harness config.
9. Record actual versions and intent slug in `demo/LOCAL-DEMO-VALUES.md` (create this file; commit only non-secret values).
10. Create a Git tag `inception-approved` at the ready commit, and push branch/tag to the approved GitHub destination.

## Clean clone validation (engineer machine)
1. Clone into new directory and checkout the approved checkpoint.
2. Ensure native `aidlc` runtime with same version is present and compatible Kiro is signed in.
3. `aidlc doctor`; if needed follow official `aidlc config` documentation to refresh projections without overwriting shared artifacts.
4. Open Kiro IDE, choose the `aidlc` agent; select the real intent using `/aidlc intent <actual-slug>` because active-intent pointer is gitignored.
5. Resume normally. **Never mark skipped stages as approved** and do not use a phase jump as a substitute for authentic Inception.
6. Rehearse full C1 construction, enable health tests, run tests/build and open resulting UI.
7. In the **rehearsal only**, commit completed state to separate `demo-completed` tag/branch; preserve `inception-approved` untouched.

## Note on tools
`aidlc config --harness cursor` and `aidlc config --harness kiro` are official configuration commands. Browser, local Cursor and Kiro must run compatible AI-DLC runtimes. If setup cannot safely support both harnesses in one project, choose Kiro for both Inception and Construction rather than claiming cross-harness resumption works.

Reference: https://github.com/awslabs/aidlc-workflows/blob/main/docs/guide/03-spaces-and-intents.md
