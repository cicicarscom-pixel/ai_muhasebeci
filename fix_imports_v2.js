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
    
    // Fix mismatched quotes created by the previous script
    content = content.replace(/from\s+'([^']+)";/g, "from '';");
    content = content.replace(/from\s+"([^"]+)';/g, "from \"\";");
    content = content.replace(/from\s+'([^'"]+)"\s*$/gm, "from ''");
    
    // Fix modules imports which were missed
    content = content.replace(/from\s+(['"])\.\.\/\.\.\/\.\.\/\.\.\/modules\//g, "from ../../../modules/");
    content = content.replace(/from\s+(['"])\.\.\/\.\.\/\.\.\/modules\//g, "from ../../modules/");
    content = content.replace(/from\s+(['"])\.\.\/\.\.\/modules\//g, "from ../modules/");

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
