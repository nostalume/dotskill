# Research Loop

Use two loops according to the current epistemic object. Discovery clarifies an
inquiry before a stable claim exists; adjudication develops and tests a claim under
a frozen local contract. Different graph regions may use different loops.

## Discovery: construct a spine

Start with an inquiry packet:

```text
intent or desired capability
phenomenon, dissatisfaction, or observed mismatch
current presumptions and candidate descriptions
materials and available operations
unknowns and present research horizon
```

Do not invent a claim merely to populate a graph. Advance only through a semantic
transition:

1. **Intent -> tension:** construct a mismatch between the requested capability and
   what the current objects or account provide. “This is complicated” is not a
   tension.
2. **Tension -> probe:** name at least two live alternatives, or one relation and
   its failure, and construct an operation whose possible outcomes place them in
   different result classes. If every outcome has the same consequence, it is a
   calculation rather than a discriminating probe.
3. **Probe -> distinction:** execute the probe. Advance only if it eliminates or
   merges an alternative, constructs a missing object/operation, exposes a
   presumption, or establishes a boundary. Record an uninformative probe without
   pretending that the inquiry advanced.
4. **Distinction -> candidate spine:** require a named capability, semantic objects,
   motivating obstruction, candidate primitive or construction, output, falsifier,
   decisive bridge, and horizon. Preserve multiple candidate spines when no result
   distinguishes them.

Discovery may return to an earlier inquiry when a probe shows that its tension was
ill-typed. The durable graph represents this as a new distinction or revised
inquiry, not a hidden back edge.

## Adjudication: develop a frozen claim

Before collecting decisive evidence, freeze a local contract `C_v`:

```text
claim and independent dimensions
admitted domain and presumptions
candidate input/output and preserved semantics
falsifiers and promotion conditions
heterogeneous bench family and adapters
observable, error, and complete-route cost target
synthesis triggers, horizon, and stop/re-entry conditions
```

A seed example may expose the obstruction but cannot also establish transfer. Keep
the candidate's semantics fixed while its bench family runs. Examples may provide
domain data through adapters; they do not add core rules one case at a time.

Choose the smallest bench family that distinguishes the scoped claim. Include a
regression, cross-family or structurally different transfer, adversarial/refusal
case, and downstream use/cost comparison when those dimensions are claimed. A
finite family bounds a conclusion; it does not establish universality.

Classify a failure before changing the candidate:

- domain datum stays in an adapter;
- implementation defects repair the realization without changing `C_v`;
- a validity boundary restricts the claim;
- a distinguishing counterexample rejects or reconstructs the primitive;
- incompatible preserved semantics split the calculus;
- complete-route cost failure rejects leverage, not mathematical correctness.

Evidence admission and synthesis are defined in
[evidence-and-synthesis.md](evidence-and-synthesis.md).

## Bind work to the global spine

Before expanding a branch, state:

```text
upstream object or unresolved presumption
missing bridge and invariant target
downstream claim/output that can change
special resources that may make success nonportable
compact result returned to the spine
```

Prefer the next action that best discriminates the weakest consequential bridge.
Ease, novelty, available formulas, or technical depth do not suffice. Record needed
but inaccessible evidence and ask whether the verdict would change if it were
contrary; if yes, keep promotion provisional. This counters availability bias
without demanding arbitrary breadth.

A research horizon names the model/phenomenon class, output, baseline routes,
accuracy or structural discriminator, included assumptions, needed material, and
support/rejection conditions. It is an epistemic boundary, not a schedule or
approval gate.

Stop and synthesize when the bridge is supported or rejected, further detail cannot
change the downstream claim, progress crosses the horizon, the branch loses its
rejoin edge, or the requested output is already supported within scope. Report the
supported spine, weakest open bridge, and parked branches with re-entry conditions.

## DAG and loop cursor

The DAG owns durable epistemic memory. The loop is a policy for reading its current
frontier, selecting a discriminating action, appending its result, and requesting a
disposition. Operational recurrence remains acyclic through revision:

```text
inquiry -> probe -> distinction -> C_v -> evidence -> disposition -> C_(v+1)
```

The loop cursor is only a regenerable view:

```text
regime and active inquiry/spine
candidate/local-contract version and freeze state
weakest open obligation and current action
pending synthesis trigger
stop or re-entry condition
```

It never overrides the graph. Multiple papers consume pinned projections of shared
claims rather than copying state; follow only explicit consumption edges when a
disposition changes.

## Candidate and policy revisions

Version a candidate only when its admitted inputs/outputs, preserved semantics,
generation operation, refusal, or core boundary changes. New evidence, prose, or a
new disposition does not create a generation.

Separate the campaign decision kernel `K` from claim-local contract `C_v`. The
kernel owns evidence inclusion, conflict precedence, domain preservation, and
allowed dispositions. Thresholds, benches, falsifiers, and local domain belong to
`C_v`. Freeze both for a synthesis.

Revise `K` only when a rule admits two verdicts for the same inputs, cannot classify
a new evidence modality, produces inconsistent replay, violates a governing
invariant, or the user changes the methodology. Record the old/new snapshots,
rule-level obstruction, minimal semantic diff, affected verdicts, and replay
results. An unwanted scientific result is not a policy obstruction.

Terminate meta-policy regress with campaign invariants: no silent or outcome-driven
rule change; preserve prior snapshots; state affected scope; replay every affected
disposition. Changing those invariants is a revision of the research methodology
itself, outside ordinary adjudication.
