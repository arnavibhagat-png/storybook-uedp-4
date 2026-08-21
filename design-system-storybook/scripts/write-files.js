const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

const files = require('./files_data.json');
for (const [relPath, base64Content] of Object.entries(files)) {
  const fullPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, Buffer.from(base64Content, 'base64').convertToString ? Buffer.from(base64Content, 'base64').toString('utf8') : Buffer.from(base64Content, 'base64'), 'utf8');
  console.log('Written:', relPath);
}
