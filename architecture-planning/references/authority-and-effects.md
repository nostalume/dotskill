# Authority and effects

Use this lens only to decide who controls truth, policy, mutation, and external
effects. Value shape belongs to representation; observable promises to contracts;
resource lifetime to recovery; mathematical truth to numerics.

## Model

```text
authoritative fact -> deterministic decision -> effect -> receipt
```

- Name one authority for every fact, policy choice, state transition, and effect.
- Classify state as authoritative, derived, cached, or process-local. Derived
  views never become a second writer.
- Keep deterministic decisions in a functional core. Put I/O, clocks, randomness,
  logging, persistence, host mutation, and external capabilities in named effect
  owners.
- Classify configuration as declarative source, generated target, mutable state,
  secret, recovery data, or machine fact; give every field one writer and one
  conflict rule.
- Place runtime policy at the adapter that owns it. Do not leak adapter policy
  into domain signatures or hide global authority behind pure-looking helpers.
- Add an abstraction only when it owns policy, a hard boundary, or variation
  used by multiple coherent consumers.

## Decisions to close

1. What is the source of truth, and which values are projections?
2. Which owner makes each decision and performs each effect?
3. Which postcondition or receipt proves the effect?
4. Can the new owner replace the old one without parallel authority?

Hard gate: one authority per fact and transition; deterministic decisions are
directly testable; effects occur only in named owners and preserve failure
semantics; no migration leaves two authoritative writers.
