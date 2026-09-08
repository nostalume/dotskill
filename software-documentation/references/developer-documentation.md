# Developer documentation

Write for a maintainer changing or diagnosing the system. Explain governing
decisions and safe extension points; source remains the authority for incidental
implementation detail.

## Maintainer model

Cover the parts required by the change:

- purpose, scope, non-goals, domain vocabulary, identities, invariants, and legal
  transitions;
- authoritative owners, dependency direction, admitted dataflow, and where
  effects, resources, configuration, and runtime policy live;
- public and internal boundaries, compatibility promises, extension points, and
  the reason each material abstraction exists;
- failure, cancellation, retry, cleanup, recovery, concurrency, and cost model;
- canonical build, format, lint, type, test, debug, benchmark, packaging, and local
  reproduction commands;
- known limitations, decision provenance, and the evidence or requirement that
  should reopen the design.

Prefer a small ownership/dataflow sketch when it conveys relationships more clearly
than prose. Avoid inventories that merely mirror directories or private helpers.
Link to authoritative schemas, decisions, and operational runbooks rather than
copying rules into multiple owners.

## Maintainer checks

Have the named canonical commands run from the documented preconditions. Trace one
ordinary change or failure through the described owners and verify that source and
docs agree. Check new extension guidance against a minimal implementation or
existing maintained analogue; do not promise an extension seam that only exists in
proposed design.
