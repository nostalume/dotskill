# NuGet feed releases

Use this recipe after selecting a NuGet package and exact package source. The
shared release contract governs authority, exact payload identity, retries, and
reporting. This reference owns the NuGet ID/version, `.nupkg` and symbol-package
set, feed authentication, server-native listing/deletion behavior, and restore
evidence. Code, project metadata changes, and build correctness remain with the
project and `software-development`.

## Preserve the native model

A NuGet release is a source-scoped package ID and version backed by a `.nupkg`;
an optional `.snupkg` has the same ID/version but a distinct symbol-server
lifecycle. The primary archive can contain different compile/runtime assets for
target frameworks and runtime identifiers, dependencies, analyzers, content, and
MSBuild `.props`/`.targets`. Those assets and hooks are part of the consumer
contract, not incidental ZIP members.

Keep these states distinct:

```text
project/package declaration
  -> nupkg (+ optional snupkg) packed and inspected
  -> each intended package push accepted
  -> feed metadata/listing observed
  -> exact-version restore observed

  -> unlisted | relisted | server-defined delete state
```

A successful primary push does not prove symbol indexing. A V3 publish response
may be `201` or `202`; `409` identifies an existing ID/version conflict rather
than a retry invitation. The NuGet protocol permits servers to interpret delete
as hard delete, soft delete, or unlist. On nuget.org, delete means unlist: exact-
version download remains available and the coordinate is not freed.

## Prepare and inspect the packages

1. Read the selected project or `.nuspec`, solution/repository release policy,
   package source configuration, lock/assets files, and project SDK/client version.
   Fix the package ID/version, configuration, target frameworks, runtime-specific
   assets, dependency groups, package types, and primary/symbol set.
2. Resolve the exact source URL/service index and current provider policy for ID
   ownership, visibility, reserved prefixes, validation, signing, size, cost/quota,
   retention, listing, and deletion. A NuGet-compatible protocol does not imply
   nuget.org policy.
3. Build through the existing project workflow. For an SDK-style project whose
   restore inputs are already established, a bounded starting operation is:

   ```sh
   dotnet pack <project> --configuration Release --output <owned-directory> --no-restore
   ```

   Omit `--no-restore` when a current restore is required and its network/cache
   effects are admitted. Use the project's selected MSBuild or NuGet pack route
   for non-SDK projects. Do not create or migrate a project merely to prefer this
   example.
4. Treat `.nupkg` and `.snupkg` as untrusted ZIP containers: bound expansion and
   paths, then inspect the generated `.nuspec` and actual members. Reconcile ID,
   version, authors/license/readme/icon/repository metadata, dependency groups,
   TFMs, `lib`, `ref`, `runtimes`, `contentFiles`, `build`, `buildTransitive`,
   `analyzers`, `tools`, native assets, and executable MSBuild/PowerShell hooks as
   applicable. Check for secrets and local residue.
5. If symbols are promised, verify the `.snupkg` has the same ID/version and the
   intended portable PDB layout. If signing is required by project/source policy
   or claim, verify the signature against the exact candidate. Record every
   package digest; a regenerated archive is a new candidate.

Pack success does not prove that all target frameworks restore or run. Exercise
the promised variants through disposable consumers. Treat build targets and tools
from the package as code: execution requires the corresponding project/test
authority and containment.

## Bind credentials and publish

Immediately before push, recheck account/owner, source service index and publish
resource, visibility, ID/version availability, package digests, current validation
and listing policy, credential scope, trusted-publisher identity when selected,
and any cost/quota. Use a scoped key or a current source-supported short-lived
credential through the host/workflow facility. Never paste a key into skill text,
persist it in source configuration, or expose it in logs. `github-actions` owns
OIDC workflow permissions; this recipe verifies that the resulting temporary
publisher credential is scoped to the intended owner/package operation.

The selected client operation is conceptually:

```sh
dotnet nuget push <package.nupkg> --source <source> <current-credential-binding>
```

Resolve `<current-credential-binding>` from the compatible client and provider at
execution; it is not literal command text. Pushing transmits package bytes and
mutates the feed. Use the project's NuGet client if `dotnet` is not authoritative.
Publish the exact reviewed primary/symbol set, recording each response separately.
Do not use skip-duplicate behavior to convert an unknown `409` into success: first
compare the existing package identity or report a conflict when bytes cannot be
established.

After a timeout or uncertain response, query feed registration/content for the
exact ID/version before another push. Retry only a confirmed missing member from
the unchanged reviewed set. If the primary exists and symbols failed, report a
partial release and follow the provider's eligible symbol retry path; never change
the primary coordinate to hide the partial state.

## Observe an exact consumer

Wait within a bounded provider-appropriate window, then inspect the feed's exact
version registration, listing state, dependency/asset metadata, and retrievable
bytes. Compare fetched hashes when the source exposes or permits this evidence.
Search visibility is not the same as exact-version availability.

Create an owned consumer outside the source tree. Configure only the intended
source (using a task-owned `NuGet.Config` with `<clear />` when ambiguity matters),
use an exact version range such as `[1.2.3]`, restore, and inspect the resolved
`project.assets.json` plus the smallest compile/use check for each promised TFM or
runtime. Ensure stale global packages or HTTP cache did not satisfy a fresh-source
claim; use task-owned caches or an admitted cache control rather than deleting the
user's shared cache.

Private feeds may require a credential provider for restore as well as push.
Missing consumer credentials are distinct from a missing publication.

## Unlist, relist, or delete

Resolve the selected server's current `PackagePublish` behavior before mutation.
On nuget.org, unlisting hides a version from search but exact-version consumers can
still restore it; relisting reverses search visibility. Another server may hard
delete, soft delete, or unlist. State the irreversible consequence and obtain
separate authority before invoking its delete/unlist interface. Observe both
listing and exact download afterward. Never claim that deletion makes the same
ID/version reusable unless the target explicitly proves that policy.

## Fail and report precisely

Distinguish wrong project/configuration, malformed or incomplete package,
primary/symbol mismatch, signing failure, missing credential, validation rejection,
ID/version conflict, accepted-but-indexing, partial symbol publication, unlisted
but resolvable, server-defined deletion, uncertain push, and consumer restore or
asset-selection failure. Return the source revision, ID/version, TFM/runtime and
package set, archive paths/digests, source/visibility, credential route (never the
secret), per-package responses, listing/content observation, exact consumer
result, and unresolved provider facts.

## Current authorities

- [Create packages with the .NET CLI](https://learn.microsoft.com/en-us/nuget/create-packages/creating-a-package-dotnet-cli)
- [NuGet package structure and `.nuspec`](https://learn.microsoft.com/en-us/nuget/reference/nuspec)
- [Create `.snupkg` symbol packages](https://learn.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg)
- [Publish to nuget.org](https://learn.microsoft.com/en-us/nuget/nuget-org/publish-a-package)
- [NuGet V3 push/delete/relist protocol](https://learn.microsoft.com/en-us/nuget/api/package-publish-resource)
- [nuget.org deletion and unlisting policy](https://learn.microsoft.com/en-us/nuget/nuget-org/policies/deleting-packages)
- [nuget.org trusted publishing](https://learn.microsoft.com/en-us/nuget/nuget-org/trusted-publishing)
- [Authenticated feed consumption](https://learn.microsoft.com/en-us/nuget/consume-packages/consuming-packages-authenticated-feeds)

Reconcile the selected client version with the exact provider. Reobserve mutable
credential, validation, indexing, cost/quota, and deletion policy only when the
requested operation depends on it.
