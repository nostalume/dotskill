# Minimal project environments

Use the task's project root and existing tools first. For a new artifact, establish
its working directory beside the intended sources and outputs; the installed skill
directory is not the artifact project. Inspect manifests, lockfiles, environment
directories, available executables and user instructions before choosing setup.
Check whether a discovered command is a manager shim: even `--version` can trigger
acquisition. Inspect its manager configuration or installed payload first when so.

Follow the user's selected manager and installation route, including aqua for
uv, Node, Bun or Deno. Otherwise prefer a simple official, supported installation
method for the selected platform. Acquire only missing tools and dependencies.
Use the manager's commands directly. Do not generate a bootstrap script, managed
environment registry, process supervisor or installation wrapper for routine setup.
If an installation script is needed, explicitly tell the user its source, purpose
and effects before executing it; obtain any missing authority. A request for a
custom setup script is a separate deliverable. Existing setup authority remains valid.

For new task-owned dependencies, caches and downloaded runtimes, prefer storage
inside the task root using the selected tool's supported native settings. Scope environment variables to the command
or task session. Avoid global package installs, profile/PATH changes, and changes
to another application's environment. Reuse installed runtimes without modifying
their environment. Respect user-selected shared storage rather than silently
reconfiguring it. Check tool-specific browser/model/font downloads separately.
OS-managed fonts, profiles and temporary writes may follow provider-specific
rules; inspect relevant effects rather than inventing a containment wrapper.
Keep observed executable paths, installed versions and machine-specific failures
in task evidence. Reusable instructions use portable inputs and conditional
provider requirements; rediscover bindings in each destination project.

## Select the smallest setup

| Existing state | Action |
| --- | --- |
| Suitable project with dependencies ready | Run the selected operation; no setup |
| Project exists but a dependency is missing | Add or sync through its manager and preserve its constraints |
| No project environment | Create a local environment with a suitable manager; uv for Python or Deno for compatible JS are useful defaults |
| Required runtime or manager is missing | Use the user's route, otherwise an official supported package-manager installation; then create the local project environment |
| Node, Bun or another runtime is required by the project/tool | Use that runtime and its local dependency workflow; do not migrate it solely to use a default |

## Direct command examples

These are alternatives for a new task root, not a sequence to run everywhere.
Check installed help and current official documentation before use. Preserve an
existing manifest; initialize only when absent. Keep manifests and locks with the
source, and ignore generated environments and caches in version control.

For a Python project, set `UV_CACHE_DIR` to an absolute `.cache/uv` under the task
root. Reuse an installed compatible Python. If uv must download Python, also set
`UV_PYTHON_INSTALL_DIR` under `.tools/python`; suppress executable registration and
PATH changes using the installed version's documented options. Then:

```sh
uv init --bare
uv add python-pptx
uv run python native-python.py brief.json styles.json paper deck.pptx
```

uv owns `.venv`, `pyproject.toml` and `uv.lock`. A one-off operation can instead use
`uv venv .venv` and `uv pip install --python <venv-python> python-pptx`, then invoke
that interpreter directly. Use `.venv/bin/python` on POSIX or
`.venv/Scripts/python.exe` on Windows. See the official
[project workflow](https://docs.astral.sh/uv/guides/projects/) and
[environment settings](https://docs.astral.sh/uv/reference/environment/).

For a compatible Deno project, set `DENO_DIR` to an absolute `.cache/deno` under the
task root, keep `deno.json` and `deno.lock` there, and add the selected dependency:

```sh
deno add npm:pptxgenjs
```

Run the project source with the file/environment permissions its dependencies
need. Verify the actual operation; a Node example is not automatically a tested
Deno example. If local `node_modules` is needed, use Deno's documented
`nodeModulesDir` setting. See official
[Node/npm compatibility](https://docs.deno.com/runtime/fundamentals/node/)
and [environment variables](https://docs.deno.com/runtime/reference/env_variables/).

For an existing Node/npm project, a direct `npm install pptxgenjs` uses the project
manifest and local `node_modules`; set its cache under the task root too. Follow
the corresponding native workflow for a user-selected Bun or other manager.
Official acquisition guidance: [uv](https://docs.astral.sh/uv/getting-started/installation/),
[Deno](https://docs.deno.com/runtime/getting_started/installation/),
[Node](https://nodejs.org/en/download).

## Resume and verify

After setup, run the requested author/edit/render operation and inspect its output.
That real operation can establish readiness; a separate generic probe is optional.
Keep setup separate from artifact helpers so ordinary edits never reinstall tools.
Report material installed components and locations briefly; no receipt protocol
or separate JSON manifest is needed for a routine direct command.

Project dependency isolation does not sandbox arbitrary code or all OS writes.
Inspect the selected tool's actual storage and execution behavior before claiming
containment. Preserve the project environment for subsequent revisions; remove
only owned disposable verification environments and scratch after use.
