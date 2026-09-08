# Release and publish workflows

Use this guide to author remote orchestration for an already admitted release. The
`package-release` skill owns the clean revision, version, artifact, tag, approval,
registry observation, and post-publication smoke contract.

## Separate evidence from authority

1. Select a trigger whose identity matches the release contract—such as an exact
   tag, protected manual input, or approved release event—and validate it against
   package metadata before any privileged effect.
2. Build and verify artifacts once from the intended clean revision in an
   unprivileged job. Inspect contents and metadata, record hashes, and create
   provenance/attestation when required.
3. Transfer the exact immutable artifacts to a separate publish/deploy job. Do not
   rebuild after approval or publish different bytes under the same version.
4. Put the privileged job behind the appropriate protected environment. Grant only
   its required job-scoped permission, using OIDC/trusted publishing instead of a
   long-lived secret when supported.
5. Constrain concurrency so the same version/environment cannot publish twice, but
   do not use cancellation that can interrupt an irreversible operation without a
   recovery contract.
6. Preserve receipts: workflow/run identity, revision, version, artifact names and
   hashes, attestations, target environment/registry, and observed result.

Keep CI and publication in separate trust domains even if one workflow coordinates
both. Untrusted code or artifacts cannot cross into the privileged job without an
explicit identity and provenance check. A reusable publish workflow must accept
typed minimal inputs, inherit no ambient authority, and cannot elevate caller token
permissions.

## Completion boundary

Workflow success proves only the observed GitHub jobs and effects. Publication is
complete only when `package-release` also observes the registry/deployment record
and exercises the published consumer artifact. Do not create/push a tag, dispatch,
approve an environment, deploy, or publish merely because this workflow exists.
