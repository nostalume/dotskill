# Executable Research Computation

Use this reference when symbolic, numerical, combinatorial, simulation, data, or
plotting work is substantial because of scale, repetition, dependencies,
nondeterminism, hardware, or reuse, or when an executable certificate bears
inferential weight. Ordinary finite deduction follows
[research-philosophy.md](research-philosophy.md). Reading this reference does not
by itself admit a file, directory, notebook, or project.

## Admit execution before a project

A bounded one-off execution may use an available tool without creating a project
when its typed request, compact result, witness, provenance, and boundary fit an
existing canonical owner. Keep exploratory commands and raw output transient.

Admit a computation project only when execution must be maintained or rerun for a
named consumer and cannot coherently use an existing compatible project. One
compatible connected workload has one project owner, environment lock, and
canonical runner. A second project requires one explicit incompatibility:

- runtime or dependency constraints cannot share a reproducible environment;
- authority, protected data, or security policy requires isolation;
- hardware or resource execution needs a distinct platform lifecycle; or
- a tool has an independent distribution lifecycle.

Probe, certificate, tool, notebook, language, and result kinds do not independently
justify projects. Notebooks and scripts in one substrate share the environment and
canonical runner; a notebook is an interface, not a second implementation owner.
Reject a split whose only rationale is convenience, experimentation, or local
self-containment.

For each admitted project, name its owner/root, compatibility boundary,
environment lock, one supported run command, resource/refusal policy, generated
output policy, and consumers. Follow the physical admission and naming rules in
[research-state.md](research-state.md).

## Choose the smallest substrate

Choose tools from the operations and validity properties that must be preserved,
not from the first probe's language:

```text
typed request and request-owned semantic contract
  -> project-owned execution policy
     (realization, numerical policy, budget, refusal)
  -> maintained exact/symbolic/numerical substrate
  -> compact result, certificate, provenance, and boundary
```

Use maintained packages for commodity rational arithmetic, matrix operations,
elimination, nullspaces, tensor canonicalization, quadrature, eigensolvers, data
transforms, and plotting. Retain a custom kernel only when coefficient domain,
rewrite orientation, canonical form, zero policy, termination, or resource refusal
is itself the research object. A CAS supplies execution, not semantic meaning;
unrestricted simplification or undecided symbolic equality is not a proof.

Prefer invariant or symmetry-adapted reductions before large expansion. Bound
time, memory, precision, seeds/repetitions, hardware, and output volume as relevant;
refuse work whose declared boundary cannot be enforced or observed.

## Canonical run and result

Expose one runtime-neutral interface through the project's canonical command:

```text
Run(request_ref, input_refs, resource_bound)
  -> result_ref
  -> witness_or_certificate
  -> error_and_validity_boundary
  -> environment/provenance/output_digest
  -> named_consumers
```

The request owner supplies the semantic question, admitted inputs/presumptions,
observable, reduction/algorithm, expected result type, and refusal conditions.
Input references carry revisions or digests. The project owns dependency/runtime
identity and execution policy, not the scientific claim.

Return a compact result plus the witness/certificate, exact or estimated error,
validity and instability boundary, environment/tool revisions, seeds/precision,
output digest, and consumers. Return an explicit failure or refusal when execution
does not satisfy the request; a partial run cannot silently propagate success.
Exact runs must replay exactly under the declared environment. Approximate or
stochastic runs declare tolerances, seed/repetition policy, and accepted variation.

## Probe, certificate, and tool roles

- A **probe** discriminates a candidate and may disappear after its conclusion is
  promoted.
- A **certificate** reproducibly checks one result and remains local to that result.
- A **tool** generates output for an independent consumer and owns an input/output,
  refusal, provenance, and error contract.

Compatible roles share the same project and runner. A tool may be checked by a
certificate but must not depend on the certificate or its test as production
authority. Share code for demonstrated common semantics, not similar helper names.

## Retain execution material

Track the minimal source, lock/configuration, canonical runner, and small fixtures
needed to reproduce retained results. Keep caches, raw traces, logs, intermediate
tables, plots, and regenerable outputs ignored or transient unless the state
admission rule gives exact bytes an independent consumer or evidential role.

Do not add a parallel notebook, script, package, environment, or runner without a
named semantic role and consumer. During migration, characterize the old result,
port one vertical semantic slice, compare exact output or declared tolerance and
failure behavior, then remove the replaced adapter when no live consumer remains.

## Test computational leverage

Compare complete routes on one frozen contract:

```text
(model/dynamics, preparation, observable, accuracy)
  -> baseline route and complete cost
  -> proposed reduction and construction cost
  -> same-observable equality or controlled error
  -> recovery cost and failure boundary
```

Include discovery/construction of the reduced object, execution, and recovery of
the requested observable. Semantic compression may offer no cheaper computation;
an invertible reformulation may still gain locality, sparsity, conditioning, or
recursion. Compare transformation depth, time/memory, symbolic growth, conditioning,
reusable intermediates, assumptions, and recovery cost. Representation constrains
admissible channels but does not determine dynamics, preparation, or observables.
State the model class, accuracy, resource scale, and refusal rather than promising
a universal solver.
