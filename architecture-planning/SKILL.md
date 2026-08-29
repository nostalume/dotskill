---
name: architecture-planning
description: Inspect an implemented codebase, resolve architecture or refactor decisions from revision-scoped evidence, and prepare dependency-ordered private plans before coding.
---

# Architecture Planning

Use `Gather -> Plan -> Stage -> Task` as private reasoning concepts. Stop before implementation.

## Private notation

- Plan, Stage, and Task notation exists only under the project-root `.agents/` workspace.
- Number stages and tasks in dependency order. Renumber when dependencies change.
- Never expose this notation in tracked documentation, source, tests, APIs, CLI flags, runtime output, or product file/module/type/function names. Use functional domain names there.
- Store a resolution at the smallest useful level: cross-cutting in the plan, outcome-specific in a stage, or execution-specific in a task.
- Stages and tasks are working decisions, not history. Reorder, split, merge, rewrite, or replace them when requirements change, implementation drifts, evidence contradicts the design, or an emergent problem changes dependencies. Reconcile downstream items and remove stale guidance.

## Workspace

Keep planning artifacts ignored and untracked:

```text
<project>/.agents/
  gather/<topic>.md
  plan/<functional-name>.md
  plan/<functional-name>-stage-NN.md
```

Ensure the root `.gitignore` contains `/.agents/`. If `.agents/` is already tracked, report it; do not untrack files without approval.

At entry, resolve the project root, read applicable agent instructions, and inspect revision, dirty state, manifests, public entry points, tests, authoritative docs, and relevant source. Resume a matching readable plan when goal and status are unambiguous; otherwise initialize the ignored workspace and gather only enough evidence to frame the goal. Do not add redundant planning directories, schemas, parsers, machine state, or archives.

## Gather

Inspect the current revision, dirty state, entry points, manifests, callers, tests, relevant implementation, and authoritative docs. Trace at least one real path:

```text
input -> admission -> behavior -> effect -> persistence/output
```

Record only evidence needed for the decision. Label observations, inference, external reports, proposals, contradictions, and unknowns. Current source overrides stored notes.

Rank external evidence: primary specification/upstream docs, maintainer statement, secondary explanation, then unverified lead. Search results only locate evidence. Promote selected durable conclusions to tracked documentation only when required; never promote ephemeral gather notes as architectural truth.

Choose lenses by the unresolved decision, not by artifact or technology. Each
general rule belongs to one primary lens:

- Who may decide, mutate, or perform an effect: [authority-and-effects.md](references/authority-and-effects.md)
- What value crosses each edge and how it is admitted or transformed: [representation-and-flow.md](references/representation-and-flow.md)
- What externally observable operation must remain compatible: [contracts-and-compatibility.md](references/contracts-and-compatibility.md)
- How a bounded resource is acquired, committed, released, or recovered: [resources-and-recovery.md](references/resources-and-recovery.md)
- What mathematical domain, law, scale, or solver claim must hold: [mathematics-and-numerics.md](references/mathematics-and-numerics.md)

Use specialized lenses only after the applicable general lenses:

- Evidence-bearing DEC algorithms: [dec-algorithms.md](references/dec-algorithms.md)

When an issue spans lenses, assign each decision to exactly one and cross-link
the dependency; do not duplicate the rule.

## Plan

Write `.agents/plan/<functional-name>.md` with goal, scope, non-goals, invariants, current and target ownership/dataflow, approved decisions, ordered stages, success conditions, and reopen conditions. Keep it abstract enough to survive local edits and record ready, blocked, landed, and deferred work.

Grill unresolved choices in dependency order. For each, give current evidence, viable alternatives, recommendation, cost, and failure cases. Planning cannot invent decisions; only explicit user approval freezes one. Reconcile each answer through downstream decisions.

## Stage

Create `<functional-name>-stage-NN.md` for each independently reviewable outcome. Make it self-contained: state outcome, invariant, relevant evidence, scope, non-goals, owners, dependencies, inputs, outputs, current-to-target boundary, entry conditions, completion checks, rollback, and reopen conditions.

Stage numbers must follow dependencies. A stage is ready only when its governing decisions are approved, inputs are known, and predecessor outcomes have landed.

## Task

Embed numerically ordered tasks in their stage document. Each task states observable outcome and owner, dependencies, constraints, affected sources/tests/docs, behavioral pseudocode when useful, RED evidence, minimum GREEN behavior, cleanup, verification command/environment, hard gate, rollback, and reopen condition.

A task is ready only when its contract is complete and dependencies have landed. Name the first ready task, then stop until implementation is authorized.

## Replanning

Reinspect affected source before relying on stored guidance. When demand, development drift, or new evidence invalidates the order:

1. Correct the governing resolution at its natural granularity.
2. Recompute dependencies and numerical order.
3. Update affected statuses, contracts, rollback, and checks.
4. Preserve landed facts while marking replaced decisions clearly.
5. Remove stale alternatives and hidden conversational dependencies.

## Hard gates

- Planning artifacts remain inside ignored `.agents/`; durable project docs use functional language only.
- Current-state documentation never presents proposals as implemented facts.
- Every named current path exists; locate its current owner before proposing a target API or owner.
- No stage or task has hidden inputs, effects, or dependencies.
- Planning does not authorize production implementation or unrelated mutation.
- Reopen design for changed requirements, source contradiction, failed invariants, development drift, or material new evidence.
