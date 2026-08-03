---
name: pdf
description: Read, extract, create, transform, OCR, secure, or fill PDFs. Use whenever a PDF is input or output; route forms and uncommon operations to bundled references.
---

# PDF Processing

This skill is distributed under the proprietary terms in `LICENSE.txt`.

## Route by operation

- Text or layout extraction: `pdftotext`, `pdfplumber`, or `pypdf`.
- Tables: `pdfplumber`; validate merged cells and reading order visually.
- Merge, split, rotate, encrypt, repair: `qpdf` or `pypdf`.
- New documents: ReportLab for programmatic layout.
- Scans: render pages, OCR them, and preserve page provenance.
- Fillable or annotation-based forms: read [forms.md](forms.md) completely and
  use its bundled scripts.
- JavaScript, rendering, batch processing, cropping, or advanced operations:
  read only the relevant section of [reference.md](reference.md).

## Reproducible workflow

1. Inspect input count, pages, encryption, metadata, geometry, text, forms, and
   signatures without modifying the source.
2. Define selected pages, order, searchable text, visual fidelity, metadata,
   security, and whether signatures may be invalidated.
3. Choose one routed tool. Prefer a CLI for structural operations and a library
   only when content must be interpreted.
4. Write to a distinct output or task-scoped temporary file; preserve the source.
5. Validate structure, page order and geometry, extractability, and encryption.
6. Render representative pages; inspect every page for forms, layout changes, OCR,
   or publication output.
7. Report output, tool, checks, and losses in forms, links, annotations, signatures,
   fonts, image quality, or accessibility.

## Hard gates

- Obtain authorization before decrypting, removing restrictions, signing, or
  exposing protected content.
- Treat malformed PDFs as untrusted; bound pages, decoded size, OCR work, and
  external resource access.
- Do not claim exact OCR or table extraction without checking source regions.
- Do not use Unicode super/subscript glyphs with ReportLab built-in fonts.
- Output is incomplete until structural and visual validation pass.
