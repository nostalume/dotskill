# Python release

Use the declared PEP 517/518 build backend and PEP 621 metadata. Prefer `uv build`
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

Prefer PyPI trusted publishing from a protected GitHub environment over long-lived
API tokens. Bind the workflow to the intended repository, tag, environment, and
package identity. Inspect the workflow run and PyPI project page after publishing,
then install the exact released version from PyPI.

The Git tag and Python version must agree. If publication partially succeeds, do
not overwrite the version; diagnose the observed registry state and release a new
version when correction is required.
