# Located extraction

Use this reference to return requested information from document sources with
enough provenance to check it. It owns the extraction projection across formats;
format references own native features, and [execution](execution.md) owns tool
bindings, authority, budgets, failure handling, and recovery. Extracting content
does not authorize changing its source or admitting its claims as true.

## Return the requested projection

Extend the shared artifact result with these conceptual values only where they
affect the consumer. They do not require a schema, JSON sidecar, output tree, or
one file per element.

| Value | Required meaning |
| --- | --- |
| Source | Exact source identity/revision and requested scope; identify transformed intermediates separately from the original. |
| Element | Kind and observed content, with preserved relationships needed by the request. Separate transcription from interpretation. |
| Locator | Page/region or native locator that resolves against that source; mark unavailable granularity instead of inventing coordinates. |
| Order | Reading sequence and relationships where established; identify ambiguous ordering rather than silently choosing one. |
| Method | Native extraction, OCR, or model-assisted transcription/interpretation, with the provider/model identity in execution evidence. An existing text layer of unknown origin is not proven native authorship. |
| Coverage | Completed requested scope, unreadable/unprocessed regions, uncertain symbols/cells, failed or skipped checks, and losses. Omission is not an empty value. |
| Outcome | Shared aggregate status/reason and per-scope outcomes when needed to distinguish usable content from unmet obligations. Preserve refusal and cancellation as terminal outcomes. |

For native documents, use locators the provider actually exposes: sheet and cell
range, slide and shape, document part/paragraph/table cell, or source line/span.
Pin them to the source revision; a layout-dependent page number requires a known
rendering. A parser index may locate an element within that revision without being
a stable application identifier. Preserve that distinction.

For page geometry, state physical page index and its indexing base, page label
when available, origin/axis directions, units, and page box. Record relevant crop,
rotation, scaling, and render resolution, with a transformation back to the
original source. Do not mix renderer pixels and PDF user coordinates. Validate
the mapping against visible landmarks when region fidelity is claimed; nonzero
box origins and rotated/cropped pages defeat a universal vertical-axis flip.
Provider conventions are interface-specific; see the
[PyMuPDF coordinate explanation](https://pymupdf.readthedocs.io/en/latest/app3.html#coordinates).
If preprocessing cannot supply a reliable inverse mapping, report that limitation.

## Preserve difficult content without inventing it

- Equations: return source-located transcription, retain grouping and symbol
  distinctions, and mark uncertain tokens. A plausible reconstructed formula is
  not a verified transcription or theorem.
- Tables: retain observable headers, row/column and merged-cell relationships,
  units, and empty versus unreadable cells. Report inferred structure separately;
  flattened Markdown may lose these relationships. A provider can introduce empty
  rows from visual spacing; remove them only after source comparison establishes
  that they are extraction artifacts, not meaningful blank rows.
- Charts: separate observed labels, units, legends, and values from inferred
  trends. Values estimated from pixels are estimates, not native data points.
- Mixed layout: preserve captions, footnotes, and columns as requested. Reconcile
  overlapping native/OCR results using source regions; equal text in two locations
  is not necessarily a duplicate.

Send this projection and its limits to the semantic consumer's existing evidence
admission. For research, the existing research loop owns disposition; extraction
cannot establish theorem validity or update that disposition. Preserve links back
to source material when a consumer exports the projection to another format.

## Choose mechanisms from source observations

Inspect requested pages/regions and compare extracted text with their render.
Choose branches from what is observed; a supplied filename, text-layer flag or
expected layout is not a classification result. Resolve ambiguity with bounded
targeted inspection and preserve uncertainty if it remains.

| Observation | Action and distinguishing check |
| --- | --- |
| Text matches visible content | Extract words/blocks with locations, then assemble the requested reading order. Check column boundaries, captions and footnotes visually; raw stream order need not be reading order. |
| Text is missing in image regions | OCR those regions or pages with appropriate language and orientation. Map OCR locations back to the source and combine with trustworthy text by location; equal strings at different locations may both be valid. |
| Existing text contradicts the render or is duplicated | Inspect a representative affected region, then replace or disregard the bad layer for extraction using full OCR where needed. Check the recognized result against visible content; adding another layer can compound duplicates. |
| Columns or interleaved text defeat stream order | Derive regions from the observed layout, extract within those regions and reconstruct their sequence. Report ambiguous relationships rather than using fixture-supplied segmentation or a universal sort rule. |
| A table is visible | Use native cells where available, otherwise a table/layout mechanism such as PyMuPDF page table finding. If detection returns nothing, use observed row/column regions or source-checked transcription; an empty detection result does not establish absence of tabular content. Inspect boundaries and cells against the image, restoring observed headers, spans and units. Remove spurious blank rows only after comparison. |
| Equations, charts or complex layout remain unresolved | Inspect the relevant render and native objects; use structured analysis or model-assisted transcription only if needed. Retain observed content separately from interpretation and mark uncertain symbols or estimated values. |
| Content remains unreadable or a region cannot be processed | Return its locator and the reason as unresolved scope; do not turn missing information into an empty cell or inferred prose. |

For PyMuPDF extraction, page text methods expose words or blocks; clipping can
restrict inspection to an observed region. Its
[OCR recipe](https://pymupdf.readthedocs.io/en/latest/recipes-ocr.html) explains
creating an OCR TextPage and supplying it to subsequent text extraction.
Keep required document/page objects alive while reusing dependent text objects,
and reuse only for the same source revision. Check coordinate conventions before
combining results. [pypdf extraction](https://pypdf.readthedocs.io/en/stable/user/extract-text.html)
is another text candidate with positioning limits; it does not OCR image content.

When structured analysis is needed,
[Docling usage](https://docling-project.github.io/docling/usage/) starts with a
DocumentConverter conversion result and its document. Configure the appropriate
pipeline and OCR/model options before conversion using compatible documentation.
Inspect the resulting [document model](https://docling-project.github.io/docling/concepts/docling_document/)
for actual hierarchy, table structure, provenance and bounding boxes before
exporting. A model field's existence does not prove it was populated correctly.
Preserve required structure alongside a readable export when Markdown would lose it.

[MarkItDown](https://github.com/microsoft/markitdown) is a candidate when a Markdown
projection meets the request; inspect the actual output for required features and
locators. For saved searchable PDF output, use the [PDF OCR path](pdf.md);
an OCR extraction cache and an OCR sidecar are not equivalent to that deliverable.

Choose only needed mechanisms under the shared execution contract, including
code/model terms, downloads, local/remote effects and aggregate resource cost.
These interfaces are options, not an installation order or a claim of validation
on the current source. A model's fluent reconstruction remains unverified until
checked against source evidence.

## Check coverage and return one result

Compare extracted scope with requested scope, including regions the provider could
not process. Check order, relationships, transcription, and mapping at the level
the request needs. Native text, OCR confidence, nonempty Markdown, and a successful
exit each prove less than complete extraction. Never invent an accuracy score.

A provider limitation may select a declared compatible alternative under the same
postcondition, authority, and aggregate budget. Malformed input is not a reason to
cycle through parsers. Missing bindings, resource limits, refusal, and cancellation
retain the shared execution meanings. Where usable scope survives, identify it
without hiding the unmet or terminal outcome. Produce both structured and readable
exports only when consumers require both; they share the same source projection.

For PDF-specific inspection, editing, and searchable-output procedures, read
[PDF operations](pdf.md).
