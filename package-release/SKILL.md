---
name: package-release
description: Prepare, publish, or verify package distributions using the project's release tooling, artifact checks and registry observations. Includes Python/PyPI and npm recipes; excludes ordinary code work, release-note writing, CI authoring and application/site deployment.
---

# Package Release

Own the package users receive: its contents, version, registry/channel and consumer
behavior. software-development owns code correctness, github-actions owns workflow
behavior, and software-documentation owns release notes. Reuse their valid evidence
for unchanged inputs rather than repeating their workflows.

Inspect the project's manifests, release commands, intended source/version,
requested artifacts and destination. Follow existing tooling and policy. Use
[local environments](../system-mutation/references/project-environments.md) only
when dependencies are missing; release work needs no new environment manager.

## Enter at the requested operation

| Request | Completion |
| --- | --- |
| Prepare | Reviewed package files, source/version identity, hashes and relevant isolated consumer checks |
| Publish | The reviewed payload is uploaded under existing authority, then observed at the specified registry/channel |
| Verify | The identified registry release and requested consumer behavior are checked without uploading or repairing |

Prepare builds from the intended clean source revision, using an isolated checkout
if necessary to preserve unrelated work. A dirty unrelated checkout does not block
registry-only verification. Tags, release notes, platform matrices and CI changes
are required only when the project's release process needs them.

Inspect actual distribution contents and metadata, including required licenses,
entry points and dependencies; exclude unintended secrets or local residue. Smoke
test the installed artifact outside the source tree. Select checks for the promised
artifacts/features; do not require every possible distribution or platform.

Read [Python/PyPI](references/python.md) or [npm](references/npm.md) for direct
recipes. For another ecosystem, use its official project-native tooling and name
any unverified behavior rather than implying a maintained recipe exists.

## Publish and reconcile

Preparation does not authorize publication. Use existing explicit release authority
for the selected revision, payload and destination; ask only for genuinely missing
authority after preparation is concrete. Do not rebuild or silently replace the
reviewed payload before uploading. A tag is a separate effect when used.

After an uncertain upload, inspect the registry before retrying. Distinguish matching
files, confirmed absence, conflicting identity and unavailable observations. Resume
only eligible missing files from the unchanged reviewed set under existing authority.
Never delete a published file to try to reuse its identity.

Verify registry digests or fetched bytes against the prepared payload, and check
the required channel and consumer installation. When a workflow publishes, observe
its run too. Workflow success alone does not prove registry or consumer state.
Report partial publication or unverified checks rather than claiming completion.

Return relevant artifact paths, revision/version, hashes, target and observed checks.
Keep the reviewed payload for retry. No separate receipt schema is required.
An isolated build is not proof of byte reproducibility; claim that only after a
suitable repeated-build comparison.
