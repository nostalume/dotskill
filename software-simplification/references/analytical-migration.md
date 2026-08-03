# Analytical migration

Use for dataframe/ML pipelines or migration from an imperative numerical script
to a reactive notebook.

## Preserve the analytical contract

Record row grain, keys, schema and order, temporal semantics, missing-data
policy, artifacts, random seeds, numerical tolerances, runtime, peak memory,
plots, and side effects on representative data.

- Keep validation at external/public boundaries; remove repeated internal shape
  checks already enforced by native APIs.
- Replace non-transforming middleware with native dataframe expressions and
  explicit ML composition. Use one named conversion boundary between dataframe
  ecosystems; avoid row dictionaries before final presentation.
- Preserve typed provenance when it authorizes persistence. Do not hide source
  coverage repair or changed missing-value policy as cleanup.

## Reactive migration

Map variables, computations, presentation, and effects into a dependency graph.
Build cells without hidden order or mutable globals. Isolate file/network work,
seed randomness, recreate visualizations from computed values, and prefer native
reactivity over callback-based imperative control.

Delete the old script/backend only after a clean-kernel run reproduces baseline
metrics/artifacts and control changes update exactly dependent outputs.

Hard gate: rows, schema, numerical results, artifacts, and effects match within
stated tolerances; runtime/memory are measured; obsolete wrappers, serializers,
scripts, and presentation backends have zero references.
