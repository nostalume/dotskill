---
name: system-mutation
description: Inspect, plan, execute, or test bounded host changes, including tool installation and registration, file organization and undo, cross-platform configuration, PowerShell providers, and backup migrations with explicit authority and recovery.
---

# System Mutation

Use this skill for requested operations or software that changes a host: files,
accounts, packages, services, configuration, repositories, or external tool state.
Keep discovery and planning
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
- Real mutation requires explicit user approval. Reuse existing authority for
  unchanged scope and preconditions; ask only for a missing or changed effect.
- Success is proved by post-observation, not by a zero exit code alone.

The request names the operation and postcondition, exact targets/exclusions,
source identities and preconditions, relevant consumer or destination, conflict
policy, authority and resource bounds. Mode-specific references add only their
necessary fields. Preview/inspection ends without apply; verify does not silently
install or repair; undo does not repeat the original operation.

## Receipt and recovery

Record intent before each effect and observed state afterwards, with operation
identity, changed locations/configuration, completed and unapplied work, checks,
losses and available recovery. Distinguish complete, partial, unavailable, failed,
refused and cancelled outcomes; preserve earlier effects without hiding terminal
refusal or cancellation. Complete means the requested operation's postconditions
were observed, not that every lifecycle step ran.

After interruption between an effect and its receipt, reconcile actual source,
destination and intermediate states with intent before resuming. Missing log entries
do not prove absence of effects. Stop affected work when identity is ambiguous;
never blindly repeat an operation or roll back over later user changes.
Recovery requires current identities, usable preserved state and authority for its
effects. Record recovery failures alongside the primary outcome. A rollback plan
is not executed recovery, and not every external effect is reversible.

## Workflow

1. Classify the owned state, generated state, mutable state, secrets, and host facts.
2. Probe capabilities with harmless authoritative operations.
3. Build a typed observation; preserve unavailable, unauthorized, ambiguous, and
   failed outcomes instead of collapsing them.
4. Derive a minimal plan and state its approval and rollback boundaries.
5. Reject stale observations immediately before admission when races matter.
6. Apply one bounded effect at a time and retain exact receipts.
7. Re-observe the target and prove the requested postconditions.
8. For implemented mutation software, exercise relevant retry, partial failure,
   timeout, cleanup and idempotency paths. For direct operations, verify the actual
   effects and recovery state without inducing unrelated host failures.

## Testing gate

For implemented mutation software, select applicable layers:

1. Pure tests for observation-to-plan behavior.
2. Adapter tests with injected effects and deterministic failures.
3. Disposable integration tests with unique roots, timeouts, before/after
   snapshots, and residue checks.

Do not run a real-host integration test merely because it is convenient.

## Routed references

- External CLI/MCP/API installation, registration and consumer verification:
  [external integration](references/external-integration.md)
- Directory classification, duplicate handling, moves and undo:
  [file organization](references/file-organization.md)
- Host tools, capability probes, PowerShell, and side-effect tests:
  [host-adapters](references/host-adapters.md)
- Cross-platform configuration and dotfiles:
  [configuration](references/configuration.md)
- Encrypted backup repository migration:
  [backup-repository](references/backup-repository.md)

## Stop line

Stop before apply when the target, authority, ownership, approval, rollback, or
postcondition is not concrete. Report the missing contract instead of improvising.
