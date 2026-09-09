# Configuration and dotfiles

Locate the source of truth before editing: a user-owned file, generated target,
application-managed field or remote setting. Keep secrets and machine observations
out of reusable desired state. Preserve fields another owner may legitimately edit.

For a single setting, inspect its current value and applicable precedence, use the
supported interface, and verify the effective value. Preserve the prior value when
needed for recovery. Do not design a render/merge engine for a direct edit.

For a generator or synchronizer, define which fields it owns, how local changes
survive, and whether synchronization is one-way or supports a round trip. Test
initial application and a meaningful update in a disposable target. Stop if the
platform cannot preserve a required semantic.

For an existing chezmoi project, use direct files for owned content, templates for
declarative variation, and attributes for applicability. Modify scripts are useful
only for actual field-level coexistence; ignore rules do not store target data.
Inspect the proposed diff and preserve permitted local mutations on reapplication.

Apply within existing session authority. Check the changed fields and effective
configuration, and keep secrets out of rendered output, diffs and diagnostics.
