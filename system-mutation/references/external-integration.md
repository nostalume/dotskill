# External tool integration

Use the [shared mutation contract](../SKILL.md) for authority, effects, results and
recovery. This reference specializes tool acquisition and consumer access; ordinary
invocation of an already usable tool remains with its consumer.

## Select the requested operation

Carry the required capability/postcondition, consumer, provider identity and
compatibility constraints into the shared request. Include the installation or
configuration scope, credential references and resource bounds when relevant.

- Inspect: observe the provider and existing registration without changing them.
- Install: acquire the named provider at the admitted destination. Report installation
  separately from consumer readiness.
- Register: connect an existing entrypoint/endpoint to the named consumer; preserve
  the prior entry and expose only the necessary tool surface.
- Verify: establish identity and make one harmless real consumer call for a usability
  claim. Use a fresh session after registration changes. Report startup, transport,
  authentication, discovery and invocation failures distinctly.
- Upgrade/remove: act only on named owned components; preserve shared dependencies
  and unrelated registrations. Verify the replacement capability or scoped absence.
  Removal does not require calling the removed provider.

Choose CLI, MCP, API or a native capability by lifetime, interface, isolation and
total cost, not a fixed ranking. A one-shot CLI need not be registered as MCP.
Use custom glue only for a demonstrated interface gap.

Keep out-of-process provider environments outside the consumer runtime. For an
in-process client, follow the application's existing dependency contract. Do not
put secrets in arguments, source, logs or returned evidence. Check current official
interfaces and local help before choosing version-sensitive commands.

## Check consumer readiness and partial setup

Extend the shared receipt with executable/endpoint identity and version, observed
installation/registration/discovery/invocation states, changed configuration and
probe evidence. These are separate observations, not mandatory sequential gates.
Install-only can complete without registration; ready-to-use requires a successful
consumer invocation. A listed executable or successful registration is insufficient.

If installation succeeds but registration fails, report the installed residue and
preserve or restore the prior entry under the shared recovery rules. Failed reload
leaves discovery and invocation unproved. Missing credentials or incompatible
versions remain explicit limits; do not weaken authentication or change the
consumer's required mechanism to obtain a success result.

Keep resolved paths, versions, endpoints and probe receipts with this execution,
not reusable configuration or a persistent capability catalogue. For Hermes,
read [Hermes integration](hermes.md).
