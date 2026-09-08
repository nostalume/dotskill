# Bounded tool execution

Read this reference when document work uses an external library, CLI, MCP/API
provider, more than one tool, a fallback, or a package-dependent capability. It
owns document-specific selection, invocation, and normalization—not provider
installation or format semantics.

## Separate requirements from observed bindings

Plan with requirements; execute only with bindings:

```text
ToolRequirement(
  capability and artifact postcondition,
  required_fidelity set, locality and source trust,
  mechanism/version constraints,
  authority and resource/cost share
)
  -> ToolBinding(
       exact observed identity/version/entrypoint,
       local environment or remote endpoint,
       granted authority and resolved dependency state
     )
  -> ToolCall(
       immutable input refs, argv or typed request,
       cwd/environment allowlist, destination,
       deadline and aggregate-budget share
     )
  -> ToolResult(
       complete | partial | unavailable | refused | cancelled | failed,
       reason category, exit/transport state, output refs/digests,
       sanitized diagnostics, effects/resource use, cleanup
     )
```

A documented candidate, executable path, registration record, or cache hit is not
a binding. Establish identity and capability with one harmless real probe. Re-probe
after the entrypoint, version, endpoint, environment, or granted authority changes;
do not create a persistent discovery database.

`ToolBinding` is evidence scoped to the current execution context. Never persist a
binding as reusable skill configuration, an installed-capability table, or a global
support claim. The same rule applies to `ToolResult`: keep its receipt with the
current artifact result or in ignored task evidence, not in `SKILL.md` or reusable
references.

Reusable instructions may define capability requirements, normative format rules,
probe procedures, portable interface/version constraints, and provider limitations
supported by current authoritative documentation. A maintained script may declare
and lock its portable dependencies. They must not encode an authoring host's paths,
runtime or resolved package versions, installed-tool inventory, endpoints,
credentials, cache/model contents, transient availability, or probe output. A
successful disposable scenario can falsify or support a rule; it cannot promote its
machine state into durable capability truth.

## Plan one bounded graph

Freeze the artifact postcondition before considering installed tools. Then:

1. Declare compatible conditional branches; source inspection selects the branch
   and one primary producer for each postcondition. Do not freeze classification
   before observing the source or repeatedly reinterpret the original request.
2. Add separate structural, semantic, or visual validators only for claims made.
3. Reuse an expensive parse or render for unchanged admitted inputs and pass
   immutable refs/digests to its consumers. An authorized source correction changes
   input identity and permits another compile/parse/inspect cycle.
4. Allocate page, byte, pixel, time, CPU, memory, disk, concurrency, network, and
   monetary limits across the whole graph, not independently per call.
5. Admit bindings and authority before the first effect.
6. Execute in dependency order, validate before committing the requested output,
   map tool results into one `ArtifactResult`, and clean owned scratch. Use atomic
   commit where supported; disclose any weaker guarantee required by the destination.

Tool availability never changes the requested format, fidelity, or postcondition.
Do not add providers merely to increase fallback count.

## Choose the mechanism by the document operation

- Use an already proven native capability or maintained in-process library when it
  belongs to the admitted implementation.
- Prefer a local CLI for a bounded one-shot transformation when its observable
  interface is sufficient.
- Use MCP when repeated typed discovery or a long-lived service boundary justifies
  its registration and process cost.
- Use a remote API only when its capability is required and document transmission
  is explicitly authorized.
- Add a custom adapter only to translate a stable contract that no direct mechanism
  exposes. It must not become a second document model.

These are decision criteria, not a universal provider ranking. Prefer the binding
with the least total authority, loss, persistent state, dependency footprint, and
resource cost that satisfies the artifact contract.

## Keep acquisition outside the document call

Discovery and invocation do not authorize installation, upgrade, package or model
download, plugin enablement, language-pack acquisition, or cache fill. If a binding
is missing, return `unavailable` or use
[system-mutation](../../system-mutation/SKILL.md) and its
[external integration guidance](../../system-mutation/references/external-integration.md) within the
user's existing acquisition authority; request only genuinely missing permission.
Pass a scoped mutation request containing the frozen `ToolRequirement`, requested
lifecycle operation, consumer and configuration scope, compatibility constraints,
credential references, authority, resource bounds, and observed existing state.
The mutation owner returns its shared receipt with operation outcome,
observed capability states, changed paths/registration, probe evidence, partial
effects, and recovery. Installation or registration alone is not a usable binding;
admit invocation evidence against the original document requirement before resuming.
Preserve all fixed provider/mechanism constraints, fidelity, locality, and
postconditions; do not let acquisition silently substitute them. Keep this receipt
with the current execution, not in reusable skill configuration.

Keep out-of-process tool environments and caches outside the skill tree. Do not add
a shared document virtual environment, `node_modules`, compiler distribution, or
package cache. Caches are replaceable acceleration, not identity or evidence.

If a separately planned maintained script needs libraries, its declared dependency
set and lock are part of that script's contract and verification. The script never
invokes a package manager or performs install-on-first-use. Temporary scenario
environments are admitted effects and are removed after validation.

## Invoke and stop predictably

For local processes, use the exact entrypoint, an argument vector rather than a
composed shell command, an explicit working directory, an environment allowlist,
bounded streams, and a timeout. Use a reviewed shell boundary only when the tool
requires one. Keep secrets out of arguments, sources, fixtures, and diagnostics.

Write into task-scoped scratch and commit a distinct destination only after its
required checks pass. Preserve a prior valid deliverable on failure. On
cancellation, terminate owned child work, preserve the source, remove owned
scratch, and commit no partial destination unless the request explicitly admits
a partial artifact. Report cleanup errors alongside the primary outcome; never
claim cleanup from intent or delete pre-existing material based only on its name.

Handle the reason, not just an exit code:

- Provider limitation: select a declared compatible alternative after admitting
  its binding, within the same postcondition, fidelity, authority, and budget.
- Missing binding: use an admitted alternative, separately authorized acquisition,
  or return `unavailable`; command registration is not capability evidence.
- Malformed input or unsupported request: stop this operation with the explicit
  reason; do not cycle through parsers. Source repair requires edit authority and
  a revised source identity, not a blind retry.
- Transient execution/transport failure: retry only a safely repeatable operation
  with bounded attempts and total time. Do not repeat an ambiguously committed
  effect without reconciling its observed state.
- Refused authority or cancellation: terminal. Resource exhaustion does not grant
  a larger budget; report the unfinished scope.

Declared classification branches are normal execution, not failures. A provider's
unsupported feature is not proof that the input or requested operation is invalid.

## Complete from artifact evidence

A zero exit code or successful provider response proves only that call. Reopen,
compile, render, or inspect the produced artifact as required by the fidelity claim.
Return one result with source/output identity, checks, losses, unresolved regions,
each used binding/version, effects, skipped evidence, and recovery. Provider output
is evidence or an intermediate; it does not become semantic authority.
