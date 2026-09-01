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

## Verification computation versus computational leverage

A verification computation checks consistency: a quotient has the expected degrees
of freedom, a carrier realizes a supplied representation, or an operator recovers a
known field equation. Such checks are necessary evidence, but they do not establish
that the construction makes the physical problem easier or predicts anything new.

Test a computational claim with a fixed contract:

```text
(model and dynamics, preparation, observable, accuracy target)
  -> baseline route and cost
  -> proposed reduced object
  -> same-observable equality or controlled-error witness
  -> complete reduced-route cost
  -> validity and failure boundary.
```

Include the cost of finding and constructing the reduced object and of recovering the
observable; do not count only the small middle calculation. Lower dimension,
coordinate-free notation, or a cleaner representation-space distinction is not yet
computational leverage unless it reduces symbolic growth, integral or state-space
size, conditioning, storage, runtime, proof depth, or repeated work for the named
observable.

In representation research, keep the roles typed: the representation constrains
admissible channels and intertwiners, while the Hamiltonian or action supplies the
dynamics. A useful reduction consumes both, together with preparation and observable,
and returns a minimal cyclic or effective object from which that observable is
recovered. Record textbook recovery as a regression obligation rather than the final
computational claim.

## Build and use a generative tool

When repeated deductions share an algebra, invariant decomposition, residual, or
reduction pattern, do not merely reuse the notation while proving each case by hand.
Test whether the shared structure can be retained as a tool:

```text
Tool(input data, capability, resource bound)
  -> generated structure
  -> operations available to downstream work
  -> correctness and recovery certificates
  -> explicit refusal or obstruction when the bound is insufficient.
```

The input must not encode the expected answer. The generation rule must calculate
corrections from failed equalities, rank defects, compatibility residuals, or other
obstructions. Its output must be reusable without replaying the full proof. Proof
calculations remain mandatory, but run as internal certificates of the generated
object: they should check the tool, not replace it.

Evaluate such a tool at three levels:

1. **Regression:** recover a known result without special-casing its final formula.
2. **Transfer:** apply the same interface to an admissible input whose output was not
   supplied beforehand, including a meaningful failure result when construction is
   impossible within budget.
3. **Use:** consume the generated structure in a downstream calculation and compare
   complete cost, recovery depth, and error with the baseline route.

Passing only regression makes the artifact a verification engine. Passing transfer
but not use makes it a formal generator whose computational value remains open.
Claim constructive computational leverage only after the use-level comparison.

Prefer the next computation that invents, exercises, or falsifies such an interface
over another hand-derived example. Keep the generator, its executable realization,
and compact certificates on the worktable so later nodes consume the tool rather
than importing its proof prose.

## Theory reconstruction does not evade computational complexity

When repeated expansions suggest that the primitive objects are wrong, allow a
semantic reconstruction rather than forcing further reduction inside the old
presentation. Keep its computational claim separate from its explanatory claim.
A supported reconstruction must provide:

```text
new physical objects and dynamics,
a bridge recovering the old successful regime,
a same-observable equality or controlled error,
one consequence not naturally available in the old view,
and a fresh whole-route cost audit.
```

Do not treat perturbation order or formula length alone as evidence of a failed
theory view. A scale-organized perturbative expansion may be the most direct
computation for its observable and regime. Conversely, a compact new formalism may
hide an equally difficult inverse, spectral problem, graph contraction, or
recovery map.

General Hamiltonian families impose a hard boundary. Broad spectral questions can
be computationally intractable or even undecidable, so neither symmetry reduction,
semantic quotienting, nor theory reconstruction supplies a universal solver. No
workflow can guarantee discovery of variables that make every Hamiltonian easy.
State the restricted model class, observable, accuracy, and resource scale; treat a
failed local reconstruction as evidence about that candidate, not as failure of the
research philosophy.

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
