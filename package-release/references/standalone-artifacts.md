# Standalone archives and installers

Use this recipe when versioned tar/zip archives or platform installers are the
installable distribution and no maintained language, system-package, catalog, or
OCI recipe owns the release. The shared release contract owns authority, retries,
and reporting. This reference owns asset identity, release-host state, update
selectors, and consumer evidence; it does not generalize every installer or host
into one policy.

## Preserve the asset matrix and state model

The release unit is the host/project/version plus an explicit asset matrix. Each
member has a filename, platform, architecture and other compatibility keys,
content type, byte size, digest, and required checksum/signature/notarization
evidence. Include runtime prerequisites, archive layout, install/upgrade/uninstall
behavior, visibility, and any updater-channel document or pointer.

```text
asset matrix prepared -> bytes and metadata inspected -> signatures/notary fixed
  -> draft release created -> assets uploaded -> release published
  -> download/CDN bytes observed -> updater selector observed -> install tested
```

Use only states exposed by the selected host. A tag, draft, uploaded asset,
published page, browser download, CDN copy, and updater-visible version are not
interchangeable. Checksums, signatures, and release notes describe or authenticate
assets; none alone proves installation behavior.

## Prepare exact assets

1. Read the project version source, platform support, release-host policy,
   packaging scripts, installer technology, signing/notarization rules, and updater
   format. Define the complete promised matrix before uploading. Missing one
   architecture is a partial unit even when all other assets work.
2. Build from the intended source with project-selected tools. Record source
   revision, filenames, sizes and cryptographic digests. Do not rebuild after
   review and reuse the old checksum, signature, or approval.
3. Inspect archives before extraction: normalized top-level layout, path traversal
   and absolute-path hazards, links, device/special files, executable bits, file
   ownership/modes, required licenses/readmes, runtime files, and absence of secrets
   or build-host residue. Extract untrusted input only into a fresh owned directory
   with a tool and policy that contain unsafe paths.
4. Inspect each installer with its platform-native metadata and signature tools.
   Confirm platform/architecture, publisher identity, payload, scope, elevation,
   dependencies, install locations, services/drivers/registry or shell changes,
   silent switches, return/reboot codes, upgrade identity, and uninstall route.
5. Generate and verify checksums. Sign or notarize only when project, platform,
   host policy, or the explicit claim requires it. Key use, timestamping and remote
   notarization are consequential external effects; use existing authorized
   identities and bind results to the exact asset bytes.

An unsigned artifact is not automatically invalid when no authority requires a
signature; report the absence and scope instead of inventing a security claim.

## Publish and observe the host

Immediately before an authorized mutation, recheck host, project/repository,
version/tag binding, release visibility, draft/prerelease status, asset-name
conflicts, overwrite/immutability behavior, quotas/cost, credentials, notifications,
retention, and exact asset matrix. Host APIs and CLIs are adapters; use the
project-selected one and keep secrets out of command text and logs.

Create or select the intended draft, upload each reviewed asset, and compare the
host-reported name, size and digest where available. On timeout, list remote assets
before retrying. A same-named remote asset with unknown or different bytes is a
conflict, not permission to replace it. Publish the release as a separate effect
only when authorized and retain its stable host identity.

From the intended public or authenticated consumer boundary, fetch every promised
asset through its final download URL and compare bytes/digests. Check page and API
visibility separately when both matter. CDN lag, private/public mismatch, deleted
asset metadata, and a moving URL that now serves new bytes are distinct failures.

If an updater exists, treat its channel/index pointer as a mutable selector. Verify
that it resolves the intended version and asset digest for each platform, and
report propagation lag separately from release-page publication. Changing the
updater channel is a separate authorized mutation.

## Exercise installers only in suitable consumers

Test archive use or installer install, meaningful execution, upgrade, repair when
claimed, and uninstall in an owned disposable target representing the exact OS,
architecture, privilege, filesystem and trust services. A real-host install or
elevation requires separate `system-mutation` authority. Cross-compilation or
static inspection does not prove an installer on an unavailable platform.

Record files and host integrations created, exit/reboot results, signature/notary
acceptance, application version, retained user data according to policy, and
uninstall residue. Application deployment, service rollout, and production health
are outside this route even when the installer starts a service locally.

Withdrawal can mean unpublish, delete asset, hide release, revoke signature, or
move an updater selector; these have different consequences. Recheck current host
and platform semantics, act only under separate authority, then report remaining
downloads, caches, signatures, mirrors and updater state. Never promise recall of
already downloaded bytes.

## Fail and report precisely

Distinguish incomplete platform matrix, unsafe archive, metadata mismatch,
signature/notarization failure, unsupported platform, elevation unavailable,
installer partial failure, upgrade/uninstall defect, upload rejection, partial or
uncertain asset upload, draft not published, download digest mismatch, CDN lag,
visibility mismatch, updater lag, and withdrawal limits. Return source/version,
host release identity, exact matrix and digests, signature/notary scope, host and
download states, updater selector, consumer environments and results, and all
unexecuted platform claims.

## Current authorities

Use the selected host and platform's current primary interfaces. Common examples
include:

- [GitHub REST release endpoints](https://docs.github.com/en/rest/releases/releases)
- [GitHub REST release-asset endpoints](https://docs.github.com/en/rest/releases/assets)
- [Apple notarization guidance](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution)
- [Microsoft SignTool](https://learn.microsoft.com/en-us/windows/win32/seccrypto/signtool)

These examples are not universal policy. Replace or supplement them with the
actual release host, installer framework, signing service, updater, and target OS
authorities consumed by the project. If their lifecycle cannot be described
without platform-specific behavior, reopen ownership instead of stretching this
generic route.
