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

Specialist skills such as `external-tool-integration` and `system-mutation` add
their boundary-specific contracts when applicable; they do not replace software
development's final verification.

From a project root:

```sh
git clone https://github.com/nostalume/dotskill.git .agents/skills
```

Update later:

```sh
git -C .agents/skills pull
```
