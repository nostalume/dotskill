# Material-backed Research Graph

## Graph semantics

Organize a research program as a directed acyclic graph. Each node is a bounded
research question or construction. Each edge names an output used by another node.

The graph is not a delivery pipeline:

- Nodes do not grant permission, impose approval gates, or prescribe work order.
- Work may begin wherever useful material or insight exists.
- Independent nodes may develop concurrently.
- `A -> B` means B consumes a stated result of A, not that all work in A must finish
  before any work on B starts.

Keep the graph acyclic. If ideas inform each other, combine them into a joint node
or expose successive revisions, such as `hypothesis-v1 -> test -> hypothesis-v2`.

## Worktable

Bind nodes to the worktable specified by the user. It may contain:

- papers, books, source annotations, and comparison notes;
- a manuscript or note under development;
- conjectures, definitions, and derivation fragments;
- datasets, observations, and simulation outputs;
- plots, diagrams, notebooks, and calculation programs;
- reviews, contradiction logs, and comparison tables.

Do not invent a new layout when the user has identified where materials live. Do
not move or rewrite content merely to tidy the graph. When no worktable is specified,
inspect available material and propose the smallest useful representation. A single
Markdown graph is usually enough; schemas or one-file-per-node layouts require a
specific benefit.

## Bootstrap

Build only enough graph to expose the current research frontier:

1. Inventory relevant material with location, role, revision, and reliability.
2. Identify the target observable, theorem, equation, classification, prediction,
   or algorithm.
3. Extract claims, unresolved questions, contradictions, and constructions.
4. Create nodes around semantic problems rather than manuscript sections.
5. Draw each edge by naming the exact output consumed downstream.
6. Represent missing evidence or computation as a node instead of filling the gap
   with prose.

The graph is an incremental view, not append-only history. Correct or supersede
stale nodes when bound materials change. Preserve durable artifacts through the
user's normal version control or publication practice.

## Node contract

Each node states compactly:

- **Question/capability:** what becomes known, constructible, or predictable?
- **Presumptions:** empirical inputs, structural necessities, approximations,
  representation choices, conventions, and inherited claims under challenge.
- **Material bindings:** exact papers, manuscript sections, data, plots, programs,
  or prior node outputs used as inputs.
- **Construction/method:** the semantic operation intended to produce the result.
- **Output:** a claim, proof, counterexample, model, dataset, figure, operator,
  algorithm, or manuscript fragment, with its worktable destination.
- **Checks:** consistency laws, comparisons, limiting cases, falsifiers,
  uncertainty, or independent reproduction.
- **Edges:** which output enters which downstream node and why.
- **Open boundary:** what remains unknown and what evidence would revise the node.

Use states such as `open`, `developing`, `supported`, `rejected`, or `superseded`
only when they help. State is descriptive, never an execution gate.

## Node kinds

Use kinds only when they clarify ownership:

- **Question:** isolates an unknown or capability target.
- **Source:** gathers and compares primary or authoritative literature.
- **Presumption:** tests whether an inherited assumption is necessary or generative.
- **Construction:** defines objects, reductions, or representations.
- **Derivation:** turns constructions into a theorem or equation.
- **Computation:** owns substantial symbolic, numerical, combinatorial, simulation,
  data, or plotting work. Read [computation.md](computation.md).
- **Observation/data:** acquires, cleans, or characterizes empirical material.
- **Visualization:** produces a plot or diagram with a stated interpretive role.
- **Synthesis:** integrates supported outputs into the developing manuscript.
- **Challenge:** seeks counterexamples, failed limits, or competing accounts.

## Evidence and synthesis

Use primary papers, authoritative monographs or lecture notes, and current research
where the field has materially developed. Search results are leads, not evidence.
Label established theorem, standard method, reconstruction, plausible extension,
and conjecture distinctly.

Synthesis nodes assemble only outputs supported by incoming edges. Prefer a coherent
deduction over adjacent background. Material that does not serve the argument stays
bound to its own node; gathering it does not justify adding it to the manuscript.

## Incremental continuation

For the node currently chosen by the user:

1. Reinspect its bound material.
2. Refresh presumptions and incoming evidence.
3. Produce or revise the smallest useful output artifact.
4. Run the declared checks.
5. Propagate only supported results and validity conditions.
6. Revise the graph when a dependency, contradiction, or better construction
   appears.

Do not declare the graph complete because one path reaches a manuscript. Report the
supported frontier, rejected paths, unresolved nodes, and materials available for
whichever node the user chooses next.
