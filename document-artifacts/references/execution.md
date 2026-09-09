# Tool selection and execution

Choose tools by the requested artifact, preservation needs and project context.
Keep authoring, editing, rendering and inspection independently usable; invoke
only the operations the request needs. A renderer consumes the artifact and its
fonts/assets, not the author's installer or language environment.

## Inspect, select and set up

Inspect the task root, sources, manifests, locks and available tools. Preserve the
user's selected tooling and a suitable existing project. Compare alternatives
when features, fidelity or iteration cost justify a different choice. Installed
tools do not change the requested format or lower its fidelity requirements.

Use current official documentation and local help for version-sensitive commands.
Confirm relevant capabilities through the actual operation or a small probe when
uncertainty warrants one. An executable's presence does not prove that it can
preserve a particular document feature. Keep observed paths and versions with the
task; do not encode this machine's inventory into reusable skill instructions.

For missing dependencies, follow
[minimal project environments](../../system-mutation/references/project-environments.md).
Use direct official package-manager commands, honor user-selected installation
routes, and prefer local storage for new task dependencies/caches while respecting
existing project storage. Create an environment only
when needed. Resume the same artifact request after setup. A simple setup needs
no custom installer, shared managed root, installation protocol or mandatory
capability script. Artifact helpers themselves should not install on first use.

Use [external integration](../../system-mutation/references/external-integration.md)
when actual registration, services or other host changes are needed. Use existing
authority and ask only for missing permission. Remote APIs additionally require
authority to transmit the document. Do not substitute another provider if that
would violate an explicit mechanism, locality or preservation requirement.

## Compose compatible operations

- Prefer direct library or CLI calls where they satisfy the operation. MCP or a
  service is useful when its interface or lifetime serves the task. Add custom
  glue only for a demonstrated gap.
- Check the actual boundary between operations: native objects and features,
  format/version, dimensions, fonts, assets and conversion losses. Matching file
  extensions alone do not establish compatibility.
- Use the project's native representation. A recipe or template is reusable
  guidance, not a universal document model or a requirement to install all tools.
- Reuse unchanged parses and renders. A source, font, asset or renderer change
  invalidates affected derived output; rerun the relevant operation and check.

## Run and recover

Use a selected executable, correctly quoted arguments, an explicit task working
directory and appropriate time/resource limits. Keep secrets out of command text
and logs. Scope environment settings and temporary output to the task. Use the
available execution tool's process controls; routine calls do not justify building
a new process supervisor.

Write a distinct output unless overwriting was authorized. Check it before
replacing a prior valid deliverable. On failure or cancellation, preserve source
and useful recovery state, stop owned work, and report partial outputs. Remove only
known owned scratch; do not infer ownership from an old PID or directory name.

Handle the observed cause: acquire a missing dependency within authority, select
a compatible alternative for a provider limitation, or stop on malformed input
that needs an unapproved source change. Retry transient failures only when safely
repeatable and within a bounded effort. Reconcile uncertain effects before retrying;
refusal or cancellation does not authorize another route around the restriction.

## Verify the artifact

Reopen, compile, render or inspect the exact output for the claims being made.
Successful installation proves no visual fidelity; successful rendering proves
neither editability nor semantic preservation. Do not require a costly render for
a claim that a structural or content check settles.

Return the requested outputs with relevant checks, limitations and recovery state.
A brief result is sufficient for ordinary work. Create separate logs, manifests
or evidence files only when a real consumer or reproducibility need justifies them.
Preserve the local project environment for revisions and clean disposable scratch.
