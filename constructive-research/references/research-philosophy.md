# Research Philosophy

## Reflective intuitionism

Treat intuition as provisional formalization. It selects phenomena, objects,
relations, invariances, and plausible operations before their conditions are fully
known. Mathematics rigorizes intuition by making its content and consequences
inspectable. The resulting formal theory remains a reflection of the intuition,
not its final replacement.

Research is recursive:

```text
intuition
  -> mathematical reflection
  -> consequences
  -> reflection on hidden presumptions or failures
  -> reconstructed intuition
  -> new formalization
```

The cycle may repeat without making an earlier theory worthless. Newtonian
mechanics makes absolute time and flat Galilean spacetime part of its effective
intuition. Reflecting on those presumptions, their transformation laws, and their
empirical limits opens the reconstruction into relativistic spacetime. The later
theory recovers the earlier one in a controlled regime while changing its basic
objects.

Do not treat a vague presumption only as a defect to eliminate. It may be a compressed
indication of a missing theory view. Ask:

- What phenomenon is the presumption trying to express?
- Where does it cease to be coherent, invariant, or predictive?
- What object, scale, fluctuation, or limiting process would make it explicit?
- What new theory appears when the presumption becomes variable or is allowed to
  fail?

Equilibrium principles, for example, are not the whole of statistical mechanics.
Their scope and failure point toward nonequilibrium dynamics, fluctuation theory,
and large-deviation structures.

## Construction over formal closure

Definitions and proofs stabilize intuition, expose error, and enable reuse. Formal
consistency alone is not the research goal. Prefer results that create predictive or
calculational leverage: an operator, representation, reduction, algorithm,
asymptotic law, invariant, normal form, diagrammatic rule, or experimentally
testable relation.

Build the simplest nontrivial construction completely before generalizing. Preserve
useful classical results as consequences, limits, or comparison points. A modern
reconstruction earns its place by explaining more, assuming less, or reducing the
semantic and computational route to an output.

## Internal mathematical construction

When a mathematical object participates in the argument, construct why it is
needed and how it arises from prior objects. Do not introduce a group, measure,
bundle, operator, quotient, topology, or representation as external vocabulary and
then calculate inside it.

Use this order:

```text
physical or mathematical capability
  -> obstruction or ambiguity
  -> object that resolves or represents it
  -> definition in typed terms
  -> construction/equality witness
  -> consequence and failure boundary.
```

For example, do not begin with “let `K` be the little group.” Construct a standard
state or momentum, show that its transporting map is nonunique, calculate that the
difference of two transports fixes the standard object, and only then name that
stabilizer and its action.

Some foundational results cannot reasonably be reproved inside each research node.
Treat them as **theorem contracts**, not imported conclusions: state exact
hypotheses, exact output, the semantic bridge supplied, and the boundary where the
theorem no longer applies. Give a constructive local model or check when it makes
the bridge readable.

## Semantic computation

Regard every deduction as computation: a checkable transformation of semantic
content. Machine algebra and numerical work are only heavier instances. A
mathematical operation is admissible when its input and output are typed, its action
can be evaluated or witnessed, and its semantic content is preserved or changed in
the declared way.

Maintain **semantic invariance** across a derivation. Name the content that survives
each representation change—such as the same event, state, orbit point, solution,
probability, observable, equivalence class, or physical degree of freedom. When two
expressions are claimed equal, exhibit their **semantic coincidence** by evaluating
both constructions on the same input or by giving another explicit witness such as
a commuting diagram, universal property, substitution, limit, or inverse.

Component-wise expansion and term-by-term manipulation usually leave the level of
meaningful objects, obscure why a result holds, and multiply computational burden.
Minimize them as aggressively as the problem permits; do not organize a derivation
around an expansion merely because it is executable.

Before expanding coordinates or components, seek reduction through:

- invariants, conserved quantities, quotient spaces, or orbit classification;
- irreducible representations and symmetry-adapted decompositions;
- natural maps, universal properties, or functorial constructions;
- spectral, variational, generating-function, or diagrammatic methods;
- normal forms, sufficient statistics, effective variables, or exact sequences;
- duality or a representation change that removes rather than relocates work.

Prefer transformations that preserve recognizable objects and state what semantic
content each step carries. Low transformation depth is evidence—not proof—of a
theorem's directness, robustness, and versatility. Judge the whole route, including
the cost of constructing the abstraction and recovering observables. Do not hide
work in notation, an unnamed inverse, an existence theorem, or a black box.

Use components only when they are themselves the meaningful observable
representation, no structural reduction is known, or a local verification requires
them. Isolate that calculation, explain its semantic input and output, and return to
the invariant statement rather than allowing the expansion to become the theory.

Intuition proposes the objects or paths to compare; computation earns the
deduction. Phrases such as “compare the two routes” are incomplete until both routes
are constructed as composites with common domain/codomain and their equality or
obstruction is calculated.

## Presumption-driven reconstruction

Start from the phenomenon or capability, not inherited chapter order. Classify each
presumption as empirical input, mathematical convenience, representation choice,
approximation, or structural necessity. Ask both whether it can be weakened or
derived and what theory becomes visible if it fails.

Separate kinematics from dynamics, classification from realization, on-shell from
off-shell content, gauge redundancy from physical symmetry, and exact results from
approximations. Name the extra locality, regularity, representation, boundary, or
minimality assumptions whenever a structure is claimed to determine dynamics.

Preferred lenses are starting points, not mandatory answers:

- electromagnetism through `U(1)` connections, curvature, gauge equivalence,
  topology, and observables;
- statistical mechanics through large deviations, concentration, conditioned
  measures, and nonequilibrium variational structure;
- quantum field theory through symmetry representations, combinatorics, graph
  reduction, effective descriptions, and renormalization structure;
- analytical mechanics through symplectic or Poisson geometry, group actions,
  momentum maps, constraints, and reduction;
- mathematical computation through Lie representations, invariant decomposition,
  and symmetry-adapted bases.

If a preferred lens does not shorten or strengthen the route to the target output,
say so and choose a better one.
