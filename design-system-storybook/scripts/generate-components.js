const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

function write(relPath, content) {
  const full = path.join(root, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trim() + '\n', 'utf8');
  console.log('Saved:', relPath);
}

global.write = write;
