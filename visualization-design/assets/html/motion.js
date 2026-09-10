// Original motion primitives. Each function returns an independently seekable timeline.
function reveal(target, duration = 0.65) {
  return gsap.timeline().fromTo(target,
    {y: 24, opacity: 0},
    {y: 0, opacity: 1, duration, ease: 'power2.out'});
}

const timeline = gsap.timeline({paused: true});
timeline.add(reveal('h1'), 0);
timeline.add(reveal('#author'), 0.65);
timeline.add(reveal('#render'), 1.1);
timeline.add(reveal('#inspect'), 1.55);
timeline.add(reveal('.closing'), 2.5);
// Extend the final hold without depending on wall-clock playback.
timeline.to({}, {duration: 1.85}, 3.15);
window.__timelines = {...window.__timelines, root: timeline};
timeline.seek(0);
