import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = JSON.parse(fs.readFileSync(path.join(__dirname, 'figma_doc.json'), 'utf8'));
const canvas = doc.document.children[0];

function analyzeFrame(frameName) {
  const frame = canvas.children.find(c => c.name === frameName);
  if (!frame) return { name: frameName, error: 'Not found' };

  console.log(`\n==================================================`);
  console.log(`PAGE / FRAME: "${frame.name}" [ID: ${frame.id}] (${Math.round(frame.absoluteBoundingBox.width)}x${Math.round(frame.absoluteBoundingBox.height)})`);
  console.log(`==================================================`);

  if (!frame.children) return;

  frame.children.forEach(section => {
    const box = section.absoluteBoundingBox ? `${Math.round(section.absoluteBoundingBox.width)}x${Math.round(section.absoluteBoundingBox.height)}` : 'N/A';
    console.log(`\n  SECTION: "${section.name}" [Type: ${section.type}, ID: ${section.id}, Box: ${box}]`);
    
    if (section.layoutMode) {
      console.log(`    AutoLayout: Mode=${section.layoutMode}, ItemSpacing=${section.itemSpacing}, Padding=[T:${section.paddingTop}, R:${section.paddingRight}, B:${section.paddingBottom}, L:${section.paddingLeft}]`);
    }

    if (section.children) {
      section.children.forEach(child => {
        const cBox = child.absoluteBoundingBox ? `${Math.round(child.absoluteBoundingBox.width)}x${Math.round(child.absoluteBoundingBox.height)}` : 'N/A';
        let detail = `      - "${child.name}" [${child.type}, ID: ${child.id}, Box: ${cBox}]`;
        
        if (child.type === 'TEXT' && child.characters) {
          detail += ` -> Text: "${child.characters.replace(/\n/g, ' ')}"`;
          if (child.style) {
            detail += ` (${child.style.fontFamily} ${child.style.fontWeight} ${child.style.fontSize}px)`;
          }
        }
        
        if (child.cornerRadius) {
          detail += ` [Radius: ${child.cornerRadius}px]`;
        }

        console.log(detail);

        if (child.children) {
          child.children.forEach(grand => {
            let gDetail = `          * "${grand.name}" [${grand.type}, ID: ${grand.id}]`;
            if (grand.type === 'TEXT' && grand.characters) {
              gDetail += ` -> Text: "${grand.characters.replace(/\n/g, ' ')}"`;
              if (grand.style) {
                gDetail += ` (${grand.style.fontFamily} ${grand.style.fontWeight} ${grand.style.fontSize}px)`;
              }
            }
            console.log(gDetail);
          });
        }
      });
    }
  });
}

['Home', 'Services', 'How it works', 'Testimonials', 'Contact', 'sales'].forEach(f => analyzeFrame(f));
