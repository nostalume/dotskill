---
name: package-release
description: Prepare, publish, verify, promote, or withdraw installable or resolvable package distributions through project-native registries, repositories, catalogs, and resolvers. Maintained recipes cover selected language registries, Debian and RPM packages, Homebrew and WinGet catalogs, OCI registries, and standalone release assets; excludes ordinary code work, installing third-party dependencies or tools, release-note writing, CI authoring, and application/site deployment.
---

# Package Release

Own the release unit users can resolve or install: its ecosystem-native identity,
variant set, contents or reviewed build inputs, destination, selectors, visibility,
and consumer behavior. `software-development` owns code and project-dependency
changes, `github-actions` owns workflow behavior, `software-documentation` owns
release notes, and `system-mutation` owns installing third-party tools or host
packages. Application and site deployment remain outside this skill. Reuse valid
evidence from those owners for unchanged inputs rather than repeating their work.

Inspect the project's manifests, release commands, intended source, requested
release identity, variants, artifacts or registry-side build inputs, and target.
Follow existing tooling and policy. Use
[local environments](../system-mutation/references/project-environments.md) only
when dependencies are missing; release work needs no new environment manager.

Establish one release unit before any mutation:

- the source revision and ecosystem-native coordinate plus version, revision, or
  other target identity;
- the complete requested variant and artifact set, including platform or feature
  distinctions that the release promises;
- exact digests for publisher-controlled files, or the exact reviewed declaration
  and build inputs plus resulting provider identity when the target builds them;
- the destination account, namespace, repository or catalog, visibility and access
  policy; and
- mutable selectors such as channels, tags, tracks or rings, kept distinct from
  the release identity they currently select.

Add signatures, attestations, provenance, SBOMs or other companion evidence only
when project policy, target policy or an admitted release claim requires them.
Resolve target rules for accepted variants, validation or moderation, coordinate
replacement, selector changes, withdrawal, retention, quota and cost when they
matter to the requested operation.
Do not assume SemVer, an archive upload, immutable versions, one artifact, one
platform, one destination, public visibility or immediate index consistency.

Select the distribution topology before choosing an adapter:

- archive-upload registries accept prepared package archives under a registry
  coordinate;
- staged repositories separate submission, validation and release to consumers;
- VCS/proxy resolution publishes a source revision or tag and observes resolver
  and checksum behavior rather than uploading a conventional archive;
- catalog-manifest systems review metadata that points to an upstream source or
  installer before catalog admission;
- content-addressed registries publish manifests, indexes and blobs by digest while
  human-readable tags may remain separately mutable; and
- standalone assets distribute an explicit platform/architecture set with any
  required checksums, signatures, notarization or update-channel metadata.

This vocabulary maps shared reasoning; it does not assert that an ecosystem
supports every operation or state. Preserve its native coordinate, build owner,
acceptance transitions, selector rules and consumer interface. A missing maintained
recipe requires current official project-native guidance and an explicit limit on
what was not behaviorally verified.

Resolve the publication trust edge separately from provenance. The project and
user authorize the release unit and operation; a registry account plus its
supported credential, such as a scoped token, authenticates one publisher adapter;
a delegated OIDC or trusted-publisher route authenticates a workload whose issuer,
subject claims, repository/workflow and target registration must match current
provider policy. `github-actions` owns the workflow and OIDC permission
configuration. `package-release` verifies that the resulting publisher identity,
destination, operation and payload match the granted release authority.
Authentication does not prove source integrity, payload review or provenance;
require and verify those as separate claims when applicable.

## Enter at the requested operation

| Request | Completion |
| --- | --- |
| Prepare | The release unit and target policy are resolved; controlled outputs or inputs are reviewed, identified and given relevant isolated consumer checks |
| Publish or submit | The exact reviewed unit is sent under existing authority, then its supported provider state and selector are observed |
| Verify | The identified remote release, selector and requested consumer behavior are checked without publishing or repairing |
| Promote or move a channel | A mutable selector is changed under separate authority and observed pointing to the intended existing release |
| Withdraw, yank or unlist | A provider-supported availability change is made under separate authority and its exact post-state and irreversibility limits are observed |

Prepare from the intended clean source revision, using an isolated checkout if
necessary to preserve unrelated work. Build publisher-controlled artifacts or
review target-side declarations and build inputs according to the selected route.
A dirty unrelated checkout does not block registry-only verification. Tags,
release notes, platform matrices and CI changes are required only when the
project's release process needs them.

Inspect applicable distribution contents, declarations, metadata, licenses,
dependencies, entry points and executable hooks; exclude unintended secrets or
local residue. Exercise the exact release through its resolver, installer or
consumer interface outside the source tree. Select checks for the promised
variants and features; do not require every possible distribution or platform.

After selecting the ecosystem and exact target, read only its direct recipe:

| Release family | Maintained recipe |
| --- | --- |
| Python distributions targeting PyPI-compatible indexes | [Python/PyPI](references/python.md) |
| npm packages targeting npm-compatible registries | [npm](references/npm.md) |
| Rust crates targeting crates.io or another Cargo registry | [Cargo](references/cargo.md) |
| JVM components targeting Maven Central | [Maven Central](references/maven-central.md) |
| NuGet packages targeting nuget.org or another NuGet server | [NuGet](references/nuget.md) |
| Go modules published through VCS and observed directly or through proxies | [Go modules](references/go-modules.md) |
| Debian source/binary packages targeting a selected Debian archive or APT repository | [Debian packages](references/debian.md) |
| RPM source/binary packages targeting a selected distribution repository | [RPM packages](references/rpm.md) |
| Homebrew formulae or casks targeting a tap or an official repository | [Homebrew](references/homebrew.md) |
| WinGet manifests targeting the Windows Package Manager Community Repository | [WinGet](references/winget.md) |
| OCI images or artifacts targeting an OCI-compatible registry | [OCI images and artifacts](references/oci.md) |
| Versioned archives or installers published as release-host assets | [Standalone artifacts](references/standalone-artifacts.md) |

For another ecosystem, use its current official project-native guidance and name
the absence of a maintained recipe and any unverified behavior. Do not infer that
an operation or state supported by one provider exists on another, or that a
compatible protocol gives every server the same lifecycle policy.

For the selected adapter, relate the project-selected representation and tool
version, compatible local interface or bounded probe, current authoritative
provider policy, and exact claim required by the operation. Each source proves
only its part of that relation. Reuse an observation only while its owner,
applicability, selected version/target and invalidation identity still match.
Reobserve consequential mutable policy immediately before publish, promote or
withdraw when drift could change authority, destination, visibility, cost,
irreversibility or result semantics. Do not impose a universal freshness interval
or mirror provider documentation.

Provider-policy unavailability does not erase provider-independent preparation.
Complete safe local work and report the exact unresolved target claim as a bounded
partial result. Do not claim publication readiness or perform the mutation when a
current high-consequence compatibility or authority fact cannot be established.

## Mutate and reconcile

Preparation does not authorize publication, promotion or withdrawal. Resolve the
provider, account, namespace, destination, visibility, credentials and exact
mutation immediately before acting. Use existing explicit authority for that
release unit and operation; ask only for genuinely missing authority after
preparation is concrete. A source tag or release object is a separate effect.

Do not rebuild or silently replace reviewed publisher-controlled files before
upload. When the provider performs the build, submit only the reviewed declaration
and inputs, retain its stable receipt or revision, and do not claim identity for
bytes that were not observed. Map only states the provider exposes—for example
submitted, validated, accepted, indexed, selector-visible and consumer-resolvable—
instead of treating a successful request as proof of every later state.

After an uncertain mutation, inspect remote state before retrying. Distinguish a
matching commit, confirmed absence, conflicting identity, partial variant set and
unavailable observation. Resume only eligible missing members of the unchanged
reviewed unit under existing authority. Never delete or withdraw a release merely
to try to reuse its identity. Do not promise rollback when the target offers only
yank, unlist, deprecate or another incomplete availability change.

Verify registry digests or fetched bytes against controlled artifacts. For
provider-built releases, verify the provider identity, published metadata and any
retrievable outputs the claim depends on. Check the intended selector and install
or resolve the exact release in an isolated consumer through the selected target.
When a workflow publishes, observe its run too; workflow success alone does not
prove registry, index or consumer state. Report rejected requests, missing
credentials or authority, conflicting identity, partial publication, uncertain
commit, unavailable observation and failed consumer checks distinctly.

Return the release identity, source revision, variant set, relevant artifact or
input paths and digests, destination and visibility, selector, provider state or
receipt, and observed checks. Keep the reviewed unit for eligible reconciliation.
No separate receipt schema is required. An isolated build is not proof of byte
reproducibility; claim that only after a suitable repeated-build comparison.
