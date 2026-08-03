# Evidence-bearing DEC algorithm planning

Use this checklist when a typed simplicial/DEC roadmap moves from operators into Poisson, Hodge, homology, or surface algorithms.

## Topology evidence ladder

1. **Codimension-one regularity:** positive-dimensional purity plus one or two top cofaces per codimension-one simplex. Sufficient for canonical unsigned boundary extraction.
2. **Triangle-surface local law:** every interior vertex link is one cycle and every boundary vertex link is one path. Edge incidence alone misses pinched vertices and disconnected links.
3. **Disk law:** connected oriented triangle surface, nonempty single-cycle boundary, Euler characteristic one, no lower-dimensional component, exact domain identity.

A stronger public marker is unsafe if ordinary construction can relabel weaker evidence. Either carry exact private evidence through every constructor/refinement or return a factory-only wrapper bound to the exact admitted domain.

## Positive Hodge metric

- Preserve signed ratios `dual_measures(k) / primal_measures(k)`; never absolutize.
- Freeze scope explicitly: a complete metric admits every represented degree; scoped evidence retains an immutable degree set and consumers require their exact adjacent degrees.
- Positivity means each admitted represented weight is finite and strictly positive, but a tiny rounded positive value is not sign proof when signed dual contributions nearly cancel. Use a certified floating error bound with exact admitted-binary64 fallback or reject sign-indeterminate entries.
- Do not combine weights from different degrees into one raw minimum: they have different physical units under scaling.
- Do not claim SPD/conditioning from positivity alone.
- Retain admitted arrays only with a named repeated consumer and profile. For complete evidence, compare repeated per-degree recurrence with a batched all-degree recurrence before choosing storage. If operator assembly needs retained weights, factor one shared package-private kernel rather than duplicating formulas across owners.

## Poisson and gauge

Poisson assembly, boundary elimination, compatibility admission, gauge choice, and numerical solve are separate layers. Freeze load semantics and sign first: for a pointwise degree-zero density `f`,

```text
M = diag(H0)
K = d0.T @ diag(H1) @ d0
Delta = M^-1 K
Delta u = f  iff  K u = M f
```

Do not confuse `f` with an already integrated load or import the negative evolution sign from smoothing.

For a connected boundaryless degree-zero Laplacian:

1. verify weighted compatibility without changing the RHS;
2. choose one deterministic private anchor;
3. solve the scale-normalized anchored stiffness reduction through the injected square-solver behavior;
4. reconstruct and subtract the weighted constant mean;
5. certify weighted mean zero and the original strong singular equation with shared solver residual machinery.

This avoids a public augmented coefficient-space abstraction when there is no other bordered-system consumer. The private anchor is not a boundary condition. Handle a connected zero-dimensional one-vertex domain analytically: compatibility forces `f=0`, gauge forces `u=0`, and no `0x0` backend solve is needed. Form weighted products, scales, and tolerance products with scale-safe/exact-binary64 accumulation before overflow-prone RHS construction.

## Homology and periods

- Own `H_k = ker ∂_k / im ∂_{k+1}` by the exact complex and degree, not `CochainSpace`.
- Handle endpoint zero maps and empty products explicitly.
- Freeze exact pivot, representative order, primitive sign/scale normalization, and sparse chain-coordinate laws relative to stored simplex order; do not claim permutation-invariant canonical bases.
- Keep exact rank/quotient evidence and sparse representatives until binary64 conversion is admitted. Freeze resource/bit/memory limits and fail rather than falling back to floating topology truth.
- Evaluate periods over sparse cycle nonzeros with scale-safe sums, and bind period coordinates to the exact ordered/oriented basis witness.

### SO(2) holonomy distinction

Choose connection representation before cycle representation:

- A primal-edge connection between vertex fibers pairs with primitive primal integral cycles and produces vertex phases; without vertex frames it remains abstract rather than an embedded direction field.
- A geometry-bound triangle-surface connection commonly transports across dual edges between oriented triangle frames. It pairs with ordered integral dual cycles—often represented internally by primal integral cocycles—and produces face phases/per-triangle directions.

A principal-angle connection is modulo `2π`. Rationally rescaled real-homology representatives are not valid holonomy witnesses because changing one angle lift by `2π` can change a noninteger weighted sum. Freeze one principal interval, wrapping/distance law, crossing orientation, frame-gauge transformation, and circular forward-error admission.

## Projection and decomposition

- Exact image-basis selection and positive metric evidence are independent prerequisites.
- Compare weighted QR with independent-basis Gram projection using adversarial conditioned cases and a higher-accuracy oracle. Measure conditioning on a degree-normalized weighted image map, not an arbitrarily scaled raw basis.
- A small residual does not admit normal equations; account for squared conditioning. A Gram path also needs a private rank-coordinate coefficient space bound to its exact basis witness.
- If QR wins, define a typed `PrepareLeastSquares` boundary before production. If a condition-gated Gram path wins, keep `PrepareLinearSolve`.
- Final APIs accept exactly the selected behavior—never optional competing solvers or method strings.
- Endpoint Hodge terms are zero forms, not `None`; dimension zero has both exact/coexact zero and the input entirely harmonic. Never construct degree `-1` or `n+1` spaces.
- Every decomposition residual names its weighted norm, scale, and acceptance law.
- Harmonic period normalization is a second coordinate solve with its own scale-safe assembly, forward-condition gate, solver protocol, and residual/scale. Projection approval does not automatically approve period normalization; empty Betti number invokes no solver.

## Surface algorithms

- Before proposing new surface evidence, inspect landed admission: a `TriangleManifold` refinement may already prove every vertex link is one path/cycle. Disk evidence then adds only authentic global laws such as one boundary component and Euler/genus truth.
- Integrated Gaussian curvature is orientation-independent on finite triangle surfaces and may be additive over disconnected mixtures of closed/bounded components. Derive boundary vertices from canonical topology evidence and use scale-safe corner-angle evaluation.
- A first linear mean-curvature-flow model should freeze `M`, `K`, and `(M + tau K) X_new = M X_old`, boundary/connectivity scope, frozen-input energy/centroid evidence, whole-equation normalization before RHS formation, repeated vector solve reuse, and geometry readmission. State the `Delta X` versus mean-curvature-normal factor convention; do not describe one step as a converged nonlinear flow.
- LSCM requires a distinct rectangular solver capability, exact disk/geometry/anchor identity, required-rank evidence, a dimensionless residual, signed-area/degeneracy evidence, and explicit flip/injectivity claims.
- `SO2Connection`, holonomy, and phase values are nonlinear angle products, not linear `FieldSemantics`.
- For a geometric dual-edge direction field, freeze deterministic triangle frames, dual crossing orientation, frame gauge, `DualCycleBasis`, `FacePhase`, all-edge circular residuals, and caller-owned per-triangle tangent vectors. Boundary transport, singularities, and line/cross/`N`-direction symmetry are separate contracts.

## Grill questions

- Does the topology evidence prove every local link required by the algorithm?
- Can a caller relabel weaker evidence into the stronger state?
- Is a quantity chain-owned, cochain-owned, metric-owned, or solver evidence?
- Are positivity and conditioning being conflated?
- Is an empty/endpoint space sent unnecessarily to a backend?
- Does a periodic quantity depend on a representative lift?
- Does the selected numerical method require a solver protocol not yet owned?
- Is a reported residual being mistaken for forward accuracy, injectivity, or topology truth?
