const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('apps/ledger', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Decrease all relative dot counts by 1 since we moved up one level from marketing/app/ledger to ledger/app
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\/components\//g, "from '../../../components/");
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/components\//g, "from '../../components/");
    content = content.replace(/from\s+['"]\.\.\/\.\.\/components\//g, "from '../components/");
    
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/\.\.\/utils\//g, "from '../../../utils/");
    content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/utils\//g, "from '../../utils/");
    content = content.replace(/from\s+['"]\.\.\/\.\.\/utils\//g, "from '../utils/");

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed imports in', filePath);
    }
  }
});
