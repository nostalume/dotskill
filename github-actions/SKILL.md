---
name: github-actions
description: Create or review terse, secure GitHub Actions workflows for CI, reusable automation, maintenance, or release orchestration. Use when workflow behavior is the primary artifact; leave test meaning to software-development and publication authority to package-release.
---

# GitHub Actions

Own repository workflow structure and remote execution evidence. Start from the
claim the workflow must establish, then derive its trigger, trust boundary,
permissions, job graph, project command, artifacts, and observed result.

## Admission

Inspect current `.github/workflows`, local actions, repository instructions,
canonical project commands, supported platforms/runtime versions, branch and
environment policy, GitHub.com or GHES target, runner ownership, and the requested
mutation authority. A review-only request does not authorize workflow edits, a
push, rerun, approval, deployment, or release.

Resolve these before writing YAML:

```text
goal -> event -> trusted inputs -> token/secrets -> minimal jobs
     -> canonical command -> artifact/receipt -> observed GitHub result
```

`software-development` owns what a build, test, lint, benchmark, or package command
means. This skill invokes those repository-native commands and owns their remote
orchestration. `package-release` owns version/tag/publication admission and registry
observation; a workflow cannot grant that authority.

## Keep workflows small

- Put product logic in a versioned project command or script; keep YAML as visible
  orchestration.
- Start with one job. Split only at a real runner, permission, trust, matrix, or
  artifact boundary.
- Add matrix axes only for declared supported contracts; use explicit includes or
  excludes when combinations differ materially.
- Reuse a workflow only for multiple live callers or a hard centralized trust,
  permission, runner, or policy boundary. Give typed inputs/outputs and minimal
  secrets; permissions may stay equal or become narrower, never broader.
- Give jobs and steps concise outcome names. Comment a non-obvious policy or pinned
  version, not syntax.
- Set timeouts and concurrency from failure/cost semantics. Cancel stale CI work;
  do not casually cancel an in-progress deployment or publication.

## Route by claim

- Always read [version and security](references/version-and-security.md) when using
  a remote action/reusable workflow, untrusted input, secrets, or non-read token
  permission.
- For pull-request, push, merge-queue, scheduled, or manual integration evidence,
  read [continuous integration](references/continuous-integration.md).
- For artifact promotion, deployment, or registry workflow orchestration, read
  [release and publish workflows](references/release-and-publish.md).

Maintenance means keeping actions, runner/runtime assumptions, permissions, and
supported matrices current. Prefer reviewed dependency-update pull requests over
silent floating references or periodic wholesale rewrites.

## Verification and stop line

Inspect the final diff, parse YAML, run `actionlint` when available, validate local
scripts and canonical commands, review expressions and shell boundaries for
untrusted data, and compare permissions/secrets with each job's effects. Treat
`act` or another emulator as optional local feedback, not proof of GitHub-hosted
behavior.

Claims about triggers, permissions, environments, OIDC, artifacts, reusable
workflows, or hosted runners require an observed authorized GitHub run. Report the
workflow/ref, event, run URL or identity, job outcomes, artifacts/effects, and any
skipped observation. Do not push, dispatch, approve, deploy, publish, or rerun a
workflow without the corresponding user authority.
