# Maven Central releases

Use this recipe only for JVM components targeting Maven Central. The shared
release contract governs authority, exact payload/input identity, uncertain
mutation, and consumer evidence. This reference owns Maven coordinates, the
complete repository-layout component set, Central Portal deployment states, and
Central consumer observation. Preserve the project's Maven or Gradle build and
publication model; do not migrate tools to fit this recipe.

## Preserve the native model

The release identity is `groupId:artifactId:version`, extended by packaging and
classifier for each attached component. One project release may contain multiple
coordinates and modules. Its release unit is the complete intended set of POMs,
primary artifacts, sources/Javadoc artifacts, classifiers, signatures, and
checksums required by current Central policy—not one convenient JAR.

Central publication is a staged repository lifecycle:

```text
reviewed repository-layout component set
  -> upload accepted + deployment ID
  -> PENDING -> VALIDATING -> VALIDATED
  -> explicit publish or configured automatic publish
  -> PUBLISHING -> PUBLISHED
  -> exact Central consumer resolution

  any processing state -> FAILED
```

The upload response is a receipt, not a provider state named `UPLOADED`; use the
current API's actual state names. `VALIDATED` under user-managed publication still
awaits a separate publish decision. Webhooks are advisory evidence because current
Central guidance admits missing or duplicate notifications; reconcile by the
deployment ID. `PUBLISHED` is stronger than workflow success but still needs the
requested fresh consumer check.

Final releases on Central are immutable. Snapshot repositories have a different,
mutable lifecycle and retention policy; resolve a `-SNAPSHOT` target separately
and never present its evidence as a final Central release.

## Prepare the complete component set

1. Read the root POM or Gradle settings/build files, wrapper and lock/version
   catalogs, project release instructions, module graph, publication declarations,
   signing setup, and selected target. Fix the intended modules and every
   coordinate/classifier before building. A root build does not imply every
   module is intended for release.
2. Recheck current Central namespace ownership, terms, credential form, component
   requirements, usage/cost/quota policy, supported publication adapters, size
   bounds, and snapshot versus final destination. These are provider-current
   claims; project configuration alone cannot establish them.
3. Run the project's normal verification and local publication/bundle task without
   remote deployment. Examples of project-native starting points are:

   ```sh
   ./mvnw verify
   ./gradlew check
   ```

   These may compile code, run plugins or tests, download dependencies, and write
   build outputs. Use the project's established bundle or project-local Maven
   repository task when one exists. Do not invoke `deploy` or a Gradle remote
   publish task as a dry run: those names commonly perform repository mutations.
4. Inspect the exact prepared repository layout or Central bundle. For every
   coordinate, compare the path with the POM's group/artifact/version, packaging,
   dependency metadata, and classifier set. Inspect archives and generated POMs,
   not only source declarations. Check sources/Javadoc, PGP signatures, checksums,
   license/SCM/developer metadata, and any other item current Central policy
   requires. Validate signatures and checksum contents against the exact files.
5. Record the full component inventory and digests. Treat a missing module,
   classifier, POM, signature, or required companion as a failed release unit.
   Never rebuild only one member after the set was reviewed and call it unchanged.

Maven's `verify` and Gradle's `check` prove only configured build checks. A locally
valid bundle does not create a Portal deployment or simulate its validation.
Writing to the user's default local Maven repository is a host mutation; prefer an
owned project-local repository for disposable consumer checks unless the user has
authorized the shared cache/repository effect.

## Bind the Central adapter

Immediately before upload, reconcile the project-selected wrapper/plugin versions
with Central's current Maven, Gradle, bundle, or API route. Central currently
documents a first-party Maven publishing plugin, a Publisher API/bundle route,
and separate Gradle guidance; generic `maven-publish` compatibility does not by
itself prove a correctly visible Portal deployment. Keep the chosen adapter and
its version project-owned.

Confirm organization/account, verified namespace, exact coordinates, final versus
snapshot repository, visibility, component digests, publishing type (user-managed
or automatic), current limits/cost, and rollback limits. Use a Central Portal user
token or another currently documented provider route through the project's secret
facility. Do not place token values in POMs, Gradle files, command arguments, or
logs. Workflow/OIDC configuration, if a future or selected route supports it,
remains owned by `github-actions`; do not infer trusted publishing from another
registry.

For a Maven project already configured with the selected Central adapter, the
publication edge may be:

```sh
./mvnw deploy
```

Run it only under explicit publication authority: it builds/stages a bundle and
can upload it. For Gradle or direct bundle/API publication, invoke only the
project's reviewed current route. Retain the returned deployment ID and uploaded
bundle identity. Never paste example bearer headers from provider documentation.

## Observe, publish, and consume

Poll the supported Portal status interface by deployment ID with bounded timing.
On `FAILED`, preserve validation errors and the original bundle; repair locally
and create a new deployment. Under user-managed publication, the transition from
`VALIDATED` to publish is a separate irreversible mutation. Under automatic
publication, confirm that the configured policy was intentionally authorized
before upload.

If status is uncertain, a webhook is missing/duplicated, or a command times out,
query the deployment before retrying. A matching deployment continues from its
actual state. Confirmed absence may allow a new upload of the unchanged reviewed
bundle. Never submit a second deployment merely because a notification was lost.

After `PUBLISHED`, resolve every promised coordinate/classifier from Maven Central
in an owned consumer outside the source tree, with repository selection explicit
and caches handled so stale local content cannot satisfy the check. Verify the POM
dependency graph and exact fetched file digests when those claims matter. Allow
for bounded repository/CDN propagation, but report `PUBLISHED` and
consumer-unavailable separately rather than declaring success early.

Central final components cannot be changed, removed, or republished at the same
coordinate. Dropping a `VALIDATED` or `FAILED` deployment is pre-publication
cleanup, not withdrawal of a published component. A defect needs a new version.

## Fail and report precisely

Distinguish wrong module selection, invalid coordinate/namespace, final-versus-
snapshot mismatch, incomplete component set, invalid metadata/signature/checksum,
missing credentials, upload rejection, `PENDING`/`VALIDATING`, `VALIDATED` awaiting
authority, `FAILED`, uncertain publish, `PUBLISHED` awaiting propagation, and
consumer resolution failure. Return coordinates and classifiers, source revision,
component paths/digests, destination and publishing type, deployment ID/state and
errors, observation route, exact consumer result, and unresolved current policy.

## Current authorities

- [Central component requirements](https://central.sonatype.org/publish/requirements/)
- [Central Publisher Portal guide and webhook behavior](https://central.sonatype.org/publish/publish-portal-guide/)
- [Central Publisher API and deployment states](https://central.sonatype.org/publish/publish-portal-api/)
- [Central Maven adapter](https://central.sonatype.org/publish/publish-portal-maven/)
- [Central Gradle guidance](https://central.sonatype.org/publish/publish-portal-gradle/)
- [Central snapshot publication](https://central.sonatype.org/publish/publish-portal-snapshots/)
- [Central immutability](https://central.sonatype.org/publish/requirements/immutability/)
- [Central publishing limits and usage source of truth](https://central.sonatype.org/publish/maven-central-publishing-limits/)
- [Gradle Maven Publish plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)

Recheck only the mutable claims needed for the selected operation—especially
adapter compatibility, credentials, states, limits/cost, and snapshot policy.
The coordinate and staged-release model stays embedded even when those facts move.
