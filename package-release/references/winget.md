# WinGet catalog releases

Use this recipe after selecting a Windows Package Manager package/version, its
upstream installer set, and the Community Repository. The shared release contract
owns authority, retries, and reporting. This reference owns manifest preparation,
repository submission states, catalog propagation, and consumer evidence. The
upstream installer remains a separate publisher-controlled release artifact.

## Preserve the catalog model

A WinGet release binds `PackageIdentifier` and `PackageVersion` to a manifest set
and one or more upstream installers. The set can include version, installer,
default-locale, and additional-locale manifests under the current repository
schema. Preserve every installer's URL, SHA-256, type, architecture, scope,
platform constraints, switches, dependencies, elevation expectations, upgrade and
uninstall identity, plus the manifest schema/version and repository path.

```text
upstream installer fixed -> manifest set built and locally validated
  -> pull request submitted -> automated validation -> moderation/review -> merge
  -> public catalog ingestion -> exact client resolution -> install observed
```

The open-source manifest repository and consumer-facing catalog are distinct.
Validation success, PR merge, and catalog visibility therefore prove different
states.

## Prepare and validate the exact manifest set

1. Read the upstream release, installer documentation, existing package history,
   current manifest schemas, repository path rules, and submission policy. Confirm
   identifier/version consistency across every file and locale.
2. Download each exact installer to an owned location, record its digest and
   publisher/signature evidence when required, and compare SHA-256 to the manifest.
   A stable-looking URL is not byte identity. Never update a hash for changed bytes
   until the new upstream artifact is independently authorized as that release.
3. Check installer type, architecture and platform selection, scope, locale,
   nested-installer metadata, product/package family identifiers, dependencies,
   return codes, install modes, switches, elevation, uninstall and upgrade
   behavior. A multi-installer manifest must select one intended installer for
   each claimed consumer, without ambiguous or missing coverage.
4. Validate against the selected client's current schemas with `winget validate
   --manifest <path>`. Validation can prove schema/repository rules available to
   that client; it does not prove installer safety, silent success, review
   acceptance, catalog ingestion, or upgrade behavior.

Manifest generators may download installers and can offer to submit a pull
request. Separate generation from submission and decline the remote mutation
unless it is explicitly authorized. Installing a generator is itself a
`system-mutation` task when it is not already admitted.

## Test installer behavior at the effect boundary

Install from the local manifest only in an owned disposable Windows VM or other
target that represents the claimed architecture, Windows version, privilege and
installer technology. Installation, elevation, services, registry changes,
shortcuts, file associations, PATH changes, reboot behavior, and uninstallation
are host effects; a real-host test requires separate authority.

Exercise noninteractive install, a meaningful launch or functional check,
upgrade from the supported predecessor, and uninstall when those claims are made.
Inspect actual installed state and return codes. An installer that exits zero but
does not install, prompts during a silent route, selects the wrong scope, or
cannot be correlated for upgrade fails the corresponding claim.

## Submit, moderate, and observe

Immediately before an authorized PR, recheck upstream bytes, repository head,
manifest schemas and path, duplicate version/PR state, current policy, account,
fork/destination, disclosed data, and exact diff. Retain commit and PR identity.
Observe automated validation, manual moderation, requested changes, merge, and
catalog ingestion separately. Never resubmit an uncertain PR before checking its
remote state.

After ingestion, refresh or isolate the intended WinGet source and resolve the
exact identifier/version. Confirm that the catalog selects the expected installer
for each claimed architecture/scope, then repeat only the authorized consumer
check needed for catalog behavior. A merged manifest absent from the catalog is
pending or failed publication, not completed release.

An update, version removal, or withdrawal is a separate repository/provider
operation under current policy. Observe repository and catalog post-state and
state whether existing installer URLs, client caches, or installed software remain.

## Fail and report precisely

Distinguish moving URL, hash/signature mismatch, schema/path failure, unsupported
silent install, ambiguous multi-installer selection, local installation failure,
PR awaiting validation, validation passed awaiting moderation, rejection, merge
awaiting catalog ingestion, catalog selection mismatch, upgrade/uninstall failure,
and withdrawal pending. Return identifier/version, complete manifest and installer
matrix with digests, repository/commit/PR, validation/review/merge/catalog states,
consumer environment and checks, and withheld host effects.

## Current authorities

Reconcile the installed client with current Microsoft and repository guidance at
the operation edge:

- [Create a package manifest](https://learn.microsoft.com/en-us/windows/package-manager/package/manifest)
- [Submit a manifest to the repository](https://learn.microsoft.com/en-us/windows/package-manager/package/repository)
- [`winget validate`](https://learn.microsoft.com/en-us/windows/package-manager/winget/validate)
- [`winget hash`](https://learn.microsoft.com/en-us/windows/package-manager/winget/hash)
- [WinGet manifest schema index](https://github.com/microsoft/winget-pkgs/blob/master/doc/manifest/README.md)
- [WinGet package repository contribution guidance](https://github.com/microsoft/winget-pkgs/blob/master/CONTRIBUTING.md)

These sources are mutable provider policy and interface truth. Fetch the schema
selected by the actual manifest instead of embedding a forever-current field list.
