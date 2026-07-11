const fs = require('fs');

function writeRoute(path, componentPath, componentName) {
  const content = `import ${componentName} from '@/${componentPath}';

export default function Page() {
  return <${componentName} />;
}
`;
  fs.writeFileSync(path, content);
}

writeRoute('apps/marketing/app/ledger/dashboard/page.tsx', 'components/ledger/dashboard/DashboardPage', 'DashboardPage');
writeRoute('apps/marketing/app/ledger/workflow/page.tsx', 'components/ledger/workflow/WorkflowPage', 'WorkflowPage');

function writeEmptyComponentAndRoute(routePath, compPath, compName) {
  const compContent = `export default function ${compName}() {
  return (
    <div className='p-8 text-white'>
      <h1 className='text-2xl font-bold'>${compName}</h1>
      <p>Bu sayfa yapım aşamasındadır.</p>
    </div>
  );
}
`;
  fs.writeFileSync('apps/marketing/' + compPath + '.tsx', compContent);
  writeRoute(routePath, compPath, compName);
}

writeEmptyComponentAndRoute('apps/marketing/app/ledger/approval/[id]/page.tsx', 'components/ledger/approval/ApprovalPage', 'ApprovalPage');
writeEmptyComponentAndRoute('apps/marketing/app/ledger/taxpayers/page.tsx', 'components/ledger/taxpayers/TaxpayersPage', 'TaxpayersPage');
writeEmptyComponentAndRoute('apps/marketing/app/ledger/analytics/page.tsx', 'components/ledger/analytics/AnalyticsPage', 'AnalyticsPage');
writeEmptyComponentAndRoute('apps/marketing/app/ledger/settings/page.tsx', 'components/ledger/settings/SettingsPage', 'SettingsPage');
