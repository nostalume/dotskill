# Release and publish workflows

Use this guide for authorized package-release or deployment orchestration.
For packages, package-release defines payload identity and registry/consumer checks.
For application or site deployment, use the requested target's deployment contract;
it does not inherit a package registry lifecycle.

## Separate evidence from authority

1. Select a trigger whose identity matches the release contract—such as an exact
   tag, protected manual input, or approved release event—and validate it against
   package metadata or the selected deployment revision before any privileged effect.
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

Workflow success proves only the observed GitHub jobs and effects. Package publication
also requires registry and consumer evidence under package-release. Deployment
requires its target-specific health and revision checks. Do not create/push a tag, dispatch,
approve an environment, deploy, or publish merely because this workflow exists.
