---
name: package-release
description: Prepare and publish a language package through reproducible artifacts, clean-version evidence, CI or trusted publishing, and registry observation; includes Python-specific guidance.
---

# Package Release

Use this skill when preparing or publishing a package to a registry.

## Release contract

A release binds one clean source revision to one version, one reviewed artifact
set, one tag, and one registry record. Building, tagging, and publishing are
distinct admissions.

Hard invariants:

- The version is consistent across metadata, tag, artifacts, and registry.
- Artifacts are built from the intended clean revision.
- Consumers install and exercise the built artifacts, not the source tree.
- Artifact contents, metadata, hashes, and sensitive files are inspected.
- Tags and registry publication require explicit approval.
- Publication is complete only after the workflow and registry are observed.
- Published versions are immutable; repair uses a new version.

## Workflow

1. Confirm branch, revision, upstream state, clean tree, version, and release notes.
2. Run the package's canonical tests, lint, and build checks.
3. Build artifacts in a clean environment using the declared build system.
4. Inspect filenames, metadata, file lists, licenses, executable entry points,
   dependencies, and absence of secrets or development residue.
5. Install each consumer artifact into a clean environment and run one import or
   minimal invocation.
6. Record cryptographic hashes and bind them to the revision.
7. Ask for approval before creating or pushing a tag or starting publication.
8. Observe CI or trusted-publishing status and the final registry record.
9. Install the published version from the registry and repeat the smoke check.

## Hard gate

Stop on a dirty or ambiguous revision, inconsistent version, failed artifact
inspection, failed clean install, missing approval, or unobserved publication.
Never rebuild different bytes under an existing version.

## Routed reference

For Python packaging and PyPI, read [Python release](references/python.md).
