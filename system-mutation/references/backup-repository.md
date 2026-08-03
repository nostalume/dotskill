# Backup repository migration

Treat an encrypted repository as an identity-bearing graph, not a directory of
independent files. Preserve repository identity, encryption keys, backend endpoint,
bucket or container, namespace or prefix, snapshot lineage, and retention policy.

## Admission

Observe the target read-only and classify it as exactly one of:

- empty;
- the same repository lineage;
- a different repository;
- inaccessible or ambiguous.

Never initialize an unknown target, overwrite a different lineage, or prune either
side before restore evidence exists. Keep the source readable and unchanged during
the migration.

## Procedure

1. Record redacted source identity, namespace, snapshot inventory, policy, and keys.
2. Create or select the target only after classification and approval.
3. Copy repository objects without changing their logical names or contents.
4. Open the target using the original repository identity and credentials.
5. Compare snapshot lineage and repository metadata.
6. Restore representative files into a disposable directory and compare digests.
7. Create one new snapshot through the target and verify it joins the same lineage.
8. Retain source and recovery material until the user accepts the migration.

Redact credentials from commands, logs, receipts, and reports. A completed copy is
not a successful migration until both restore and continued-write checks pass.
