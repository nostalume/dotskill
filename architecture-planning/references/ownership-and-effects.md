# Ownership and effects

Use this lens when decisions concern authority, admission, mutation, process
boundaries, configuration, or adapters.

## Model

Map each concept to one owner for creation, validation, mutation, serialization,
and release. Separate:

```text
raw observation -> admission -> deterministic decision -> effect -> receipt
```

- Admission turns runtime facts into values whose claims are explicit.
- A functional core computes complete results from admitted immutable inputs.
- An effect shell owns I/O, clocks, randomness, logging, persistence, and host
  mutation; do not wrap hidden globals in nominally pure helpers.
- A CLI owns parsing, streams, exit status, cancellation, and rendering. Domain
  owners retain validation, planning, state transitions, and reusable effects.
- Configuration fields are declarative source, generated target, mutable state,
  secret, recovery data, or machine fact. Each field has one writer and one
  conflict rule.
- Resources and adapters are orthogonal to behavior. Runtime policy belongs at
  adapter boundaries, not in domain type signatures.

## Decisions to close

1. What is authoritative, derived, cached, or process-local?
2. Where is raw input admitted, and can validation be repeated inconsistently?
3. Which decisions are deterministic and directly testable?
4. Which owner performs each effect and observes its postcondition?
5. Does a proposed abstraction own policy, evidence, or real variation?
6. Can one vertical path replace the old owner without parallel scaffolding?

## Laws

- Same admitted input yields the same deterministic result.
- Effects occur only in named owners and preserve failure semantics.
- Expensive intermediates are computed once; projections do not recompute.
- No field, state transition, or capability has two authoritative writers.
- A new abstraction needs multiple coherent consumers or a hard boundary.
- Architectural ownership changes require a frozen plan; local cleanup cannot
  smuggle them into implementation.
