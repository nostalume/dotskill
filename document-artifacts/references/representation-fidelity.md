# Forward representation fidelity

Use this reference when creating, editing, converting, or rendering accepted
content whose correctness depends on mathematical structure, relations, table
schema, references, media associations, or placement inside a constrained region.
It owns the forward projection from accepted meaning into a document carrier.
[Located extraction](ingestion.md) owns the reverse projection from an artifact;
the domain owner still owns meaning, and
[visualization design](../../visualization-design/SKILL.md) owns a materially open
choice of information encoding.

This is a conceptual protocol, not a required schema or intermediate file.

## Admit structures before mechanisms

Construct only the meaning-bearing structures required by the accepted content and
postcondition. Do this before choosing syntax, a package, native-object API, or
renderer.

| Structure | Preserve through projection |
| --- | --- |
| Prose and runs | Text, language, emphasis or style roles that carry meaning, and boundaries with code or mathematics |
| Mathematics | Operator/operand tree, precedence and grouping, base/attachment scope, identifier boundaries, inline/display role, numbering, labels, and references |
| Relations | Entities, typed edges, direction, grouping, hierarchy, sequence, uncertainty, and the paths the audience must trace |
| Tables | Header roles, row and column identity, spans, units, types, missingness, formulas and their source bindings |
| References | Stable target identity for citations, labels, captions, links, fields, footnotes, and generated numbering |
| Media | Source identity, crop/aspect intent, caption association, placement role, and required alternative representation |

Preserve bindings between structures. A correct-looking symbol attached to the
wrong base, a caption separated from its figure, a chart cache detached from its
source, or a visible number replacing a live reference is a semantic defect. Keep
inline/display, text/math/code, source/cache/result, native/image, and
content/derived-artifact roles distinct when the difference affects the request.

When converting one accepted source into several formats, project every output
from that same admitted source. Do not independently reconstruct its equations,
relations, tables, or references for each carrier.

## Select representation before implementation

Determine what the audience must read, compare, trace, or edit. When the encoding,
hierarchy, or perceptual treatment is materially open, use visualization design to
select and evaluate the representation, then return here to implement it in the
document. A short linear relationship can remain prose or inline notation when no
path-tracing task is lost; branching, rejoining, typed, or grouped relationships
normally need an accepted diagram representation. Layout proximity, arrows, color,
or enclosure must not invent direction, causality, grouping, or hierarchy absent
from the accepted relation.

Only after the representation is fixed, select a carrier-native object, language
construct, package, placed asset, or explicitly lossy fallback. A graph library is
an adapter, not evidence that a graph is appropriate. Conversely, an unavailable
preferred package cannot silently turn an accepted graph into raw text. Use a
compatible implementation that preserves the contract, return a bounded partial
result with named losses, request missing authority, or report the exact unavailable
binding.

Choose native editability, tagging, alternative text, or a placed image from the
request, destination, preservation contract, and supported carrier—not from the
file extension alone. If the selected carrier cannot express a required structure,
record the loss and its consequence before producing the artifact; do not describe
a visually similar substitute as equivalent.

Beautification and normalization operate only on degrees of freedom left by the
accepted structure and project. Do not globally rewrite semantically active
whitespace, grouping, language modes, native styles, fields, formulas, target
bindings, or container structure. Re-run every check invalidated by an authorized
normalization; visual regularity is not evidence that meaning survived.

## Place inside the actual region

Name the effective containing region for every object whose size or alignment
matters. It may be a page, column, list item, table cell, text frame, slide safe
area, placeholder, worksheet print area, PDF page box, or a nested region within
one of them. Resolve relative size against that region and its padding, not an
imagined universal paper or slide width.

Keep outer placement distinct from internal alignment. Centering a table or figure
inside a content column does not center its cells, equation points, labels, or
caption; changing those internals does not establish the object's placement.
Centering is a contextual composition choice or project rule, never a universal
normalization.

When content does not fit, repair the earliest contradicted layer:

1. remove irrelevant visual density without deleting accepted meaning;
2. wrap labels or rebalance grouping and spacing;
3. reorient or reflow the accepted representation;
4. split separable views or add an explicit continuation;
5. use a wider region when the project and request permit it; and
6. scale only while every required element remains legible.

Do not crop, overlap, rasterize, abbreviate, or indiscriminately shrink content to
hide a capacity defect. If no allowed repair satisfies the postcondition, report
the affected region and unmet obligation.

## Match evidence to each claim

Inspect the exact current source and resulting artifact. Apply only evidence
classes required by the request, but keep their conclusions separate:

- **Semantic:** compare expression trees, relations, table schema, values, labels,
  target bindings, captions, and media associations with accepted content.
- **Structural:** parse or reopen native objects, relationships, references, tags,
  formulas, source ranges, and container structure at issue.
- **Visual:** render with the admitted engine and inspect the affected region at
  delivery size for clipping, overflow, legibility, placement, and glyph behavior.
- **Accessibility:** inspect required reading order, header roles, alternatives,
  redundant encoding, link purpose, and other nonvisual access independently of
  painted appearance.

Successful parsing, compilation, reopening, export, or visual similarity cannot
prove the other classes. Test bindings with focused mutations: change one grouping,
edge, header/unit, target, source/cache state, container, editability requirement,
or accessibility requirement and confirm that only its representation, evidence,
loss, or refusal changes.

Keep stable structure and checking rules here. Resolve grammar, compiler, package,
consumer dialect, Office provider, renderer, and PDF conformance behavior against
the selected project/version and current authoritative interface. When that
adapter fact is unavailable, preserve the provider-independent projection and
reduce only the claim that depends on the missing fact.
