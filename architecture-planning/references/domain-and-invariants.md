# Domain and invariants

Use this lens only to decide what the software means: its vocabulary, identities,
values, legal states, transitions, policies, and invariant boundaries. Value
encoding belongs to representation; decision authority to authority and effects;
external promises to contracts; implementation feedback does not own domain truth.

## Semantic model

- Name operations and concepts in domain language before parser, database, test,
  framework, or transport vocabulary.
- Separate values from identity-bearing entities. State what establishes identity,
  which observations are equivalent, and which transitions preserve identity.
- Define legal states, transitions, invariant boundaries, and refusal conditions.
  Make illegal or ambiguous states unrepresentable where the language can do so
  without obscuring the model.
- Use a consistency or aggregate boundary only where an invariant requires one.
  Do not copy framework transaction boundaries into the domain model.
- Separate domain policy from application orchestration. A domain event names a
  fact that occurred; transport, persistence, retries, and delivery are separate.
- Split bounded contexts when one term legitimately has different meanings or
  authorities. Translate once at the boundary rather than forming a universal
  model that erases the distinction.

## Domain-first evidence

- Derive tests, proofs, examples, and schemas from the named domain law. Do not let
  fixture convenience or mocking shape dictate the public model.
- Prefer the smallest coherent capability that preserves the full invariant over
  a mechanically tiny change that scatters an incomplete concept.
- Use bounded exploration when meaning or boundary is uncertain. Discard or
  reframe the exploration before treating it as production architecture.
- Implementation, performance, and operational evidence may contradict a proposed
  model. Reopen the governing decision; do not patch around the contradiction.

## Decisions to close

1. What vocabulary and bounded context own the concept?
2. What is a value, what has identity, and what establishes equivalence?
3. Which states and transitions are legal, and where must the invariant hold?
4. Which policy is intrinsic to the domain and which coordination belongs outside?
5. Which observation would falsify the proposed model or force a context split?

Hard gate: domain meaning is stated independently of storage, transport, testing,
and framework mechanics; identities and transitions are explicit; each invariant
has one owning boundary; implementation convenience cannot silently redefine it.
