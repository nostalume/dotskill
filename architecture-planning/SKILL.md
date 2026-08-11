---
name: architecture-planning
description: Inspect an implemented codebase, gather revision-scoped evidence, resolve architecture or refactor decisions, and produce abstract plans with isolated stages and executable task contracts before coding. Use for project initiation, ownership, APIs, effects, pipelines, protocols, types, numerical laws, resources, failure domains, or architecture documentation.
---

# Architecture Planning

Move through `Bootstrap -> Gather -> Plan -> Stage -> Task`. Keep each handoff
readable and explicit. Stop before implementation.

## Concepts

- **Gather** records incremental observations from the codebase, authoritative
  documents, and, when needed, external sources. It is ephemeral context scoped
  to what was inspected, not proof of permanent truth.
- **Plan** expresses global intent, scope, invariants, decisions, and the target
  architecture. Keep it abstract enough to survive local source edits.
- **Stage** cuts a plan into a bounded delivery outcome. A stage may depend on a
  landed stage, but has no hidden dependency and can be reviewed, verified,
  resumed, and rolled back from its declared boundary.
- **Task** makes one part of a stage executable with source targets, behavioral
  pseudocode, tests, checks, and a stop condition. Keep tasks inside their stage
  document unless the document demonstrably becomes unusable.

Concepts do not require schemas, parsers, state files, or one file per record.
Prefer the smallest set of documents that transfers the information clearly.

## Project workspace

Keep operational planning artifacts out of the tracked project:

```text
<project>/
  .agents/
    gather/
      codespace.md
      <focused-topic>.md
    plan/
      <plan-name>.md
      <plan-name>-stage-01.md
```

Ensure the root `.gitignore` contains `/.agents/`. The leading slash limits the
rule to the project workspace. If `.agents/` is already tracked, report that the
ignore rule does not untrack it; do not remove tracked files without approval.

Gather files may grow incrementally by useful topic. Plan files hold global
plans; adjacent stage files hold their embedded tasks. Use descriptive names,
plain Markdown, and short human-readable statuses only when they aid handoff.
Do not add a redundant `.agents/planning/` layer or archival machinery.

Selected durable conclusions may be promoted to tracked project documentation
when the user or project policy requires it. Never promote ephemeral gather
notes as architectural truth.

## Bootstrap

When the workflow has not started, or no existing plan matches the goal:

1. Resolve the project root and read applicable agent instructions.
2. Inspect repository status, revision, manifests, public entry points, tests,
   authoritative documentation, and the most relevant implementation paths.
3. Infer the goal from the request and inspected project. Ask only about choices
   that inspection cannot answer and that would materially change the result.
4. Ensure `/.agents/` is ignored, then create `.agents/gather/` and
   `.agents/plan/` if absent.
5. Write enough current evidence to frame the goal, then enter Gather or resume
   a relevant readable plan.

When several plans might apply, select by goal and stated status. Ask the user
if the choice remains materially ambiguous. Do not introduce machine state to
avoid reading the artifacts.

## Gather

Inspect retrievable facts instead of asking the user to supply them. Cover the
public API, implementation, callers, tests, manifests, and authoritative docs.
Trace at least one real path:

```text
input -> admission -> behavior -> effect -> persistence/output
```

Name the mechanism at every edge. Explain why current behavior exists and mark
each claim as observation, inference, external report, proposal, contradiction,
or unknown. Briefly record the source location and the revision or dirty state
against which code observations were made.

Treat web material by authority: primary specification or upstream docs,
maintainer statement, secondary explanation, or unverified lead. Search results
discover evidence; they are not evidence by themselves.

Build only the domain map and problem view needed for the goal. Merge symptoms
under root causes; prioritize confirmed correctness or authority defects,
blocking decisions, measured improvements, then optional extensions. Remove
items with no in-scope consequence.

Gather is incremental, not append-only history. Correct or clearly supersede
stale observations. Reinspect affected source before an observation supports a
decision, stage, or task.

## Select lenses

After mapping the current domain, read only references needed by unresolved
problems:

- Ownership, admission, pure computation, effects, configuration, or adapters:
  [ownership-and-effects.md](references/ownership-and-effects.md).
- Pipelines, temporal evaluation, visual evidence, or I/O authority:
  [dataflow-and-evidence.md](references/dataflow-and-evidence.md).
- Mathematical APIs, typestate, sparse topology, scale, or solvers:
  [types-laws-and-numerics.md](references/types-laws-and-numerics.md).
- CLI/API grammar, schemas, errors, cancellation, or compatibility:
  [interfaces-and-protocols.md](references/interfaces-and-protocols.md).
- Archives, storage, publication, recovery, or bounded resources:
  [resources-and-failure-domains.md](references/resources-and-failure-domains.md).
- Evidence-bearing DEC algorithm work only:
  [dec-algorithms.md](references/dec-algorithms.md).

Lenses inform decisions; they never authorize code or create another workflow.

## Plan

Write `.agents/plan/<plan-name>.md` from a global view of current ownership and
behavior. State the goal, scope, non-goals, invariants, target behavior,
architectural direction, main stages, dependency order, success conditions, and
conditions that reopen the plan.

Publish the complete decision surface and grill unresolved choices in dependency
order. For each choice, show fresh evidence, the current-API relation, the
smallest viable alternatives, a recommendation, accepted cost, and failure
cases. Reconcile each answer through downstream decisions and remove stale
alternatives or duplicate concepts.

Only explicit user approval freezes a decision. A proposal, pseudo-API, or
explanation is not approval. Close the plan only when every in-scope decision is
approved or safely deferred and no unresolved choice can change ownership, API,
compatibility, or architecture.

## Stage

Create one `.agents/plan/<plan-name>-stage-NN.md` per main stage. State:

```text
outcome and invariant
relevant gather and plan context
included scope and non-goals
declared owners and dependencies
inputs and produced outputs
current boundary -> target behavior
entry conditions and completion checks
rollback and plan-reopen conditions
```

Copy or summarize the context needed to understand the stage; do not make its
meaning depend on hidden conversational state. Order stages acyclically. A stage
is ready only when its governing decisions are approved, its inputs are known,
and required predecessor outcomes have landed.

## Task

Embed ordered task sections in each stage document. Each task states:

```text
observable outcome and owner
dependencies, constraints, and non-goals
affected source, tests, and documentation
behavioral pseudocode where behavior is not obvious
RED evidence / minimum GREEN behavior / cleanup
verification commands and environments / hard gate
rollback / design-reopen condition
```

Specify behavior precisely without pretending to write the patch in advance.
Reinspect named source before finalizing tasks. A task is ready only when its
stage is ready, its contract is complete, and its dependencies have landed.

List ready, blocked, landed, and deferred stages and tasks in the relevant plan
documents. Name the first ready task and stop until implementation is authorized.

## Hard gates

- Current source is authoritative over stored gather notes; refresh stale
  observations before relying on them.
- Current-state documentation never presents proposals as implemented facts.
- Planning cannot invent decisions; return contradictions to the grill.
- Do not propose a target API before locating its current owner.
- Every current path exists; every proposed owner maps from a current owner.
- No stage has hidden inputs, effects, or dependencies.
- Reopen design only for failed invariants, source contradictions, new
  requirements, or evidence named by the plan or stage.
- Stop before production implementation or host mutation beyond initializing the
  agreed `.agents/` workspace and its precise ignore rule.
