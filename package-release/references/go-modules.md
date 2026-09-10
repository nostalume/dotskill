# Go module releases

Use this recipe after selecting a Go module and its intended VCS/proxy path. The
shared release contract governs authority, exact identity, uncertain mutation,
and consumer evidence. This reference owns module-path/version identity, tag
mapping, proxy/direct/checksum observation, private-module boundaries, and
retraction semantics. Source changes, tests, and VCS history remain owned by the
project and `software-development`; tag creation and push need separate authority.

## Preserve the native model

A Go module is released as `module-path@version`. Its `go.mod` declares the module
path and dependencies; its version normally selects an immutable VCS revision.
Public Go distribution does not require uploading a publisher-built archive to a
central registry: the `go` command locates the repository directly or through a
module proxy, and may authenticate public module content with a checksum database.

The release identity therefore binds:

```text
repository + module subdirectory + go.mod module path
  <-> canonical version + correctly prefixed VCS tag
  <-> immutable VCS revision
  <-> direct/proxy module metadata, mod, zip and checksum observations
  <-> exact-version consumer resolution
```

Keep the lifecycle distinct:

```text
source/revision prepared
  -> local tag created
  -> tag pushed to authoritative VCS
  -> direct resolution observable
  -> selected proxy/checksum observation
  -> exact consumer succeeds

prior version -> retract directive in a new higher module version -> observed retraction
```

A local tag is not publication. A pushed tag is not proof that a selected proxy
has fetched it. Proxy lag is not permission to move or recreate the tag. Once a
version has been fetched, changing its tag to different content can produce a
checksum security error and violates the immutable-version model.

## Prepare the module identity

1. Locate the exact module root containing `go.mod`, repository root, source
   revision, release instructions, workspace files, nested modules, and private-
   module policy. Record the declared module path, Go/toolchain directives,
   dependency graph, replace/exclude/retract directives, packages, and generated
   or embedded inputs relevant to consumers.
2. Derive the canonical version and tag from the module location:
   - repository-root module: tag `vX.Y.Z`;
   - module in subdirectory `sub`: tag `sub/vX.Y.Z`;
   - for v2 and later, the module path ends in `/vN`; the tag's directory prefix
     identifies the module subdirectory and does not repeat a major-version suffix
     merely because the path ends in `/vN`.
3. Confirm that module path, version major, import paths, repository/subdirectory,
   tag, and selected revision agree. A v2+ path mismatch or wrong subdirectory
   prefix is a failed release identity, not a proxy problem.
4. Consume fresh project-owned code evidence for the selected revision. `go mod
   tidy` edits `go.mod`/`go.sum`, and tests or generators can execute project code;
   do not run them as read-only release inspection or silently accept their edits.
   If authorized by the project workflow, run them before fixing the candidate
   revision and review the resulting diff.
5. Inspect version-controlled module content and excluded material at the exact
   revision. Check licenses, generated inputs, build constraints, embedded files,
   dependency/replacement policy, and absence of secrets. Local source inspection
   cannot prove the proxy-generated module zip or checksum that consumers will see.

Preparation can complete offline through the fixed source/revision/tag mapping.
It cannot claim direct/proxy publication, checksum acceptance, or public discovery
without the corresponding current external observation.

## Bind private and public resolution

Before any VCS or network effect, resolve the authoritative remote, account,
repository visibility, module path discovery (`go-import` metadata when relevant),
tag permissions, proxy chain, checksum database, credential mechanism, data
disclosure, and current provider limits/policy. `GOPROXY`, `GOPRIVATE`,
`GONOPROXY`, `GOSUMDB`, and `GONOSUMDB` determine different resolution and
disclosure edges; preserve the project's accepted configuration.

Do not run `go env -w` merely to test a route because it changes user-global
configuration. Pass task-scoped environment values to the selected command or use
the project's environment. A private module must not be sent to a public proxy or
checksum database unless that disclosure is authorized. Missing private VCS/feed
credentials yield a precise unavailable observation, not a public fallback.

## Create and publish the tag

Reconfirm the exact revision and absence of a conflicting local/remote tag.
Creating the tag is a local repository mutation; pushing it is a separate remote
mutation. Perform each only when explicitly authorized:

```sh
git tag <derived-tag> <exact-revision>
git push <authoritative-remote> refs/tags/<derived-tag>
```

Use the project's required signed/annotated/lightweight tag form; Go's version
mapping does not replace project signing policy. Observe the remote ref resolving
to the intended revision. On an uncertain push, query that exact remote ref before
retrying. A conflicting tag stops the release; never force-move it as recovery.

## Observe direct, proxy, and checksum state

Use the selected project Go toolchain and a task-scoped environment. Observe the
exact module/version through every route claimed. Typical bounded queries are:

```sh
go list -m -json <module-path>@<version>
go mod download -json <module-path>@<version>
```

Set the intended `GOPROXY`/checksum/private variables for each observation; record
them without secrets. The download result can expose the resolved version, module
files and sums, but command success under `direct` does not prove proxy visibility,
and proxy success does not prove pkg.go.dev discovery. A checksum mismatch is a
terminal identity failure: preserve evidence, stop, and investigate the tag/content
history rather than bypassing the checksum policy or retagging.

For proxy lag, compare the authoritative remote, an authorized `direct` query, and
the selected proxy with bounded retries appropriate to current policy. Report the
last distinct state. Do not use an unrelated proxy as equivalent evidence.

## Exercise an exact consumer

Create an owned module outside the source tree, configure only the admitted
resolution route, require `module-path@version`, and run the smallest download,
compile, or use check that proves the promised packages and platforms. Inspect the
consumer's selected module/version and sums. Existing module/cache content can
hide source or proxy failures; use a task-owned module/cache when freshness is
part of the claim, without deleting the user's shared caches.

A private consumer may require VCS credentials and private-path settings. Report
consumer authentication separately from release absence. Platform-specific build
claims need the project-owned cross-platform evidence; ordinary module resolution
does not prove every target.

## Retract without pretending to delete

A `retract` directive belongs in `go.mod` of a new version that the `go` command
can discover as the module's latest version. Adding it changes source, and
publishing it requires a new correctly mapped tag and all normal release authority.
The retracted version normally remains available for existing builds; mirrors may
retain it. After the new release is observable, query versions with retractions
included and check fresh selection behavior. Do not delete or move the old tag and
do not report retraction as byte removal.

## Fail and report precisely

Distinguish wrong module root/path, v2+ mismatch, wrong tag prefix, source not
ready, local-only tag, conflicting or uncertain remote tag, private-policy block,
direct failure, proxy lag, checksum mismatch, retracted-but-available version,
discovery lag, and exact consumer failure. Return module path/version, module and
repository roots, source revision/tag/remote identity, relevant `go.mod` digest,
resolution policy (without credentials), direct/proxy/checksum observations,
consumer result, retraction state, effects performed, and unresolved provider fact.

## Current authorities

- [Publishing a Go module](https://go.dev/doc/modules/publishing)
- [Go Modules Reference](https://go.dev/ref/mod)
- [Managing module source and subdirectory tags](https://go.dev/doc/modules/managing-source)
- [`go.mod` reference and retractions](https://go.dev/doc/modules/gomod-ref)
- [Module release and major-version workflow](https://go.dev/doc/modules/release-workflow)
- [`go` command reference](https://pkg.go.dev/cmd/go)

The official Go module and toolchain documentation owns path/version/tag,
proxy, checksum, and retraction semantics; the selected VCS, proxy, checksum
service, and private infrastructure own their current availability, credentials,
retention, and limits. Reobserve only the consequential selected edge rather than
copying those services' full policies into this recipe.
