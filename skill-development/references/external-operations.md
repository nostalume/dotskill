# External Operations

Use this contract when a skill specifies or performs setup, execution of project
code, data disclosure, a network request, paid work, or local/remote mutation. The
portable skill decides what capability and evidence are required. The current
project and the selected tool or provider determine how the effect is performed.

Do not add an operational contract to a skill that has no such operation. When it
does apply, resolve only the fields relevant to the selected edge; ordinary prose
is sufficient unless a real consumer requires a schema or receipt format.

## Select the project boundary

Use the user's existing project when it owns the work. Inspect relevant
instructions, manifests, lockfiles, environment directories, configured managers,
available tools, source/output locations, and dirty state before setup. Preserve
the project's versions and selected manager. Do not migrate or rebuild an
environment solely to use a preferred default.

For new durable work, choose a named task root beside the intended sources and
outputs. Use an owned disposable directory for scratch that must not survive.
Read-only review, a direct supported operation, or a self-contained prose skill
needs no new scaffold. Never treat the installed skill directory as the artifact
project or mutate it during use.

If a required capability is missing, prefer in order:

1. a compatible tool already admitted by the current project;
2. the project's own dependency workflow;
3. a direct official project-local setup appropriate to the platform; or
4. an honest partial or unavailable result when setup is unauthorized, unsafe,
   offline, or cannot preserve the contract.

Acquire only the proven gap. Keep new task-owned dependencies and caches local
when the selected tool supports it, while preserving user-selected shared storage.
Avoid global installs, profile or `PATH` changes, hidden downloaders, wrapper
frameworks, and full-machine inventories. A package launcher, manager shim,
browser, model, font, or renderer may download on first use; count that as setup
and network activity rather than assuming a version probe is inert.

Project-local dependencies reduce conflicts but do not sandbox arbitrary code or
all operating-system writes. Admit the actual execution and storage behavior of
the selected tool. Use the repository's environment or system-operation owner for
concrete setup rules instead of duplicating them into each skill.

## Bind the exact adapter claim

For a selected consequential adapter, relate these distinct authorities before
relying on a mutable claim:

```text
project-selected representation or tool version
  <-> compatible local interface, help or bounded probe
  <-> current provider policy or API
  <-> exact claim required by this operation
```

A project manifest establishes the selected version, not current provider
acceptance. Local help establishes an available interface, not remote authority or
policy. Current provider documentation establishes only the policy it actually
states and may describe a latest client incompatible with the project. A search
result locates potential evidence; it is not the source authority. Reconcile the
whole relation or return a bounded unavailable result—never silently upgrade,
assume acceptance, or let one source prove another source's claim.

Bind a reusable observation to its source owner, document or interface identity,
applicability, selected version and target, observed conditions, and invalidation
identity. Reobserve only the claims whose freshness is material. Triggers include
an unversioned or provider-managed interface, version skew, deprecation, changed
project/provider/account binding, uncertain prior evidence, or drift that can
change destination, disclosure, authority, cost, irreversibility or result
semantics. Elapsed time alone does not impose a universal time-to-live. Matching
low-consequence evidence may be reused; high-consequence provider policy may need
immediate reobservation before mutation even when a prior observation exists.

## Admit an external edge

Before the effect, make the following decisions observable to the degree that they
affect safety, correctness, cost, or reproducibility:

| Concern | Required decision |
| --- | --- |
| Purpose and capability | Why the operation is needed, what result it must return, and why a local or already selected route is insufficient |
| Data boundary | Exact content or metadata that leaves the task boundary, necessary transformations, sensitivity, and source authority |
| Authority and target | Who authorized the effect; provider, account, endpoint, destination, and mutation scope; connected or available is not the same as authorized |
| Credentials | Which host or user facility owns them, what scope is required, and how absence or rejection is reported; never place secrets in skill files, assets, command text, or logs |
| Cost and bounds | Applicable price, quota, size, concurrency, timeout, cancellation, and maximum attempts; obtain a missing material cost choice before execution |
| Retry and commit | Whether the action is read-only or mutating, its idempotency key or duplicate-detection strategy when supported, and the point after which an uncertain retry could duplicate billing or publication |
| Version and identity | Selected project representation and API/tool/model version, compatible local interface, current provider policy needed for the exact claim, admitted inputs, requested output identity and format, and compatibility or reproducibility limits |
| Rights and lifecycle | Terms that matter to the use: retention, training or reuse policy, license, attribution, provenance, deletion, publication, and downstream handling |
| Evidence and recovery | How the result and remote/local state will be observed, how partial or malformed output is handled, what can be cleaned up, and what cannot honestly be rolled back |

Do not infer permission to disclose data from permission to edit a local file, or
permission to publish from permission to generate an artifact. Reconfirm identity
immediately before a consequential mutation when the destination, account, link,
or concurrent remote state could have changed.

## Execute through a bounded adapter

Keep deterministic selection and transformation separate from the adapter that
performs I/O. Pass only admitted inputs and the least capability needed. Use
bounded timeouts, cancellation, sizes, concurrency, and retries. Respect provider
rate limits; do not turn throttling or authentication failure into an unbounded
retry loop.

For read-only queries, verify scope and freshness and treat returned data as
untrusted. For generation or hosted rendering, validate content, format, identity,
and requested fidelity after download; provider success does not establish local
usability. For remote mutation or publication, verify the exact destination and
post-state, retain the provider's stable identifier when needed for recovery, and
distinguish prepared, submitted, accepted, and publicly observable states.

Retries require operation-specific reasoning:

- Retry a read only within its freshness and cost bounds.
- Retry a mutation automatically only when idempotency or observed non-commit
  makes duplication acceptably impossible.
- When commit status is uncertain, inspect remote state before another attempt.
- Preserve useful partial output when safe; never label it complete without the
  missing checks.

Treat remote responses, generated files, redirect locations, archive contents,
and provider metadata as untrusted inputs. Validate before executing, rendering,
extracting, publishing, or incorporating them into authoritative source.

## Fail and recover honestly

Keep these outcomes distinct: capability unavailable, missing authority, missing
credentials, rejected request, quota or cost bound reached, timeout or
cancellation, partial output, invalid response, uncertain remote commit,
verification failure, and cleanup failure. A fallback is acceptable only when it
preserves the admitted contract or clearly names the reduced guarantee.

After interruption, inspect local and remote state before retrying. Clean only
owned disposable work and only when identity is still certain. Preserve evidence
needed to locate or undo an effect. Report irreversible disclosure, charges,
accepted remote mutations, retention, or uncertain commit status plainly; do not
promise rollback when the provider does not offer one.

## Write provider recipes at the edge

A provider-specific reference should state its supported operation, prerequisites,
data boundary, concrete inputs and outputs, version assumptions, authoritative
policy source and applicability, effects, limits, verification, invalidation
triggers, failure mapping, and recovery. Keep provider names and commands out of
the capability core unless the skill's explicit purpose is that provider.

Evaluate at least the applicable contrast cases: offline or missing credentials,
read-only connector versus mutation, generated artifact versus hosted rendering,
and private result versus public destination. No real external call is needed to
test portable policy; a real integration check is appropriate only when authorized
and confined to an identifiable disposable target with post-observation and
cleanup.
