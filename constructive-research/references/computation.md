# Research Computation

Computation has two scales:

1. **Deductive computation** is the finite construction that makes every
   consequential deduction or equation checkable inside its conceptual node.
2. **Heavy computation** is symbolic expansion, numerical solution, combinatorial
   enumeration, simulation, data transformation, or plotting large enough to
   obscure that node. Isolate it in a computation artifact.

Keep small equality witnesses with the argument. Keep raw expansions, programs,
runs, tables, and diagnostics outside it, returning compact results and boundaries.

## Deductive-computation contract

For every nontrivial claim or display, expose:

- constructed inputs and their types/domains;
- the map, composition, quotient, substitution, variation, limit, or algorithm;
- the common target that makes the comparison meaningful;
- an evaluation, identity, inverse, universal property, commuting diagram, bound,
  or reproducible certificate;
- the event, state, solution, observable, equivalence class, or other semantic
  content preserved or changed; and
- assumptions and failure boundary.

An equation must arise from this operation rather than appear first and acquire an
interpretation afterward. A definition cannot prove existence, uniqueness,
equivalence, or invariance.

For example, if `B(r)k=r` and `q=Lambda(A)^(-1)p`, “compare two routes” is not a
deduction. Compute the common endpoint:

```text
B(p)k = p
[A B(q)]k = A[B(q)k] = A q = A[Lambda(A)^(-1)p] = p
```

Then the relative map is constructed and tested:

```text
W(A,p) = B(p)^(-1) A B(q)
W(A,p)k = B(p)^(-1)[A B(q)k] = B(p)^(-1)p = k
```

This witnesses that `W(A,p)` stabilizes `k`; cocycle, unitarity, and representation
claims still require their own computations.

## Reduce before expanding

Seek invariants, quotients, symmetry-adapted decompositions, universal maps,
normal forms, spectral/variational formulations, generating functions, sufficient
statistics, graph reduction, or effective variables before components.

Compare routes by semantic transformation depth, asymptotic work and memory,
symbolic growth, conditioning, reusable intermediate structure, assumptions, and
the cost of recovering the requested observable. Short notation or a smaller formal
space is not a gain when it hides an inverse, measure, basis, solver, or recovery
map.

Use components only when they are the observable representation, no structural
reduction is known, or a local independent check needs them. Restrict to the
smallest symmetry-adapted sector, automate repetitive algebra, check signs/indices/
dimensions/boundaries, and compress the result back into an invariant statement.

## Admit the computational substrate

Choose tools from the operations that must be preserved, not from the first probe's
language:

```text
typed research request
  -> project-owned semantic policy
     (grammar, reduction order, obstruction, budget, refusal)
  -> maintained exact/symbolic/numerical substrate
  -> object, certificate, error, provenance, and boundary
```

Repeated private rational arithmetic, matrix operations, elimination, nullspaces,
tensor canonicalization, quadrature, or eigensolvers usually belong to a maintained
package. Retain a small custom kernel only when coefficient domain, rewrite
orientation, canonical form, zero policy, termination, or resource refusal is the
research object. A CAS does not supply semantic meaning; unrestricted simplification
or undecided symbolic equality is not a proof.

Prefer one pinned environment and canonical runner for a connected computation
graph. Additional runtimes, notebooks, dependency layers, or generated artifacts
need a named consumer. During migration, characterize old behavior, port one
vertical semantic slice, compare exact output or tolerance and failure, then remove
the replaced substrate rather than retaining adapters indefinitely.

## Probe, certificate, and tool

- A **probe** discriminates a candidate and may disappear after its conclusion is
  promoted.
- A **certificate** reproducibly checks one result and remains local to it.
- A **tool** generates output consumed by another node; maintain its input, output,
  refusal, provenance, and error contracts independently of tests.

A tool may be checked by a certificate but must not import one. Share code only for
demonstrated common semantics, not similar helper names.

For a generative tool, retain:

```text
Tool(data, capability, resource bound)
  -> generated structure and reusable operations
  -> correctness/recovery certificates
  -> explicit obstruction or refusal
```

Its input must not encode the answer; corrections arise from calculated failures.
Evaluate regression, transfer, and downstream use separately as defined in
[evidence-and-synthesis.md](evidence-and-synthesis.md).

## Computational leverage

Test leverage on a fixed contract:

```text
(model/dynamics, preparation, observable, accuracy)
  -> baseline route and complete cost
  -> proposed reduction and construction cost
  -> same-observable equality or controlled error
  -> recovery cost and failure boundary
```

Include discovery and construction of the reduced object. A correct quotient or
representation may be semantic compression while offering no cheaper computation.
Conversely, invertible reformulations can reduce work through locality, sparsity,
conditioning, or recursion without changing ontology.

Representation constrains channels and intertwiners; dynamics, preparation, and
observable supply the physical problem. Do not infer dynamics from symmetry alone.
General Hamiltonian families may remain intractable or undecidable; state the model
class, observable, accuracy, and resource scale rather than promising a universal
solver.

## Heavy-computation packet

Record the semantic question, inputs/presumptions, chosen reduction, algorithm and
scale, executable artifact, data/environment/seeds/precision, compact outputs,
checks, error/tolerance, instability, and consumers. The downstream node receives
the result, witness, boundary, and meaning—not a raw trace or “the computer
verifies.”
