# Engineer Runbook — Live Demo (11 minutes)

## Preflight (not on stage)
- [ ] Rehearsal completed twice from CLEAN clone.
- [ ] Kiro IDE signed in; `aidlc doctor` passes; correct AI-DLC and Kiro versions recorded.
- [ ] Real intent selected; verified it is genuinely ready for Construction C1.
- [ ] `inception-approved` tag exists, and C1 feature is not already implemented.
- [ ] Node packages installed and app run verified: `npm run dev`.
- [ ] A second separate `demo-completed` rehearsal tag contains real implementation + logs.
- [ ] Screen sharing, large editor font, zoom, network access, projector and terminal working.
- [ ] No production AWS credentials or customer data.

## On stage
**00:00–02:00** Clone/checkout known checkpoint. Briefly show `aidlc/` artifacts and requirements, not lengthy file trees.

**02:00–03:00** Run `aidlc doctor` (if needed); select actual intent in Kiro; show current stage and the specific C1 unit. Use official `aidlc` commands/agent UI matching the installed release.

**03:00–07:00** Resume AI-DLC, ask agent to implement approved C1. Demonstrate genuine approval at a real gate, if one occurs. Do not build another feature.

**07:00–09:00** Remove `.skip` on Construction tests; run `npm run test` and `npm run build`; fix straightforward failures if within timebox.

**09:00–10:00** Open dashboard at local Vite URL; show status counts and ALB Unknown. No claim that it is real CloudWatch.

**10:00–11:00** Show git diff plus tests and hand over to presenter for summary.

## Timebox policy
At minute 07:00, if the live agent is still constructing, stop waiting and switch to the real rehearsal `demo-completed` checkpoint **on a separate checkout**; explicitly say it is the pre-validated fallback. Show tests and UI from that checkpoint; do not misrepresent it as just generated live.

## Safety
No automatic approvals, hidden prewritten implementation in the inception checkpoint, fake logs, fake test green status, production resource claims or unapproved git pushes.
