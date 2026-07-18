const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = {
  '"../../../../components/': '"../../../components/',
  '"../../../components/': '"../../components/',
  '"../../components/': '"../components/',

  '"../../../../modules/': '"../../../modules/',
  '"../../../modules/': '"../../modules/',
  '"../../modules/': '"../modules/',

  '"../../../../utils/': '"../../../utils/',
  '"../../../utils/': '"../../utils/',
  '"../../utils/': '"../utils/',

  "'../../../../components/": "'../../../components/",
  "'../../../components/": "'../../components/",
  "'../../components/": "'../components/",

  "'../../../../modules/": "'../../../modules/",
  "'../../../modules/": "'../../modules/",
  "'../../modules/": "'../modules/",

  "'../../../../utils/": "'../../../utils/",
  "'../../../utils/": "'../../utils/",
  "'../../utils/": "'../utils/",

  "'../../ledger.css'": "'../ledger.css'",
  '"../../ledger.css"': '"../ledger.css"'
};

const escapeRegExp = (string) => string.replace(/[.*+?^$]|\{\}|\(\)|\[\]|\\/g, '\\$&');
const keys = Object.keys(replacements);
const pattern = new RegExp(keys.map(escapeRegExp).join('|'), 'g');

walkDir('apps/ledger', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(pattern, (matched) => replacements[matched]);

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
