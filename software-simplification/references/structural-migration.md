# Structural migration

Use for modules, packages, crates, re-exports, CLI/library boundaries, features,
or other public topology.

## Inventory

Trace workspace/package manifests, dependency direction, public definitions,
imports, re-exports, constructors, serializers, entry points, scripts, tests,
docs, feature gates, supported targets, MSRV/runtime versions, packaging, and
release boundaries.

## Ownership

- Choose one owner crate/module/library for the coherent domain.
- A CLI remains a process adapter: parse typed input, call one domain operation,
  render streams/status. Domain validation, decisions, state transitions, and
  reusable effects belong to the library.
- In Rust, separate behavior, resource/state, and external-adapter axes. Use
  static generics/associated types for compile-time composition; runtime policy
  belongs in adapters.
- A crate boundary needs independent lifecycle, authority, security/protocol, or
  release reasons. A feature needs a real optional capability and supported
  combinations, not old layout preservation.

## Migration gate

Protect public behavior and serialized forms; wire the new owner into the active
path before deleting legacy sources. Validate default, no-default, supported
feature combinations, docs, package contents, targets, and MSRV as declared.

Completion requires all consumers on the surviving owner and zero old imports,
crate names, path dependencies, scripts, aliases, error variants, config keys,
files, and docs.
