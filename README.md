# dotskill

Reusable Codex skills for research, software work, document artifacts, and host
operations. Each skill has a `SKILL.md` entry point and focused references loaded
when the task needs them.

## Choose a skill

Start with the unresolved question or requested result. These skills are not
mandatory stages in a single workflow.

| Task | Primary skill | Responsibility |
| --- | --- | --- |
| Develop a mathematical or physical inquiry | [constructive-research](constructive-research/SKILL.md) | Construction, evidence, computation, and research meaning |
| Resolve material architecture or refactor decisions | [architecture-planning](architecture-planning/SKILL.md) | Revision-backed decisions and dependency-ordered private plans |
| Design, create, refactor, consolidate, or review a skill | [skill-development](skill-development/SKILL.md) | Portable capability boundaries, progressive resources, effect contracts, and behavioral evaluation |
| Implement, review, or verify a settled software change | [software-development](software-development/SKILL.md) | Code changes and evidence that the actual result satisfies the task |
| Explain software to users or developers | [software-documentation](software-documentation/SKILL.md) | Accurate explanations, examples, and documentation validation |
| Create or review GitHub Actions workflows | [github-actions](github-actions/SKILL.md) | Workflow events, jobs, permissions, dependencies, and run evidence |
| Prepare, publish, or verify a package | [package-release](package-release/SKILL.md) | Practical Python/PyPI and npm recipes, reviewed payloads and registry checks |
| Inspect, extract, create, edit, convert, or render documents | [document-artifacts](document-artifacts/SKILL.md) | DOCX, PPTX, XLSX, Markdown, Typst, LaTeX, and PDF format behavior and fidelity |
| Design, create, revise, or evaluate a visualization | [visualization-design](visualization-design/SKILL.md) | Honest charts, diagrams, maps, infographics, and explanatory static, temporal, or interactive representations |
| Install or register tools, configure a host, or organize files | [system-mutation](system-mutation/SKILL.md) | Bounded changes, existing authority, observed outcomes, and recovery |

For example, a research paper starts with `constructive-research`; accepted
content needing LaTeX compilation uses `document-artifacts`. Editing a PPTX starts
with `document-artifacts`. Installing a missing renderer adds `system-mutation`
for that operation. A settled bug fix starts with `software-development`; an
unresolved architectural choice starts with `architecture-planning`. Creating or
reworking reusable skill instructions starts with `skill-development`; ordinary
work performed by an existing skill stays with that skill's domain owner.

[Presentation resources](document-artifacts/references/presentations.md) provide
independent native authoring/editing examples, native chart/table treatments,
and guidance for content adaptation and scoped revisions.
[Visualization design](visualization-design/SKILL.md) selects and evaluates
information-bearing representations without owning generic UI or unconstrained
image synthesis. Its [temporal and interaction guidance](visualization-design/references/temporal-interaction.md)
keeps one bounded HTML/GSAP example that separates source, frame capture and
encoding; it is an optional recipe, not the default visual system. Neither it nor
the presentation workflow requires one language, platform or complete tool bundle.

## Boundaries

- **Meaning and format have separate owners.** Research owns research claims;
  software documentation owns software explanations. Document artifacts owns
  physical representation and returns checked outputs or located extractions
  with limitations.
- **Tool use and environment changes are separate operations.** Artifact work
  inspects the task root and available tools. Follow the user's manager; otherwise
  use direct official commands and [local isolated environments](system-mutation/references/project-environments.md).
  Prefer task-local storage for new dependencies and caches; preserve existing
  project environments and user-selected shared storage. Explain installation scripts
  before use; routine setup needs no custom installer framework.
- **Validation follows the claim.** Check the requested meaning, structure,
  appearance, behavior, or host effect. File existence and a successful command
  alone do not prove the requested result.
- **Keep only necessary structure.** Load relevant references, reuse settled
  decisions, and create durable supporting files only when they serve an actual
  consumer, reproducibility, or recovery. Architecture planning describes the
  [smallest complete representation](architecture-planning/references/representation-and-flow.md)
  approach.
- **Publication has its own authority.** Implementation or documentation work
  does not by itself authorize a package release or other external publication.

External integration and file organization are focused references within
`system-mutation`, sharing its authority and recovery rules.

## Install and update

From a project root, clone into an unused `.agents/skills` destination:

```sh
git clone https://github.com/nostalume/dotskill.git .agents/skills
```

Update that checkout after reviewing or preserving local changes:

```sh
git -C .agents/skills pull
```

This installs the skill instructions. Compilers, renderers, libraries, services,
and credentials required by a particular task are resolved separately; there is
no repository-wide runtime installation step. Keep task sources and outputs in
their project or worktable, separate from the installed skill instructions.

## Maintain

Keep each `SKILL.md` focused on selection, responsibility, and operating rules.
Put specialized guidance in linked references, and link to another skill's
contract instead of duplicating it. When changing a responsibility or entry
point, update this map and affected links, and check that examples still match
the current instructions.
