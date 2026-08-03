# Interfaces and protocols

Use this lens for public APIs, CLIs, machine schemas, process behavior, errors,
cancellation, compatibility, or cross-process contracts.

## Contract surface

Define the user operation before parser or transport vocabulary. Assign one
owner to input admission, domain behavior, effects, and presentation.

For a CLI or process adapter, freeze:

- command grammar, defaults, configuration/environment precedence;
- working-directory and platform behavior;
- stdout data versus stderr diagnostics;
- exit status for success, expected negative outcomes, and faults;
- stable/versioned machine-readable schemas;
- cancellation, signals, timeouts, partial failure, and idempotency;
- quoting, `--` conventions, secrets, and packaged executable identity.

For library/protocol APIs, freeze:

- domains, states, legal transitions, authority, and lifecycle;
- error categories and whether wrapping preserves source and target identity;
- sync/async behavioral parity without forcing physical representation parity;
- compatibility consumers, migration window, and deletion trigger;
- runtime type/schema admission at one boundary, not check-then-reconstruct
  duplication.

## Failure tests

Test malformed inputs, unsupported variants, ambiguous dispatch, schema drift,
partial I/O, cancellation, stale authority, and incompatible peers. Process
contracts require packaged-process smokes; library-only tests are insufficient.

Hard gate: help/docs/parser/schema agree; downstream code does not redispatch;
read-only paths do not mutate; errors and cancellation retain their intended
semantics; every compatibility layer names a live consumer and removal gate.
