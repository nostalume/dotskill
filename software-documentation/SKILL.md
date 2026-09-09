---
name: software-documentation
description: Write or review software documentation for users or developers from authoritative, versioned behavior, with executable examples and artifact-specific validation. Use when documentation is the primary deliverable; route product changes to software-development and package publication to package-release.
---

# Software Documentation

Own the semantic accuracy and usefulness of software documentation. Treat each
document as an audience-specific projection of the same domain contract as the
software, not as late prose copied from implementation shape.

## Documentation contract

Before writing, state:

- the audience, its immediate question, and the decision or successful action the
  document must enable;
- the authoritative source for every current claim and the software/version or
  compatibility range to which it applies;
- whether the artifact describes observed behavior, an approved future contract,
  a proposal, or historical change;
- the requested output, publication authority, and evidence that will make the
  result trustworthy.

Inspect current source, public interfaces, help/schema output, tests, existing
docs, examples, and release history as applicable. Prefer domain vocabulary and
observable operations over internal call inventory. Write the shortest complete
path first, then add detail only for a real reader decision, failure, or boundary.

Documentation work grants no authority to change product behavior or publish an
artifact. A review-only request does not authorize documentation edits. If writing
exposes an unresolved domain, ownership, compatibility, or failure decision,
return to `architecture-planning`. If documented behavior and implementation
disagree, report the contradiction and use `software-development` only when fixes
were requested.

## Route by audience and artifact

- For onboarding, how-to, troubleshooting, and conceptual guidance for operators
  or consumers, read [user documentation](references/user-documentation.md).
- For maintainers, contributors, architecture, extension, build, test, and debug
  guidance, read [developer documentation](references/developer-documentation.md).
- For CLI/API/schema reference, decision records, migration notes, or release
  notes, read [reference and change documentation](references/reference-and-change-documentation.md).

Use [document-artifacts](../document-artifacts/SKILL.md) when the physical format
requires transformation, inspection, or rendering, including PDF work. That skill
owns format mechanics; this skill still owns software meaning and audience fitness.
Use its shared request/result for physical output, supplying the accepted text,
source revision and required preservation. Check returned content and reported
losses against the documentation contract. Multiple exports use the same accepted
content.

When documentation consumes extracted material, use the
[located projection](../document-artifacts/references/ingestion.md), including
source references and uncertainties. Check its claims against authoritative
software behavior before incorporating them; successful extraction or rendering
does not establish that the explanation is correct.

## Validation and handoff

Select checks from the claims actually made:

- execute snippets, doctests, commands, and minimal success paths in a clean or
  declared environment;
- build/render the artifact and inspect navigation, anchors, links, layout, code
  blocks, and accessibility where applicable;
- compare CLI help, schemas, generated references, public API, supported versions,
  and docs for drift;
- exercise installation instructions from the published/packaged consumer path
  rather than an ambient source checkout when that distinction matters;
- compare release or migration claims with the actual revision range and accepted
  compatibility contract.

Record commands, environment, observed outcomes, skipped checks, and limits. Mark
generated sections and their source; do not hand-edit generated truth. State an
owner or trigger for version-sensitive claims and reopen the document when its
authority, behavior, audience, or supported version changes.

Do not call documentation complete while a current claim lacks authority, an
example is predictably stale or unexecuted without disclosure, a proposal reads as
implemented fact, or rendered output required by the task has not been inspected.
