# Debian package releases

Use this recipe after selecting a Debian source package, its complete requested
binary-package set, and an exact Debian archive or APT repository. The shared
release contract remains authoritative for authorization, candidate identity,
retry, and reporting. This reference owns Debian package inspection, archive
submission, repository observation, and consumer evidence. Project code remains
with `software-development`; changing a real host remains with `system-mutation`.

## Preserve the native model

A source package is identified by source name and version and may produce several
binary packages. Each binary release has a package name, version, architecture,
and control/payload content. The release unit therefore includes the source
revision, source artifacts when submitted, the complete promised binary set,
their digests, and the selected archive suite/component or repository channel.
Do not treat a lone `.deb`, a source upload, or one architecture as the whole unit
unless that is exactly the project promise.

Keep these transitions distinct:

```text
source and binary set prepared -> package files inspected -> upload submitted
  -> archive accepted -> repository metadata published and authenticated
  -> exact package selected -> install/upgrade/remove behavior observed
```

An APT repository normally authenticates signed repository metadata whose
checksums bind package files; an ordinary `.deb` is not thereby a separately
signed object. Preserve a selected archive's own upload-signature, review,
queueing, replacement, retention, and removal rules.

## Prepare and inspect without installing

1. Read `debian/control`, changelog, rules, source format, patches, install lists,
   maintainer scripts, conffile declarations, service/user/capability handling,
   release instructions, and selected archive policy. Derive the expected source
   and binary package matrix, including architecture-independent and Multi-Arch
   relationships.
2. Build with the project's selected Debian tooling in an admitted environment.
   Record every `.dsc`, source tar/patch member, `.changes`, build-information
   file, and `.deb` plus digest. A successful build does not prove archive policy
   acceptance or installation behavior.
3. Inspect each `.deb` as data before any installation. `dpkg-deb --info` and
   `dpkg-deb --contents` are bounded interfaces for control metadata and payload
   inventory. If control files must be extracted, use a fresh owned directory and
   treat an untrusted archive as hostile input; never extract as root or into `/`.
4. Check package/version/architecture/source fields, Depends/Pre-Depends,
   Recommends, Conflicts/Breaks/Replaces/Provides, file paths, ownership, modes,
   conffiles, triggers, and every executable maintainer script. Confirm the exact
   binary set and reject secret, build-host, or local residue.
5. Inspect source and upload metadata separately. Confirm that checksums bind the
   exact files and that any required upload signature covers the intended unit.
   Do not confuse that signature with the archive's later APT trust chain.

Maintainer scripts can run during unpack, configure, upgrade, error unwind, and
removal. They must tolerate package-manager calling sequences, including repeat
calls where Debian policy requires idempotence. Static inspection cannot prove
those transitions. Conffile preservation, dependency resolution, service start,
system-user creation, and file capabilities also require effectful consumer tests
when claimed.

## Submit and observe the selected archive

Immediately before an authorized submission, recheck the archive host, suite,
component, source/binary acceptance model, version availability, architecture
set, signer identity, account, visibility, quota, and current policy. Use only the
archive's project-approved upload interface. Debian itself, a distribution
derivative, and a third-party APT repository do not share one queue or policy.

Submit only the reviewed source/upload set or binary set required by that target.
Retain the upload receipt or provider identity. On timeout or partial acceptance,
inspect the queue and repository before retrying. Do not rebuild, bump, delete, or
resubmit merely to make an uncertain result disappear.

Observe acceptance separately from consumer visibility. Fetch the selected
repository's Release/InRelease and Packages metadata through its supported client
or API, verify the configured trust path, and prove that the intended package
coordinates and checksums are present. An unsigned or unexpectedly changed
repository identity is a failure, not a reason to disable authentication.

## Exercise package effects only at the admitted boundary

Install, upgrade, downgrade where supported, and remove in an owned disposable
VM, suitable container, or chroot that can actually model the claimed kernel,
init, privilege, filesystem, and maintainer-script behavior. A container without
the required init or capability model cannot prove service activation or host
integration. Real-host installation requires separate `system-mutation`
authority.

Test fresh dependency resolution from the selected repository, the exact binary
set, conffile changes across upgrade, script failure and recovery, service/user/
capability effects, conflict handling, and purge versus remove when promised.
Capture package-manager state after a failure; a nonzero script may leave a
partially installed or configured package. Verify-only requests stop at remote
metadata and package-byte observation and do not install.

Archive removal or supersession is a separate authorized operation. Recheck the
target's retention and snapshot semantics, then observe repository metadata and
fresh resolution. Never claim that repository removal erases mirrors, caches, or
previous downloads.

## Fail and report precisely

Distinguish missing binary/architecture, invalid relationship metadata, unsafe
payload, conffile defect, non-idempotent script, package build failure, upload
signature failure, repository authentication failure, queue rejection, partial
acceptance, indexing lag, dependency conflict, unsuitable test environment, and
consumer transaction failure. Return the source identity, complete binary matrix,
file digests, archive/suite/component, provider states, authenticated repository
observation, tested transitions, and explicitly untested host effects.

## Current authorities

Reconcile current tools, the selected distribution, and archive policy at the
operation edge:

- [Debian Policy: source packages](https://www.debian.org/doc/debian-policy/ch-source)
- [Debian Policy: control fields](https://www.debian.org/doc/debian-policy/ch-controlfields.html)
- [Debian Policy: package relationships](https://www.debian.org/doc/debian-policy/ch-relationships.html)
- [Debian Policy: maintainer scripts](https://www.debian.org/doc/debian-policy/ch-maintainerscripts.html)
- [Debian Policy: files and conffiles](https://www.debian.org/doc/debian-policy/ch-files.html)
- [`dpkg-deb` archive inspection](https://manpages.debian.org/testing/dpkg/dpkg-deb.1.en.html)
- [APT archive authentication](https://manpages.debian.org/testing/apt/apt-secure.8.en.html)

These sources own format and Debian/APT semantics, not a selected third-party
archive's admission policy. Fetch only current target rules needed for the exact
operation rather than reproducing them here.
