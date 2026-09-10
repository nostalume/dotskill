# Feedback methods

Choose the cheapest evidence that can falsify the claim being implemented. A
method guides development; final delivery verification still evaluates the actual
final diff after the last relevant edit.

## Selection

| Claim | Development feedback | Required distinguishing evidence |
| --- | --- | --- |
| Settled observable behavior at a stable seam | RED-GREEN-refactor | Intended RED, focused GREEN, refactor confirmation |
| Existing behavior under refactor | Characterization plus mutation sensitivity | Baseline behavior and proof the check detects a representative fault |
| Domain or mathematical law | Law/property tests, derivation, or proof obligation | Positive, negative, boundary, and adversarial cases as applicable |
| Settled implementation flow, failure or ownership | Counterfactual and mutation-sensitive conformance | Handler/wrapper deletion, failure/cancellation injection, stage reordering, adapter replacement, or another fault that changes the owned semantic obligation |
| Cost or scale | Benchmark, profile, or counters against a budget | Reproducible baseline, workload, repetitions, result, and noise limits |
| Structural or style policy | Formatter, linter, type, dependency, or architecture tool | Applicable configuration/instruction and fresh tool result |
| External effect | Approved disposable integration with post-observation | Exact target, pre/post state, receipt, cleanup, and residue check |
| Uncertain domain or API | Bounded exploration | Discard or reframe the exploration, then settle or reopen the design before production implementation |

Combine methods only when the change makes different kinds of claims. Do not use a
large test matrix to compensate for an undefined contract.

## RED-GREEN-refactor

Use this protocol only after one domain behavior, public or durable boundary,
fixture, expected result/effect, and failure are settled.

1. Write the smallest test through the stable boundary.
2. Run it and confirm the failure is the intended missing or wrong behavior. A
   compile, import, fixture, or environment failure is not RED.
3. Implement the minimum coherent behavior and obtain focused GREEN.
4. Improve names, ownership, flow, and duplication while continuously green.
5. Add edge and failure cases required by the contract and rerun neighboring
   checks after the last edit.

Tests observe public behavior, domain laws, or durable logical invariants—not
private call inventory. Prefer deterministic fixtures and explicit clocks or
randomness. Mock external boundaries rather than the implementation under test;
real effects belong in separately authorized disposable integration tests.

Do not claim TDD without the observed intended RED, focused GREEN, refactor
confirmation, required edge cases, and fresh focused evidence. Do not manufacture
a test-first history for existing behavior.

## Characterization and mutation sensitivity

For behavior-preserving work, record the accepted baseline before production
edits. Demonstrate that the selected check detects a small representative semantic
fault, then restore the baseline and perform the change. This protects the contract
without pretending the feature was developed test-first.

For a settled code-shape claim, use
[implementation normal form](implementation-normal-form.md) and choose the
smallest counterfactual that can falsify semantic preservation: delete a handler
or wrapper, inject failure/cancellation, reorder a meaningful stage, replace an
effect adapter, add/remove the claimed compatibility consumer, or perturb the
accepted workload. Inspect cause, cancellation, cleanup, effects, surviving state
and output—not private helper call counts. If the counterfactual changes only
unenforced syntax or taste, it is not a semantic failure.

## Laws, cost, structure, and effects

- Derive law/property cases from named invariants and preserve tolerances,
  provenance, and failure domains. Example tests do not replace a proof obligation
  when the contract requires one.
- For cost claims, name representative and limiting workloads, environment,
  warmup, repetitions, variance, and the acceptance budget. Reject semantic or
  recovery regressions hidden by a faster metric.
- A structural/style failure is gating only when backed by applicable project
  configuration, an explicit instruction, or consistent maintained analogues.
- Code form that hides or changes accepted meaning, authority, effects, failure,
  lifecycle, compatibility, or an evidenced cost bound is contract conformance,
  not merely surface style; reopen architecture when the accepted constraint must
  change.
- For effects, separate deterministic decisions from adapters. Use unique
  disposable scope, bounded timeouts, post-observation, cleanup, and explicit
  approval for real mutation.
