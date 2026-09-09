---
name: software-development
description: Implement, refactor, review, or verify a settled software change through claim-appropriate feedback, actual-diff conformance, and fresh completion checks. Use for ordinary code work; route material unresolved architecture to architecture-planning and package publication to package-release.
---

# Software Development

Own work on a settled software change from its contract to an evidence-backed final
diff, within the authority granted by the request. Domain meaning governs
implementation; tests and tools supply feedback and falsification, not product
vocabulary or architecture.

Reasoning is upstream authority and evidence is downstream falsification; current
source and observed behavior may contradict either and reopen the smallest
governing decision.

## Admission

1. Inspect current instructions, revision, dirty state, manifests, contracts,
   relevant implementation and callers, tests, docs, and project-native checks.
2. Freeze the requested outcome, authority, accepted behavior, affected owners,
   compatibility, effects, resource and cost constraints, and completion evidence.
3. Use `architecture-planning` and stop before implementation when domain meaning,
   ownership, public boundaries, effects, compatibility, lifecycle, or material
   cost can still change the design. For an obvious local edit with a settled
   contract, keep this admission record compact.

Workflow selection grants no additional authority for host mutation, external
integration, destructive operations, workflow execution, or publication.
A review- or verification-only request does not authorize implementation edits;
report findings unless the user also asked for fixes.

## Development loop

Enter at the earliest phase required by the request and available evidence. When
inheriting an existing diff, do not manufacture missing test-first or pre-change
history.

1. Establish a fresh baseline at the stable boundary named by the contract.
2. Read [feedback methods](references/feedback-methods.md) and select evidence that
   can falsify the actual claim; do not impose TDD where no stable behavioral seam
   exists.
3. Implement the smallest coherent domain capability. Prefer admitted types,
   visible linear transformations, explicit failures, terminal delegation, one
   owner per decision/effect, and bounded work.
4. Apply linear or affine machinery only to genuinely single-use capabilities or
   resources. Local mutation is acceptable inside one visible owner when it
   preserves the external value contract and improves clarity or measured cost.
5. If the task is behavior-preserving reduction, read
   [simplification](references/simplification.md) and only the routed migration
   guide that matches the change.
6. Inspect the final implementation with
   [conformance review](references/conformance-review.md). Fix local defects in the
   development loop; reopen the governing architecture decision when the diff
   contradicts an invariant.
7. After the last relevant edit, close the change with
   [delivery verification](references/delivery-verification.md).

Use `system-mutation` for deliberate tool/environment setup, registration, host
configuration, file organization or backup migration. Ordinary code edits and test
files remain here. Its specialized references and effect evidence
augment this loop; they do not replace final verification.

Use `software-documentation` when documentation is the primary artifact and
`github-actions` when GitHub workflow behavior is primary. A code change records
documentation, automation, and release impact; change those additional artifacts
only when the request also authorizes them.

## Hard gate and handoff

Do not call the change complete unless the final scope is identified, the selected
feedback actually exercised each changed claim, conformance has no blocker, and
fresh focused and project-canonical checks support the reported result. Report
exact observed outcomes, skipped or failed checks, residual risks, and any changed
documentation, automation, or release impact. Package publication remains a separately
authorized operation owned by `package-release`.
