---
name: external-tool-integration
description: Integrate an external CLI, MCP server, API, or Codex/Hermes extension by selecting the least-coupled mechanism, restricting authority, and proving one harmless real call.
---

# External Tool Integration

Use this skill when an agent or application must gain a capability supplied by an
external process or service.

## Contract

Choose the least-coupled mechanism that satisfies the need:

1. an already installed plugin or native capability;
2. an MCP server with a stable tool contract;
3. a CLI with structured output;
4. a direct API client;
5. custom integration code only when the earlier choices cannot express the need.

Keep provider installation and dependencies outside the consumer's own runtime
environment. Register only the command, endpoint, or manifest needed to reach it.

Hard invariants:

- Identity, version, transport, credentials, and authority are explicit.
- Secrets never enter source, command history, fixtures, or diagnostic output.
- The integration exposes the smallest useful tool and resource surface.
- Discovery and harmless probes precede mutation.
- A fresh consumer session can discover and invoke the integration.
- Success requires one harmless real call, not configuration inspection alone.

## Workflow

1. Define the missing capability and its smallest stable input/output contract.
2. Inspect current official interfaces and local help; reject obsolete recipes.
3. Select the mechanism and record why simpler choices do not satisfy the contract.
4. Install or locate the provider in an isolated environment.
5. Configure transport, executable or URL, environment, credentials, and timeouts.
6. Restrict tools, resources, filesystem, network, and mutation authority.
7. Reload or start a fresh consumer session.
8. Run one harmless real call and inspect its structured result.
9. Record removal, upgrade, failure, and secret-rotation procedures.

## Evidence gate

Do not declare completion until discovery, invocation, failure reporting, and
removal are reproducible from recorded commands without relying on ambient session
state. Stop if the provider identity or requested authority is ambiguous.

## Routed reference

For Hermes-specific registration and verification, read
[Hermes integration](references/hermes.md).
