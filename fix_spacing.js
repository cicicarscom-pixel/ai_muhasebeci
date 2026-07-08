const fs = require('fs');
let code = fs.readFileSync('apps/marketing/app/ledger/page.tsx', 'utf-8');

const mappings = {
  'gap-md': 'gap-4', 'gap-lg': 'gap-6', 'gap-xl': 'gap-10', 'gap-sm': 'gap-2', 'gap-xs': 'gap-1',
  'p-md': 'p-4', 'p-lg': 'p-6', 'p-xl': 'p-10', 'p-sm': 'p-2',
  'px-md': 'px-4', 'px-lg': 'px-6', 'px-margin-desktop': 'px-8', 'px-margin-mobile': 'px-4',
  'py-md': 'py-4', 'py-lg': 'py-6', 'py-xl': 'py-10', 'py-sm': 'py-2',
  'mb-md': 'mb-4', 'mb-lg': 'mb-6', 'mb-xl': 'mb-10', 'mb-sm': 'mb-2', 'mb-xs': 'mb-1',
  'mt-md': 'mt-4', 'mt-lg': 'mt-6', 'mt-xl': 'mt-10', 'mt-sm': 'mt-2',
  'pb-sm': 'pb-2', 'pt-lg': 'pt-6', 'space-y-xl': 'space-y-10', 'space-y-sm': 'space-y-2',
  'pl-lg': 'pl-6'
};

for (const [key, value] of Object.entries(mappings)) {
  const regex = new RegExp(`(?<=[\\s"'\`])${key}(?=[\\s"'\`])`, 'g');
  code = code.replace(regex, value);
}

fs.writeFileSync('apps/marketing/app/ledger/page.tsx', code);
console.log('Fixed spacings.');
