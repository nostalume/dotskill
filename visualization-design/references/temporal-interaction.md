# Temporal and Interaction Design

Use time or interaction only when it improves the audience's ability to recover
meaning, compare states, follow change, understand continuity or take an intended
action. A static representation remains preferable when motion merely decorates or
interaction merely hides information.

This reference owns temporal and interactive judgment. The maintained HTML assets
below are a conditional executable prior for one trusted local capture route; they
do not define the general capability, aesthetic, duration or framework.

## Model time and state explicitly

Define the identity of the composition or interactive view, admitted inputs,
dimensions, duration or legal states, initial state, transitions and terminal
conditions. Keep an exported frame or recording a derived view of authoritative
source, not another editable owner.

For deterministic export, visible state must be a function of selected time/state
and admitted inputs. Wall-clock timers, live remote data, unseeded randomness,
unsynchronized media and hidden readiness can make preview differ from export.
Use the selected engine's seeking, readiness and resource-lifecycle contract.

For interaction, establish the user actions and state changes that answer the
visual question. Cover initial, changed, selected, loading, empty, error,
cancelled and reduced-capability states where they can occur. Preserve keyboard,
focus, reading order, text alternatives and reduced-motion behavior appropriate to
the carrier. Do not claim interaction from screenshots or from source structure
alone.

## Compose readable change

Choose a beat or state sequence from accepted content. A question followed by an
observation, before/change/after, or explanation/example can be useful, but these
are optional structures rather than fixed scene counts.

- Give each state or scene a purpose and enough stable time for its real content.
  Do not infer a universal reading duration from word count.
- Use motion to reveal order, continuity, spatial relationship, causally supported
  change or attention. Avoid simultaneous competing movement.
- Stagger entrances only when it clarifies order. Leave a readable hold after
  important information arrives; do not begin an exit before the result can be
  understood.
- Preserve stable spatial relationships across states when they carry meaning.
  Varied transitions without semantic purpose add noise.
- Keep content, layout, visual style, reusable motion primitives and media separate
  where the requested revisions need independent ownership.

Preserve brand identity and typographic character while adapting scale, spacing
and contrast to the delivery carrier. Small labels and faint boundaries can fail
after downscaling or compression. Landscape and portrait need deliberate reflow,
not cropping; use actual platform safe areas when supplied rather than inventing a
universal margin. Test the longest labels, qualifications and source marks at final
size. Font readiness does not prove the requested face or glyphs were used.

For audio or authored clips, establish trim points, offsets, playback rate,
duration, readiness and a shared time basis. Browser screenshots do not establish
media playback or audio capture. Use a media-capable timeline for complex clip
seeking or audio automation instead of stretching the maintained still/frame
helper into a video editor.

## Select operations independently

Choose authoring, preview, rendering, capture, encoding and inspection separately
under [execution and effects](execution-effects.md). Reuse an existing suitable
animation or interactive project. A React/video framework, paused browser
timeline, native animation system or another engine can be compatible when its
source, state and rendering contracts fit. Verify the selected version, project
dependencies and license rather than importing an ecosystem by name.

Capture consumes trusted source, selected assets/fonts, a time/state and a
renderer. Encoding consumes frames/media and explicit timing/output settings.
Inspection consumes the exact exported artifact. Replacing an encoder should not
change authored timing; changing a caption should not reinstall a browser. A
GSAP timeline is not automatically a component in another runtime—conversion
requires a deliberate mapping of time, state and effects.

## Use the maintained HTML example

Prefer current project source and assets when compatible. The maintained resources
are editable starters with illustrative content and no bundled third-party
payload:

| Resource | Selected use | Boundary |
| --- | --- | --- |
| [index.html](../assets/html/index.html), [style.css](../assets/html/style.css), [motion.js](../assets/html/motion.js) | Five-second card explanation with independently editable wording, palette and reveal timing | Short wide composition; requires a project-local GSAP payload |
| [scenes.html](../assets/html/scenes.html) | Six-second question/observation sequence with distinct landscape and portrait treatments | Illustrative content; adapt geometry and inspect holds |
| [capture.mjs](../assets/html/capture.mjs) | Produce one PNG still or a bounded numbered PNG sequence from the declared seekable source contract | Trusted local HTML only; explicit compatible browser; no setup, encoding, audio or arbitrary web-app support |

Copy only selected files into the task project and use its dependency workflow.
Revise the project copy, never the installed skill asset. Preserve direct project
edits when the starter changes. Offline use requires already available assets and
tools; do not add an online catalog merely to obtain a template.

The source expects a root with `data-composition-id`, positive integer dimensions,
a positive duration and a matching `window.__timelines[id].seek` function. The
capture operation uses Playwright Core with an explicitly selected browser
executable. Playwright documents that an arbitrary
[executable path](https://playwright.dev/docs/api/class-browsertype#browser-type-launch-option-executable-path)
may be incompatible with its release, so observe compatibility rather than
assuming it.

After copying the selected files and admitting GSAP, Playwright Core and a
compatible browser in that project:

```sh
node capture.mjs still index.html /absolute/browser preview.png 2.8
node capture.mjs frames index.html /absolute/browser frames 30
```

For `still`, the final value is the selected time in seconds. For `frames`, it is
an integer frame rate. The helper admits sources at most 4096 pixels per side,
8,294,400 pixels in total and 30 seconds, and produces at most 600 frames. It
bounds launch/readiness/capture work, blocks service workers and HTTP requests in
the owned browser context, rejects page/resource errors and refuses existing
output paths. These are example bounds, not general skill policy. Browser request
blocking is not host-wide network isolation, and this helper is not a hostile-code
sandbox.

The example uses deterministic [GSAP timeline seeking](https://gsap.com/docs/v3/GSAP/Timeline/seek()/).
It waits for document font loading, but representative text still requires visual
inspection. Failure may leave a partial frame directory at the requested path;
preserve or reconcile it before retrying. Parent-process termination and browser
recovery remain the invoking environment's responsibility.

When the accepted result is encoded video, encode the numbered images separately
with an admitted FFmpeg and the same frame rate:

```sh
ffmpeg -nostdin -n -framerate 30 -start_number 0 -i frames/frame_%06d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,nb_frames:format=duration -of json output.mp4
```

FFmpeg's [image-sequence input](https://ffmpeg.org/ffmpeg-formats.html#image2-1)
is an encoding edge, not an authoring system. Check that the selected encoder and
codec exist. Alpha, HDR, audio or another frame rate needs its own output contract.
Frames can be a complete requested result when encoding was not requested.

For a simple admitted audio track, FFmpeg filters can trim, offset, pad and mux it
after picture encoding. Choose values from the actual brief, probe synchronization
and listen when audio quality is claimed. Do not use a convenience duration rule
that silently truncates required picture or sound. Consult the selected version's
[filter documentation](https://ffmpeg.org/ffmpeg-filters.html); use a suitable
media timeline for more complex work.

## Revise and verify

Map feedback to the exact preview, source revision, element and time/state the
user observed. If source changed, reconcile identity before applying the edit.
Preserve direct editor changes; do not replay them as a second instruction.

| Requested change | Preserve | Inspect |
| --- | --- | --- |
| Wording or caption | Accepted meaning, source role and intended scene/state | Affected region at its readable hold plus reflow |
| Color, type or visual style | Information, order and timing unless separately requested | Contrast, font/glyph use and fit across dependents |
| Entrance or transition | Unrelated motion and final state | Before/during/after plus the following hold |
| Scene duration or order | Content; update the now-global timeline intentionally | Neighbor transitions, media/captions and total duration |
| Render only | Exact current source and prior accepted direction | Source/output identity and the selected output evidence |

Seek to the same time before and after another time to test determinism within one
renderer/input environment. Inspect representative transitions and holds, then the
actual encoded artifact. Sampled frames can miss flicker, continuity defects and
audio drift; metadata alone cannot prove pacing or visual quality.

Stop when applicable semantic, visual, temporal, interactive, accessibility and
operational checks support the requested claim. Otherwise report the particular
unmet obligation. Retain source and enough invocation context for reproduction;
clean owned frames and preview processes after their consumers finish. Media
generation and publication remain separate authorized effects.

## Maintain the example

Set `DOTSKILL_TEST_JS_PROJECT` to an existing project containing GSAP and
Playwright Core and `DOTSKILL_TEST_BROWSER` to a compatible browser executable.
From the skill repository root:

```sh
node --test visualization-design/tests/composition.test.mjs
```

The suite installs nothing and uses owned temporary project copies. Missing
bindings skip it rather than claim compatibility. Its eight tests cover
independent still/frame capture, existing-output preservation, repeatable seeking,
scoped style/timing edits, portrait geometry, incompatible dimensions/source,
remote-resource refusal, bounded font readiness, missing browser and unusable
destinations. Encoding, continuous aesthetic review and general interaction
remain separate evidence.
