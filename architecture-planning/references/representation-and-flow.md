# Representation and flow

Use this lens only to decide what values cross boundaries and how they are
admitted, transformed, selected, and evidenced. It owns data shape and flow, not
effect authority, public compatibility, resource lifetime, or mathematical laws.

## Typed admission

- Prefer construction of an admitted type over check-then-reconstruct code.
- Prefer a maintained dependency that decodes or validates directly into typed
  structures over handwritten key, attribute, or runtime-shape checks.
- Decode unavoidable wire syntax once, invoke the schema/type constructor at the
  boundary, and pass only admitted values downstream.
- Encode alternatives as tagged/discriminated unions and select once. Do not
  redispatch through nulls, strings, dictionaries, `getattr`, or `isinstance`
  chains.
- Use runtime predicates only at an unavoidable untyped edge; contain them in one
  adapter that returns a typed result.
- A typed dependency must replace interpretation while keeping the schema source,
  compatibility, dependency cost, and diagnostic quality explicit.
- Reject invalid or ambiguous construction with stable diagnostics and name the
  admitted type, variant selector, and next consumer.
- When runtime identity matters, bind it once during construction and carry it in
  the admitted value.

## Composable flow

- Give each transformation one admitted input and one explicit output or failure
  type. A stage exists only when it changes data, evidence, or capability.
- Arrange transformations in visible pipe-in/out order. Prefer shallow methods,
  early typed results, composable intermediates, and final delegation over nested
  orchestration and relay objects.
- Tail delegation must preserve errors, cancellation, and resource handoff. Use a
  linear orchestrator or iterative state transition when the language lacks
  tail-call optimization.
- Fluent syntax is acceptable only when intermediate types remain visible and it
  does not hide effects, retries, mutation, or failures.
- Compute expensive intermediates once; projections do not recompute them.

## Evidence preservation

- Preserve grain, schema, clocks, provenance, uncertainty, authority, and
  completeness through every conversion. Share downstream code only when
  contracts are identical.
- Evidence names resource/media identity, observed interval or region, validator
  or digest, time, source, operation, parameters, raw observation, normalized
  result, confidence, status, and diagnostics as applicable.
- Keep failed, unavailable, uncertain, partial, stale, mismatched, changed, and
  nothing-found states distinct. Incomplete evidence cannot authorize a complete
  result.
- For temporal evaluation, separate event, knowledge, decision, horizon, and
  source-age times; fit preprocessing and models inside reproducible walk-forward
  or purged folds and retain the exact accepted manifest/order. Test leakage with
  future perturbation and outcome shuffling against a declared no-signal baseline.
- Capture proves appearance, OCR observes visible text, and model output proposes
  interpretation; never silently promote one evidence class into another.
- Sync and async paths obey the same admission law. Any mutation consuming
  evidence receives its admitted identity and completeness explicitly.

Hard gate: raw input is admitted once into explicit variants; every path has one
selection point, exact provenance, explicit failure states, linear composable
transitions, and a testable output contract. Positive/negative schema fixtures and
searches for surviving manual shape checks prove the migration.
