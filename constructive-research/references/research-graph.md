# Material-Backed Research Graph

## Graph semantics

The research graph is a DAG of bounded epistemic objects. An edge names the exact
output consumed downstream; it is not permission, work order, or a requirement that
the source node be globally complete.

Use successive objects to expose conceptual revision:

```text
inquiry-v1 -> probe -> distinction -> claim-v1 -> evidence -> disposition
  -> claim-v2
```

Do not draw a back edge for operational feedback. Combine genuinely inseparable
objects or create an explicit revision. The current research view is the latest
non-superseded disposition reachable through declared edges; version control, not a
parallel archive, preserves obsolete wording.

## Worktable and ownership

Bind graph objects to the user's papers, notes, manuscripts, derivations, data,
plots, notebooks, and programs. Do not impose a new directory or one-file-per-node
layout without a demonstrated navigation or ownership benefit.

The tracked worktable owns questions, presumptions, sources, constructions,
computations, evidence, dispositions, open boundaries, and output artifacts.
Repository-local ignored agent space owns inventories, editorial/implementation
plans, migration ledgers, and temporary audits. Promote an audit only when it
changes a research claim, domain, presumption, construction, or open question.

Keep the graph entrypoint current and small: spine or inquiry, active frontier,
material owners, and named edges. Detailed construction, source, computation, and
evidence packets remain with their owning artifacts.

## Bootstrap the smallest graph

1. Inventory only relevant material with location, role, revision, and reliability.
2. Identify the intended capability, phenomenon, theorem, observable, prediction,
   classification, or algorithm.
3. Extract live inquiries/claims, presumptions, contradictions, and constructions.
4. Create objects around semantic obligations rather than manuscript sections.
5. Name the exact value crossing each edge and why the consumer needs it.
6. Represent a missing construction, computation, or evidence bridge explicitly;
   do not fill it with connective prose.

The graph is an incrementally corrected view, not an append-only diary. Before
pruning, assign every current object a semantic consumer or an explicit boundary.
Never assume an untracked artifact is recoverable from Git.

## Node contract

A substantial node states only fields that change its use:

- **Question/capability:** what becomes known, constructible, or predictable?
- **Presumptions and domain:** empirical inputs, necessities, approximations,
  representations, conventions, and assumptions under challenge.
- **Material bindings:** exact sources, data, programs, figures, or prior outputs.
- **Construction:** the typed operation intended to produce the result.
- **Semantic computation:** common target, explicit composites/operation, witness,
  preserved meaning, and failure boundary.
- **Output:** claim, proof, counterexample, model, dataset, operator, algorithm,
  figure, or manuscript fragment and its destination.
- **Evidence/disposition:** IDs and domain-indexed result from
  [evidence-and-synthesis.md](evidence-and-synthesis.md).
- **Edges:** named outputs consumed downstream and open obligations that could
  revise them.

Do not let “method” remain prospective once a result is propagated. An equation
that is motivated but not computed remains an open candidate.

Use specialized nodes only where ownership clarifies: inquiry/challenge,
presumption, source contract, construction/derivation, computation, observation,
evidence, disposition, visualization, or output composition. Node kind and status
never authorize action.

## Durable state and loop cursor

The DAG owns durable epistemic state; the operational cursor described in
[research-loop.md](research-loop.md) owns attention only. A cursor must be
regenerable from the active inquiry, latest dispositions, open downstream
obligations, and declared horizon.

Evidence does not mutate a claim. It enters a disposition node together with the
frozen claim contract and policy snapshot. A semantic-contract change creates a
successor claim version; ordinary evidence or prose does not duplicate the graph.

For multiple outputs, keep one semantic owner and project it:

```text
shared construction/claim/disposition
  -> paper A snapshot
  -> paper B snapshot
  -> plot or dataset snapshot
```

Each output pins the consumed disposition and boundary. A changed disposition
marks only explicit downstream consumers stale. Unrelated papers remain separate;
do not build a universal mega-graph.

## Sources, computations, and outputs

Search results locate sources; they are not themselves evidence. A source packet
records provenance, hypotheses, exact consumed result, disagreements, and limits.
Its theorem becomes usable only through an admitted theorem contract.

Heavy symbolic, numerical, combinatorial, simulation, data, or plotting work lives
in a computation artifact. Return only the compact witness, error, boundary, and
meaning consumed downstream. Read [computation.md](computation.md).

An output manuscript or figure is a coherent projection of supported graph paths,
not the graph itself. Alternatives, failed routes, raw calculations, and open
boundaries remain on the worktable unless they delimit the output's claim.
