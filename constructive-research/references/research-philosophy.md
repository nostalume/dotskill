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

## Capability-directed construction

A rigorous construction can still serve the wrong goal. Audit two independent
questions:

1. **Generative origin:** why was this object built in this form?
2. **Consequential endpoint:** what capability changes because it was built?

For the first, use an obstruction-driven construction:

```text
required capability
  -> simplest candidate
  -> explicit obstruction or failed equality
  -> correction terms and conditions forced by that obstruction
  -> solved object
  -> equality, universal property, or other witness.
```

Writing down a finished operator and checking that it works is verification, not its
derivation. Verification remains valuable, especially as a regression test, but it
must not be narrated as though the object had been generated from the active need.
If the generation cannot be supplied, state the object as an ansatz or theorem input
and expose that dependency.

For the second, distinguish the role of the result:

```text
formal organization
  -> places known facts in a consistent language;

verification computation
  -> recovers a known equation, representation label, or degree-of-freedom count;

semantic compression
  -> removes distinctions irrelevant to a named downstream question;

computational or predictive leverage
  -> computes a named observable by a cheaper controlled route, produces a new
     consequence, or changes which experiment, approximation, or theory view is
     available.
```

These are legitimate but different outputs. Do not promote a technically uniform
recovery of familiar textbook physics into the central thesis merely because its
machinery is sophisticated. Treat such recovery as baseline or regression material
unless it changes a downstream theorem, no-go result, observable, approximation, or
reconstruction. Likewise, distinguishing representation spaces prevents category
errors, but it is supporting infrastructure unless a later claim actually depends
on the distinction.

For representation-based physics, representation theory does not supply the
dynamics. Its constructive role is to identify observable-visible channels and
distinctions that may be quotiented once the dynamics, preparation, and observable
are supplied:

```text
(representation, dynamics H, preparation P, observable O)
  -> symmetry-resolved channels
  -> quotient distinctions invisible to O
  -> minimal cyclic or effective object
  -> recover the same O with equality or controlled error.
```

Possible useful outputs include an invariant amplitude basis, Hamiltonian block,
cyclic spectral measure, reduced resolvent, recursion or transfer operator, effective
generator with error control, and a graph quotient preserving a correlator. Their
value is not their modern vocabulary but the bridge from the supplied physical
problem to a shorter, reusable, and verified route.

Before generalizing, compare one complete benchmark on the same model, preparation,
observable, and accuracy target. Count the cost of discovering and constructing the
reduction, solving the reduced problem, and recovering the observable. A smaller
carrier space or shorter formula is not by itself a computational gain. The field
equation or textbook recovery is then an intermediate contract and regression test,
not the endpoint of the research spine.

## Generative tools and proof-in-construction

Obstruction motivation is necessary but not sufficient. A derivation can begin from
a genuine obstruction and still end as a one-use proof of a familiar object. A
construction becomes generative only when it retains the operation that produced
the object and exposes that operation for new admissible input:

```text
typed capability request and resource budget
  -> cheapest candidate
  -> calculated obstruction
  -> reusable repair or generation rule
  -> generated object and usable operations
  -> internal certificates and failure boundary
  -> a downstream calculation that consumes the generated output.
```

The proof belongs inside this route. It certifies typing, obstruction cancellation,
recovery, completeness or minimality within the declared search region, and failure
conditions. Do not reverse the dependency by importing a finished object, organizing
a proof around it, and then discarding every mathematical tool after the theorem.
That route may be rigorous, but its durable output is verification rather than a
constructor.

A research tool is generative when it has all of the following:

- inputs stated independently of the expected solution;
- operations derived from the obstruction rather than hard-coded from the answer;
- an inspectable output usable without repeating the whole derivation;
- certificates explaining why the output works and when construction fails;
- a transfer test on an admissible case not named in advance by its known answer;
- a downstream theorem, computation, observable, or design decision that reuses the
  output.

Represent the retained interface schematically as

```text
Construct(data, capability, resource budget)
  -> (generated object, reusable operations, certificates, failure record).
```

The returned operations may be an invariant-map basis, quotient projector,
normal-form reducer, propagator lift, recursion, effective generator, graph rule, or
another calculational interface. The theorem is one certificate attached to this
return value, not the return value itself.

Textbook recovery remains valuable as a regression bench. It proves that the
generator has not lost an established regime, but it does not demonstrate transfer.
Before a generative calculus owns a paper's spine, apply it blindly to at least one
new input and compare the complete route with the relevant baseline. If no reusable
interface or transfer case can be supplied, compress the mathematics into a theorem
contract, appendix, or verification backend instead of presenting it as the main
constructive achievement.

## Reformulation, compression, and semantic reconstruction

Distinguish three strengths of theory change:

```text
reformulation
  -> the same objects and information in another representation;

compression
  -> the same theory computes a named observable through less information or a
     cheaper verified route;

semantic reconstruction
  -> new primitive objects and dynamics replace the old description, while a
     controlled bridge recovers its successful regime.
```

An invertible change of variables may expose sparsity, locality, conditioning, or
recursion and thereby reduce execution cost. It is not, by invertibility alone, a
new theory view. A quotient may remove distinctions irrelevant to an observable,
but it still works inside the old theory. Reconstruction is stronger in a different
sense: it changes what counts as a state, cause, interaction, or observable.

Let `P_new` be the reconstructed physical object and `P_old,eff` the regime where
the older theory was successful. Construct a bridge

```text
L:P_new -> P_old,eff
```

and evaluate both observable constructions on the same new state:

```text
O_old(L(p))=O_new(p)+controlled error.
```

This recovery is mandatory. A new vocabulary that cannot construct the old
successes, delimit its regime, and produce a consequence outside it is not yet a
supported reconstruction.

Treat recurring correction patterns as possible evidence of missing primitives,
not as proof. Perturbation is productive when a physical scale or coupling orders
terms, the reference objects remain valid, and errors or asymptotics are controlled.
It becomes a reconstruction signal when unrelated repairs proliferate, cancellations
systematically hide simpler variables, the target is nonanalytic at the reference
point, the chosen vacuum or degrees of freedom fail, or a finite expansion cannot
represent the phenomenon being requested. Bound-state poles, phase changes,
collective modes, topology, and secular growth are common tests, not automatic
verdicts.

Use the resulting discovery cycle:

```text
locate the old theory's successful regime
  -> identify stable correction patterns and failure boundaries
  -> propose the missing semantic object
  -> construct its dynamics and observable
  -> recover the old expansion or limit
  -> test a prediction outside the old regime.
```

Do not infer that conceptual economy guarantees computational ease. A reconstructed
theory may explain more yet retain hard spectral, combinatorial, or numerical
problems. There is no universal procedure for recognizing the right new ontology;
semantic reconstruction is a research regime whose claims are earned locally.

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
