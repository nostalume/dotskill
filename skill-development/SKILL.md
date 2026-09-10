---
name: skill-development
description: Design, create, refactor, consolidate, or review Codex skills by turning an intended capability into a portable behavior contract, progressive resources, explicit effect boundaries, and behavioral evaluation. Use when skill instructions or skill ownership are the primary artifact; do not use for ordinary software or artifact work merely performed with a skill.
---

# Skill Development

Own the boundary and behavior of a skill, not the domain facts, project policy, or
external services it uses. Preserve the user's intent and reserved decisions. An
existing project owns its instructions, conventions, manifests, lockfiles, and
accepted local resources. Source owners retain authority over factual content.
Tools and providers own their observable effects; their availability is not
permission to use them.

Establish whether the request is creation, focused revision, consolidation,
retirement, or review only. Inspection and review do not authorize edits. Before
changing an existing skill, inspect its entry point, linked resources, live
callers, repository routing, applicable instructions, validation commands, and
working-tree state. Do not replace direct user changes or unique behavior merely
to make the skill resemble a preferred template.

Read [portable capability](references/portable-capability.md) before authoring or
revising skill policy. It defines the distinction between invariants, contextual
heuristics, recipes, and evidence, plus the portability and ownership rules that
govern every skill.

## Develop the capability

1. Admit the intended requests, exclusions, outputs, authority, failure states,
   and observable quality claims. Reopen a material unresolved choice instead of
   hiding it in prose.
2. Separate durable invariants from adaptable heuristics, selected-operation
   recipes, and current evidence. Give each decision or effect one owner.
3. Choose the smallest complete structure. Keep the entry point focused on
   activation, governing behavior, and routing; add a resource only for a named
   consumer.
4. Author within the target skill and preserve the current project's authority.
   Bind paths, tools, versions, credentials, and providers only when the selected
   operation requires them.
5. Evaluate realistic behavior, inspect the actual artifacts and diff, and run
   repository-supported structural checks after the final edit. Report what the
   evidence establishes and any remaining limitation.

For creation, revision, consolidation, resource placement, or retirement, read
[authoring workflow](references/authoring-workflow.md). When the skill may install
dependencies, execute project code, disclose data, call a remote service, incur
cost, or mutate external state, also read
[external operations](references/external-operations.md) before specifying or
performing that operation. Before delivery, use
[behavioral evaluation](references/behavioral-evaluation.md) to test decisions and
effects rather than wording or template resemblance.

## Hard gates

- A self-contained simple skill stays simple; references, scripts, assets, setup,
  and compatibility layers require actual consumers.
- Portable behavior must not depend on this conversation, an installed authoring
  skill, a workstation path, a hidden runtime, or one provider.
- Examples and successful local observations may illustrate behavior but do not
  become universal policy without independent justification.
- Connected or installed does not mean authorized. Keep credentials out of skill
  files and disclose external effects before they occur.
- Review the actual result against intended activation, domain meaning, authority,
  compatibility, resource ownership, and evidence. Structural validation alone
  does not prove behavioral quality.
- Modify repository routing only when the capability is ready to become its named
  owner. Publication, installation, and unrelated cleanup require their own
  authority.
