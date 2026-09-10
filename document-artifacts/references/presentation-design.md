# Compose and repair presentations

Use this reference when choosing a structure, adapting a template or interpreting
visual feedback. Content and evidence stay with their domain owner. The
[presentation workflow](presentations.md) governs execution and review decisions.
An accepted representation may come from
[visualization design](../../visualization-design/SKILL.md) when information
encoding is materially open. This reference places and adapts that representation
inside a deck; it does not independently choose a competing chart, diagram, map,
or uncertainty encoding.

## Place the accepted structure in the deck

| Accepted representation or reading task | Container treatment | Adaptation cue |
| --- | --- | --- |
| Accepted aligned comparison | Keep criteria aligned and comparable | Split criteria across slides before narrowing every column |
| Claim with evidence and qualification | Allocate a clear claim/evidence/source hierarchy | Separate overview from detailed data when their reading densities differ |
| Accepted categorical chart | Create native editable chart objects when required and preserve units, baseline, labels, ordering, and source | Change orientation or slide allocation only when label capacity demands it; do not change the encoding silently |
| Accepted exact-value table | Keep stable headers, units, and row identity | Repeat headers on continuation slides; keep units and row labels together |
| Accepted process or explanatory diagram | Preserve the decided relations in native shapes or an explicitly accepted placed asset | Give each step enough space; arrows must retain the accepted relation semantics |
| Supporting detail | Use an appendix or continuation with a clear link to the claim | Preserve required content even when it leaves the main slide |

Start from the accepted conclusion and representation, then allocate slide space
to its evidence. Choose density for the audience: a spoken briefing needs readable holds
and fewer simultaneous details; a self-contained report needs context and source
information. A title-only slide does not replace an evidence slide.

Brand fixes the requested palette, type choices and identity assets. Layout chooses
their application, hierarchy and geometry. A supplied template may provide a
master, placeholders or native charts that must survive; inspect those before
rebuilding anything. Use accepted brand resources as inputs, not decorative
examples from another organization's template.

## Capacity and typography

Measure representative real content in the intended renderer early: the longest
heading, densest table, actual number formats and mixed-script paragraph. Character
counts are only a rough layout budget; fonts, line spacing, glyph widths and
renderer behavior determine fit. Browser measurements do not establish PPTX fit.

Preserve accepted wording and values. Repair overflow by widening/rebalancing the
layout, separating detail or adding a continuation. Edit wording only within the
accepted scope. Do not crop paragraphs, hide qualifiers or shrink every font to
force one template. In a reused accepted chart, update labels, units, series, axis
bounds and source together; if that would materially change the encoding, return
the decision to visualization design. A template's illustrated values have no
factual authority.

For Chinese and other scripts, choose an admitted font with the required glyphs
and inspect mixed Latin/CJK runs, punctuation and fallback. A declared font name
does not prove that it is installed or was used. Preserve intended RTL direction
and shaping with a suitable producer/renderer; do not reverse character strings.
Neither current example establishes comprehensive RTL support. Embed/distribute
fonts only when their terms and the output format allow it.

## Two editable evidence treatments

The original [evidence brief](../assets/presentation/evidence.json) is consumed by
[native-python.py](../assets/presentation/native-python.py), with the same
[styles](../assets/presentation/styles.json) as the small three-slide example.
Copy those three files into the project and run:

```sh
python -I -B native-python.py evidence.json styles.json paper briefing.pptx
```

In a separate project copy of the brief, change `treatment` to `report`, then run
the same command to a new destination. `briefing` places a native chart and table
beside each other; `report` separates chart and table into distinct pages. Each
accepted note receives a continuation slide. Both retain the same data and wording;
these are different composition choices, not just light/dark palettes.

This resource supports one to six categories with finite numeric values on wide
slides. Long headings/notes still require actual render inspection and project
adaptation. It is a bounded example, not a general document schema or layout
solver. Native chart/table functions are Python-specific; the JS starter remains
a separately useful short-deck option. There is no cross-language feature-parity
requirement.

## Revise the current artifact

| Feedback or defect | Change first | Recheck |
| --- | --- | --- |
| “Too busy” | Choose one dominant message; separate secondary evidence | Content completeness, hierarchy and the new slide sequence |
| “Too plain” | Strengthen hierarchy and meaningful emphasis within the brand | Contrast and reading order; do not invent content or decoration quotas |
| Long title clips | Rebalance title area or split title/context | Real font metrics, body reflow and final native export |
| Global font/theme change | Current source theme or styles where authoritative | All dependent slides, fallback and chart/table labels |
| Local text correction | Targeted native runs/cell/object | Neighbor formatting and affected slide |

Identify the preview revision and slide/object before acting. Prefer the current
project's native identifiers; numeric position alone may be stale after insertion
or reordering. Compare against current source if a user edited it externally.
Never regenerate from an old brief over a supplied, directly modified PPTX.

For vague feedback, state a concrete interpretation and proceed when it is within
scope and reversible. Offer a small comparison or ask when materially different
directions remain. Honor explicit review checkpoints; do not require style voting
for every correction. Preserve accepted choices until relevant feedback changes them.

Use overview renders for sequence/hierarchy and full-size affected slides for
typography. If a cheap preview differs from the final engine, repair the source
against the final export. Source, assets, fonts, engine or geometry changes
invalidate dependent visual evidence. Keep only the before/after material needed
for comparison or recovery; a revert must preserve intervening user edits.
