---
name: software-delivery-verification
description: Produce fresh, scoped evidence before declaring software complete. Derive checks from the actual change, run them from stable state, and report only observed outcomes.
---

# Software Delivery Verification

Delivery verification closes evidence over a specific change. Each record binds
scope, command, environment, revision or files, time, observed result, and limits.

## Invariants

- The final diff and project contracts determine the checks.
- Evidence is fresh after the last relevant edit.
- Every changed contract maps to focused or integration evidence.
- Persistent tests and operational acceptance remain distinct evidence classes.
- Produced artifacts are inspected, not merely created.
- Claims never exceed what was run and observed.
- Blocked or failed checks remain blocked or failed in the report.

## Workflow

1. Freeze intended scope; inspect status, diff, supported platforms, and contracts.
2. Map each changed behavior or artifact to required evidence.
3. Finish review and edits; reset the freshness point after every later change.
4. Run focused tests for changed behavior.
5. Run relevant formatting, lint, type, static, and security checks.
6. Run project-canonical build, test, and package commands.
7. Verify process, filesystem, network, and host effects in clean disposable scope;
   request approval before real mutation.
8. Inspect schemas, files, package contents, logs, and hashes.
9. Record exact commands, exit codes, salient output, skipped checks, and risks.

Prefer project-declared runners. Keep ad-hoc verification under a task-scoped
temporary root, preserve source inputs, and use native path forms for native tools.
A verifier script is evidence only when its source, inputs, command, and result are
retained.

## Hard gate

Completion requires final-scope identity, fresh focused and canonical checks,
artifact inspection, bounded side effects, and claims matching observed results.
Do not substitute old CI, pre-edit tests, plausible output, or a merely started job.
