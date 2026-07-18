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
    
    // Fix missing opening quotes (e.g. from ../../modules/...)
    content = content.replace(/from\s+(\.\.[^'"]+)(['"])/g, "from '");
    
    // Fix empty dependency (e.g. from '')
    content = content.replace(/from\s+['"]['"];/g, "");

    // Also fix mismatched quotes (e.g. from '../../../components";)
    content = content.replace(/from\s+'([^']+)";/g, "from '';");
    content = content.replace(/from\s+"([^"]+)';/g, "from \"\";");
    
    // Fix missing ending quotes if any
    content = content.replace(/from\s+(['"])([^'"]+)\s*$/gm, "from ");

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
