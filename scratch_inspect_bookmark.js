import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma_doc.json'), 'utf8'));
const canvas = doc.document.children[0];
const home = canvas.children.find(c => c.name === 'Home');

function findNode(node, name) {
  if (node.name && node.name.includes(name)) {
    console.log(`FOUND NODE: "${node.name}" [Type: ${node.type}, ID: ${node.id}]`);
    if (node.children) {
      node.children.forEach(c => {
        console.log(`  - Child: "${c.name}" [${c.type}, ID: ${c.id}]`);
        if (c.children) {
          c.children.forEach(g => {
            console.log(`     * Grandchild: "${g.name}" [${g.type}, ID: ${g.id}]`);
          });
        }
      });
    }
  }
  if (node.children) {
    node.children.forEach(c => findNode(c, name));
  }
}

findNode(home, 'Services');
findNode(home, '3:115');
