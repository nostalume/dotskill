# Research State

Use research state to preserve durable dependencies and material ownership without
turning every inquiry, claim, evidence item, disposition, or cursor into a file.

## Separate logical state from physical material

The logical state is a DAG of bounded epistemic records. An edge names the exact
value consumed downstream; it grants no permission, imposes no work order, and does
not require its source to be globally complete.

Keep these roles distinct:

| Role | Default representation | Authority |
| --- | --- | --- |
| logical record or edge | entry/reference inside an existing owner | dependency only |
| canonical owner | existing material or a newly admitted artifact | durable research facts |
| projection | derived view pinned to owner revisions/dispositions | no independent truth |
| generated output | transient unless retained by admission | deliverable, not claim owner |
| scratch, cursor, or audit | ignored/transient agent space | no durable research authority |

A compact state entry carries only stable identity, canonical owner reference and
revision, exact exported value, consumer and purpose, applicable boundary or pinned
disposition, and open obligation. Claim contracts, evidence deltas, computations,
and exposition stay with their owners; do not copy their schemas into the index.

Represent conceptual revision with successors rather than back edges:

```text
inquiry-v1 -> probe -> distinction -> claim-v1 -> evidence -> disposition
  -> claim-v2
```

The current research view is the latest non-superseded disposition reachable
through declared edges. Version control preserves obsolete tracked wording; a
parallel archive or status tree does not.

## Bind the existing worktable first

Inventory only relevant papers, notes, manuscripts, derivations, data, plots,
notebooks, and programs with their location, role, revision, and reliability. Map
logical records onto those owners. Do not move, rename, split, merge, or delete user
material merely to fit this model; reorganization requires a separately scoped
request and recovery plan.

The tracked worktable owns durable research material. Repository-local ignored
agent space may hold inventories, editorial/implementation plans, migration
ledgers, cursors, and temporary audits. Promote an audit finding by updating the
affected canonical research owner, not by keeping a parallel report. Never assume
an untracked artifact is recoverable from version control.

Bind an extracted projection to its original material and revision through the
[located-extraction contract](../../document-artifacts/references/ingestion.md).
Keep its source locators and limitations with the binding; a converted file does
not replace the source owner or require relocating it. Evidence admission remains
with [the research loop](research-loop.md).

A source owner records provenance, hypotheses, exact consumed result,
disagreements, and limits. Search results only locate sources; a theorem becomes
usable after its contract is admitted through [research-loop.md](research-loop.md).

## Admit a physical artifact

Try these representations in order:

1. Update a compatible existing canonical owner.
2. Add a compact binding or edge to the existing state entrypoint.
3. Create a tracked file only when durable content has a named consumer and cannot
   remain coherent in an existing owner because it has an independent format,
   review, execution, authority, resource, or output lifecycle.

A logical type, large amount of prose, temporary uncertainty, or desire for local
self-containment does not admit a file. A new directory requires a shared build or
tool boundary, distinct authority/security boundary, resource/data lifecycle, or
requested output collection. Node kinds, statuses, and semantic versions never
admit directories.

Generated material stays transient when it is reproducible from retained inputs
and has no independent consumer. Retain it only when the user requests the artifact,
a downstream consumer requires the exact bytes, regeneration is materially unsafe
or costly under the declared horizon, or it is itself admitted evidence. Record
the generator, inputs, revision, and boundary without making the output a second
claim owner.

## Name and place admitted material

Preserve the worktable's established conventions. Otherwise name by stable domain
capability or artifact role, not workflow status, epistemic type, or vague sequence.
Keep status and semantic version in content and version control. Add nesting only
for the independent lifecycle that admitted it, and prefer the shallowest placement
that leaves ownership clear.

For a greenfield worktable, use only the entries that are actually admitted:

```text
existing main document or research.md   # compact spine/index and owner links
compute/                                # only for an admitted computation project
outputs/                                # only for requested/retained deliverables
.agents/                                # confirmed-ignored cursor/audit scratch
```

These names are fallbacks, not a required tree. Keep user-supplied material where
it is and reference it. Do not create empty directories or a file per logical
record.

## Build the smallest reconstructible state

1. Identify the capability, phenomenon, theorem, observable, prediction,
   classification, or algorithm that matters.
2. Extract live inquiries/claims, presumptions, contradictions, constructions, and
   canonical material owners.
3. Group records by semantic obligation rather than manuscript section or status.
4. Name the exact value crossing each edge and why its consumer needs it.
5. Preserve a missing construction, computation, or evidence bridge as an open
   obligation; do not fill it with connective prose.

Use a compatible existing owner as the small state entrypoint. Create one only if
the admission test passes. It contains the active spine or inquiry, canonical owner
references, named edges, and open obligations. The state is an incrementally
corrected view, not an append-only diary. Specialized logical record kinds may
clarify ownership, but they never authorize action or determine physical layout.
A prospective method or motivated-but-uncomputed equation remains an open
obligation; it cannot export a result downstream.

## Retain and project

Apply the loop's `promote | compact | drop` result only to newly produced material:

- promote by updating an existing owner or creating an admitted artifact;
- compact to the smallest owner/edge/boundary record that prevents lost reasoning
  or repeated work;
- drop transient output with no future decision, consumer, recovery, or refusal
  value.

Do not treat `drop` as authority to delete pre-existing user material. Before
pruning a durable entry, assign each exported value to a remaining consumer or
preserve it as an explicit boundary.

Multiple outputs consume pinned projections of one semantic owner:

```text
shared construction/claim/disposition
  -> paper A projection
  -> paper B projection
  -> plot or dataset projection
```

Only explicit consumers become stale after a changed disposition. Keep unrelated
research separate rather than building a universal state. Heavy executable work
follows [computation.md](computation.md); reader-facing exposition follows
[research-writing.md](research-writing.md). Neither output becomes a second owner
of the underlying claim. Alternatives, failed routes, raw calculations, and open
boundaries remain with their worktable owners unless they delimit the projection.
