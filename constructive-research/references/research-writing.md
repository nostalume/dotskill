# Constructive research writing

Use this reference when a known research spine must become a readable paper,
technical note, or revision audit. It governs exposition, not research discovery.
Read `research-philosophy.md` for the governing stance and `computation.md` for
worktable evidence.

## Keep writing management outside the research record

Place manuscript outlines, revision audits, migration ledgers, formatting defects,
package choices, and repair sequences in the repository's ignored agent workspace
when one exists. They manage how an output is written; they are not research
results merely because the output is a paper.

Promote an audit finding back to the tracked research graph only when it changes a
scientific claim, presumption, validity boundary, construction, computation, or
open question. In that case update the canonical node or result rather than
retaining the editorial audit as a parallel owner. Let version control preserve
superseded wording and completed repair history.

## Writing objective

Writing must let the reader reconstruct why an object was needed, how it was
generated, what each operation computed, and how to reuse the retained result.
Formal correctness alone is insufficient when the formalism appears before its
obstruction, hides a calculation in prose, or disappears after verification.

Organize each local argument as:

```text
capability or question
  -> concrete obstruction
  -> typed request
  -> generated candidate
  -> decisive calculation
  -> interpreted output
  -> retained interface and boundary
```

This is a reader path, not a mandatory section template. Merge trivial adjacent
steps, but never merge away the operation that supports a nontrivial claim.

## Motivate by obstruction

Introduce a mathematical object only when the text has exposed the task it must
perform. Before a construction, state:

1. the concrete capability or observable sought;
2. the supplied objects and their types;
3. the exact failure of the current representation or operation; and
4. the smallest new request forced by that failure.

Prefer a familiar physical or mathematical object when it makes the request
recognizable. Do not open with a catalogue of machinery and explain its purpose
afterward. A definition may establish notation, but it does not itself motivate
the object or prove that the object solves the request.

## Admit every displayed equation by role

Classify each display before retaining it:

- **supplied input:** an assumption, measured datum, cited theorem, or declared
  model contract;
- **definition:** a new symbol or constructed operation;
- **semantic computation:** explicit operations connecting a typed input to a
  common target;
- **theorem contract:** a bounded imported result with hypotheses and exact
  consequence;
- **derived result:** the output of the adjacent computation or theorem contract;
- **regression translation:** a familiar textbook form used to compare outputs;
- **open obligation:** a statement not yet supported and therefore not a result.

Definitions need no artificial proof. Every nontrivial equality, existence,
uniqueness, invariance, vanishing, or consequence needs either an adjacent
semantic computation or an exact theorem contract. Never let “directly,”
“similarly,” “after substitution,” “solving gives,” or “one finds” carry the
missing operation.

Detailed deduction does not mean maximal expansion. Show an uninterrupted chain
of meaning-preserving operations. Avoid components when an invariant pairing,
factorization, quotient, projection, universal property, or representation map
performs the same calculation more directly. If a component check is the shortest
available witness, isolate it and explain what invariant claim it certifies.

## Use the mathematics–explanation sandwich

Immediately before a decisive display, identify the inputs, their types, the
operation being applied, and the question the calculation answers. In the display,
write every semantic step required to reach a common target. Immediately after,
state:

- what was forced or ruled out;
- what meaning was preserved through the operations;
- which later construction consumes the result; and
- the validity boundary or remaining obligation.

Prose may motivate and interpret mathematics. It must not substitute for the
calculation underneath it. Conversely, a page of equations without this local
orientation is not constructive exposition.

## Promote worktable computation without hiding it

Heavy symbolic, numerical, graph, or component computation belongs in its own
worktable artifact. Promote to the manuscript:

1. the typed input and requested output;
2. the operation or reduction that makes the computation finite;
3. the smallest decisive intermediate equalities;
4. the certificate or check owned by the worktable; and
5. the resulting reusable rule and its domain.

Do not paste an execution trace into the paper, and do not replace it with “the
computer verifies.” The manuscript must expose enough structure for the reader to
understand what was calculated and why the certificate supports the stated edge.

## Expose origin, status, and boundary

Mark distinctions that change how a reader may use a statement:

- supplied versus internally generated;
- exact versus approximate;
- representation-independent versus convention-dependent;
- proved operation versus cited theorem contract;
- reusable interface versus one-instance regression;
- supported result versus open horizon.

Do not silently strengthen a finite-spin check into an all-spin theorem, a formal
identity into a domain statement, a perturbative coefficient into an exact
observable, or a verification example into a construction method.

## Leave practical instructions for retained tools

A generative tool must survive its proof. For every claimed compiler, reduction,
or constructor, tell the reader:

1. what input to supply and how its admissibility is checked;
2. what operation to perform, in what semantic order;
3. what output or refusal is returned;
4. which downstream observable or construction consumes it; and
5. what cost, approximation, or failure boundary remains.

Include one transfer to a genuinely new admissible input when reusability is part
of the claim. Replaying the example that generated the tool proves only regression.

## Use familiar examples only when they do work

Textbook examples are optional. Include a small robust example only when it:

- gives the reader familiar semantic anchors;
- checks signs, normalization, dimensions, limits, or convention translation;
- demonstrates transfer of the retained operation; or
- distinguishes the new construction from the orthodox route.

Place it after the generative construction and label its role. Do not let a
textbook expression generate the supposedly new machinery, own the spine, or
inflate the paper with a second derivation that adds no test.

## Choose presentation by semantic shape

- Use native mathematics for typed maps, equalities, and linear compositions.
- Use prose and theorem-like environments for motivation, contracts,
  interpretation, and instructions.
- Use Fletcher only when branching, rejoining, commutation, quotienting, or graph
  topology is itself meaningful.

A diagram exposes relations; it never replaces a deduction. Do not use raw text
as a substitute for mathematical typing, and do not add algorithm or code-listing
packages merely to style a mathematical interface.

## Audit checklist

Before calling a manuscript passage complete, ask:

- Did a capability and obstruction generate every nonstandard object?
- Can every consequential equation be reconstructed from adjacent operations or
  an explicitly bounded theorem contract?
- Does explanation appear both before and after the mathematics?
- Are supplied assumptions, conventions, approximations, and open claims exposed?
- Does each retained tool have an executable reader-facing use and refusal rule?
- Are heavy calculations independently inspectable without forcing their raw trace
  into the paper?
- Do examples test or transfer the construction rather than replace it?
- Does every diagram encode a relation that prose or native math would obscure?

If any answer is no, record the earliest unsupported edge and repair it before
polishing downstream prose.
