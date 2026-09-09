# Motion operations and recipes

Recommend a composition from the source, intended result and iteration needs.
Choose each operation independently; a rendering request does not require a new
project scaffold, authoring framework, or asset-generation service.

For narrative beats, landscape/portrait adaptation, readable holds and feedback
repair, read [composition design](composition-design.md).

## Useful choices

| Need | Starting recommendation | Compatibility and tradeoff |
| --- | --- | --- |
| Short HTML-based motion with visual preview and timeline tooling | HyperFrames when those project tools are useful | Uses its composition/timeline contract; inspect browser, media and first-use acquisition separately |
| Existing React motion or data-driven React composition | Remotion | Preserve React source and frame semantics; renderer, browser and deployment requirements remain explicit |
| A small, trusted HTML/GSAP composition needing local stills or a short frame sequence | Direct browser capture, such as the maintained example below | Minimal project ceremony; the example supports its declared GSAP source subset, not arbitrary video, audio or web applications |
| Encode, transcode or package existing frames/media | An admitted FFmpeg operation | Requires explicit frame rate, dimensions, pixel format, codec and any audio synchronization; does not author the scene |
| Reuse a supplied animation project | Its existing suitable producer and renderer | Avoid migrating source solely to follow a recipe; verify features before substituting an operation |

These are conditional recommendations, not a performance ranking.
[HyperFrames CLI documentation](https://hyperframes.heygen.com/packages/cli)
separates preview, rendering and inspection; it also describes browser acquisition
and update checks. Its [HTML schema](https://hyperframes.heygen.com/reference/html-schema)
defines timeline registration and media inputs.
[Remotion rendering](https://www.remotion.dev/docs/renderer/render-media)
consumes a selected composition and bundle; verify its current
[license terms](https://www.remotion.dev/docs/license) for the intended usage.
[FFmpeg image-sequence input](https://ffmpeg.org/ffmpeg-formats.html#image2-1)
provides a separate encoding edge. An MP4 requirement does not dictate the authoring
language or operating system.

## Atomic resources and edges

Content, a style, layout components, motion primitives and media each contribute
different things. Reuse them only where their actual representation fits. A GSAP
timeline is not a Remotion component; conversion requires a deliberate mapping of
timing and effects. Shared colors or source images may be reusable without that
mapping. Keep a composed example alongside independently editable parts.

Capture consumes source, assets, fonts, a selected time/frame and a renderer.
Encoding consumes frames/media plus timing and output settings. Inspection consumes
the exact exported result. Replacing an encoder should not change the authored
timeline; changing a caption should not reinstall a browser.

## A small HTML example

### Resource selection and reuse

Prefer the supplied project's composition and assets when they fit the brief.
The original resources here are editable project starters with no bundled
third-party payload or separately declared asset redistribution license:

| Resource | Use and editable parts | Constraints and preview |
| --- | --- | --- |
| [index.html](../assets/html/index.html), [style.css](../assets/html/style.css), [motion.js](../assets/html/motion.js) | One-scene card explanation; wording, palette and reveal timing are separate | Short wide composition; capture its reading hold with the command below |
| [scenes.html](../assets/html/scenes.html) | Question/observation sequence; two layout treatments, explicit scene holds | Six-second local GSAP example; [portrait and preview recipe](composition-design.md) |
| [capture.mjs](../assets/html/capture.mjs) | Still or frame-sequence output from the declared source contract | Explicit browser; bounded scope; no setup, encoding or media playback |

Copy only the selected files into the project, retain the source revision/digest
when needed for reproducibility, and use that project's local dependencies.
Existing project edits remain authoritative when this resource library changes.
An update compares selected source against the project copy; it never silently
reinstantiates the project. Offline reuse needs previously available local assets
and tools, not an online catalog.

An optional upstream example is HyperFrames'
[AI chat reveal](https://github.com/heygen-com/hyperframes/blob/1aa5b9e4fac929ca1cf097e3a99c075fada7a37f/docs/public/catalog/blocks/ai-chat-reveal.json),
a 1080×1920, approximately 19.33-second HTML composition. The pinned JSON contains
an `html` value, including content-variable descriptions; inspect its declared
capacity before lengthening the conversation. Read that revision's
[license](https://github.com/heygen-com/hyperframes/blob/1aa5b9e4fac929ca1cf097e3a99c075fada7a37f/LICENSE)
and any applicable notices/asset terms before reuse. Its source references CDN
GSAP, a catalog base URL and a catalog-relative SVG: saving the HTML alone does
not make an offline project. Resolve those selected dependencies, rewrite project
paths, replace illustrative claims with accepted text, and inspect the timeline
contract before choosing capture/export. No upstream lifecycle prompts, telemetry,
upgrade policy or preview-approval policy are imported with a resource.

If optional acquisition fails, use a compatible local starter or author the
required scene. Do not install a catalog service or choose an incompatible source
just because it is available. The upstream example is inspected source evidence;
the maintained local examples are the executed routes.

### Capture the local example

The original [HTML source](../assets/html/index.html),
[visual style](../assets/html/style.css) and
[motion primitives](../assets/html/motion.js) make a five-second composition.
The `reveal` function can be used separately; the final timeline composes its calls.
Copy these sources into a destination project and preserve that project's edits.
The source references a project-local GSAP installation; no CDN asset or dependency
payload is bundled in the skill. Its content is illustrative, not factual evidence.

The [capture example](../assets/html/capture.mjs) is a separate operation using
Playwright Core and an explicitly selected compatible Chromium executable. It
executes trusted local source, creates a separate browser context, captures PNG,
and closes the browser. It installs nothing and does not encode. Browser
compatibility must be observed; Playwright cautions that arbitrary
[browser executables](https://playwright.dev/docs/api/class-browsertype#browser-type-launch-option-executable-path)
may not work with a given release.

Use the project's chosen package manager to acquire only the needed dependencies
under existing authority: GSAP for this source, Playwright Core for this capture
example, and a browser if none is compatible. Use an admitted FFmpeg only for video
encoding. Follow [minimal project environments](../../system-mutation/references/project-environments.md)
for direct setup in the task root, including local caches. A still-only request needs
no encoder. Other sources/providers have their own dependency closure.

After copying the selected files and admitting dependencies in that project:

```sh
node capture.mjs still index.html /absolute/browser preview.png 2.8
```

The final argument is seconds. For a sequence, it is frames per second:

```sh
node capture.mjs frames index.html /absolute/browser frames 30
```

The example reads integer dimensions from the source: at most 4096 per side and
8,294,400 pixels, at most 30 seconds and 600 captured frames. Font readiness has
a ten-second wait; a 120-second deadline closes the owned browser if work stalls.
Choose a suitable renderer for larger or different source contracts. These are
example bounds, not skill-wide requirements. It uses
[GSAP seeking](https://gsap.com/docs/v3/GSAP/Timeline/seek()/),
waits for document font loading, and rejects page errors and attempted HTTP loads.
Font loading completion does not prove the requested typeface or glyph coverage;
inspect representative text in the actual export.
This is not a hostile-code sandbox, an audio renderer, or host-wide network isolation.
It refuses existing output paths. Failed sequences may leave partial frames at the
requested destination; preserve/reconcile them before retrying. Parent-process
termination and browser recovery still follow the invoking environment's rules.

Encode the generated numbered PNGs separately, using the same input frame rate:

```sh
ffmpeg -nostdin -n -framerate 30 -start_number 0 -i frames/frame_%06d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,nb_frames:format=duration -of json output.mp4
```

Check encoder availability before selecting H.264. This recipe has no audio. Other
frame rates, alpha, HDR or audio need their own output contract. Generated frames
are already a usable output for a request that stops before encoding.

For a simple local audio track, use FFmpeg's own timeline/filter operations.
For example, when the intended picture is six seconds and a voiceover begins
half a second after its start:

```sh
ffmpeg -nostdin -n -i silent.mp4 -i voice.wav -filter_complex "[1:a]atrim=0:5.5,asetpts=PTS-STARTPTS,adelay=500:all=1,apad[a]" -map 0:v:0 -map "[a]" -c:v copy -c:a aac -t 6 narrated.mp4
ffprobe -v error -show_entries stream=codec_type,width,height,r_frame_rate,duration:format=duration -of json narrated.mp4
```

Choose trim/delay/duration from the actual brief, inspect synchronization and
listen when audio quality is required. Do not use `-shortest` to silently truncate
required picture or voiceover. This is a mux/filter operation, not a browser audio
capture claim. See [FFmpeg filters](https://ffmpeg.org/ffmpeg-filters.html) for the
selected filter's current interface. Complex clip seeking uses the project's
media-capable engine rather than this screenshot helper.

The HTML example uses the documented root/timeline registration convention also
used by HyperFrames. This does not establish that its full CLI/export lifecycle
has been tested here. Bind and validate that renderer before substituting it.

## Revision and verification

For a timing edit, change the selected primitive's start/duration and inspect the
transition plus the following hold. For a style edit, change project CSS and
verify text fit without retiming. For a caption edit, preserve the source structure
and check the newly rendered region. Export again from the revised source.

For deterministic sampling, seek to the same time before and after another time
and compare the result within the same renderer/input environment. Inspect
representative transitions and holds, then check the actual encoded video. A
sampled frame can miss motion defects; it is not complete animation review.

Retain the source, selected assets and enough invocation context to reproduce the
result. Clean task-owned capture frames and preview processes after their consumers
finish. Optional media generation and publication remain separately selected
operations with their own authority and effects.

## Maintain the example

Set DOTSKILL_TEST_JS_PROJECT to an existing project containing GSAP and Playwright
Core, and DOTSKILL_TEST_BROWSER to a compatible browser executable. From the skill
repository root:

```sh
node --test motion-graphics/tests/composition.test.mjs
```

The checks use owned temporary project copies and close their browsers. They
install nothing; missing bindings skip the suite. They cover capture, repeatable
seeking, scoped style/timing changes and incompatible input. Encoding and visual
judgment remain separate checks on the requested output.
