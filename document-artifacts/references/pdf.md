# PDF operations

Use this reference for PDF inspection, extraction, creation, transformation, OCR,
protection, and forms within document-artifacts.

Use [located extraction](ingestion.md) for content projection and coordinates.
Use [bounded execution](execution.md) for tool selection, acquisition, authority,
resource limits, failures, and candidate-output commit/recovery. The named APIs
below are conditional mechanisms: inspect their compatible documentation before
use; they are not a required installation set.

## Inspect and select the operation

Open the source without executing embedded actions. Read page count, boxes and
rotation, then inspect text and a rendered sample from the requested scope.
Inspect annotations, fields, encryption, signatures, attachments, and tags when
they affect the requested operation. With PyMuPDF, document/page properties,
page text extraction and rendering provide this starting point; with pypdf,
reader pages, metadata and fields expose relevant structure.

Record source identity, selected pages and the properties the result must retain.
Choose extraction for information, editing for changed PDF pages, or the original
source-language owner when editable source is available and the requested change
belongs there. Text presence alone does not establish correct reading order or
coverage of image regions.

## Extract or add searchable text

For requested content, follow the observation-driven branches in
[located extraction](ingestion.md), returning source locators and unresolved scope.

For a searchable PDF, first determine which pages already have trustworthy text.
Choose an OCR mode that preserves that text or deliberately replaces an incorrect
layer. [OCRmyPDF's cookbook](https://ocrmypdf.readthedocs.io/en/latest/cookbook.html)
describes searchable-output workflows and existing-text modes; its sidecar alone
does not contain all native text in a mixed document.

PyMuPDF's page OCR TextPage supports extraction from a cached recognition result;
it does not by itself save a searchable PDF. For a raster-page output workflow,
its Pixmap OCR PDF method can produce PDF bytes with a text layer, which can then
be assembled into a document. Decide whether rasterizing existing page features
is acceptable before choosing that path. Reopen the saved result, extract known
visible text and compare its rendered appearance with the source. Check language,
orientation, region coverage and text-layer duplication.

## Create PDF pages

Start from accepted content, page dimensions, assets and font requirements.
For Typst, LaTeX or Office source, use its format reference to produce PDF.
For direct page construction, PyMuPDF's document new-page and page text/image
insertion methods provide a basic path: create pages, place content within their
boxes, save a distinct candidate, then reopen and render it. Select a layout
engine when wrapping, pagination or complex scripts exceed simple placement.

Verify requested text and page structure as well as clipping, fonts, images and
layout. A PDF export does not establish equivalent editable source.

For mathematical, relational, tabular, reference, or media content, apply
[forward representation fidelity](representation-fidelity.md) before direct PDF
creation or conversion. Painted glyphs, arrows, grid lines, and captions preserve
appearance only; when the contract requires logical semantics, also preserve and
inspect the applicable Formula, Figure, Table/header, link, reading-order, and
alternative-representation structure through a compatible tagged-PDF mechanism.
If the selected producer cannot express a required structure, return the exact
loss or unavailable capability rather than inferring it from the render.

## Transform existing pages

1. Write the intended source-to-output page sequence, including repeats and
   destination positions. Use PyMuPDF selection/insertion or pypdf append/merge
   for selection, reordering, splitting and merging.
2. Apply requested rotation or crop boxes in the provider's coordinate system.
   Cropping changes visibility; it does not remove hidden content.
3. Inspect affected links, bookmarks, annotations and forms. Rebuild destinations
   when the operation does not preserve their intended mapping. For merged forms,
   resolve fully qualified field-name collisions before joining documents;
   [pypdf merging](https://pypdf.readthedocs.io/en/stable/user/merging-pdfs.html)
   documents form-name prefixes and page-selection behavior.
4. Save and reopen the candidate. Check page order/count, geometry, requested
   content and affected interactive features against the source mapping.

For overlays, place the requested text, image or page content at the intended
coordinates and check stacking and clipping. An overlay does not redact content.
For compression, begin with a lossless rewrite when suitable; measure final bytes
and compare content/appearance. A rewrite may enlarge a small file. If a size
target requires image resampling or other loss, choose it against the requested
preservation requirements and report the actual result.
For conversion, name the destination and its required properties before choosing
an exporter; a rendered image loses PDF text and interactive structure.
Treat media box, crop box, rotation, transformed page space, and a placed object's
local region as distinct coordinate frames. Optimization, flattening, or
rasterization must not discard required text, tags, links, vectors, forms, or
logical associations merely to improve appearance or file size.

## Fill forms

Inspect form type and field inventory before assigning values. For AcroForms,
read fully qualified names, field/widget types, allowed choice values, checkbox
or radio export states, and repeated widgets. Map the user's values to this
inventory; do not guess a checkbox's on-state from its visible label.

Use a compatible writer, such as PyMuPDF widget updates or
[pypdf field updates](https://pypdf.readthedocs.io/en/stable/user/forms.html).
Save separately, reopen to verify values, and render to verify appearances.
A stored value and its displayed appearance are separate checks. Flatten only
when requested; then verify the appearance remains and interactive fields are
removed. Preserve unrelated fields and source bytes.

If inspection finds XFA or dynamic behavior, look up a mechanism for that subtype
before editing. If unavailable, state the concrete limitation and preserve the
input; ordinary AcroForm updates do not establish dynamic-form support.

## Protect or remove content

For encryption, decryption or permission changes, use an authorized credential
and a compatible writer or [qpdf](https://qpdf.readthedocs.io/en/stable/cli.html).
Set the requested protection, save separately, then test intended access and
inspect encryption/permission state. Keep credentials out of command logs and
returned evidence. Permission flags alone do not provide confidentiality.

For redaction, identify the exact text/regions and removal scope. In PyMuPDF,
add redaction annotations, apply redactions with appropriate text/image/graphics
handling, and save a new cleaned output rather than retaining incremental history.
Reopen and render the result; inspect extracted text and relevant decoded content
or resources for remnants. Include reused images, other pages, metadata,
annotations and attachments when the requested removal scope includes them.
A black rectangle or a failed text search alone does not prove removal.

For signed inputs, preserve the original signed bytes and establish the effect of
the requested modification. Signature validation or new signing needs a
signature-aware validator or signer workflow when requested. Likewise, a requested
PDF/A profile or accessibility claim needs a suitable validator and relevant
semantic checks; [veraPDF](https://docs.verapdf.org/validation/) is one candidate
for supported profiles. These are request-dependent branches, not prerequisites
for ordinary PDF operations.

## PDF-specific execution checks

Keep JavaScript, launch actions, attachments and form submission inert.
Parsing/rendering is not a malware sandbox. Apply the shared execution limits
to decoded images/streams and render pixels, not just input bytes; avoid unbounded
decoding merely to measure size. Report unprocessed scope when a limit is reached.

Use [PyMuPDF page documentation](https://pymupdf.readthedocs.io/en/latest/page.html)
and [document documentation](https://pymupdf.readthedocs.io/en/latest/document.html)
for compatible operation details. Consult
[OCRmyPDF security guidance](https://ocrmypdf.readthedocs.io/en/latest/pdfsecurity.html)
before processing signed or encrypted inputs. Return checks on the exact delivered
output and any unresolved properties through the shared artifact result.
For tagged-PDF semantics, consult the selected profile and current authoritative
guidance such as the PDF Association's
[Tagged PDF Q&A](https://pdfa.org/resource/tagged-pdf-q-a/); conformance validation
and semantic/source comparison remain separate evidence.
