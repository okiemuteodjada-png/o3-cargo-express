import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tokens = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma_tokens_audit.json'), 'utf8'));

// Filter unique typography scales
const fontScales = {};
tokens.typography.forEach(t => {
  const key = `${t.fontFamily}-${t.fontWeight}-${t.fontSize}px`;
  if (!fontScales[key]) {
    fontScales[key] = {
      family: t.fontFamily,
      weight: t.fontWeight,
      size: t.fontSize,
      lineHeight: t.lineHeightPx,
      count: 1,
      sampleText: t.text
    };
  } else {
    fontScales[key].count++;
  }
});

console.log('--- UNIQUE FIGMA FONT SCALES ---');
Object.values(fontScales).sort((a, b) => b.size - a.size).slice(0, 15).forEach(s => {
  console.log(`- ${s.family} ${s.weight} | Size: ${s.size}px | LineHeight: ${s.lineHeight}px | Sample: "${s.sampleText}"`);
});

// Filter unique button styles
console.log('\n--- SAMPLE FIGMA BUTTON STYLES ---');
tokens.buttons.slice(0, 10).forEach(b => {
  console.log(`- Button "${b.name}" | Box: ${b.box} | Radius: ${b.radius || 0}px | Padding: ${b.padding}`);
});
