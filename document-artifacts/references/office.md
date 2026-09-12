# Native Office artifacts

Read this reference for Word, PowerPoint, or Excel OOXML-family inspection,
extraction, creation, editing, conversion, or rendering, and legacy Office
recognition/conversion. The routed package families include the following common
document, template, and show variants:

| Family | Macro-free packages | Macro-enabled packages |
| --- | --- | --- |
| WordprocessingML | `.docx`, `.dotx` | `.docm`, `.dotm` |
| PresentationML | `.pptx`, `.potx`, `.ppsx` | `.pptm`, `.potm`, `.ppsm` |
| SpreadsheetML | `.xlsx`, `.xltx` | `.xlsm`, `.xltm` |

This table is an activation and safety route, not a claim that one library can
edit every variant. Add-in packages such as `.xlam` and `.ppam`, binary `.xlsb`,
and producer-specific extensions require their own exact capability proof; they
still receive active-content and container recognition before any operation.
It owns shared OOXML package mechanics and
format-specific fidelity checks. It does not own document meaning, business
analysis, provider installation, or a default visual style.

For PPTX creation and visual revision, use the conditional recommendations and
composable resources in [presentations](presentations.md). Choose authoring,
editing and rendering by their separate feature contracts below.

## Admit the requested capability

Freeze format, operation, required fidelity set, preservation-critical features,
accepted losses, and output before selecting a mechanism. Then verify the selected tool
against the applicable row:

| Operation | Binding must prove | Completion evidence |
| --- | --- | --- |
| Inspect/extract | Observe every requested meaning-bearing feature without mutation | Source identity, feature inventory, requested values/structure, unresolved regions |
| Create | Produce the target format and requested features | Reopened output plus semantic/structural checks |
| Edit | Mutate the requested feature and preserve every declared invariant | Preserved source, distinct reopened output, before/after checks and named losses |
| Convert | Produce the declared target under an accepted loss model | Source/target identities, mapped content, explicit omissions and target validation |
| Render | Render the exact admitted artifact with the required fonts/layout inputs | Engine identity plus inspected pages, slides, or sheets |

A mechanism usable for one row or feature is not a general Office binding. Return
`unavailable` when no live binding can satisfy the postcondition. Return `refused`
when the requested mutation conflicts with trust, signature, active-content, or
preservation policy. Never replace a native edit with a Markdown/CSV projection or
reduce visual fidelity because a renderer is absent.

Choose the applicable feature row as well as the operation row. Their intersection
defines the required capability; the examples below are not an installed-tool list.

| Format / operation / feature | Portable mechanism requirement and limitation | Checks and loss boundary |
| --- | --- | --- |
| Word-family inspect/extract: stories, revisions, nested tables | Reader exposing requested body/header/footer/comment/revision parts; basic paragraph collections are incomplete | Compare requested source parts and locators; omissions remain unresolved |
| Word-family create/edit: styled runs, fields, comments | Native producer that edits the exact document/template variant while retaining the relevant relationships and untouched content | Reopen and compare text, run formatting, anchors/fields and relationships; render when visual fidelity is required |
| PowerPoint-family inspect/extract: slides, notes, masters | Reader observing existing presentation/template/show identities and notes without creating parts | Check order, notes presence, inheritance and source locators; reading order is not automatically shape order |
| PowerPoint-family create/edit: text, shapes, media | Producer supporting the affected feature and exact package variant while preserving layout/master/media relationships | Reopen and compare identities, geometry, z-order and values; animations or unsupported embedded content need their own proof |
| Excel-family inspect/edit: cells, formulas, cached values | Workbook/template reader/writer retaining requested types, formulas, formats, merges and relationships | Reopen formula and cached-value views separately; a cache is not recalculation |
| Excel-family create/edit: fresh formula results | Compatible calculation engine for the exact formulas and inputs, without unauthorized link refresh or macro execution | Reopen calculated values and check expected results/errors; setting a recalculate-on-open flag is insufficient |
| Legacy DOC/PPT/XLS convert | Converter that recognizes the actual source format and produces the admitted target | Preserve original, validate target, and report feature/layout losses; no implicit legacy native-edit promise |
| Any Office convert to text/Markdown/CSV | Extractor for selected content and a named target dialect/encoding | Record omitted stories/slides/sheets, formulas versus values, formatting, media and metadata as relevant; never call this a native round trip |
| Any Office render | Compatible rendering engine, fonts and page/slide/sheet selection | Inspect exact output for clipping, overflow, substitutions and layout; semantic/structural checks still apply when required |

## Recognize the container before OPC inspection

An extension is a hint, not identity. Inspect the file signature/container and
format metadata before selecting its parser. A ZIP reader may find an embedded
archive inside a compound file; successful ZIP opening does not establish that the
outer document is an OPC package. Check the outer container and its document-type
relationships, not just ZIP readability or a content-types entry.
Legacy `.doc/.ppt/.xls` and their legacy template/show variants are not OOXML;
neither renaming the file nor feeding it to an OOXML ZIP parser converts it.
Non-ZIP input is not automatically malformed: legacy formats and encrypted Office
containers need their own recognition. A compound-file signature alone does not
identify which Office format it holds. Encrypted packages may contain an OOXML
document internally; route decryption only under the appropriate authority.

For a recognized legacy source, preserve its identity and use a compatible reader
or explicitly admitted conversion if it satisfies the request. The converted copy
is a distinct artifact with checks and a loss report, not a replacement original.
Report an unsupported source/operation or unavailable compatible converter without
pretending modern-library support covers legacy files. Ambiguous or mismatched
format metadata requires resolution before mutation.

## Inspect admitted OOXML packages

OOXML uses an Open Packaging Conventions ZIP container with typed parts and
relationships. Before a native parser receives untrusted input:

1. Bound source bytes, entry count, per-entry and total expanded bytes,
   compression ratio, nesting, time, memory, disk, and concurrency.
2. Inspect entries without extracting them. Refuse encrypted entries, absolute or
   parent paths, duplicate/conflicting names, and limit violations.
3. Require `[Content_Types].xml`; parse content types and relationship parts with
   entity and network expansion disabled.
4. Inventory external targets, digital-signature parts, VBA projects, embedded/OLE
   objects, custom XML, and format-specific parts. Do not retrieve or execute them.
5. Compare the inventory with the requested preservation set and the binding's
   observed feature surface before any mutation.

Do not unpack into the destination tree. If a low-level operation requires
extraction, contain every resolved target beneath task-scoped scratch and clean it
afterward. ZIP/XML well-formedness, schema validation, native reopening, and visual
rendering are separate evidence classes; none implies the others.

## Preserve source and inactive content

Write a distinct artifact by default. Produce it in task-scoped scratch, close the
producer, and reopen/check that candidate before committing it under the shared
execution rules. Verify the committed bytes and source identity; avoid a redundant
parse when the checked candidate and committed bytes are identical. Never overwrite
a prior valid artifact merely because the producer exited successfully.

- Treat VBA, embedded code, OLE objects, and external relationships as inert data.
  Never enable macros, activate objects, refresh data, follow links, or fetch
  templates during inspection or editing.
- A provider option named `keep_vba`, `keep_links`, or similar requests
  preservation only; it does not execute content or prove semantic/byte
  preservation.
- Refuse mutation of a signed package unless signature invalidation is explicitly
  accepted. Report the signature inventory and loss.
- Do not change between macro-enabled and ordinary extensions by renaming. Package
  content types, parts, producer capability, and the requested target must agree.
- Do not repair or rewrite malformed input as a side effect of inspection.

## Apply format-specific requirements

Apply [forward representation fidelity](representation-fidelity.md) before
selecting an Office API or provider. Preserve accepted mathematical structure in
a compatible native equation object when native semantics/editability are
required; plain text or a rendered equation image is a declared-loss alternative,
not an equivalent. Preserve relational entities and typed edges with connected
native shapes or another accepted representation; visually adjacent shapes and
free lines do not establish their relationships.

For tables and charts, keep header/series/category identity, units, formulas,
source ranges, captions, labels, and missingness bound to their owners. In Excel,
formula source, cached value, and freshly calculated result remain distinct. In
Word and PowerPoint, preserve reference/field/relationship targets rather than
hard-coding their current visible text or number.

Name the effective page, section, column, text frame, slide safe area, placeholder,
cell, sheet view, or print region for capacity and placement. Keep whole-object
placement distinct from equation, text, table-cell, or chart-internal alignment.
Repair density, wrapping, grouping, orientation, region allocation, or slide/sheet
continuation before shrinking, cropping, overlapping, or rasterizing accepted
content. When required, preserve reading order, native headers, alternatives, and
object associations independently of visual appearance.

### DOCX

Inventory document stories and relationships, including body content, sections,
styles/themes, headers/footers, tables, comments/revisions, fields/hyperlinks,
footnotes/endnotes, text boxes, drawings/media, custom XML, signatures, and active
content as relevant to the request.

For basic creation or editing, reopen and compare requested paragraphs, runs,
tables, sections, styles, and header/footer content. Run boundaries matter only
when formatting, fields, revisions, or source mapping depends on them.

If `python-docx` is a candidate, account for its documented view: document-level
paragraph and table collections omit content inside revision marks, and the
document-level table collection excludes nested tables. Do not use those
collections alone for complete extraction or preservation claims. Require another
proven mechanism or report a provider limitation and unmet preservation obligations
for unsupported fields, drawings, text boxes, revisions, or other critical parts.

### PPTX

Inventory slide order, sizes, masters, layouts, themes, shape-tree order, groups,
placeholders, text, tables, notes, media, charts, hyperlinks, animations, SmartArt,
embedded objects, signatures, and active content as applicable.

After creation or editing, reopen and check slide/order identity, selected
master/layout relationships, shape type and z-order, text/table values, geometry,
and relevant media relationships. A high-level presentation library may expose
only part of this surface; probe the exact requested feature instead of inferring
preservation from successful opening. Basic slide construction does not prove an
existing corporate master, animation, or presentation behavior was preserved.

For `python-pptx` inspection, check `has_notes_slide` before accessing `notes_slide`:
access can create a notes slide and master when absent. Inspect inherited master
content separately when needed; it may be visible without appearing in the slide's
own shape collection. Extracting text does not prove its intended reading order.

### XLSX

Inventory workbook and sheet identity/order, cells and types, formulas and cached
values, number formats/styles, merged ranges, defined names, tables, validations,
hidden state, calculation settings, external links, drawings/charts, pivot data,
signatures, and active content as applicable.

Formula text, cached values, and calculated results are distinct. If `openpyxl` is
a candidate, `data_only=False` observes formula text while `data_only=True`
observes the last cached value written by a calculating application; the library
does not calculate formulas. A new formula can therefore have no cached value.
Report these states separately and never present a cache as fresh calculation.

If fresh values are required, use a compatible calculating application, record
the inputs and calculation behavior, then verify saved results and formula errors.
Do not treat calculation settings as executed work or refresh external sources
without authority. A noncalculating library remains usable for formula-preserving
edits; it cannot satisfy a fresh-result postcondition by itself.

Keep stored types, number formats, displayed values and locale interpretation
distinct. Preserve identifiers such as text with leading zeros; do not coerce them
to numbers. For dates/times inspect the workbook's 1900/1904 date system and the
cell format; serial numbers alone do not establish meaning. Excel date/time values
do not encode time zones; any required zone interpretation must be explicit.

Preservation flags for VBA or external links do not validate their contents and do
not authorize execution or retrieval. Existing drawings and other unsupported
features can be lost during a load/save cycle; refuse a preservation-critical edit
unless the exact feature round trip is proven. Worksheet/workbook protection is an
editing deterrent, not encryption or an integrity guarantee.

## Match validation to the claim

Use one native producer, then reopen the exact output once for all compatible
semantic and structural checks. Add a schema validator only when the requested
conformance class is named and a binding exists. Add a renderer only for a visual
claim; inspect the affected pages, slides, or sheet print regions for overflow,
clipping, font substitution, geometry, and image placement.

Provider success or native reopening does not prove preserved meaning, full OOXML
conformance, or visual fidelity. Record the inspected feature inventory, bindings,
checks, active/external content, accepted losses, unresolved regions, and recovery
in the shared `ArtifactResult`. Malformed input or an unsupported request is
terminal. A provider-specific limitation may select an admitted compatible branch
under the shared execution rules; it does not justify an unrelated library cascade.

For semantic-structure work, compare native equations, connectors, headers,
formula/source bindings, reference targets, captions, reading order, alternatives,
and the named containing region as applicable. A visually similar grid, line,
glyph string, cache, or image cannot satisfy these checks by appearance alone.

## Authoritative references

Resolve version-sensitive rules from current primary sources at use time:

- [ECMA-376 Office Open XML](https://ecma-international.org/publications-and-standards/standards/ecma-376/)
- [Microsoft Open XML SDK documentation](https://learn.microsoft.com/en-us/office/open-xml/open-xml-sdk)
- [Microsoft 365 Math](https://learn.microsoft.com/en-us/office/math/)
- [Microsoft Office XML extension reference](https://learn.microsoft.com/en-us/office/compatibility/xml-file-name-extension-reference-for-office)
- [python-docx document API](https://python-docx.readthedocs.io/en/latest/api/document.html)
- [python-pptx documentation](https://python-pptx.readthedocs.io/en/stable/)
- [python-pptx notes behavior](https://python-pptx.readthedocs.io/en/latest/user/notes.html)
- [openpyxl workbook reader](https://openpyxl.readthedocs.io/en/stable/_modules/openpyxl/reader/excel.html)
- [openpyxl formulas](https://openpyxl.readthedocs.io/en/stable/simple_formulae.html)
- [openpyxl dates and times](https://openpyxl.readthedocs.io/en/stable/datetime.html)
- [Office encrypted packages](https://learn.microsoft.com/en-us/openspecs/office_file_formats/ms-offcrypto/b60c8b35-2db2-4409-8710-59d88a793f83)

The standard defines representation, provider documentation defines an interface,
and only the current request's probe establishes a usable binding.
