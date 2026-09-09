# Compose and revise motion

Use with [operation recipes](operations.md) for scene design, pacing and scoped
feedback. The project's source/timeline stays authoritative; an exported frame
is a derived view, not another editable source.

## Purpose, structure and readable time

Choose a beat sequence from accepted content: question -> observation -> meaning,
before -> change -> after, or explanation -> example. These are optional narrative
structures, not fixed scene counts. Each scene needs a clear purpose and enough
stable time to read its content. Do not infer a fixed reading duration from word
count alone; inspect at the intended playback size and pace.

Preserve brand colors, identity assets and typographic character. Adapt scale,
spacing and contrast for video: small web labels and faint boundaries can vanish
after downscaling/compression. Decorative movement is optional. Technical or calm
work may need one focal point and almost no ambient motion.

Animate to reveal order, continuity or relationships. Stagger competing entrances,
leave a hold after important information arrives, and avoid an exit that starts
before the user can read the result. Use continuous spatial relationships across
scenes where they clarify meaning; a different transition on every cut adds noise.

## Format adaptation

Landscape and portrait need different allocation of space. Reflow columns, move
supporting text and preserve a stable hierarchy rather than cropping a wide frame.
Use the delivery platform's actual safe-area requirements when provided; do not
invent universal social-video margins. Test the longest caption and any source
label at the final export size. Font-ready means loading finished, not that the
requested face or glyphs were used.

The original [scenes.html](../assets/html/scenes.html) is a local six-second,
two-scene example. It contains editable wording, styles and timeline sections.
Copy it and [capture.mjs](../assets/html/capture.mjs) into an admitted GSAP /
Playwright Core project. With a compatible explicit browser:

```sh
node capture.mjs still scenes.html /absolute/browser first.png 1.2
node capture.mjs still scenes.html /absolute/browser second.png 4
```

Change its `data-width` / `data-height` to `720` / `1280` for the portrait treatment.
The source applies different geometry from those values. Revise the project copy;
do not modify installed skill assets for each user task. This example has no
embedded audio/video and does not implement arbitrary responsive web capture.

## Media and clocks

For authored video/audio clips, use the existing project's media-capable timeline
when present. Check trim points, offset, playback rate, duration and media readiness
at requested times; wall-clock playback is not deterministic frame capture. Keep
audio sampling and picture timing on an explicit common timeline.

A simple local voiceover or sound bed can be trimmed/delayed/muxed through FFmpeg
after frame encoding; see the operation recipe. This does not require adopting a
second authoring framework. For interactive media timelines, transitions between
clips, or complex audio automation, use a suitable provider's actual seeking and
export contract rather than expanding the screenshot example into an editor.

## Feedback and evidence

| Requested change | Preservation boundary | Evidence |
| --- | --- | --- |
| Caption/wording | Accepted meaning and scene placement | Affected region at reading hold; surrounding reflow |
| Color/type/style | Scene order and timing | New font fit and contrast across all dependents |
| Entrance duration | Unrelated motion and final state | Before/during/after the transition and following hold |
| Scene length/order | New global timing; content remains | Neighbor transitions, shifted audio/captions and total duration |
| “This element” | Source revision and stable project locator | Match selection/annotation to current source before editing |

Map feedback to the preview actually seen. If source changed meanwhile, reconcile
the target before applying it. Preserve direct editor changes; do not replay them
as a second instruction. New feedback can cancel obsolete owned work at a coherent
boundary; never present an older export as the current result.

Choose a representative draft for unresolved direction. Keep explicit user review
checkpoints binding, while ordinary scoped repairs proceed under existing authority.
There is no mandatory review dashboard: available editor previews, inline stills
and actual video playback/temporal evidence can serve different checks.

Inspect start, transitions, holds and end, then the encoded artifact. Stills can
miss flicker or audio drift; decoded samples and duration checks alone do not
prove continuous pacing. Characterize cheap-preview/final-export differences and
repair against the delivery engine. Stop when the requested scope and checks pass,
or report the particular unmet obligation; do not chase an undefined taste score.
