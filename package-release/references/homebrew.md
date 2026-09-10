# Homebrew formula and cask releases

Use this recipe after selecting a formula or cask, its upstream artifacts, and an
exact tap or official Homebrew repository. The shared release contract owns
authorization, retries, and reporting. This reference owns the reviewed package
definition, repository submission states, client propagation, and consumer
evidence. It does not authorize a pull request or installation merely because a
definition validates locally.

## Preserve the catalog model

A formula is a Ruby package definition that normally builds upstream source; a
cask describes installation of upstream-built binaries. A bottle is a formula's
prebuilt keg and has its own platform identity and digest. Bind the tap/repository,
formula or cask token, version/revision/version scheme where applicable, exact
upstream URLs and digests, dependency and platform selection, definition commit,
and promised bottle/source or installer behavior.

```text
upstream artifact fixed -> formula/cask reviewed -> local audit/test evidence
  -> pull request submitted -> automation validated -> review accepted -> merged
  -> bottle/API/tap state propagated -> exact client resolves -> install observed
```

A passing audit, open pull request, merged commit, built bottle, generated API
entry, and client-visible package are different observations. A custom tap can
publish by repository update without the official repositories' moderation; keep
its policy explicit.

## Prepare the definition and upstream binding

1. Read the project release identity, upstream asset matrix, formula/cask file,
   tap policy, and current target contribution rules. Confirm token/name, version,
   license, homepage, stable upstream URL, digest, dependencies, platform/
   architecture conditions, install logic, test, caveats, and uninstall/zap
   behavior relevant to the claim.
2. Fetch each upstream source or installer through the selected tooling and verify
   the declared digest. A vanity or moving URL is acceptable only under current
   target policy and never substitutes for byte identity; changed bytes at one URL
   require a new reviewed binding, not a checksum update by assumption.
3. Run only checks whose effects are admitted. Syntax and audit checks can still
   access the network or caches. Formula install/test builds and mutates a Homebrew
   prefix; cask install/uninstall can run privileged upstream installers. Use an
   owned suitable runner and do not treat the user's normal Homebrew installation
   as a disposable fixture.

   ```sh
   brew audit --strict --online <formula-or-cask>
   brew install --build-from-source <formula>
   brew test <formula>
   brew uninstall <formula>
   ```

   The latter three are effectful consumer operations, not harmless validators.
   For a cask, use the current cask-specific audit/install/uninstall interfaces in
   a disposable macOS runner and inspect the upstream installer's actual effects.
4. For formulae, distinguish source-build evidence from bottle evidence. Confirm
   promised platforms, linkage, dependencies, installed files, and meaningful
   `test do` behavior. For casks, confirm installer selection, silent behavior,
   artifacts, uninstall and upgrade in a disposable supported macOS environment.
   A process exit alone is insufficient if the installed application is absent.

Do not add `revision`, `version_scheme`, bottle rebuild data, or exceptions from
memory. Resolve their current meaning and acceptance from target policy when the
change needs them.

## Submit, moderate, and observe

Immediately before an authorized repository mutation, recheck the target tap,
branch, current definition, duplicate/pending submissions, contribution policy,
account, fork and pull-request destination, disclosed data, and exact diff. A
local commit or fork push is a separate effect; pull-request creation is another.

Retain the commit and PR identity. Observe repository automation, review state,
requested changes, merge commit, and any bottle-building or API-generation job as
separate transitions. Do not report publication while review is pending, or
consumer availability solely because the definition merged.

After target propagation, use a fresh or deliberately updated client view to
resolve the exact token and version from the selected tap/API. Then perform the
smallest admitted install and functional test in an owned consumer. Record whether
the client poured a bottle or built source, or which cask installer it selected;
one route does not prove the other.

Updates, deprecation/disablement, removal, and cask/formula migration are separate
authorized repository changes. Recheck current target policy, observe merge and
client state, and state what existing installations, cached files, or old commits
remain usable.

## Fail and report precisely

Distinguish upstream byte drift, digest mismatch, definition/audit failure,
formula source-build failure, bottle failure, cask silent-install failure,
missing platform, PR awaiting automation, validation passed awaiting review,
rejection, merged awaiting bottle/API propagation, stale client view, wrong
install route, and withdrawal pending. Return upstream identities and digests,
token/version, repository and commit/PR, validation/review/merge/propagation
states, actual consumer route, and any untested platform effects.

## Current authorities

Reconcile current Homebrew and selected tap policy at the operation edge:

- [Adding software to Homebrew](https://docs.brew.sh/Adding-Software-to-Homebrew)
- [Formula Cookbook](https://docs.brew.sh/Formula-Cookbook)
- [Cask Cookbook](https://docs.brew.sh/Cask-Cookbook)
- [Bottles](https://docs.brew.sh/Bottles)
- [BrewTestBot](https://docs.brew.sh/BrewTestBot)
- [Homebrew contribution guidelines](https://github.com/Homebrew/homebrew-core/blob/HEAD/CONTRIBUTING.md)

Official-repository policy does not automatically govern a third-party tap. Fetch
only the current rules consumed by the selected submission and do not freeze them
into this durable workflow.
