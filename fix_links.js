const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

walkDir('apps/ledger', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/'\/ledger\//g, "'/")
            .replace(/"\/ledger\//g, '"/')
            .replace(/`\/ledger\//g, '`/')
            // also replace exactly '/ledger' or "/ledger" with '/'
            .replace(/'\/ledger'/g, "'/'")
            .replace(/"\/ledger"/g, '"/"');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
});
