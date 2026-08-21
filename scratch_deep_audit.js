import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma_doc.json'), 'utf8'));

const audit = {
  buttons: [],
  typography: [],
  cards: [],
  bento: [],
  nav: [],
  stats: []
};

function walk(node, pathStr = '') {
  const currentPath = pathStr ? `${pathStr} > ${node.name}` : node.name;

  // Check for buttons
  if (node.name && (node.name.toLowerCase().includes('btn') || node.name.toLowerCase().includes('button') || node.name.toLowerCase().includes('cta'))) {
    audit.buttons.push({
      name: node.name,
      id: node.id,
      path: currentPath,
      box: node.absoluteBoundingBox ? `${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)}` : 'N/A',
      radius: node.cornerRadius,
      padding: node.layoutMode ? `[T:${node.paddingTop}, R:${node.paddingRight}, B:${node.paddingBottom}, L:${node.paddingLeft}]` : 'N/A',
      fills: node.fills
    });
  }

  // Check for text elements
  if (node.type === 'TEXT' && node.style) {
    audit.typography.push({
      name: node.name,
      text: node.characters ? node.characters.replace(/\n/g, ' ').substring(0, 40) : '',
      fontFamily: node.style.fontFamily,
      fontWeight: node.style.fontWeight,
      fontSize: node.style.fontSize,
      lineHeightPx: Math.round(node.style.lineHeightPx || 0),
      letterSpacing: node.style.letterSpacing || 0,
      path: currentPath
    });
  }

  // Check for cards or containers
  if (node.name && (node.name.toLowerCase().includes('card') || node.name.toLowerCase().includes('bento') || node.name.toLowerCase().includes('container'))) {
    audit.cards.push({
      name: node.name,
      id: node.id,
      box: node.absoluteBoundingBox ? `${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)}` : 'N/A',
      radius: node.cornerRadius,
      layoutMode: node.layoutMode,
      itemSpacing: node.itemSpacing,
      padding: node.layoutMode ? `[T:${node.paddingTop}, R:${node.paddingRight}, B:${node.paddingBottom}, L:${node.paddingLeft}]` : 'N/A',
      stroke: node.strokes && node.strokes.length > 0 ? node.strokes : 'None'
    });
  }

  if (node.children) {
    node.children.forEach(c => walk(c, currentPath));
  }
}

walk(doc.document);

fs.writeFileSync(path.join(__dirname, 'figma_tokens_audit.json'), JSON.stringify(audit, null, 2));
console.log(`Extracted ${audit.buttons.length} buttons, ${audit.typography.length} text styles, and ${audit.cards.length} cards.`);
