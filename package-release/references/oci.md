# OCI image and artifact releases

Use this recipe after selecting an OCI-compatible registry, repository, and exact
image or artifact graph. The shared release contract owns authority, retries, and
reporting. This reference owns descriptors, push/pull observation, registry
selectors, and consumer evidence. Runtime deployment and service health remain
outside package publication.

## Preserve content identity and selectors

An OCI object is a manifest or index descriptor plus every transitively referenced
blob. Descriptors bind media type, digest, and size; image manifests commonly
reference configuration and layers, while an index can select platform-specific
manifests. The stable release identity is `registry/repository@digest` together
with its reachable graph. A tag is a human-readable pointer to a manifest and can
have target-defined mutability or protection; never substitute it for the digest.

```text
local graph prepared -> descriptors and reachability verified -> blobs uploaded
  -> manifest/index committed -> digest fetch succeeds -> tag selector observed
  -> referrers observed when required -> exact digest pulled by a consumer
```

Signatures, attestations, SBOMs, and provenance are separate OCI objects or
provider records when the selected system supports them. Bind each promised item
to the subject digest and verify discovery; their presence does not by itself
prove runtime safety or source provenance.

## Prepare and inspect the graph

1. Read project release policy, build inputs, exported OCI layout/archive or local
   image metadata, target repository policy, and promised platform matrix. Record
   selected tool/version because supported media types and referrer behavior vary.
2. Inspect the exact candidate without pushing. Traverse the root manifest/index,
   validate every descriptor's digest/size/media type, confirm config and layer
   reachability, and compare index platform descriptors with the promised OS,
   architecture and variant set. Reject missing blobs, foreign repository names,
   mutable build inputs, secrets, unexpected layers, and ambiguous platforms.
3. Record the root digest and all required child digests. Rebuilding creates a new
   graph even if a tag or version label is unchanged. Do not claim reproducibility
   without a separate repeated-build comparison.
4. Inspect image configuration, annotations, entrypoint/command, environment,
   user, working directory, history and filesystem contents relevant to the
   release claim. For generic artifacts, use their registered or project-defined
   media-type semantics rather than assuming image configuration.

Local archive inspection proves bytes and metadata, not registry admission,
visibility, platform execution, signature policy, or vulnerability status.

## Publish and reconcile by digest

Immediately before an authorized push, recheck registry host, repository,
visibility, credentials, supported media types and referrers behavior, tag policy,
retention/deletion, quotas/cost, and existing digest/tag state. Use a current
digest-aware client and send only the reviewed graph. Record upload/manifest
responses and the registry-reported digest.

Blob upload and manifest commit are different states. On timeout, inspect the root
manifest and referenced blobs before retrying. Existing matching blobs can be
reused; a missing child or mismatched root is partial publication and must not be
presented as a complete multi-platform release.

If a tag is requested, mutate it as a separate authorized selector operation
after the digest exists. Read it back and compare the resolved digest. Promotion
tags and races are target-defined: if another writer moves a tag, report the
observed conflict rather than overwriting it by assumption.

Observe the root by digest with appropriate content negotiation, traverse all
required child descriptors, and verify bytes/digests. For private registries,
distinguish anonymous denial from successful authorized resolution and never
weaken visibility merely to test access. Discover required referrers using the
registry's supported OCI behavior; absence, an unsupported referrers API, and
fallback results are distinct.

## Pull is not runtime proof

Pull the exact `repository@digest` into an owned isolated consumer and verify its
root and selected platform. A successful pull proves distribution and local
content availability, not that an image starts, remains healthy, or safely serves
traffic. Run only the smallest admitted container behavior check when runtime
behavior is explicitly part of the release claim; deployment, secrets, networks,
volumes, host privileges, and production health need their own owner and authority.

Tag change, untag, manifest deletion, garbage collection, retention override, and
visibility change are separate authorized provider operations. Recheck current
semantics and report remaining tags, referrers, cached pulls, replicas, and any
provider-delayed deletion instead of calling withdrawal rollback.

## Fail and report precisely

Distinguish invalid descriptor, digest mismatch, missing platform manifest,
missing blob, unsupported media type, authentication/authorization failure,
private visibility mismatch, partial upload, manifest commit uncertainty, tag
race, unavailable referrers API, missing promised referrer, pull failure, platform
selection failure, and pull success without runtime evidence. Return registry/
repository, root digest, graph and platform matrix, tag-to-digest observations,
referrer subjects/digests, visibility, provider states, exact pull result, and the
runtime behavior not claimed.

## Current authorities

Reconcile the selected registry and client with current primary specifications:

- [OCI Image Specification](https://github.com/opencontainers/image-spec/blob/main/spec.md)
- [OCI descriptors and digests](https://github.com/opencontainers/image-spec/blob/main/descriptor.md)
- [OCI image manifests](https://github.com/opencontainers/image-spec/blob/main/manifest.md)
- [OCI image indexes and platforms](https://github.com/opencontainers/image-spec/blob/main/image-index.md)
- [OCI Distribution Specification](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)

The specifications own portable format/protocol semantics. The selected registry
owns tag protection, accepted media types, authentication, visibility, retention,
deletion, quotas, costs, replication, and any extensions. Fetch only those current
provider facts that the requested operation consumes.
