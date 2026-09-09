# npm packages

Inspect package.json, the package manager/lock, workspace selection, files/ignore
rules, exports/bin/type declarations, lifecycle scripts and publishConfig. Preserve
the project's build command and registry/access/channel policy. Use its manager
for dependencies; npm registry publication does not require migrating a Bun, Deno
or other project to npm dependency management.

## Prepare and test the packed payload

After the required project build, run the official
[npm pack](https://docs.npmjs.com/cli/v11/commands/npm-pack/) from the selected package
directory with an existing unused destination:

```sh
npm pack --json --pack-destination /absolute/task/artifacts
```

Inspect the actual .tgz, its file list and package/package.json. Check exported files,
licenses, runtime dependencies and public entry points; exclude unintended source
secrets and development residue. Record the tarball path, SHA-512 integrity and
source revision. For workspaces, name the intended package rather than packing all.

Packing/installing/publishing can run lifecycle scripts. Read them first; --dry-run
does not establish absence of effects. Use --ignore-scripts only when required
generated output is already present and suppressing hooks preserves the intended
package. Do not silently skip a required build.

In a separate empty consumer directory, set npm's cache under the task root and:

```sh
npm init -y
npm install --no-audit --no-fund /absolute/task/artifacts/example-1.0.0.tgz
node -e "console.log(require.resolve('example'))"
```

Use the actual package name and import/export mode. Check resolution is inside
the consumer and exercise a meaningful export or public CLI. This installs the
tarball, not a link to the source directory. Inspect required installation scripts
and native dependencies instead of assuming every package installs without effects.

## Publish or verify

Only with authority for this payload, registry, channel and visibility, publish the
reviewed tarball through the project's established process. A direct example is:

```sh
npm publish /absolute/task/artifacts/example-1.0.0.tgz --registry https://registry.npmjs.org/ --tag next --access public
```

Replace registry, tag and access with the authorized values; next/public are examples,
not defaults to impose. Use the project's supported authentication, never credentials
in command text. Do not repack the source after review or casually run npm version,
which may create a commit/tag. Check applicable hooks before publication.

Observe the exact version and channel through the official registry interface:

```sh
npm view example@1.0.0 version dist.integrity dist.tarball --json --registry https://registry.npmjs.org/
npm view example dist-tags --json --registry https://registry.npmjs.org/
```

Compare the fetched tarball or its integrity with the reviewed payload. Install the
exact registry version in a fresh consumer and verify the actual download source
and requested behavior. Registry-only verification needs no clean local checkout.

[npm publish](https://docs.npmjs.com/cli/v11/commands/npm-publish/) documents that
a published name/version cannot be reused after removal. On an uncertain upload,
observe before retrying. Matching content needs no reupload; conflicting content
requires a new release decision. A wrong channel is a separate dist-tag mutation
requiring authority, not a reason to republish. Unavailable registry evidence is
not proof of absence.
