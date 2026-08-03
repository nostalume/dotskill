---
name: test-driven-development
description: Change observable behavior with RED-GREEN-refactor. Prove the intended failure, add the minimum coherent implementation, then run fresh neighboring and canonical checks.
---

# Test-Driven Development

TDD is a feedback protocol: an executable behavior specification first proves it
can detect the missing or wrong behavior, then guides the smallest implementation,
then protects simplification.

## Contract

- Tests observe public behavior or laws, not private call inventory.
- A behavior-changing slice demonstrates the intended RED before production edits.
- An unrelated compile, import, fixture, or environment failure is not RED.
- GREEN uses the minimum coherent production change.
- Refactoring changes structure without changing the proven contract.
- Final evidence is fresh after the last edit.

For a behavior-preserving legacy refactor, establish characterization evidence and
demonstrate mutation sensitivity instead of manufacturing an artificial RED.

## Workflow

1. State one behavior, boundary, fixture, expected result or effect, and failure.
2. Write the smallest test through the public boundary.
3. Run it; record the command and why the observed failure is the intended RED.
4. Implement the minimum coherent change.
5. Run the focused test and record GREEN.
6. Remove duplication and improve naming or ownership while continuously green.
7. Add edge and failure cases required by the contract.
8. Run fresh neighboring and project-canonical checks.

Prefer deterministic fixtures and explicit clocks or randomness. Use property or
law tests when examples cannot cover a domain invariant. Mock external boundaries,
not the implementation under test. Real effects belong in separately approved,
disposable integration tests.

## Hard gate

Do not claim TDD evidence without the intended RED (or justified characterization
plus mutation evidence), focused GREEN, refactor confirmation, required edge cases,
and fresh integration checks. Stop when a safe observable boundary cannot be stated.
