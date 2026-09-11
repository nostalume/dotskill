# Implementation normal form

Use this reference only after the change is settled. It governs how the actual
implementation preserves accepted meaning, ownership, effects, failure behavior,
resource lifecycle, compatibility and cost. It does not decide those constraints.
When any of them can still materially change the design, return to
[architecture planning](../../architecture-planning/SKILL.md) before coding. An
obvious local edit whose contract is already clear needs no plan artifact.
When a settled change adds or alters material conceptual/physical boundaries,
verify the actual diff against the architecture
[module-topology](../../architecture-planning/references/module-topology.md)
decision rather than inventing layout while coding.

## Optimize local semantic reasoning

Prefer the smallest code organization from which a reader can derive the domain
result, effects, failures, resource transitions and public behavior without
tracking parallel interpretations or owners. Count concepts and live obligations,
not lines, functions, files, indentation, or conformity to a named pattern.

Start from this preservation path:

```text
settled change and authoritative input
  -> admit raw input once into domain-bearing values
  -> select an explicit operation or variant once
  -> perform shallow meaning-preserving transformations
  -> invoke the named effect and resource owners
  -> observe the promised postcondition
  -> return or terminally delegate
```

Give each transformation an admitted input and explicit output or failure. A stage
exists only when it changes data, evidence, capability or an owned effect state.
Compute an expensive intermediate once; do not repeatedly parse, validate,
normalize, query, copy or project it through multiple interpretations.

Use project-native statements, expressions, pipelines, exceptions, result types,
iteration, recursion, actors or tasks. The syntax is conditional; the preserved
semantic path is the invariant. Local mutation is appropriate inside one visible
owner when it preserves the external value contract and improves clarity or
measured cost.

## Preserve terminal handoff

Terminal delegation means the current owner has no remaining semantic obligation
after calling the next owner. Return or transfer that result directly, preserving
its failure, cancellation and resource handoff. Do not add a relay variable,
wrapper, callback, conversion, handler, or `await` solely to relay the same
outcome. Retain such machinery when the current boundary owns observation,
translation, cleanup, supervision, or other work after the call.

When a proposed helper only calls a method or operation on the value that already
owns it, with the same admitted input and outcome, remove the helper and delegate
directly. This is not a universal preference for methods: retain a free function
for an operation that belongs to no receiver or owns a reusable pure algorithm,
and retain a wrapper for a real adapter, policy, translation, lifecycle or
compatibility boundary.

This is not a universal demand for compiler tail-call optimization. Use an actual
tail call only when the language/runtime makes it sound and useful. Recursive
domains, parsers, graph traversal, concurrent fan-out/fan-in and explicit state
machines may not look syntactically linear; keep their transitions, joins,
cancellation and terminal states locally visible instead of flattening away their
meaning.

## Put handlers only at decision owners

An exception handler, result-error mapping, fallback branch or retry boundary is
justified only when this exact owner can do at least one of these:

1. recover through a bounded accepted domain or project policy;
2. translate into its settled public/domain error contract while preserving the
   original cause and relevant source/target identity;
3. compensate or roll back an effect it owns;
4. release an owned resource while retaining both primary and cleanup failures; or
5. add context required by a real consumer that is not already available.

Otherwise propagate unchanged. Remove catch-log-rethrow, catch-wrap at every
layer, broad fallback, and handlers around unrelated work. Do not turn
cancellation into ordinary failure or absence, replace a specific cause with a
generic message, duplicate diagnostics at every layer, retry an uncertain effect
without its idempotency/observation rule, or continue after a partially committed
operation as if nothing happened.

Prefer lexical or language-native cleanup such as RAII, scoped guards, `defer`, or
`finally` when cleanup is the only obligation. When cleanup can also fail, retain
the primary failure and make cleanup failure observable according to the settled
contract. Expected domain alternatives and unexpected faults may use different
project-native mechanisms; do not convert everything to exceptions or everything
to result values merely for visual uniformity.

## Keep effects, resources and work owned

Keep deterministic decisions separate from I/O, clocks, randomness, logging,
persistence and host/external capabilities when the accepted design distinguishes
them. Invoke each effect through its named owner and inspect the required receipt
or post-state. Do not hide a global effect behind a pure-looking helper or create
another adapter that only relays the existing one.

Implement the settled acquire/reserve -> initialize -> commit/adopt ->
release/recover lifecycle using native ownership, scopes or explicit states.
Children may not outlive their structured owner unless a named service adopts and
supervises them. Bound queues, concurrency, retries and caches at the owner able to
refuse or defer work.

## Make every abstraction pay rent

Keep a boundary only when it owns independent policy, lifecycle, authority, public
compatibility, a reusable pure algorithm, or real variation used by coherent
consumers. Prefer deletion, a standard/project mechanism, a direct expression or
call, then the smallest custom owner. Do not add relay services, one-use
interfaces, factories without construction policy, speculative configuration, or
compatibility bridges without a named live consumer and removal trigger.

Some duplication is cheaper and clearer than a false shared abstraction. Some
extra types or lines are necessary to preserve variants, evidence, failure or
recovery. “Short,” DRY, immutable, functional, object-oriented and pattern-shaped
are not independent acceptance criteria.

## Preserve settled semantic topology

Inspect every added, removed or moved helper, wrapper, type owner, file, module,
directory, package/crate, import edge, visibility change, facade and re-export.
The physical diff must preserve the settled semantic owners, permitted dependency
direction, internal/public surface, compatibility gates and evidenced change
locality. A passing test does not prove that topology.

For a boundary introduced only during implementation, run the direct-call,
inline/merge, collapse/group, move-to-owner or next-variant counterfactual that
matches it. Remove an obvious private relay locally when no settled semantic or
project obligation disappears. If the governing owner, edge or surface is absent,
contradictory or materially selectable, preserve the evidence and reopen
architecture rather than choosing topology while coding.

## Falsify the implementation

Inspect the actual diff and use the smallest applicable counterfactual:

- change one input variant and confirm only the selected path changes;
- inject failure or cancellation at each affected edge and inspect propagation,
  cleanup, compensation, downstream non-execution and surviving state;
- delete a handler—if no owned decision or obligation disappears, keep it deleted;
- replace a helper around an owning method/operation with the direct call;
- inline/delete a wrapper—if no policy, lifecycle, compatibility, reusable
  algorithm or real variation disappears, move callers to the surviving owner;
- merge a small file into its proposed owner, collapse/group its namespace, move a
  symbol beside its authority, and add the next admitted variant as applicable;
- replace an effect adapter while holding the settled decision fixed;
- reorder two stages when order matters and confirm evidence detects the fault;
- identify every compatibility path's live consumer and removal gate; and
- perturb representative scale/concurrency or measure a claimed optimization
  against its accepted budget.

A semantic-flow or topology defect is a blocker when it changes or hides accepted
meaning, authority, dependency direction, visibility, effects,
failure/cancellation, lifecycle, public compatibility, evidenced change locality,
or a required cost bound—even without a style rule. Exact syntax, naming, prefix,
file-size, helper placement or flat/grouped preference is gating only when current
project policy or matching maintained analogues establish it and those semantics
are unchanged. When the diff reveals that the settled contract itself is wrong or
incomplete, preserve the evidence and reopen its architecture owner rather than
patching around it.
