# Portable Capability

A portable skill carries the durable reasoning needed to produce the intended
behavior while discovering environment-specific means at the edge. Portability
does not mean ignoring the environment, avoiding every dependency, or supporting
every possible tool. It means that local bindings are explicit, replaceable where
the capability permits, and absent from the semantic core.

## Classify every directive

Use the directive's consequence, not emphatic wording, to classify it.

| Class | Test | How to express and check it |
| --- | --- | --- |
| Invariant | Would violating it make the result wrong, unsafe, misleading, unauthorized, or incompatible whenever its precondition holds? | State the precondition, owner, required outcome, and refusal or failure behavior. Exercise it directly. |
| Contextual heuristic | Is it a strong default whose value varies with content, audience, medium, project, brand, risk, or cost? | State the decision criteria and override conditions. Evaluate the chosen result in context. |
| Recipe | Is it one concrete representation, tool, provider, or operational route? | Name inputs, effects, losses, checks, and failure path. Load it only after selecting that route. |
| Evidence | Is it a current observation supporting a particular claim? | Record scope, source, conditions, and limits. Reobserve when freshness matters. |

An instruction can contain more than one class; split it until each obligation is
clear. Do not weaken safety or authorization rules into preferences. Do not turn a
house style, one successful example, or a currently installed tool into an
invariant. A fixed value is justified only when the domain, interface, accepted
project contract, or named operation makes that value necessary.

## Preserve owners and boundaries

- The user owns intent, reserved choices, authorization, and acceptance of taste.
- The skill owns its activation boundary, portable decisions, and declared
  quality contract.
- The domain or source owner owns facts and accepted content.
- The current project owns local instructions, formats, dependencies, and adapted
  resources.
- A selected tool or provider owns its execution semantics and effects. The skill
  must admit those effects but must not pretend to control what it cannot verify.
- Validators prove only the structures and rules they actually inspect.

Admit untrusted requests and inputs once at a visible boundary. Keep the main
decision flow linear, make variants and failures explicit, and avoid two resources
that both claim authority for the same trigger or rule. Cross-link an existing
owner instead of copying its policy.

## Keep the core environment-neutral

Write the semantic core in terms of required capabilities and observable results:
for example, "render the final source and inspect representative pages," not "run
the renderer at a particular workstation path." Reuse a suitable current project
and its selected tools. Resolve manifests, paths, versions, platforms, credentials,
models, endpoints, and provider-specific limits only for the operation that needs
them.

A skill is still portable when it has a necessary dependency, provided the
requirement is explicit and the binding is rediscovered. A skill is not portable
when its behavior silently relies on authoring-machine state, modifies the
installed skill directory, assumes network access, or treats one adapter as the
capability itself.

When a preferred operation is unavailable, choose among only truthful outcomes:

- use a compatible alternative that preserves the admitted contract;
- return a bounded partial result whose missing guarantees are named;
- ask for a material missing decision or authority; or
- report that the requested result cannot currently be established.

Never relabel a degraded result as equivalent, repeatedly attempt unbounded
setup, or fabricate verification evidence.

## Add structure progressively

The smallest complete skill may be a single `SKILL.md`. Add a reference when a
conditional branch would otherwise obscure the entry point. Add a script when a
real consumer needs deterministic or repeatedly executed behavior that prose does
not supply safely. Add an asset or template when the delivered work actually
reuses it. Each resource needs a caller, an authority boundary, and a validation or
inspection obligation.

Keep activation and governing invariants close to the entry point. Put specialized
recipes and large domain detail behind links from the precise branch that selects
them. Avoid deep reference chains and orphan resources. Examples should expose a
decision or boundary, not establish a mandatory scaffold.

Before accepting a directive, ask:

1. What claim would this rule protect, and when does it apply?
2. Who owns the underlying decision, fact, or effect?
3. Does it belong in portable behavior, adaptable judgment, a selected recipe, or
   current evidence?
4. What observable case could show it is wrong or incomplete?
5. Can the same capability still operate honestly when this local binding is
   absent?
