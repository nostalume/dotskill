---
name: constructive-research
description: Reconstruct mathematical or physical theories into rigorous, computationally economical, predictive accounts. Use for research, derivation, or technical-note work that should expose inherited assumptions, employ modern structural tools, minimize low-level transformations, and connect intuition to explicit calculations rather than stop at formal axiomatization or survey prose.
---

# Constructive Research

Treat research as construction of effective intellectual tools. The objective is not maximum formalism; it is a theory whose assumptions are visible, whose objects can be manipulated, and whose consequences can be calculated, checked, and applied.

Here, *intuitionism* is a research stance rather than the specific foundational school of mathematical intuitionism:

> Intuition proposes structure; mathematics makes it precise; construction makes it usable; computation and prediction test whether it is valuable.

## Research posture

- Start from the phenomenon, problem, or capability the theory must explain or compute. Do not start from inherited chapter order.
- Distinguish rigor from axiomatization. Definitions and proofs matter when they control ambiguity, error, construction, or inference; formalization without new leverage is not itself progress.
- Prefer constructive results: an operator, representation, reduction, algorithm, asymptotic law, diagrammatic rule, invariant, normal form, or worked calculation.
- Treat computability broadly. Exact symbolic calculation, numerical approximation, representation decomposition, variational methods, asymptotics, combinatorial enumeration, and experimentally usable predictions all count.
- Optimize computational depth, not merely the possibility of computation. Prefer a short chain of meaning-preserving transformations to a long component-wise expansion.
- Use intuition openly as the source of a conjecture or construction, then replace intuitive leaps with stated hypotheses and a derivation. Do not disguise intuition as proof or remove the explanation that makes a proof discoverable.
- Prefer modern formulations when they compress assumptions or unlock calculations, but demonstrate their advantage against the conventional formulation. Do not substitute fashionable vocabulary for a result.
- Preserve useful classical results as consequences, limiting cases, or comparison points. Reconstructing a theory does not require pretending its history did not happen.

## Reconstruction workflow

### Frame the capability

State what should become calculable or predictable. Separate the target from adjacent ambitions and identify the observable, invariant, equation, classification, or algorithm that will count as success.

### Audit presumptions

Identify assumptions inherited from the standard presentation. Classify each as:

- empirical input;
- mathematical convenience;
- representation or coordinate choice;
- approximation or regime restriction;
- genuine structural necessity.

Try to weaken or derive each presumption. Report when it cannot be removed. Never claim that symmetry, geometry, probability, or another structure uniquely fixes dynamics without listing the additional locality, regularity, representation, boundary, or minimality assumptions.

### Select structural tools

Choose the smallest modern framework that makes the target construction transparent. The user's recurring preferred lenses are starting points, not mandatory conclusions:

- electromagnetism: principal `U(1)` connections, curvature, gauge equivalence, topology, and observables;
- statistical mechanics: large deviations, concentration, ensembles as conditioned measures, and thermodynamic variational principles;
- quantum field theory: symmetry representations together with combinatorics, graph reduction, effective descriptions, and renormalization structure;
- analytical mechanics: symplectic or Poisson geometry, Lie-group actions, momentum maps, constraints, and reduction;
- mathematical computation: Lie-group representation theory, invariant decomposition, symmetry-adapted bases, and reduction before brute-force calculation.

If a preferred lens does not improve the target computation, say so and choose a better one.

### Minimize semantic distance

Regard computation as transformation of semantic content. A good theorem or representation makes the desired consequence reachable through few transparent transformations. Low transformation depth is evidence—not proof—of directness, robustness, and portability because fewer intermediate encodings can hide assumptions or introduce error.

Before expanding into coordinates or components, seek a structural reduction through:

- invariants, conserved quantities, quotient spaces, or orbit classification;
- symmetry-adapted decomposition and irreducible representations;
- universal properties, natural maps, or functorial constructions;
- spectral, variational, generating-function, or diagrammatic methods;
- normal forms, sufficient statistics, effective variables, or exact sequences;
- duality or a change of representation that removes rather than relocates work.

Judge a proposed reduction by the entire derivation, including the cost of constructing the abstraction and recovering observables. Do not hide computation behind notation or move an equally difficult problem into an unnamed inverse, existence theorem, or black box.

Avoid component-wise and term-by-term expansion as the primary explanation when a semantic operation exists. Use components when they are the natural computational representation, when an observable requires them, or as a local verification of a structural result. Explain what each component calculation represents and return to the invariant statement afterward.

When comparing derivations, prefer the one that preserves recognizable mathematical objects across its steps, exposes reusable intermediate results, and scales across dimensions, groups, or models. Count algebraic length only after accounting for semantic clarity and computational complexity.

### Construct before generalizing

Define the minimal objects, maps, domains, equivalences, and conventions. Build the simplest nontrivial example completely before stating the most general theorem. Derive the conventional equation or law as an output rather than importing it silently as an axiom.

For every important construction, answer:

1. What data go in?
2. What operation is performed?
3. What invariant or prediction comes out?
4. Which assumption makes each step valid?
5. How could the result be computed in an example?
6. Which transformations are essential, and which can be eliminated by a better representation or theorem?

### Compute and challenge

Include at least one explicit calculation that exercises the proposed structure. As applicable, check:

- dimensions, types, domains, signs, indices, and normalization;
- covariance or invariance identities;
- degrees of freedom and removal of redundant components;
- limiting, singular, and symmetry-broken cases;
- agreement with a known result or independent derivation;
- sensitivity to assumptions and counterexamples to overstrong claims.

Use computer algebra, numerical experiments, or small programs when they expose errors or make a construction reproducible. A machine check supplements the mathematical argument; it does not replace the statement of what was checked.

Where two correct computations exist, compare their transformation depth, asymptotic cost, numerical stability, and reuse of structure. Prefer a semantic reduction over brute-force expansion even when both produce the same final expression.

### Establish the research boundary

Separate clearly:

- kinematics from dynamics;
- classification from a particular realization;
- on-shell content from off-shell formalism;
- gauge redundancy from physical symmetry;
- exact results from approximations;
- proven consequences from proposals or open problems.

State what the framework does not determine and what further input would be needed.

## Source and comparison discipline

Use primary papers, authoritative monographs or lecture notes, and current research where the topic has materially developed. Trace important claims to their actual sources. Compare the reconstruction with the strongest conventional account, not a simplified caricature.

When proposing a synthesis not explicitly present in a source, label it as a reconstruction or inference. Distinguish established theorem, standard technique, plausible extension, and original conjecture.

## Deliverable shape

Prefer a coherent derivation over an encyclopedia of related material. A useful research report or note normally makes these visible without forcing a rigid template:

- the target capability and central thesis;
- the presumption audit;
- primitives, conventions, and equivalences;
- the construction or deduction chain;
- explicit computational consequences;
- the reductions that shorten the route from structure to consequence;
- checks, failure cases, and comparison with the standard theory;
- limitations and next research questions;
- a source trail.

Remove background that does not serve the deduction, or relocate it to a narrowly owned appendix. Do not let file organization, build tooling, or cosmetic cleanup displace the research unless the user asks for those tasks.

## Completion test

Do not call the work complete merely because the formal definitions are consistent. It is complete enough to present when a reader can identify the assumptions, reproduce a nontrivial derivation or computation, understand what is predicted, see how errors were checked, and know where the construction stops.
