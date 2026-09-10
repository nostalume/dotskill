# Python / PyPI

Inspect pyproject.toml, the declared build backend, package/import names, release
artifact policy and supported Python versions. Use the project's build command;
uv build is suitable in a uv project. The following alternative uses the official
[build frontend](https://build.pypa.io/en/stable/) and
[Twine](https://twine.readthedocs.io/en/stable/), installed in a local tool environment.
Keep build caches/temp files inside the task root using the tools' native settings.

Bind the project-selected backend, build frontend and Twine versions to their local
interfaces before relying on a command or option. Bind upload authentication,
accepted files, filename reuse, indexing and provenance separately to the chosen
repository's current authoritative policy. The links here locate current evidence;
they do not override a pinned project tool or make PyPI policy universal to another
Python index. If latest-only documentation and the selected client cannot be
reconciled for the required claim, use a compatible observed interface or report
that claim unavailable rather than silently upgrading or guessing.

## Prepare

From the intended clean source, choose an unused output directory:

```sh
python -m build --outdir /absolute/task/artifacts
python -m twine check /absolute/task/artifacts/example-1.0.0.tar.gz /absolute/task/artifacts/example-1.0.0-py3-none-any.whl
```

Replace filenames with the selected artifacts. The default build creates an sdist
and builds a wheel from it; use the project's selected artifact options when that
is not its release policy. Build isolation may acquire backend dependencies.
Do not disable it merely to hide undeclared build requirements. If uv is already
the selected installer, build also accepts --installer uv.

Inspect the selected archives' file lists and embedded metadata, not just filenames:
package name/version, required files, license/type data, dependencies and entry
points. Reject unintended secrets, caches and local paths. `twine check` checks
whether each distribution's long description renders correctly on PyPI. It does
not validate the rest of the embedded metadata, archive contents, installation or
runtime behavior; inspect and test those independently.

Create a separate consumer environment with the selected manager. For example:

```sh
python -m venv /absolute/task/consumer
/absolute/task/consumer/bin/python -m pip install /absolute/task/artifacts/example-1.0.0-py3-none-any.whl
/absolute/task/consumer/bin/python -I -c "import example; print(example.__file__)"
```

On Windows use consumer/Scripts/python.exe. Run outside the source tree and verify
the module path points into the consumer environment. Exercise a meaningful public
operation or CLI required by this package. Install an sdist in another environment
when its build/install behavior is part of the release claim; a direct source import
does not test the sdist. Resolve runtime/build dependencies within the selected
local setup policy. With uv-managed consumers, use uv pip install --python with the
explicit consumer interpreter instead of requiring pip in every environment.

Record SHA-256 hashes with the platform's existing hash command or Python hashlib.
Keep these exact files and their source revision for publication or resumption.

## Publish or verify

Only with authority for this payload and registry, use the existing release
workflow or upload the exact selected files. A direct PyPI example is:

```sh
python -m twine upload --repository-url https://upload.pypi.org/legacy/ /absolute/task/artifacts/example-1.0.0.tar.gz /absolute/task/artifacts/example-1.0.0-py3-none-any.whl
```

Use the authorized registry URL and selected files; avoid a broad dist/* that can
include stale builds. Select either the repository's account/token route or its
currently supported trusted-publisher/OIDC route; availability of one does not
imply the other. For PyPI trusted publishing, consult the current
[PyPI trusted-publisher documentation](https://docs.pypi.org/trusted-publishers/)
and verify that the configured issuer and workload claims, project, target and
upload client match the authorized publication. `github-actions` owns workflow and
OIDC-permission configuration; this route owns matching the resulting publisher
identity to the release unit. Keep credentials out of arguments. If the required
current authentication or target policy cannot be established, do not upload.

TestPyPI is a separate publication, not a mandatory preparation check. Include
signatures, attestations or other provenance only when required by the project,
repository or admitted release claim, and verify them through the interface that
consumes them. Trusted authentication alone does not establish provenance or
artifact integrity.

Inspect the exact version using the [PyPI JSON API](https://docs.pypi.org/api/json/).
Compare its filenames and SHA-256 digests with the prepared set. Fetch/install the
exact published version from the selected index in a fresh consumer and check the
actual source of the download; a cached local build is not registry evidence.
An accepted upload does not by itself establish index visibility or successful
consumer resolution. Do not rerun preparation for a verification-only request.

After interruption, observe each expected file first.
[PyPI filename reuse is forbidden](https://pypi.org/help/#file-name-reuse), even
after deletion. Resume only confirmed missing eligible files of the unchanged set.
Twine --skip-existing does not compare content or prove the whole release arrived.
Conflicts or corrected contents require an appropriate new version and preparation.
