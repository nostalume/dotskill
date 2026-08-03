---
name: architecture-planning
description: Analyze implemented software top-down, resolve architecture or refactor decisions, and emit a dependency-ready plan before coding. Use for ownership, APIs, effects, pipelines, protocols, types, numerical laws, resources, failure domains, or architecture documentation.
---

# Architecture Planning

Convert source evidence into frozen decisions, then into executable task
contracts. Stop before implementation.

## Records

- Domain map: concept, owner, state, transition, boundary, source.
- Problem graph: ID, consequence, priority reason, dependencies, blocked choice.
- Decision ledger: alternatives, recommendation, cost, failure case, status.
- Task graph: invariant, dependencies, API relation, steps, checks, hard gate.
- Stop line: closure conditions and evidence allowed to reopen the stage.

Statuses are `UNRESOLVED`, `FROZEN`, `DEFERRED`, `READY`, and `LANDED`.
Only explicit user approval freezes a decision. A task is ready only after its
decisions are frozen, dependencies landed, and contract complete.

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

Lenses inform decisions; they never authorize code or create a second workflow.

## Workflow

1. Inspect public APIs, implementations, callers, tests, manifests, and
   authoritative docs. Explain why current behavior exists. Label fact,
   inference, and proposal.
2. Build the domain map and trace at least one input → admission → behavior →
   effect → persistence/output path. Every edge names a real mechanism.
3. Merge symptoms under root causes. Prioritize P0 confirmed correctness or
   authority defect; P1 blocking decision; P2 measured improvement; P3 optional
   extension. Remove entries without an in-scope consequence.
4. Publish the complete decision surface and stop line. Select only relevant
   lenses; do not propose a target API before its current owner is known.
5. Grill choices in dependency order. Show evidence, current-API relation,
   smallest viable alternatives, recommendation, accepted cost, and failure
   cases. Ask only what source inspection cannot answer.
6. Reconcile each answer through downstream rows. Delete stale alternatives and
   duplicate concepts. Freeze only explicit approvals.
7. Close design when every in-scope decision is frozen or non-blocking deferred
   and no unresolved choice can change ownership, API, compatibility, or
   architecture.
8. Reinspect named source and build an acyclic task graph. Each task states:

   ```text
   ID / priority / outcome / owner / status
   decisions / depends on / blocks
   invariant / constraints / non-goals / production LOC budget
   current API -> target behavior
   ordered source, test, and document steps
   RED / minimum GREEN / cleanup
   verification commands and environments / hard gate
   rollback / design-reopen condition
   ```

9. List landed, ready, blocked, and deferred nodes. Name the first ready task and
   stop until implementation is authorized.

## Hard gates

- Inspect retrievable facts; never ask the user to supply them.
- A proposal, pseudo-API, or explanation is not approval.
- Current-state documentation never presents proposals as implemented facts.
- Planning cannot invent decisions; return contradictions to the grill.
- Every current path exists; every proposed owner maps from a current owner.
- Reopen only for failed invariants, source contradictions, new requirements,
  or evidence named by the stop line.
