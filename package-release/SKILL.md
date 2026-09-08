---
name: package-release
description: Prepare, publish with explicit authority, or verify a language package by binding source revision, reviewed artifacts, version identity, and registry observations. Use for release admission and completion, not ordinary CI or workflow authoring; includes Python guidance.
---

# Package Release

Use this skill when preparing, publishing, or verifying a package release.

`software-development` owns the meaning and final evidence of the underlying code
change. `github-actions` owns creation or review of GitHub workflow structure,
permissions, action versions, and remote orchestration. This skill consumes that
evidence and owns the separate decision to admit a version, tag, artifact set, and
registry publication.

## Release contract

A request identifies `prepare`, `publish`, or `verify`, the ecosystem/package,
source revision and version, artifact set or build inputs, target registry/channel,
required evidence, and actual mutation authority. Bind tags and workflows only
when the project's release process uses them. Preparation, tagging, publication,
and observation are distinct operations; one does not authorize the others.

Preparation binds a clean source revision to reviewed artifacts and hashes.
Publication consumes those exact artifacts and observes the target registry.
Verification compares an identified release with its expected artifacts and
consumer behavior without tagging, uploading, or repairing it. A verification-only
request does not require the local checkout to be clean when it is not a source
input. Use isolated consumer environments when installation checks are in scope.

Hard invariants:

- The version is consistent across applicable metadata, artifacts, registry and tag.
- Artifacts are built from the intended clean revision.
- Consumers install and exercise the built artifacts, not the source tree.
- Artifact contents, metadata, hashes, and sensitive files are inspected.
- Tags and registry publication require explicit approval.
- Publication is complete only after the required artifacts are observed in the
  registry and required consumer checks pass; observe the workflow when one is used.
- Never replace published artifact bytes. Resume or repair according to the
  target registry's official policy and the authorized release identity.

## Workflow

For `prepare`, perform the relevant source/build checks below and finish with the
reviewed artifact set and evidence. Do not require a tag or registry record to
complete preparation. For `publish`, reuse valid preparation evidence for unchanged
inputs; for `verify`, start from the release identity and observation steps.

1. Confirm branch, revision, upstream state, clean tree, version, and release notes.
2. Run the package's canonical tests, lint, and build checks.
3. Build artifacts in a clean environment using the declared build system.
4. Inspect filenames, metadata, file lists, licenses, executable entry points,
   dependencies, and absence of secrets or development residue.
5. Install each consumer artifact into a clean environment and run one import or
   minimal invocation.
6. Record cryptographic hashes and bind them to the revision.
7. Bind tag creation/push and publication to explicit authority for the concrete
   revision, artifact set and destination. Reuse existing authority when unchanged;
   ask only for a missing or changed scope after preparation is reviewable.
8. Observe each required registry artifact and any CI/trusted-publishing run used.
9. Install the published version from the registry and repeat the smoke check.

An isolated build proves the recorded build and artifact checks, not byte
reproducibility. Claim reproducibility only after an appropriate repeated-build
comparison under declared inputs and environment; otherwise leave it unverified.

## Partial publication and result

After an interrupted or ambiguous upload, inspect registry state before retrying.
For each expected artifact distinguish matching publication, confirmed absence,
conflicting identity, failed upload, and unobserved state. Compare registry-provided
digests or fetched bytes with the prepared artifact identity; a successful upload
message or an existing version label alone does not establish the complete set.

Resume only confirmed missing artifacts from the same reviewed set when the
registry permits it and existing authority covers the action. Do not blindly
rebuild, reupload, delete or replace published files. Conflicting bytes, an altered
artifact set or a required correction reopens the release decision. Registry
unavailability leaves observation unverified; it is not proof of absence.

Return the requested operation and its outcome, revision/version, artifact hashes,
target, checks, and per-artifact publication and consumer-installation states.
Distinguish complete, partial, failed, unavailable, refused and cancelled outcomes;
retain earlier effects and unobserved scope. Successful preparation says nothing
about publication. Successful registry observation says nothing about an unrun
consumer check. Preserve reviewed artifacts for a safe resume; report recovery
options without implying that registry effects can be rolled back.

## Hard gate

Stop the affected operation on ambiguous identity, a dirty build source,
inconsistent version, failed required checks, or missing mutation authority.
Do not call publication complete while required registry or consumer evidence is
unobserved. Preparation and verification do not silently advance to publication.

## Routed reference

For Python packaging and PyPI, read [Python release](references/python.md).
