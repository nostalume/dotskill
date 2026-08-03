# Dataflow and evidence

Use this lens for pipelines, variants, temporal models, visual observations, or
bytes and protocol responses that authorize later work.

## Composition

- Draw input, transformation, retry, persistence, and effect paths.
- Name semantic variants and define decisive typed results. Dispatch once at one
  composition boundary; downstream stages do not infer modes from nulls, flags,
  dictionaries, or erased metadata.
- A stage exists only when it transforms data, evidence, or capability.
- Preserve grain, schema, clocks, provenance, uncertainty, and authority through
  every conversion. Share downstream code only when contracts are identical.

## Temporal evaluation

- Distinguish event time, known-at time, decision time, horizon, and source age.
- Keep outcomes separate from features and join them only inside deterministic
  walk-forward or purged folds.
- Fit preprocessing, selection, calibration, and estimators inside each training
  fold. Prediction loads the exact accepted manifest and order.
- Prove leakage resistance with future perturbation, outcome shuffling against a
  declared no-signal baseline, and reproducible folds/artifacts.

## Visual evidence

- Capture proves appearance; OCR observes visible text; VLM output proposes an
  interpretation. Do not treat these as interchangeable evidence.
- Bind every claim to media identity, time or region, operation, parameters,
  raw observation, normalized result, confidence, status, and diagnostics.
- Preserve failed, unavailable, uncertain, and nothing-found as distinct states.

## I/O authority

- Evidence identifies resource, observed interval, validator or digest,
  timestamp, source, and completeness.
- Partial, stale, mismatched, or changed observations cannot authorize full
  persistence. Sync and async paths obey the same admission law.
- Bind mutation APIs to admitted evidence and preserve primary plus cleanup
  errors under truncation, cancellation, races, and retries.

Hard gate: every path has one selection point, exact provenance, explicit
failure states, and a testable output/effect contract.
