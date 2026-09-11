# Plan audit

Use this review after drafting or materially revising architecture-planning
artifacts. It tests whether another implementer can execute the plan from the
repository and written artifacts without hidden conversational context. It does
not certify code that has not been written.

## Evidence baseline

Reinspect the affected source and record the revision and dirty state. Read the
applicable agent instructions, public contract, relevant tests and source, and any
applicable formatter, linter, type, build, or architecture configuration. Inspect
the nearest maintained source and test analogues when they exist. Use analogues as
local evidence only when their contracts and constraints match. One example does
not establish a project-wide convention.

Audit from the artifacts and this evidence. Do not rely on what the author meant,
and do not infer implementation success from detailed pseudocode.

## Review dimensions

### Evidence and decisions

- Every material current-state claim has traceable evidence; proposals are not
  described as landed behavior.
- Every resolution is an observed constraint, an entailed consequence, an
  approved policy, or an unresolved proposal. Entailed consequences name the
  premises that leave no material alternative.
- Every decision has one primary lens and may import named constraints from other
  lenses. No imported constraint creates a second decision owner.
- An unresolved policy choice is visible and blocks only the work it can change.

### Ownership and dependency graph

- Every applicable current and target owner, input, output, effect, and receipt is
  named.
- Each stage consumes declared inputs and produces an outcome used by named
  dependents or by the plan's final success condition. Stage and task dependencies
  are acyclic and numerically ordered.
- No task silently changes architecture, public compatibility, authority, or
  resource lifetime beyond its governing decisions.
- No migration leaves duplicate authoritative writers or indefinite parallel
  paths.

### Semantic topology

When a proposal adds, removes, moves, groups or exposes a conceptual/physical
boundary, dependency edge, visibility/re-export surface, or another layout for one
semantic family, apply [module topology](module-topology.md) even when the user did
not identify a layout risk.

- Name the current and target semantic owners, permitted dependency/translation
  edges, visibility, public/compatibility surface and evidenced change locality.
- Give every proposed helper, module, file, directory, package or facade semantic
  rent. File size, prefixes, mock convenience and hypothetical reuse do not supply
  it.
- Run the applicable direct-call, inline/merge, collapse/group, move-to-owner,
  next-variant and representative-future-change counterfactuals. Record the
  selected topology or exact material unresolved tradeoff, not a mandatory module
  map.
- Resolve evidence-entailed topology in the audit. Ask the user only when multiple
  conforming projections preserve a material product or project tradeoff.
- Keep an obvious implementation-local relay cleanup compact; it does not require
  architecture planning merely because a helper or file is touched.

### Task executability

- The outcome is observable or falsifiable, and the selected evidence can
  distinguish the intended result from an unrelated environment failure.
- Minimum accepted behavior is sufficient for the outcome without
  pre-authorizing a speculative abstraction or line-level implementation shape.
- RED-GREEN-refactor is selected only for a settled observable contract with a
  stable test boundary. Other work names the matching characterization, law,
  proof, benchmark, static, integration, or exploratory evidence and its limits.
- Failure, edge, cancellation, cleanup, rollback, and reopen conditions are
  present when the contract makes them relevant.
- Named sources exist, the proposed extension point is plausible from current
  callers, and verification commands are runnable in the stated environment.
- Behavioral tests protect durable contracts. Prefer formatter, linter, type,
  build, dependency, or architecture tooling for structural policy; where no such
  enforcement exists, name the bounded manual review and its limitation.

### Repository conformance

- Naming, visibility, module placement, error handling, and test organization cite
  applicable instructions, tool configuration, or multiple maintained analogues
  when they constrain the task.
- Semantic topology is a conformance gate when ownership, dependency direction,
  visibility, compatibility or evidenced change locality is affected even without
  a formatter or style rule. Exact naming, prefix, file-size and flat/grouped
  preferences remain project policy or taste when those semantics are unchanged.
- The plan distinguishes enforced policy from a common pattern and from reviewer
  taste. Only enforced policy or evidence-backed architectural consistency is a
  hard gate.
- When a user correction reveals a durable convention, bind it to existing
  project instructions or tooling, or identify that durable owner as missing. Do
  not rely on conversational memory or silently universalize a local preference.
- If implemented literally, the task does not require avoidable relay objects,
  parallel authority, repeated interpretation, duplicated computation, or a new
  abstraction without policy, a hard boundary, or coherent repeated use.

### Adversarial read

Ask:

1. What could implementer A and implementer B reasonably interpret differently?
2. What could pass every named check while violating the stage invariant?
3. Which failure, effect, input, consumer, or migration removal gate is hidden?
4. Which claimed convention lacks repository evidence?
5. What newly discovered implementation constraint would reopen the design?
6. Has a convenient test or implementation mechanism distorted the domain model?

## Findings and reconciliation

Record findings compactly in the affected plan or stage; do not create an audit
archive or machine state. Each finding names its scope, evidence, violated
constraint, correction, and one severity:

- **Blocker:** contradiction with current source or approved policy, missing
  authority/input/effect/dependency, unapproved material tradeoff, unverifiable
  outcome, or violation of enforced repository policy.
- **Warning:** evidenced feasibility or maintainability risk that does not make the
  task ambiguous or incorrect.
- **Note:** optional improvement or preference; never a readiness gate.

Fix a finding at the smallest level that owns it, then propagate the correction
through dependent stages and tasks. Reinspect and re-audit only the affected chain.
A task is ready when it has no blocker, each warning has a recorded disposition,
and any remaining proposal is irrelevant to that task. Only a warning that embeds
a material policy tradeoff needs user resolution.

For a complex or high-risk plan, use a fresh-context or independent review when
available and authorized. Give the reviewer the request, current artifacts, and
raw repository evidence, but not the intended conclusion. Independent review
reduces correlated blind spots; it does not replace executable delivery evidence.
