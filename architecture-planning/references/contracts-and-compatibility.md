# Contracts and compatibility

Use this lens only to define externally observable operations and migration
promises. Internal value construction belongs to representation; effect ownership
to authority; execution lifetime to recovery.

## Contract surface

Define the user operation before parser, transport, or implementation vocabulary.

For a CLI or process adapter, freeze:

- grammar, defaults, configuration/environment precedence, quoting, and `--`;
- working-directory, platform, packaged-executable, and secret behavior;
- stdout data, stderr diagnostics, and exit status;
- stable/versioned machine schemas;
- externally visible cancellation, timeout, partial-failure, and idempotency
  behavior.

For a library or protocol, freeze:

- accepted domains and legal externally visible transitions;
- error categories and preservation of source and target identity;
- sync/async behavioral parity without requiring representation parity;
- peer/version compatibility, live consumers, migration window, and deletion
  trigger.

Schema shape is part of this lens only when externally promised. The
representation lens owns how that schema is decoded into internal types.

## Durable tests

Test observable behavior, domain laws and transitions, boundary/edge/failure
semantics, and integration across real seams. Prefer black-box tests. Use
white-box tests only for a durable logical invariant that cannot be observed more
directly.

A test should survive an implementation rewrite that preserves the accepted
contract. Do not recursively test tests or freeze unpromised file layout, internal
fields, annotations, types, helper calls, or other ephemeral representation.
Static analysis and build tooling own structural and typing policy. A path or
schema field qualifies only when an external consumer is promised compatibility;
test its observable contract, not its implementation shape.

## Failure coverage

Test malformed input, unsupported variants, ambiguous dispatch, schema drift,
partial I/O, cancellation, incompatible peers, and compatibility expiry. Process
contracts require packaged-process smoke tests; library-only tests are
insufficient.

Hard gate: help, docs, parser, and schema agree; read-only operations remain
observably read-only; error and cancellation semantics survive wrapping; every
compatibility layer names a live consumer and removal gate.
