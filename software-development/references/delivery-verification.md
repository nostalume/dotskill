# Delivery verification

Close evidence over the actual final change. Bind every result to scope, command,
environment, revision or files, time, observed outcome, and limits. Development
feedback explains how implementation was guided; it is an input, not a substitute
for fresh final evidence.

## Invariants

- The final diff and accepted contracts determine the checks.
- Evidence is fresh after the last relevant edit.
- Every changed behavior, law, cost, structure, or effect maps to suitable focused
  or integration evidence.
- Persistent tests and operational acceptance remain distinct evidence classes.
- Produced artifacts are inspected, not merely created.
- Claims never exceed what was run and observed; blocked, failed, or skipped checks
  remain explicit in the report.

## Closure

1. Freeze intended scope and inspect status, final diff, supported platforms,
   contracts, and conformance findings.
2. Map each changed claim or artifact to the evidence that must still hold after
   the last edit.
3. Run focused falsification checks, then relevant formatting, lint, type, static,
   dependency, and security checks.
4. Run project-canonical build, test, and package commands from stable state.
5. Verify process, filesystem, network, and host effects only in authorized clean
   disposable scope; post-observe outcomes and residue.
6. Inspect schemas, files, package contents, logs, hashes, or rendered output when
   the change produces them.
7. Record exact commands, exit codes, salient output, skipped checks, limits, and
   residual risks.

Prefer project-declared runners. Keep ad hoc verification under a task-scoped
temporary root, preserve its source inputs, and use native path forms for native
tools. A verifier script is evidence only when its source, inputs, command, and
result are retained.

Completion requires final-scope identity, no conformance blocker, fresh focused
and canonical evidence, artifact inspection where relevant, bounded effects, and
claims matching observed results. Do not substitute old CI, pre-edit tests,
plausible output, a merely started job, or manufactured RED-GREEN history.
