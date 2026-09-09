// Original editable examples. Requires PptxGenJS in the destination project.
import pptxgen from 'pptxgenjs';
import {readFile, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export function text(slide, value, box, style, size, color = style.foreground) {
  slide.addText(value, {
    x: box[0], y: box[1], w: box[2], h: box[3],
    fontFace: style.font, fontSize: size, color,
    margin: 0, breakLine: false, valign: 'top',
  });
}

export function base(slide, style, number) {
  slide.background = {color: style.background};
  slide.addShape('rect', {x: 0.7, y: 0.66, w: 0.7, h: 0.07,
    line: {color: style.accent}, fill: {color: style.accent}});
  text(slide, String(number).padStart(2, '0'), [12, 6.9, 0.6, 0.3], style, 12, style.muted);
}

export function titleSlide(slide, content, style) {
  base(slide, style, 1);
  text(slide, 'A COMPOSITION STUDY', [0.7, 1.25, 10, 0.4], style, 14, style.accent);
  text(slide, content.title, [0.7, 2, 10.9, 2], style, 48);
  text(slide, content.subtitle, [0.75, 5.1, 11, 0.7], style, 22, style.muted);
}

export function comparisonSlide(slide, content, style) {
  base(slide, style, 2);
  text(slide, content.comparison_title, [0.7, 1.1, 12, 1.15], style, 32);
  for (const [column, x] of [[content.left, 0.7], [content.right, 6.9]]) {
    slide.addShape('rect', {x, y: 2.7, w: 5.7, h: 3.4,
      line: {color: style.panel}, fill: {color: style.panel}});
    text(slide, column.heading, [x + 0.35, 3.05, 5, 0.7], style, 26, style.accent);
    text(slide, column.body, [x + 0.35, 4, 5, 1.65], style, 21);
  }
}

export function closingSlide(slide, content, style) {
  base(slide, style, 3);
  text(slide, content.closing_title, [0.7, 1.6, 11.6, 2.3], style, 44);
  text(slide, content.closing_body, [0.7, 4.8, 10.5, 1.15], style, 21, style.muted);
}

export function createDeck(content, style) {
  const deck = new pptxgen();
  deck.layout = 'LAYOUT_WIDE';
  deck.author = 'Editable composition example';
  deck.subject = 'Synthetic sample content';
  deck.title = content.title;
  for (const layout of [titleSlide, comparisonSlide, closingSlide]) {
    layout(deck.addSlide(), content, style);
  }
  return deck;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [brief, styles, name, output] = process.argv.slice(2);
  if (!output || process.argv.length !== 6) {
    throw new Error('usage: node native-js.mjs brief.json styles.json style output.pptx');
  }
  const content = JSON.parse(await readFile(brief, 'utf8'));
  const style = JSON.parse(await readFile(styles, 'utf8'))[name];
  if (!style) throw new Error(`Unknown style: ${name}`);
  const bytes = await createDeck(content, style).write({outputType: 'nodebuffer', compression: true});
  await writeFile(output, bytes, {flag: 'wx'});
  console.log(JSON.stringify({output, renderer: 'not_invoked'}));
}
