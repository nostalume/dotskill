# RPM package releases

Use this recipe after selecting an RPM source package, its requested binary and
subpackage set, and an exact distribution repository. The shared release contract
owns authorization, identity, retry, and reporting. This reference owns RPM
candidate inspection, repository submission and observation, and consumer
evidence. It does not make Fedora, RHEL, openSUSE, or a third-party repository one
policy domain.

## Preserve the native model

RPM distinguishes a source package from installable binary packages. A binary
identity combines name, epoch when present, version, release, and architecture;
one spec build can emit multiple subpackages plus source/debug outputs. Preserve
the spec/source revision, selected macro and build environment, complete promised
output matrix, each package digest, target repository/channel, and consumer claim.

```text
spec and sources selected -> SRPM/binary set built -> package headers inspected
  -> repository submission accepted -> repository metadata published
  -> exact NEVRA selected -> install/upgrade/erase behavior observed
```

Repository signing, build services, moderation, modules/content views, and
channels are selected-distribution states. A valid RPM file does not prove that a
particular repository admits or exposes it.

## Prepare and inspect without installing

1. Read the spec, sources/patches, macros, build requirements, subpackage sections,
   dependency generators, `%files` lists, configuration markers, scriptlets,
   transaction/file triggers, release instructions, and selected distribution
   policy. Resolve expected source, binary, debug, architecture, and `noarch`
   outputs before building.
2. Build with the project-selected RPM toolchain in an admitted, reproducible
   enough build environment. Record SRPM and binary paths, NEVRA values, digests,
   and the build configuration that changes results. Build success is not
   repository or runtime proof.
3. Query package files, not the installed database. Use the selected RPM version's
   package-file query interface to inspect metadata, payload files, ownership,
   modes, capabilities, dependencies, provides, conflicts/obsoletes, scripts, and
   triggers. Verify package signatures/digests with the target-approved trust
   configuration. Querying or extracting untrusted archives is still parser input;
   use an owned unprivileged location.

   ```sh
   rpm -qpi <package.rpm>
   rpm -qpl <package.rpm>
   rpm -qp --requires <package.rpm>
   rpm -qp --provides <package.rpm>
   rpm -qp --scripts <package.rpm>
   rpm -qp --triggers <package.rpm>
   rpmkeys --checksig <package.rpm>
   ```

   These inspect package files but do not solve repository dependencies or execute
   transaction scripts. Interpret signature output only against the selected
   target's admitted keys and current RPM interface.
4. Confirm the entire subpackage and architecture set and compare it to the spec.
   Do not label content `noarch` merely because compilation did not occur. Reject
   undeclared files, missing runtime dependencies, unsafe ownership/modes,
   embedded secrets, and build-host residue.

Macros and automatic dependency generation vary with the selected build system
and distribution. Resolve consequential expansions from the actual build output;
do not transplant another distribution's macros or packaging guidelines.

## Submit and observe the repository

Immediately before an authorized submission, recheck the repository host,
project/namespace, distribution release, channel, build-versus-binary submission
model, supported architectures, signing identity, coordinate availability,
visibility, quotas, and current admission policy. Submit only the reviewed unit
through the selected repository's supported interface and retain its build or
submission identity.

Separate upload, remote build, policy validation, signing, repository composition,
metadata publication, and client visibility where the target exposes them. A
build-service success or signed RPM is not proof that enabled clients can resolve
it. After an uncertain request, inspect target state before retrying; reconcile a
partial subpackage or architecture set without silently rebuilding unchanged
members.

Observe repository metadata and exact NEVRA selection through the intended client
with its configured trust roots and repository/module/content-view constraints.
A signature created by one key and repository metadata trusted through another
must satisfy the selected distribution's complete trust path; never bypass a
mismatch to make a check pass.

## Exercise transaction behavior at the effect boundary

Install, upgrade, and erase only in an owned disposable VM, container, chroot, or
install root suitable for the claimed behavior. RPM's alternate-root options do
not by themselves emulate the target kernel, init system, filesystem, privilege,
or repository solver. Real-host changes require separate `system-mutation`
authority.

Use the distribution's intended solver for dependency and repository claims, not
only low-level `rpm`. Test config-file preservation/replacement, scriptlet and
trigger ordering, service/user/capability effects, obsoletes/conflicts, and
failure recovery when promised. Record the transaction database state after a
scriptlet failure; installed payload and completed script phases can be partial.

Withdrawal, unlisting, repository removal, and channel promotion are separate
authorized mutations with target-defined retention. Observe fresh solver results
and selector state, and do not claim that metadata removal deletes cached RPMs.

## Fail and report precisely

Distinguish wrong spec/build configuration, incomplete subpackage set,
architecture error, invalid dependency/provide, payload defect, signature failure,
repository trust mismatch, submission rejection, remote-build failure, partial
composition, module/channel exclusion, indexing lag, unsuitable test environment,
scriptlet partial failure, and consumer failure. Return source/spec identity,
build configuration, complete NEVRA matrix and digests, repository/channel,
provider states, trust observation, transaction cases, and untested host effects.

## Current authorities

Use current RPM interfaces and the selected distribution's primary policy at the
operation edge:

- [RPM package manager](https://rpm.org/docs/latest/man/rpm.8)
- [RPM spec format](https://rpm.org/docs/latest/manual/spec.html)
- [RPM dependencies](https://rpm.org/docs/latest/manual/dependencies.html)
- [RPM triggers](https://rpm.org/docs/latest/manual/triggers.html)
- [RPM signing](https://rpm.org/docs/latest/man/rpmsign.1)
- [Fedora Packaging Guidelines](https://docs.fedoraproject.org/en-US/packaging-guidelines/)

The Fedora guidance is an example authority only when Fedora is the selected
target. Replace it with current RHEL, openSUSE, or repository-native policy for
those targets; protocol similarity does not transfer lifecycle rules.
