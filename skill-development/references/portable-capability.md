# Portable Capability

A portable skill carries the durable reasoning needed to produce the intended
behavior while discovering environment-specific means at the edge. Portability
does not mean ignoring the environment, avoiding every dependency, or supporting
every possible tool. It means that local bindings are explicit, replaceable where
the capability permits, and absent from the semantic core.

## Classify knowledge without flattening it

Classify a directive only as far as the distinction changes where it belongs, how
it is executed, or what evidence it needs. These dimensions are orthogonal; they
are a reasoning aid, not a required table, manifest, annotation or per-directive
schema.

| Dimension | Representative values | Governing question |
| --- | --- | --- |
| Role | semantic model, decision policy, operational protocol, adapter, evidence | What work does the knowledge perform? |
| Force | invariant, conditional requirement, heuristic, example | How strongly must it govern when its precondition holds? |
| Authority | user, domain or standard, project, provider or tool, derivation, observation | Who can make or change the claim? |
| Temporal binding | intrinsic, project-version-bound, provider-current, request-ephemeral | What identity or event can invalidate it? |
| Consequence | explanation, correctness, safety, compatibility, mutation or external effect | What happens if it is absent, wrong or stale? |
| Availability | embedded, project-local, probeable, fetchable, unavailable | Where can the selected operation establish it? |

A semantic model carries the identities, values, relations and legal states needed
to reason about the capability. A decision policy selects among valid alternatives
from explicit context. An **operational protocol** is a durable grammar, decision
procedure, state machine or proof/checking sequence whose legal order, refusal,
termination or completion semantics are part of correctness. An adapter binds that
protocol to one project representation, tool or provider. Evidence is an observed
claim with scope and limits; it does not become the authority that owns the fact.
An unverified inference or speculation is neither authority nor evidence: label
its premises and uncertainty, record how it could be tested, and do not use it to
justify a consequential decision before validation.

Force remains independent of role. State an invariant with its precondition,
owner, required outcome and refusal or failure behavior. State a heuristic with
its controlling context and override conditions. A protocol or adapter can contain
both. Do not turn a house style, one successful example or a currently installed
tool into an invariant. A fixed value is justified only when the domain, interface,
accepted project contract or selected operation makes it necessary.

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

The core is **operationally closed** when, without network retrieval, it can:

1. activate or exclude the request correctly;
2. construct enough domain state to choose an operation;
3. preserve its invariants while selecting, deferring or refusing;
4. perform every provider-independent protocol it claims; and
5. identify the exact version-, project- or provider-bound fact that is unavailable.

Operational closure does not mean complete offline execution. A missing compiler,
remote target or mutable provider policy can prevent the selected adapter from
completing. The skill must then stop at that boundary with a precise reduced claim,
not guess, copy a whole external specification, or declare unrelated core behavior
unavailable.

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
reuses it. Each resource needs a consumer, an authority boundary, and a validation
or inspection obligation. The consumer may be an intrinsic conditional operation—
for example, every restricted audit consuming its burden-of-proof protocol—not
only a separate caller file.

Keep activation and governing invariants close to the entry point. Put specialized
recipes and large domain detail behind links from the precise branch that selects
them. Avoid deep reference chains and orphan resources. Examples should expose a
decision or boundary, not establish a mandatory scaffold.

Before accepting a directive, ask:

1. What claim would this rule protect, and when does it apply?
2. Who owns the underlying decision, fact, or effect?
3. Is its role semantic model, decision policy, operational protocol, adapter or
   evidence, and what force does it carry?
4. Who owns it, what binds its lifetime, and what is the consequence if it is
   absent, wrong or stale?
5. Where can the selected operation establish it, and what observable case could
   show it is wrong or incomplete?
6. Can the same capability still operate honestly when this local binding is
   absent?
