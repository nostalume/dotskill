---
name: constructive-research
description: Build and manage rigorous, computationally economical research as a material-backed DAG. Use for mathematical or physical research, derivation, or technical-note work that must expose presumptions, connect questions to papers/data/plots/manuscripts, isolate heavy computation, and incrementally turn intuition into checked, predictive constructions.
---

# Constructive Research

## Research philosophy

Treat research as construction of effective intellectual tools. The objective is
not maximum formalization; it is a theory whose assumptions are visible, whose
objects can be manipulated, and whose consequences can be calculated, checked,
and applied.

### Reflective intuitionism

Here, *intuitionism* is an epistemic research stance, not the specific foundational
school of mathematical intuitionism. Intuition is already a provisional
formalization: it selects phenomena, objects, relations, invariances, and plausible
operations before their conditions are completely known. Mathematics rigorizes
that intuition by making its content and consequences inspectable. The formal
theory remains a reflection of the intuition, not a final replacement for it.

Research is therefore recursive:

> intuition -> mathematical reflection -> consequences -> reflection on hidden
> presumptions or failures -> reconstructed intuition -> new formalization

The cycle may repeat without treating an earlier theory as worthless. Newtonian
mechanics makes absolute time and flat Galilean spacetime part of its effective
intuition. Reflecting on those presumptions, their transformation laws, and their
empirical limits opens the reconstruction into relativistic spacetime. The later
theory explains the earlier one as a controlled regime while changing its basic
objects.

Do not treat a vague presumption only as a defect to delete. It may indicate a
missing theory view. Ask what phenomenon the presumption is compressing, where it
fails, and which new object or limiting process could make it explicit. Equilibrium
principles, for example, are not the whole of statistical mechanics; their scope
and failure point toward nonequilibrium dynamics, fluctuation theory, and
large-deviation structures.

### Construction over formal closure

Definitions and proofs matter because they stabilize intuition, expose error, and
enable reusable construction. Formal consistency alone is not the research goal.
Prefer results that create predictive or calculational leverage: an operator,
representation, reduction, algorithm, asymptotic law, invariant, normal form,
diagrammatic rule, or experimentally testable relation.

Build the simplest nontrivial construction completely before generalizing. Preserve
useful classical results as consequences, limits, or comparison points. A modern
reconstruction earns its place by explaining more, assuming less, or reducing the
semantic and computational route to an output.

### Semantic computation

Regard computation as transformation of semantic content. Component-wise expansion
and term-by-term manipulation usually leave the level of meaningful objects, obscure
why a result holds, and multiply computational burden. Minimize them as aggressively
as the problem permits; do not organize a derivation around an expansion merely
because it is executable.

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
them. Isolate that calculation, explain its semantic input and output, and return
to the invariant statement rather than allowing the expansion to become the theory.

### Presumption-driven reconstruction

Start from the phenomenon or capability, not inherited chapter order. Audit each
presumption as empirical input, mathematical convenience, representation choice,
approximation, or structural necessity. For each one, ask both:

- Can it be weakened, derived, or removed?
- What new theory becomes visible if it is made variable or allowed to fail?

Separate kinematics from dynamics, classification from realization, on-shell from
off-shell content, gauge redundancy from physical symmetry, and exact results from
approximations. Never claim that symmetry, geometry, probability, or another
structure uniquely fixes dynamics without naming the extra locality, regularity,
representation, boundary, or minimality assumptions.

The user's recurring preferred lenses are starting points, not mandatory answers:

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

## Research workflow

The workflow realizes this philosophy on the user's actual research material. It
manages inquiry and artifacts; it does not turn research into engineering stages.

### Research graph, not engineering stages

Organize a research program as a directed acyclic graph (DAG). Each node is a
bounded research question or construction; each edge states a semantic dependency
between results.

The graph is not a delivery pipeline:

- Nodes do not grant permission, impose approval gates, or prescribe a work order.
- Work may begin at any node for which useful material or insight is available.
- Several independent nodes may develop concurrently.
- An edge `A -> B` means that B uses a stated output of A, not that every activity
  in A must finish before any work on B can occur.
- Ordinary user scope and safety boundaries still apply; the graph adds none.

Keep the graph acyclic. If two ideas inform each other, either represent them as one
joint node or make the evolution explicit, such as `hypothesis-v1 -> test ->
hypothesis-v2`. Do not hide a conceptual cycle behind status labels.

### Worktable

Bind the graph to the worktable specified by the user. A worktable is the actual
collection of research materials, for example:

- gathered papers, books, and source annotations;
- the manuscript or note under development;
- conjectures, definitions, and derivation fragments;
- datasets, experimental observations, and simulation output;
- plots, diagrams, notebooks, and calculation programs;
- reviews, contradiction logs, and comparison tables.

Do not invent a new workspace layout when the user has already identified where
these materials live. Do not move, rewrite, or create manuscript content merely to
make the graph tidy. The graph points to materials; it does not replace them.

When no worktable is specified, first inspect available relevant material and
propose the smallest useful location or representation. A single Markdown graph
document is usually enough; schemas, databases, and one-file-per-node layouts need
specific justification.

### Bootstrap the graph

Start from the user's research capability or question, then inspect the existing
worktable and authoritative external sources. Build only enough graph to expose the
current research frontier.

1. Inventory relevant material and record its location, role, revision, and
   reliability.
2. Identify the target observable, theorem, equation, classification, prediction,
   or algorithm.
3. Extract existing claims, unresolved questions, contradictions, and available
   constructions.
4. Create nodes around semantic research problems rather than document sections.
5. Draw dependency edges by naming the exact output consumed downstream.
6. Mark missing evidence or computation as nodes instead of filling gaps with prose.

Research graphs are incremental views, not append-only history. Correct or
supersede stale nodes when the material changes. Preserve durable research artifacts
through the user's normal version control or publication practice.

### Node contract

Each node should clarify, in compact readable form:

- **Question/capability:** what becomes known, constructible, or predictable?
- **Presumptions:** empirical inputs, structural necessities, approximations,
  representation choices, conventions, and inherited claims under challenge.
- **Material bindings:** exact papers, manuscript sections, data, plots, programs,
  or prior node outputs used as inputs.
- **Construction/method:** the semantic operation intended to produce the result.
- **Output:** a concrete claim, proof, counterexample, model, dataset, figure,
  operator, algorithm, or manuscript fragment, with its worktable destination.
- **Checks:** consistency laws, comparison evidence, limiting cases, falsifiers,
  uncertainty, or independent reproduction.
- **Edges:** which output enters which downstream node, and for what purpose.
- **Open boundary:** what remains unknown and what evidence would revise the node.

Use short human-readable states only when helpful, such as `open`, `developing`,
`supported`, `rejected`, or `superseded`. State is descriptive, never an execution
gate.

### Node kinds

Use kinds only to clarify ownership; do not force every graph to contain all of
them.

- **Question:** isolates an unknown or a capability target.
- **Source:** gathers and compares primary literature or authoritative references.
- **Presumption:** tests whether an inherited assumption is necessary.
- **Construction:** defines new objects, reductions, or representations.
- **Derivation:** turns prior constructions into a theorem or equation.
- **Computation:** performs substantial symbolic, numerical, combinatorial, or
  simulation work.
- **Observation/data:** acquires, cleans, or characterizes empirical material.
- **Visualization:** turns a result or dataset into a plot or diagram with a stated
  interpretive role.
- **Synthesis:** integrates supported outputs into the developing manuscript.
- **Challenge:** searches for counterexamples, failed limits, or competing accounts.

### Isolate computation

If a derivation requires substantial computation, create a separate computation
node. Do not bury pages of expansion, code, or raw output inside the conceptual
node.

A computation node records:

- the mathematical input and semantic question;
- the reduction or representation chosen before calculation;
- the algorithm and complexity or scale expectations;
- executable material such as a notebook, script, CAS worksheet, or data query;
- environment, parameters, seeds, precision, and relevant data provenance;
- compact outputs and checks consumed by other nodes;
- failure modes, numerical stability, and reproducibility limits.

The downstream node consumes the compact result and its validity conditions, while
the worktable retains the full computation. Keep hand calculations inline only when
they are short enough to expose the semantic transformation directly.

### Evidence and synthesis

Use primary papers, authoritative monographs or lecture notes, and current research
where the field has materially developed. Search results are leads, not evidence.
Label established theorem, standard method, reconstruction, plausible extension,
and conjecture distinctly.

Synthesis nodes should assemble only outputs supported by their incoming edges.
Prefer a coherent deduction over an encyclopedia of adjacent material. Background
that does not serve the argument remains a separately bound worktable resource; it
does not enter the manuscript merely because it was gathered.

### Continuing the research

At each increment:

1. Reinspect the material bound to the active node.
2. Update its presumptions and incoming evidence.
3. Produce or revise the smallest useful output artifact.
4. Run the node's checks.
5. Propagate only the supported result and validity conditions along outgoing edges.
6. Revise the graph if a dependency, contradiction, or better construction appears.

Do not declare the whole graph complete because one path reaches a manuscript.
Report the supported frontier, rejected paths, unresolved nodes, and the materials
available for whichever node the user chooses next.
