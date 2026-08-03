# Types, laws, and numerics

Use this lens when API validity depends on mathematical relationships, runtime
identity, typestate, sparse structure, orientation, scale, or solver policy.

## Classify claims

Classify every fact as static, finite literal, runtime-admitted, combinatorial,
metric, or numerical. Static types may encode bounded relationships; they must
not claim unbounded arithmetic or runtime identity the language cannot prove.

- Constructors admit runtime identity once into a real owner.
- Generic/associated types express valid domains, codomains, capabilities, and
  finite transitions. Avoid marker-only results, erased-generic dispatch,
  overload explosion, dynamic class generation, and hidden casts.
- Prove checker behavior with pinned positive and negative fixtures; checker
  success is not a mathematical proof.

## Separate mathematical owners

- Keep representation, topology, geometry, algebra, duality, and numerical
  policy distinct.
- Signed incidence owns orientation; Boolean support owns adjacency/set
  relations. General sparse maps must not assume a manifold specialization.
- Test shapes, coefficient domains, orientation reversal, composition,
  `boundary ∘ boundary = 0`, symmetry, adjoint/duality, and other applicable laws.

## Scale and solvers

- State physical dimensions and expected scaling exponents before implementation.
- Normalize fragile local geometry deliberately and restore dimensions exactly.
  Do not repair scale problems with one global epsilon or silent clipping.
- Separate sparse pattern from values, backward residual from forward error, and
  sign truth from conditioning. Report failure when bounds are indeterminate.
- Benchmark representative sparsity and scales only after laws pass; avoid dense
  intermediates and mutable caches without invalidation ownership.

Hard gate: domains and owners are explicit; invalid static examples fail;
runtime admission rejects false claims; laws pass across dimension, orientation,
degeneracy, and scale; diagnostics do not silently change caller policy.
