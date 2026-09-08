# Research Loop

Use discovery while the active object is an inquiry without a stable claim. Use
adjudication after a candidate has a frozen local contract. Different regions may
use different regimes, but both advance through the same disposition-producing
transition.

## Canonical values and ownership

These are logical values, not required files or directories:

- **Frontier:** active inquiry or frozen claim, weakest consequential obligation,
  declared horizon, and current alternatives.
- **Local contract `C_v`:** claim/dimensions, admitted domain and presumptions,
  candidate input/output and preserved semantics, falsifiers, promotion
  conditions, heterogeneous benches/adapters, observable/error/complete-route cost
  target, synthesis triggers, horizon, and stop/re-entry conditions.
- **Evidence delta:** evidence identity, target inquiry or contract version and
  dimension, discriminating question/outcomes, input/adapter references, operation
  and observation, witness/certificate/error/data, source and implementation
  revision, provenance/independence, newly established boundary, and permitted
  consequence. It references target-owned fields instead of restating them.
- **Disposition:** domain- and dimension-indexed consequence of synthesizing a
  frozen kernel, contract, and active evidence closure.
- **Retention:** `promote`, `compact`, or `drop` for newly produced material.
- **Cursor:** regenerable current-attention view derived from durable state.

The campaign decision kernel `K` owns evidence inclusion, conflict precedence,
domain preservation, and allowed dispositions. `C_v` owns claim-local thresholds,
benches, falsifiers, and domain. Evidence cannot mutate either. Only a disposition
updates the durable frontier or invalidates an explicit downstream consumer.
Discovery dispositions are `advance`, `hold`, `split`, or `stop`; adjudication may
emit `support`, `restrict`, `reject`, `split`, `conflict`, or `stop` by claim
dimension and domain.

## One linear transition

```text
read(frontier)
  -> select(discriminating action)
  -> execute_or_derive
  -> admit(evidence delta | uninformative result | classified failure)
  -> decide(synthesize -> disposition -> update one owner | no frontier change)
  -> retain(promote | compact | drop)
  -> derive(cursor | stop)
```

An action qualifies only when possible outcomes distinguish live alternatives,
construct a missing object/operation, establish a boundary, or can change a named
downstream decision. If every outcome has the same consequence, it is a calculation
but not a discriminating probe.

Promote material when it changes a future decision, supplies a downstream
consumer, or preserves a consequential refusal/boundary. Compact it to the minimum
anti-repeat record when the negative or failed result may prevent repeated work.
Drop it when it has no future decision, consumer, recovery, or refusal value. Keep
raw scratch and reproducible generated output transient unless independently
consumed. Retention changes material storage, not the inferential disposition.

## Discovery: construct a spine

Begin with intent/capability, phenomenon or dissatisfaction, current presumptions
and candidate descriptions, available material/operations, unknowns, and horizon.
Do not invent a claim merely to populate a state index.

1. **Intent -> tension:** construct the exact mismatch between the requested
   capability and the current objects or account.
2. **Tension -> probe:** name at least two alternatives, or one relation and its
   failure, then construct an operation whose outcomes separate them.
3. **Probe -> distinction:** advance only when the result eliminates/merges an
   alternative, exposes a presumption, constructs an object/operation, or
   establishes a boundary. Otherwise retain or drop it as uninformative.
4. **Distinction -> candidate spine:** require capability, semantic objects,
   motivating obstruction, candidate primitive/construction, output, falsifier,
   decisive bridge, and horizon. Preserve alternatives until evidence separates
   them.

If a probe shows that the tension was ill-typed, revise the inquiry explicitly;
do not hide operational recurrence as a dependency back edge.

## Adjudication: develop a frozen claim

Freeze `C_v` before decisive evidence. A seed may expose the obstruction but cannot
also establish transfer. Examples enter through adapters and do not add candidate
rules case by case.

Choose the smallest bench family that distinguishes the claimed dimensions:
regression, structurally different transfer, adversarial/refusal, and downstream
use/cost comparison where applicable. A finite family bounds the conclusion; it
does not establish universality.

Classify a failure before revising anything:

- domain data stays in an adapter;
- implementation defects repair the realization without changing `C_v`;
- a validity failure restricts the claim;
- a matched counterexample rejects or reconstructs the primitive;
- incompatible preserved semantics split the calculus;
- complete-route cost failure rejects leverage, not correctness.

## Admit evidence and its inferential right

For information extracted from document sources, consume the
[located projection](../../document-artifacts/references/ingestion.md) and the
[artifact result](../../document-artifacts/SKILL.md). Keep source revision,
locators, transcription uncertainty and incomplete coverage attached to the
candidate evidence. Resolve consequential symbol, cell or reading-order ambiguity
against the source before relying on it. Extraction success does not admit a
theorem, validate a claim, or update disposition; the evidence rules below govern
that transition.

Material becomes evidence only when its target, dimension, domain match or explicit
domain delta, operation, provenance, witness, and possible consequence are stated.
Evidence records an observation; only synthesis emits a disposition. Its boundary is
part of the evidence: admitted objects, assumptions, observable, approximation or
tolerance, resources, revision, and untested alternatives. Record excluded material
and its reason for replay.

| Kind | May establish | Cannot establish alone |
| --- | --- | --- |
| deductive witness | exact support under matched hypotheses | wider applicability |
| counterexample | rejection/restriction in matched domain | replacement theory |
| certified computation | result under arithmetic/error policy | general theorem |
| empirical observation | statistical support under measurement model | universality |
| theorem contract | implication after hypothesis matching | internal generation |
| regression | preservation of known behavior | transfer or novelty |
| transfer bench | unchanged use across tested variation | unlimited generality |
| cost/use bench | leverage for same output/resource model | semantic correctness |
| literature protocol | located precedent or bounded coverage | absence or novelty proof |

Parameter variation inside one model family normally strengthens regression or
robustness, not transfer. Evidence generated from the seed is not independent
transfer evidence.

## Close evidence over domain and time

At synthesis cutoff `t`, active closure `A_t` contains supporting, contrary, and
conflicting evidence that targets the active inquiry, `C_v`, or a subclaim;
intersects its domain and dimension; passes `K`; was available before `t`; and is
not withdrawn, invalid, or superseded. It is an inspectable closure, not every file
in the worktable.

Partition each claim dimension rather than assigning one scalar confidence:

```text
D+ supported       D- refuted
D? unresolved      Dx live conflict
```

For each region record warrant (`exact`, `error-bounded`, `statistical`,
`comparative`, or `heuristic`), exact coverage/observable, independence (`seed`,
`regression`, `reproduction`, `transfer`, or `adversarial`), reproducibility
(`reproduced`, `single-run`, `failed`, or `unverified`), and conflict
(`none-known`, `unresolved`, or `contradictory`). Headline labels such as supported,
restricted, contested, rejected, or superseded are derived summaries, never the
only state.

## Synthesize to a disposition

Evidence arrival makes the prior disposition stale but triggers synthesis only
when a declared decisive condition fires, all planned discriminators are completed
or classified unavailable, same-domain conflict appears, a consumer needs a bounded
verdict, the horizon/resource plateau is met, or the user requests an interim view.
Time alone is not a trigger unless time is part of the contract.

For adjudication, freeze all inputs:

```text
V_t = Synthesize(K, C_v, A_t)
```

For discovery, freeze the inquiry version, alternatives/result classes, admitted
deltas, cutoff, and kernel without inventing a `C_v`; emit only a discovery
disposition.

Record admitted/excluded evidence references and reasons, kernel snapshot/hash,
contract or inquiry version, cutoff/trigger, domain disposition, conflicts, untested
regions, bounded consequence, explicit downstream invalidations, and re-entry
condition. Record the subsequent retention result separately. Identical structured
inputs must reproduce the structured disposition; prose may vary. Return
`underdetermined` or `conflicted` when rules do not decide.

Precedence:

- invalid or mismatched evidence has no claim effect but may retain a boundary;
- an exact in-domain counterexample defeats the matching universal region;
- proof/counterexample conflict exposes hypothesis mismatch, operation error, or
  `Dx` until resolved—positive examples cannot outvote it;
- positive evidence supports only its domain and dimension;
- regression cannot promote transfer; transfer cannot prove cost gain; cost failure
  leaves correctness unchanged;
- a theorem-contract mismatch leaves the bridge open rather than false;
- evidence alone never propagates or revises the claim.

## Conflict and failed reproduction

A failed reproduction is a new evidence delta. Classify its initial effect:

| Cause | Initial effect |
| --- | --- |
| environment/version or data drift | bound reproduction evidence |
| input, unit, or protocol mismatch | repair/compare contracts |
| implementation defect | contest implementation |
| numerical instability or stochastic variation | revise error/stability evidence |
| hidden assumption | restrict original domain |
| statistical non-replication | update declared statistical model |
| semantic target mismatch | no direct claim transition |
| original result failure | contest/reject matched region |
| unresolved cause | retain `Dx` or `D?`; never propagate success |

## Literature evidence

Before searching, declare the question/synonyms, databases/source types,
dates/languages/disciplines, inclusion/exclusion rules, backward/forward citation
paths, competing terminology, and inaccessible classes. Stop at purpose-relative
saturation: authoritative/citation paths are covered and successive searches add
no source that changes the claim, precedent, or boundary map.

The strongest negative result is: no prior work was found within the declared
protocol and coverage. Keep novelty/absence provisional if inaccessible material
could reverse it. Select further material by discrimination value relative to full
acquisition/validation cost, not convenience.

## Bind, stop, and revise

Before expanding a branch, name its upstream object/presumption, missing bridge and
invariant, downstream claim/output that can change, nonportable resources, and
compact result returned to the spine. Prefer the action with greatest
discrimination on the weakest consequential bridge; ease, novelty, available
formulas, or technical depth are insufficient. If inaccessible evidence could
reverse the verdict, keep promotion provisional.

A research horizon names the model/phenomenon class, output, baseline routes,
accuracy or structural discriminator, included assumptions, needed material, and
support/rejection conditions. It is an epistemic boundary, not a schedule or
approval gate.

Stop and synthesize when the bridge is supported/rejected, further detail cannot
change the downstream claim, the horizon is crossed, the branch loses its rejoin
edge, or the requested output is supported within scope. Report the supported
spine, weakest open bridge, and parked branches with re-entry conditions.

Durable dependency projection follows explicit acyclic consumption edges as
defined in [research-state.md](research-state.md):

```text
inquiry -> probe -> distinction -> C_v -> evidence -> disposition -> C_(v+1)
```

The cursor carries only regime/frontier, contract version/freeze state, weakest
obligation/current action, pending trigger, and stop/re-entry condition. Regenerate
it from durable owners; it cannot override them. Multiple outputs pin one shared
disposition and only explicit consumers become stale.

Revise a candidate only when admitted input/output, preserved semantics,
generation, refusal, or core boundary changes. Revise `K` only when it admits two
verdicts for identical inputs, cannot classify a modality, replays inconsistently,
violates a governing invariant, or the user changes methodology. Preserve old/new
snapshots, minimal semantic diff, affected verdicts, and replay. An unwanted result
is not a policy obstruction. Record the rule-level obstruction and replay every
affected disposition. Changing the no-silent-change, snapshot, scope, or replay
invariants is a methodology revision outside ordinary adjudication.
