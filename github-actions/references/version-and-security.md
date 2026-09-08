# Version and security

Re-resolve this policy from current official documentation and repository/enterprise
settings each time. Do not infer a current action version from this reference.

Authoritative starting points:

- [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use)
- [Workflow syntax and permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Keeping actions updated with Dependabot](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions)
- [Reusable workflow reference](https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations)
- [OIDC deployment hardening](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-cloud-providers)
- [Deployment environments](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments)

## Resolve remote identities

1. Identify GitHub.com or the exact GHES version, hosted/self-hosted runner, runner
   architecture, and organization action policy.
2. Prefer a GitHub/provider-official action or a demonstrably maintained action
   with the smallest needed behavior. Inspect its repository, release notes,
   runtime migration requirements, inputs, effects, and permissions.
3. Select a supported stable release, review the concrete patch, resolve its tag to
   the exact commit in the authoritative repository, and pin remote `uses:` to the
   full-length commit SHA. Put the human-readable release tag in a same-line comment.
   Pin container images by immutable digest where applicable. Local actions use a
   repository path and do not need a remote ref.
4. Enable reviewed update pull requests, normally Dependabot with
   `package-ecosystem: github-actions` and `directory: /`. Confirm that the updater
   recognizes the chosen remote syntax and version comment.
5. Record source URLs, resolution time, platform constraints, selected release,
   full SHA/digest, and the review evidence. A floating branch or tag is not an
   immutable supply-chain boundary.

## Permissions and untrusted input

- Declare `permissions: {}` or the least read access by default, then grant only the
  job-scoped capability required by an observed effect. When any permission is
  specified, verify the effective value of all unspecified permissions.
- Treat event payloads, branch/tag names, issue/PR text, paths, matrix values, and
  action outputs as untrusted. Pass values through quoted environment variables or
  structured inputs rather than interpolating expressions into executable code.
- Pull requests from forks and Dependabot do not receive ordinary secrets and
  normally receive a read-only token. Design CI to succeed safely under that model.
- Do not check out or execute untrusted pull-request code in a privileged
  `pull_request_target` or `workflow_run` context. Separate untrusted build evidence
  from any later privileged decision and validate artifact identity/provenance.
- Restrict allowed actions/reusable workflows where repository or organization
  policy supports it. A called reusable workflow may preserve or reduce caller
  token permissions, never elevate them.

## Secrets, OIDC, and environments

Prefer short-lived federated identity over long-lived cloud/registry credentials
when the provider supports it. Grant `id-token: write` only to the job that requests
the token; this permits token issuance, not resource access. Restrict provider trust
by repository, owner, ref/tag, workflow, audience, and protected environment as
supported.

Use environments to gate privileged jobs, restrict deployment refs, require review
where appropriate, and delay environment secrets until protection rules pass.
Never echo secrets, pass them through untrusted code, place structured secret blobs
where redaction is unreliable, or expose them to pull-request workflows.
