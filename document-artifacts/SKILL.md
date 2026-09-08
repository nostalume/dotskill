---
name: document-artifacts
description: "Create, edit, inspect, extract, convert, or render DOCX, PPTX, XLSX, Markdown, Typst, LaTeX, or PDF artifacts when physical format behavior matters, including PDF OCR, protection, and forms."
---

# Document Artifacts

Own physical document representation and format behavior. The domain owner still
owns meaning: `constructive-research` owns research claims and
`software-documentation` owns software explanations, and an applicable analytical
owner owns business/data conclusions. Extraction consumes source material that may
be unadjudicated; production consumes accepted content. Return a checked projection
or artifact with explicit limitations, never an independently accepted research claim.

For standalone PDF inspection, extraction, creation, transformation, OCR,
protection, or forms, read [PDF operations](references/pdf.md). A PDF rendered
from Typst or LaTeX remains a derived output of its source-language operation;
use that source reference for compilation and the PDF reference for independent
PDF edits.

## Admit one request

Establish only fields that can change correctness:

```text
ArtifactRequest(
  source or accepted-content references and kind
    -> observed identity/revision/digest,
  operation = inspect | extract | create | edit | convert | render,
  requested postcondition and relevant page/region/feature scope,
  target format when the operation requires one,
  required_fidelity = nonempty subset of {semantic, structural, visual},
  preservation-critical features and accepted losses,
  destination and overwrite policy when writing,
  authority = local | explicitly approved remote,
  trust classification,
  page/byte/pixel/time/concurrency resource bounds
)
```

Treat operation-specific requirements as variants rather than making every field
implicitly optional. `create` requires accepted content and a target; `convert` and
`render` require a source and target; read-only inspection does not invent a
destination. `inspect` and `extract` require a source and requested information or
projection; `edit` requires a source, exact change, preservation set, and output
policy. Extraction writes a projection only when requested or needed by a named
consumer. These are conceptual fields, not a requirement to create schema files.

Inspect available sources and project conventions before asking for information
that the files can answer safely. Preserve existing layout and source formats by
default. Treat these as distinct source variants:

- native editable containers: DOCX, PPTX, and XLSX;
- text/source languages covered here: Markdown, Typst, and LaTeX;
- analysis projections: derived Markdown, JSON, text, images, or tables;
- fixed-layout PDF: page content, geometry, text layers, and interactive features.

Select the variant and operation once. Do not repeatedly reinterpret extensions or
dispatch again through whichever tool happens to be installed.

For DOCX, PPTX, or XLSX work, or legacy `.doc/.ppt/.xls` recognition and conversion,
read
[native Office artifacts](references/office.md) before choosing a mechanism or
claiming preservation. Its matrix defines portable requirements; tool availability
is admitted anew for the current request.

For Typst creation, editing, compilation, or rendered-output validation, read
[Typst artifacts](references/typst.md). It defines source, project-root, compiler,
font, input, package, and output boundaries; resolve every live binding anew.

For LaTeX source authoring, project builds, or derived-output validation, read
[LaTeX artifacts](references/latex.md). Preserve the project's engine, class,
packages, and build graph; compilation support depends on an admitted binding.

## Execute a linear artifact flow

1. Inspect the source read-only and identify encoded structure, external
   dependencies, unsupported features, and the requested postcondition.
2. Resolve version-sensitive syntax and behavior from the applicable specification,
   compiler, or official tool documentation. Skill repositories are pattern
   evidence, not format authority.
3. Plan the smallest conditional producer-and-validation graph that satisfies the
   fixed postcondition; inspection selects its relevant branches. Conversion to
   Markdown is analysis-oriented and never a native-editing substitute.
4. Admit each tool from a successful capability/version probe. Perform no implicit
   installation, upgrade, package/model download, plugin enablement, or cache fill.
5. Perform effects in one named owner and write a distinct output unless the user
   explicitly authorized in-place mutation.
6. Reopen, compile, or render the result and validate only the fidelity claims made.
7. Return one result and clean transient work.

For any external library, CLI, MCP/API provider, multiple-tool operation, fallback,
or package-availability question, read
[bounded tool execution](references/execution.md) before invoking tools. A direct,
already proven single tool still follows the same result and authority boundaries.

```text
ArtifactResult(
  status = complete | partial | unavailable | refused | cancelled | failed,
  reason category,
  source and output identities/references,
  source map or stable locators where available,
  required checks performed, failed, or skipped,
  losses and unresolved regions,
  tool/provider identity and version,
  effects performed,
  recovery or preserved source
)
```

`complete` means every requested obligation passed. `partial` identifies usable
scope and unmet obligations; `unavailable` means a required capability cannot
currently execute; `refused` means authority or policy disallows the operation;
`cancelled` preserves cancellation; `failed` means the request could not produce
its result. Preserve reason categories: malformed input, unsupported request,
provider limitation, missing binding, unauthorized effect, resource exhaustion,
or execution failure. Per-scope outcomes supplement the aggregate when needed;
never hide refusal/cancellation inside partial success. Retry/branch behavior is
owned by the execution reference.

For `extract`, read [located extraction](references/ingestion.md) for the shared
projection and coverage contract before choosing a provider. Return usable content
with its source locations and unresolved scope. The semantic owner admits the
projection as evidence; neither a nonempty extraction nor native text proves
complete or correct content.

## Match evidence to fidelity

- Semantic: check requested content, values, formulas, citations, reading order, or
  other meaning-bearing elements against the source or accepted content.
- Structural: reopen with a native-aware reader, parser, or compiler and check the
  container, relationships, references, schema, or generated structure at issue.
- Visual: render with a declared engine and inspect the affected pages, slides,
  sheets, overflow, fonts, geometry, and images. Visual appearance does not prove
  semantic or structural correctness.

Use every applicable class, but do not run a costly visual pipeline for a claim
that structural or semantic evidence already settles. Record missing tools and
skipped checks; report unmet obligations instead of silently lowering the requested
fidelity or inferring success.

## Markdown boundary

Preserve the repository's existing Markdown dialect and conventions. For new
standalone text, name CommonMark, GFM, or another required consumer dialect when
the distinction changes behavior. Tables and task items are GFM extensions;
footnotes and dollar-delimited math need a separately named extension or consumer
contract. Preserve code spans/blocks and apply escapes in the context defined by
the selected dialect. Treat raw HTML as consumer-controlled active content because
renderers may pass, filter, sanitize, or reject it differently. Validate links and
rendering only when claimed or required by that consumer. Select a parser/renderer
configured for that consumer before asserting extension support; a library's
"Markdown" or "GFM" label does not establish its enabled extensions. Check relative
links from the document's destination, and preserve literal code rather than
interpreting embedded math or escapes. A conversion records its
source and lost layout, comments, formulas, metadata, or embedded media rather than
presenting Markdown as equivalent to the original. Use the current
[CommonMark specification](https://spec.commonmark.org/) or
[GFM specification](https://github.github.com/gfm/) as applicable.

## Authority and retention gates

- Selection does not authorize dependency installation, remote upload, macro or
  embedded-code execution, external-link retrieval, decryption, signature
  invalidation, source overwrite, directory reorganization, or publication.
- Inspection, extraction, review, or validation does not authorize document edits.
- Use `system-mutation` and its external-integration reference for provider
  acquisition or registration
  through the execution reference's request/receipt handoff. Preserve the document
  postcondition. For remote work, establish transmission, credential, cost, and
  retention implications. Use existing authorization; ask only for missing authority.
- Do not create `output/`, `bridge/`, logs, manifests, projects, or per-page files
  merely because the request has multiple steps. Create a durable artifact only
  for the requested result, a named downstream consumer, reproducibility, or
  recovery.
- Reuse expensive results for unchanged admitted inputs. Corrected source has a
  new identity and may be compiled or parsed again. Keep scratch task-scoped and
  remove it after verification unless the user requested it or an observed
  regression gives it a durable test consumer.
- Report exact outputs, checks, losses, unresolved regions, skipped evidence, and
  recovery. Do not claim completion from file existence or successful opening
  alone.
