// Explicit local integration: preinstalled dependencies and an admitted browser.
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createRequire} from 'node:module';
import {promisify} from 'node:util';
import {execFile} from 'node:child_process';
import {mkdtemp, mkdir, copyFile, readFile, writeFile, readdir, rm} from 'node:fs/promises';
import {resolve, join, relative, isAbsolute} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const project = process.env.DOTSKILL_TEST_JS_PROJECT;
const browserPath = process.env.DOTSKILL_TEST_BROWSER;
const enabled = Boolean(project && browserPath);
const assets = fileURLToPath(new URL('../assets/html/', import.meta.url));
const run = promisify(execFile);

async function fixture(t) {
  const parent = resolve(project);
  const area = await mkdtemp(join(parent, 'visual-composition-'));
  t.after(async () => {
    const child = relative(parent, area);
    assert(!isAbsolute(child) && child && !child.startsWith('..'));
    await rm(area, {recursive: true});
  });
  for (const name of ['index.html', 'style.css', 'motion.js', 'capture.mjs']) {
    await copyFile(join(assets, name), join(area, name));
  }
  await mkdir(join(area, 'node_modules/gsap/dist'), {recursive: true});
  await copyFile(join(parent, 'node_modules/gsap/dist/gsap.min.js'), join(area, 'node_modules/gsap/dist/gsap.min.js'));
  return area;
}

async function capture(area, mode, output, value) {
  return run(process.execPath, ['capture.mjs', mode, 'index.html', browserPath, output, String(value)],
    {cwd: area, timeout: 45000, maxBuffer: 65536});
}

test('stills and frames work independently and existing output is preserved', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const still = await capture(area, 'still', 'preview.png', 2.8);
  assert.equal(JSON.parse(still.stdout).encoder, 'not_invoked');
  const before = await readFile(join(area, 'preview.png'));
  await assert.rejects(capture(area, 'still', 'preview.png', 1.2));
  assert.deepEqual(await readFile(join(area, 'preview.png')), before);
  const sequence = await capture(area, 'frames', 'frames', 1);
  assert.equal(JSON.parse(sequence.stdout).frames, 5);
  assert.deepEqual((await readdir(join(area, 'frames'))).sort(),
    Array.from({length: 5}, (_, i) => `frame_${String(i).padStart(6, '0')}.png`));
});

test('seeking is repeatable and a style revision preserves timing and content', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const {chromium} = createRequire(join(resolve(project), 'package.json'))('playwright-core');
  const browser = await chromium.launch({executablePath: browserPath, headless: true, timeout: 20000});
  try {
    const page = await browser.newPage({viewport: {width: 1280, height: 720}});
    await page.goto(pathToFileURL(join(area, 'index.html')).href);
    await page.evaluate(() => document.fonts.ready);
    const seek = seconds => page.evaluate(time => { window.__timelines.root.seek(time, true); }, seconds);
    await seek(3.5);
    const original = await page.screenshot();
    const content = await page.locator('main').textContent();
    const duration = await page.evaluate(() => window.__timelines.root.duration());
    await seek(1.2);
    await seek(3.5);
    assert.deepEqual(await page.screenshot(), original);
    const motion = await readFile(join(area, 'motion.js'));
    const style = await readFile(join(area, 'style.css'), 'utf8');
    await writeFile(join(area, 'style.css'), style.replace('#f4be62', '#79d4c7'));
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await seek(3.5);
    assert.notDeepEqual(await page.screenshot(), original);
    assert.equal(await page.locator('main').textContent(), content);
    assert.equal(await page.evaluate(() => window.__timelines.root.duration()), duration);
    assert.deepEqual(await readFile(join(area, 'motion.js')), motion);
  } finally {
    await browser.close();
  }
});

test('an incompatible source produces no claimed capture', {skip: !enabled}, async t => {
  const area = await fixture(t);
  await writeFile(join(area, 'index.html'), '<!doctype html><p>No timeline contract</p>');
  await assert.rejects(capture(area, 'still', 'preview.png', 1));
  assert(!(await readdir(area)).includes('preview.png'));
});

test('portrait frames use declared dimensions and scenes remain seekable', {skip: !enabled}, async t => {
  const area = await fixture(t);
  await copyFile(fileURLToPath(new URL('fixtures/portrait.html', import.meta.url)), join(area, 'index.html'));
  const first = JSON.parse((await capture(area, 'still', 'first.png', 1)).stdout);
  assert.deepEqual([first.width, first.height], [720, 1280]);
  const bytes = await readFile(join(area, 'first.png'));
  assert.deepEqual([bytes.readUInt32BE(16), bytes.readUInt32BE(20)], [720, 1280]);
  await capture(area, 'still', 'second.png', 4);
  assert.notDeepEqual(await readFile(join(area, 'second.png')), bytes);
});

test('invalid dimensions and remote assets fail before creating output', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const html = await readFile(join(area, 'index.html'), 'utf8');
  for (const source of [html.replace('data-width="1280"', 'data-width="-1"'),
    html.replace('</head>', '<link rel="stylesheet" href="https://example.invalid/remote.css"></head>')]) {
    await writeFile(join(area, 'index.html'), source);
    await assert.rejects(capture(area, 'still', 'failed.png', 1));
    assert(!(await readdir(area)).includes('failed.png'));
  }
});

test('font readiness is bounded and leaves no claimed output', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const html = await readFile(join(area, 'index.html'), 'utf8');
  await writeFile(join(area, 'index.html'), html.replace('</head>',
    '<script>Object.defineProperty(document.fonts, "status", {get: () => "loading"});</script></head>'));
  const started = performance.now();
  await assert.rejects(capture(area, 'still', 'failed.png', 1), error => {
    assert.match(error.stderr, /Timeout|timeout/);
    return true;
  });
  assert(performance.now() - started < 25000);
  assert(!(await readdir(area)).includes('failed.png'));
});

test('missing browser and unusable destination preserve source and close the operation', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const original = await readFile(join(area, 'index.html'));
  await assert.rejects(run(process.execPath,
    ['capture.mjs', 'still', 'index.html', join(area, 'absent-browser'), 'failed.png', '1'],
    {cwd: area, timeout: 10000}));
  await assert.rejects(capture(area, 'still', join('absent-parent', 'failed.png'), 1));
  assert.deepEqual(await readFile(join(area, 'index.html')), original);
  assert(!(await readdir(area)).includes('failed.png'));
});

test('a scoped timing edit changes one transition and preserves the final state', {skip: !enabled}, async t => {
  const area = await fixture(t);
  const {chromium} = createRequire(join(resolve(project), 'package.json'))('playwright-core');
  const browser = await chromium.launch({executablePath: browserPath, headless: true, timeout: 20000});
  try {
    const page = await browser.newPage({viewport: {width: 1280, height: 720}});
    await page.goto(pathToFileURL(join(area, 'index.html')).href);
    await page.evaluate(() => document.fonts.ready);
    const seek = seconds => page.evaluate(time => { window.__timelines.root.seek(time, true); }, seconds);
    await seek(1.35);
    const opacity = await page.locator('#render').evaluate(el => Number(getComputedStyle(el).opacity));
    assert(opacity > 0);
    const content = await page.locator('main').textContent();
    const style = await readFile(join(area, 'style.css'));
    await seek(4);
    const finalFrame = await page.screenshot();
    const motion = await readFile(join(area, 'motion.js'), 'utf8');
    assert(motion.includes("reveal('#render'), 1.1"));
    await writeFile(join(area, 'motion.js'), motion.replace("reveal('#render'), 1.1", "reveal('#render'), 2.1"));
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await seek(1.35);
    assert.equal(await page.locator('#render').evaluate(el => Number(getComputedStyle(el).opacity)), 0);
    assert.equal(await page.locator('main').textContent(), content);
    assert.deepEqual(await readFile(join(area, 'style.css')), style);
    assert.equal(await page.evaluate(() => window.__timelines.root.duration()), 5);
    await seek(4);
    assert.deepEqual(await page.screenshot(), finalFrame);
  } finally {
    await browser.close();
  }
});
