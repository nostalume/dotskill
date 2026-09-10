# Authoring Workflow

Use this workflow for both new skills and changes to existing skills. Scale the
work to the capability: a precise one-file skill does not need ceremony, while a
skill coordinating distinct operations needs explicit routing and effect
contracts.

## Establish the contract

Start from representative user requests and the observable result, not from a
directory template. Record only decisions that affect the artifact:

- intended requests and nearby requests that must remain elsewhere;
- whether the work is creation, focused revision, consolidation, retirement, or
  review only;
- result, quality claims, failure states, and any user-reserved choices;
- owners of domain facts, project policy, mutable state, and external effects;
- compatibility that a real caller or supported repository contract requires;
- evidence that can distinguish success from plausible-looking failure.

Inspect applicable repository instructions and routing before choosing the name.
For an existing capability, inspect its full entry point, linked references,
scripts, assets, callers, docs, validators, and relevant history or diff. Treat
current source and direct user edits as evidence that can contradict an earlier
plan or example.

Choose a concise kebab-case name that describes the capability rather than its
implementation, provider, or temporary project. Write the frontmatter description
as a discovery boundary: say what the skill owns, when it should activate, and—if
confusion is likely—what adjacent work it does not own. Keywords alone do not make
the boundary discriminating.

## Close and place the knowledge

Translate the contract using the orthogonal decisions in
[portable capability](portable-capability.md). Preserve the smallest semantic and
operational kernel that can activate, construct the relevant state, choose or
refuse, perform every claimed provider-independent protocol, and name an
unavailable adapter fact without network retrieval. This operational-closure test
does not promise offline execution of an intrinsically remote operation or require
copying the external specification that owns an adapter.

Place knowledge by owner, temporal binding, consequence, availability and actual
consumer:

- Embed stable semantic definitions, invariants and operational protocols when
  omission changes safety, correctness, authority, compatibility or completion.
- Read accepted project facts and version choices from project-local authoritative
  sources rather than generalizing them into the skill.
- Fetch or probe provider-, platform- or version-specific detail at the selected
  adapter when it is large, uncommon, externally controlled or independently
  mutable.
- Use both sides for mutable high-consequence facts: embed the invariant and
  refusal behavior, then establish the current adapter fact before its effect.
- Keep observed evidence with the task or audit unless a named repeated consumer
  justifies a durable resource.

Reuse a fetched, probed or derived claim only while its source owner,
applicability, selected version or target, and invalidation identity remain the
same. Reobserve when consequence or drift makes freshness material. Do not impose
a universal time-to-live, refetch unrelated documentation, or create a mandatory
cache, claim ledger or documentation mirror. If authoritative evidence is
unavailable, stop at the exact affected claim and return the compatible core,
bounded partial result, missing decision or accurate unavailability.

## Design the smallest complete structure

Keep each invariant with its precondition, owner, required outcome, and honest
failure. Give contextual heuristics criteria and override conditions. Route
adapters only after their operation has been selected. Bind evidence to the claim,
source identity, selected bindings and conditions under which it was observed.

Choose resources by their consumers:

| Resource | Add it when | Do not add it merely because |
| --- | --- | --- |
| `SKILL.md` | Always; it owns activation, governing behavior, essential flow, and routing | A reference could repeat the same rules |
| `references/` | A conditional mode or specialized body of guidance would obscure the entry point | Multi-file skills appear more complete |
| `scripts/` | A named caller needs deterministic, repeatable execution or checking that prose cannot supply safely | Automation might be useful later |
| `assets/` or templates | A delivered artifact or operation actually consumes reusable source material | An example looked good once |

Prefer one direct link from the entry point to each conditional owner. A reference
may link to a necessary sibling, but avoid long chains that hide governing rules.
Do not duplicate another skill's contract; link to it at the operation boundary.
Every durable resource needs a consumer, and every route should make clear when the
resource is relevant. A repeated intrinsic decision, operation or validation
obligation is a real consumer even when no separate caller file names it.

Write imperative instructions at the user's level of abstraction. Explain
non-obvious reasoning where it changes a decision; omit generic advice an agent
already knows. Use examples to clarify a variant, boundary, or failure—not as
phrases that outputs must imitate. Avoid mandatory intake forms, fixed phase
counts, fixed file counts, or state artifacts unless the domain contract truly
requires them.

## Create a new skill

1. Confirm that no current skill already owns the capability or should receive a
   focused extension.
2. Define activation, exclusions, owners, invariants, variable choices, effect
   boundaries, failure states, and completion evidence.
3. Draft the entry point first. Add only resources selected by a real conditional
   path, repeated executable need, or delivered-asset consumer.
4. Check each link and selected resource in context. Keep environment-specific
   observations out of portable requirements.
5. Run the repository-supported validator and behavioral cases. Inspect generated
   artifacts and the actual diff rather than accepting command success alone.
6. Add or change repository discovery only after the capability is ready to own
   its boundary.

Do not create a project, install dependencies, or call an external service just to
author prose. If a selected operation actually needs an effect, follow
[external operations](external-operations.md).

## Revise without losing behavior

Freeze the requested change and characterize relevant current behavior before
editing. Map each existing semantic model, decision policy, operational protocol,
adapter, evidence item, resource, caller and unique limitation to one intended
owner. Preserve its normative force and temporal binding where they matter.
Distinguish deliberate behavior from obsolete residue using current callers,
documentation, repository rules and observed results—not personal preference.

Make the smallest coherent change that satisfies the new contract. Preserve
unrelated wording and resources when they remain authoritative. A rename does not
authorize broader activation. A style edit does not authorize changing domain
meaning or effect policy. Review-only work reports findings and does not mutate
the skill unless fixes were also requested.

After editing, rerun the affected behavioral cases and structural checks. Inspect
all changed and newly created files; ordinary diffs may omit untracked content.
Search for stale links and activation text when ownership or names changed.

## Consolidate or retire skills

Consolidation is an ownership migration, not concatenation.

1. Inventory competing activation boundaries, unique behavior, resources, live
   callers, external references, and compatibility obligations.
2. Decide the target owner and map every still-valid rule and resource exactly
   once. Resolve contradictory policy at its governing owner.
3. Build and behaviorally validate the target before changing routing or removing
   an old owner.
4. Cut over discovery and live links together. Keep a compatibility alias only
   for an identified consumer, with a condition for removing it.
5. Search for stale names and inspect the final repository state. Remove only
   files whose ownership and replacement are established; preserve user changes
   and unrelated capabilities.

Do not leave indefinite overlapping discovery owners, a relay-only wrapper, or an
orphaned resource. If unique behavior cannot be placed without changing scope,
reopen that decision instead of silently dropping it. Retirement requires the
same caller and stale-reference evidence as consolidation even when there is no
replacement.

## Complete the work

Use [behavioral evaluation](behavioral-evaluation.md) to map each changed claim to
fresh evidence. Review the actual result for activation, domain meaning, authority,
representation, compatibility, resources, effects, and change economy. Correct
local defects; reopen a governing decision when satisfying the checks would
materially change capability or ownership.

Report the files and behavior changed, exact checks observed, skipped or blocked
evidence, and remaining limitations. Do not publish, install, commit, or modify
unrelated routing unless the request grants that authority.
