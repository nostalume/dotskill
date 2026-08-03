---
name: system-mutation
description: Design, implement, or test bounded host mutations, cross-platform configuration, PowerShell providers, capability probes, and backup migrations with explicit admission, receipts, and recovery.
---

# System Mutation

Use this skill when software changes a host: files, accounts, packages, services,
configuration, repositories, or external tool state. Keep discovery and planning
safe; make each admitted effect explicit and observable.

## Contract

Model one lifecycle:

`desired -> observe -> plan -> admit -> apply -> receipt`

- `desired` describes the requested end state without host facts.
- `observe` records fresh identity, capability, policy, and current state.
- `plan` is deterministic and non-mutating.
- `admit` is the explicit boundary for approval and stale-observation rejection.
- `apply` performs only the bounded effects in the admitted plan.
- `receipt` records outcomes, cleanup, and a fresh post-observation.

Hard invariants:

- Observation and planning never mutate the host.
- Apply never guesses identity, capability, ownership, or precedence.
- Every effect has an exact target, precondition, postcondition, and failure result.
- Partial failure preserves enough evidence for retry, cleanup, or recovery.
- Ordinary tests never mutate the developer host.
- Real mutation requires explicit user approval.
- Success is proved by post-observation, not by a zero exit code alone.

## Workflow

1. Classify the owned state, generated state, mutable state, secrets, and host facts.
2. Probe capabilities with harmless authoritative operations.
3. Build a typed observation; preserve unavailable, unauthorized, ambiguous, and
   failed outcomes instead of collapsing them.
4. Derive a minimal plan and state its approval and rollback boundaries.
5. Reject stale observations immediately before admission when races matter.
6. Apply one bounded effect at a time and retain exact receipts.
7. Re-observe the target and prove the requested postconditions.
8. Exercise retry, partial failure, timeout, cleanup, and idempotency paths.

## Testing gate

Use three layers:

1. Pure tests for observation-to-plan behavior.
2. Adapter tests with injected effects and deterministic failures.
3. Disposable integration tests with unique roots, timeouts, before/after
   snapshots, and residue checks.

Do not run a real-host integration test merely because it is convenient.

## Routed references

- Host tools, capability probes, PowerShell, and side-effect tests:
  [host-adapters](references/host-adapters.md)
- Cross-platform configuration and dotfiles:
  [configuration](references/configuration.md)
- Encrypted backup repository migration:
  [backup-repository](references/backup-repository.md)

## Stop line

Stop before apply when the target, authority, ownership, approval, rollback, or
postcondition is not concrete. Report the missing contract instead of improvising.
