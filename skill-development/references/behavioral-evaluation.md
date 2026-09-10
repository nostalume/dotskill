# Behavioral Evaluation

Evaluate a skill as a decision-making capability. Frontmatter validity, resolved
links, expected headings, and familiar phrases are useful structural observations,
but they do not show that the skill activates correctly, preserves authority,
chooses suitable structure, bounds effects, or fails honestly.

## Derive evidence from changed claims

Freeze the intended capability and inspect the actual skill before selecting
checks. For every new or changed claim, identify the cheapest observation that
could show it is false.

| Claim | Distinguishing evidence |
| --- | --- |
| Activation and exclusion | Neighboring positive, negative, and ambiguous requests route to the correct owner for reasons grounded in requested behavior |
| Domain invariant or safety rule | Positive, boundary, failure, and adversarial cases preserve the rule and expose its refusal condition |
| Contextual judgment | Contrasting content or constraints produce appropriately different choices, with criteria tied to the request |
| Progressive structure | A simple case stays complete and small; a complex case adds only resources with named consumers and direct routes |
| Refactor or consolidation | Baseline behavior and callers are characterized; unique rules survive once; stale or competing ownership is removed only after cutover evidence |
| External operation | Data, authority, credentials, cost, bounds, commit semantics, verification, fallback, and recovery are resolved where applicable; no effect occurs in a policy-only test |
| Portability or degradation | Missing tools, provider access, network, or local bindings lead to a compatible alternative, bounded partial result, request for missing authority, or accurate unavailability |
| Structural contract | The repository-supported validator, link inspection, metadata rules, and relevant static checks pass on the final files |

Do not use a large scenario count to compensate for an undefined contract. Do not
claim behavioral evidence from keyword matching, snapshots of prose, file count,
or validator success alone.

## Design forward cases

Use requests not copied from examples in the skill. Keep each case small enough to
inspect completely. A case should record:

- request and authoritative starting material;
- expected activation or exclusion and mode of work;
- granted and withheld authority;
- one condition that distinguishes a good decision from a generic template;
- expected result, effect or refusal, and allowed degradation; and
- artifacts and state to inspect after the run.

Choose cases according to the changed boundary. A broad skill-development
capability should normally distinguish these families:

- a self-contained knowledge skill that should remain one concise file;
- a multi-operation skill with one genuinely conditional external provider;
- a focused revision that must preserve existing resources and unrelated behavior;
- a consolidation with overlapping triggers and unique rules in both sources;
- a review-only request that must report without editing;
- an offline, missing-tool, or missing-credential variant; and
- an ordinary software or artifact request that must not activate the skill.

Add domain-specific boundary cases when the skill makes stronger claims. Fresh
context or an independent evaluator can reduce author bias when explicitly
available, but it is not a substitute for an inspectable contract. Otherwise run
primary-agent forward cases in isolated, task-owned workspaces and disclose that
limit.

## Inspect decisions and artifacts

For each case, trace:

```text
request and current authority
  -> activation and admitted scope
  -> invariant / heuristic / recipe / evidence decisions
  -> structure and resource selection
  -> any effect admission or refusal
  -> produced artifact and validation
  -> reported result and limitations
```

Inspect the complete output, not only its summary. Ask whether:

- the description separates the intended capability from adjacent owners;
- domain facts and project conventions retain their source authority;
- mandatory rules protect real correctness, safety, authorization, or
  compatibility rather than aesthetic or process preference;
- adaptable choices name the context that controls them;
- every reference, script, asset, setup step, and compatibility layer has a real
  consumer;
- tools and providers are bound only on the selected route;
- unavailable capabilities and partial failures remain accurately distinguished;
- review or narrow-edit authority was not silently broadened; and
- the final response claims only what the observed checks establish.

Use contrast or mutation sensitivity where judgment might otherwise be cosmetic.
Change one meaningful input—remove network authority, introduce an existing
project convention, switch from private generation to public publication, add a
live legacy caller, or replace a skill request with ordinary code work—and confirm
that the decisions change at the corresponding boundary. Wording need not remain
stable; ownership, effects, and observable guarantees must.

Classify a finding as:

- **Blocker:** wrong activation, lost invariant, duplicated authority, hidden or
  unauthorized effect, unsafe/unbounded lifecycle, unsupported compatibility,
  untruthful result, broken structural contract, or missing evidence for a changed
  claim.
- **Warning:** maintainability, clarity, or contextual-quality concern that does
  not currently violate the capability; correct it or accept it explicitly.
- **Note:** non-gating observation or separately scoped improvement.

Correct local defects and rerun affected cases after the last edit. Reopen the
smallest governing decision when a failure changes intended scope, ownership,
compatibility, or effect policy.

## Close on the actual result

After behavior is satisfactory, inspect the final working tree including untracked
files and map every changed artifact to fresh evidence. Run focused cases first,
then repository-supported validation and static checks. Inspect links, resources,
generated artifacts, and any observable state rather than relying on exit status.

For a real external integration, record the exact target, pre-state, bounded
operation, stable identifier or receipt, post-state, cleanup, and residue. Skip
the call when it lacks authority; that skip can still validate the skill's refusal
behavior, but it cannot establish provider integration.

Delivery is ready when the final scope is identified, no blocker remains, each
changed behavioral claim has suitable fresh evidence, structural checks pass, and
warnings or skipped checks have an explicit disposition. Report exact observed
checks and their limits. Publication, installation, repository commits, and
external mutation remain separately authorized operations.
