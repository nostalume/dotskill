# Conformance review

Review the actual final diff after implementation feedback and before delivery
verification. Planned pseudocode and predicted file shape are not evidence. Judge
the diff against the authorized contract, current architecture, repository rules,
and the nearest maintained analogues.

When the diff materially changes flow, error handling, effects/resources,
abstraction, compatibility or cost, apply the
[implementation normal form](implementation-normal-form.md) as a preservation
review. It consumes settled constraints; it does not authorize a new architecture.

## Review map

1. **Domain:** vocabulary, identities, legal states/transitions, invariant owners,
   and refusal conditions still express the settled meaning.
2. **Authority and effects:** each fact, policy, mutation, and effect has one owner;
   deterministic decisions remain separated from I/O, clocks, randomness,
   persistence, logging, and host capabilities.
3. **Representation and flow:** untyped input is admitted once; variants and
   failures are explicit; transformations are shallow and composable; expensive
   values are not repeatedly interpreted or recomputed; terminal delegation adds
   no relay work and preserves result, error, cancellation, and resource handoff.
4. **Failure ownership:** each handler owns bounded recovery, settled contract
   translation with cause, compensation, resource cleanup, or necessary consumer
   context. Otherwise the original failure propagates without duplicate logging,
   generic wrapping, blind retry, swallowed cancellation, or hidden partial state.
5. **Contracts and compatibility:** public behavior, errors, schemas, sync/async
   parity, and named compatibility windows match the task and live consumers.
6. **Resources and cost:** acquisition, release, recovery, bounds, backpressure,
   allocations, copies, I/O, concurrency, and caches have explicit owners and meet
   any stated budget.
7. **Local code style:** formatter, linter, type/build policy, applicable
   instructions, and multiple maintained analogues support the chosen structure.
   Personal preference alone is not a blocker.
8. **Change economy:** no parallel authority, relay-only abstraction, speculative
   generality, compatibility residue without a consumer, or unrelated cleanup has
   entered the diff.
9. **Evidence mapping:** every changed claim has claim-appropriate development
   feedback and a final verification obligation; docs, automation, and release
   impact are stated.

## Findings and feedback

Classify each finding:

- **Blocker:** violates the accepted contract or invariant, duplicates authority,
  hides an effect/failure, makes work or lifecycle materially unsafe/unbounded,
  breaks a supported consumer, lacks required evidence, or violates an evidenced
  repository gate.
- **Warning:** maintainability, cost, or consistency concern that does not currently
  violate an accepted claim; accept explicitly or correct it.
- **Note:** non-gating observation or follow-up outside the authorized scope.

Fix a local implementation defect and repeat the affected feedback. Reopen the
smallest architecture decision when the diff contradicts governing meaning,
ownership, compatibility, lifecycle, or cost. Stop for user direction when the
only resolution materially changes the requested scope or policy.

The review is complete only when no blocker remains, warnings are resolved or
explicitly accepted, and every later edit has caused the affected review slice to
be repeated.
