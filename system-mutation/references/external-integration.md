# External tool integration

The consumer selects the capability it needs. This reference handles acquisition,
registration and external-call readiness; [system-mutation](../SKILL.md) supplies
authority and recovery. For local dependencies, start with
[project environments](project-environments.md).

Use current official documentation and the selected tool's local help. Inspect
manager shims before invoking commands that might acquire a missing runtime.

| Requested operation | Work and completion |
| --- | --- |
| Inspect | Observe installed/configured state without installing or repairing |
| Install | Acquire the selected provider in the agreed scope; report its location |
| Register | Use the consumer's supported interface; preserve the previous named entry |
| Verify local readiness | Invoke the requested capability through the actual consumer without inferring a remote data or policy claim |
| Verify remote-call readiness | Invoke only an admitted bounded request, then inspect the provider result and consumer-visible behavior |
| Upgrade/remove | Change only the named owned component; preserve shared dependencies and unrelated registrations |

Select the integration boundary once. Install-only needs no registration. A
one-shot CLI needs no MCP service. Follow the application's dependency contract
for an in-process library. A local MCP/server process still has executable,
filesystem, environment, lifetime and consumer-registration effects; a hosted MCP,
API or provider additionally has a remote data and authority edge. Keep an external
provider's environment separate from the consumer's own runtime. Do not install
providers into an assistant application's internal environment or edit its private
implementation to bypass a configuration problem.

## Admit a hosted or remote edge

Before a download, hosted registration or remote invocation, resolve only the
concerns that can change this operation's safety, correctness, cost or recovery:

| Concern | Required decision |
| --- | --- |
| Purpose and data | Capability required; exact requested download and content or metadata transmitted; transformations, sensitivity and source authority |
| Authority and target | User authority; provider, account, endpoint, namespace, destination and permitted mutation; connected is not authorized |
| Credentials | Owning host/user facility, least required scope and missing/rejected behavior; never put secrets in skill files, assets, command text or logs |
| Cost and bounds | Material price/quota, payload size, time, concurrency, cancellation and maximum attempts |
| Retry and commit | Read versus mutation, provider idempotency or duplicate detection, commit point and observation required before retrying an uncertain result |
| Version and policy | Consumer-selected integration/API version, compatible local interface, current provider policy and the exact relied-upon claim |
| Rights and lifecycle | Applicable license, data retention/reuse/training, deletion, publication, provenance and downstream handling |
| Evidence and recovery | Consumer invocation, external/local post-state, stable identifier, partial result, reversible prior registration and irreversible residue |

An installed client or saved registration proves neither invocation nor the data,
account and retention policy of a later call. A credential proves neither user
authority nor correct target. Reconfirm mutable identity and provider policy before
a consequential call. If the authoritative policy, account, material cost choice
or disclosure authority is unavailable, preserve completed local setup and stop at
that exact boundary; do not substitute another provider or report readiness.

Expose only the required interface and credential references. Prefer a narrow
server over a general shell when that satisfies the task. Never weaken
authentication or expand host access to make a readiness check pass.

After registration changes, reload or use a fresh consumer session when required,
then make one suitable consumer call. Bound transmitted data, time, retries and
cost; treat remote responses and downloaded artifacts as untrusted. Retry a remote
mutation only with idempotency or observed non-commit. After a timeout or uncertain
registration/call, inspect provider and consumer state before retrying.

Distinguish installation, registration, local invocation, accepted remote request
and usable consumer result: partial setup does not establish readiness. Preserve
or restore the prior entry within existing authority, and report installed residue,
irreversible disclosure, charges, retention, accepted remote state or uncertain
commit if integration fails. Upgrade or remove only the selected owned integration;
reconfirm shared consumers and provider-side lifecycle before claiming rollback.
Keep observed paths, versions and diagnostics with the task, not a persistent
capability catalogue.
