# Cargo registry releases

Use this recipe after selecting a Rust crate and an exact Cargo registry. The
shared release contract remains authoritative for authorization, artifact
identity, retries, and reporting. This reference owns Cargo package selection,
the `.crate` payload, registry authentication, index observation, consumer
resolution, and registry-specific yank behavior. Code correctness and changes to
`Cargo.toml` remain with the project and `software-development`.

## Preserve the native model

A Cargo registry release is a registry-scoped crate name and version backed by a
registry index entry and a downloadable `.crate` archive. The source revision,
selected workspace member, registry, packaged feature/target surface, archive
digest, and consumer result complete the release unit. A source tag is useful
project evidence only when the project requires it; it is a separate VCS effect.

Keep these states distinct:

```text
selected source/member
  -> package file set reviewed
  -> .crate created and verified locally
  -> upload accepted
  -> index entry observable
  -> exact registry consumer resolves or installs

                         -> yanked | unyanked when the target supports it
```

`cargo publish` polling can time out after the upload succeeded. Index visibility
and consumer resolution are later observations, so inspect them before retrying.
For crates.io, a published name/version cannot be overwritten and a yank changes
new resolution without deleting the archive; establish an alternate registry's
own replacement and withdrawal policy instead of borrowing crates.io semantics.

## Prepare the exact crate

1. Read the workspace root and selected member's `Cargo.toml`, lockfile, release
   instructions, registry configuration, and `package.publish`. Select with
   `--package` or `--manifest-path` when defaults could choose another member.
   `publish = false` refuses publication; an allowlist constrains the destination.
2. Resolve the intended registry by name. Inspect its current index/API policy,
   ownership, visibility, size/metadata rules, cost or quota, and credential route.
   A configured default is evidence, not permission to publish there.
3. Review the actual package file set before building:

   ```sh
   cargo package --list --package <crate> --registry <registry>
   ```

   Check required source, generated inputs, build scripts, license/readme files,
   manifest metadata, and absence of secrets or local residue. Cargo `include`,
   `exclude`, VCS-ignore behavior, nested packages, and generated normalized
   manifests can make the archive differ from the checkout.
4. Create and verify the candidate with the project-selected toolchain:

   ```sh
   cargo package --package <crate> --registry <registry>
   cargo publish --dry-run --package <crate> --registry <registry>
   ```

   These commands may resolve/download dependencies, write the target directory,
   generate or update a lockfile when allowed, execute build scripts, and compile
   extracted package content. Admit those effects. Do not use `--allow-dirty`,
   `--no-verify`, or `--offline` merely to force a pass; each changes the evidence.
5. Inspect the resulting `target/package/*.crate` as a bounded tar archive. Record
   its digest, member list, normalized `Cargo.toml`, original manifest, lockfile,
   `.cargo_vcs_info.json` when present, and executable build hooks. Confirm every
   promised feature and target with project-owned checks; default package
   verification does not prove all features, targets, examples, or platforms.

A missing required file is a failed package, even if the source-tree build passed.
Repair the project and create a new reviewed archive. A successful dry run proves
no registry mutation and does not prove current registry acceptance.

## Authenticate and publish

Immediately before publication, recheck the account, ownership, registry name and
index/API identity, visibility, coordinate availability, current policy, and the
candidate digest. Use the project's existing Cargo credential provider or a
current registry-supported trusted-publisher/OIDC exchange. Keep tokens in the
host credential facility; never put `--token` values in commands, skill files, or
logs. `github-actions` owns workflow identity and OIDC permissions; this recipe
checks that the issued publisher identity and registry target match the release.

Publication is the separate authorized effect:

```sh
cargo publish --package <crate> --registry <registry>
```

Do not rebuild after review. If the selected Cargo interface necessarily packages
again, prove that its submitted crate corresponds to the reviewed source and
package inventory, and retain the observable registry checksum when available.
On authentication rejection, policy rejection, conflicting name/version, or an
uncertain timeout, stop and inspect registry/index state. Retry only after
confirmed absence; never yank to try to free a coordinate.

## Observe the consumer

Observe the exact registry index entry and its checksum/metadata, then resolve the
name and exact version from that registry in an owned consumer outside the source
tree. For a binary crate, one bounded route is:

```sh
cargo install <crate> --version <version> --registry <registry> --root <owned-root>
```

For a library, create a disposable consumer whose dependency pins the exact crate
version and whose registry/source configuration names the selected registry, then
run the smallest compile/use check. Installation changes the owned root and may
download/build dependencies; it is not authorized against the user's ordinary
Cargo install root. A yanked version may remain usable through an existing lock
selection while being unavailable to new resolution, so test the intended case.

## Yank or restore availability

Yank and unyank are separate authorized registry mutations:

```sh
cargo yank <crate> --version <version> --registry <registry>
cargo yank <crate> --version <version> --registry <registry> --undo
```

Recheck current target support and semantics first. Observe the exact index flag
and both locked and fresh-resolution behavior when relevant. On crates.io, yanking
does not remove leaked content; revoke exposed credentials and follow the
provider's incident path. Never report yank as deletion or rollback.

## Fail and report precisely

Distinguish wrong workspace member, prohibited registry, dirty-source refusal,
missing packaged file, package verification failure, missing credential,
authentication/policy rejection, conflicting coordinate, upload accepted but
index pending, uncertain upload, yank state, and consumer failure. Return the
member manifest, source revision, crate name/version, registry, archive path and
digest, feature/target claims checked, upload observation, index checksum/state,
consumer result, and any unresolved provider fact.

## Current authorities

Reconcile the selected Cargo version with current primary documentation at the
operation edge:

- [Cargo package](https://doc.rust-lang.org/cargo/commands/cargo-package.html)
- [Cargo publish](https://doc.rust-lang.org/cargo/commands/cargo-publish.html)
- [Cargo registry configuration and `package.publish`](https://doc.rust-lang.org/cargo/reference/registries.html)
- [Cargo registry authentication](https://doc.rust-lang.org/cargo/reference/registry-authentication.html)
- [Cargo registry index](https://doc.rust-lang.org/cargo/reference/registry-index.html)
- [Publishing and yanking on crates.io](https://doc.rust-lang.org/cargo/reference/publishing.html)
- [crates.io trusted-publishing announcement](https://blog.rust-lang.org/2025/07/11/crates-io-development-update-2025-07/)

These pages own current interfaces and crates.io policy. The selected alternate
registry owns its own acceptance, retention, cost, and withdrawal rules. Reobserve
only the facts needed for the requested operation; do not mirror the whole policy.
