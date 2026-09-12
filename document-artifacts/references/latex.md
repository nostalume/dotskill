# LaTeX artifacts

Use this reference for LaTeX source authoring, editing, project builds, and
validation of their derived output. Source remains canonical. PDF-to-LaTeX
reconstruction is not a source round trip; standalone PDF operations belong to
[PDF operations](pdf.md). Domain owners supply accepted content and citation meaning.

## Preserve the project and its compatibility

Identify the entry file, document class/options, engine, declared build command,
included sources, assets, packages, bibliography/index backend, fonts/encoding,
and output conventions. Read relevant configuration and local class/package code.
Preserve that graph and maintained style; do not flatten a project or replace its
preamble to fit a preferred engine. For new work, choose the smallest source and
dependencies that meet the requested content and consumer constraints.

LaTeX core, engines, classes, and packages have separate interfaces. Use the
[LaTeX Project documentation](https://www.latex-project.org/help/documentation/)
and the selected engine/class/package manuals compatible with the project.
Installed documentation can establish version compatibility; current online
documentation does not authorize upgrades. Resolve non-core commands from their
defining package or local macro, not from another paper's preamble. For basic
syntax, the project's linked [Learn LaTeX course](https://www.learnlatex.org/)
provides focused lessons rather than a universal document template.

## Author in the correct context

| Decision | Instruction |
| --- | --- |
| Commands and environments | Check mandatory/optional arguments and match environment names. Braces delimit arguments or groups; preserve grouping and local scope when moving declarations. Distinguish a command definition from a call. |
| Literal text | Characters such as `%`, `&`, `_`, `#`, and braces have syntax roles. Escape accepted literal text for its actual context; do not globally escape source, math, URLs, or verbatim content. Verbatim commands/environments have restrictions inside arguments. See [document structure](https://www.learnlatex.org/en/lesson-03). |
| Text and math | Preserve inline versus display math and use the selected math package's commands/environments. A text font does not establish a math font or symbol repertoire. Check grouping, alignment, numbering, and rendered symbols against accepted meaning. See [mathematics](https://www.learnlatex.org/en/lesson-10). |
| Labels and references | Place a label after the command that establishes the intended counter, such as a section command or float caption. Resolve duplicate/missing keys and rerun diagnostics; a printed `??` is unresolved output. See [cross-referencing](https://www.learnlatex.org/en/lesson-09). |
| Citations | Preserve citation keys, database, style, and backend. BibTeX and Biber are not interchangeable commands. Consult the selected package's manual, such as [biblatex](https://ctan.org/pkg/biblatex), and check the final bibliography against the accepted sources. |
| Tables and figures | Separate tabular content from a table float; placement requests do not promise exact position. Preserve captions, labels, units, graphics paths, and reading order. Use the defining package's interface for multipage tables or unusual graphics. Inspect the rendered placement and overflow. See [tables](https://www.learnlatex.org/en/lesson-08). |
| Engine and fonts | Preserve the required engine and font setup. For example, [fontspec](https://ctan.org/pkg/fontspec) targets XeLaTeX/LuaLaTeX, not pdfLaTeX. Unicode input support does not guarantee shaping or glyph coverage. Check the required scripts and math with the actual fonts; do not silently remove font requirements or change engines. |

Apply [forward representation fidelity](representation-fidelity.md) before
emitting LaTeX source for structured content. Build mathematics from the accepted
expression tree, using groups and the selected math interface to preserve
precedence, numerator/denominator boundaries, attachment scope, identifiers, and
inline/display role. A compiling string that prints plausible glyphs is not proof
of the intended tree.

Keep a table float distinct from its tabular structure, and keep outer placement
distinct from cell or equation alignment. Size against the effective local region,
such as the current line or column, rather than assuming the whole page. For an
accepted relation graph, use a project-compatible native/package construction or
declared-loss asset only after representation selection; do not substitute ASCII
arrows because a preferred package is unavailable.

Treat overfull output as a capacity failure to diagnose at its earliest layer.
Rebalance or reflow the representation, wrap labels, split separable content, or
use an authorized wider region before scaling or cropping. Preserve the selected
class, engine, and package authority; resolve their concrete commands and layout
behavior from compatible documentation.

## Admit the build graph and its effects

Use the declared project command after inspecting its effects. When no build
command exists, select a compatible engine and a fitting maintained build tool
when dependencies require it. [latexmk](https://ctan.org/pkg/latexmk) can manage
reruns and bibliography/index dependencies; it is not a new project requirement.
Do not prescribe a fixed two-pass recipe for every document. Necessary internal
passes belong to one bounded build of the same source revision.

Before even probing a build tool in a project directory, inspect configuration
that it may load automatically, including user/system configuration where
applicable. A latexmk rc file is executable Perl; Makefiles, custom dependency
rules, and engine Lua code can also execute operations. Use the selected tool's
documented configuration controls to exclude unadmitted configuration without
silently dropping configuration the project requires.

Disabling shell escape does not sandbox untrusted TeX, Lua, or build configuration.
The working directory and output-directory option do not confine filesystem
access. Use an admitted isolation boundary appropriate to the source and its
dependencies; if unavailable, inspect source only and report the execution limit.
Do not enable shell escape merely to clear an error. Required external programs,
remote bibliography sources, and generated graphics must fit the admitted graph.

Bind exact engine/build/backend identities and versions, project working directory,
entry file and source identity, dependency search paths, explicit target and
scratch outputs, diagnostics, and aggregate time/resource limits. Probe compatible
version/help interfaces without loading untrusted configuration. Derive options
from those interfaces; flags and output-directory behavior vary across providers.
Use noninteractive failure behavior and source-located diagnostics where supported.
Include dependency records, such as recorder output, when the claim needs them.

Package/font acquisition is separate from compilation. For example,
[MiKTeX can install missing packages automatically](https://miktex.org/howto/miktex-console).
Establish the actual acquisition policy before invoking the producer and use
supported per-call controls where possible. Global settings changes and package
installation are not implicit compile steps. A missing dependency routes through the shared
execution contract and existing acquisition authority. Keep runtime inventories
and paths with the execution result, not in this reference.

## Build, diagnose, and validate the exact output

Build into distinct task-owned output/auxiliary scope while preserving relative
input resolution and the prior valid deliverable. If the build cannot redirect
outputs safely, use an admitted isolated project copy that retains its source
graph. Preserve supplied `.bbl` files when they are irreplaceable inputs; an
auxiliary-looking extension does not establish ownership or disposability.

Bind the output to the current source revision and completed build. File existence
or a recent timestamp alone cannot distinguish a stale PDF from a successful run.
For reused build state, establish dependency freshness from the build evidence;
otherwise use fresh owned output scope. Never report an old PDF as the result of
a failed build, and never remove the user's good PDF to simplify that check.

Inspect engine and backend diagnostics, unresolved references/citations, requested
reruns, missing glyphs/fonts, and layout warnings. Stop when a required dependency
is unavailable or the aggregate build budget is exhausted. Do not force processing
past errors and call the resulting PDF complete. A source correction creates a new
revision and permits another build; unchanged inputs do not justify duplicate work
after all requested checks have passed. Avoid watch, preview, printing, installation,
and broad clean commands unless their effects are part of the request.

Match checks to each fidelity claim:

- Semantic: compare accepted text, equations, values, references, and citations;
  successful syntax does not establish mathematical or bibliographic correctness.
  Inspect grouping, attachment scope, relation paths, table schema, and live target
  bindings when they are part of the accepted representation.
- Structural: inspect completed engine/backend results, dependency and rerun state,
  and the exact derived artifact. Undefined references/citations remain unresolved
  even when the producer exits successfully.
- Visual: inspect affected pages for float placement, table boundaries, page breaks,
  overflow, glyph coverage, math, and fit/alignment inside the effective region.
  Evaluate layout warnings against the rendered result; do not hide material
  overflow by weakening diagnostics or changing style.
- Accessibility: when claimed for the selected output, inspect required reading
  order, structure, links, and alternatives with a compatible target-aware
  mechanism; source organization or painted appearance alone does not prove them.

Return source/output identities, engine/build/backend evidence, performed and
skipped checks, unresolved diagnostics and dependencies, losses, effects, and
recovery through the shared artifact result. Report source review without a
compiler as source review, not compilation or visual validation. Remove only
owned scratch and auxiliaries after checks; preserve original sources, required
project inputs, and prior valid output. Verify removal and report cleanup failures
separately from build results.
