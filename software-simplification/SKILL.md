---
name: software-simplification
description: Reduce software concepts without changing its accepted contract. Use for focused diff cleanup, relay removal, module or Rust crate flattening, CLI-to-library migration, dataframe pipeline simplification, or reactive-notebook migration after architecture is settled.
---

# Software Simplification

Preserve observable behavior while reducing owners, branches, conversions,
wrappers, compatibility residue, and maintenance obligations. If ownership,
public API, schema, effects, compatibility, or architecture is still disputed,
return to architecture planning.

## Select detail

- Modules, crates, re-exports, CLI/library ownership, Cargo features, or public
  topology: [structural-migration.md](references/structural-migration.md).
- Dataframes, ML composition, numerical scripts, or reactive notebooks:
  [analytical-migration.md](references/analytical-migration.md).

Read neither reference for a local, self-contained cleanup.

## Workflow

1. Freeze scope from the actual diff or explicitly named owners. Record status,
   public behavior, errors, schemas, effects, compatibility, representative
   performance, callers, and canonical commands.
2. Establish characterization or regression evidence before changing an
   unprotected contract. Demonstrate mutation sensitivity when behavior already
   exists; do not manufacture an artificial RED.
3. Classify each candidate as real boundary, transformation, orchestration,
   compatibility, or relay. Keep boundaries with independent lifecycle,
   authority, release policy, reusable pure algorithm, or real variation.
4. Try the reduction ladder: delete/no change → standard or platform mechanism
   → installed dependency → direct expression/call → smallest custom owner.
5. Select one surviving owner. Trace definitions, imports, re-exports,
   constructors, serializers, tests, docs, configuration, and effects.
6. Migrate one connected vertical path. Do not create a bridge unless two live
   versions have named consumers and a removal gate.
7. Move every remaining consumer, then delete obsolete wrappers, aliases,
   flags, files, fixtures, configuration, tests, and docs in the same slice.
8. Search retired paths/names and inspect the filesystem. Compare behavior,
   schema, errors, effects, runtime, and memory against the baseline.
9. Run focused formatter/linter/type/tests, then canonical verification from
   fresh state. Report before/after conceptual owners and LOC separately for
   production, tests, examples, benchmarks, and docs.

## Hard gates

- The accepted contract is unchanged or an approved task names the delta.
- Every removed boundary has one surviving owner and zero consumers.
- A new abstraction has multiple coherent consumers or a hard boundary.
- Fewer lines do not justify clever metaprogramming, erased semantics, repeated
  validation, or hidden compatibility.
- Performance claims include representative command, data, repetitions, result,
  and noise limits; metric-worse experiments are reverted.
- Completion requires zero retired paths and fresh focused plus canonical checks.
