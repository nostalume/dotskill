---
name: file-organizer
description: Reorganize a user-scoped directory safely. Use for clutter, duplicates, archives, naming, or folder structure requiring a preview, approval, conflict policy, and undo log.
---

# File Organizer

Organization gives each file one intentional owner and destination. Type, date,
and name are evidence, not authority. Prefer the smallest structure matching how
the user retrieves and maintains content.

## Workflow

1. Resolve the exact root, exclusions, desired outcome, and whether mutation was
   requested. Never widen one folder to an entire home directory.
2. Inventory read-only: counts, size, age/type distribution, large files,
   conflicts, links, hidden files, and application or project boundaries.
3. Classify by existing domain ownership, then purpose and lifecycle. Avoid deep
   taxonomies or folders justified by one arbitrary file.
4. Detect duplicates by grouping on size and comparing content hashes. Names,
   dates, or apparent similarity are not identity proof.
5. Propose one manifest: source, destination, reason, conflict action, and
   reversibility for every operation. Show the resulting compact tree.
6. Obtain explicit approval before moving, renaming, overwriting, or deleting.
7. Re-resolve paths; reject stale sources, new conflicts, or links escaping scope.
8. Apply deterministically in one shell, never silently overwrite, preserve
   metadata where practical, and append successes to an undo log.
9. Verify the resulting tree, counts, identity-sensitive hashes, conflicts, and
   the reverse move sequence.

Prefer archive or trash over deletion. Keep destructive actions separately visible
and approved.

## Hard gates

- No mutation without an approved path-specific manifest.
- No deletion based only on name, size, date, or similarity.
- No recursive move/delete outside the resolved root.
- No invented conflict suffix or silent overwrite.
- Repositories, application-managed directories, and links are boundaries unless
  explicitly included.
- Completion requires observed destination state and a recovery path.
