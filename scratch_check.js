import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as lucide from 'lucide-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/g);
  for (const match of matches) {
    const icons = match[1].split(',').map(s => s.trim()).filter(Boolean);
    for (const icon of icons) {
      const iconName = icon.split(' as ')[0].trim();
      if (!lucide[iconName]) {
        console.error(`MISSING ICON in ${path.basename(filePath)}: ${iconName}`);
      }
    }
  }

  // Also check for JSX tags <IconName ... /> used in the file
  const jsxTags = content.matchAll(/<([A-Z][a-zA-Z0-9]+)\s+/g);
  const importedNames = new Set();
  const importMatches = content.matchAll(/import\s+{([^}]+)}/g);
  for (const im of importMatches) {
    im[1].split(',').forEach(i => importedNames.add(i.trim().split(' as ')[0]));
  }
  const defaultImports = content.matchAll(/import\s+([A-Z][a-zA-Z0-9]+)\s+from/g);
  for (const di of defaultImports) {
    importedNames.add(di[1]);
  }

  // Standard React builtins
  importedNames.add('React');
  importedNames.add('Fragment');

  for (const tag of jsxTags) {
    const name = tag[1];
    // check if html tag or component
    if (!importedNames.has(name) && !['div','span','p','h1','h2','h3','h4','h5','h6','a','button','img','form','input','select','option','textarea','label','ul','li','section','main','header','footer','nav','svg','path','rect','circle','polyline'].includes(name.toLowerCase())) {
      console.error(`UNRESOLVED JSX TAG in ${path.basename(filePath)}: <${name}>`);
    }
  }
}

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.jsx') || f.endsWith('.js')) checkFile(full);
  }
}

walk(srcDir);
console.log('Static JSX and icon check finished.');
