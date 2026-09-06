# Evidence and Synthesis

Evidence is a typed relation between an epistemic object and a discriminating
operation. A paper, example, calculation, or output is material; it becomes evidence
only after its relevance, witness, and boundary are admitted. Evidence records a
result. Only synthesis emits a disposition.

## Evidence packet

Record enough structure to replay its inferential role:

```text
id and target inquiry/claim version
claim dimension or ambiguity tested
question and outcomes it distinguishes
constructed inputs, operation, and observed result
witness, certificate, error, or data
domain, presumptions, observable, and resolution
provenance, source/implementation revision, and independence
resource/cost model and unresolved alternatives
permitted consequence and known failure boundary
```

The boundary is part of the evidence, not a later caveat. It states admitted
objects, assumptions, observable/capability, approximation or tolerance, resources,
revision, and untested alternatives.

## Evidence kinds and inferential rights

| Kind | May establish | Does not establish |
| --- | --- | --- |
| deductive witness | exact support under matched hypotheses | wider applicability |
| counterexample | rejection/restriction in its matched domain | a replacement theory |
| certified computation | a result under stated arithmetic/error policy | a general theorem |
| empirical observation | statistical support under a measurement model | mathematical universality |
| theorem contract | an implication after hypothesis matching | internal generation |
| regression | preservation of known behavior | transfer or novelty |
| transfer bench | unchanged use across tested structural variation | unlimited generality |
| cost/use bench | leverage for the same output and resource model | semantic correctness alone |
| literature protocol | located precedent or bounded coverage | nonexistence or novelty proof |

Several parameters within one model family usually strengthen regression or
robustness, not transfer. A seed that generated a candidate cannot also be its
independent transfer evidence.

## Admission and active closure

For a frozen local contract `C_v`, admit evidence only when its target, claim
dimension, domain, operation, provenance, and witness are explicit and its result
can affect a declared alternative or boundary. Record excluded material and the
reason; exclusion is part of replay.

At synthesis cutoff `t`, the active closure `A_t` contains evidence that:

- targets `C_v` or an explicit subclaim;
- intersects the adjudicated domain and claim dimension;
- passes the frozen admission rules;
- was available before `t`; and
- has not been withdrawn, invalidated, or superseded.

Include supporting, contrary, and conflicting evidence. “All active evidence” does
not mean every file in the worktable; it means this closed, inspectable set.

## Warrant and domain instead of scalar confidence

Do not assign one confidence percentage to heterogeneous research evidence unless a
statistical model gives it meaning. Partition the declared domain for each claim
dimension:

```text
D+  supported
D-  refuted
D?  unresolved or uncovered
Dx  live conflict
```

Attach a profile to each region:

```text
warrant: exact | error-bounded | statistical | comparative | heuristic
coverage: exact domain and observable
independence: seed | regression | reproduction | transfer | adversarial
reproducibility: reproduced | single-run | failed | unverified
conflict: none-known | unresolved | contradictory
```

Thus an exact theorem may have high warrant and narrow coverage, while many nearby
examples may have broad parameter coverage but no cross-family warrant. Headline
labels such as `supported`, `restricted`, `contested`, `rejected`, or `superseded`
are summaries derived from this map, never the only stored state.

## Synthesis triggers

Evidence arrival normally marks the current disposition stale. Synthesize only on
a recorded trigger:

1. **Decisive:** a proof, counterexample, or failure certificate meets a declared
   condition.
2. **Planned closure:** every declared discriminator has completed, failed, or been
   classified unavailable.
3. **Conflict:** admitted evidence contradicts the current disposition in the same
   domain.
4. **Consumer:** a downstream derivation or output needs a bounded current verdict.
5. **Horizon:** the research bound, information plateau, or resource limit is met.
6. **User:** the user requests an interim synthesis.

Time intervals are reporting devices, not epistemic triggers unless the research
contract makes time itself relevant.

## Replayable synthesis

Freeze the campaign decision kernel `K`, local contract `C_v`, evidence IDs and
classifications, domain map, cutoff, and trigger:

```text
V_t = Synthesize(K, C_v, A_t)
```

Record admitted/excluded IDs and reasons, policy snapshot/hash, contract version,
domain-wise disposition, conflicts, untested regions, downstream changes, and the
re-entry condition. Identical frozen structured inputs must produce the same
structured `V_t`; natural-language explanation may vary. If classification or
precedence cannot decide, return `underdetermined` or `conflicted` rather than a
preferred conclusion.

Apply these precedence rules:

- Invalid or mismatched evidence cannot affect the claim but remains recorded.
- An exact in-domain counterexample defeats the corresponding universal region;
  positive examples cannot outvote it.
- Proof/counterexample conflict implies mismatched hypotheses, operation error, or
  live contradiction; expose `Dx` until resolved.
- Positive evidence supports only its domain and claim dimension.
- Regression cannot promote transfer; transfer cannot prove cost gain; cost failure
  leaves correctness unchanged.
- A theorem-contract mismatch leaves the bridge open rather than making it false.
- Only a disposition propagates downstream. New evidence alone does not silently
  mutate a claim.

## Failed reproduction

Treat a failed reproduction as a new evidence packet and classify it before
changing the original claim:

| Class | Initial effect |
| --- | --- |
| environment/version or data drift | bound the reproduction evidence |
| input, unit, or protocol mismatch | repair/compare contracts |
| implementation defect | contest the implementation |
| numerical instability or stochastic variation | revise error/stability evidence |
| hidden assumption | restrict the original domain |
| statistical non-replication | update the declared statistical model |
| semantic target mismatch | no direct claim transition |
| original result failure | contest/reject the matched claim region |
| unresolved cause | retain `Dx` or `D?`; do not propagate success |

## Literature-search coverage

Before using search as evidence, declare the question and synonyms, databases and
source types, dates/languages/disciplines, inclusion/exclusion rules, backward and
forward citation paths, competing terminology, and inaccessible classes.

Stop when authoritative/citation paths are covered and successive searches no
longer add a source that changes the claim, precedent, or boundary map. This is
purpose-relative saturation, not proof of completeness. The strongest negative
claim is:

> No prior work was found within the declared search protocol and coverage.

If an inaccessible source class could reverse the verdict, keep novelty or absence
provisional. Select further evidence for its ability to discriminate the weakest
consequential bridge relative to full acquisition/validation cost, not because it
is easiest to obtain.
