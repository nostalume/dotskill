# External tool integration

The consumer selects the capability it needs. This reference handles acquisition
and registration; [system-mutation](../SKILL.md) supplies authority and recovery.
For local dependencies, start with [project environments](project-environments.md).

Use current official documentation and the selected tool's local help. Inspect
manager shims before invoking commands that might acquire a missing runtime.

| Requested operation | Work and completion |
| --- | --- |
| Inspect | Observe installed/configured state without installing or repairing |
| Install | Acquire the selected provider in the agreed scope; report its location |
| Register | Use the consumer's supported interface; preserve the previous named entry |
| Verify readiness | Invoke the requested capability through the actual consumer |
| Upgrade/remove | Change only the named owned component; preserve shared dependencies and unrelated registrations |

Install-only needs no registration. A one-shot CLI needs no MCP service. Follow the
application's dependency contract for an in-process library; keep an external
provider's environment separate from the consumer's own runtime. Do not install
providers into an assistant application's internal environment or edit its private
implementation to bypass a configuration problem.

Expose only the required interface and credential references. Prefer a narrow
server over a general shell when that satisfies the task. Never weaken
authentication or expand host access to make a readiness check pass.

After registration changes, reload or use a fresh consumer session when required,
then make one suitable consumer call. Distinguish installation, registration and
invocation: partial setup does not establish readiness. Preserve or restore the
prior entry within existing authority, and report installed residue if integration
fails. Keep observed paths, versions and diagnostics with the task, not a persistent
capability catalogue.
