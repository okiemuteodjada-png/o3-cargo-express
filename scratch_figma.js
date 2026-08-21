import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env manually
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, v] = line.split('=');
  if (k && v) env[k.trim()] = v.trim();
});

const token = env.FIGMA_PERSONAL_ACCESS_TOKEN;
const fileKey = env.FIGMA_FILE_KEY;

console.log('Testing connection to Figma file:', fileKey);

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${fileKey}`,
  method: 'GET',
  headers: {
    'X-Figma-Token': token
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP STATUS:', res.statusCode);
    if (res.statusCode === 200) {
      const json = JSON.parse(data);
      console.log('Figma File Name:', json.name);
      console.log('Last Modified:', json.lastModified);
      console.log('Document Pages Count:', json.document.children.length);
      json.document.children.forEach(page => {
        console.log(`- Page: "${page.name}" (ID: ${page.id}) with ${page.children ? page.children.length : 0} frames`);
        if (page.children) {
          page.children.forEach(frame => {
            console.log(`   * Frame/Node: "${frame.name}" (Type: ${frame.type}, ID: ${frame.id}, Box: ${frame.absoluteBoundingBox ? `${frame.absoluteBoundingBox.width}x${frame.absoluteBoundingBox.height}` : 'N/A'})`);
          });
        }
      });

      // Save raw file structure to scratch for deep inspection
      fs.writeFileSync(path.join(__dirname, 'figma_doc.json'), JSON.stringify(json, null, 2));
      console.log('Saved full Figma document structure to figma_doc.json');
    } else {
      console.error('Figma API Response Error:', data);
    }
  });
});

req.on('error', err => {
  console.error('Request Error:', err.message);
});

req.end();
