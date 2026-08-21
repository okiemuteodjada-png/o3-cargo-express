import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docPath = path.join(__dirname, 'figma_doc.json');
const raw = fs.readFileSync(docPath, 'utf8');
const doc = JSON.parse(raw);

const page = doc.document.children[0];

function findNodeByNameOrId(root, targetName) {
  if (root.name === targetName || root.id === targetName) return root;
  if (root.children) {
    for (const child of root.children) {
      const found = findNodeByNameOrId(child, targetName);
      if (found) return found;
    }
  }
  return null;
}

function dumpTreeSummary(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = `${indent}- [${node.type}] "${node.name}" (ID: ${node.id})`;
  
  if (node.absoluteBoundingBox) {
    info += ` [${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)}]`;
  }
  
  if (node.layoutMode) {
    info += ` (AutoLayout: ${node.layoutMode}, Gap: ${node.itemSpacing}, Pad: T:${node.paddingTop} R:${node.paddingRight} B:${node.paddingBottom} L:${node.paddingLeft})`;
  }

  if (node.style) {
    info += ` (Font: ${node.style.fontFamily} ${node.style.fontWeight} ${node.style.fontSize}px, LineHeight: ${node.style.lineHeightPx}px)`;
  }

  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) {
      const r = Math.round(fill.color.r * 255);
      const g = Math.round(fill.color.g * 255);
      const b = Math.round(fill.color.b * 255);
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      info += ` (Fill: ${hex})`;
    }
  }

  if (node.cornerRadius) {
    info += ` (Radius: ${node.cornerRadius}px)`;
  }

  console.log(info);

  if (node.children) {
    node.children.forEach(c => dumpTreeSummary(c, depth + 1));
  }
}

console.log('=== AUDITING FIGMA HOME FRAME (3:2) ===');
const homeFrame = page.children.find(c => c.name === 'Home');
if (homeFrame) {
  dumpTreeSummary(homeFrame);
} else {
  console.log('Home frame not found');
}
