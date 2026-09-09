---
name: system-mutation
description: Set up tools and local environments, register integrations, change host configuration, organize files with recovery, or migrate backups. Use for deliberate host or environment changes, not ordinary source edits, artifact creation, or tests merely writing files.
---

# System Mutation

Carry out the requested host change using existing tools and the smallest useful
procedure. Ordinary code and document edits stay with their respective skills.

## Inspect, act and verify

Identify the requested operation, exact targets, relevant existing state and
conflicts. Inspect only what can affect the decision. Preview and verification
requests do not authorize installation, repair, deletion or other unrequested work.

Use authority already supplied by the user and session. Ask only for genuinely
missing permission or information. For an authorized direct operation, its command
and observed result can be the entire plan and record; no typed request, receipt
schema or custom runner is required.

Use the selected tool's official interface. Before a destructive operation, resolve
the actual target and preserve the recovery material the task requires. Refresh
identity immediately before acting when links, concurrent changes or remote state
could change the target. Keep secrets out of command text and reports.

Verify the requested end state, including the actual consumer when readiness is
claimed. A successful command alone may not prove it. Report material changes,
partial results and remaining limits briefly. Keep durable mappings or logs only
when needed for batch recovery, reproducibility or an explicit request.

## Recovery

After interruption, inspect what actually changed before retrying. Preserve useful
partial output and later user edits. Undo only recorded, still-identifiable effects;
do not infer ownership from a path name or old PID. Stop the affected operation if
identity or authority is uncertain. Describe irreversible effects honestly rather
than requiring a fictional rollback. Clean only owned disposable work.

## Read the relevant procedure

- Missing dependencies or a new task environment:
  [minimal project environments](references/project-environments.md).
- Installing or registering a CLI, MCP server or API integration:
  [external integration](references/external-integration.md).
- File layout, conflicts, moves or undo:
  [file organization](references/file-organization.md).
- Platform/API details or implementing a PowerShell provider:
  [host adapters](references/host-adapters.md).
- Configuration edits or dotfile synchronization:
  [configuration](references/configuration.md).
- Backup transfer or verification:
  [backup repositories](references/backup-repository.md).

When implementing mutation software, use software-development for code and tests.
Exercise the specific failure/recovery behavior that software promises in disposable
fixtures. Running an ordinary command does not require building an adapter or
injecting failures into the user's host.
