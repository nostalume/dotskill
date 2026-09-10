# Quality Evaluation

Quality is contextual coherence supported by evidence, not resemblance to a
template or compliance with a universal aesthetic score. Establish what must be
true, what should be optimized for this audience and medium, what would be
unacceptable, and which observations can distinguish those states.

## Establish contextual criteria

Derive criteria from the working visual contract and current project:

- **Invariants:** violations make the result false, misleading, inaccessible,
  unauthorized or incompatible whenever their precondition applies.
- **Contextual objectives:** hierarchy, density, tone, pacing, polish and emotional
  register that should be optimized for the actual audience, medium and purpose.
- **Acceptance policy:** user-reserved taste, brand or review decisions and the
  evidence the user considers sufficient.
- **Failure conditions:** specific misreadings, omissions, blocked tasks, fidelity
  defects or effect violations that make the result unacceptable.

The user defines purpose, reserved taste and acceptance policy. Domain/source
owners define factual truth. The visualization capability contributes expert
defaults, perceptual principles and known failure modes. Actual source/output
evidence establishes whether the result meets the criteria. Do not ask the user to
decide a technical or perceptual issue that can be resolved from evidence, and do
not treat user enthusiasm as proof of properties they have not observed.

Persist a project visual direction only when multiple artifacts, collaborators or
future revisions will consume it. Record accepted decisions, their scope and
override conditions; do not promote tentative hypotheses or one successful
artifact into permanent policy.

## Match evidence to the claim

| Evidence class | What it can establish | What it cannot establish alone |
| --- | --- | --- |
| Semantic | values, labels, units, relationships, source qualifications and transformation correctness | Perceptual clarity or rendered fidelity |
| Structural/editable | required objects, hierarchy, metadata, native editability and preservation of unrelated source | Final appearance in the delivery engine |
| Perceptual | comparison validity, legibility, grouping, occlusion and misleading salience in the observed view | Unseen states or source truth |
| Compositional | hierarchy, balance, density, alignment, emphasis and coherent visual language in context | Factual correctness or interaction behavior |
| Rendered visual | actual fonts, glyphs, clipping, geometry, color, raster/vector quality and target-size appearance | Temporal continuity, interaction or semantic truth |
| Temporal | start, transitions, holds, end, duration, continuity and synchronization over observed time | Unexercised interactive branches or factual correctness |
| Interactive | keyboard/pointer/input paths, state transitions, responsiveness, empty/error/loading states and fallbacks | States and platforms not exercised |
| Accessibility | applicable contrast, redundant encoding, text alternatives, reading order, captions, reduced motion and non-visual access | Every user's experience or unrelated quality classes |
| Operational | source/output identity, tool/provider effects, privacy, license, cost, completion and recovery | Visual or semantic quality without inspecting the artifact |

Structural validation can support a source-level result. Rendered-quality claims
require a renderer and inspection of the exact revision. Interaction claims
require the actual runtime and relevant state paths. Encoded-media claims require
the selected exporter/probe plus temporal inspection. When a capability is absent,
state which obligations remain unverified rather than weakening the criteria.

## Critique through the whole

Inspect the exact artifact at its intended size, carrier and use context. Select
only useful probes; these are critique operators, not a mandatory checklist:

- trace a key value, relationship or statement from source to visible encoding;
- attempt the audience's primary comparison, path or decision without relying on
  author knowledge;
- inspect extremes, missing/empty values, longest labels, dense regions and
  representative real content;
- reduce color, motion or annotation mentally or experimentally to see whether
  meaning depends on a fragile cue;
- blur, shrink or glance at the composition to test intended salience, then read
  closely for qualification and source context;
- compare a plausible alternative encoding and identify which audience operation
  becomes easier or harder;
- exercise before/during/after time and initial/changed/empty/error/reduced states;
  and
- challenge the most attractive element: does its prominence match evidential
  importance, or does polish conceal a misleading structure?

Classify a defect at its earliest governing layer:

```text
wrong purpose or audience assumption
  -> wrong information structure
  -> unsuitable representation
  -> incoherent contextual direction
  -> implementation defect
  -> evidence gap
```

Repair there and recheck dependent layers. Do not solve an invalid comparison by
adding decoration, an overcrowded information structure by shrinking text, or an
unsupported conclusion by making it more visually persuasive.

## Decide when the result is excellent enough

Completion is claim-specific. All applicable invariants and failure conditions
must pass. Contextual objectives should form a coherent system rather than a pile
of individually attractive choices. The audience's primary operation must be
supported at the delivery conditions, and remaining tradeoffs or unknowns must be
acceptable to their owners.

Do not pursue an undefined taste score indefinitely. When direction is genuinely
unresolved, create the cheapest representative comparison that can reveal the
choice and ask the owner of that decision. When the evidence is sufficient, stop
and report the exact source/output inspected, checks performed, unobserved states
and material limitations.

A polished but misleading artifact fails. A faithful unconventional artifact may
pass. An executable specification or editable source may be excellent for an
accepted handoff contract, but remains a partial result when verified rendered,
temporal or interactive output was requested and could not be observed.
