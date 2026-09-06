# Constructive Research Writing

Use this reference when a supported research spine must become a readable paper,
technical note, figure, or revision. It governs exposition, not discovery or
evidence adjudication.

## Keep management outside the research record

Keep outlines, revision audits, migration ledgers, formatting defects, package
choices, and repair sequences in the repository's ignored agent workspace when one
exists. Promote a finding only when it changes a scientific claim, presumption,
domain, construction, computation, or open question; update that canonical owner
instead of keeping a parallel audit.

## Construct the reader path

Let a reader reconstruct why an object was needed, how it was generated, what each
operation computed, and how to reuse the retained result:

```text
capability/question -> concrete obstruction -> typed request
  -> generated candidate -> decisive computation -> interpreted output
  -> retained interface and boundary
```

This is an explanatory path, not a mandatory section template. Merge trivial
steps, but never remove the operation supporting a consequential claim.

Introduce a mathematical object only after naming the capability, supplied typed
objects, exact failure of the current operation/representation, and smallest new
request forced by that failure. A definition establishes notation; it does not
motivate the object or prove that it works.

## Admit equations by role

Classify each display as supplied input, definition, semantic computation, theorem
contract, derived result, regression translation, or open obligation. Every
nontrivial equality, existence, uniqueness, invariance, vanishing, or consequence
needs an adjacent computation or exact theorem contract.

Do not let “directly,” “similarly,” “after substitution,” “solving gives,” or “one
finds” carry an omitted operation. Detailed deduction means an uninterrupted chain
of meaning-preserving operations, not maximal component expansion. Prefer an
invariant pairing, factorization, quotient, projection, universal property, or
representation map; isolate a component check only when it is the shortest witness.

Use a mathematics–explanation sandwich:

1. Before a decisive display, state inputs/types, operation, and question.
2. In the display, include every semantic step needed to reach a common target.
3. After it, state what was forced or ruled out, what meaning survived, which later
   construction consumes it, and its boundary/open obligation.

Prose motivates and interprets mathematics; it cannot replace the calculation.
Equations without local orientation are equally incomplete.

## Promote computation without hiding it

Heavy work remains in a computation artifact. Promote only its typed request,
finite reduction, decisive intermediate equalities, certificate, resulting reusable
rule, and domain. Do not paste traces into the paper or replace them with “the
computer verifies.” The reader must see what was calculated and why its certificate
supports the edge.

Expose distinctions that change use: supplied/generated, exact/approximate,
invariant/convention-dependent, proved/cited, reusable/regression-only, and
supported/open. Consume the domain disposition defined in
[evidence-and-synthesis.md](evidence-and-synthesis.md); do not invent a separate
manuscript status system.

## Leave a wieldable result

For every claimed constructor, compiler, or reduction, tell the reader:

- what input to provide and how admissibility is checked;
- which operations to perform and in what semantic order;
- which output or refusal is returned;
- which downstream construction or observable consumes it; and
- which cost, approximation, or failure boundary remains.

When reusability is claimed, include a transfer to an admissible input not used to
generate the tool. A replay of the seed example proves only regression.

Use a familiar textbook example only when it anchors semantics, checks conventions
or limits, demonstrates transfer, or distinguishes the new route. Place it after the
generative construction and label its role; do not let it generate the supposedly
new machinery or become a redundant second derivation.

## Present the semantic shape

- Use native mathematics for typed maps, equalities, and linear composition.
- Use prose and theorem-like environments for motivation, contracts,
  interpretation, and instructions.
- Use Fletcher only when branching, rejoining, commutation, quotienting, or graph
  topology is itself meaningful.

A diagram exposes relations; it never replaces a deduction. Do not use raw text,
algorithm packages, or code listings merely to style a mathematical interface.

## Audit

Before completion, locate the earliest failing item:

- every nonstandard object has a capability and obstruction;
- every consequential equation has adjacent computation or a bounded theorem
  contract;
- explanation occurs before and after decisive mathematics;
- presumptions, conventions, approximations, dispositions, and boundaries are
  visible;
- each retained tool has a reader-usable operation and refusal;
- heavy calculations are inspectable without entering the main argument;
- examples test or transfer rather than replace the construction; and
- every diagram makes a relation materially clearer.

Repair that earliest unsupported edge before polishing downstream prose.
