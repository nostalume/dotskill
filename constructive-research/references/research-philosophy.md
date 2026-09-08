# Research Philosophy

## Reflective intuitionism

Treat intuition as provisional formalization. It selects phenomena, objects,
relations, invariants, and plausible operations before their conditions are fully
known. Mathematics makes that content inspectable; its consequences then expose
presumptions from which intuition can be reconstructed.

```text
intuition -> mathematical reflection -> consequences and failures
  -> exposed presumptions -> reconstructed intuition -> new formalization
```

The later view need not erase the earlier one. Relativity reflects on the absolute
time and flat spacetime implicit in Newtonian mechanics, changes the primitive
objects, and recovers Newtonian predictions in a controlled regime. A vague
presumption may likewise be a compressed sign of a missing theory: equilibrium
principles delimit, but do not exhaust, fluctuation and nonequilibrium physics.

Ask what phenomenon a presumption expresses, where it loses coherence or
predictive force, what would make it variable, and which old success a replacement
must recover. Intuition proposes a path; construction and evidence earn it.

## Construction over formal closure

Definitions and proofs stabilize reasoning, but formal consistency is not the
research endpoint. Separate:

```text
formal organization       known facts in a consistent language
verification              recovery of a supplied result
semantic compression      removal of distinctions irrelevant to a named output
computational leverage    a cheaper controlled route to the same output
predictive leverage       a new consequence, discriminator, or experiment
semantic reconstruction   new primitives with controlled old-regime recovery
```

A sophisticated proof that only recovers a textbook equation remains valuable
regression evidence. It should not own the spine unless a downstream theorem,
observable, reduction, no-go result, approximation, or theory view consumes it.

## Obstruction-driven internal construction

Generate a mathematical object from the task it must perform:

```text
required capability
  -> cheapest typed candidate
  -> explicit failed equality, ambiguity, or obstruction
  -> additional structure forced by that failure
  -> constructed object and operations
  -> witness, consequence, and refusal boundary
```

Do not introduce a group, measure, quotient, bundle, operator, topology, or
representation as unexplained machinery when the argument depends on why it
exists. For example, construct transport nonuniqueness and calculate that the
relative transport fixes a standard object before naming its stabilizer.

Some foundations cannot reasonably be reproved locally. Admit them as theorem
contracts: exact hypotheses, exact output, the semantic bridge supplied, and the
boundary where it cannot be used. A finished formula without generative origin is
an ansatz or theorem input, not an internally derived construction.

## Semantic deduction

Keep finite mathematical computation adjacent to the argument. For every
consequential claim or equation, expose:

```text
typed inputs and domain
  -> map, composition, quotient, substitution, variation, limit, or algorithm
  -> common target and explicit evaluation, witness, or certificate
  -> preserved or changed semantic content
  -> assumptions and failure boundary
```

An equation must arise from the operation rather than appear first and acquire an
interpretation afterward. A definition cannot establish existence, uniqueness,
equivalence, or invariance. A theorem contract can bridge a step only after its
hypotheses and output match exactly.

Reduce before expanding: prefer invariants, quotients, symmetry-adapted
decompositions, universal maps, normal forms, or spectral/variational formulations.
Use components only when they are the observable representation, no structural
reduction is known, or a small independent check needs them. Keep the smallest
useful sector and return the result to an invariant statement.

## Generative tools and proof-in-construction

Obstruction motivation alone may still end in a one-use proof. A construction is
generative only when it retains an operation for new admissible inputs:

```text
Construct(data, capability, resource budget)
  -> generated object
  -> reusable operations
  -> correctness/recovery certificates
  -> explicit failure or refusal
```

The input must not encode the expected answer. Repair rules must arise from a
calculated residual, rank defect, failed invariance, incompatibility, or another
obstruction. The proof certifies typing, obstruction cancellation, recovery,
minimality or completeness within scope, and failure conditions; it is not the
returned tool.

Evaluate the retained interface at three distinct levels:

- **Regression:** recover a known result without hard-coding its final formula.
- **Transfer:** apply the unchanged interface to a new admissible input, including
  a meaningful refusal when construction is impossible.
- **Use:** consume the output in a downstream calculation and compare the complete
  route with a baseline.

Regression alone yields a verification backend. Transfer without use yields a
formal generator whose computational value remains open. A generative tool should
survive in the worktable with reader-usable inputs, operations, certificates, and
boundaries rather than disappearing after its theorem.

## Compression and reconstruction

Distinguish changes of view carefully:

```text
reformulation   same objects and information in another representation
compression     less information or work for a named observable
reconstruction  different primitive objects and dynamics
```

An invertible change of variables can still improve sparsity, conditioning,
locality, or recursion, but invertibility alone does not make a new theory. A
quotient may be the strongest semantic compression when it removes distinctions
invisible to the observable. Judge every gain by the whole path: finding the
reduction, solving it, and recovering the requested output.

Ptolemaic epicycles illustrate a warning, not an automatic verdict: a successful
correction scheme may encode the wrong primitive view. Perturbation is productive
when a physical scale orders terms and errors are controlled. Proliferating
repairs, nonanalytic targets, secular growth, phase changes, topology, collective
modes, or bound-state poles can instead motivate a reconstruction probe. They do
not prove one.

A reconstructed theory must construct a bridge to the earlier successful regime:

```text
L : P_new -> P_old,eff
O_old(L(p)) = O_new(p) + controlled error
```

It must also produce a consequence outside that regime. Conceptual economy does
not guarantee tractability: spectral, combinatorial, inverse, or recovery problems
may remain hard or undecidable.

## Presumptions and modern lenses

Classify presumptions as empirical inputs, mathematical conveniences,
representation choices, approximations, or structural necessities. Separate
kinematics from dynamics, classification from realization, on-shell from off-shell
content, gauge redundancy from physical symmetry, and exact statements from
approximations. Symmetry constrains admissible dynamics; it does not select dynamics
without additional assumptions.

Modern views are probes, not mandatory answers:

- electromagnetism through `U(1)` connections, curvature, gauge equivalence,
  topology, and observables;
- statistical mechanics through large deviations, concentration, conditioned
  measures, and nonequilibrium variational structure;
- quantum field theory through representations, combinatorics, graph reduction,
  effective descriptions, and renormalization structure;
- mechanics through symplectic/Poisson geometry, group actions, momentum maps,
  constraints, and reduction;
- mathematical computation through Lie representations, invariant decomposition,
  and symmetry-adapted bases.

Use a lens only when it shortens or strengthens the route to the target capability.
For operational discovery, adjudication, and stopping, read
[research-loop.md](research-loop.md). Read [computation.md](computation.md) only
when substantial execution or an executable certificate bears inferential weight.
