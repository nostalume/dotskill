# Host adapters

## Capability observation

Probe with a harmless authoritative command or API operation. Return a contextual
result, not a Boolean:

- `Available(capability)`
- `Unavailable(reason)`
- `Unauthorized(identity, scope)`
- `Ambiguous(evidence)`
- `ProbeFailed(error)`

Bind the result to the executable or endpoint identity, version, arguments,
environment, and precedence that produced it. Do not infer capability from
localized diagnostic text. Refresh observations before an irreversible effect.

## PowerShell providers

- Resolve commands in module scope; do not depend on the caller's session state.
- Preserve native parameter binding, common parameters, streams, and error records.
- Use `SupportsShouldProcess` for state changes and respect `-WhatIf`/`-Confirm`.
- Keep provider discovery separate from mutation.
- Verify loading and invocation in a fresh PowerShell process.

## Effect verification

For each admitted effect, capture the relevant before-state, invoke the exact
adapter once, and observe the after-state independently. A successful process exit
is evidence of execution, not proof of the postcondition.

Use disposable integration targets with unique names and bounded timeouts. Inject
failures around each external boundary. Always test cleanup and assert that no
unexpected files, services, accounts, processes, or configuration remain.
