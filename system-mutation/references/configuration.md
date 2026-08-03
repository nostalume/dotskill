# Cross-platform configuration

## Ownership model

Classify every field or artifact before implementation:

- declarative source: user-owned desired state;
- generated target: deterministic output that may be replaced;
- mutable state: state another program legitimately changes;
- secret: sensitive material with explicit source and exposure rules;
- recovery material: backup or rollback evidence;
- machine fact: observed input, never silently promoted to desired state.

Define deterministic `render`, `apply`, `update`, `merge`, and `recover` behavior.
Fail closed when a platform lacks a required semantic; do not silently emulate a
different contract.

## Chezmoi and dotfiles

Choose direct files for fully owned content, templates for declarative variation,
attributes for applicability or lifecycle, and modify scripts only for genuine
field-level coexistence. Ignore rules select applicability; they are not a store
for target data.

Verify in a disposable destination:

1. render from a fresh source state;
2. apply to an empty target;
3. preserve permitted local mutations;
4. update the source and reapply;
5. prove the intended round trip or explicitly document one-way ownership.

Scan rendered output, logs, diffs, and receipts for secrets. Require approval
before applying to the real home or host, then re-observe exact target fields.
