# Module topology

Use this lens to decide how material semantic owners and their relationships
project into helpers, types, modules, files, directories, packages/crates,
visibility and re-exports. The domain lens owns meaning and invariants; authority,
representation, contracts, resources and cost retain their own decisions. This
lens imports those constraints and owns only topology. An implementation-local
relay whose removal cannot change them belongs to `software-development` and needs
no plan artifact.

## Construct the semantic graph

Start with current repository evidence and the already-selected architecture:

```text
domain capability and vocabulary
  -> invariant, policy, authority, effect or lifecycle owner
  -> admitted dependency and translation edges
  -> visibility and compatibility surface
  -> project-native physical projection
```

For each proposed node, name the distinction it owns, the callers or consumers
that need it, what may depend on it, what it may depend on, and whether it is
private, public, generated, platform-specific or transitional. Record expected
change locality only when current callers, maintained history or the accepted
change model provides evidence; do not invent hypothetical volatility.

Cycles, reciprocal imports, broad re-exports and repeated cross-boundary access are
signals to recheck ownership, not automatic proof that another layer is needed.
Split one semantic owner only when the split preserves a clear dependency
direction or isolates a real authority, lifecycle, compatibility or variation.

## Make boundaries pay semantic rent

A conceptual or physical boundary is justified when it owns at least one of:

- a distinct domain concept, invariant or policy;
- authority, effect admission or translation between representations/contracts;
- a resource, concurrency or recovery lifecycle;
- a public, security, protocol or compatibility surface;
- a reusable pure algorithm or real variation used by coherent consumers; or
- an evidenced independently changing unit whose separation reduces coupling.

Line count, indentation, lexical prefix, visual symmetry, mock convenience,
possible future reuse, one current call site, or a preferred function/file size do
not independently earn a boundary. Do not fragment one capability so each file
looks small, and do not merge distinct owners merely to reduce file count.

A receiver method is not universally better than a free function. When the
receiver already owns the operation and a proposed helper only forwards the same
inputs and outcome, direct delegation is the smaller topology. Keep a free
function for an operation that belongs to no receiver or for an independent pure
algorithm. Keep a wrapper when it owns an adapter, policy, translation, lifecycle,
compatibility or other admitted obligation.

## Select the physical projection

Apply enforced project and language rules first, then choose the smallest
projection that preserves the semantic graph:

- Keep one cohesive owner in one file/module when internal names do not need an
  independent boundary; size alone does not require a split.
- Use a directory/grouped namespace when a real parent capability contains
  multiple meaningful children and controls their internal/public edges.
- Use prefix-flat siblings when they are semantic peers, or when an enforced flat
  namespace/project convention preserves their ownership more clearly.
- Keep a small separate generated, platform, protocol, policy or compatibility
  unit when that boundary has an independent source, lifecycle or consumer.
- Mix directory grouping and prefix flattening only when the difference encodes a
  named semantic, visibility, platform or project-native distinction.
- Add a public facade or re-export only for a supported surface or live migration
  consumer, with an owner and removal gate when transitional.

Repository analogues are evidence only when their domain, lifecycle, visibility
and dependency conditions match. Frequency cannot turn unrelated historical
layout into architecture. Preserve a divergent local convention when current
project policy owns it; name the conflict if that policy prevents the semantic
graph from being represented honestly.

## Run the topology protocol automatically

Select this lens whenever a proposal adds, removes, moves, groups or exposes:

- a helper, wrapper, factory or adapter that creates a material conceptual edge;
- a type owner, file, module, directory, package/crate or public namespace;
- an import/dependency edge between semantic owners;
- visibility, facade, re-export or compatibility topology; or
- a second physical-layout convention for one semantic family.

Then:

1. Inventory the relevant current definitions, imports, visibility, callers,
   tests, public surfaces, project rules and matching maintained analogues.
2. Draw only the semantic nodes and permitted edges needed for the change; do not
   require a durable module-map artifact.
3. Assign each proposed boundary its semantic rent and one owner.
4. Run the smallest applicable counterfactuals:
   - replace a helper with the direct owning method/operation;
   - inline or merge a small file into its proposed owner;
   - collapse a directory or group matching prefix-flat siblings;
   - move a symbol beside the invariant, authority or lifecycle it uses;
   - add the next admitted variant or coherent consumer; and
   - trace one representative future change across owners and dependency edges.
5. Reject a boundary when its removal loses no owned obligation, permitted edge,
   visibility rule, compatibility surface or evidenced independent change unit.
6. Record the selected owner/topology and actual-diff falsification obligation in
   the smallest plan or task that consumes it.

Resolve an evidence-entailed projection during planning. Ask the user only when
multiple conforming projections retain a material product or project tradeoff.
Missing history or analogues does not itself block a topology supported by current
semantic owners and dependencies; report uncertainty only at the exact claim it
prevents.

## Audit and handoff

Falsify the proposal by deleting each new boundary, reversing a dependency edge,
changing visibility, adding the next variant, removing a compatibility consumer,
and substituting the project-native flat/grouped alternative where applicable.
The evidence must reject semantic fragmentation and authority inversion while
retaining legitimate pure algorithms, adapters, lifecycle owners, generated or
platform units, parent namespaces, peer modules and compatibility facades.

Hand the settled topology to `software-development` as conceptual constraints,
not mandatory pseudocode or a file manifest. Implementation may remove an obvious
relay locally. It must reopen this lens when the actual diff exposes a material
owner, dependency, visibility, compatibility or change-locality decision that was
not settled.

Hard gate: every material conceptual or physical boundary has one semantic owner,
admitted dependencies and a justified visibility/compatibility surface; the
smallest conforming project-native projection survives its counterfactuals without
relying on file size, prefixes, pattern fashion or user correction.
