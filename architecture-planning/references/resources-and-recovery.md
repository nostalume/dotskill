# Resources and recovery

Use this lens only for bounded work and resource lifetime across success, failure,
cancellation, races, retries, or process death. General decision ownership belongs
to authority; public failure promises to contracts.

## Lifecycle

- Define acquire/reserve -> initialize -> publish/commit -> claim/adopt ->
  release/recover. Crash at every edge and state the surviving resource state.
- Identify the durable record or protocol transition that proves commitment or
  ownership transfer. Allocator hints, pointers, indexes, and summaries are
  recoverable projections, not lifecycle truth.
- Separate behavior from geometry and physical representation. Preserve lifecycle
  invariants across architectures without coercing one ABI into another.
- A process-local allocator may supply blocks but cannot establish recoverable
  shared ownership. Isolate non-recoverable heaps.
- Distinguish transport adoption from application processing; do not silently
  redeliver after ownership transfer.

## Bounded ingestion and publication

- Treat encoded headers, filenames, lengths, and timestamps as untrusted hints.
- Enforce decoded-byte, entry-count, depth, memory, and time budgets while work
  occurs; reject absolute, drive, UNC, traversal, link, device, and conflicting
  archive targets unless policy admits them.
- Resolve containment at creation time where races matter. Stage privately on the
  destination filesystem with create-exclusive files.
- Publish only after complete validation using the strongest platform guarantee;
  document non-atomic fallback.

## Recovery

- Recover from durable lifecycle truth, never interrupted allocator/cache intent.
- Reclaim storage before reusing metadata that still identifies it.
- Preserve primary and cleanup errors. Retries require identity/generation and
  idempotency laws that prevent ABA, duplicate publication, or double release.

Hard gate: every resource has bounded work, explicit outcomes at every lifecycle
edge, contained publication, and recovery independent of stale hints.
