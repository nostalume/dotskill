# dotskill

Reusable Codex skills. Each top-level skill directory contains its own
`SKILL.md` and optional references.

## Software lifecycle

Choose the primary skill from the unresolved decision, artifact, or authority:

| Enter when | Primary skill | Owns | Stop line |
| --- | --- | --- | --- |
| Material domain or architecture decisions remain unresolved | `architecture-planning` | Evidence-backed decisions and an audited dependency-ordered plan | Production implementation |
| A settled product-code change must be implemented, reviewed, or verified | `software-development` | Implementation feedback, actual-diff conformance, and fresh completion evidence | Publication |
| Software explanation is the primary artifact | `software-documentation` | Audience contract, authoritative claims, writing, and document validation | Product redesign and publication |
| GitHub workflow behavior is the primary artifact | `github-actions` | Events, jobs, permissions, action identities, remote orchestration, and run evidence | Release authorization and registry truth |
| A package version/artifact set is being prepared or published | `package-release` | Release admission, artifact/version identity, publication, and registry observation | Explicit approval before tag or publication |

These owners are not five mandatory serial phases. A code change records its
documentation, automation, and release impact; additional owners participate only
when their artifact or authority is actually in scope.

For physical document inspection, extraction, editing or rendering, including PDF,
use [document-artifacts](document-artifacts/SKILL.md). Research, software-documentation
and analytical owners retain meaning and evidence acceptance; extracted content
returns with source locations and limitations.

Use [system-mutation](system-mutation/SKILL.md) for host changes, external tool
integration, and file organization. Its focused references share one authority and
recovery lifecycle. Architecture planning applies the
[smallest complete representation](architecture-planning/references/representation-and-flow.md)
pattern to simplify designs while preserving their contracts. Neither replaces
software development's final verification.

From a project root:

```sh
git clone https://github.com/nostalume/dotskill.git .agents/skills
```

Update later:

```sh
git -C .agents/skills pull
```
