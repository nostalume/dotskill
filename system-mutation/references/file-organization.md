# File organization

Use the [shared mutation contract](../SKILL.md) for approval, partial effects and
recovery. This reference owns classification, destination choice and file-specific
identity checks, not a second apply lifecycle.

## Preview an intentional layout

Resolve preview, apply or undo, exact roots/exclusions and the requested outcome.
Inventory relevant files, hidden content, links, conflicts and application/project
boundaries read-only. Never expand a directory request to the whole home folder.

Classify by existing domain ownership, then purpose and lifecycle. Prefer the
smallest structure matching retrieval and maintenance. Type/date/name are evidence,
not destination authority; avoid deep taxonomies or one-file categories.
Detect duplicates by size grouping and content hashes. Similar names, dates or
sizes alone do not justify deletion.

Propose a path-specific manifest with each operation's identity, source identity
and preconditions, destination, reason, conflict action and reversibility. Include
temporary/recovery paths when needed and show the proposed compact tree.
Preview completes with the proposal, not organization effects. Apply consumes
the approved manifest; undo selects recorded operations. Archive/trash is preferred
to deletion, with destructive actions separately visible in the approved scope.

## Apply file-specific constraints

Keep the manifest and recovery record outside paths being moved or removed.
Re-resolve roots and links before effects; repositories and application-managed
directories remain boundaries unless explicitly included. Do not invent suffixes
or silently overwrite. Use one shell for filesystem operations.

Order dependencies before apply. Cycles and case-only renames may need
collision-checked intermediate paths included in the manifest. Record intermediate
locations so interrupted steps can be reconciled under the shared contract.

A cross-filesystem move may be copy, verify, then remove source. Remove the source
only after required destination content and metadata checks pass. A failed copy
or source removal is partial work, not an atomic move. Report unsupported metadata
preservation before using a mechanism that loses it; locate both surviving copies.

Verify requested counts, tree, content identities, preserved properties and
conflicts. Filename/timestamp checks alone cannot protect content-sensitive undo.

## Reverse only recoverable operations

Undo follows reverse dependency order for observed operations, not every proposed
move. Check present identities and original-path availability before each reversal.
An edited destination, reused original path or uncertain identity stops that
reversal; preserve later user work. An authorized alternative recovery destination
does not establish restoration to the original path.

Deletion/replacement is reversible only while the required original bytes and
properties remain preserved. Do not delete ambiguous duplicates to make counts
match or reconstruct missing content as if recovered.

The shared receipt includes completed/unapplied manifest entries, observed
locations/identities, preservation losses and usable reverse actions. An undo
sequence is a plan until executed and checked.
