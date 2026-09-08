# Python release

Use the declared PEP 517/518 build backend and project metadata. Prefer `uv build`
when the project already uses uv; do not introduce a second environment manager
without a concrete need.

## Artifact proof

1. Build both wheel and source distribution from a clean revision.
2. Run `twine check` or the project's equivalent metadata validator.
3. Inspect wheel and sdist file lists for tests, secrets, caches, local paths, and
   missing licenses or type information.
4. Compare name and version across source metadata, filenames, and embedded
   metadata.
5. Install the wheel into a clean environment and test import plus each public CLI.
6. Install the sdist into another clean environment and repeat the smoke check.
7. Record SHA-256 hashes for both artifacts.

For publication, prefer PyPI trusted publishing from a protected GitHub environment
over long-lived API tokens when that workflow fits the project. Bind any publishing
workflow to the intended repository, trigger, environment and package identity.
Inspect the workflow run when used and the PyPI record after publishing, then
install the exact released version from PyPI.

When a Git tag is part of the release process, it and the Python version must agree.
Preparation ends with the checked wheel/sdist and hashes; it needs no tag or upload.
For verification, inspect the exact project/version and expected file set before
the requested clean-install checks. Neither mode grants publication authority.

## Reconcile PyPI files before resuming

Use the [PyPI release JSON API](https://docs.pypi.org/api/json/) or equivalent
official registry observation to inspect the exact version's filenames and SHA-256
digests. Compare them with the prepared set; distinguish an absent file from an
unavailable registry response. Then verify the actual downloaded artifact or
installation source so a local wheel/cache does not stand in for registry evidence.

[PyPI forbids filename reuse](https://pypi.org/help/#file-name-reuse), including
after deletion. If one reviewed file is published and another is confirmed absent,
resume only the missing file when its filename remains eligible and publication
authority still covers that unchanged set. A matching existing file needs no
replacement. Conflicting contents or corrections require a new appropriate version
and fresh preparation; never delete a file to try to free its name.

[Twine's skip-existing option](https://twine.readthedocs.io/en/stable/#twine-upload)
is not a content-identity check or proof that every requested artifact arrived.
After any resume, inspect the complete expected set and run required consumer
checks. Return the shared release result with separate wheel/sdist publication
and installation observations, including skipped or unverified checks.
