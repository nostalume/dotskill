# Research Computation

Use a separate computation node whenever symbolic expansion, numerical solution,
combinatorial enumeration, simulation, data transformation, or plotting would make
a conceptual node heavy or obscure its semantic argument.

## Reduction before execution

State the semantic question and seek a structural reduction before choosing an
algorithm. Prefer invariants, quotienting, representations, normal forms, spectral
or variational formulations, generating functions, and graph reductions over
component-wise or term-by-term work.

Compare candidate routes by:

- number and meaning of representation changes;
- asymptotic cost and memory scale;
- numerical conditioning or symbolic expression growth;
- reusable intermediate structure;
- cost of recovering the requested observable;
- assumptions hidden by libraries, solvers, or existence theorems.

Low algebraic length is not enough. A reduction must decrease the whole semantic
and computational route rather than move difficulty into a black box.

## Computation-node contract

Record:

- the mathematical input and exact semantic question;
- the presumption or prior-node result being tested;
- the chosen reduction and why it preserves the required meaning;
- algorithm, complexity, and expected scale;
- executable notebook, script, CAS worksheet, query, or plotting source;
- data provenance, environment, parameters, seeds, precision, and tolerances;
- compact outputs consumed by other nodes;
- dimensional, algebraic, numerical, limiting-case, or independent checks;
- instability, approximation, failure modes, and reproducibility limits.

Keep raw traces, large tables, expansions, and generated figures on the worktable.
Return only the compact result, error or validity bounds, and semantic interpretation
to dependent nodes.

## Component calculations

Do not use component-wise expansion as the primary derivation when a structural
operation exists. Use it only when components are the observable representation,
no effective reduction is known, or an independent local check is valuable.

When components are necessary:

1. Name the invariant object being represented.
2. Restrict expansion to the smallest symmetry-adapted basis or required sector.
3. Automate repetitive algebra where that improves auditability.
4. Check signs, indices, dimensions, normalization, boundary conditions, and a
   solvable or symmetric limit.
5. Compress the result back into an invariant statement before downstream use.

Machine computation supplements the mathematical argument. State what was checked
and what remains dependent on implementation, precision, or data quality.
