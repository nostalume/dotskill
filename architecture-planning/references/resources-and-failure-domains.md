# Resources and failure domains

Use this lens for archives, shared storage, allocation, publication, recovery,
or other resources whose metadata can outlive a process.

## Authority

- Identify the single durable word, record, or protocol transition that decides
  ownership. Pointers, allocator hints, indexes, and summaries are derived data.
- Separate behavior from geometry and physical representation. Preserve the
  same behavioral invariant across architectures without coercing one ABI into
  another.
- Define reserve → initialize → publish/commit → claim/adopt → release/recover.
  Crash at every boundary and state who may continue, reclaim, or reject.
- A process-local allocator may supply blocks but cannot be the ownership root
  for recoverable shared objects. Isolate non-recoverable heaps explicitly.

## Bounded ingestion and publication

- Treat encoded headers, filenames, lengths, and timestamps as untrusted hints.
- Enforce actual decoded-byte, entry-count, depth, and time budgets while work
  occurs; reject absolute, drive, UNC, traversal, link, device, and conflicting
  archive targets unless policy explicitly admits them.
- Resolve containment at creation time where races matter. Stage privately on
  the destination filesystem with create-exclusive files.
- Publish only after complete validation using the strongest operation the
  platform guarantees; document any non-atomic fallback.

## Recovery

- Recovery asks the authority who owns the resource, not what an interrupted
  allocator or cache probably meant.
- Reclaim storage before exposing queue/registry metadata for reuse when that
  metadata still identifies the storage.
- Distinguish transport adoption from application processing; do not silently
  redeliver after the transport has transferred ownership.
- Preserve primary and cleanup errors; retries require generation/identity and
  idempotency rules that prevent ABA or double release.

Hard gate: every resource has one authority, bounded work, explicit crash
outcomes, contained publication, and a recovery rule independent of stale hints.
