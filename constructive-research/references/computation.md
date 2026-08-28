# Research Computation

Computation has two scales:

1. **Deductive computation** is mandatory inside every conceptual node. It is the
   finite, verifiable construction that makes a deduction or equation valid.
2. **Heavy computation** is symbolic expansion, numerical solution, combinatorial
   enumeration, simulation, data transformation, or plotting large enough to
   obscure the conceptual node. Isolate this scale in a computation node.

Do not isolate the small equality witness that makes prose rigorous; do isolate raw
expansions, programs, runs, tables, and numerical diagnostics.

## Deductive-computation contract

For every nontrivial deduction or displayed equation, record in the surrounding
argument:

- **constructed inputs:** where each object came from and its domain/type;
- **operation:** the map, composition, restriction, quotient, substitution,
  variation, limit, or algorithm actually performed;
- **common target:** why expressions being equated inhabit the same space or answer
  the same semantic question;
- **witness:** the explicit evaluation, identity, inverse, universal property,
  commuting diagram, bound, or reproducible check;
- **semantic invariant/coincidence:** what mathematical or physical content is the
  same across the step;
- **output boundary:** assumptions used and cases in which the step fails.

An equation should originate in this computation, not appear first and receive an
interpretation afterward. A definition may introduce notation, but it cannot be
used to disguise an unverified claim of existence, uniqueness, equivalence, or
invariance.

### Example: constructing a residual transformation

Suppose `B(r)` has already been constructed with `B(r)k=r`, and let
`q=Lambda(A)^(-1)p`. Do not write only “compare `B(p)` and `A B(q)`.” Compute:

```text
B(p)k = p,

[A B(q)]k
  = A[B(q)k]
  = A q
  = A[Lambda(A)^(-1)p]
  = p.
```

Both composites have domain containing `k`, land at the same momentum `p`, and
preserve the semantic endpoint. Their relative map is therefore constructed as

```text
W(A,p) = B(p)^(-1) A B(q),

W(A,p)k
  = B(p)^(-1)[A B(q)k]
  = B(p)^(-1)p
  = k.
```

The calculation, not the phrase “two ways,” proves that `W(A,p)` belongs to the
stabilizer of `k`. Further claims—cocycle, unitarity, or representation law—need
their own computations.

## Reduction before execution

State the semantic question and seek a structural reduction before choosing an
algorithm. Prefer invariants, quotienting, representations, normal forms, spectral
or variational formulations, generating functions, and graph reductions over
component-wise or term-by-term work.

Compare candidate routes by:

- number and meaning of representation changes;
- asymptotic cost and memory scale;
- numerical conditioning or symbolic expression growth;
- reusable intermediate structure;
- cost of recovering the requested observable;
- assumptions hidden by libraries, solvers, or existence theorems.

Low algebraic length is not enough. A reduction must decrease the whole semantic
and computational route rather than move difficulty into a black box.

## Computation-node contract

Record:

- the mathematical input and exact semantic question;
- the presumption or prior-node result being tested;
- the chosen reduction and why it preserves the required meaning;
- algorithm, complexity, and expected scale;
- executable notebook, script, CAS worksheet, query, or plotting source;
- data provenance, environment, parameters, seeds, precision, and tolerances;
- compact outputs consumed by other nodes;
- dimensional, algebraic, numerical, limiting-case, or independent checks;
- instability, approximation, failure modes, and reproducibility limits.

Keep raw traces, large tables, expansions, and generated figures on the worktable.
Return only the compact result, error or validity bounds, and semantic interpretation
to dependent nodes.

## Component calculations

Do not use component-wise expansion as the primary derivation when a structural
operation exists. Use it only when components are the observable representation,
no effective reduction is known, or an independent local check is valuable.

When components are necessary:

1. Name the invariant object being represented.
2. Restrict expansion to the smallest symmetry-adapted basis or required sector.
3. Automate repetitive algebra where that improves auditability.
4. Check signs, indices, dimensions, normalization, boundary conditions, and a
   solvable or symmetric limit.
5. Compress the result back into an invariant statement before downstream use.

Machine computation supplements the mathematical argument. State what was checked
and what remains dependent on implementation, precision, or data quality.
