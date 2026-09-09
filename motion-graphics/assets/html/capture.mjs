// Example capture for a local, trusted HTML/GSAP composition. No authoring or encoding.
import {chromium} from 'playwright-core';
import {mkdir, writeFile, access} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {pathToFileURL} from 'node:url';

const [mode, source, executable, output, value] = process.argv.slice(2);
if (!['still', 'frames'].includes(mode) || !value || process.argv.length !== 7) {
  throw new Error('usage: node capture.mjs still|frames source.html browser-executable output seconds|fps');
}
const amount = Number(value);
if (!Number.isFinite(amount) || amount < 0 ||
    (mode === 'frames' && (!Number.isInteger(amount) || amount < 1 || amount > 60))) {
  throw new Error('Invalid time or frame rate');
}
await access(source);
await access(executable);
const errors = [];
const started = performance.now();
const browser = await chromium.launch({executablePath: resolve(executable), headless: true, timeout: 20000});
let expired = false;
const deadline = setTimeout(() => {
  expired = true;
  void browser.close().catch(() => {});
}, Math.max(1, 120000 - (performance.now() - started)));
try {
  const context = await browser.newContext({serviceWorkers: 'block'});
  await context.route('**/*', route => {
    if (/^https?:/i.test(route.request().url())) {
      errors.push('Remote resource requested');
      return route.abort();
    }
    return route.continue();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  page.on('pageerror', error => errors.push(error.message));
  page.on('requestfailed', request => errors.push(`Resource failed: ${request.url()}`));
  await page.goto(pathToFileURL(resolve(source)).href, {waitUntil: 'load', timeout: 10000});
  const spec = await page.evaluate(() => {
    const root = document.querySelector('[data-composition-id]');
    return root && {
      id: root.dataset.compositionId, duration: Number(root.dataset.duration),
      width: Number(root.dataset.width), height: Number(root.dataset.height),
      seekable: typeof window.__timelines?.[root.dataset.compositionId]?.seek === 'function',
    };
  });
  if (!spec?.seekable || !Number.isFinite(spec.duration) || spec.duration <= 0 || spec.duration > 30 ||
      !Number.isInteger(spec.width) || !Number.isInteger(spec.height) ||
      spec.width < 1 || spec.height < 1 || spec.width > 4096 || spec.height > 4096 ||
      spec.width * spec.height > 3840 * 2160 || errors.length) {
    throw new Error(`Requires a loaded, seekable composition: positive integer dimensions, at most 4096 per side, 8,294,400 pixels and 30 seconds. ${errors.join('; ')}`);
  }
  await page.setViewportSize({width: spec.width, height: spec.height});
  await page.waitForFunction(() => document.fonts.status === 'loaded', null, {timeout: 10000});
  const count = mode === 'still' ? 1 : Math.ceil(spec.duration * amount);
  if (count > 600 || (mode === 'still' && amount >= spec.duration)) {
    throw new Error('Requested scope exceeds this example (600 frames or time outside composition)');
  }
  // Refuse existing output. On failure, partial frames remain at this exact path for recovery.
  if (mode === 'frames') await mkdir(output);
  for (let frame = 0; frame < count; frame++) {
    if (performance.now() - started > 120000) throw new Error('Capture exceeded 120 seconds');
    const seconds = mode === 'still' ? amount : frame / amount;
    await page.evaluate(({id, seconds}) => {
      window.__timelines[id].seek(seconds, true);
    }, {id: spec.id, seconds});
    const bytes = await page.screenshot({type: 'png', animations: 'allow'});
    if (errors.length) throw new Error(errors.join('; '));
    const destination = mode === 'still' ? output : join(output, `frame_${String(frame).padStart(6, '0')}.png`);
    await writeFile(destination, bytes, {flag: 'wx'});
  }
  console.log(JSON.stringify({source: resolve(source), output: resolve(output), frames: count,
    seconds: spec.duration, width: spec.width, height: spec.height, browser: browser.version(), encoder: 'not_invoked'}));
} catch (error) {
  if (expired) throw new Error('Capture exceeded 120 seconds', {cause: error});
  throw error;
} finally {
  clearTimeout(deadline);
  await browser.close();
}
