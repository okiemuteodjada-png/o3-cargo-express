import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma_doc.json'), 'utf8'));
const canvas = doc.document.children[0];

let report = `# FIGMA DESIGN AUDIT REPORT — O3 CARGO EXPRESS\n\n`;
report += `**Figma File:** ${doc.name} (Last modified: ${doc.lastModified})\n\n`;

function inspectElement(node, depth = 0) {
  let lines = [];
  const indent = '  '.repeat(depth);
  let desc = `${indent}- **${node.name}** (\`${node.type}\`, ID: \`${node.id}\`)`;
  
  if (node.absoluteBoundingBox) {
    desc += ` — \`${Math.round(node.absoluteBoundingBox.width)}px × ${Math.round(node.absoluteBoundingBox.height)}px\``;
  }
  if (node.cornerRadius) {
    desc += ` | radius: \`${node.cornerRadius}px\``;
  }
  if (node.layoutMode) {
    desc += ` | AutoLayout: \`${node.layoutMode}\` (gap: \`${node.itemSpacing}px\`, pad: \`[T:${node.paddingTop}, R:${node.paddingRight}, B:${node.paddingBottom}, L:${node.paddingLeft}]\`)`;
  }
  if (node.style) {
    desc += ` | Font: \`${node.style.fontFamily} ${node.style.fontWeight} ${node.style.fontSize}px\` (lh: \`${Math.round(node.style.lineHeightPx || 0)}px\`)`;
  }
  if (node.characters) {
    const textSnippet = node.characters.replace(/\n/g, ' ').substring(0, 60);
    desc += ` | Content: "${textSnippet}"`;
  }

  lines.push(desc);

  if (node.children && depth < 3) {
    node.children.forEach(c => {
      lines.push(...inspectElement(c, depth + 1));
    });
  }

  return lines;
}

['Home', 'Services', 'How it works', 'Testimonials', 'Contact', 'sales'].forEach(frameName => {
  const frame = canvas.children.find(c => c.name === frameName);
  if (frame) {
    report += `## Page Frame: ${frame.name} (\`ID: ${frame.id}\`, \`${Math.round(frame.absoluteBoundingBox.width)}px × ${Math.round(frame.absoluteBoundingBox.height)}px\`)\n\n`;
    if (frame.children) {
      frame.children.forEach(sec => {
        report += inspectElement(sec, 0).join('\n') + '\n\n';
      });
    }
  }
});

fs.writeFileSync(path.join(__dirname, 'figma_audit_report.md'), report);
console.log('Figma Audit Report written to figma_audit_report.md');
