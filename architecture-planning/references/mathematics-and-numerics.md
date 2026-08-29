# Mathematics and numerics

Use this lens only when validity depends on a mathematical domain, law, dimension,
orientation, scale, sparse structure, conditioning, or solver policy. General
runtime admission belongs to representation.

## Claims and domains

- Classify claims as static, finite literal, combinatorial, algebraic, metric, or
  numerical. Types may encode bounded relationships; they must not claim
  unbounded arithmetic or runtime identity the language cannot prove.
- Express valid domains, codomains, capabilities, and finite transitions without
  marker-only results, erased dispatch, overload explosion, dynamic class
  generation, or hidden casts.
- Prove checker behavior with pinned positive and negative fixtures, while keeping
  mathematical proof obligations separate.

## Mathematical structures and laws

- Keep representation, topology, geometry, algebra, duality, and numerical policy
  distinct.
- Signed incidence owns orientation; Boolean support owns adjacency/set relations.
  General sparse maps do not assume a manifold specialization.
- Test shapes, coefficient domains, orientation reversal, composition,
  `boundary ∘ boundary = 0`, symmetry, adjoint/duality, and every applicable law.

## Scale and solvers

- State physical dimensions and expected scaling exponents before implementation.
- Normalize fragile local geometry deliberately and restore dimensions exactly;
  do not mask scale faults with a global epsilon or silent clipping.
- Separate sparse pattern from values, backward residual from forward error, and
  sign truth from conditioning. Report indeterminate bounds as failure.
- Benchmark representative sparsity and scale only after laws pass. Avoid dense
  intermediates and mutable caches without an explicit invalidation rule.

Hard gate: domains are explicit; invalid static examples fail; laws pass across
dimension, orientation, degeneracy, and scale; diagnostics never silently change
caller policy.
