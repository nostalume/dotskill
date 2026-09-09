# Reference and change documentation

Use this guide when completeness, status, and version identity matter more than a
guided narrative.

## API, CLI, and schema reference

Give each externally observable operation its accepted inputs, defaults,
precedence, output/effect, errors, permissions, compatibility, and a minimal valid
example. Generate inventories from authoritative metadata, help, or schemas when
possible; keep domain explanation and usage judgment outside generated blocks.

Validate generation from clean state and compare the rendered reference with the
public interface. A source symbol list is not sufficient when users observe a CLI,
wire schema, process exit status, or packaged API.

## Decision records

State status, context, governing constraints, decision owner, selected decision,
rejected alternatives, consequences, evidence, superseded records, and reopen
conditions. Separate current-state observations, entailed consequences,
user-approved policy, and unresolved proposals. Never rewrite a historical
decision to pretend its context was different; supersede it explicitly.

## Migration and release notes

Bind the note to an exact revision/version range and intended audience. Lead with
user-visible additions, changes, removals, security or compatibility impact, then
give required migration and rollback/recovery. Omit internal churn that changes no
consumer decision.

Derive claims from the actual diff, compatibility policy, and verified artifacts.
Release notes do not authorize a tag, workflow, upload, or publication. Use
package-release when actually preparing or publishing a package; notes alone
remain documentation work. Site/application deployment has its own target and authority.
