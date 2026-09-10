# Presentation choices and resources

Choose from the requested output and preservation needs. Recommend a complete
compatible composition, then invoke only the operations needed for this request.
The [Office contract](office.md) governs native feature preservation; the
[execution contract](execution.md) governs bindings and effects. When a chart,
diagram, map, uncertainty treatment, perceptual hierarchy, or other information
encoding is materially open, [visualization design](../../visualization-design/SKILL.md)
owns that representation decision and its evaluation. This presentation workflow
still owns the deck request and carries the accepted decision through native
composition, rendering, and delivery without asking the user to coordinate skills.

## Required checkpoints, flexible methods

Satisfy each applicable checkpoint before its dependent action. Existing project
evidence can satisfy a checkpoint; render-only work does not restart design.

| Checkpoint | Evidence needed | Decision and continuation |
| --- | --- | --- |
| Source and intent | Current editable source, accepted content, output and preservation requirements | Inspect project files before asking; resolve a missing material requirement |
| Composition and tools | Resource fits content; author/editor and renderer preserve required features; effects are authorized | Choose compatible project tools and direct operations; acquire only missing dependencies |
| Visual direction | Existing accepted brand/layout or a representative real-content draft | Make a justified initial choice; wait if the user reserved this decision or a consequential preference remains unresolved |
| Revision | Preview matches current source; feedback has a target and scope | Repair within scope; preserve direct user edits; clarify conflicting or stale targets |
| Delivery | Exact exported deck passes requested content, native-feature and visual checks | Export under existing authority; respect an explicit review-before-export checkpoint |

The checkpoints are mandatory obligations, not mandatory approval prompts or
state files. A precise authorized edit can proceed using existing direction.
Silence never satisfies an explicitly reserved user review. New feedback reopens
only the affected decision and dependent checks.

## Choose the operation

| Need | Recommended starting choice | When another choice fits better |
| --- | --- | --- |
| New editable deck with conventional text, shapes, tables and charts | PptxGenJS, especially for JS/browser projects | python-pptx when Python data preparation or existing native source is central; retain another suitable project producer |
| Edit a supplied PPTX | Existing project producer or python-pptx for features it can edit and preserve | Native application integration when unsupported masters, embedded content, animation or other preservation requirements demand it |
| Preview for a PowerPoint audience | Export the exact deck through an admitted PowerPoint binding | LibreOffice rendering where available and its observed layout differences are acceptable |
| Unattended local document conversion | An admitted LibreOffice CLI with the appropriate export filter | Another renderer required by the intended consumer or fidelity constraints |
| Browser slides or motion, without native PPTX requirements | Keep the project's HTML/React source and browser rendering | A native producer when editable PowerPoint objects are required |

These recommendations are task-fit judgments. PptxGenJS documents native
[generation and JS/browser integration](https://gitbrent.github.io/PptxGenJS/docs/introduction/);
do not infer an existing-deck editor from its creation API. python-pptx documents
[opening, creating and saving presentations](https://python-pptx.readthedocs.io/en/latest/user/presentations.html),
but a successful round trip of one feature does not prove every feature survives.
[PowerPoint slide export](https://learn.microsoft.com/en-us/office/vba/api/powerpoint.slide.export)
and [LibreOffice conversion filters](https://help.libreoffice.org/latest/en-US/text/shared/guide/convertfilters.html)
are independent rendering/export interfaces. Recheck current interfaces and
platform support when binding them; no local installation is implied here.

The maintained runnable authoring examples cover PptxGenJS and python-pptx. The
renderer entries are provider-documented choices, not bundled renderer adapters;
verify the selected route against the actual artifact.

Compare visual quality, editable features, existing project fit, setup cost and
revision speed on representative content. Reuse a suitable producer; switching
languages solely to follow an example adds no value. Do not promise identical
output across rendering engines or fonts.

## Compose at explicit boundaries

For deck narrative assembly, placement of an accepted representation,
multilingual typography, contrasting evidence treatments and repair recipes, read
[presentation design](presentation-design.md). Route a materially open information
encoding through visualization design first; do not create a second chart or
diagram decision here.

- Content supplies accepted wording, values and assets; a template contributes no
  factual authority. Keep a project's content and styling independently editable
  when that helps revisions.
- Layouts and components produce native objects in the selected author's model.
  A provider-specific layout is not automatically executable by another author.
- Styles supply font/color/spacing choices. Check font availability and content
  capacity when reusing a style; long text may require a different layout.
- Authoring produces editable PPTX. Rendering consumes that PPTX plus its fonts
  and linked inputs; it has no dependency on the author's language or installer.
- Structural checks consume the native artifact; visual review consumes a render
  of that exact revision. Image previews cannot substitute for editable objects.

Conversions are explicit operations with their own losses. HTML screenshots can
be placed on slides as images, but that composition fails a requirement for native
editable text. Switching from authoring to render-only does not acquire an author.

## Maintained starting resources

These small original resources are examples to copy and adapt into a project.
Their source is maintained here; installed packages, fonts and generated outputs
are separate. Keep project copies and edits when the library changes. No external
template, media or font payload is bundled.

| Resource | Contribution and compatibility |
| --- | --- |
| [brief.json](../assets/presentation/brief.json) | Synthetic content shared by the two examples; replace it with accepted content |
| [styles.json](../assets/presentation/styles.json) | Light and dark treatments; hexadecimal RGB colors and a font name, supported by both examples |
| [native-js.mjs](../assets/presentation/native-js.mjs) | PptxGenJS title, comparison and closing layouts; each exported function can add native objects to an existing PptxGenJS slide |
| [native-python.py](../assets/presentation/native-python.py) | Short-deck functions plus a bounded native chart/table evidence composition; Python-specific resources need not mirror JS |
| [evidence.json](../assets/presentation/evidence.json) | Synthetic categorical data and notes; `briefing` and `report` choose different structures using the Python author |
| [edit-text.py](../assets/presentation/edit-text.py) | Unique run replacement in text shapes, nested groups and table cells; optional explicit cross-run span and current shape ID |

The JSON files are example data, not a universal presentation schema. The short
layouts target wide slides and short content; the evidence resource separates
data and supporting notes. Inspect wrapping and clipping after changes.
The examples create native objects and refuse an existing output path.
They neither install tools nor render, publish, or claim visual completion.

In a destination project with the chosen dependency already admitted, copy the
selected author source, brief and styles, then run **one** author:

```sh
node native-js.mjs brief.json styles.json paper deck.pptx
```

```sh
python -I -B native-python.py brief.json styles.json night deck.pptx
```

The JS example uses PptxGenJS; the Python example uses python-pptx. Inspect the task
root and available tools, then follow the project's manager and constraints. If the
selected dependency is missing and installation is authorized, this presentation
route supplies the concrete package and entrypoint while
[minimal project environments](../../system-mutation/references/project-environments.md)
supplies setup mechanics. Dependency commands edit project manifests/locks and may
download packages; keep new dependencies and caches in that project.

For a uv-managed Python project:

```sh
uv add python-pptx
uv run python -I -B native-python.py brief.json styles.json night deck.pptx
```

For an existing Node/npm project:

```sh
npm install pptxgenjs
node native-js.mjs brief.json styles.json paper deck.pptx
```

For a user-selected compatible Deno project, `deno add npm:pptxgenjs` records the
dependency; derive the smallest file/environment permissions from the copied source
and current Deno interface before invoking it. The maintained JS comparison runs
under Node, so an unexecuted Deno route is not compatibility evidence. Follow the
corresponding native workflow for Bun or another selected manager instead of
migrating it to these examples.

Node resolves imports from the project containing the copied source. Run the
selected author and inspect its result; no installer bundle or generic probe is
required. Rendering remains an independent operation.

## Resource reuse and rendering

### Select, acquire and keep resources useful

Inspect the supplied project's brand, templates and edits first. Choose resources
by message, content capacity, native editability and dependency fit. The original
resources above can be copied and adapted into task projects; no upstream assets
are bundled and no separate asset redistribution license is declared here. Record
the checkout revision or source digest with a project copy when reproducibility
or updating matters. Runtime package/font licenses are separate.

For an optional concrete visual source, ppt-master's
[horizontal bar chart SVG](https://github.com/hugohe3/ppt-master/blob/3ad8052e97dd35cc57ae8c30442a5b8b5811e5eb/skills/ppt-master/templates/charts/horizontal_bar_chart.svg)
is a fixed-canvas categorical example under that revision's
[MIT license](https://github.com/hugohe3/ppt-master/blob/3ad8052e97dd35cc57ae8c30442a5b8b5811e5eb/LICENSE).
Fetch the selected file and applicable notices into an unused project destination;
inspect its labels, drawn geometry and embedded chart metadata together. Adapt
all representations of each value, units and source, then render it. Direct SVG
placement does not create an editable PowerPoint chart: use a native chart
producer when required. This is a source reference, not a tested invocation of
ppt-master's complete exporter.

If an optional source is unavailable, use the maintained native example when it
fits, or author the missing layout. Do not drop content to fit an available
template. Warm offline work reuses local resources/dependencies; cold offline
acquisition is not promised. Upstream changes never overwrite project copies:
compare an explicitly selected new version against local edits before updating.

### Render the selected native deck

For a LibreOffice route, bind its executable and prepare a task-owned profile and
output directory. A typical selected export is:

```sh
soffice -env:UserInstallation=file:///absolute/task-profile --headless --convert-to pdf:impress_pdf_Export --outdir preview deck.pptx
```

Use the host's correctly encoded absolute profile URI and exact executable;
profile/output creation is an effect. Reopen the resulting PDF and inspect the
relevant pages through [PDF operations](pdf.md). This is a LibreOffice rendering
claim. A PowerPoint fidelity claim needs the corresponding native engine.

For paths with spaces/non-ASCII characters, pass separate arguments and construct
the profile URI with the runtime's path API. In a Python task with an already
selected `soffice` executable:

```python
from pathlib import Path
import subprocess

profile = Path("render-profile").resolve()
preview = Path("preview").resolve()
preview.mkdir(exist_ok=False)
subprocess.run([soffice, f"-env:UserInstallation={profile.as_uri()}",
                "--headless", "--convert-to", "pdf:impress_pdf_Export",
                "--outdir", str(preview), str(Path("deck.pptx").resolve())],
               check=True, timeout=120)
```

A fresh destination avoids stale output; reopen the new PDF because exit status
alone may not establish conversion success. Keep the owned profile until its
process exits. Choose time bounds for the real deck. LibreOffice's
[CLI documentation](https://help.libreoffice.org/latest/en-US/text/shared/guide/start_parameters.html)
governs flags. Headless still needs platform libraries and fonts. Discover
executable/package locations on the host; the skill has no fixed Office/browser
path. Linux/macOS descriptions are not native execution evidence. Windows Office
COM automation is a separate conditional integration; it does not describe the
macOS automation interface.

For desktop Office, preserve user sessions and use the admitted integration's
process/document lifetime rules. A generic process-kill helper does not establish
ownership of a COM application. Do not install or start Office merely to author.

## Useful edit recipes

For a local text edit, identify the slide/object in the current native source,
change the required runs while preserving formatting, reopen, and render the
affected slide. Avoid replacing the whole text frame when run formatting matters.

For the sample's single-run heading, the independent edit operation is:

```sh
python -I -B edit-text.py deck.pptx 2 "Independent" "Individually useful" revised.pptx
```

For a phrase crossing formatted runs, first inspect its current shape ID, then
opt into span matching (the ID below is illustrative):

```sh
python -I -B edit-text.py source.pptx 1 "North region" "Central area" revised.pptx --span --shape-id 7
```

Replacement inherits the first touched run's formatting; untouched prefixes,
suffixes and runs keep their formatting. If replacement segments need different
formatting, edit those runs through the native API. Without `--span`, exact-run
matching remains. A current leaf shape ID narrows group edits; a table shape ID
narrows cell search. Missing/duplicate matches fail. Span editing refuses target
paragraphs containing fields or explicit breaks.

This operation reserializes the package; it does not promise byte-identical ZIP/XML
or preservation of unsupported features. Inspect a supplied deck under the Office
contract before selecting it. A locator belongs to the inspected revision;
reconcile stale feedback against current source before invoking the edit.

For a global style edit, change the chosen project style/theme and regenerate only
when the generator remains the source of truth. Preserve direct edits to an
existing PPTX; inspect and edit that artifact instead of silently rebuilding it.

For overflow, first adjust wording only within the accepted content scope, then
layout capacity or slide count. Do not hide the problem through indiscriminate
font shrinking. Render again and check that the requested content is still present.

For an uncertain visual direction, show representative real-content treatments
when helpful, retain the chosen direction, and honor any agreed review checkpoint.
Ordinary revisions proceed within existing authorization. Bind previews to the current source;
check the final export after changes. Reuse unchanged derived work when its source,
engine, fonts and relevant assets are unchanged.

## Maintain the examples

Run the native checks with a Python environment containing python-pptx.
For the optional JS comparison, set DOTSKILL_TEST_JS_PROJECT to an existing Node
project containing PptxGenJS; Python checks do not require that project or Node.
From the skill repository root:

```sh
python -I -B -m unittest discover -s document-artifacts/tests -p test_presentation_examples.py
```

The checks create owned temporary copies and remove them; JS copies live inside
the selected JS project for dependency resolution. They install nothing.
Missing JS prerequisites skip only the JS comparison; a skip proves no
compatibility. These checks establish native content/edit behavior, not rendering.
