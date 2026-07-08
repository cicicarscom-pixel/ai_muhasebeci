const fs = require('fs');
let code = fs.readFileSync('apps/marketing/app/ledger/page.tsx', 'utf-8');

const mappings = {
  'md:gap-md': 'md:gap-4', 'md:gap-lg': 'md:gap-6', 'md:gap-xl': 'md:gap-10', 'md:gap-sm': 'md:gap-2', 'md:gap-xs': 'md:gap-1',
  'md:p-md': 'md:p-4', 'md:p-lg': 'md:p-6', 'md:p-xl': 'md:p-10', 'md:p-sm': 'md:p-2',
  'md:px-md': 'md:px-4', 'md:px-lg': 'md:px-6', 'md:px-margin-desktop': 'md:px-8', 'md:px-margin-mobile': 'md:px-4',
  'md:py-md': 'md:py-4', 'md:py-lg': 'md:py-6', 'md:py-xl': 'md:py-10', 'md:py-sm': 'md:py-2',
  'px-xl': 'px-10', 'py-lg': 'py-6', 'gap-sm': 'gap-2', 'gap-lg': 'gap-6'
};

for (const [key, value] of Object.entries(mappings)) {
  const regex = new RegExp(`(?<=[\\s"'\`])${key}(?=[\\s"'\`])`, 'g');
  code = code.replace(regex, value);
}

fs.writeFileSync('apps/marketing/app/ledger/page.tsx', code);
console.log('Fixed md prefixes.');
