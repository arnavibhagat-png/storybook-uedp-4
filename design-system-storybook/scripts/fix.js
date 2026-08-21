const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function save(filePath, content) {
  const full = path.join(root, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trim() + '\n', 'utf8');
  console.log('Ok:', filePath);
}

