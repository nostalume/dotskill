# File organization

Use [system-mutation](../SKILL.md) for authority, partial effects and
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

For a batch needing review or undo, record source/destination identities, conflicts,
reasons and recoverable actions in a compact mapping. Include intermediate paths
when needed. A single explicitly requested rename can use its command and result;
it needs no separate manifest or repeated approval. Preview stops at the proposed
layout. Apply within existing authority; keep destructive actions explicit.

## Apply file-specific constraints

Keep any mapping and recovery record outside paths being moved or removed.
Re-resolve roots and links before effects; repositories and application-managed
directories remain boundaries unless explicitly included. Do not invent suffixes
or silently overwrite. Use one shell for filesystem operations.

Order dependencies before apply. Cycles and case-only renames may need
collision-checked intermediate paths. Record their locations so interrupted steps
can be reconciled.

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

Report completed/unapplied work, observed locations/identities, preservation losses
and usable reverse actions. An undo
sequence is a plan until executed and checked.
